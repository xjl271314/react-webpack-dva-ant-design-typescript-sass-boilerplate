import Axios from 'axios'
import appConfig from '../../appConfig'


const __rootUrl = appConfig.baseUrl
const accessToken = '12233232323232233323332'
// get请求方法
function get(config) {
    let { ...params } = config.data
    Axios.defaults.headers.common['AccessToken'] = accessToken
    Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

    return Axios.get(__rootUrl + config.url, {
        params: params
    }).then(result => {
        return result.data
    }, err => {
        if (!err || !err.response) {
            return {
                code: 9999,
                message: '网络异常，请检查当前网络环境'
            }
        } else {
            return {
                code: err.response.status,
                message: '服务异常，请稍后再试'
            }
        }
    })
}


//post请求
function post(config) {
    let { ...params } = config.data
    Axios.defaults.headers.common['AccessToken'] = accessToken
    Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

    return Axios.post(__rootUrl + config.url, params).then(result => {
        return result.data
    }, err => {
        if (!err || !err.response) {
            return {
                code: 9999,
                message: '网络异常，请检查当前网络环境'
            }
        } else {
            return {
                code: err.response.status,
                message: '服务异常，请稍后再试'
            }
        }
    })
}


export default {
    get,
    post
}