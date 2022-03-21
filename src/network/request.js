import axios from "axios"

export function request(config){

    const instance =  axios.create({

        timeout:5000,
        baseURL:"http://152.136.185.210:7878/api/hy66"

    });

    instance.interceptors.request.use((config)=>{

        //请求拦截  将config拦截住

        return config;  //做了拦截操作后返回config

    },err =>{

        //拦截失败
        console.log(err)

    })

    instance.interceptors.response.use((res)=>{

        return res;  //对请求到的数据进行拦截

    },err =>{


        console.log(err);//拦截失败

    } )

    return instance(config);



}