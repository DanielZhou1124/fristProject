import { get15DayData } from "@/api"
let state = {
    get15DayData: {}
}
let mutations = {
    GETSHIWDAYDATA(state, value) {
        state.get15DayData = value;
    }
}
let actions = {
    async get15DayData({ commit }, cityId) {
        let result = await get15DayData(cityId);
        if (result.code == 200) {
            console.log("15天天气");
            console.log(result);
            commit("GETSHIWDAYDATA", result)
        }
    }
}
let getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}