<template>
  <!-- 当天详细天气信息 -->
  <div class="daping">
    <span class="dushu">{{ getWeather.temp }}℃</span>
    <span class="weatherText1">{{ getWeather.text }}</span>
    <span class="weatherText2">
      {{
        "体感 " +
        getWeather.feelsLike +
        "℃ | " +
        getWeather.windDir +
        " " +
        getWeather.windScale +
        "级 | 湿度" +
        getWeather.humidity +
        "%"
      }}
    </span>
  </div>
</template>

<script>
export default {
    props: ["getWeather"],

};
</script>

<style lang="less">
.daping {
  // border: 1px solid black;
  height: 350px;
  .dushu {
    font-size: 70px;

    margin-top: 100px;
    margin-left: 12px;
    display: inline-block;
  }
  .weatherText1 {
    font-size: 25px;
  }
  .weatherText2 {
    font-size: 18px;

    margin-top: 10px;
    margin-left: 13px;
    display: block;
  }
}
</style>