import BackTop from "components/common/backTop/BackTop";

export const backTopMixin = {

    components:{

        BackTop,

    },

    data(){

      return{

          isShowBackTop:false,

      }

    },

    methods:{

        backTop(){

            this.$refs.scroll.scrollIn(0,0);

        },

    }



}