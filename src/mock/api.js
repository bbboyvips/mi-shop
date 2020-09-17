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
            count: 2,
        }
    })
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