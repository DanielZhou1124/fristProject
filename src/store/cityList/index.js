import { getCityList } from "../../api/index"
const state = {
    getCityList: {}
}
const mutations = {
    GETCITYLIST(state, data) {
        state.getCityList = data
    }
}
const actions = {
    async getCityList({ commit }, cityId) {
        let resule = await getCityList(cityId)
            // console.log(resule);
        if (resule.code == 200) {
            commit("GETCITYLIST", resule)
        }
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}