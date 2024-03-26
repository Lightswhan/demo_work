<template>
  <div>
    <div >
      <top-bar-index :top-bar-text="topBarText" :is-show-back="isShowBack" :is-show-button="isShowButton" :button-text="buttonText"></top-bar-index>
      <div style="margin-top: 56px;margin-bottom: 49px">
        <select-function-index></select-function-index>
      </div>
    </div>
    <tab-bar-simulator v-if="isShowTabBar" :config-bar-data="configBarData"></tab-bar-simulator>
  </div>
</template>

<script>
import TopBarIndex from "../../topBar";
import TabBarSimulator from "../../tabBar/TabBarSimulator";
import SelectFunctionIndex from "../../selectFunction";
export default {
  name: "homePageIndex",
  components: {SelectFunctionIndex, TabBarSimulator, TopBarIndex},
  data() {
    return {
      topBarText: '首页',
      isShowBack: false,
      isShowButton: false,
      buttonText: '',
      isShowTabBar: true,
      configBarData: [
        {text: '首页', isHiddenBadge: true, src: require("../../../assets/common.svg"), srcActive: require("../../../assets/common.svg"),routerTo: '/homePage'},
        {text: '任务', isHiddenBadge: true, src: require("../../../assets/common.svg"), srcActive: require("../../../assets/common.svg")},
        {text: '通知', isHiddenBadge: true, src: require("../../../assets/common.svg"), srcActive: require("../../../assets/common.svg")},
        {text: '我的', isHiddenBadge: true, src: require("../../../assets/common.svg"), srcActive: require("../../../assets/common.svg")},
      ]
    }
  },
  created() {
  },
  mounted() {

  },
  methods: {
  }

}
</script>

<style scoped>

</style>
