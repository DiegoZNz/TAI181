from flask import Flask, render_template
#Inicializacion del APP
app = Flask(__name__, static_folder='static', template_folder='templates')
app.secret_key= 'mysecrety'
#Rutas
@app.route('/')
def index():
    return render_template('cv.html')

@app.route('/json')
def cv():
    return render_template('cvJson.html')

if __name__ == '__main__':
    app.run(port=5000, debug=True)