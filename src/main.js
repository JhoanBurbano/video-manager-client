import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './services/routes.service';
import axios from 'axios'
import { getToken } from './services/token.service';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;


axios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

createApp(App).use(router).mount('#app');
