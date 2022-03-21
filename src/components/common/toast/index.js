import Toast from "./Toast";
import {createApp} from "vue";

const obj = {};

obj.install = function (app){

    //1.创建组件构造器
    const toast = app.extends(Toast);

    // 创建一个元素
    const divEle = document.createElement('div');
    // 将创建的 div 元素挂载追加到 body 里面
    document.body.appendChild(divEle);
    // 将组件挂载到刚才创建的 div 中
    toast.mount(divEle);

    console.log(divEle)

    app.config.globalProperties.$toast = toast;

}

export default obj;