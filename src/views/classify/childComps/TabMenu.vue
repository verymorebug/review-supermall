<template>
  <div class = "tab-menu">

    <div class = "menu" v-for ="(item,index) in classify"
         :class="{active:currentIndex == index}"
         :key = "item.miniWallkey"
         @click = "selected(index)">

      {{item.title}}

    </div>

  </div>
</template>

<script>
export default {
  name: "TabMenu",

  props:{
    classify:{
      type:Array,
      default:[]
    }
  },

  data(){

    return{
      currentIndex:0
    }
  },
  emits:['selected'],
  methods:{
    selected(index){

      this.currentIndex = index;
      this.$emit('selected',index);

    }
  }

}
</script>

<style scoped>
  .tab-menu{

    margin-top: 2px;
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;

  }
  .menu{

    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border-left: 3px solid #f6f6f6;

  }

  .active{

    color: #ff5777;
    /*font-weight: bold;*/
    border-left: 3px solid #ff5777;

  }
</style>