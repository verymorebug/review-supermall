<template>
  <div class = "tab-bar">

    <try-item :image = "require('assets/img/tabbar/home.svg')" show-text="主页"></try-item>
    <try-item :image = "require('assets/img/tabbar/classify.svg')" show-text="分类"></try-item>
    <try-item :image = "require('assets/img/tabbar/shopcart.svg')" show-text="购物车"></try-item>
    <try-item :image = "require('assets/img/tabbar/profile.svg')" show-text="我的"></try-item>

  </div>
</template>

<script>
import TabBarItem from "./TryItem";
import TryItem from "@/components/common/tabbar/TryItem";

export default {
  name: "TryBar",

  components:{
    TryItem,

    TabBarItem

  }
}
</script>

<style scoped>

@import "~assets/css/base.css";

.tab-bar{

  background: #dedddd;
  display: flex;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}



</style>