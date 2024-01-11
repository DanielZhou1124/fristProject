<template>
  <div class="for7dayhome">
    <span class="for7day-title" @click="gofifteenDetails">15天预报  ></span>
    <div class="for7day-list">
      <div class="for7day-item fore7day-active" v-for="(datas,index) in get15DayData.daily" :key="index">
        <span class="time">{{`${datas.fxDate}`.substring(5).replace("-","/")}}</span>
        <span class="week">星期</span>
        <span>{{datas.textDay}}</span>
        <span><i :class="'qi-'+datas.iconDay"></i></span>
        <span>{{datas.tempMax+"°"}}</span>
        <span>{{datas.tempMin+"°"}}</span>
        <span>{{datas.textNight}}</span>
        <span><i :class="'qi-'+datas.iconNight"></i></span>
        <span class="textSize">{{datas.windDirDay}}</span>
        <span>{{datas.windScaleDay+"级"}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["get15DayData"],
  methods:{
    gofifteenDetails(){
        this.$router.push("/fifteenDetails")
    }
}
};
</script>

<style>
.for7dayhome {
  width: 80%;
  height: 350px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: rgba(74, 73, 73, 0.2);
  border: 1px rgb(44, 44, 44) solid;
}

.for7dayhome .for7day-title {
  width: 90%;
  height: 35px;
  margin: 0 auto;
  /* border: black 1px solid; */
  font-size: 18px;
  margin-left: 5%;
  line-height: 35px;
  border-bottom: 1px solid rgb(48, 48, 49);
  display: inline-block;
}

.for7dayhome .for7day-list {
  width: 90%;
  height: 300px;
  /* border: black 1px solid; */
  margin: 0 auto;
  white-space: nowrap;
  overflow-x: auto;
}

.for7dayhome .for7day-list .for7day-item {
  width: 55px;
  height: 300px;
  /* border: black 1px solid; */
  display: inline-block;
}
.for7day-item .textSize{
  font-size: 10px;
}
.for7day-list .for7day-item span{
  display: block;
  margin: 10px 0;
  text-align: center;
}
/* .for7dayhome .for7day-list .for7day-item img {
  height: 10px;
  width: 10px;
} */
</style>