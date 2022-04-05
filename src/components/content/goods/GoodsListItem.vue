<template>
  <div class = "goods-list-item">

    <div class="item-img">
      <img :src = "showImg">
    </div>
    <div class="item-title"><span>{{goods.title}}</span></div>
    <div class="item-info">

      <span>￥{{goods.price}}</span>
      <span>♥{{goods.cfav}}</span>

    </div>

  </div>
</template>

<script>
export default {
  name: "GoodsListItem",

  props:{
    goods:Object,
    default:{
      return:{}
    }
  },
  computed:{

    showImg(){

      return this.goods.img || this.goods.image || this.goods.show.img

    }

  }

}
</script>

<style scoped>

  .goods-list-item{

    margin-bottom: 5px;
    width: 46%;
    text-align: center;
    font-size: 10px;
    margin-bottom: 40px;

  }

  .item-img{

    height: 100%;
    overflow: hidden;
  }

  .item-img img{

    height: 100%;
    width: 100%;
    border-radius: 10px;

  }

  .item-title{

    padding-top: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }

  .item-info span:nth-child(1){

    color: #ff8198;

  }

  .item-info span:nth-child(2){

    margin-left: 8px;

  }

</style>