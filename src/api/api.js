import axios from '@/utils/request'
export const getTagsList = (params) => {
    return axios.request({
        url: 'screen/tag',
        method: 'get',
        params
    })
}
// 查询客户信息
export const screencustInfo = (params) => {
    return axios.request({
        url: 'screen/custInfo',
        method: 'get',
        params
    })
}

export const getCustomInfo = (params) => {
    return axios.request({
        url: 'screen/custInfo',
        method: 'get',
        params
    })
}
export const addCustomTag = (data) => {
    return axios.request({
        url: 'screen/custTag',
        method: 'post',
        data
    })
}