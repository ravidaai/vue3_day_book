/* eslint-disable */
import {API} from '../src/services/api'
import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import emitter from 'mitt'
//import VueNextSelect from 'vue-next-select'
import setupInterceptors from './services/setupInterceptors';
//import 'vue-next-select/dist/index.min.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//https://vuejsexamples.com/a-complete-selecting-solution-for-vue-js-3-x/
//https://css-tricks.com/stay-dry-using-axios-for-api-requests/
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = API.baseUrl
axios.defaults.headers.get['Accept'] = 'application/json'   // default header for all get request
axios.defaults.headers.post['Accept'] = 'application/json'  // default 
// const token = localStorage.getItem('user-token')
// if (token) {
//   axios.defaults.headers.common['Authorization'] = token
// }

const MyApp = createApp(App);
//MyApp.component('vue-select', VueNextSelect)
MyApp.config.globalProperties.emitter = emitter;
MyApp.use(store);
MyApp.use(router);
MyApp.mount('#app');
setupInterceptors(store);



//or
// createApp(App).use(store).use(router).mount('#app')


