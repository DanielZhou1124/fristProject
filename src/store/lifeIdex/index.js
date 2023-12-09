import { getLifeIdex } from "@/api"

let state = {
    getLifeIdex: {}
}
let mutations = {
    GETLIFEIDEX(state, value) {
        state.getLifeIdex = value;
    }
}
let actions = {
    async getLifeIdex({ commit }, cityId) {
        let result = await getLifeIdex(cityId);
        if (result.code == 200) {
            console.log("生活指数：");
            console.log(result);
            commit("GETLIFEIDEX", result);
        }
    }
}
let getters = {
    LifeIdex(state) {
        return state.getLifeIdex.daily
    }

}
export default {
    state,
    mutations,
    actions,
    getters
}