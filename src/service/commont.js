import io from './io'

//获取列表信息
export function getListInfo(data) {
    let config = {
      url: 'example/list',
      data: data
    }
  
    return io.get(config)
}

// 获取高级列表信息 模拟qq的列表信息
export function getQQListInfo(data){
  let config = {
    url: 'example/qqlist',
    data: data
  }

  return io.get(config)
}