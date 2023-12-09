<template>
  <div>
    <back></back>
    <div class="login-container">
      <form>
        <div class="login-ls">
          <label for="phone">手机号码:</label>
          <input type="text" id="phone" name="username" required />
        </div>

        <div class="login-ls ">
          <label for="password">密&emsp;&emsp;码:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="login-ls login-center"><button class="login-btn" type="button" @click="login_user()">登录</button></div>
        <div class="login-ls login-center">
          <router-link to="/regist">没有账号？去注册</router-link><br>
          <router-link to="/captchaLogin">忘记密码？验证码登录</router-link>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
import { login,setCityData } from "../api/index";
export default {
  methods:{
    login_user(){
      let inputs=document.getElementsByTagName("input")
      login({
        username:inputs[0].value,
        password:inputs[1].value
      } ).then(res=>{
        console.log(res);
        if(res.code==200){
          localStorage.setItem("city_token",res.token)
          // 存储城市信息到后端
          JSON.parse()
          JSON.stringify()
          let cityDataLocal=JSON.parse(localStorage.getItem("cityDataKey"))
          let cityDataCloud=[{"cityName":"北京","cityId":"101010100","cityNameAdm1":"北京市","cityNameAdm2":"北京"}]
          console.log(cityDataCloud[0].cityId);
          for(let i=0;i<cityDataLocal.length;i++){
            for(let j=0;j<cityDataCloud.length;j++){
              if(cityDataLocal[i].cityId==cityDataCloud[j].cityId) break
            }
          }
          setCityData()
          this.$router.push('/personalPage')
        }
      })
    }
  }
};
</script>

<style>

.login-container .login-ls {
  height: 70px;
  width: 80%;
  margin-left: 10%;
  /* border: 1px solid red; */
  line-height: 70px;
}
.login-center{
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