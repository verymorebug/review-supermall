<template>
  <div id="app">

    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <main-tab-bar v-show = "$route.meta.show"/>

  </div>
</template>

<script>

  import Home from "./views/home/Home";
  import TabBar from "components/common/tabbar/TabBar";
  import MainTabBar from "components/content/maintabbar/MainTabBar";

  export default {

    name: "App",

    components:{

      Home,
      TabBar,
      MainTabBar,

    }

  }

</script>

<style>


</style>
