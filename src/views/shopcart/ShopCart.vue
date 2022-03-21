<template>
  <div class = "shop-cart">

    <shop-cart-nav-bar></shop-cart-nav-bar>
    <cart-list></cart-list>
    <shop-cart-bottom-bar></shop-cart-bottom-bar>

  </div>
</template>

<script>

import CartList from "./childComps/CartList";
import ShopCartNavBar from "./childComps/ShopCartNavBar";
import ShopCartBottomBar from "./childComps/ShopCartBottomBar";

export default {

  name: "Shopcart",

  components: {
    ShopCartBottomBar,

    CartList,
    ShopCartNavBar,

  }

}
</script>

<style scoped>
  .shop-cart{

    height: 100vh;
    overflow: hidden;

  }
</style>