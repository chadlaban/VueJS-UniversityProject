import Vue from 'vue'
import App from './App.vue'
import router from './router'

// imports for Bootstrap dependencies //
import 'popper.js';
import 'bootstrap';

window.$ = window.jQuery = require('jquery')

// imports for Bootstrap integrated with Vue.js (bootstrap-vue) //
// Bootstrap and bootstrap-vue have the same functions and components,
// bootstrap-vue ensures that Bootstrap will run properly on a Vue environment 
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
