<template>
  <div>
    <!-- 头部：地址城市；当天天气详情 -->
    <div class="home-top" id="" style="">
      <img
        @click="goAddCity()"
        src="../../../public/imgs/img1/location.png"
        style="margin-left: 15px"
      />
      <span @click="goAddCity()">{{arrdata}}</span>
      <img
        @click="goPersonalPage()"
        src="../../../public/icon-imgs/geren.png"
        style="float: right; margin-right: 15px"
      />
    </div>

  </div>
</template>

<script>
export default {
  props: ["arrdata"],
  methods: {
    goAddCity() {
      this.$router.push("/cityManage");
    },
    goPersonalPage() {
      this.$router.push("/personalPage");
    },
  },

};
</script>

<style lang="less" scoped>
.home-top {
  img {
    height: 30px;
    display: inline-block;
    margin-top: 25px;
  }
  span {
    font-size: 20px;
    padding-bottom: 10px;
    margin-left: 15px;
    display: inline-block;
  }
}

</style>