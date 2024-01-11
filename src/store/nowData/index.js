//15天数据
import { getWeather } from '../../api/index.js'


let state = {
    getWeather: [],
};
let mutations = {
    GETWEATHER(state, data) {
        state.getWeather = data;
    },
};
let actions = {
    // 实时天气
    async getWeather({ commit }, cityId) {
        let result = await getWeather(cityId);
        if (result.code == 200) {
            // console.log("实时天气：");
            // console.log(result);
            commit('GETWEATHER', result.now);
        }
    },
};

let getters = {

};

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}