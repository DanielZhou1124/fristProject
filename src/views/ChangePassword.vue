<template>
  <div>
    <back></back>
    <div class="login-container">
      <form>
        <div class="login-ls">
          <label for="phone">手机号码:</label>
          <input type="text" id="phone" name="username" required />
        </div>
        <div class="login-ls">
          <label for="phoneid">验&ensp;证&ensp;码:</label>
          <input type="text" id="phoneid" name="username" required />
          <button>获取</button>
        </div>
        <div class="login-ls login-center">
          <button class="login-btn">修改密码</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.login-container .login-ls {
  height: 70px;
  width: 80%;
  margin-left: 10%;
  /* border: 1px solid red; */
  line-height: 70px;
}
.login-center {
  text-align: center;
}

.login-container input {
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #191919;
  border-radius: 3px;
}

.login-ls .login-btn {
  display: inline-block;
  background-color: #3498db;
  color: white;
  height: 40px;
  border: none;
  border-radius: 5px;
  width: 60%;
}
</style>