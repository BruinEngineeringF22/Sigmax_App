import bluetooth
import subprocess

# FOR SCANNING
# nearby_devices = bluetooth.discover_devices(lookup_names=True)
# print("found %d devices" % len(nearby_devices))

# for addr, name in nearby_devices:
#     print("  %s - %s" % (addr, name))

import sys


addr = "DC:A6:32:B8:AC:C9"

if len(sys.argv) < 2:
    print("No device specified. Searching all nearby bluetooth devices for "
          "the SampleServer service...")
else:
    addr = sys.argv[1]
    print("Searching for SampleServer on {}...".format(addr))

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
while True:
    data = input()
    if not data:
        break
    sock.send(data)

sock.close()


# name = "raspberrypi"      # Device name
# addr = "DC:A6:32:B8:AC:C9"      # Device Address
# port = 1         # RFCOMM port
# passkey = "raspberry"  # passkey of the device you want to connect

# # kill any "bluetooth-agent" process that is already running
# subprocess.call("kill -9 `pidof bluetooth-agent`", shell=True)

# # Start a new "bluetooth-agent" process where XXXX is the passkey
# status = subprocess.call("bluetooth-agent " + passkey + " &", shell=True)

# # Now, connect in the same way as always with PyBlueZ
# try:
#     s = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
#     s.connect((addr, port))
# except bluetooth.btcommon.BluetoothError as err:
#     # Error handler
#     pass
