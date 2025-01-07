import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";


  const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

const UseAxiosSecure = () => {
  const Navigate = useNavigate();
  const { Logout }=UseAuth();
  AxiosSecure.interceptors.request.use(function (config) {
    // ToDo something before request is sent
    const token = localStorage.getItem('access-token');
    // console.log(' this is a bearer tken ', token);
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor 404/401

  AxiosSecure.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, async (error)=> {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('error 401 || 403', error);
    const status = error.response.status;
    // if(status === 401 || status === 403 ){
    //   Logout()
    //   Navigate('/login')
    // }
    return Promise.reject(error);
  });
    return AxiosSecure;
};

export default UseAxiosSecure;