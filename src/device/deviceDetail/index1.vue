<template>
  <div>
    <div class="topBarItem">
      <el-row>
        <el-col :span="3">
          <i class="el-icon-arrow-left" style="font-weight: bold;color: white" @click="goBack"/>
        </el-col>
        <el-col :span="18">
          <div class="textContent" style="font-weight: bold;color: white">
            设备详情
          </div>
        </el-col>
        <el-col :span="3">
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 56px;margin-bottom: 4%;height: 100%">
      <device-detail-description :deviceData=this.$route.query.device
                                 :sensorID="this.sensor"></device-detail-description>
      <device-detail-dropdown @receiveDropdownData="getSensor"
                              :deviceData="this.$route.query.device"></device-detail-dropdown>
      <device-time-picker class="picker"></device-time-picker>
      <device-chart class="chart"></device-chart>
    </div>

  </div>
</template>

<script>
import DeviceDetailDescription from "./another/deviceDetailDescription";
import DeviceDetailDropdown from "./another/deviceDetailDropdown";
import DeviceTimePicker from "./another/deviceDateTimePicker";
import DeviceChart from "./another/deviceChart";

export default {
  name: "deviceDetailIndex1",
  components: {DeviceChart, DeviceTimePicker, DeviceDetailDropdown, DeviceDetailDescription},
  data() {
    return {
      sensor: 0, // 0代表ch1, 1代表ch2, 以此类推
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
  mounted() {

  },
  methods: {
    goBack() {
      this.$router.back()
    },
    getSensor(data){
      this.sensor=data
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
.page{
  margin-bottom: 56.19px;
}
.head{
  font-size: 20px;
  text-align: center;
  margin: 18px;
}
.description {
  margin: 20px auto;
  font-size: 18px;
}

.picker{
  margin-top: 20px;
}
</style>
