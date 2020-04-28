import request from '@/utils/request'

export function getAPI(params) {
  return request({
    url: '/getallmockapi',
    method: 'get',
    params,
    baseURL: 'http://172.16.109.20:8080/qamock'
  })
}
