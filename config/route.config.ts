export default [
  {
    path: '/',
    component: '@/layouts/basicLayout',
    routes: [
      {
        path: '/',
        component: '@/pages/index/index',
      },
      {
        path: '/creator',
        component: '@/pages/creator',
      },
      {
        path: '/download',
        component: '@/pages/download',
      },
      {
        path: '/friend',
        component: '@/pages/friend',
      },
      {
        path: '/musician',
        component: '@/pages/musician',
      },
      {
        path: '/my',
        component: '@/pages/my',
      },
      {
        path: '/store',
        component: '@/pages/store',
      },
    ],
  },
];
