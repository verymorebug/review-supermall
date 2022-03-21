<template>
  <div class = "recommend">

    <div class = "show-recommend"  v-for = "item in recommends">

      <a :href="item.link">

        <img :src = "item.image">

      </a>

      <div class ="show-title">{{item.title}}</div>

    </div>

  </div>
</template>

<script>
export default {

  name: "HomeRecommend",
  props:{

    recommends:{

      type:Array,
      default:{

        return: []

      }

    }

  }


}
</script>

<style scoped>

  .recommend{

    padding: 5px;
    width: 100%;
    /*background: #ff5777;*/
    display: flex;
    border-bottom: 6px solid rgba(0,0,0,0.08);

  }

  .show-recommend{

    flex: 1;
    height: 100%;
    text-align: center;

  }

  .show-title{

    font-size: 13px;

  }

  .show-recommend img{

    width: 60px;
    height: 60px;

  }
</style>