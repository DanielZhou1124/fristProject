const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // assetsDir: 'static',
    // parallel: false,
    // publicPath: "./",
    //配置代理跨域
    devServer: {
        // host: '0.0.0.0',
        // // https:true,
        // port: 6103,
        // client: {
        //     webSocketURL: 'ws://0.0.0.0:6103/ws',
        // },
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        // },

        proxy: {
            "/v7": {
                target: "https://devapi.qweather.com",
                changeOrigin: true, //允许跨域请求
            },
            "/v2": {
                target: "https://geoapi.qweather.com",
                changeOrigin: true, //允许跨域请求

            },
            "/api": {
                target: "http://127.0.0.1:3007",
                changeOrigin: true, //允许跨域请求

            },
            "/my": {
                target: "http://127.0.0.1:3007",
                changeOrigin: true, //允许跨域请求

            },
            "/ws": {
                target: "https://apis.map.qq.com",
                changeOrigin: true, //允许跨域请求
                ws: false
            },
        },
    },

})