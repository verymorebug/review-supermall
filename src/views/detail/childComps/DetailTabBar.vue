<template>
  <div class = "tab-bar">

    <div class = "tab-left">

      <div class = "server">

        <div>

          <img src = "~assets/img/detail/server.svg">

        </div>
        <div>客服</div>

      </div>

      <div class = "shop">

        <div>

          <img src = "~assets/img/detail/shop.svg">

        </div>
        <div>店铺</div>

      </div>

      <div class = "collect">

        <div>

          <img src = "~assets/img/detail/collect.svg">

        </div>
        <div>收藏</div>

      </div>

    </div>
    <div class = "tab-right">

      <div class = "add-cart" @click = "addCart">

        <span>加入购物车</span>

      </div>
      <div class = "buy">

        <span>购买</span>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "DetailTabBar",

  methods:{

    addCart(){

      console.log("加入购物车");
      this.$emit("addCart");

    }

  }

}
</script>

<style scoped>

  .tab-bar{

    height: 60px;
    width: 100%;
    /*background: #ff5777;*/
    background: white;
    display: flex;

  }

  .tab-left,.tab-right{

    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .server,.shop,.collect{

    flex: 1;
    text-align: center;
    font-size: 15px;

  }

  .tab-right{

    display: flex;
    height: 100%;

  }

  .add-cart,.buy {

    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .add-cart{

    background: #e7e757;

  }

  .buy{

    background: #ff5777;
    color: white;

  }

</style>