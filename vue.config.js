const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //配置代理跨域
    devServer: {
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
        },
    },
})