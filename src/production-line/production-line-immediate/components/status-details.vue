<template class="cardBBox">
  <div class="cardBItem">
    <el-card v-for="(item, index) in summaryData" class="card-B">
<!--      <div slot="header" class="clearfix" align="center">-->
<!--        <span>{{ item.state }}</span>-->
<!--      </div>-->
      <div class="text item">
        <el-descriptions
          :column="3"
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
                @click="showDetails(col)"
              >
                {{ col.value }}
              </span>
            </el-descriptions-item>
          </template>
        </el-descriptions>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Test3',
  data() {
    return {
      rowCenter: {
        'text-align': 'center'
      },
      summaryData: [
        {
          state: '监控',
          digital: [
            {
              label: '总数',
              value: 10,
              span: 1,
              display: true
            },
            {
              label: '超时',
              value: 2,
              span: 1,
              display: true,
              color: '#ffcc1b'
            },
            {
              label: '缓慢',
              value: 4,
              span: 1,
              display: true,
              color: '#155e9a'
            }
          ]
        },
        // {
        //   state: '工单',
        //   digital: [
        //     {
        //       label: '待处理',
        //       value: 3,
        //       span: 1,
        //       display: true
        //     },
        //     {
        //       label: '待接单',
        //       value: 1,
        //       span: 1,
        //       display: true,
        //       color: '#FFCC00'
        //     },
        //     {
        //       label: '我发起',
        //       value: 7,
        //       span: 1,
        //       display: true
        //     }
        //   ]
        // }
      ]
    }
  },

  // 组件初始化前的准备操作，在此处执行
  created() {
    // 事件监听，this.$bus.$on事件一般在此处定义

    // 初始数据载入

  },
  // 组件初始化后需要进行的操作，在此处执行
  mounted() {
    // 组件渲染，传递参数，this.$bus.$emit

  },
  // JS方法
  methods: {
    showDetails(item) {
      //TODO  根据状态拿到对应状态的数据
      console.log(item)
      this.$router.push({
        path: '/abstract'
      })
    }
  }
}
</script>

<style scoped>
.cardBBox {
  width: 100%;
  text-align: center;
}
.cardBItem {
  width: 100%;
  margin-top: 3%;
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
  margin-bottom: 3%;
  border-radius: 3%;
}
.text {
  font-size: 10%;
  margin: 3%;
}
.item {
  margin-bottom: 4%;
}
</style>
