import request from '～/utils/request'

export function longin(username:string,password:string){
    return request.post('/admin/login',{
        username,
        password
    })
}

export function getInfo() {
    return request.post('/admin/getinfo')
}