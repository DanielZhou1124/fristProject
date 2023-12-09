<template>
  <div>
    <back></back>
    <div style="text-align:center;"><button type="button" @click="logOut">退出登录</button></div>
  </div>
</template>

<script>
export default {
    methods:{
        logOut(){
            localStorage.removeItem("city_token")
            this.$router.push("/personalPage")
        }
    }
};
</script>

<style>
button {
  border: 0px;
  width: 150px;
  height: 30px;
  color: red;
  size: 20px;
  text-align: center;
  line-height: 30px;
}
</style>