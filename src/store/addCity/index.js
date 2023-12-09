import { getCity } from "@/api"
let state = {
    getCity: []
}
let mutations = {
    GETCITY(state, value) {
        state.getCity = value
    }
}
let actions = {
    async getCity({ commit }, address) {
        let result = await getCity(address);
        console.log("111");
        console.log(result);
        if (result.code == 200) {
            commit("GETCITY", result)
            console.log("000");
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