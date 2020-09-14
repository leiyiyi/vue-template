export default [
  {
    path: '',
    name: 'list',
    component: () => import('./list'),
    meta: {
      title: '列表'
    }
  },
  {
    path: '*',
    name: 'detail',
    component: () => import('./detail'),
    meta: {
      title: '详情'
    }
  }
]
