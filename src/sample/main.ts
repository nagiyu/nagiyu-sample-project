import { createApp } from 'vue';
import App from '@/sample/App.vue';

// Vueアプリを作成
const app = createApp(App);

// アプリをマウント
app.mount('#vue-app'); // HTMLで`#vue-app`にマウントされる
