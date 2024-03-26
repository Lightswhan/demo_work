<template>
  <div class="chart">
    <div id="chartOfDevice" v-show="ifDataExist"></div>
    <el-empty v-show="(!ifDataExist)" description="请选择时间"></el-empty>
  </div>
</template>


<script>
export default {
  name: 'deviceChart',
  data() {
    return {
      apiData: [], //画图所需的dataset
      max: { type: Number },    //数据最大值
      min: { type: Number },
      valueSpan: 0, //数据跨度，最值之差
      chartData: {},   //作图所需数据, {deviceName，sensor{name, ID}, channel{name, chIndex}}
      ifDataExist: {
        type: Boolean,
        default: true
      },
      startTime: null,
      endTime: null,
      time: { Type: Object }  //时间戳{begin_time, end_time}
    }
  },
  created() {
    this.$bus.$on('chooseTime', (start, end) => {
      this.startTime = start
      this.endTime = end
    })
  },
  mounted() {
    console.log(JSON.parse(this.$route.query.param))
    this.chartData = JSON.parse(this.$route.query.param)
  },
  beforeDestroy() {
    this.$bus.$off('sendTimeToChart');
  },
  computed: {
    monitor() {
      return Object.assign({}, this.chartData, this.time);
    }
  },
  watch: {
    endTime: async function () {
      if (this.apiData.length !== 0) {
        this.apiData.splice(0);
      }
      await this.getData();
      this.determineSplitValue();
      this.drawLine();
    }
  },
  methods: {
    async getData() {
      console.log(this.startTime)
      try {
        const response = await this.$axios({
          method: 'GET',
          url: 'http://10.112.6.250:8888/api/v1/sensor',
          params: {
            dev_id: this.chartData.value,
            begin_time: this.startTime,
            // begin_time: 1679393271064000000,
            end_time: this.endTime
            // end_time: 1679393371065000000
          }
        })
        console.log(response)
        if (!response.data.data) {
          throw new Error('数据不存在');
        }
        const rows = response.data.data.rows;
        for (var i = 0; i < rows.length; i++) {
          const time = new Date(rows[i][0] / 1000000);  //时间戳转换回时间，返回的时间戳减去最后6个0
          this.apiData.push(  //[时间，数据]
            [
              time.toLocaleTimeString(),
              rows[i][this.chartData.channel.chIndex]
            ]
          );
        }
        this.ifDataExist = true;
      } catch (error) {
        console.log(error);
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
            dataZoom: { yAxisIndex: 'none' },
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
