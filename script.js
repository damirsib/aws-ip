function callAPI(ip) {
    let myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"ip": ip});

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://mxqsmxb9j2.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error));
}

function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {	document.getElementById('ip').innerHTML = data.ip;
            callAPI(data.ip); });
}