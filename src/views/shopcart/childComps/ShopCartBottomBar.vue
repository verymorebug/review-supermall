<template>
  <div class = "bottom-bar">

    <div class = "all-select">

      <check-button :is-select="true"></check-button>
      <span>全选</span>

    </div>

    <div class = "money"></div>
    <div class = "pay"></div>

  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "ShopCartBottomBar",
  components: {CheckButton}
}
</script>

<style scoped>
  .bottom-bar{

    height: 50px;
    background: #b7b2b2;
    position: relative;
    bottom: 49px;
    display: flex;
    align-items: center;

  }

  .all-select{

    display: flex;
    padding: 5px;

  }

  .all-select span{

    margin-left: 5px;

  }


</style>