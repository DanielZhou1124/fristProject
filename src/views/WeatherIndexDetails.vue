<template>
  <div>
    <back></back>
    <div>
      <ul>
        <li v-for="(data, index) in list" :key="index">
          <span><img :src="data.img" alt="" /></span><span>详情</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      list: [
        {
          id: 1,
          img: require("../../public/icon-imgs/1.png"),
        },
        {
          id: 2,
          img: require("../../public/icon-imgs/2.png"),
        },
        {
          id: 3,
          img: require("../../public/icon-imgs/3.png"),
        },
        {
          id: 4,
          img: require("../../public/icon-imgs/4.png"),
        },
        {
          id: 5,
          img: require("../../public/icon-imgs/5.png"),
        },
        {
          id: 6,
          img: require("../../public/icon-imgs/6.png"),
        },
        {
          id: 7,
          img: require("../../public/icon-imgs/7.png"),
        },
        {
          id: 8,
          img: require("../../public/icon-imgs/8.png"),
        },
        {
          id: 9,
          img: require("../../public/icon-imgs/9.png"),
        },
        {
          id: 11,
          img: require("../../public/icon-imgs/11.png"),
        },
        {
          id: 12,
          img: require("../../public/icon-imgs/12.png"),
        },
        {
          id: 13,
          img: require("../../public/icon-imgs/13.png"),
        },
        {
          id: 14,
          img: require("../../public/icon-imgs/14.png"),
        },
        {
          id: 15,
          img: require("../../public/icon-imgs/15.png"),
        },
        {
          id: 16,
          img: require("../../public/icon-imgs/16.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
li {
  margin: 20px 0;
  list-style-type: none;
}
img {
  height: 70px;
  width: 70px;
}
</style>