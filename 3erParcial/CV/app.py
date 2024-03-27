from flask import Flask,request, render_template, redirect, url_for, flash
from flask_mysqldb import MySQL

#Inicializacion del APP
app = Flask(__name__, static_folder='static', template_folder='templates')
app.secret_key= 'mysecrety'
mysql= MySQL(app)

#Rutas
@app.route('/')
def index():
    return render_template('cv.html')

if __name__ == '__main__':
    app.run(port=5000, debug=True)