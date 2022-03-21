<template>

  <div class = "cart-list">

    <cart-list-item v-for = "item in this.cartList" :cart-item="item"></cart-list-item>

  </div>

</template>

<script>

import CartListItem from "./CartListItem";
import {mapGetters} from "vuex";

export default {

  name: "CartList",

  components: {
    CartListItem
  },

  computed:{

    ...mapGetters(['cartList','cartListLength'])

  }

}
</script>

<style scoped>

  .cart-list{

    width: 100%;
    height: calc(100% - 40px - 49px)

  }

</style>

