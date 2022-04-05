import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

FastClick.attach(document.body);   //解决移动端点击按钮等待300ms的问题(移动端为了监听用户是否双击)

const app = createApp(App)

app.use(store);

app.use(router);


app.mount('#app');


