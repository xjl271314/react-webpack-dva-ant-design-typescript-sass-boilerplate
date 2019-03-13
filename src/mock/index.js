import Mock from 'mockjs' // 引入mockjs
import appConfig from '../../appConfig'
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据


// 模拟请求列表
Mock.mock(appConfig.baseUrl+'example/list',{
    'code':1,
    'data|2-5':[{
        'key':Random.natural(),
        'icon': Random.image(Random.size, '#02adea', 'Img'),
        'title':Random.name(),
        'desc':Random.name(3)
    }]
})