import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '微前端',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: 'iframe',
      path: '/iframe',
      component: './Iframe',
    },
    {
      name:'qiankun',
      key:"qiankun",
      path: '/qiankun/*',
      microApp: 'app1'
    },
    {
      name:'wujie',
      key:"wujie",
      path: '/wujie',
      component: './Wujie',
    },
    {
      name:'micro-app',
      key:"micro",
      path: '/micro-app',
      component: './MicroApp',
    }
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:3001', // html entry
        }
      ],
      sandbox:{
        strictStyleIsolation:true,
        // experimentalStyleIsolation: true
      }
    },
  },
  npmClient: 'pnpm',
});

