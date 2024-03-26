<template>
  <div>
    <div class="topBarItem">
      <el-row>
        <el-col :span="3">
          <i class="el-icon-arrow-left" style="font-weight: bold;color: white" @click="goBack"/>
        </el-col>
        <el-col :span="18">
          <div class="textContent" style="font-weight: bold;color: white">
            设备管理
          </div>
        </el-col>
        <el-col :span="3">
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 56px;margin-bottom: 49px;height: 100%">
<!--      <select-line></select-line>-->
<!--      <show-device></show-device>-->
      <deviceanalysis v-bind:deviceOverview="devOverview"
                      @ShowNormal="handleShowNormal"
                      @ShowAbnormal="handleShowAbnormal"
                      @ShowAll="handleShowAll"
      ></deviceanalysis>

      <device-picker @getPosition="handleEvent" :putPosition="position"></device-picker>
      <device-card :judge="position" :ConditionJudge="condition" @sendDeviceOverview="receiveDevOverview"></device-card>
    </div>
  </div>
</template>

<script>
import SelectLine from "./components/selectLine";
import ShowDevice from "./components/showDevice";
import Deviceanalysis from "./another/deviceAnalysis";
import DevicePicker from "./another/devicePicker";
import DeviceCard from "./another/deviceCard";
export default {
  name: "deviceManagementIndex",
  components: {DeviceCard, DevicePicker, Deviceanalysis, ShowDevice, SelectLine},
  data() {
    return{
      devOverview: {},
      position: '全部',
      condition:'全部'
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    handleEvent(e) {
      this.position = e;
      console.log(e)
    },
    receiveDevOverview(e) {
      this.devOverview = e;
    },
    handleShowNormal(e){
      this.condition = e;
    },
    handleShowAbnormal(e){
      this.condition = e;
    },
    handleShowAll(e){
      this.condition = e;
      this.position = e;
    }
  }
}
</script>

<style scoped>
.topBarItem {
  position: fixed; /* 放到最顶上 */
  left: 0;
  right: 0;
  top: 0;
  height: 56px;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
  z-index: 100;


  width: 100%;
  text-align: center;
  background-color: rgb(51, 153, 255);
}
.textContent {
  text-align: center;
  line-height: 56px;
}

.el-icon-arrow-left {
  text-align: center;
  line-height: 56px;
}
</style>
