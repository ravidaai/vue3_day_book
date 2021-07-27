/* eslint-disable */
import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import emitter from 'mitt'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//https://css-tricks.com/stay-dry-using-axios-for-api-requests/
axios.defaults.baseURL = 'htp://localhost:3000'
axios.defaults.headers.get['Accept'] = 'application/json'   // default header for all get request
axios.defaults.headers.post['Accept'] = 'application/json'  // default 

const MyApp = createApp(App);
MyApp.config.globalProperties.emitter = emitter;
MyApp.use(store);
MyApp.use(router);
MyApp.mount('#app');
//or
// createApp(App).use(store).use(router).mount('#app')


