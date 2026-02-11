# Talao Wallet — EUDI Playground Guide (Flask)

A light, Talao-inspired static guide website (served by Flask) to explain how to download and configure the Talao Identity Wallet for use in the France Identité EUDI Wallet Playground.

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Open: http://127.0.0.1:5000

## Where to add your content later

- Replace placeholder screenshots in: `static/img/screenshots/`
- Edit the pages in: `templates/`
- Update colors / typography in: `static/css/style.css`
