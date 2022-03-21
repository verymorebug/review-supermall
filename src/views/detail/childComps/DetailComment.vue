<template>
  <div class = "detail-comment" v-for = "user in goodsComment.list">

    <div class = "comment-title">

      <span>用户评价</span>
      <span>更多</span>

    </div>

    <div class = "comment-user">

      <img :src = "user.user.avatar">
      <span>{{user.user.uname}}</span>

    </div>

    <div class = "comment-info">

      {{user.content}}

    </div>

    <div class = "comment-message">

      <span>{{user.created}}</span>
      <span>{{user.style}}</span>

    </div>

    <div class = "show-img" >

      <img  v-if = "user.images" :src = "image"  v-for = "image in user.images">

    </div>

  </div>
</template>

<script>
export default {
  name: "DetailComment",

  props:{

    goodsComment:Object,
    default:{

      return:{}

    }

  }

}
</script>

<style scoped>

  .detail-comment{

    margin-top: 10px;
    padding: 5px;

  }

  .comment-title{

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid rgba(100,100,100,0.1);

  }

  .comment-user{

    height: 80px;
    display: flex;
    align-items: center;

  }

  .comment-user img{

    width: 60px;
    border-radius: 50%;

  }
  .comment-user span{

    margin-left: 20px;

  }

  .comment-info{

    margin-top: 10px;

  }

  .comment-message{

    margin-top: 5px;
    display: flex;
    width: 100%;
    font-size: 10px;
    color: #9f9e9e;

  }

  .show-img{

    margin-top: 10px;

  }

  .show-img img{

    width: 60px;
    margin: 5px;

  }
</style>