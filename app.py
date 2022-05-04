from flask import Flask, render_template
from routes import bp1

app = Flask(__name__)

app.register_blueprint(bp1)

@app.route("/")
def home():
    return render_template("home.html")

if __name__ == '__main__':
    app.run(debug=False)