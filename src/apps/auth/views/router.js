export default {
  path: '',
  name: 'layout',
  component: () => import('./layout'),
  redirect: {
    name: 'login'
  },
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('./login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('./register'),
      meta: {
        title: '注册'
      }
    },
    {
      path: 'forget',
      name: 'forget',
      component: () => import('./forget'),
      meta: {
        title: '忘记密码'
      }
    }
  ]
}
