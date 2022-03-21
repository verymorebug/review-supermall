<template>
  <div class = "home">

    <home-nav-bar class = "nav-bar"></home-nav-bar>

    <tab-control class = "tab-control-up"
                 ref = "tab_control_up"
                 :titles ='["流行","新款","精选"]'
                 @tabControlClick = "tabControlClick"
                 v-show = "tabControlUpShow"

    ></tab-control>

    <scroll class = "content" @scrollPullUp = "scrollPullUp" @scrollMove = "scrollMove" ref = "scroll">

      <home-swiper :banners="banners" ></home-swiper>
      <home-recommend :recommends = "recommends"></home-recommend>
      <home-fashion></home-fashion>
      <tab-control class = "tab-control"
                   ref = "tab_control_down"
                   :titles ='["流行","新款","精选"]'
                   @tabControlClick = "tabControlClick" ></tab-control>
      <goods-list :good-list = "goods[currentType].list"></goods-list>

    </scroll>
    <back-top v-show="isShowBackTop" @click = "backTop"></back-top>

  </div>
</template>

<script>

import HomeNavBar from "./childComps/home-navbar/HomeNavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFashion from "./childComps/HomeFashion";
import TabControl from "./childComps/tabcontrol/TabControl";

import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";


import {getHomeMultiData,getHomeGoodsData} from "network/home";
import {backTopMixin} from "common/mixin";
import BackTop from "@/components/common/backTop/BackTop";

export default {

  name: "Home",
  mixins:[backTopMixin],
  components:{
    BackTop,
    Scroll,
    GoodsList,
    TabControl,
    HomeFashion,
    HomeRecommend,
    HomeSwiper,
    HomeNavBar,

  },
  data(){

    return {

      banners:[],       //存储home/mutidata轮播图数据
      recommends:[],    //存储流行推荐
      goods:{

        'new':{page:0,list:[]},
        'pop' :{page:0,list:[]},
        'sell':{page:0,list:[]},

      },
      currentType:'pop',
      currentList:['pop','new','sell'],
      tabControlDownOffsetTop:0,
      tabControlOffsetTopHave:false,      //是否已经获取tabControlDownOffsetTop高度
      scrollY:0,                          //滚动距离
      tabControlUpShow:false,             //滚动到tabdown隐藏在上方的tab是否显示

    }

  },
  activated() {

    this.$refs.scroll && this.$refs.scroll.refresh();

  },
  created() {

    this.getHomeMultiDataMethod();
    this.getHomeGoodsDataMethod('new');
    this.getHomeGoodsDataMethod('pop');
    this.getHomeGoodsDataMethod('sell');
    console.log("又来了一次")

  },


  methods:{

    /*
       加载数据
     */
    getHomeMultiDataMethod(){

      getHomeMultiData().then((res)=>{

        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        // console.log(res.data)


      })
    },
    getHomeGoodsDataMethod(type){

      const page = this.goods[type].page+1;

      getHomeGoodsData(type,page).then((res)=>{

        const data = res.data.data;
        this.goods[type].list.push(...data.list);   //加入到数组里面
        this.goods[type].page += 1;

      })

    },

    /*
      数据监听
     */

    //1.对上拉事件加载其他数据
    scrollPullUp(){

      this.getHomeGoodsDataMethod(this.currentType);

    },

    //2.对滚动事件监听，获得滚动距离
    scrollMove(position){

      if(!this.tabControlOffsetTopHave) {   //如果还没有获取tabControlDownOffsetTop高度 就获取 保证只获取一次

        this.tabControlDownOffsetTop = this.$refs.tab_control_down.$el.offsetTop;
        this.tabControlOffsetTopHave = true; //已经获取

      }

      const positionY = -position.y;

      // console.log(position)
      this.scrollY = positionY;

      this.tabControlUpShow = this.tabControlDownOffsetTop < this.scrollY;   //隐形栏是否显示

      //返回顶部按键是否显示
      this.isShowBackTop = positionY >1000;


    },

    //3.流行 新款 精选 控制栏监听
    tabControlClick(index){

      this.currentType = this.currentList[index];

      this.$refs.tab_control_down.currentIndex = index;
      this.$refs.tab_control_up.currentIndex   = index;   //隐形栏与显示栏保持相同被按按键


    }

  }

}
</script>

<style scoped>

  .home{

    height: 100vh;
    overflow: hidden;
    /*background: #ff5777;*/

  }

  .nav-bar{

    position: relative;
    z-index: 9;

  }

  .content{

    height: 100%;


  }

  .tab-control-up{

    position:fixed;
    z-index: 10;
    background: white;

  }

</style>