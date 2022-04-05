<template>
  <div class = "navbar">

    <div class = "nav-left">
      <slot name = "left"></slot>
    </div>

    <div class = "nav-center">
      <slot name = "center"></slot>
    </div>

    <div class = "nav-right">
      <slot name = "right"></slot>
    </div>


  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

  .navbar{

    height: 44px;
    line-height: 44px;
    display: flex;
    /*border-bottom: 1px solid rgba(100,100,100,0.1);*/

  }

  .nav-center{

    flex: 1;

  }
  .nav-right,.nav-left{

    width: 50px;

  }

</style>