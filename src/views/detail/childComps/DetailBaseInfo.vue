<template>
  <div class = "base-info">

    <div class = "base-title">{{goodDetail.title}}</div>

    <div class = "base-number">

      <div class = "new-money">￥{{goodDetail.realPrice}}</div>
      <div class = "old-money">{{goodDetail.oldPrice}}</div>
      <div v-if = "goodDetail.discount" class = "discount" :style="{background:goodDetail.discountBgColor}">{{goodDetail.discount}}</div>

    </div>

    <div class = "base-other" v-if = "goodDetail.services">

      <span>{{goodDetail.columns[0]}}</span>
      <span>{{goodDetail.columns[1]}}</span>
      <span>{{goodDetail.services[goodDetail.services.length-1].name}}</span>

    </div>

    <div class = "base-promise" v-if = "goodDetail.services">

      <span v-for = "index in goodDetail.services.length-1">

        <img v-if = "goodDetail.services[index-1].icon" :src = "goodDetail.services[index-1].icon">
        <span>{{goodDetail.services[index-1].name}}</span>

      </span>

    </div>

  </div>
</template>

<script>
export default {

  name: "DetailBaseInfo",
  props:{

    goodDetail:Object,
    default:{

      return: {}

    }

  }

}
</script>

<style scoped>

  .base-info{

    padding: 5px;
    border-bottom: 4px solid rgba(100,100,100,0.1);

  }

  .base-title{

    font-size: 20px;

  }

  .base-number{

    margin-top: 10px;
    display: flex;
    align-items: center;

  }
  .new-money{

    font-size: 30px;
    color: #ff8198;

  }
  .old-money{

    margin-left: 10px;
    text-decoration: line-through;
    color: #b4b3b3;

  }

  .discount{

    padding: 5px;
    margin-left: 10px;
    border-radius: 5px;
    color: white;

  }

  .base-other{

    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #b4b3b3;

    border-bottom: 1px solid rgba(100,100,100,0.1);

  }

  .base-promise{

    height: 55px;
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    align-items: center;

  }

  .base-promise img{

    width: 12px;

  }

</style>