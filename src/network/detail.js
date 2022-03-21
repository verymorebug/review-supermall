import {request} from "./request"

export function getGoodDetailData(iid){

    const config = {

        url:'/detail',
        params:{

            iid

        }

    }

    return request(config);

}

export class GoodInfo{

    constructor(columns,itemInfo,services){

        this.columns = columns;
        this.title = itemInfo.title;
        this.cfav = itemInfo.cFav;
        this.discountBgColor = itemInfo.discountBgColor;
        this.discount = itemInfo.discountDesc;
        this.realPrice = itemInfo.lowNowPrice;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;

        this.desc = itemInfo.desc;  //商品描述

        this.services = services;

    }

}

export function getShopDetailRecommend(){

    const config = {

        url:'recommend'

    }

    return request(config);

}

export class ShopInfo{

    constructor(shopInfo) {

        this.sells = shopInfo.cSells;
        this.goods = shopInfo.cGoods;
        this.scores= shopInfo.score;
        this.name  = shopInfo.name;
        this.logo  = shopInfo.shopLogo;


    }


}

export class GoodShow{


    constructor(detailInfo) {

        this.images = detailInfo.detailImage;
        this.desc = detailInfo.desc;

    }

}

export class GoodParam{

    constructor(tables,info) {

        this.tables = tables;
        this.info   = info;

    }

}