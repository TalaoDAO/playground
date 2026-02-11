from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.context_processor
def inject_globals():
    return {
        "year": datetime.now().year,
        "playground_url": "https://playground.france-identite.gouv.fr/"
    }

@app.route("/")
def index():
    return render_template("index.html", title="Overview")

@app.route("/download")
def download():
    return render_template("download.html", title="Download Talao Wallet")

@app.route("/configure")
def configure():
    return render_template("configure.html", title="Configure for EUDI Playground")

@app.route("/playground")
def playground():
    return render_template("playground.html", title="Use in the Playground")

@app.route("/faq")
def faq():
    return render_template("faq.html", title="FAQ")

if __name__ == "__main__":
    app.run(debug=True)
