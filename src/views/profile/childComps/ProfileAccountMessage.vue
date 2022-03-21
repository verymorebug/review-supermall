<template>

  <div class = "account-message">

    <div class = "money">

      <div>
        <span class="num-span">0.00</span>元
      </div>
      <div>我的余额</div>

    </div>
    <div class = "coupon">

      <div>
        <span class="num-span">0.00</span>元
      </div>
      <div>我的优惠劵</div>

    </div>
    <div class = "score">

      <div>
        <span class="num-span">0.00</span>元
      </div>
      <div>我的积分</div>

    </div>

  </div>

</template>

<script>
export default {
  name: "ProfileAccountMessage"
}
</script>

<style scoped>
  .account-message{

    height: 100px;
    display: flex;
    padding: 5px 0;
    border-bottom: 8px solid rgba(100,100,100,0.1);

  }
  .money,.coupon,.score{

    flex: 1;
    background-color: white;
    border-right: 1px solid rgba(100,100,100,0.1);
    text-align: center;
    padding: 20px;

  }

  .num-span{

    color: orange;
    font-size: 20px;

  }

</style>