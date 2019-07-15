/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Store from './components/Store.vue';
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
Vue.use(VueRouter);
Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('home', require('./components/Home.vue').default);
Vue.component('store', require('./components/Store.vue').default);
Vue.component('contact', require('./components/Contact.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 var router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: 'home'},
        { path: '/store', component: Store, name : 'store'},
        { path: '/contact', component: Contact, name: 'contact'},
    ]
 });
const app = new Vue({
    el: '#app',
    router: router
});
