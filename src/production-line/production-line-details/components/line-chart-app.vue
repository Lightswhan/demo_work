<template>
  <div id="chart-container">
  </div>
</template>

<script>
export default {
  name: "chart",
  data() {
    return {
      currentData: [],
      dataCount: 10,
      startTime: +new Date(),
      categories: [
        '左滑台滑出', '右滑台滑出', '左安全门打开','右安全门打开','人工上夹具左','人工上夹具右',
        '左安全门关闭','右安全门关闭','左滑台滑入','右滑台滑入'
      ],
      types: [
        { name: '左滑台滑出', color: '#7b9ce1' },
        { name: '右滑台滑出', color: '#bd6d6c' },
        { name: '左安全门打开', color: '#75d874' },
        { name: '右安全门打开', color: '#e0bc78' },
        { name: '人工上夹具左', color: '#dc77dc' },
        { name: '人工上夹具右', color: '#0358ab' },
        { name: '左安全门关闭', color: '#9b8442' },
        { name: '右安全门关闭', color: '#116203' },
        { name: '左滑台滑入', color: '#0c34e0' },
        { name: '右滑台滑入', color: '#ea0e62' }
      ],
      Timer: null
    }
  },
  mounted() {
    // Generate mock data
    var _this = this
    _this.categories.forEach(function (category, index) {
      var baseTime = _this.startTime;
      for (var i = 0; i < _this.dataCount; i++) {
        var typeItem = _this.types[Math.round(Math.random() * (_this.types.length - 1))];
        var duration = Math.round(Math.random() * 1000);
        _this.currentData.push({
          name: typeItem.name,
          value: [index, baseTime, (baseTime += duration), duration],
          itemStyle: {
            normal: {
              color: typeItem.color
            }
          }
        });
        baseTime += Math.round(Math.random() * 2000);
      }
    });
    // this.Timer = setInterval(this.drawLine, 1000)
    _this.drawLine()
  },
  methods: {
    renderItem(params, api) {
      console.log(api);
      var categoryIndex = api.value(0);
      var start = api.coord([api.value(1), categoryIndex]);
      var end = api.coord([api.value(2), categoryIndex]);
      var height = api.size([0, 1])[1] * 0.6;
      var rectShape = this.$echarts.graphic.clipRectByRect(
        {
          x: start[0],
          y: start[1] - height / 2,
          width: end[0] - start[0],
          height: height
        },
        {
          x: params.coordSys.x,
          y: params.coordSys.y,
          width: params.coordSys.width,
          height: params.coordSys.height
        }
      );
      return (
        rectShape && {
          type: 'rect',
          transition: ['shape'],
          shape: rectShape,
          style: api.style()
        }
      );
    },

    drawLine() {
      console.log("draw")
      var _this = this
      var dom = document.getElementById('chart-container');
      var myChart = this.$echarts.init(dom);
      var option = {
        tooltip: {
          formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3] + ' ms';
          }
        },
        title: {
          text: '【传输环节】实时图',
          left: 'left'
        },
        dataZoom: [
          {
            type: 'slider',
            filterMode: 'weakFilter',
            showDataShadow: false,
            top: 400,
            labelFormatter: ''
          },
          {
            type: 'inside',
            filterMode: 'weakFilter'
          }
        ],
        grid: {
          height: 300,
          left: '1%',
          containLabel: true
        },
        xAxis: {
          min: this.startTime,
          scale: true,
          axisLabel: {
            formatter: function (val) {
              return Math.max(0, val - _this.startTime) + ' ms';
            }
          }
        },
        yAxis: {
          data: this.categories
        },
        series: [
          {
            type: 'custom',
            renderItem: this.renderItem,
            itemStyle: {
              opacity: 0.8
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data: this.currentData
          }
        ]
      };

      myChart.setOption(option);
      if (option && typeof option === 'object') {
      }
      // window.addEventListener('resize', myChart.resize);
    },
    drawDash() {
      var instanceByDom = this.$echarts.getInstanceByDom(window.document.getElementById('chart-container'))
      this.myChart = instanceByDom === undefined ? this.$echarts.init(window.document.getElementById("chart-container")) : instanceByDom
      // 将echarts实例内的对象清空，再重新注入
      // this.myChart.clear()
      // 使用刚指定的配置项和数据显示图表。
      var _this = this
      _this.categories.forEach(function (category, index) {
        var baseTime = _this.startTime;
        for (var i = 0; i < _this.dataCount; i++) {
          var typeItem = _this.types[Math.round(Math.random() * (_this.types.length - 1))];
          var duration = Math.round(Math.random() * 10000);
          _this.currentData.push({
            name: typeItem.name,
            value: [index, baseTime, (baseTime += duration), duration],
            itemStyle: {
              normal: {
                color: typeItem.color
              }
            }
          });
          baseTime += Math.round(Math.random() * 2000);
        }
      });
      var option = {
        tooltip: {
          formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3] + ' ms';
          }
        },
        title: {
          text: '传输',
          left: 'center'
        },
        dataZoom: [
          {
            type: 'slider',
            filterMode: 'weakFilter',
            showDataShadow: false,
            top: 400,
            labelFormatter: ''
          },
          {
            type: 'inside',
            filterMode: 'weakFilter'
          }
        ],
        grid: {
          height: 300
        },
        xAxis: {
          min: this.startTime,
          scale: true,
          axisLabel: {
            formatter: function (val) {
              return Math.max(0, val - _this.startTime) + ' ms';
            }
          }
        },
        yAxis: {
          data: this.categories
        },
        series: [
          {
            type: 'custom',
            renderItem: this.renderItem,
            itemStyle: {
              opacity: 0.8
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data: this.currentData
          }
        ]
      };
      this.myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
#chart-container {
  width: 100%;
  height: 500px;
}
</style>
