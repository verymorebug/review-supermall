<template>
  <div class = "recommend-goods-list">

    <recommend-goods-list-item

        :good = "item" v-for = "item in recommendGoodList">

    </recommend-goods-list-item>

  </div>
</template>

<script>
import RecommendGoodsListItem from "./RecommendGoodsListItem";

export default {
  name: "RecommendGoodsList",
  components: {

    RecommendGoodsListItem

  },
  props:{

    recommendGoodList:Object,
    default:{

      return: {}

    }

  },
  methods:{


  }
}
</script>

<style scoped>

  .recommend-goods-list{

    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

  }

</style>