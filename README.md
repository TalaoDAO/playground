# Talao Wallet → EUDI Wallet Playground Guide (Flask)

Static-style documentation website (served by Flask) to explain:
1) how to download the **ETH Talao Identity Wallet** (talao.io), and  
2) how to configure/customize it for use in the **EUDI Wallet Playground** (playground.france-identite.gouv.fr).

This repo is intentionally designed to be **easy to update** with your final text and screenshots later.

## Quick start

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Then open: http://127.0.0.1:5000

## Structure

```
.
├─ app.py
├─ requirements.txt
├─ templates/
│  ├─ base.html
│  ├─ index.html
│  ├─ download.html
│  ├─ configure.html
│  ├─ playground.html
│  ├─ faq.html
│  └─ partials/
│     ├─ hero.html
│     └─ step_card.html
└─ static/
   ├─ css/styles.css
   ├─ js/main.js
   └─ img/
      ├─ logo-mark.svg
      ├─ screenshot-placeholder-1.svg
      ├─ screenshot-placeholder-2.svg
      └─ ...
```

## Adding your content later

- Replace placeholder copy in `templates/*.html`
- Replace placeholder images in `static/img/` with your screenshots:
  - keep the same filenames (easy drop-in), or update the filenames in the templates.

## Deploying

Because it's a Flask app with static files, you can deploy on:
- any container platform (Docker)
- Heroku-like platforms
- a VM with `gunicorn`

Example (optional) command:

```bash
gunicorn -w 2 -b 0.0.0.0:5000 app:app
```

## Notes

- This is a **documentation** site: it uses Flask for routing, but the pages are static HTML + minimal JS.
- Design uses a **clean, branded** feel (gradient, rounded cards, strong typography) without copying talao.io source.
