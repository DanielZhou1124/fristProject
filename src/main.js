import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import back from './components/back/index'
Vue.component("back", back)
import "./assets/css/normalize.css"
import VueTouch from "vue-touch";

Vue.use(VueTouch, { name: "v-touch" });


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
    // Vue.prototype.$bus = new Vue()

// 创建事件总线   就相当于创建了一个新的vue实例
const bus = new Vue()
    // 把bus挂载到了Vue的原型上, 保证所有的组件都能通过 this.$bus访问到事件总线
Vue.prototype.$bus = bus

new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')