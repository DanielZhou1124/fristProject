import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import thereDay from "./thereDay/index.js";
import nowData from './nowData/index.js';
import lifeIdex from './lifeIdex/index.js';
import fifteenDay from './fifteenDay/index.js';
import getCity from "./addCity/index.js"
import getCityList from "./cityList/index.js"

export default new Vuex.Store({
    modules: {
        thereDay,
        nowData,
        lifeIdex,
        fifteenDay,
        getCity,
        getCityList
    }
})