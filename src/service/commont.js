import io from './io'

//获取列表信息
export function getListInfo(data) {
    let config = {
      url: 'example/list',
      data: data
    }
  
    return io.get(config)
}