import axios from "axios";
const baseUrl = "https://api.jonzav.me";

function sendRequestToBackend(endpoint) {
    return axios.get(`${baseUrl}/${endpoint}`);
}

export default sendRequestToBackend;
