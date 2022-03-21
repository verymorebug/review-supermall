<template>
  <div class = "shop-cart">

    <shop-cart-nav-bar></shop-cart-nav-bar>

    <scroll class = "content" ref = "scroll">
      <cart-list></cart-list>

    </scroll>
    <shop-cart-bottom-bar></shop-cart-bottom-bar>

  </div>
</template>

<script>

import CartList from "./childComps/CartList";
import ShopCartNavBar from "./childComps/ShopCartNavBar";
import ShopCartBottomBar from "./childComps/ShopCartBottomBar";
import Scroll from "components/common/scroll/Scroll";

export default {

  name: "Shopcart",

  components: {
    Scroll,
    ShopCartBottomBar,

    CartList,
    ShopCartNavBar,

  },
  activated() {

    this.$refs.scroll.$el && this.$refs.scroll.refresh();

  }

}
</script>

<style scoped>
  .shop-cart{

    height: 100vh;
    overflow: hidden;

  }

  .content{

    height: calc(100% - 44px - 49px - 50px);

  }
</style>