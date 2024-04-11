import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// src/main.js or src/axios-setup.js
import axios from 'axios';
import { useUserStore } from '@/store/userStore'

axios.interceptors.request.use((config) => {
  const userStore = useUserStore();
  if (userStore.token) {
    config.headers.Authorization = `Bearer ${userStore.token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')