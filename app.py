from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('/index.html')

@app.route("/pong.html")
def about():
    return render_template('/pong.html')

@app.route("/score.html", methods  = ["GET", "POST"]) 
def score():
    return render_template('/score.html')


if __name__=="__main__" :
    app.run(debug=True)
