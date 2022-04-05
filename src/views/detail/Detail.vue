<template>
  <div class = "detail">

    <detail-nav-bar ref = "nav" class = "nav-bar" @navBarItemClick = "navBarItemClick"></detail-nav-bar>
    <scroll class = "content" ref = "scroll" @scrollMove = "scrollMove">

      <detail-swiper :images="topImages"></detail-swiper>
      <detail-base-info :good-detail="goodDetail"></detail-base-info>
      <detail-shop :shop-detail="shopDetail"></detail-shop>
      <detail-good-show :good-info = "goodInfo" @goodShowImageLoad = "goodShowImageLoad"></detail-good-show>
      <detail-good-param  ref = "goodParam"  :good-param = "goodParam"></detail-good-param>
      <detail-comment  ref = "comment" :goods-comment="goodComment"></detail-comment>
      <detail-recommend  ref = "recommend" :recommend = "goodRecommend"></detail-recommend>

    </scroll>
    <back-top  v-show="isShowBackTop" @click = "backTop"></back-top>
    <detail-tab-bar class = "bottom-bar" @addCart = "addCart"></detail-tab-bar>

  </div>
</template>

<script>

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
import DetailGoodShow from "./childComps/DetailGoodShow";
import DetailGoodParam from "./childComps/DetailGoodParam";
import DetailComment from "./childComps/DetailComment";
import DetailRecommend from "./childComps/DetailRecommend";
import DetailTabBar from "./childComps/DetailTabBar";

import Scroll from "components/common/scroll/Scroll";

import {getGoodDetailData,getShopDetailRecommend,GoodInfo,ShopInfo,GoodShow,GoodParam} from "network/detail";
import {backTopMixin} from "common/mixin";
import {debounce} from "common/utils";

import{onMounted,ref} from "vue";

export default {
  name: "Detail",

  components: {
    DetailTabBar,
    DetailRecommend,
    DetailComment,
    DetailGoodParam,
    DetailGoodShow,
    DetailShop,
    DetailBaseInfo,
    DetailSwiper,
    DetailNavBar,

    Scroll,

  },

  mixins:[backTopMixin],

  data(){

    return{

      iid:null,
      topImages:[],
      goodDetail:{},
      shopDetail:{},
      goodInfo:{},
      goodParam:{},
      goodComment:{},
      goodRecommend:{},
      offsetTopYList:[0,0,0,0]

    }

  },

  created() {

    this.iid = this.$route.params.iid;
    this.getGoodDetailDataMethod(this.iid);
    this.getShopDetailRecommendMethod();

  },

  setup(){

    let comment = ref(null);


    onMounted(()=>{

      console.log(comment.value);

    })

    return {comment};


  },

  methods:{

    //事件监听
    scrollMove(position){

      const positionY = -position.y;
      this.isShowBackTop = positionY > 1000;

      if(this.offsetTopYList[this.offsetTopYList.length-1] != 0){

        for(let i = this.offsetTopYList.length-1;i>=0;i--){

          if(positionY >= this.offsetTopYList[i]){

            console.log(this.$refs.nav.currentIndex);

            this.$refs.nav.currentIndex = i;
            break;

          }

        }

      }



    },

    navBarItemClick(index){

      this.$refs.scroll.scrollIn(0,-this.offsetTopYList[index],100);

    },

    addCart(){

      const goods = {};

      goods.count = 1;
      goods.iid = this.iid;
      goods.title = this.goodDetail.title;
      goods.realPrice = this.goodDetail.realPrice;
      goods.image = this.topImages && this.topImages[0];
      goods.desc  = this.goodDetail.desc;
      goods.select = true;

      // this.$store.commit("addCart",goods);

      this.$store.dispatch("addCart",goods);   //通过actions在使用mutations对数据进行更新

    },

    /*
     *
     * 监听商品展示图片是否已经加载完成
     * 然后在此地获得各个组件距离顶部的高度
     *
     *
     */
    goodShowImageLoad(){

      console.log("商品图片已经完全加载完成");


      // this.$nextTick(()=>{
      //
      //   console.log(this.$refs.goodParam)
      //   console.log(this.$refs.comment.$el)
      //   console.log(this.$refs.recommend)
      //
      //
      // })
        this.$nextTick(()=>{

          this.offsetTopYList[1] = this.$refs.goodParam.$el.offsetTop;
          this.offsetTopYList[3] = this.$refs.recommend.$el.offsetTop;
          this.offsetTopYList[2] = this.offsetTopYList[3]-200;

        })

    },

    //获取数据
    getGoodDetailDataMethod(){

      getGoodDetailData(this.iid).then((res)=>{

        console.log(res);

        let result = res.data.result;
        //1.获得轮播图信息
        this.topImages = result.itemInfo.topImages;

        //2.获取某个商品价格等信息
        this.goodDetail = new GoodInfo(result.columns,result.itemInfo,result.shopInfo.services);

        //3.获得某个商品的店铺信息
        this.shopDetail = new ShopInfo(result.shopInfo);

        //4.获得商品展示信息
        this.goodInfo = new GoodShow(result.detailInfo);

        //5.获得商品具体参数
        this.goodParam = new GoodParam(result.itemParams.rule.tables,result.itemParams.info.set)

        //6.获得商品评论信息
        this.goodComment = result.rate;

        console.log(result);

      })

    },

    getShopDetailRecommendMethod(){

      getShopDetailRecommend().then(res=>{

        console.log(res)
        this.goodRecommend = res.data.data.list;

      })

    },

  }

}
</script>

<style scoped>

  .detail{

    height: 100vh;
    overflow: hidden;
    position: relative;

  }

  .nav-bar{

    position: relative;
    z-index: 9;
    
  }

  .content{

    height: calc(100% - 40px - 60px);


  }

  .bottom-bar{

    position: relative;

  }

</style>