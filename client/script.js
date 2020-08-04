const API_INVOKE_URL = 'https://y45m1nsbs9.execute-api.us-east-1.amazonaws.com/dev'
const IP_DETECTOR = 'https://api.ipify.org?format=json'

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

    fetch(API_INVOKE_URL, requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error));
}

function getIP() {
    fetch(IP_DETECTOR)
        .then(response => response.json())
        .then(data => {	document.getElementById('ip').innerHTML = data.ip;
            callAPI(data.ip); });
}