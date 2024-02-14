from flask import Flask, render_template, jsonify, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/ander')
def ander():
    return render_template('ander.html')

if __name__ == '__main__':
    app.run(debug=True, port=12916)

