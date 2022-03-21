<template>
  <div class = "detail-shop">

    <div class = "shop-message">

      <img :src = "shopDetail.logo">

      <span>{{shopDetail.name}}</span>

    </div>

    <div class = "shop-down">

      <div class = "shop-left">

        <div class = "sell">

          <div class = "sell-number">{{ conversion(shopDetail.sells) }}</div>
          <div class = "sell-text">总销量</div>

        </div>

        <div class = "goods">

          <div class = "goods-number">{{ conversion(shopDetail.goods) }}</div>
          <div class = "goods-text">全部宝贝</div>

        </div>

      </div>

      <div class = "shop-right">

        <div class = "comment">

          <table class = "table">

            <tr v-for = "item in shopDetail.scores">

              <td>{{item.name}}</td>
              <td class = "text" :class="{active:item.isBetter}">{{item.score}}</td>
              <td class = "text" :class="{active:item.isBetter}">

                {{item.isBetter?'高':'低'}}

              </td>

            </tr>

          </table>

        </div>



      </div>

    </div>

    <div class = "shop-in">
      <span>进入店铺</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props:{

    shopDetail:Object,
    default:{

      return:{}

    }

  },

  methods:{

    conversion(number){

      if(number > 10000){

        number/=10000
        return number+"万"

      }

      return number

    }
  }

}
</script>

<style scoped>

  .detail-shop{

    padding: 5px;
    /*background: #ff5777;*/
    border-bottom: 2px solid rgba(100,100,100,0.1);

  }

  .shop-message{

    height: 60px;
    margin-top: 5px;
    /*background: white;*/
    display: flex;
    align-items: center;
    font-size: 20px;

  }

  .shop-message img{

    width: 60px;
    border-radius: 50%;

  }

  .shop-message span{

    margin-left: 10px;

  }

  .shop-down{

    height: 120px;
    /*background: #ff5777;*/
    display: flex;

  }

  .shop-left{

    background: white;
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-right: 1px solid rgba(100,100,100,.1);

  }
  .shop-right{

    flex: 1;

  }

  .sell{

    text-align: center;

  }
  .sell-number,.goods-number{

    text-align: center;
    font-size: 20px;

  }

  .sell-text,.goods-text{

    margin-top: 10px;
    font-size: 13px;

  }

  .comment{

    width: 100%;
    height: 100%;

  }
  .table{

    width: 100%;
    height: 100%;

  }

  .text{

    color: lawngreen;

  }

  .active{

    color: deeppink;

  }

  .shop-in{

    margin-top: 18px;
    text-align: center;
    height: 40px;

  }

  .shop-in span{

    padding: 10px;
    background: #c9c6c6;
    border-radius: 14px;

  }

</style>