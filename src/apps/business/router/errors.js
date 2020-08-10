const errors = [
  {
    path: 'unauthorized',
    name: 'unauthorized',
    component: () => import(/* webpackChunkName: "errors" */ '../views/errors/401'),
    meta: {
      title: 401
    }
  },
  {
    path: 'forbidden',
    name: 'forbidden',
    component: () => import(/* webpackChunkName: "errors" */ '../views/errors/403'),
    meta: {
      title: 403
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "errors" */ '../views/errors/404'),
    meta: {
      title: 404
    }
  }
]

export default errors
