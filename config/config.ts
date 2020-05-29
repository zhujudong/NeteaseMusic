import { defineConfig } from 'umi';
import routes from './route.config';


export default defineConfig({
  // 编译提速
  esbuild: {},
  // mock
  mock: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
});
