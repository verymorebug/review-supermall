<template>
  <div class = "wrapper">

    <div class = "content">

      <slot></slot>

    </div>

  </div>
</template>

<script>

  import BScroll from '@better-scroll/core'
  import PullUp from "@better-scroll/pull-up";
  import ObserveImage from '@better-scroll/observe-image';
  import ObserveDOM from '@better-scroll/observe-dom';

  BScroll.use(PullUp);
  BScroll.use(ObserveImage);
  BScroll.use(ObserveDOM);

  export default {
    name: "Scroll",

    data(){

      return {

        scroll:null

      }

    },

    mounted() {

      this.$nextTick(()=>{

        this.scroll = new BScroll('.wrapper',{
          probeType:3,
          click:true,
          pullUpLoad: true,
          observeImage: true,

        })

        this.scroll.on('pullingUp',()=>{

          this.$emit("scrollPullUp");   //向父组件传递事件
          this.scroll.finishPullUp();

        })

        this.scroll.on("scroll",(position)=>{

          this.$emit("scrollMove",position);

        })

      })

    },

    methods:{

      scrollIn(x,y,time = 500){

        this.scroll && this.scroll.scrollTo(x,y,time);

      },

      refresh(){

        this.scroll && this.scroll.refresh();

      }

    }

  }
</script>

<style scoped>

  .wrapper{

    height: calc(100% - 40px - 30px);

  }

  .content{


  }

</style>