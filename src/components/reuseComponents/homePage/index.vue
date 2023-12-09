<template>
  <div>
    <now-weather :getWeather="getWeather"></now-weather>
    <threeDayWeather :get3DayData="get3DayData"></threeDayWeather>
    <twenty-four-hour-data :data24="data24"></twenty-four-hour-data>
    <life-idex :LifeIdex="LifeIdex"></life-idex>
    <fifteen-day :get15DayData="get15DayData"></fifteen-day>
  </div>
</template>
  
  <script>
import nowWeather from "../../nowWeather/index.vue";
import threeDayWeather from "../../threeDayWeather/index.vue";
import twentyFourHourData from "../../twentyFourHourData/index.vue";
import lifeIdex from "../../lifeIdex/index.vue";
import fifteenDay from "../../fifteenDay/index.vue";

import { mapGetters, mapState } from "vuex";

export default {
  // 监听城市id的变化，更新数据
  watch: {
    cityId(newVal, oldVal) {
      if (newVal !== oldVal) {
        // console.log(newVal);
        this.$store.dispatch("get3DayData", newVal);
        // 实时天气
        this.$store.dispatch("getWeather", newVal);
        // 三天天气
        this.$store.dispatch("get3DayData", newVal);
        // 24小时天气
        this.$store.dispatch("get24HourData", newVal);
        //生活服务
        this.$store.dispatch("getLifeIdex", newVal);
        // 15天天气预报
        this.$store.dispatch("get15DayData", newVal);
      }
    },
  },
  components: {
    nowWeather,
    threeDayWeather,
    fifteenDay,
    twentyFourHourData,
    lifeIdex,
  },
  data() {
    return {
      arr: [],
      as: 0,
      cityId: "",
      cityNameAndIdex: "",
      name: "home",
    };
  },
  mounted() {
    this.$bus.$on("cityId", (cityId) => {
      this.cityId = cityId;
    });
  },
  computed: {
    ...mapState({
      get3DayData: (state) => state.thereDay.get3DayData,
      getWeather: (state) => state.nowData.getWeather,
      lifeIdexData: (state) => state.lifeIdex.getLifeIdex,
      get15DayData: (state) => state.fifteenDay.get15DayData,
    }),
    ...mapGetters(["data24", "LifeIdex"]),
  },
};
</script>
  
  <style>
</style>