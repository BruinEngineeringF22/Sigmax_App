from flask import Flask
from flask_cors import CORS
import os
import bluetooth
import socket

app = Flask(__name__)
CORS(app)

def connect ():
    bd_addr = "dc:a6:32:b8:ac:c7"
    port = 1
    sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
    sock.connect((bd_addr, port))
    sock.send("hello!!")
    sock.close()

@app.route('/')
def sendSignal():
    '''
    CHANGE THIS FUNCTION TO SEND SIGNAL TO RASPBERRY PI
    '''
    
    connect()
    return ('hello world')


if __name__ == '__main__':
    app.run()
