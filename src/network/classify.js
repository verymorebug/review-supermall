import { request } from "@/network/request";

export function getClassify(){

    const config = {
        url:'/category'
    }
    return request(config);
}

export function getSubClassify(maitKey) {
    const config = {
        url: '/subcategory',
        params: {
            maitKey
        }
    }
    return request(config);
}

export function getClassifyDetail(miniWallkey, type) {
    const config = {
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    }
    return request(config);
}