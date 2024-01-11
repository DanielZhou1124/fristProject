<template>
  <div>
    <back></back>
    <div class="login-container">
      <form>
        <div class="login-ls">
          <label for="username">名&emsp;&emsp;称:</label>
          <input type="text" id="username" name="username" required ref="inputs"/>
        </div>
        <div class="login-ls">
          <label for="phone">手机号码:</label>
          <input type="text" id="phone" name="username" required ref="inputs"/>
        </div>
        <!-- <div class="login-ls">
          <label for="phoneid">验&ensp;证&ensp;码:</label>
          <input type="text" id="phoneid" name="username" required />
          <button>获取</button>
        </div> -->
        <div class="login-ls">
          <label for="password">密&emsp;&emsp;码:</label>
          <input type="password" id="password" name="password" required ref="inputs"/>
        </div>
        <div class="login-ls login-center">
          <!-- <div  class="login-btn" @click="submit_regist">zhuce</div> -->
          <button class="login-btn" type="button" @click="submit_regist">注册</button>
        </div>
        <div class="login-ls login-center">
          <router-link to="/login">已有账号？去登录。</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reguser } from "../api/index";
export default {
  mounted() {
    

  },
  methods: {
    submit_regist(){
      let data={}
      let a=document.getElementsByTagName("input")
      for(let i=0;i<a.length;i++){
        data[i]=a[i].value
      }
      console.log( data);
      reguser(
      {
        nickname: data[0],
        username: data[1],
        password: data[2],
      } 
    )
      .then((res) => {
        console.log(res);
        if(res.code==200){
          this.$router.push('/login')
        }
        
      })
      .catch((Error) => {
        console.log(Error);
      });
      
    }
  },
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