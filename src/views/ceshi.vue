<template>
  <div id="app" ref="li">
    <!-- # 标签栏 -->
    <!-- <ul class="label-list">
      <li
        class="label-list-item"
        :class="{ 'select-label-list-item': index === 0 }"
        @click="index = 0"
      >
        1
      </li>
      <li
        class="label-list-item"
        :class="{ 'select-label-list-item': index === 1 }"
        @click="index = 1"
      >
        2
      </li>
      <li
        class="label-list-item"
        :class="{ 'select-label-list-item': index === 2 }"
        @click="index = 2"
      >
        3
      </li>
      <li
        class="label-list-item"
        :class="{ 'select-label-list-item': index === 3 }"
        @click="index = 3"
      >
        4
      </li>
      <li
        class="label-list-item"
        :class="{ 'select-label-list-item': index === 4 }"
        @click="index = 4"
      >
        5
      </li>
    </ul> -->
    <!-- # 外层组件 -->
    <scroll-tab
      :current-select="index"
      :touch-delay="0.3"
      @selectChange="handleSelectChange"
    >
      <!-- # 被切换的页面组件 -->
      <scroll-tab-col class="item"
        ><div class="item1">
          <homepage></homepage></div
      ></scroll-tab-col>
      <scroll-tab-col class="item"
        ><div class="item2">
          <homepage></homepage></div
      ></scroll-tab-col>
      <scroll-tab-col class="item"
        ><div>
          <homepage></homepage></div
      ></scroll-tab-col>
      <scroll-tab-col class="item"
        ><div><homepage></homepage></div
      ></scroll-tab-col>
      <scroll-tab-col class="item"
        ><div>
          <homepage></homepage></div
      ></scroll-tab-col>
    </scroll-tab>
  </div>
</template>

<script>
import homepage from "../components/reuseComponents/homePage/index.vue";

export default {
  data() {
    return {
      index: 0,
    };
  },
  components: {
    homepage,
  },
  methods: {
    handleSelectChange(tabIndex) {
      this.index = tabIndex;
    },
  },
  created() {},
};
</script>
<style>
</style>