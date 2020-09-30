import Mock from 'mockjs'

Mock
    // 用户登录请求
    .mock('/api/login', {
        "status": 0,
        "data": {
            id: 1,
            name: 'PanDa',
        }
    })
    // 用户数据
    .mock('/api/user', {
        "status": 0,
        "data": {
            "id": 12,
            "username": "PanDa",
            "email": "18512857416@163.com",
            "phone": null,
            "role": 0,
            "createTime": 1479048325000,
            "updateTime": 1479048325000
        }
    })
    // 购物车数量
    .mock('/api/carts/sum', {
        "status": 0,
        "data": 10
    })
    // 商品版本选择页面
    .mock("/api/products/30", {
        "status": 0,
        "data": {
            title: '小米10至尊纪念版',
            desc: '「十年献礼，巅峰美学！最高享24期免息，低至221元起/期；加149元得199元55W立式风冷无线充；加69元得皮革保护壳」120X 超远变焦 / 120W 秒充科技 / 120Hz刷新率 + 240Hz采样率 / 骁龙865旗舰处理器 / 双模5G / 10倍混合光学变焦 / OIS光学防抖+EIS数字防抖 / 2000万超清前置相机 / 双串蝶式石墨烯基锂离子电池 / 等效4500mAh大电量 / 120W 有线秒充+50W无线秒充+10W无线反充 / WiFi 6 / 多功能NFC / 红外遥控',
            type: {
                taocihei: {
                    name: "陶瓷黑",
                    // 商品图
                    swipers: [
                        require("../public/imgs/detail/phone-1.jpg"),
                        require("../public/imgs/detail/phone-2.jpg"),
                        require("../public/imgs/detail/phone-3.jpg"),
                        require("../public/imgs/detail/phone-4.jpg"),
                        require("../public/imgs/detail/phone-5.jpg"),
                    ],
                    // 容量版本
                    romram: {
                        8256: {
                            msg: "8GB+256GB",
                            price: 5598,
                        },
                        8128: {
                            msg: "8GB+128GB",
                            price: 5299,
                        },
                        12256: {
                            msg: "12GB+256GB",
                            price: 5999,
                        },
                        16512: {
                            msg: "16GB+512GB",
                            price: 6999,
                        },
                    },
                },
                liangyin: {
                    name: "亮银版",
                    // 商品图
                    swipers: [
                        require("../public/imgs/detail/ly1.jpg"),
                        require("../public/imgs/detail/ly2.jpg"),
                        require("../public/imgs/detail/ly3.jpg"),
                        require("../public/imgs/detail/ly4.jpg"),
                        require("../public/imgs/detail/ly5.jpg"),
                    ],
                    // 容量版本
                    romram: {
                        16512: {
                            msg: "16GB+512GB",
                            price: 6999,
                        },
                    },
                },
                touming: {
                    name: "透明版",
                    // 商品图
                    swipers: [
                        require("../public/imgs/detail/t1.jpg"),
                        require("../public/imgs/detail/t2.jpg"),
                        require("../public/imgs/detail/t3.jpg"),
                        require("../public/imgs/detail/t4.jpg"),
                        require("../public/imgs/detail/t5.jpg"),
                    ],
                    // 容量版本
                    romram: {
                        8256: {
                            msg: "8GB+256GB",
                            price: 5899,
                        },
                        8128: {
                            msg: "8GB+128GB",
                            price: 5599,
                        },
                        12256: {
                            msg: "12GB+256GB",
                            price: 6100,
                        },
                    },
                },
            }

        },
    })
    // 轮播图数据
    .mock('/api/index/swipers', {
        "status": 0,
        "data": [{
                img: require("../public/imgs/slider/slide-1.jpg")
            },
            {
                img: require("../public/imgs/slider/slide-2.jpg")
            },
            {
                img: require("../public/imgs/slider/slide-3.jpg")
            },
            {
                img: require("../public/imgs/slider/slide-4.jpg")
            },
            {
                img: require("../public/imgs/slider/slide-5.jpg")
            },
        ]
    })
    // 轮播图菜单
    .mock('/api/index/navmenus', {
        "status": 0,
        "data": [{
                id: 1,
                content: "手机 电话卡",
                items: [{
                        id: 30,
                        name: "小米9(可点击)",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
            {
                id: 2,
                content: "电视 盒子",
                items: [{
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
            {
                id: 3,
                content: "笔记本 显示器",
                items: [{
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
            {
                id: 4,
                content: "家电 插线板",
                items: [{
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
            {
                id: 5,
                content: "出行 穿戴",
                items: [{
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
            {
                id: 6,
                content: "智能 路由器",
                items: [{
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
            {
                id: 7,
                content: "电源 配件",
                items: [{
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
            {
                id: 8,
                content: "健康 儿童",
                items: [{
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
            {
                id: 9,
                content: "耳机 音箱",
                items: [{
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
            {
                id: 10,
                content: "生活 箱包",
                items: [{
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 1,
                        name: "小米9",
                        img: require("../public/imgs/item-box-1.png"),
                    },
                    {
                        id: 2,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                    {
                        id: 3,

                        name: "小米8",
                        img: require("../public/imgs/item-box-2.png"),
                    },
                    {
                        id: 4,
                        name: "k20Pro尊享版",
                        img: require("../public/imgs/item-box-3.jpg"),
                    },
                ],
            },
        ]
    })
    // 商品展示数据
    .mock('/api/index/products', {
        "status": 0,
        "data": [{
            id: 1,
            name: "小米10",
            msg: "自研银河九号处理器,秒杀NSA",
            price: "9999",
            img: require("../public/imgs/product/mi10.webp"),
        }, {
            id: 1,
            name: "小米10",
            msg: "自研银河九号处理器,秒杀NSA",
            price: "9999",
            img: require("../public/imgs/product/mi10.webp"),
        }, {
            id: 1,
            name: "小米10",
            msg: "自研银河九号处理器,秒杀NSA",
            price: "999",
            img: require("../public/imgs/product/mi10.webp"),
        }, {
            id: 1,
            name: "小米10",
            msg: "自研银河九号处理器,秒杀NSA",
            price: "999",
            img: require("../public/imgs/product/mi10.webp"),
        }, {
            id: 1,
            name: "小米10",
            msg: "自研银河九号处理器,秒杀NSA",
            price: "999",
            img: require("../public/imgs/product/mi10.webp"),
        }, {
            id: 1,
            name: "小米10",
            msg: "自研银河九号处理器,秒杀NSA",
            price: "999",
            img: require("../public/imgs/product/mi10.webp"),
        }, {
            id: 1,
            name: "小米10",
            msg: "自研银河九号处理器,秒杀NSA",
            price: "999",
            img: require("../public/imgs/product/mi10.webp"),
        }, {
            id: 1,
            name: "小米10",
            msg: "自研银河九号处理器,秒杀NSA",
            price: "999",
            img: require("../public/imgs/product/mi10.webp"),
        }, ]
    })
    // 首页adimg
    .mock('/api/index/adimg', {
        "status": 0,
        "data": [
            require("../public/imgs/ads/ads-1.jpg"),
            require("../public/imgs/ads/ads-1.jpg"),
            require("../public/imgs/ads/ads-1.jpg"),
            require("../public/imgs/ads/ads-1.jpg"),
        ]
    })
    // 首页banner
    .mock('/api/index/banner', {
        "status": 0,
        "data": require("../public/imgs/banner.webp")
    })
    // 首页mix阿尔法
    .mock('/api/index/pro_left', {
        "status": 0,
        "data": require("../public/imgs/mix-alpha.jpg")
    })
    // 购物车列表
    .mock('/api/carts', {

        "status": 0,
        "data": {
            "cartProductVoList": [{
                    "id": 1,
                    "userId": 13,
                    "productId": 1,
                    "quantity": 1,
                    "productName": "iphone7",
                    "productSubtitle": "双十一促销",
                    "productMainImage": require('../public/imgs/cart/pro-img1.jpg'),
                    "productPrice": 7199.22,
                    "productStatus": 1,
                    "productTotalPrice": 7199.22,
                    "productStock": 86,
                    "productSelected": true,
                },
                {
                    "id": 2,
                    "userId": 13,
                    "productId": 2,
                    "quantity": 1,
                    "productName": "oppo R8",
                    "productSubtitle": "oppo促销进行中",
                    "productMainImage": require('../public/imgs/cart/pro-img1.jpg'),
                    "productPrice": 2999.11,
                    "productStatus": 1,
                    "productTotalPrice": 2999.11,
                    "productStock": 86,
                    "productSelected": false,
                }
            ],
            "selectedAll": false,
            "cartTotalPrice": 10198.33
        }
    })