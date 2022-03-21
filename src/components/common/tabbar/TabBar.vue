<template>
  <div class = "tab-bar">

    <slot></slot>

  </div>
</template>

<script>

export default {
  name: "TabBar",
  components:{


  }
}
</script>

<style scoped>

  @import "~assets/css/base.css";

  .tab-bar{

    background: #f3f2f2;
    display: flex;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }



</style>