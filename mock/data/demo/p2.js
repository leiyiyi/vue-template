module.exports = {
  name: 'demo-p2接口',
  order: '1',
  path: '/api/demo/p2',
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
