<template>
  <div class = "cart-item">

    <div class = "select">

      <check-button class = "select-button" @click = "selectButtonClick" :is-select="cartItem.select"></check-button>

    </div>

    <div class = "show-img">

      <img :src = "cartItem.image">

    </div>

    <div class = "item-info">

        <div class = "title">{{cartItem.title}}</div>
        <div class = "desc">{{cartItem.desc}}</div>
        <div class = "info-bottom">

          <span>￥{{cartItem.realPrice}}</span>
          <span>x{{cartItem.count}}</span>

        </div>

    </div>


  </div>
</template>

<script>

import CheckButton from "./CheckButton";
export default {

  name: "CartListItem",
  components: {CheckButton},
  props:{

    cartItem:{

      type:Object,
      default:{

        return:{}

      }

    }

  },

  data(){

    return{

      isSelect:false

    }

  },

  computed:{


  },

  methods:{

    selectButtonClick(){

      console.log(this.cartItem.select);
      this.$store.commit("changeSelectGoods",this.cartItem);

    }

  }

}
</script>

<style scoped>

  .cart-item{

    width: 100%;
    background: white;
    display: flex;
    border-bottom: 2px solid rgba(100,100,100,0.1);

  }

  .select{

    display: flex;
    align-items: center;

  }

  .select-button{

    /*background: #ff5777;*/

  }

  .show-img{

    padding: 5px;

  }

  .show-img img{

    width: 80px;
    height: 100px;
    border-radius: 8px;

  }

  .item-info{

    width: 100%;
    overflow: hidden;
    padding: 10px 10px;
    position: relative;

  }

  .title{

    font-size: 18px;

  }

  .desc{

    font-size: 13px;
    margin-top: 8px;
    color: #bbbaba;

  }

  .title,.desc{

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }

  .info-bottom{

    display: flex;
    position: absolute;
    bottom: 10px;
    padding: 10px;
    left: 0;
    right: 0;
    justify-content: space-between;
    /*position: absolute;*/
    /*bottom: 10px;*/
    /*display: flex;*/
    /*justify-content: space-between;*/

  }

  .info-bottom span:nth-child(1){

    color: orangered;
    font-size: 18px;

  }


</style>