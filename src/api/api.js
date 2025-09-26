// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api", // change to your backend
// });

// export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;