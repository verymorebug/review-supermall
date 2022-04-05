<template>
  <div class = "classify">

    <nav-bar class = "nav-bar">
      <template v-slot:center>
        <div class = "title">商品分类</div>
      </template>
    </nav-bar>

    <div class = "content">

      <tab-menu :classify = "classify" @selected = "selectedClassify"/>

      <scroll class = "scroll-wrapper">
        <tab-content-classify :subcategories = "showSubClassify"></tab-content-classify>
        <tab-control :titles='["流行","新款","精选"]'  @tabControlClick = "tabControlClick"></tab-control>
        <tab-content-detail :classify-detail = "showClassifyDetail"></tab-content-detail>
      </scroll>

<!--      <button @click = "getData">获得全部数据</button>-->
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import TabMenu from "./childComps/TabMenu";
import TabControl from "views/home/childComps/tabcontrol/TabControl";
import TabContentClassify from "./childComps/TabContentClassify";
import TabContentDetail from "./childComps/TabContentDetail";

import { getClassify , getSubClassify , getClassifyDetail } from "@/network/classify";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Classify",

  components:{
    Scroll,
    TabMenu,
    TabControl,
    TabContentClassify,
    TabContentDetail,
    NavBar
  },
  data(){

    return{

      classify:[],
      classifyData:{},
      currentIndex:-1,  //当前点击
      currentType:'pop',
      currentList:['pop','new','sell'],

    }

  },

  created(){

    this.getClassifyMethod()
    this.loadIndex = {}
  },
  computed:{

    showSubClassify(){
      if(this.currentIndex == -1)
        return{}
      return this.classifyData[this.currentIndex].subcategories;
    },
    showClassifyDetail(){

      if(this.currentIndex == -1)
        return{}

      return this.classifyData[this.currentIndex].categoryDetail[this.currentType];
    }

  },
  methods:{

    async getClassifyMethod(){

      await getClassify().then(res=>{

        this.classify = res.data.data.category.list; //获得商品分类类别
        for(let i = 0;i<this.classify.length;i++){   //初始化类别数据
          this.classifyData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
      })
      this.getSubClassifyMethod(0);
      this.loadIndex[0] = 0;    //记录下已经加载过0号分类数据
    },
    getSubClassifyMethod(index){

      this.currentIndex = index;

      const maitKey = this.classify[this.currentIndex].maitKey;

      getSubClassify(maitKey).then((res)=>{

        this.classifyData[this.currentIndex].subcategories = res.data;
        this.classifyData = {...this.classifyData}
        this.getClassifyDetailMethod('new');
        this.getClassifyDetailMethod('pop');
        this.getClassifyDetailMethod('sell');
      })

    },
    getClassifyDetailMethod(type){

      const miniWallKey = this.classify[this.currentIndex].miniWallkey;
      getClassifyDetail(miniWallKey,type).then(res=>{
        this.classifyData[this.currentIndex].categoryDetail[type] = res.data;
      })

    },

    getData(){

      this.getSubClassifyMethod(1);

    },

    selectedClassify(index){

      //根据选择的分类获取数据 然后准备渲染 如果已经加载过该数据 则不需要重复加载
      this.currentIndex = index;
      if(!this.loadIndex[index]) {
        this.getSubClassifyMethod(index);

        this.loadIndex[index] = index;
        console.log(this.loadIndex)

      }
    },

    tabControlClick(index){
      this.currentType = this.currentList[index];
      console.log("切换了状态",this.currentType)

    }

  }
}
</script>

<style scoped>

  .classify{

    height: 100vh;
    width: 100%;

  }
  .nav-bar{

    background: #ff5777;

  }

  .title{

    text-align: center;
    color: white;

  }
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
  }
  .scroll-wrapper{

    overflow: hidden;
    height: 100%;
    flex: 1;
  }
</style>