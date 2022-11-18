class PythonService {
  // old url: 'http://127.0.0.1:5000/send-signal'
  sendSignal(input) {
    console.log("sendSignal called");
    return fetch("http://192.168.56.1:5000/send-signal", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        param: input,
      }),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default new PythonService();
