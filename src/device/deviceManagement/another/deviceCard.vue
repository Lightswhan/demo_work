<template class="cardDBox">
  <div class="cardDItem">
    <el-card hint v-for="(item, index) in deviceData" :key="item.device"
      v-if="item.display" class="card-D">
      <div style="margin-top: 10%; margin-bottom: 10%" @click="showDetails(item)">
        <el-row>
          <el-col :span="10" :offset="1">
            <el-image style="width: 100%; height: 100px" :src="item.imgUrl" fit="fill">
            </el-image>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="header-content">
<!--              将标题分割，以符号-为界限-->
              <el-tag style="font-size: 16px;">{{ item.device.split('-')[0] }}</el-tag><br>
              <span style="font-size: 16px;">{{ item.device.split('-')[1] }}</span>
            </div>
            <br>
            <div>
<!--              两种tag样式情况的对比-->
<!--              <el-tag size="large" class="card-tag" plain :type="item.condition === '正常'? 'primary' :'danger' ">{{ item.condition }}</el-tag>-->
              <van-tag size="large" class="card-tag" plain :type="item.condition === '正常'? 'primary' :'danger' ">{{ item.condition }}</van-tag>
            </div>


<!--            添加工单的按钮-->
<!--            <div style="margin-top: 20px;">
              <el-button size="small" plain icon="el-icon-plus" type="primary" class="el-button" round v-on:click.stop="onClick(
                {
                  name: item.device,  //设备名称
                  location: item.position,  //设备地址
                }
              )">新建工单
              </el-button>
            </div>-->

          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'deviceCard',
  props: {
    judge: {
      type: String,
      default:'全部'
    },
    ConditionJudge:{
      type:String,
      default: '全部'
    }
  },
  data() {
    return {
      deviceData: [
        {
          // imgUrl: 'https://img1.imgtp.com/2023/06/17/dEvobPzY.jpg',
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi2%2F3834875901%2FO1CN01EtFjT21tShhGfxywQ_%21%213834875901.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699667890&t=26c00fd9f6da30aebfc536c2cff2f6a7',
          device: '花都新工厂-机加线M3內喷电机',
          position: '花都',
          sensor: [
            {
              ID: '1000004700060003',
              type: '接触式温度传感器',
              Ch1: '温度',
              dataNum: 1
            },
            {
              ID: '1000004700040003',
              type: '振动位移传感器',
              Ch1: '位移',
              dataNum: 1
            }
          ],
          condition: '正常',
          display: true,
        },
        {
          // imgUrl: 'https://img1.imgtp.com/2023/06/17/8nc2DN0O.jpg',
          imgUrl: 'https://img0.baidu.com/it/u=3323605163,4149402083&fm=253&fmt=auto&app=120&f=JPEG?w=347&h=500',
          device: '花都新工厂-机加线工控机柜',
          position: '花都',
          sensor: [
            {
              ID: '1000004700080003',
              type: '环境温湿度',
              Ch1: '温度',
              Ch2: '湿度',
              dataNum: 2
            }
          ],
          condition: '正常',
          display:true,
        },
        {
          // imgUrl: 'https://img1.imgtp.com/2023/06/17/dEvobPzY.jpg',
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2019%2F775%2F325%2F11296523577_111794445.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699667967&t=492027d10bd2e8ebe2bc6467c26ce478',
          device: '花都新工厂-机加线M5內喷电机',
          position: '花都',
          sensor: [
            {
              ID: '1000004700070003',
              type: '非接触式温度传感器',
              Ch1: '温度',
              dataNum: 1
            },
            {
              ID: '1000004700030003',
              type: '振动烈度传感器',
              Ch1: '烈度',
              dataNum: 1
            },
            {
              ID: '1000004700020003',
              type: '电流传感器',
              Ch1: '相1',
              Ch2: '相2',
              Ch3: '相3',
              dataNum: 3
            }
          ],
          condition: '正常',
          display:true
        },
        // {
        //   // imgUrl: 'https://img1.imgtp.com/2023/06/17/sPwC4q7f.jpg',
        //   imgUrl: 'http://t13.baidu.com/it/u=93071451,889479479&fm=224&app=112&f=JPEG?w=500&h=500',
        //   device: '花都新工厂-机加线立体库机器人上下件左侧进气三联件出气',
        //   position: '花都',
        //   sensor: [
        //     {
        //       ID: '1000004700100001',
        //       type: '压缩空气压力',
        //       Ch1: '压力',
        //       dataNum: 1
        //     }
        //   ],
        //   condition: '异常',
        //   display:true
        // },
        {
          // imgUrl: 'https://img1.imgtp.com/2023/06/17/NtZ5bwOR.jpg',
          imgUrl: 'https://l.b2b168.com/2022/01/30/14/202201301425377376774.jpg',
          device: '花都新工厂-机加线立体库',
          position: '花都',
          sensor: [
            {
              ID: '1000004700050004',
              type: '压缩空气温度',
              Ch1: '温度',
              Ch2: '湿度',
              dataNum: 2
            }
          ],
          condition: '正常',
          display:true
        },
        {
          // imgUrl: 'https://img1.imgtp.com/2023/06/17/8nc2DN0O.jpg',
          imgUrl: 'https://img0.baidu.com/it/u=3365107405,2747744545&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          device: '黄埔示范线-工控机柜',
          position: '黄埔',
          sensor: [
            {
              ID: '1000004700080004',
              type: '环境温湿度',
              Ch1: '温度',
              Ch2: '湿度',
              dataNum: 2
            }
          ],
          condition: '正常',
          display:true
        },
        {
          // imgUrl: 'https://img1.imgtp.com/2023/06/17/1WqVtAsQ.jpg',
          imgUrl: 'https://img2.baidu.com/it/u=507802217,262488068&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          device: '黄埔示范线-外置电机',
          position: '黄埔',
          sensor: [
            {
              ID: '1000004700070002',
              type: '非接触式温度传感器',
              Ch1: '温度',
              dataNum: 1
            },
            {
              ID: '1000004700030002',
              type: '振动烈度器',
              Ch1: '烈度',
              dataNum: 1
            },
            {
              ID: '1000004700040002',
              type: '振动位移器',
              Ch1: '位移',
              dataNum: 1
            },
            {
              ID: '1000004700020002',
              type: '电流传感器',
              Ch1: '相1',
              Ch2: '相2',
              Ch3: '相3',
              dataNum: 3
            }
          ],
          condition: '正常',
          display:true
        },
        {
          // imgUrl: 'https://img1.imgtp.com/2023/06/17/NtZ5bwOR.jpg',
          imgUrl: 'https://img2.baidu.com/it/u=1452819156,1485302314&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
          device: '黄埔示范线-立体库',
          position: '黄埔',
          sensor: [
            {
              ID: '1000004700100002',
              type: '压缩气体压力传感器',
              Ch1: '压力',
              dataNum: 1
            },
            {
              ID: '1000004700050003',
              type: '压缩气体温湿度传感器',
              Ch1: '温度',
              Ch2: '湿度',
              dataNum: 2
            }
          ],
          condition: '正常',
          display:true
        },
      ]
    }
  },
  // 组件初始化前的准备操作，在此处执行
  created() {
    // 事件监听，this.$bus.$on事件一般在此处定义
    // axios.get(`http://10.112.6.250:8888/api/v1/sensor`,{
    //   params:{
    //     dev_id:100000470006000,
    //     begin_time:1679393271064000000,
    //     end_time:1679393371065000000
    //   }
    // }).then(function (response) {
    //   console.log(response)
    // }).catch(function (error){
    //   alert(error)
    // })
    // 初始数据载入

  },
  // 组件初始化后需要进行的操作，在此处执行
  mounted() {
    // 组件渲染，传递参数，this.$bus.$emit
    var normalDevice = 0, abnormalDevice = 0;
    const dev = this.deviceData;
    for (var i = 0; i < dev.length; i++) {
      switch (dev[i].condition) {
        case '正常':
          normalDevice++;
          break;
        case '异常':
          abnormalDevice++;
          break;
        default:
          throw new Error('未定义的condition属性');
      }
    }

    this.$emit('sendDeviceOverview', {
      normal: normalDevice,
      abnormal: abnormalDevice
    });
  },
  // JS方法
  methods: {
    showDetails(item) {
      console.log(item)
      this.$router.push(
        {
          path: '/deviceDetail',
          query: {
            device: item
          }
        },
        () => { console.log(item) },
        () => { console.log('失败') })
    },
    onClick(e) {
      this.$router.push({
        path: '/newOrder',  //路径
        query: e
      })
    }
  },
  watch:{
    judge(judge){
      const dev = this.deviceData;
      for (var i = 0; i < dev.length; i++) {
        if (judge === '全部') {
          dev[i].display = true
        }
        else {
          dev[i].display = dev[i].position === judge;
        }
      }
    },
    ConditionJudge(condition){
      const dev = this.deviceData;
      for (var i = 0; i < dev.length; i++) {
        if (condition ==='全部'){
          dev[i].display = true
        }
        else {
          /*存在覆盖问题要么用两个else*/
        /*  if (dev[i].condition === condition) {
            dev[i].display = true
          }*/

          /*不能对产线进行筛选,加上一层判断*/
          // 确实在点击操作的时候，存在一些奇奇怪怪的问题。
          if (this.$props.judge ==='全部') {
            dev[i].display = (dev[i].condition === condition);
          }else {
            dev[i].display = (dev[i].condition === condition)&&((dev[i].position === this.$props.judge));
          }
        }

      }
    }

  }
}
</script>

<style scoped>
.cardDBox {
  width: 100%;
  text-align: center;
}

.cardDItem {
  width: 100%;
  margin-top: 3%;
  border: #7d7d7f;


}

.header-content {
  margin-bottom: 2%;
}

.card-D {
  width: 100%;
  /* margin-bottom: 3%; */
}
.card-tag{
  font-size: 20px;

}
</style>
