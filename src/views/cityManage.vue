<template>
  <div class="cityManage">
    <div class="title">
      <div class="cityManage-back styles">
        <img @click="back" src="../../public/imgs/img1/back.png" alt="" />
        <span @click="back">返回</span>
      </div>
      <div class="cityManage-title styles">城市管理</div>
      <div class="cityManage-finish styles" @click="showDelete(1)" :style="myStyle">完成</div>
    </div>
    <div class="addCity">
      <p>
        <img
          @click="goAddCity()"
          src="../../public/imgs/img1/location.png"
          style="margin-left: 15px"
        />添加定位城市
      </p>
      <ul class="cityMasssage">
        <li v-for="(data, index) in arr" :key="index">
          &emsp;{{ data.cityName
          }}<span class="text">{{
            data.cityNameAdm1 + ">" + data.cityNameAdm2
          }}</span
          ><button v-show="isshow" @click="deleteData(data.cityId)">删除</button>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <button @click="showDelete(0)">编辑城市</button>
      <button @click="goAddCity()">添加城市</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: {},
      isshow: false,
      myStyle: {
			visibility:"hidden"
		}
    };
  },
  mounted() {
    var arr = JSON.parse(localStorage.getItem("cityDataKey"));
    this.arr = arr;
    console.log(arr);
  },
  methods: {
    showDelete(a) {
      if(!a){
        this.isshow = true;
        this.myStyle.visibility="visible"
      }
      if(a==1){
        this.isshow = false;
        this.myStyle.visibility="hidden"
      }
    },
    deleteData(a){
      // let a=e.target
      console.log(a);
      console.log(this.arr)
      // let _this=this
      for(let i=0;i<this.arr.length;i++){
        console.log(this.arr[i].cityId)
        if(a==this.arr[i].cityId){
          this.arr.splice(i,1)
          console.log(this.arr)
          localStorage.setItem("cityDataKey", JSON.stringify(this.arr));
          break
        }
      }
    },
    goAddCity() {
      this.$router.push("/addCity");
    },
    back() {
      history.back();
    },
  },
};
</script>

<style>
.styles{
  height: 70px;
  font-size: 20px;
  display: inline-block;
  /* border: red solid 1px; */
  line-height: 70px;
}
.cityManage .title{
  display: flex;
  justify-content: space-between;
}
.cityManage .cityManage-finish{
  /* float: right; */
  width: 60px;
}
.cityManage .cityManage-title {
  width: 100px;
  text-align: center;
}
.cityManage .cityManage-back {
 /* float: left; */
  width: 60px;
  margin-left: 15px;
}
.cityManage .cityManage-back img {
  height: 25px;
  /* padding-top: 30px; */
}
.addCity ul {
  padding-inline-start: 0px;
}
.addCity p img {
  height: 18px;
  margin: 5px 10px 0 0;
}
.cityMasssage li {
  height: 50px;
  width: 100%;
  font-size: 20px;
  border: solid 1px red;
  line-height: 50px;
  list-style-type: none;
}
.cityMasssage .text {
  margin-left: 30px;
  font-size: 16px;
  border: solid 1px red;
}
.cityMasssage button {
  float: right;
  margin: 15px 10% 15px 0;
  border: 0;
  border-radius: 10%;
  font-size: 14px;
  /* color: #f8f5f5; */
  background-color: rgb(255, 10, 10);
  height: 20px;
  width: 40px;
}
.bottom {
  text-align: center;
}
.bottom button {
  height: 50px;
  width: 40%;
  margin: 0 10px 0 10px;
  border: 0px;
  border-radius: 10px;
  color: white;
  background-color: #00bfff;
}
</style>