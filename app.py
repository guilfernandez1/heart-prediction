from flask import Flask, render_template, request

app = Flask(__name__)

cols = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal', 'target']

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/predict", methods=['POST'])
def predict():
    formValues = [x for x in request.form.values()]
    print(formValues)
    return render_template('home.html', pred = 'Hello World')


if __name__ == '__main__':
    app.run(debug=True)