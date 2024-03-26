<template class="selectBox">
  <div class="selectItem">
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="产线设备"
      placeholder="请选择产线设备"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom" :get-container="getContainer">
      <van-picker
        title="请选择产线"
        show-toolbar
        :columns="options"
        @cancel="show = false"
        @confirm="onFinish"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'selectLine',
  data() {
    return {
      show: false,
      fieldValue: '全部',
      selectOption: null,
      // options: [
      //   {
      //     value: 'huadu',
      //     text: '花都新工厂-机加线',
      //     children: [{
      //       value: 1000004700060003,
      //       text: 'CNCM3内喷电机-接触式温度传感器',
      //       address: '花都新工厂-机加线CNC M3内喷电机',
      //       sensorType: '接触式温度传感器',
      //       ch1: '温度',
      //     }, {
      //       value: 1000004700080003	,
      //       text: '工控机柜-环境温湿度',
      //       address: '花都新工厂-机加线工控机柜',
      //       sensorType: '环境温湿度',
      //       ch1: '温度',
      //       ch2: '湿度',
      //     }, {
      //       value: 1000004700040003,
      //       text: 'CNCM3内喷电机-振动位移传感器',
      //       address: '花都新工厂-机加线CNC M3内喷电机',
      //       sensorType: '振动位移传感器',
      //       ch1: '位移',
      //     }, {
      //       value: 1000004700070003	,
      //       text: 'CNCM5内喷电机-非接触式温度传感器',
      //       address: '花都新工厂-机加线CNC M5内喷电机',
      //       sensorType: '非接触式温度传感器',
      //       ch1: '温度',
      //     }, {
      //       value: 1000004700030003	,
      //       text: 'CNCM5内喷电机-振动烈度传感器',
      //       address: '花都新工厂-机加线CNC M5内喷电机',
      //       sensorType: '振动烈度传感器',
      //       ch1: '烈度',
      //     }, {
      //       value: 1000004700020003	,
      //       text: 'CNCM5内喷电机-电流传感器',
      //       address: '花都新工厂-机加线CNC M5内喷电机',
      //       sensorType: '电流传感器',
      //       ch1: '相1',
      //       ch2: '相2',
      //       ch3: '相3',
      //     }, {
      //       value: 1000004700100001	,
      //       text: '立体库机器人上下件左侧进气三联件出气-压缩空气压力',
      //       address: '花都新工厂-机加线立体库机器人上下件左侧进气三联件出气',
      //       sensorType: '压缩空气压力',
      //       ch1: '压力',
      //     }, {
      //       value: 1000004700100001	,
      //       text: '立体库-压缩空气温度',
      //       address: '花都新工厂-机加线立体库',
      //       sensorType: '压缩空气温度',
      //       ch1: '温度',
      //       ch2: '湿度',
      //     }]
      //   }, {
      //     value: 'huangpu',
      //     text: '黄埔-示范线',
      //     children: [{
      //       value: 1000004700080004,
      //       text: '旁边墙上工控机柜-环境温湿度',
      //       address: '黄埔示范线旁边墙上工控机柜',
      //       sensorType: '环境温湿度',
      //       ch1: '温度',
      //       ch2: '湿度',
      //     }, {
      //       value: 1000004700070002,
      //       text: '靠近立体库机床的外置电机-非接触式温度传感器',
      //       address: '黄埔示范线靠近立体库机床的外置电机',
      //       sensorType: '非接触式温度传感器',
      //       ch1: '温度',
      //     }, {
      //       value: 1000004700030002,
      //       text: '靠近立体库机床的外置电机-振动烈度器',
      //       address: '黄埔示范线靠近立体库机床的外置电机',
      //       sensorType: '振动烈度器',
      //       ch1: '烈度',
      //     }, {
      //       value: 1000004700040002,
      //       text: '靠近立体库机床的外置电机-振动位移器',
      //       address: '黄埔示范线靠近立体库机床的外置电机',
      //       sensorType: '振动位移器',
      //       ch1: '位移',
      //     }, {
      //       value: 1000004700020002,
      //       text: '靠近立体库机床的外置电机-电流传感器',
      //       address: '花都新工厂-机加线CNC M5内喷电机',
      //       sensorType: '电流传感器',
      //       ch1: '相1',
      //       ch2: '相2',
      //       ch3: '相3',
      //     }, {
      //       value: 1000004700100002,
      //       text: '立体库-压缩气体压力传感器',
      //       address: '花都新工厂-机加线CNC M5内喷电机',
      //       sensorType: '压缩气体压力传感器',
      //       ch1: '压力',
      //     }, {
      //       value: 1000004700050003,
      //       text: '立体库-压缩气体温湿度传感器',
      //       address: '黄埔示范线立体库',
      //       sensorType: '压缩气体温湿度传感器',
      //       ch1: '温度',
      //       ch2: '湿度',
      //     }]
      //   }],
      options: ['全部','花都新工厂-机加线', '黄埔-示范线']
    }
  },
  created() {

  },
  mounted() {

  },
  // JS方法
  methods: {
    onFinish(value) {
      this.show = false;
      this.fieldValue = value
      this.$bus.$emit('selectLine',value)
    },
    getContainer() {
      return document.querySelector('#mobile-app');
    }

  }
}
</script>

<style scoped>
.selectBox {
  width: 100%;
  text-align: center;
}

.selectItem {
  width: 100%;
  text-align: center;
  /*padding-left: 5%;*/
  /*padding-right: 5%;*/
}

/*.van-overlay {*/
/*  position: relative;*/
/*}*/
/*.van-popup {*/
/*  position: sticky;*/
/*}*/
</style>
