<template>
  <div class = "main-tab-bar">

    <tab-bar>

      <tab-bar-item thePath = "/home">

        <template v-slot:activeIcon>

          <img src = "~assets/img/tabbar/home_active.svg">

        </template>

        <template v-slot:icon>

          <img src = "~assets/img/tabbar/home.svg">

        </template>


        <template v-slot:text>

          <div>主页</div>

        </template>

      </tab-bar-item>

      <tab-bar-item thePath="/classify">

        <template v-slot:activeIcon>

          <img src = "~assets/img/tabbar/classify_active.svg">

        </template>
        <template v-slot:icon>

          <img src = "~assets/img/tabbar/classify.svg">

        </template>

        <template v-slot:text>

          <div>分类</div>

        </template>

      </tab-bar-item>

      <tab-bar-item thePath="/shopcart">

        <template v-slot:activeIcon>

          <img src = "~assets/img/tabbar/shopcart_active.svg">

        </template>
        <template v-slot:icon>

          <img src = "~assets/img/tabbar/shopcart.svg">

        </template>

        <template v-slot:text>

          <div>购物车</div>

        </template>

      </tab-bar-item>


      <tab-bar-item thePath = "/profile">

        <template v-slot:activeIcon>

          <img src = "~assets/img/tabbar/profile_active.svg">

        </template>
        <template v-slot:icon>

          <img src = "~assets/img/tabbar/profile.svg">

        </template>

        <template v-slot:text>

          <div>我的</div>

        </template>

      </tab-bar-item>

    </tab-bar>

  </div>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",

  components:{

    TabBar,
    TabBarItem,

  }
}
</script>

<style scoped>

  img{

    width: 23px;
    height: 23px;
    margin-top: 3px;

  }

</style>