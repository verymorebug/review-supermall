<template>
  <div class = "tab-bar-item" @click = "clickItem">

    <div v-if = "isActive">

      <slot name = "activeIcon"></slot>

    </div>

    <div v-else>

      <slot name = "icon"></slot>

    </div>

    <div :class = "{active:isActive}">

      <slot name = "text"></slot>

    </div>


  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{

    thePath:{

      type:String,
      default:'/'

    }

  },
  methods:{



    clickItem(){

      this.$router.push({path:this.thePath});

    },

  },
  computed:{

    isActive(){

      return this.$route.path == this.thePath

    }

  }

}
</script>

<style scoped>
  .tab-bar-item{

    height: 49px;
    text-align: center;
    flex: 1;

  }

  .text{

    color: red;

  }

  .active{

    color: #ff8198;

  }
</style>