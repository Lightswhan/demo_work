<template>
  <div>
    <van-dropdown-menu>
      <!-- 传感器 -->
      <van-dropdown-item
        v-model="value1"
        :options="option1"
        @change="onChange"
      />
      <!-- channel选择器 -->
      <van-dropdown-item
        v-model="value2"
        :title="disable?deviceData.sensor[value1].Ch1:option2[showWhich-1][value2].text"
        :options="option2[showWhich-1]"
        :disabled="disable"
        @change="onChange2"
      />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  name: 'deviceDetailDropdown',
  data() {
    return {
      value1: 0,
      value2: 0,
      option1: [],
      showWhich: 0,   //1-环境温湿度，2-电流，3-压缩空气温度
      disable: true,
      senID: [],  //传感器ID，在chart中作为请求传感器数据的dev_id
      deviceName: '', //设备名称，作为参数传入chart组件，created中初始化，onchange中修改
      dataNumArr: [],
      option2: [   //二维数组
        [
          {
            text: '温度',
            value: 0
          },
          {
            text: '湿度',
            value: 1
          }
        ],
        [
          {
            text: '相1',
            value: 0
          },
          {
            text: '相2',
            value: 1
          },
          {
            text: '相3',
            value: 2
          }
        ],
        [
          {
            text: '温度',
            value: 0
          },
          {
            text: '湿度',
            value: 1
          }
        ]
      ],
    };
  },
  props: {
    deviceData: {
      type: Object,
      required: true
    }
  },
  created() {
    for (var i = 0; i < this.deviceData.sensor.length; i++) {
      this.option1.push({text: this.deviceData.sensor[i].type, value: i});
      this.senID.push(this.deviceData.sensor[i].ID);
      this.dataNumArr.push(this.deviceData.sensor[i].dataNum)
    }
    this.deviceName = this.deviceData.device;
    const op1 = this.option1;
    if (op1[0].text === '环境温湿度' || op1[0].text === '电流传感器' || op1[0].text === '压缩空气温度') {
      this.disable = false;
      switch (op1[0].text) {
        case '环境温湿度':
          this.showWhich = 1;
          break;
        case '电流传感器':
          this.showWhich = 2;
          break;
        case '压缩空气温度':
          this.showWhich = 3;
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    onChange(e) {
      const op1 = this.option1;
      const op2 = this.option2;
      switch (op1[e].text) {
        case '环境温湿度':
          this.showWhich = 1;
          break;
        case '电流传感器':
          this.showWhich = 2;
          break;
        case '压缩空气温度':
          this.showWhich = 3;
          break;
        default:
          this.showWhich = 0;
          break;
      }
      if (this.showWhich === 0) {
        this.disable = true;
      } else {
        this.disable = false;
      }
      this.value2 = 0;
      const sw = this.showWhich;
      const senInfo = {
        name: op1[e].text,
        ID: this.senID[e],
        dataNum: this.dataNumArr[e]
      };
      const senChannel = {
        name: this.disable ? null : op2[sw - 1][0].text,
        chIndex: 1
      };
      const chartInfo = {
        deviceName: this.deviceName,
        sensor: senInfo,
        channel: senChannel
      };

      this.$emit('receiveDropdownData', e);
      this.sendData(chartInfo);
    },
    onChange2(e) {
      console.log('change2');
      const op2 = this.option2;
      const v1 = this.value1;
      const sw = this.showWhich;
      const senInfo = {
        name: this.option1[v1].text,
        ID: this.senID[v1],
        dataNum: this.dataNumArr[v1]
      };
      const senChannel = {
        name: op2[sw - 1][e].text,
        chIndex: e + 1
      };
      const chartInfo = {
        deviceName: this.deviceName,
        sensor: senInfo,
        channel: senChannel
      };
      this.sendData(chartInfo);
    },
    initData() {
      const senInfo = {   //传感器信息
        name: this.option1[0].text, //传感器名称
        ID: this.senID[0], //传感器ID
        dataNum: this.dataNumArr[0]
      }
      const senChannel = {   //channel信息
        name: this.disable ? null : this.option2[this.showWhich - 1][0].text,   //channel名称
        chIndex: this.disable ? 1 : this.value2 + 1  //channel,value=1,2,3
      }
      const chartInfo = { //全部绘图信息储存在此对象中，具有属性 {deviceName，sensor{name, ID}, channel{name, chIndex}}
        deviceName: this.deviceName,
        sensor: senInfo,
        channel: senChannel,
      }
      this.$bus.$emit('sendDataToChart', chartInfo);
    },
    sendData(chartInfo) { //触发总线事件sendDataToChart的方法，打包并发送数据到chart组件，在每次dropdown改变时调用
      this.$bus.$emit('sendDataToChart', chartInfo);
    }
  }
};

</script>

<style scoped></style>
