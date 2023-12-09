<template>
  <div>
    <headers :arrdata="cityName"></headers>
    <!-- <v-touch @swipeleft="left" @swiperight="right"> -->
    <!-- <homepage :cityId="cityId"></homepage> -->
    <!-- 三个点 -->
    <div class="Carousel" id="tab" ref="tab">
      <div class="so solids"></div>
      <div class="so"></div>
      <div class="so"></div>
    </div>
    <!-- 页面展示 -->
    <transition name="fade">
      <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
        <!-- 第一页 -->
        <swiper-slide class="swiper-slide1">
          <div class="page">
            <homepage :cityId="cityId"></homepage>
          </div>
        </swiper-slide>
        <!-- 第二页 -->
        <swiper-slide class="swiper-slide2">
          <div class="page">
            <homepage :cityId="cityId"></homepage>
          </div>
        </swiper-slide>
        <!-- 第三页 -->
        <swiper-slide class="swiper-slide3">
          <div class="page">
            <homepage :cityId="cityId"></homepage>
          </div>
        </swiper-slide>
      </swiper>
    </transition>
    <!-- </v-touch> -->
  </div>
</template>

<script>
import homepage from "../components/reuseComponents/homePage/index.vue";
import headers from "../components/headers/index.vue";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    headers,
    homepage,
    swiper,
    swiperSlide,
  },
  data() {
    let self = this
    return {
      arr: [],
      cityId: "",
      cityName: "",
      name: "home",
      swiperOption: {
        // swiper configs 所有的配置同swiper官方api配置
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "horizontal", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: false, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: false, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // pagination: '.swiper-pagination',
        // slidesPerView: 'auto',
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper) {
          console.log(swiper);
          // this.activeIndexs=swiper.activeIndex
        },
        on: {
          slideChange: function () {
            // 监听索引变化
            // alert('改变了，activeIndex为'+this.activeIndex);
            this.activeIndexs = this.activeIndex;
            console.log(this.activeIndex);
            this.activeIndexs += 1;
            let b = document.getElementsByClassName("so");
            for (let i = 0; i < 3; i++) {
              b[i].classList.remove("solids");
            }
            self.cityName=self.arr[this.activeIndex].cityName;
            b[this.activeIndex].classList.add("solids");

          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // 获取本地存储数据前三条
    let arr = JSON.parse(localStorage.getItem("cityDataKey"));
    for (let i = 0; i < 3; i++) {
      this.arr.push(arr[i]);
    }
    // 第一条城市id
    this.cityId = this.arr[0].cityId;
    // 城市名字+编号
    this.cityName = this.arr[0].cityName;
    this.$bus.$emit("cityId", this.cityId);

    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // 轮播索引开始
    this.swiper.slideTo(0, 1000, false);
    // 此处可以拿到索引
    console.log("翻页索引位置" + this.swiper.activeIndex);
  },
};
</script>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.Carousel {
  height: 20px;
  width: 40px;
  // border: 1px solid red;
  margin-left: 55px;
  position: absolute;
  top: 55px;
  div {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin: 0px 2px;
    border: 1px solid #f8f5f5;
  }
  .solids {
    background-color: #f8f5f5;
  }
}
</style>