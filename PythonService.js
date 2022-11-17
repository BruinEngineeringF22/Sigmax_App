

class PythonService {
    /*postData(input) {
        $.ajax({
            type: "POST",
            url: "/bluetooth.py",
            data: { param: input },
            success: callbackFunc()
        });
    }
    
    callbackFunc(response) {
        // do something with the response
        console.log(response);
    }*/
    sendSignal() {
        console.log("sendSignal called")
        return fetch('http://127.0.0.1:5000', {
            method: 'GET'
        }).then (response => response.text())
          .then (response => {
            console.log(response)
        }).catch((error) => {
            console.error(error);
          });
    }
    
}

export default new PythonService();