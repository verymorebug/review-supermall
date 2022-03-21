<template>
  <div class = "goods-list">

    <goods-list-item :good = "item" v-for = "item in goodList" @click = "clickInGoodDetail(item.iid)"></goods-list-item>

  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {GoodsListItem},
  props:{

    goodList:Array,
    default:{

      return: []

    }

  },
  methods:{

    clickInGoodDetail(iid){

      console.log(iid);//获取到商品iid可以跳转
      this.$router.push('/detail/'+iid);

    }

  }
}
</script>

<style scoped>

  .goods-list{

    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

  }

</style>