<template class="topBarBox">
  <div class="topBarItem">
    <el-row>
      <el-col :span="14">
        <div id="myChart"></div>
      </el-col>
      <el-col :span="9">
        <el-row>
          <el-card v-for="(item, index) in summaryData" class="card-B">
            <div class="text item">
              <el-descriptions
                :column="2"
                direction="vertical"
                :colon="false"
                :content-style="rowCenter"
                :label-style="rowCenter"
              >
                <template v-for="(col, index) in item.digital">
                  <el-descriptions-item
                    v-if="col.display"
                    :key="index"
                    :label="col.label"
                    :span="col.span"
                  >
              <span
                style="font-size: x-large;"
                :style="{'color': col.color && col.value > 0 ? col.color : 'black'}"
              >
<!--                @click="showDetails(col)"-->
                {{ col.value }}
              </span>
                  </el-descriptions-item>
                </template>
              </el-descriptions>
            </div>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 官网 https://echarts.apache.org/examples/zh/editor.html?c=pie-simple
export default {
  name: "PieChart",
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      myChart:null,
      rowCenter: {
        'text-align': 'center'
      },
      summaryData: [
        {
          digital: [
            {
              label: '超时',
              value: 2,
              span: 1,
              display: true,
              color: 'orange'
            },
            {
              label: '缓慢',
              value: 4,
              span: 1,
              display: true,
              color: '#0358ab'
            }
          ]
        }
      ]
    }
  },
  mounted() {

    setTimeout(() => {
      this.drawLine();
    }, 100)
  },
  // 离开这个组件前的操作
  beforeDestroy() {
    // 在离开这个组件前清除图形对象
    // 如果设置了定时器离开组件前清除对象
    // this.myChart.clear()
  },
  methods: {
    // 该方法必须放在方法域中的最后一个
    drawLine() {
      // 基于准备好的dom，初始化echarts实例

      // 指定图表的配置项和数据
      var option = {
        //设置图标标题
        title: {
          text: '产线状态图',
          textStyle: {
            fontSize: 14,
          },
          // x: 'center',
          // textAlign: 'center'
        },
        // 图表系列配置，决定图表数据怎样显示（柱状、折线、、、等）
        tooltip: {
          trigger: 'item'
        },
        // legend: {
        //   orient: 'vertical',
        //   left: 'left'
        // },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              {value: 4, name: '缓慢'},
              {value: 18, name: '正常'},
              {value: 2, name: '超时'},
              {value: 1, name: '故障'},
              {value: 3, name: '停产'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                },
                emphasis: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                },
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
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
#myChart {
  width: 100%;
  height: 180px
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.card-B{
  width: 100%;
  margin-bottom: 1%;
  margin-top: 4%;
  border-radius: 3%;

}
.text {
  font-size: 10%;
  margin: 3%;
}
.item {
  margin-bottom: 4%;
}
.topBarBox{
  width: 100%;
  text-align: center;
}
.topBarItem{
  width: 98%;
  text-align: center;
  border: solid 0.5px;
}
</style>
