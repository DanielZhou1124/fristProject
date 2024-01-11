<template>
  <div>
    <div class="cityManage-back styles">
      <img @click="back" src="../../../public/imgs/img1/back.png" alt="" />
      <span @click="back">返回</span>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    back() {
      history.back();
    },
  },
};
</script>

<style scoped>
.styles {
  height: 70px;
  font-size: 20px;
  display: inline-block;
  /* border: red solid 1px; */
  line-height: 70px;
}
.cityManage-back img {
  height: 25px;
  /* padding-top: 30px; */
}
.cityManage-back {
  /* float: left; */
  width: 60px;
  margin-left: 15px;
}
</style>