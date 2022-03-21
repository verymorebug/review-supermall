<template>
  <div class = "item">

    <div class ="item-class">

      <img src = "~assets/img/profile/message.svg">
      <span  class = 'border-span' >我的消息</span>

    </div>

    <div class ="item-class">

      <img src = "~assets/img/profile/score.svg">
      <span  class = 'border-span' >积分商城</span>

    </div>

    <div class ="item-class">

      <img src = "~assets/img/profile/member.svg">
      <span  class = 'border-span' >会员卡</span>

    </div>

    <div class ="item-class">

      <img src = "~assets/img/profile/cart.svg">
      <span  class = 'border-span' >我的购物车</span>

    </div>

    <div class ="item-class">

      <img src = "~assets/img/profile/shopping.svg">
      <span  class = 'border-span' >下载购物App</span>

    </div>

    <div class ="item-class">

      <img src = "~assets/img/profile/setting.svg">
      <span>设置</span>

    </div>

  </div>
</template>

<script>
export default {
  name: "ProfileSelectItem"
}
</script>

<style scoped>

  .item{

    height: 400px;
    background: white;

  }

  .item-class{

    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;

  }
  span{

    margin-left: 15px;
    height: 50px;
    line-height: 50px;
    flex: 1;

  }

  .border-span{

    border-bottom: 1px solid rgba(100,100,100,0.1);

  }

</style>