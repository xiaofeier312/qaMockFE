import request from '@/utils/request'

export function getProject(params) {
  return request({
    url: '/qamock/getmockprojectlist',
    method: 'get',
    params
  })
}
