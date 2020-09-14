module.exports = {
  name: 'demo-c2接口',
  order: '2',
  path: '/api/demo/c2',
  method: 'get',
  status: 0,
  request: {
    url: null,
    query: null,
    header: null,
    body: null
  },
  response: [
    {
      weight: 100,
      status: 200,
      body: {
        code: 0,
        msg: '',
        data: true
      }
    }
  ]
}
