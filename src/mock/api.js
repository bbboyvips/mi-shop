import Mock from 'mockjs'

Mock.mock('/api/login', {
        "status": 0,
        "data": {
            id: 1,
            name: 'PanDa',
        }
    })
    .mock('/api/user', {
        "status": 0,
        "data": {
            id: 1,
            name: 'PanDa',
        }
    })
    .mock('/api/carts/sum', {
        "status": 0,
        "data": {
            count: '99+',
        }
    })