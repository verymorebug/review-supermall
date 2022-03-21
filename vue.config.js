const path = require("path");  //引入path

function resolve(dir){     //封装一个通用方法

    return path.resolve(__dirname,dir);

}

module.exports = {

    chainWebpack:config=>{

        config.resolve.alias
            .set("assets",resolve('src/assets'))
            .set("components",resolve('src/components'))
            .set("views",resolve('src/views'))
            .set("network",resolve('src/network'))
            .set("common",resolve('src/common'))

    }

}
