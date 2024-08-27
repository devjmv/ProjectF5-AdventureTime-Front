import './assets/main.css'
import 'tailwindcss/tailwind.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import DashboardLayout from './components/dashboard/DashboardLayout.vue'
import EmptyLayout from './components/dashboard/EmptyLayout.vue'

const app = createApp(App)

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)

app.use(createPinia())
app.use(router)

app.mount('#app')
