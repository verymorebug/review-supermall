<template>
  <div class = "toast" v-show="isShow">

    {{message}}

  </div>
</template>

<script>
export default {

  name: "Toast",

  data(){

    return{

      message:'',
      isShow:false,

    }

  },

  methods:{

    show(message,time = 2000){

      this.message = message;
      this.isShow = true;

      setTimeout(()=>{

        this.isShow = false;
        this.message = '';

      },time)

    }

  }



}
</script>

<style scoped>

  .toast{

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(100,100,100,0.5);
    padding: 15px;
    border-radius: 8px;
    color: white;

  }
</style>