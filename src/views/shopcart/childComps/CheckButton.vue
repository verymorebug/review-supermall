<template>
  <div class = "check-button">

    <img src = "~assets/img/cart/tick.svg" :class = "{active:isSelect}">

  </div>
</template>

<script>
export default {

  name: "CheckButton",

  props:{

    isSelect:{

      type:Boolean,
      default:{

        return:false

      }

    }

  }


}
</script>

<style scoped>

  .check-button img{

    width: 25px;
    border-radius: 50%;
    border: 1px solid rgba(100,100,100,0.1);

  }

  .active{

    background: #ff8198;
    border-color: #ff8198;

  }


</style>