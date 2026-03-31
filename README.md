# TeachAI — AI Teacher Assistant Web App

A full-stack production-ready teacher assistant with marks management, OCR, voice input, and AI question paper generation.

---

## Project Structure

```
teachai/
├── app.py                  ← Flask backend (all routes & API)
├── requirements.txt        ← Python dependencies
├── teachai.db              ← SQLite database (auto-created)
├── uploads/                ← Temp uploaded files
├── outputs/                ← Generated files (Excel, PDF, DOCX)
├── templates/
│   ├── base.html           ← Sidebar, topbar, layout
│   ├── dashboard.html      ← Dashboard page
│   ├── marks.html          ← Marks manager page
│   ├── paper_generator.html← Paper generator page
│   └── history.html        ← Download history page
└── static/
    ├── css/style.css       ← Complete design system
    └── js/script.js        ← Shared JS utilities
```

---

## Setup (Windows / Linux / Mac)

### 1. Install Python 3.9+
Download from https://python.org

### 2. Create virtual environment (recommended)
```bash
cd teachai
python -m venv venv

# Windows:
venv\Scripts\activate

# Linux/Mac:
source venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. (Optional) Install Tesseract OCR for image upload
- **Windows**: Download from https://github.com/UB-Mannheim/tesseract/wiki
- **Linux**: `sudo apt install tesseract-ocr`
- **Mac**: `brew install tesseract`

### 5. Run the app
```bash
python app.py
```

### 6. Open in browser
```
http://localhost:5000
```

---

## Features

| Module | Status |
|--------|--------|
| Dashboard with stats | ✅ |
| Student import (Excel) | ✅ |
| Marks upload (Excel) | ✅ |
| Voice marks entry | ✅ |
| OCR marks from image | ✅ (requires Tesseract) |
| Manual marks entry | ✅ |
| Fuzzy name matching | ✅ |
| Marks report with grades | ✅ |
| Export marks to Excel | ✅ |
| Question paper generator | ✅ |
| DOCX output | ✅ |
| PDF output | ✅ |
| AI question suggestions | ✅ |
| Hindi Unicode support | ✅ |
| File history & download | ✅ |
| Mobile-responsive UI | ✅ |

---

## Excel Format (Student Import)
| Name | Roll Number | Class |
|------|------------|-------|
| Rahul Kumar | 101 | 10A |

## Excel Format (Marks Import)
| Name | Marks |
|------|-------|
| Rahul Kumar | 78 |

---

## Voice Input Format
Speak: `"Rahul 78 Aman 85 Priya 92"`

---

## Tech Stack
- **Backend**: Flask (Python)
- **Database**: SQLite
- **Frontend**: HTML5, CSS3, Vanilla JS
- **Fonts**: Sora (Google Fonts)
- **OCR**: Tesseract via pytesseract
- **Voice**: Web Speech API (Chrome recommended)
- **Docs**: python-docx + ReportLab
- **Data**: pandas + openpyxl

---

Built with ❤️ for Indian teachers.
