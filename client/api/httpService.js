import axios from "axios";


const api = axios.create({
  baseURL: 'http://localhost:5001/api', // your base API URL
  withCredentials:true
});


// api.interceptors.response.use(
//   (response) => response, // simply return response if success
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // For example: redirect to login page
//       console.warn('Unauthorized - maybe redirect');
//       window.location.assign('/login')
//     }

//     return Promise.reject(error);
//   }
// );



export default api