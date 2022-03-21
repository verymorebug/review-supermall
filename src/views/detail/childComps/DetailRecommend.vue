<template>
  <div class = "recommend">

    <recommend-goods-list :recommendGoodList = "recommend"></recommend-goods-list>

  </div>
</template>

<script>
import RecommendGoodsList from "components/content/recommendgoods/RecommendGoodsList";
export default {

  name: "DetailRecommend",

  props:{

    recommend:Object,
    default:{

      return:{}

    }

  },

  components: {

    RecommendGoodsList,

  },

}
</script>

<style scoped>
  .recommend{

    height: 100%;

  }
</style>