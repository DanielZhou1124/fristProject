<template>
  <div>
    <back></back>
    <!-- 用户信息 -->
    <div class="user_message" v-show="shows==0">
      <div class="user_img"><img src="../../public/imgs/my.png" alt="" srcset=""></div>
      <div class="message">
        <span>昵称:{{user_message.nickname}}</span>
        <span>手机号:{{user_message.username}}</span>
      </div>
    </div>
    <!-- 登录注册按钮 -->
    <div class="logReg" v-show="shows">
      <button @click="goLogin()">登录</button
      ><button @click="goRegist()">注册</button>
    </div>
    <!-- 功能模块 -->
    <div class="other">
      <ul class="others">
        <li>
          <router-link to="/cityManage"><img src="../../public/icon-imgs/city.png" /></router-link>
          <span>城市管理</span>
        </li>
        <li>
          <img src="../../public/icon-imgs/dingwei.png" />
          <span>定位管理</span>
        </li>
        <li>
          <img src="../../public/icon-imgs/zhuti.png" />
          <span>主题背景</span>
        </li>
        <li>
          <img src="../../public/icon-imgs/text.png" />
          <span>字体设置</span>
        </li>
      </ul>
    </div>
    <!-- 其他设置等 -->
    <div>
      <ul class="mete">
        <li><img src="../../public/icon-imgs/shezhi.png" /><router-link to="/set" class="router_link">通用设置</router-link></li>
        <li><img src="../../public/icon-imgs/yijian.png" /><router-link to="/feedback" class="router_link">意见反馈</router-link></li>
        <li><img src="../../public/icon-imgs/geren.png" /><router-link to="/aboutUs" class="router_link">关于我们</router-link></li>
        <li><img src="../../public/icon-imgs/info.png" /><router-link to="/version" class="router_link">版本号</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getUserinfo} from "../api/index"
export default {
  data(){
    return{
      shows:1,
      user_message:{}
    }
  },
  mounted(){
    console.log("运行");
    let tokens=localStorage.getItem("city_token")
    if (tokens) {
      this.shows=0;
      getUserinfo().then(res=>
      {
        
        if (res.code==200) {
          console.log(res.data);
          this.user_message=res.data
        }
        
      })
      // .catch((Error) => {
      //   console.log(Error);
      // });
      
    }
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    goRegist() {
      this.$router.push("/regist");
    },
  },
};
</script>

<style>
.mete li {
  /* border: 1px solid red; */
  height: 40px;
  list-style-type: none;
  /* 图片和字体垂直居中 */
  display: flex;
  flex-direction: row;
  align-items: center;
}
.mete li img {
  height: 22px;
  margin: 0 10px;
}
.other{
  margin: 80px 0;
}
.others{
  display: flex;
  justify-content: space-evenly;
  padding-inline-start: 0px;
}
.others li{
  /* border: 1px solid red; */
  width: 70px;
  display: inline-block;
  text-align: center;

}
.others li span{
  display: block;
  margin: 20px 0 0 0;
}
.others li img {
  height: 40px;
  margin: 20px 0 0 0;
  /* display: block; */
  /* margin: 0 10px; */
}


.logReg {
  text-align: center;
  margin: 80px 0 0 0;
}
.logReg button {
  width: 20%;
  height: 30px;
  margin: 0 25px;
}
.user_message{
  height: 72px; 
  line-height: 72px;
  /* border: 1px red solid; */
}
.user_message img{
  border-radius: 50%; 
    width: 70px; 
    height: 70px; 
    margin-left:30px ;
    object-fit: cover; 
    object-position: center;
    /* border: 1px red solid; */
    
}
.user_message span{
  display: block;
  line-height: 32px;
  /* border: 1px red solid; */
}
.user_img{
  display:inline-block;
  float: left;
}
.message{
  height: 70px;
  margin-left: 17px;
  float: left;
  /* border: 1px red solid; */
}
.router_link{
  color: aliceblue;
  text-decoration: none;
}
</style>