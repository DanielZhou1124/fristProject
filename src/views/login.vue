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
import { login,setCityData,getUserinfo } from "../api/index";
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
          // 获取用户信息
          getUserinfo().then((res)=>{
            console.log(res.data.cityMessage);
            let cityMessage=JSON.parse(res.data.cityMessage)
            let cityMessageLocal=JSON.parse(localStorage.getItem("cityDataKey"))
            // 合并json本地和数据库中城市数据并去除重复
            var newCityMessage = cityMessage.concat(cityMessageLocal), //合并成一个数组
            temp = {}, //用于id判断重复
            result = []; //最后的新数组
            //遍历c数组，将每个item.id在temp中是否存在值做判断， 
            newCityMessage.map((item) => {
                if (!temp[item.cityId]) {
                    result.push(item);
                    temp[item.cityId] = true
                }
            })
            console.log(result)
            localStorage.setItem("cityDataKey",JSON.stringify(result))
            // 向服务器设置城市信息
            setCityData(JSON.stringify(result))
            this.$router.replace('/personalPage')
            this.$router.go(-1)
            // history.replaceState({},"","./personalPage")
          })
          
        }
      })
    }
  }
};
</script>

<style scoped>

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