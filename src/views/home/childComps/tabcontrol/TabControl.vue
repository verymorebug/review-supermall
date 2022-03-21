<template>

  <div class = "tab-control">

    <div class = "control-item"
         v-for = "(title,index) in titles"
         @click = "itemClick(index)">

        <span :class = "{active:index == currentIndex}">{{title}}</span>

    </div>

  </div>
</template>

<script>
export default {

  name: "TabControl",
  props:{

    titles:Array,
    default:{

      return :[]

    }

  },

  data(){

    return{

      currentIndex:0

    }

  },

  methods:{

    itemClick(index){

      this.currentIndex = index;
      this.$emit("tabControlClick",index);

    }

  }

}
</script>

<style scoped>

  .tab-control{

    padding: 5px;
    width: 100%;
    height: 40px;
    display: flex;
    /*background: #ff5777;*/

  }

  .control-item{

      flex: 1;
      text-align: center;

  }

  .control-item span{

    padding: 5px;

  }

  .active{

    border-bottom: 2px solid #ff849b;
    color: #ff849b;

  }
</style>