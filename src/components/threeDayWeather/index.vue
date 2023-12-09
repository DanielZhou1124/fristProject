<template>
  <!-- 展示三天天气 -->
  <div style="">
    <ul class="weather">
      <li class="day" v-for="(data, index) in get3DayData" :key="index">
        <span class="span"
          >{{ Day[index] }}天&emsp;&emsp;&emsp;&emsp;{{
            data.tempMin + "~" + data.tempMax + "℃"
          }}</span
        >
        <span class="span"
          >白天:&emsp;<i :class="'qi-' + data.iconDay"></i>&emsp;{{
            data.textDay + "/" + data.windDirDay
          }}<span class="windScale">{{ data.windScaleDay + "级" }}</span></span
        >
        <span class="span"
          >夜晚:&emsp;<i :class="'qi-' + data.iconNight"></i>&emsp;{{
            data.textNight + "/" + data.windDirNight
          }}<span class="windScale">{{
            data.windScaleNight + "级"
          }}</span></span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ["get3DayData"],
  data() {
    return {
      Day: ["今", "明", "后"],
    };
  },
};
</script>

<style lang="less">
.weather {
  display: block;
  padding-inline-start: 0px;
  .day {
    height: 80px;
    width: 80%;
    display: block;
    // background: linear-gradient(transparent,rgba(0,0,0,.7));
    background-color: rgba(74, 73, 73, 0.3);
    border: 1px rgb(44, 44, 44) solid;
    border-radius: 10px;
    margin: 10px auto;
    overflow: visible;
    list-style: none;
    .span {
      display: block;
      margin: 6px 0 6px 15px;
      .windScale {
        margin: 0 45px 0 0;
        float: right;
      }
    }
  }
}
</style>