//15天数据
import { get3DayData, get24HourData } from '../../api/index.js'


let state = {
    //三天数据模块返回的数据
    get3DayData: [],
    // 24小时天气
    get24HourData: {},
};
let mutations = {
    GETDAYDATA(state, data) {
        state.get3DayData = data;
    },
    GET24HOURDATA(state, value) {
        state.get24HourData = value;
    }
};
let actions = {
    // 三天天气
    async get3DayData({ commit }, cityId) {
        let result = await get3DayData(cityId);

        if (result.code == 200) {
            console.log("三天：");
            console.log(result);
            commit('GETDAYDATA', result.daily);
        }
    },
    // 24小时
    async get24HourData({ commit }, cityId) {
        let result = await get24HourData(cityId);
        if (result.code == 200) {
            console.log("24小时：");
            console.log(result);
            commit('GET24HOURDATA', result);
        }
    }
};

//getters:仓库的计算属性
//项目中:vuex的getters,整理数据的地方
let getters = {
    //24小时天气整理
    data24(state) {
        return state.get24HourData.hourly
    }
};

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}