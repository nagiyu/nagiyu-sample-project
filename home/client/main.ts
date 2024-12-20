import { createApp } from 'vue';
import Header from './Header.vue';

// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Vueアプリを作成
const app = createApp(Header);

// Buefyを使用
app.use(Buefy as any);

// アプリをマウント
app.mount('#vue-header');
