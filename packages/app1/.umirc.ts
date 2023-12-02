import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/qiankun'],// https://github.com/umijs/umi/issues/9307
  qiankun: {
    slave: {},
  },
  routes: [
    { path: "", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
