import Axios, { InternalAxiosRequestConfig } from "axios";
import { API_URL } from "@/config";
export const getToken = () => {
  return "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJpZF91c3UiOjE0NywiaWRfYXV4IjozLCJ1c2VybmFtZSI6IkVKQUNPQk8iLCJwZXJzb25hbCI6IkFETUlOSVNUUkFET1IifSwiaWF0IjoxNjk2MDAxNTU5LCJleHAiOjE2OTYwODc5NTl9.Dr-QgKWrzyp9eQNrfd_nuRrHynNL8sGcyO0fuLwtRs8";
};

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  // const token = storage.getToken();
  const token = getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
