<template>
  <div class="chart">
    <div id="chartOfDevice" v-show="ifDataExist"></div>
    <el-empty v-show="(!ifDataExist)" description="这里应该是个图表"></el-empty>
  </div>
</template>


<script>
export default {
  name: 'deviceChart',
  data() {
    return {
      apiData: [], //画图所需的dataset
      max: {type: Number},    //数据最大值
      min: {type: Number},
      valueSpan: 0, //数据跨度，最值之差
      chartData: {},   //作图所需数据, {deviceName，sensor{name, ID}, channel{name, chIndex}}
      ifDataExist: {
        type: Boolean,
        default: true
      },
      time: {Type: Object}  //时间戳{begin_time, end_time}
    }
  },
  created() {
    this.$bus.$off('sendDataToChart');
    this.$bus.$on('sendDataToChart', this.handleDataFromDropdown);
    this.$bus.$off('sendTimeToChart');
    this.$bus.$on('sendTimeToChart', e => {
      console.log(e)
      this.time = e;
    })
  },
  computed: {
    monitor() {
      return Object.assign({}, this.chartData, this.time);
    }
  },
  watch: {
    monitor: async function () {
      if (this.apiData.length !== 0) {
        this.apiData.splice(0);
      }
      await this.getData();
      this.determineSplitValue();
      this.drawLine();
    }
  },
  methods: {
    handleDataFromDropdown(e) {  //{deviceName，sensor{name, ID}, channel{name, chIndex}}
      this.chartData = e;
    },
    async getData() {
      this.apiData = []
      // console.log(this.chartData)
      // console.log(this.time)
      try {
        const response = await this.$axios({
          method: 'GET',
          url: 'http://10.112.16.136:8989/base-file/part-dump.csv',
        })
        const oriData = response.data.split('wusuo_sensor,'); //数据起始时间2023-4-13 8：0：34，2023-4-13 8:11:20
        const valueInfoArr = []; // 二维数组 [[dataTime, devID, value],[]]
        console.log(oriData[1].replaceAll('\"', '').replace('\n', '').split(','))
        // this.chartData.channel.chIndex
        for (let i = 1; i < oriData.length; i++) {
          if (this.chartData.sensor.ID === oriData[i].replaceAll('\"', '').replace('\n', '').split(',')[1]) {
            if (this.chartData.sensor.dataNum > 1) {
              const valueArr = oriData[i].replaceAll('\"', '').replace('\n', '').slice(37).split(',');
              const newArr = [];
              for (let j = this.chartData.channel.chIndex - 1; j < valueArr.length; j = j + this.chartData.sensor.dataNum) {
                newArr.push(valueArr[j])
              }
              valueInfoArr.push({time: oriData[i].replaceAll('\"', '').replace('\n', '').split(',')[0], value: newArr})
            } else {
              const valueArr = oriData[i].replaceAll('\"', '').replace('\n', '').slice(37).split(',');
              valueInfoArr.push({time: oriData[i].replaceAll('\"', '').replace('\n', '').split(',')[0], value: valueArr})
            }
          }
        }
        // console.log(valueInfoArr)
        if (this.time.begin_time != null) {
          // 查询时间
          for (let m = 0; m < valueInfoArr.length; m++) {
            if (Number(this.time.begin_time) < Number(valueInfoArr[m].time) && Number(valueInfoArr[m].time) < Number(this.time.end_time)) {
              // console.log(valueInfoArr[m])
              let time = new Date(valueInfoArr[m].time / 1000000);  //时间戳转换回时间，返回的时间戳减去最后6个0
              let sum = 0
              for (let l = 0; l < valueInfoArr[m].value.length; l++) {
                sum = sum + Number(valueInfoArr[m].value[l])
              }
              let avg = sum / valueInfoArr[m].value.length
              if (avg === 0) {
                avg = Math.random()
              }
              this.apiData.push(  //[时间，数据]
                [
                  time.toLocaleTimeString(),
                  avg
                ]
              );
            }
          }
        } else {
          // 默认实时轮训
          for (let k = 0; k < valueInfoArr.length; k++) {
            let time = new Date(valueInfoArr[k].time / 1000000);  //时间戳转换回时间，返回的时间戳减去最后6个0
            let sum = 0
            for (let l = 0; l < valueInfoArr[k].value.length; l++) {
              sum = sum + Number(valueInfoArr[k].value[l])
            }
            let avg = sum / valueInfoArr[k].value.length
            if (avg === 0) {
              avg = Math.random()
            }
            this.apiData.push(  //[时间，数据]
              [
                time.toLocaleTimeString(),
                avg
              ]
            );
          }
        }
        console.log(this.apiData)
      } catch (error) {
        this.ifDataExist = false;
        if (this.time.begin_time != null) {
          this.$toast.fail('数据不存在');
        }
      }

    },
    determineSplitValue() {
      const ad = this.apiData;
      var max = ad[0][1], min = ad[0][1];
      for (var i = 0; i < ad.length; i++) {
        max = ad[i][1] > max ? ad[i][1] : max;
        min = ad[i][1] < min ? ad[i][1] : min;
      }
      console.log(ad);
      const span = max - min;
      this.span = max - min;
      this.max = max;
      this.min = min;
    },
    drawLine() {
      const sensor = this.chartData.sensor;
      const channel = this.chartData.channel;
      const device = this.chartData.deviceName;
      const max = this.max;
      const min = this.min;
      const span = this.span;
      var option = {
        title: {    //标题配置
          text: device,   //图表主标题
          subtext: sensor.name + ' ' + channel.name,   //副标题
          left: '5%', //标题左侧距离
          textStyle: {
            overflow: 'break'   //换行
          }
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {  //tooltip格式
            params = params[0];
            return (
              '('
              + params.value[0]
              + ', '
              + params.value[1]
              + ')'
            )
          },
          axisPointer: {  //坐标轴参考线
            animation: false,
            show: true
          },
        },
        grid: { //图形位置
          left: 50,
          right: 20,
          top: 50
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: ['5%', '5%'],
          splitLine: {
            show: false
          },
          splitArea: {
            show: true
          },
          min: min - span / 4,
          max: max + span / 4
        },
        dataZoom: [ //初始缩放
          {
            type: 'inside',
            start: 0,
            end: 100,
            xAxisIndex: 0,
            yAxisIndex: 'none'
          },
          {
            type: 'slider',
            xAxisIndex: 0,
            yAxisIndex: 'none'
          }
        ],
        toolbox: {  //工具栏
          right: 2,
          top: 2,
          bottom: 2,
          feature: {
            saveAsImage: {},
            dataZoom: {yAxisIndex: 'none'},
            restore: {}
          }
        },
        visualMap: {    //图例
          top: 24,
          right: '1%',
          pieces: [
            {
              lte: min + span / 4.0,
              color: '#93CE07'
            },
            {
              gt: min + span / 4.0,
              lte: max - span / 4.0,
              color: '#FBDB0F'
            },
            {
              gt: max - span / 4.0,
              color: '#FD0100'
            },
          ],
          outOfRange: {
            color: '#999'
          }
        },
        // 图表系列配置，决定图表数据怎样显示（柱状、折线、、、等）
        series: [
          {
            name: sensor.name + ' ' + channel.name,   //图标名称，tooltip中显示
            type: 'line',   //折线图
            showSymbol: true,  //样点标记
            data: this.apiData, //数据来源[x轴，y轴]
            markLine: { //y轴splitLine
              silent: true,   //对鼠标动作响应
              lineStyle: {
                color: '#333'   //颜色
              },
              data: [ //splitLine位置
                {
                  yAxis: min + span / 4.0
                },
                {
                  yAxis: max - span / 4.0
                },
              ]
            }
          }
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      var instanceByDom = this.$echarts.getInstanceByDom(window.document.getElementById('chartOfDevice'))
      var chartOfDevice = instanceByDom === undefined ? this.$echarts.init(window.document.getElementById("chartOfDevice")) : instanceByDom
      // 使用刚指定的配置项和数据显示图表。
      chartOfDevice.setOption(option)
      // resetSize
      window.onresize = function () {
        chartOfDevice.resize();
      };
    }
  }
}
</script>


<style scoped>
#chartOfDevice {
  width: 95%;
  height: 400px;
}

.chart {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
