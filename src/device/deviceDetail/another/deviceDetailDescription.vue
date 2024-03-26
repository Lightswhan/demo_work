<template>
  <div>
    <el-descriptions :column="6" border>
      <el-descriptions-item :span="6" labelStyle="width: 27%;height:4rem;text-align:center;">
        <template slot="label">
          <i class="el-icon-setting"></i>
          设备名称
        </template>
        {{ this.deviceData.device }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" labelStyle="width: 27%;height:4rem;text-align:center;">
        <template slot="label">
          <i class="el-icon-info"></i>
          设备状态
        </template>
        {{ this.deviceData.condition }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" labelStyle="width: 27%;height:4rem;text-align:center;">
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          设备位置
        </template>
        {{ this.deviceData.position }}
      </el-descriptions-item>
      <el-descriptions-item :span="6" labelStyle="width: 27%;height:4rem;text-align:center;">
        <template slot="label">
          <i class="el-icon-house"></i>
          传感器ID
        </template>
        {{ this.deviceData.sensor[this.sensorID].ID }}
      </el-descriptions-item>
      <el-descriptions-item :span="6" labelStyle="width: 27%;height:4rem;text-align:center;">
        <template slot="label">
          <i class="el-icon-tickets"></i>
          设备详情
        </template>
        该设备提供传感器共有{{ this.deviceData.sensor.length }}个，当前传感器提供属性：
        {{ this.deviceData.sensor[this.sensorID].Ch1 }}
        {{ !this.deviceData.sensor[this.sensorID].Ch2 ? '' : this.deviceData.sensor[this.sensorID].Ch2 }}
        {{ !this.deviceData.sensor[this.sensorID].Ch3 ? '' : this.deviceData.sensor[this.sensorID].Ch3 }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'deviceDetailDescription',
  data() {
    return {
      size: ''
    };
  },
  props: {
    deviceData: {
      type: Object,
      required: true
    },
    sensorID: {
      type: Number,
      required: true
    }
  },
}
</script>

<style scoped></style>
