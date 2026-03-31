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


