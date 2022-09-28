import axios from "axios";

export const api = axios.create({
  baseURL: `https://fiap-notes-api-auth.herokuapp.com/`,
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  
  if (!config?.headers?.Authorization && token) {
    config!.headers!.Authorization = `Bearer ${token}`;
    return config;
  }

  return Promise.reject(
    {
      response: {
        status: 401,
        data: {
          error: 'unauthorized',
          error_description: 'Full authentication is required to access this resource'
        }
      }
    }
  );
}, err => {
  return Promise.reject(err);
});

export default api;
