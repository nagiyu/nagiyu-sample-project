<template>
  <nav class="navbar">
    <!-- 左側のボタンメニュー -->
    <div class="menu-left">
      <b-button
        v-for="(item, index) in leftMenuItems"
        :key="index"
        type="is-primary"
        size="is-medium"
        :href="item.link"
      >
        {{ item.label }}
      </b-button>
    </div>

    <!-- 右側のボタンメニュー -->
    <div class="menu-right">
      <b-button
        v-for="(item, index) in rightMenuItems"
        :key="index"
        type="is-light"
        size="is-medium"
        :href="item.link"
      >
        {{ item.label }}
      </b-button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface MenuItem {
  label: string;
  link: string;
}

export default defineComponent({
  name: "Navbar",
  data() {
    var leftMenuItems: MenuItem[] = [
      { label: "Home", link: "https://dev-sample.nagiyu.com/" },
      { label: "Privacy", link: "https://dev-sample.nagiyu.com/Home/Privacy" },
      { label: "Sample", link: "https://dev-sample.nagiyu.com/Sample" },
    ];

    var rightMenuItems: MenuItem[] = [
      { label: "Login", link: "https://dev-sample.nagiyu.com/Account/Login" },
      { label: "Register", link: "https://dev-sample.nagiyu.com/Account/Register" },
    ];

    return {
      leftMenuItems,
      rightMenuItems
    };
  },
});
</script>

<style scoped>
.navbar {
  display: flex; /* フレックスボックスで全体を整列 */
  justify-content: space-between; /* 左と右にボタンを分ける */
  align-items: center; /* 縦方向で中央揃え */
  padding: 10px 20px; /* ナビゲーションバーの余白を追加 */
  background-color: #ffffff; /* 背景色を白に設定 */
  border-bottom: 1px solid #ddd; /* 下に区切り線 */
}

.menu-left,
.menu-right {
  display: flex; /* フレックスボックスでボタンを並べる */
  gap: 10px; /* ボタン同士の間隔を10pxに設定 */
}

.menu-left {
  justify-content: flex-start; /* 左側ボタンを左に寄せる */
}

.menu-right {
  justify-content: flex-end; /* 右側ボタンを右に寄せる */
}
</style>
