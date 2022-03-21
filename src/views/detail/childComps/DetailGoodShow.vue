<template>
  <div class = "good-show">

    <div class = "good-describe">{{goodInfo.desc}}</div>

    <div class = "good-image" v-for = "items in goodInfo.images">

      <img v-for = "item in items.list" :src = "item" @load = "goodShowImageLoad">

    </div>

  </div>
</template>

<script>
export default {
  name: "DetailGoodShow",
  props:{

    goodInfo:{

      type:Object,
      default:{

        return:{}

      }

    }

  },

  data(){

    return{

      loadImage:1

    }

  },
  methods:{



    //最后一张也加载完成时才会将事件发出
    goodShowImageLoad(){

      if(this.loadImage == this.goodInfo.images[0].list.length){

        this.$emit("goodShowImageLoad");//将事件发出

      }else{

        this.loadImage += 1;

      }


    }

  },

  components:{

    imageLength(){

      return this.goodInfo.images && this.goodInfo.images[0].list.length;

    }

  }

}
</script>

<style scoped>
  .good-show{

    margin-top: 10px;
    width: 100%;
    padding: 5px;
    /*background: #ff5777;*/
  }

  .good-describe{

    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.8);
    padding-bottom: 10px;

  }

  .good-image{

    margin-top: 5px;
    width: 100%;

  }

  .good-image img{

    width: 100%;
    margin: 5px 0;

  }
</style>