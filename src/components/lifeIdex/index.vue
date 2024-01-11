<template>
  <div class="shzs" v-if="LifeIdex">
    <span class="shzs-biaoti" @click="goWeatherIndexDetails">生活指数 ></span>
    <div class="shzs-some">
      <div class="text">
        <span><img src="../../../public/icon-imgs/1.png" alt=""></span>
        <span> {{LifeIdex[0].category}}</span>
        <span>{{LifeIdex[0].name}}</span>
      </div>
      <div class="text">
        <span><img src="../../../public/icon-imgs/3.png" alt=""></span>
        <span> {{LifeIdex[1].category}}</span>
        <span>{{LifeIdex[1].name}}</span>
      </div>
      <div class="text">
        <span><img src="../../../public/icon-imgs/4.png" alt=""></span>
        <span> {{LifeIdex[2].category}}</span>
        <span>{{LifeIdex[2].name}}</span>
      </div>
      <div class="text">
        <span><img src="../../../public/icon-imgs/5.png" alt=""></span>
        <span> {{LifeIdex[3].category}}</span>
        <span>{{LifeIdex[3].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["LifeIdex"],
  data(){
    return{
      
    }
  },
  methods:{
    goWeatherIndexDetails(){
      this.$router.push("./WeatherIndexDetails")
    }
  }
};
</script>

<style>
.shzs {
  width: 80%;
  height: 120px;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 10px;
  background-color: rgba(74, 73, 73, 0.2);
  border: 1px rgb(44, 44, 44) solid;
}

.shzs .shzs-biaoti {
  width: 90%;
  height: 35px;
  font-size: 18px;
  margin-left: 5%;
  line-height: 35px;
  border-bottom: 1px solid rgb(48, 48, 49);
  display: inline-block;
}

.shzs .shzs-some {
  width: 298px;
  /* border: 1px solid red; */
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.shzs .shzs-some .text {
  height: 76px;
  width: 60px;
  /* border: 1px solid black; */
}
.shzs-some .text img{
  height: 35px;
}
.shzs-some .text span{
  font-size: 12px;
  display: block;
  text-align: center;
  margin-top: 3px;
}
.shzs-some .text span:nth-child(3){
  color: #000000;
}
</style>