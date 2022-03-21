export default{

    addCart(state,payload){



        const product =  state.cartList.find((item)=>item.iid == payload.iid)

        if(!product) {

            console.log("产品是全新的00")
            state.cartList.push(payload);

        }else{

            console.log("单纯数量加1");
            product.count+=1;

        }



    },

    addGoodsCounter(state,payload){


        payload.count += 1;
        console.log("该商品数量+1")

    },

    addGoods(state,payload){

        state.cartList.push(payload);
        console.log("添加了一个新的商品");

    },

    selectAllGoods(state){

        if(state.cartList.length == 0){

        }else{

            for(let i = 0;i<state.cartList.length;i++){

                state.cartList[i].select = true;

            }

        }

    },

    notSelectAllGoods(state){

        if(state.cartList.length == 0){

        }else{

            for(let i = 0;i<state.cartList.length;i++){

                state.cartList[i].select = false;

            }

        }

    },

    changeSelectGoods(state,payload){

        const product = state.cartList.find((item)=>item.iid === payload.iid)
        product.select = !product.select;

    }

}