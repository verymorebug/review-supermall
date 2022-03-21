export default {

    cartList(state){

        return state.cartList;

    },

    cartListLength(state){

        return state.cartList.length;

    },

    cartSelectLength(state){

        if(state.cartList.length == 0)
            return 0;

        return state.cartList.filter(item=>{

            return item.select

        }).length;

    }


}