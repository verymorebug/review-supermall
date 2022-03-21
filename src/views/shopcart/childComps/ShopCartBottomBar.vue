<template>
  <div class = "bottom-bar">

    <div class = "all-select">

      <check-button :is-select="allSelect" @click = "allSelectClick"></check-button>
      <span>全选</span>

    </div>

    <div class = "money">

      <span>合计:￥{{calculate}}</span>

    </div>
    <div class = "pay"><span>去结算({{cartSelectLength}})</span></div>

  </div>
</template>

<script>

import CheckButton from "./CheckButton";
import {mapGetters} from "vuex";


export default {
  name: "ShopCartBottomBar",

  components: {

    CheckButton

  },

  computed:{

    ...mapGetters(['cartList','cartSelectLength']),

    calculate(){

      if(this.cartList.length == 0)
        return 0;

      return this.cartList.filter((item)=>{

        return item.select;  //选中就返回

      }).reduce((accumulator,item)=>{

        return accumulator+item.count*item.realPrice;

      },0).toFixed(2);


    },

    allSelect(){

      if(this.cartList.length == 0)
        return false;

      const product = this.cartList.find((item)=>item.select === false);

      console.log(product);



      if(!product)   //所有人都选中
        return true;

      return false;

    }


  },

  methods:{

    allSelectClick(){

      const select = this.allSelect;

      this.$store.dispatch("changeSelectGoods",select);

    }


  }

}
</script>

<style scoped>
  .bottom-bar{

    height: 50px;
    background: #e0dede;
    position: relative;
    display: flex;
    align-items: center;

  }

  .all-select{

    display: flex;
    align-items: center;
    height: 100%;
    padding: 5px;

  }

  .all-select span{

    margin-left: 10px;
    color: #b2b2b2;
    font-size: 14px;

  }

  .money{
    flex: 1;
    margin-left: 20px;
    display: flex;
    height: 100%;
    align-items: center;

  }

  .pay{

    height: 100%;
    line-height: 50px;
    padding: 0 8px;
    background: #fc5214;
    color: white;

  }

</style>