import request from '@/utils/request'

export function getProject(params) {
  return request({
    url: '/getallmockproject',
    method: 'get',
    params,
    baseURL: 'http://172.16.109.20:8080/qamock'
  })
}
