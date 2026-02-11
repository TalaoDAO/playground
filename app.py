from __future__ import annotations

import os
from flask import Flask, render_template

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def create_app() -> Flask:
    app = Flask(
        __name__,
        root_path=BASE_DIR,
        template_folder=os.path.join(BASE_DIR, "templates"),
        static_folder=os.path.join(BASE_DIR, "static"),
    )

    # Basic site config via environment variables (optional)
    app.config["SITE_NAME"] = os.getenv("SITE_NAME", "Talao Wallet Guide")
    app.config["TALAO_URL"] = os.getenv("TALAO_URL", "https://talao.io")
    app.config["PLAYGROUND_URL"] = os.getenv("PLAYGROUND_URL", "https://playground.france-identite.gouv.fr/")

    @app.get("/")
    def index():
        return render_template("index.html", page_title="Get started")

    @app.get("/download")
    def download():
        return render_template("download.html", page_title="Download the Talao wallet")

    @app.get("/configure")
    def configure():
        return render_template("configure.html", page_title="Configure your wallet for the Playground")

    @app.get("/playground")
    def playground():
        return render_template("playground.html", page_title="Use it in the EUDI Wallet Playground")

    @app.get("/faq")
    def faq():
        return render_template("faq.html", page_title="FAQ & troubleshooting")

    @app.get("/healthz")
    def healthz():
        return {"ok": True}

    return app

app = create_app()

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=int(os.getenv("PORT", "5000")), debug=True)
