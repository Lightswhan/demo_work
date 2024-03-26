<template class="cardDBox">
  <div class="cardDItem">
    <el-card class="card-B">
      <div slot="header" class="clearfix" align="center">
        <span>监控</span>
      </div>
      <div class="text item">
        <el-descriptions
          :column="3"
          direction="vertical"
          :colon="false"
          :content-style="rowCenter"
          :label-style="rowCenter"
        >
          <el-descriptions-item label="总数">
            <span
              style="font-size: x-large;"
              :style="{'color': 'black'}"
            >
              {{ total }}
            </span>
          </el-descriptions-item>
          <el-descriptions-item label="异常">
            <span
              style="font-size: x-large;"
              :style="{'color': 'red'}"
            >
              {{ error }}
            </span>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </el-card>
    <el-card v-for="(item, index) in showDeviceData" :key="item.text" class="card-D">
      <div style="margin-top: 10%; margin-bottom: 10%" @click="showDetails(item)">
        <el-row>
          <el-col :span="7">
            <el-image style="width: 80%; height: 100px" :src="item.imgUrl" fit="fill">
            </el-image>
          </el-col>
          <el-col :span="12">
            <span style="font-size: 18px">{{ item.text }}</span>
          </el-col>
          <el-col :span="5">
            <el-tag type="success" effect="dark">正常</el-tag>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "showDevice",
  data() {
    return {
      deviceData: [
        {
          value: 1000004700060003,
          text: 'CNCM3内喷电机-接触式温度传感器',
          address: '花都新工厂-机加线CNC M3内喷电机',
          sensorType: '接触式温度传感器',
          ch1: '温度',
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2020%2F713%2F813%2F23347318317_2063094821.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1689080901&t=6944742fd9b06ff2db0e7b8978897faa',
        }, {
          value: 1000004700080003,
          text: '工控机柜-环境温湿度',
          address: '花都新工厂-机加线工控机柜',
          sensorType: '环境温湿度',
          ch1: '温度',
          ch2: '湿度',
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6a2f2c9a-f05d-4e94-880d-c4cc57ef96a2%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1689080817&t=9bc73043d929508c4c8a27b41b3e00c8',
        }, {
          value: 1000004700040003,
          text: 'CNCM3内喷电机-振动位移传感器',
          address: '花都新工厂-机加线CNC M3内喷电机',
          sensorType: '振动位移传感器',
          ch1: '位移',
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2019%2F083%2F530%2F11991035380_289683282.jpg_Q75.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1689080846&t=d5552e0d41002e586ca5b8f42ffa40f0',
        }, {
          value: 1000004700070003,
          text: 'CNCM5内喷电机-非接触式温度传感器',
          address: '花都新工厂-机加线CNC M5内喷电机',
          sensorType: '非接触式温度传感器',
          ch1: '温度',
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2020%2F713%2F813%2F23347318317_2063094821.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1689080901&t=6944742fd9b06ff2db0e7b8978897faa',
        }, {
          value: 1000004700030003,
          text: 'CNCM5内喷电机-振动烈度传感器',
          address: '花都新工厂-机加线CNC M5内喷电机',
          sensorType: '振动烈度传感器',
          ch1: '烈度',
          imgUrl: 'https://cos3.solepic.com/20210401/b_5568894202104011846135685.png',
        }, {
          value: 1000004700020003,
          text: 'CNCM5内喷电机-电流传感器',
          address: '花都新工厂-机加线CNC M5内喷电机',
          sensorType: '电流传感器',
          ch1: '相1',
          ch2: '相2',
          ch3: '相3',
          imgUrl: 'https://img2.baidu.com/it/u=1698501617,989456385&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=533',
        }, {
          value: 1000004700100001,
          text: '立体库机器人上下件左侧进气三联件出气-压缩空气压力',
          address: '花都新工厂-机加线立体库机器人上下件左侧进气三联件出气',
          sensorType: '压缩空气压力',
          ch1: '压力',
          imgUrl: 'https://p8.itc.cn/images01/20201117/8807a209f8d24e90b7addf51625a628a.jpeg',
        }, {
          value: 1000004700100001,
          text: '立体库-压缩空气温度',
          address: '花都新工厂-机加线立体库',
          sensorType: '压缩空气温度',
          ch1: '温度',
          ch2: '湿度',
          imgUrl: 'https://p0.itc.cn/q_70/images03/20200812/2a51c063390b459fb3cd064963ba9d90.jpeg',
        },
        {
          value: 1000004700080004,
          text: '旁边墙上工控机柜-环境温湿度',
          address: '黄埔示范线旁边墙上工控机柜',
          sensorType: '环境温湿度',
          ch1: '温度',
          ch2: '湿度',
          imgUrl: 'https://img75.ybzhan.cn/9/20201025/637391934517486457464.jpg',
        }, {
          value: 1000004700070002,
          text: '靠近立体库机床的外置电机-非接触式温度传感器',
          address: '黄埔示范线靠近立体库机床的外置电机',
          sensorType: '非接触式温度传感器',
          ch1: '温度',
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2020%2F713%2F813%2F23347318317_2063094821.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1689080901&t=6944742fd9b06ff2db0e7b8978897faa',
        }, {
          value: 1000004700030002,
          text: '靠近立体库机床的外置电机-振动烈度器',
          address: '黄埔示范线靠近立体库机床的外置电机',
          sensorType: '振动烈度器',
          ch1: '烈度',
          imgUrl: 'https://cos3.solepic.com/20210401/b_5568894202104011846135685.png',
        }, {
          value: 1000004700040002,
          text: '靠近立体库机床的外置电机-振动位移器',
          address: '黄埔示范线靠近立体库机床的外置电机',
          sensorType: '振动位移器',
          ch1: '位移',
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2019%2F083%2F530%2F11991035380_289683282.jpg_Q75.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1689080846&t=d5552e0d41002e586ca5b8f42ffa40f0',
        }, {
          value: 1000004700020002,
          text: '靠近立体库机床的外置电机-电流传感器',
          address: '黄埔示范线靠近立体库机床的外置电机',
          sensorType: '电流传感器',
          ch1: '相1',
          ch2: '相2',
          ch3: '相3',
          imgUrl: 'https://img2.baidu.com/it/u=1698501617,989456385&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=533',
        }, {
          value: 1000004700100002,
          text: '立体库-压缩气体压力传感器',
          address: '黄埔示范线立体库',
          sensorType: '压缩气体压力传感器',
          ch1: '压力',
          imgUrl: 'https://p1.itc.cn/q_70/images01/20230529/3598545ea4e74076987489f311590be6.jpeg',
        }, {
          value: 1000004700050003,
          text: '立体库-压缩气体温湿度传感器',
          address: '黄埔示范线立体库',
          sensorType: '压缩气体温湿度传感器',
          ch1: '温度',
          ch2: '湿度',
          imgUrl: 'https://cos2.solepic.com/20190923/b_5316780_201909231509545705.jpg',
        }
      ],
      showDeviceData: [],
      error: 0,
      rowCenter: {
        'text-align': 'center'
      },
    }
  },
  created() {
    this.$bus.$on('selectLine', (value) => {
      if (value === '全部') {
        this.showDeviceData = this.deviceData
      } else if (value === '花都新工厂-机加线') {
        this.showDeviceData = []
        for (var i = 0; i < this.deviceData.length; i++) {
          if (this.deviceData[i].address.includes('花都新工厂')) {
            this.showDeviceData.push(this.deviceData[i])
          }
        }
      } else {
        this.showDeviceData = []
        for (var i = 0; i < this.deviceData.length; i++) {
          if (this.deviceData[i].address.includes('黄埔')) {
            this.showDeviceData.push(this.deviceData[i])
          }
        }
      }
    })
  },
  mounted() {
    this.showDeviceData = this.deviceData
  },
  computed: {
    total() {
      return this.showDeviceData.length
    }
  },
  methods: {
    showDetails(item) {
      this.$router.push({
        path: '/deviceDetail',
        query: {
          param: JSON.stringify(item)
        }
      })
    },
  }
}
</script>

<style scoped>
.header-content {
  margin-bottom: 2%;
}

.cardDBox {
  width: 100%;
  text-align: center;
}

.cardDItem {
  width: 100%;
  margin-top: 3%;
  border: #7d7d7f solid;
  border-radius: 5px;
  text-align: center;
  padding: 20px 10px;
}

.card-D {
  width: 100%;
}

.card-B {
  width: 100%;
  margin-bottom: 3%;
  border-radius: 3%;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.text {
  font-size: 10%;
  margin: 3%;
}

.item {
  margin-bottom: 2%;
}
</style>
