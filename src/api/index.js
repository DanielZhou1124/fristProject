//统一管理项目前部的接口
import requests from "./request.js";
// 城市搜索
// https://geoapi.qweather.com/v2/city/lookup?location=nan&key=6c148a06cdee43e5b94043f511c60e02&range=cn
export const getCity = (address) => requests({ method: "get", url: `v2/city/lookup?location=${address}&key=6c148a06cdee43e5b94043f511c60e02&range=cn&number=20` })
    // 热门城市列表。
export const getCityList = () => requests({ method: "get", url: "v2/city/top?range=cn&number=20&key=6c148a06cdee43e5b94043f511c60e02" })

// 实时天气
export const getWeather = (cityId) => requests({ method: "get", url: `v7/weather/now?location=${cityId}&key=6c148a06cdee43e5b94043f511c60e02` })

//三天接口
export const get3DayData = (cityId) => requests({ method: "get", url: `v7/weather/3d?location=${cityId}&key=6c148a06cdee43e5b94043f511c60e02` })

// 24小时天气预报
export const get24HourData = (cityId) => requests({ method: "get", url: `v7/weather/24h?location=${cityId}&key=6c148a06cdee43e5b94043f511c60e02` })

// 生活指数
export const getLifeIdex = (cityId) => requests({ method: "get", url: `v7/indices/1d?location=${cityId}&key=6c148a06cdee43e5b94043f511c60e02&type=1,3,4,5,` })
export const getLifeIdexAll = (data) => requests({ method: "get", url: `v7/indices/1d?location=${data.cityId}&key=6c148a06cdee43e5b94043f511c60e02&type=1,2,3,4,5,6,7,8,9,11,12,13,14,15,16` })
    //七天接口
export const get7DayData = (cityId) => {
        //箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
        //下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
        //return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
        return requests({ method: 'get', url: `/weather/7d?location=${cityId}&key=6c148a06cdee43e5b94043f511c60e02` });
    }
    //15天接口
export const get15DayData = (cityId) => requests({ method: "get", url: `v7/weather/7d?location=${cityId}&key=6c148a06cdee43e5b94043f511c60e02` })
    // 注册用户
export const reguser = (data) => requests({
        method: "post",
        url: "api/reguser",
        data: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })
    // 登录用户
export const login = (data) => requests({
        method: "post",
        url: "api/login",
        data: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })
    // 获取用户信息
export const getUserinfo = () => requests({ method: "get", url: "my/userinfo" })
    // 添加城市信息
export const setCityData = (data) => requests({
        method: "post",
        url: "my/setCityData",
        data: data,
        headers: {
            "Content-Type": "text/plain",
        }
    })
    // 定位api
export const getPositioning = () => requests({ method: "get", url: "/ws/location/v1/ip?key=536BZ-T52WH-QGEDF-WGONU-XIQMQ-SGBJA" })