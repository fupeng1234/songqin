import axios from 'axios'   //1.导入axios库

//1.设置Host
// const base = 'http://120.27.146.185:8076'
axios.defaults.baseURL = 'http://120.27.146.185:8076'

//2.设置全局默认配置validateStatus，200-400之间的状态码，全部通过
axios.defaults.validateStatus = (status) => status >= 200 && status < 400

//3.封装post\delete\put\get方法
//3.1post方法
export const postRequest = (url,data) => axios.post(url,data)
//3.2delete方法
export const deleteRequest = (url, params) => {
    return axios.delete(
        url,
        { params }
    )
}
//3.3put方法
export const putRequest = (url, data) => {
    return axios.put(
        url,
        data
    )
}
//3.4get方法
// export const getRequest = (url,params) =>{
//     return axios({
//         method: 'get',
//         url: `${url}`,
//         data: params
//     })
// }
export const getRequest = (url, params) => {
    return axios.get(
        url,
        { params }
    )
}

