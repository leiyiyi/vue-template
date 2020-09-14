module.exports = {
  name: '登录',
  order: '1',
  path: '/api/auth/login',
  method: 'post',
  status: 0,
  comment: '',
  request: {
    url: null,
    query: null,
    header: null,
    body: [
      {
        field: 'username',
        name: '用户名',
        type: String,
        default: '',
        required: true,
        remark: ''
      },
      {
        field: 'password',
        name: '密码',
        type: String,
        default: '',
        required: true,
        remark: ''
      }
    ]
  },
  response: [
    {
      weight: 100,
      status: 200,
      body: {
        code: 0,
        msg: '',
        data: {
          xx: 1,
          oo: 2
        }
      }
    }
  ]
}
