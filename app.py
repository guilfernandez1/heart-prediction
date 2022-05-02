from flask import Flask, render_template
from api_routes import bp1
from pycaret.regression import *

app = Flask(__name__)

app.register_blueprint(bp1)

@app.route("/")
def home():
    return render_template("home.html")

if __name__ == '__main__':
    app.run(debug=True)