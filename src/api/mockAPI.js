import request from '@/utils/request'

export function getAPI(params) {
  return request({
    url: '/qamock/getmockapilist',
    method: 'get',
    params
  })
}
