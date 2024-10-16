import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store'
import router from './router';
console.log('API URL:', import.meta.env.VITE_API_URL);

createApp(App).use(pinia).use(router).mount('#app')
