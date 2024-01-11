<template>
  <div>
    <headers :arrdata="cityName"></headers>
    <!-- <v-touch @swipeleft="left" @swiperight="right"> -->
    <!-- <homepage :cityId="cityId"></homepage> -->
    <!-- 三个点 -->
    <!-- <div class="Carousel" id="tab" ref="tab">
      <div class="so solids"></div>
      <div class="so"></div>
      <div class="so"></div>
    </div> -->
    <!-- 页面展示 -->
    <div>
      <homepage :cityId="cityId"></homepage>
    </div>
  </div>
</template>

<script >
import homepage from "../components/reuseComponents/homePage/index.vue";
import headers from "../components/headers/index.vue";

export default {
  components: {
    headers,
    homepage,
  },
  data() {
    return {
      arr: [],
      cityId: "",
      cityName: "",
      name: "home",
      index: 0,
    };
  },
  computed: {},
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
  },
  methods: {
    
  },
};
</script>

<style lang="less" scoped>
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