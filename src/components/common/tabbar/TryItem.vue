<template>
  <div class = "tab-bar-item">

    <img :src = "image">
    <div>{{showText}}</div>

  </div>
</template>

<script>
export default {
  name: "TryItem",
  props:{

    image:{

      type:String,
      default:''

    },

    showText:{

      type:String,
      default: ''

    }

  }

}
</script>

<style scoped>
.tab-bar-item{

  height: 49px;
  /*background: #fa7790;*/
  text-align: center;
  font-size: 15px;
  flex: 1;

}

.tab-bar-item img{

  width: 25px;
  height: 25px;
  vertical-align: center;
  margin-top: 2px;

}

</style>