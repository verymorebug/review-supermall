<template>

    <nav-bar class = "home-navbar">

      <template v-slot:center>

        <div>购物街</div>

      </template>

    </nav-bar>

</template>

<script>

import NavBar from "components/common/navbar/NavBar";

export default {

  name: "HomeNavBar",
  components:{

    NavBar

  }

}
</script>

<style scoped>

  .home-navbar{

    text-align: center;
    color: white;
    background: #ff5777;

  }

</style>