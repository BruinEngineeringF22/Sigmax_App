1. After cloning the repo, run $npm install
2. To run the app, run $npm start in the terminal
3. If you are running the app from windows, use your phone to scan the QR code
4. If you are running app from mac, press i in the terminal to open a IOS simulator

To run Flask backend,

1. run the server side script on raspberry pi end
2. Go to BluetoothController.py, and in main method, change app.run(host='x'), where x is ANY IPv4 ADDRESS THAT YOUR COMPUTER AND YOUR PHONE SHARES
3. Go to PythonService.js, then change fetch method to that same IPv$ address
4. $flask --app BluetoothController run -h (ANY IPv4 ADDRESS THAT YOUR COMPUTER AND YOUR PHONE SHARES)
