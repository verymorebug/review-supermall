<template>

  <nav-bar class = "nav">

    <template v-slot:center>

      <div class = "nav-title">购物车({{this.cartListLength}})</div>

    </template>

  </nav-bar>

</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import {mapGetters} from "vuex";

export default {

  name: "ShopCartNavBar",
  components:{

    NavBar,

  },

  computed:{

    ...mapGetters(['cartListLength'])

  }

}
</script>

<style scoped>
  .nav{

    background: #ff5777;

  }

  .nav-title{

    text-align: center;
    color: white;

  }

</style>