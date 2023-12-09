<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script >
export default {
  data() {
    return {
      name: "App",
    };
  },
  methods: {

  },
  mounted() {
    // 创建初始数据
    if (!localStorage.getItem("cityDataKey")) {
      var arr = [
        {
          cityName: "北京",
          cityId: "101010100",
          cityNameAdm1: "北京市",
          cityNameAdm2: "北京",
        },
      ];
      console.log(JSON.stringify(arr));
      localStorage.setItem("cityDataKey", JSON.stringify(arr));
    }
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  color: #f8f5f5;
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: auto;
  /* border: solid red 0.5px; */
  background-image: url("../public/imgs/ming.png");
  background-size: 100% 100%;
  /* background-color: rgb(171,231,241);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
}
</style>
