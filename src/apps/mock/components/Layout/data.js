/*eslint-disable*/
export default [
  {
    'name': '用户认证',
    'order': '1',
    'nodes': [
      'auth'
    ],
    'type': 'folder',
    'items': [
      {
        'name': '登录',
        'order': '1',
        'path': '/api/auth/login',
        'method': 'post',
        'status': 0,
        'comment': '',
        'request': {
          'url': null,
          'query': null,
          'header': null,
          'body': [
            {
              'field': 'username',
              'name': '用户名',
              'default': '',
              'required': true,
              'remark': ''
            },
            {
              'field': 'password',
              'name': '密码',
              'default': '',
              'required': true,
              'remark': ''
            }
          ]
        },
        'response': [
          {
            'weight': 100,
            'status': 200,
            'body': {
              'code': 0,
              'msg': '',
              'data': {
                'xx': 1,
                'oo': 2
              }
            }
          }
        ],
        'nodes': [
          'auth',
          'login'
        ],
        'type': 'file'
      }
    ],
    'children': []
  },
  {
    'name': '公用分类',
    'order': '-1',
    'nodes': [
      'common'
    ],
    'type': 'folder',
    'items': [],
    'children': []
  },
  {
    'name': 'Demo演示',
    'order': '99',
    'nodes': [
      'demo'
    ],
    'type': 'folder',
    'items': [
      {
        'name': 'demo-p1接口',
        'order': '1',
        'path': '/api/demo/p1',
        'method': 'get',
        'status': 0,
        'request': {
          'url': null,
          'query': null,
          'header': null,
          'body': null
        },
        'response': [
          {
            'weight': 100,
            'status': 200,
            'body': {
              'code': 0,
              'msg': '',
              'data': true
            }
          }
        ],
        'nodes': [
          'demo',
          'p1'
        ],
        'type': 'file'
      },
      {
        'name': 'demo-p2接口',
        'order': '1',
        'path': '/api/demo/p2',
        'method': 'get',
        'status': 0,
        'request': {
          'url': null,
          'query': null,
          'header': null,
          'body': null
        },
        'response': [
          {
            'weight': 100,
            'status': 200,
            'body': {
              'code': 0,
              'msg': '',
              'data': true
            }
          }
        ],
        'nodes': [
          'demo',
          'p2'
        ],
        'type': 'file'
      }
    ],
    'children': [
      {
        'name': '目录演示',
        'order': '99',
        'nodes': [
          'demo',
          'parent'
        ],
        'type': 'folder',
        'items': [
          {
            'name': 'demo-c1接口',
            'order': '1',
            'path': '/api/demo/c1/:id',
            'method': 'get',
            'status': 0,
            'request': {
              'url': null,
              'query': null,
              'header': null,
              'body': null
            },
            'response': [
              {
                'weight': 100,
                'status': 200,
                'body': {
                  'code': 0,
                  'msg': '',
                  'data': true
                }
              }
            ],
            'nodes': [
              'demo',
              'parent',
              'c1'
            ],
            'type': 'file'
          },
          {
            'name': 'demo-c2接口',
            'order': '2',
            'path': '/api/demo/c2',
            'method': 'get',
            'status': 0,
            'request': {
              'url': null,
              'query': null,
              'header': null,
              'body': null
            },
            'response': [
              {
                'weight': 100,
                'status': 200,
                'body': {
                  'code': 0,
                  'msg': '',
                  'data': true
                }
              }
            ],
            'nodes': [
              'demo',
              'parent',
              'c2'
            ],
            'type': 'file'
          }
        ],
        'children': [
          {
            'name': '目录演示1',
            'order': '99',
            'nodes': [
              'demo',
              'parent',
              'parent1'
            ],
            'type': 'folder',
            'items': [
              {
                'name': 'demo-c1-1接口',
                'order': '3',
                'path': '/api/demo/c11',
                'method': 'get',
                'status': 0,
                'request': {
                  'url': null,
                  'query': null,
                  'header': null,
                  'body': null
                },
                'response': [
                  {
                    'weight': 100,
                    'status': 200,
                    'body': {
                      'code': 0,
                      'msg': '',
                      'data': true
                    }
                  }
                ],
                'nodes': [
                  'demo',
                  'parent',
                  'parent1',
                  'c1'
                ],
                'type': 'file'
              },
              {
                'name': 'demo-c1-2接口',
                'order': '2',
                'path': '/api/demo/c12',
                'method': 'get',
                'status': 0,
                'request': {
                  'url': null,
                  'query': null,
                  'header': null,
                  'body': null
                },
                'response': [
                  {
                    'weight': 100,
                    'status': 200,
                    'body': {
                      'code': 0,
                      'msg': '',
                      'data': true
                    }
                  }
                ],
                'nodes': [
                  'demo',
                  'parent',
                  'parent1',
                  'c2'
                ],
                'type': 'file'
              }
            ],
            'children': []
          }
        ]
      }
    ]
  }
]
