from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='hw6ee461/build',static_url_path='')
CORS(app)

@app.route('user/<firstname>')
@cross_origin()
def index(firstname):
    if(firstname == "Kristen"):
        return{"last": "Erlon"}
    return{"last": "User not Found"}
@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()