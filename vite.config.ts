import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 絶対パスで`@`を使えるようにする
    },
  },
  server: {
    port: 3000, // 開発用サーバーのポート番号
    proxy: {
      // ASP.NET MVCのAPIにプロキシ
      '/api': {
        target: 'https://dev-sample.nagiyu.com', // ASP.NET APIサーバー
        changeOrigin: true, // オリジンを変更（CORS対策）
        secure: false, // HTTPSを許可（ローカル開発用）
      },
    },
  },
  build: {
    outDir: './Nagiyu.Web/wwwroot/dist', // ASP.NET MVCの`wwwroot/dist`に出力
    rollupOptions: {
      input: {
        sample: resolve(__dirname, 'src/sample/main.ts'),
      },
      output: {
        entryFileNames: '[name].js', // 出力ファイル名を設定 (ハッシュなし)
        chunkFileNames: '[name]-chunk.js', // 共通チャンクファイルの名前
        assetFileNames: 'assets/[name].[ext]', // アセット（CSSなど）の名前
      },
    },
    manifest: false, // マニフェストファイルも生成しない
    emptyOutDir: true, // ビルドディレクトリをクリーンアップ
  },
});
