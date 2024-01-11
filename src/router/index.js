import Vue from 'vue'
import VueRouter from 'vue-router'

import home from "../views/home"
import addCity from "../views/addCity"
import cityManage from "../views/cityManage"
import personalPage from "../views/personalPage"
import regist from "../views/regist"
import login from "../views/login"
import captchaLogin from '../views/CaptchaLogin'
import changePassword from '../views/ChangePassword'
import set from '../views/set'
import feedback from '../views/feedback'
import aboutUs from '../views/aboutUs'
import version from '../views/version'
import ceshi from '../views/ceshi'
import WeatherIndexDetails from '../views/WeatherIndexDetails'
import twentyFourDetails from '../views/twentyFourDetails'
import fifteenDetails from '../views/fifteenDetails'
Vue.use(VueRouter)

const routes = [{
        path: "*",
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/twentyFourDetails',
        name: 'twentyFourDetails',
        component: twentyFourDetails
    },
    {
        path: '/fifteenDetails',
        name: 'fifteenDetails',
        component: fifteenDetails
    },
    {
        path: '/addCity',
        name: 'addCity',
        component: addCity
    },
    {
        path: '/cityManage',
        name: 'cityManage',
        component: cityManage
    },
    {
        path: '/personalPage',
        name: 'personalPage',
        component: personalPage
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/regist',
        name: 'regist',
        component: regist
    },
    {
        path: '/captchaLogin',
        name: 'captchaLogin',
        component: captchaLogin
    },
    {
        path: '/changePassword',
        name: 'changePassword',
        component: changePassword
    },
    {
        path: '/set',
        name: 'set',
        component: set
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: feedback
    },
    {
        path: '/aboutUs',
        name: 'aboutUs',
        component: aboutUs
    },
    {
        path: '/version',
        name: 'version',
        component: version
    },
    {
        path: '/ceshi',
        name: 'ceshi',
        component: ceshi
    },
    {
        path: '/WeatherIndexDetails',
        name: 'WeatherIndexDetails',
        component: WeatherIndexDetails
    },

]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router