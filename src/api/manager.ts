import { da } from 'element-plus/es/locales.mjs'
import request from '../utils/request'

export function login(username:string,password:string){
    return request.post('/admin/login',{
        username,
        password
    })
}

export function getInfo() {
    return request.post('/admin/getinfo')
}

export function updataPassword(data:any) {
    return request.post('/admin/updatepassword',data)
}

export function logout() {
    return request.post('/admin/logout')
}