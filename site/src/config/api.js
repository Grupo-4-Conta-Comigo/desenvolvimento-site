import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "ec2-52-39-227-213.us-west-2.compute.amazonaws.com:8080",
    // baseURL: "http://ubuntu@ec2-3-23-197-186.us-east-2.compute.amazonaws.com:8080",
    headers: { 
        'Authorization': sessionStorage.token ? `Bearer ${sessionStorage.token}` : ''
      }
});

export default api;