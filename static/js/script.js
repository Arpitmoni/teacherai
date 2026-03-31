/**
 * TeachAI — Main JavaScript
 * Shared utilities: Toast, Loader, Modal, Sidebar, Clock
 */

// ── GLOBAL LOADER ──────────────────────────────
const loaderEl = (() => {
  const el = document.createElement('div');
  el.className = 'loader-overlay';
  el.innerHTML = `<div class="spinner"></div><p id="loaderMsg">Please wait...</p>`;
  document.body.appendChild(el);
  return el;
})();

function showLoader(msg = 'Please wait...') {
  document.getElementById('loaderMsg').textContent = msg;
  loaderEl.classList.add('active');
}
function hideLoader() {
  loaderEl.classList.remove('active');
}

// ── TOAST NOTIFICATIONS ────────────────────────
function showToast(msg, type = 'info', duration = 3500) {
  const container = document.getElementById('toastContainer');
  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warn: 'fa-exclamation-triangle', info: 'fa-info-circle' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ── MODAL ──────────────────────────────────────
function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('open');
  }
});

// Escape key closes modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
  }
});

// ── SIDEBAR TOGGLE ─────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebarOverlay')?.classList.remove('open');
}

// ── TOPBAR CLOCK ───────────────────────────────
function updateClock() {
  const el = document.getElementById('topbarTime');
  if (el) {
    const now = new Date();
    el.textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
}
updateClock();
setInterval(updateClock, 1000);

// ── STAT CARD COUNTER ANIMATION ────────────────
function animateCounters() {
  document.querySelectorAll('.stat-value[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target) || 0;
    if (target === 0) return;
    let start = 0;
    const duration = 800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      el.textContent = start;
      if (start >= target) clearInterval(timer);
    }, 16);
  });
}

// ── PAGE INIT ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  animateCounters();

  // Animate cards on load
  const cards = document.querySelectorAll('.stat-card, .quick-action-card, .card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'none';
    }, i * 40);
  });
});

// ── DRAG & DROP HELPER ─────────────────────────
function handleDrop(e, inputId) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file) {
    const input = document.getElementById(inputId);
    if (input) {
      const dt = new DataTransfer();
      dt.items.add(file);
      input.files = dt.files;
      input.dispatchEvent(new Event('change'));
    }
  }
}

// ── FETCH WITH LOADING ─────────────────────────
async function fetchWithLoader(url, options = {}, loaderMsg = 'Loading...') {
  showLoader(loaderMsg);
  try {
    const res = await fetch(url, options);
    hideLoader();
    return res;
  } catch (err) {
    hideLoader();
    showToast('Network error: ' + err.message, 'error');
    throw err;
  }
}

// ── CONFIRM DELETE HELPER ──────────────────────
function confirmDelete(msg = 'Are you sure you want to delete this?') {
  return window.confirm(msg);
}

// ── FORMAT DATE ────────────────────────────────
function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ── COPY TO CLIPBOARD ──────────────────────────
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('Copied to clipboard!', 'success', 1500);
  } catch {
    showToast('Copy failed', 'error');
  }
}

// ── GLOBAL ERROR HANDLER ───────────────────────
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});
