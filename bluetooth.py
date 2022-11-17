from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


@app.route('/')
def sendSignal():
    '''
    CHANGE THIS FUNCTION TO SEND SIGNAL TO RASPBERRY PI
    '''
    
    fp = open('test.txt', 'x')
    fp.close()
    return ('hello world')


if __name__ == '__main__':
    app.run()
