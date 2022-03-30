import { createApp } from 'vue';

import 'bootstrap';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createPinia } from 'pinia';
import { Form, Field, ErrorMessage } from 'vee-validate';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component('VeeForm', Form);
app.component('VeeField', Field);
app.component('VeeErrorMessage', ErrorMessage);
app.mount('#app');
