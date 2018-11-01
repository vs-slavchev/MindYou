from app import app

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"


@app.route("/data/<section>")
def data(section):
    return section