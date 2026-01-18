import request from "～/utils/request";

export function imageList(page:number) {
    return request.get(`/admin/image_class/${page}?limit=10`)
}