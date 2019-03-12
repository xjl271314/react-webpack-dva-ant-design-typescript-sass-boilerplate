import Mock from 'mockjs' // 引入mockjs
import appConfig from '../../appConfig'
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据


// 模拟请求列表
Mock.mock(appConfig.baseUrl+'example/list',{
    'code':1,
    'icon': Random.image(Random.size, '#02adea', 'Hello'),
    'title':Random.name(),
    'desc':Random.name(3),
})