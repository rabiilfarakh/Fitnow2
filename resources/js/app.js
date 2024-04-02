import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
import Login from './components/Login.vue';
app.component('example-component', ExampleComponent);
app.component('login-component', Login);

app.mount('#app');
