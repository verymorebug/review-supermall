<template>
  <grid-view>
    <goods-list-item v-for = "item in classifyDetail" :goods="item" :key = "item.acm"></goods-list-item>
  </grid-view>
</template>

<script>
import GridView from "@/components/common/gridView/GridView";
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "TabContentDetail",
  components:{
    GridView,
    GoodsListItem,
  },
  props:{
    classifyDetail:{}
  }
}
</script>

<style scoped>

</style>