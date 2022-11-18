import sys
import subprocess
from flask import Flask, request
from flask_cors import CORS
import bluetooth
import socket
#import clinet_setup
#from clinet_setup import sock

app = Flask(__name__)
CORS(app)


# FOR SCANNING
# nearby_devices = bluetooth.discover_devices(lookup_names=True)
# print("found %d devices" % len(nearby_devices))

# for addr, name in nearby_devices:
#     print("  %s - %s" % (addr, name))


addr = "DC:A6:32:B8:AC:C9"

print("HERE")
print(sys.argv)


# search for the SampleServer service
uuid = "94f39d29-7d6d-437d-973b-fba39e49d4e0"
service_matches = bluetooth.find_service(uuid=uuid, address=addr)

if len(service_matches) == 0:
    print("Couldn't find the SampleServer service.")
    sys.exit(0)

first_match = service_matches[0]
port = first_match["port"]
name = first_match["name"]
host = first_match["host"]

print("Connecting to \"{}\" on {}".format(name, host))

# Create the client socket
sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
sock.connect((host, port))

print("Connected. Type something...")


print("HELLO ITS HERE")


@app.route('/send-signal', methods=['POST'])
def sendSignal():
    param = request.json["param"]
    print(param)
    sock.send(param)
    return param


if __name__ == '__main__':

    app.run(host=' 172.20.10.6')
    # FOR SCANNING
    # nearby_devices = bluetooth.discover_devices(lookup_names=True)
    # print("found %d devices" % len(nearby_devices))

    # for addr, name in nearby_devices:
    #     print("  %s - %s" % (addr, name))
