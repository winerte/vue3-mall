import request from '../utils/request'

export function statistics1() {
    return request.get('/admin/statistics1')
}

export function statistics2() {
    return request.get('/admin/statistics2')
}

export function statistics3(type:string) {
    return request.get('/admin/statistics3?type='+type)
}