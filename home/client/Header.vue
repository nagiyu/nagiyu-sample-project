<template>
  <nav class="navbar">
    <!-- 左側のボタンメニュー -->
    <div class="menu-left">
      <b-button
        v-for="(item, index) in leftMenuItems"
        :key="index"
        type="is-primary"
        size="is-medium"
        tag="a"
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
        tag="a"
        :href="item.link"
      >
        {{ item.label }}
      </b-button>
    </div>
  </nav>
</template>

<script lang="ts">
import AuthUtil from "@auth/utils/AuthUtil";
import { Component, Vue, toNative } from "vue-facing-decorator";

interface MenuItem {
  label: string;
  link: string;
}

@Component
class Header extends Vue {
  /**
   * 左側のメニューボタン
   */
  public leftMenuItems: MenuItem[] = [];

  /**
   * 右側のメニューボタン
   */
  public rightMenuItems: MenuItem[] = [];

  /**
   * コンポーネントが作成されたときに呼び出されるライフサイクルフック
   */
  public async created() {
    this.leftMenuItems = [
      { label: "Home", link: "/" },
      { label: "Privacy", link: "/Home/Privacy" },
      { label: "Sample", link: "/Sample" },
    ];

    this.rightMenuItems = await this.GetRightMenuItems();
  }

  /**
   * 右側のメニューボタンを取得する
   */
  private async GetRightMenuItems(): Promise<MenuItem[]> {
    var user = await AuthUtil.GetUser<IUserAuthBase>();

    console.log(user);

    if (user === null) {
      return [
        { label: "Login", link: "/Account/Login" },
        { label: "Register", link: "/Account/Register" },
      ];
    } else if (user.userName === null) {
      return [
        { label: "Register", link: "/Account/Register" },
      ];
    } else {
      return [
        { label: "Top", link: "/" },
      ];
    }
  }
}

export default toNative(Header)
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
