<template>
  <div class="hour24">
    <span class="hour24-biaoti" @click="gotwentyFourDetails">  24小时天气></span>
    <div class="hour24-text">
      <div class="text" v-for="(a,index ) in data24" :key="index" >
        <span>{{`${a.fxTime}`.substring(11,13)}}时</span>
        <span><i :class="'qi-'+a.icon"></i></span>
        <span>{{a.temp+"°"}}</span>
        <span>{{a.windDir}}</span>
        <span>{{a.windScale}}</span>
        <span>{{a.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  props:["data24"],
  methods:{
    gotwentyFourDetails(){
      this.$router.push("/twentyFourDetails")
    }
  }
};
</script>

<style>
.hour24 {
  width: 80%;
  height: 250px;
  margin: 0 auto;
  /* border: 1px solid red; */
  background-color: rgba(74, 73, 73, 0.2);
  border: 1px rgb(44, 44, 44) solid;
  border-radius: 10px;
}

.hour24 .hour24-biaoti {
  width: 90%;
  height: 35px;
  font-size: 18px;
  margin-left: 5%;
  line-height: 35px;
  border-bottom: 1px solid rgb(48, 48, 49);
  display: inline-block;
}


.hour24 .hour24-text {
  width: 90%;
  height: 210px;
  /* border: 1px solid red; */
  margin: 0 auto;
  white-space: nowrap;
  overflow-x: auto;
}

.hour24 .hour24-text .text {
  width: 40px;
  height: 208px;
  /* border: 1px solid red; */
  display: inline-block;
}

.hour24-text .text span{

  
  display: block;
  font-size: 12px;
  margin: 10px 0;
  text-align: center;
  /* border: 1px solid red; */
}
</style>