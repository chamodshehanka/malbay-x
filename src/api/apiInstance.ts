import axios from "axios";
import { addAuthInterceptor } from "./authIntecepter";
import { addResponseInterceptor } from "./responseInteceptor";

const apiInstance = axios.create({
  baseURL: "INVALID_URL",
});

const URL = process.env.REACT_APP_BASEURL;

addAuthInterceptor(apiInstance);
addResponseInterceptor(apiInstance);

apiInstance.interceptors.request.use(
  async function (config) {
    config.baseURL = URL || "http://localhost:4000/api/v1";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { apiInstance };
