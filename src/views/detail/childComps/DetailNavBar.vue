<template>

  <nav-bar class = "nav-bar">

    <template v-slot:left>

      <div class = "left-back" @click = "leftBackClick"></div>

    </template>

    <template v-slot:center>

      <div class = "center">

        <span v-for = "(item,index) in title"
              @click = "itemClick(index)"
              :key = "index"
              :class = "{active:currentIndex == index}"

        >{{item}}</span>

      </div>

    </template>

  </nav-bar>

</template>

<script>

import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components:{

    NavBar

  },

  data(){

    return{

      title:['商品','详情','评论','推荐'],
      currentIndex:0

    }
  },

  methods:{

    itemClick(index){

      this.currentIndex = index;
      this.$emit("navBarItemClick",index);

    },

    leftBackClick(){


      console.log(this.$router)
      this.$router.back();
      console.log('返回');

    }

  }

}
</script>

<style scoped>

  .nav-bar{

    background: white;

  }

  .left-back{

    background: url("~assets/img/common/back.svg") no-repeat center;
    /*background: black;*/
    opacity: 0.3;
    height: 100%;

  }

  .center{

    display: flex;
    text-align: center;

  }

  .center span{

    flex: 1;

  }

  .active{

    color: #ff5777;

  }

</style>