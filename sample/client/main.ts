import { createApp } from 'vue';
import App from './App.vue';

// Vueアプリを作成
const app = createApp(App);

// アプリをマウント
app.mount('#vue-sample'); // HTMLで`#vue-app`にマウントされる
