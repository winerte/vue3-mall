import request from '../utils/request'

export function login(username:string,_password:string){
    // 模拟登录响应
    return new Promise((resolve) => {
        setTimeout(() => {
            // 使用参数避免TypeScript错误
            console.log('Login attempt with username:', username);
            resolve({
                token: 'mock-token-' + Date.now(),
                message: '登录成功'
            });
        }, 500);
    });
    
    // 实际API调用
    // return request.post('/admin/login',{
    //     username,
    //     password
    // })
}

export function getInfo() {
    return request.post('/admin/getinfo')
}

export function updatePassword(data:any) {
    return request.post('/admin/updatepassword',data)
}

export function logout() {
    return request.post('/admin/logout')
}