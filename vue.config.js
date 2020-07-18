module.exports={
    publicPath: "./",
    // 服务器地址代理
    devServer:{
        proxy:{
            "/ajax":{
                target:"https://m.maoyan.com",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            // 别名
            // alias:{
            //     "@":path.join(__dirname,"./src"),
            //     "api":path.join(__dirname,"./src/api"),
            //     "components":path.join(__dirname,"./src/components"),
            //     "views":path.join(__dirname,"./src/views"),
            //     "common":path.join(__dirname,"./src/common"),
            //     "utils":path.join(__dirname,"./src/utils"),
            //     "router":path.join(__dirname,"./src/router"),
            //     "store":path.join(__dirname,"./src/store"),
            //     "lib":path.join(__dirname,"./src/lib")
            // }
        }
    }
}