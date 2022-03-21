import {request} from "network/request";

export function getHomeMultiData(){

    return request({url:"/home/multidata"})
    //http://152.136.185.210:7878/api/hy66/home/multidata
}

export function getHomeGoodsData(type,page){

    //http://152.136.185.210:7878/api/hy66/home/data?type ='new' page = 1
    const config = {

        url:'/home/data',

        params:{

            type,
            page

        }

    }

    return request(config);

}