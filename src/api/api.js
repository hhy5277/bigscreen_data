import axios from '@/utils/request'
export const getTagsList = (params) => {
    return axios.request({
        url: 'screen/tag',
        method: 'get',
        params
    })
}
export const aaa = (data) => {
    return axios.request({
        url: '',
        method: 'post',
        data
    })
}