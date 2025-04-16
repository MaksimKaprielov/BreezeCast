import './styles/index.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import SvgIcon from './components/SvgIcon.vue';
import 'virtual:svg-icons-register';

import App from './App.vue'

const app = createApp(App)

app.component('SvgIcon', SvgIcon);
app.use(createPinia())

app.mount('#app')