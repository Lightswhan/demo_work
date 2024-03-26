<template class="histogram">
  <div id="myChart" />
</template>

<script>
// 官网 https://echarts.apache.org/examples/zh/editor.html?c=bar-simple
export default {
  name: 'line-histogram',
  // 数据域
  data() {
    return {
      apiData: [1, 2, 3, 4, 5],
      label: [1, 2, 3, 4, 5],
      myChart: null
    }
  },
  // 钩子函数
  mounted() {

    setTimeout(() => {
      // 该方法必须放在方法域中的最后一个
      this.drawLine();
    }, 10)
  },
  // 离开这个组件前的操作
  beforeDestroy() {
    // 在离开这个组件前清除图形对象
    // 如果设置了定时器离开组件前清除对象
    // this.myChart.clear()
  },

  // 方法区
  methods: {
    // 方法域中的其他方法

    drawLine() {
      // 图设置
      var option = option = {
        title: {
          text: '对比图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['左滑台滑出', '右滑台滑出', '左安全门打开', '右安全门打开', '人工上夹具左', '人工上夹具右','左安全门关闭','右安全门关闭']
        },
        series: [
          {
            name: '实际生产',
            type: 'bar',
            data: [20, 30, 50, 30, 11, 25, 10, 60]
          },
          {
            name: '标准产线',
            type: 'bar',
            data: [40, 20, 20, 30, 20, 30, 15, 40]
          }
        ]
      };
      // 基于准备好的dom，初始化echarts实例
      var instanceByDom = this.$echarts.getInstanceByDom(window.document.getElementById('myChart'))
      this.myChart = instanceByDom === undefined ? this.$echarts.init(window.document.getElementById("myChart")) : instanceByDom
      // 将echarts实例内的对象清空，再重新注入
      this.myChart.clear()
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
      // resetSize
      window.onresize = function () {
        this.myChart.resize();
      };
    }
  }
}
</script>

<style scoped>
.histogram {
  width: 100%;
  text-align: center;
}

#myChart {
  width: 100%;
  height: 400px;
}
</style>
