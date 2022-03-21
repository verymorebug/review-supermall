<template>

  <swiper class = "show-swiper">

    <swiper-item v-for = "image in images">

      <img :src = "image" @load = "swiperImageLoad">

    </swiper-item>

  </swiper>

<!--  <swiper class = "showSwiper" >-->

<!--    <swiper-item v-for="(item,index) in topImages" :key = "index">-->

<!--      <img :src = "item">-->

<!--    </swiper-item>-->

<!--  </swiper>-->



</template>

<script>

import {Swiper,SwiperItem} from "components/common/swiper"

export default {
  name: "DetailSwiper",

  props:{

    images:Array,
    default:{

      return:[]

    }

  },

  components:{

    Swiper,
    SwiperItem,

  },

  data(){

    return{

      isEmit:false

    }

  },

  methods:{

    swiperImageLoad(){

      if(!this.isEmit) {

        this.$emit("swiperImageLoad");
        this.isEmit = true;

      }
    }

  }

}
</script>

<style scoped>

  img{

    width: 100%;

  }

  .show-swiper{

    height: 350px;
    overflow: hidden;

  }

</style>