import { defineConfig } from 'umi';
import routes from './route.config';

export default defineConfig({
  title: '网易云音乐',
  // hash后缀
  hash: true,
  // url加#
  history: {
    type: 'hash',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  // 编译提速
  esbuild: {},
  // mock
  mock: false,
  nodeModulesTransform: {
    type: 'none',
  },
  // 路由
  routes: routes,
});
