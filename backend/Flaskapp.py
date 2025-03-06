from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to the Flask API!"

@app.route("/data")
def data():
    return "This is the data endpoint, returning plain text."

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
