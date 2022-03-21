export default {

    addCart({commit,state},payload){

        //查找在购物车中有无该商品
        let product = state.cartList.find((item)=>item.iid === payload.iid);

        if(!product){

            commit("addGoods",payload);

        }else{

            console.log(product)
            commit("addGoodsCounter",product);

        }


    },

    changeSelectGoods({commit,state},payload) {
        //
         console.log(state.cartList.length)

            if (payload == true) {

                commit("notSelectAllGoods");

            }
             else{

                 commit("selectAllGoods");

            }




    },
}
