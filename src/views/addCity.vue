<template>
  <div>
    <div>
      <span class="head-top-height" @click="back()">取消</span>
      <input class="head-top-height" type="text" ref="input" />
      <button class="head-top-height search" ref="list" @click="listClick()">
        搜索
      </button>
    </div>

    <div class="radius">
      <ul ref="ulOnclick" id="ul-li" @click="ulOnclick">
        <li
          v-for="(datas, index) in getCity.location"
          :key="index"
          :data-index="index"
        >
          {{ datas.adm1 + ">" + datas.adm2 + ">" + datas.name }}
        </li>
      </ul>
    </div>
    <div>
      <p style="margin-left: 20px">热门城市</p>
      <div class="cityList" ref="ls" @click="lsClick">
        <div
          class="cityList-ls"
          v-for="(data, index) in getCiryList.topCityList"
          :key="index"
          :data-index2="index"
        >
          {{ data.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    // 返回函数
    back() {
      history.back();
    },
    blurInput() {},
    // 输入框判断是否为空并发送请求
    listClick() {
      let input = this.$refs.input.value;
      if (input == "") {
        alert("不能为空");
      } else {
        let address = input.replace(/\s*/g, "");
        this.$store.dispatch("getCity", address);
      }
    },
    // 封装函数（存储数据）
    dataStorage(cityName,cityId,cityNameAdm1,cityNameAdm2){
      let flage = 0;
      var arr1 = JSON.parse(localStorage.getItem("cityDataKey"));
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].cityId == cityId) {
          flage = 1;
          //   console.log(flage);
          alert("已经存在");
          break
        } 
      }
      if(flage==0){
          console.log(arr1);
          arr1.unshift({
            cityName: cityName,
            cityId: cityId,
            cityNameAdm1: cityNameAdm1,
            cityNameAdm2: cityNameAdm2,
          });
          alert("已添加"+cityNameAdm1+" "+cityNameAdm2+" "+cityName)
          // 再次添加到本地
          localStorage.setItem("cityDataKey", JSON.stringify(arr1));
        }
    },
    // 数据存储
    ulOnclick(e) {
      // let flage = 0;
      let a = e.target.getAttribute("data-index");
      let cityNameAdm1 = this.getCity.location[a].adm1;
      let cityNameAdm2 = this.getCity.location[a].adm2;
      let cityName = this.getCity.location[a].name;
      let cityId = this.getCity.location[a].id;
      this.dataStorage(cityName,cityId,cityNameAdm1,cityNameAdm2);
    },
    lsClick(e){
      console.log(this.$refs.ls);
      let a = e.target.getAttribute("data-index2");
      let cityNameAdm1 = this.getCiryList.topCityList[a].adm1;
      let cityNameAdm2 = this.getCiryList.topCityList[a].adm2;
      let cityName = this.getCiryList.topCityList[a].name;
      let cityId = this.getCiryList.topCityList[a].id;
      this.dataStorage(cityName,cityId,cityNameAdm1,cityNameAdm2)
    }
  },
  mounted() {
    this.$store.dispatch("getCityList");
  },
  beforeDestroy() {
    
  },
  computed: {
    ...mapState({
      getCity: (state) => state.getCity.getCity,
      getCiryList: (state) => state.getCityList.getCityList,
    }),
  },
};
</script>

<style scoped>
.head-top-height {
  height: 32px;
  font-size: 21px;
  margin-left: 15px;
  margin-top: 15px;
}
.search {
  border: 0;
  border-radius: 5px;
  background-color: #00bfff;
}
.radius {
  font-size: 20px;
  /* border: 1px solid red */
}
.radius li {
  list-style-type: none;
  margin: 15px 0;
}
.cityList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cityList-ls {
  margin: 10px;
  text-align: center;
  line-height: 30px;
  /* border: 1px solid red; */
  border-radius: 8%;
  background-color: #585a5a;
  height: 30px;
  width: 20%;
}
</style>