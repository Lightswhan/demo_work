<template class="topBarBox">
  <div class="topBarItem">
    <el-row>
      <el-col :span="3">
        <i class="el-icon-arrow-left" style="font-weight: bold;color: white" @click="goBack" />
      </el-col>
      <el-col :span="18">
        <div class="textContent" style="font-weight: bold;color: white">
          产线选择
        </div>
      </el-col>
      <el-col :span="3">
        <div class="textContent" style="font-weight: bold" @click="toStatistics">
          <svg t="1685351729910" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3712" width="22" height="22"><path d="M194.56 386.048q31.744 0 46.592 19.456t14.848 43.008l0 447.488-192.512 0 0-443.392q0-31.744 19.968-49.152t43.52-17.408l67.584 0zM514.048 134.144q27.648 0 44.032 16.896t16.384 40.448l0 704.512-191.488 0 0-702.464q0-15.36 6.144-26.624t15.36-18.432 20.48-10.752 20.48-3.584l68.608 0zM832.512 577.536q9.216 0 19.968 5.12t20.48 14.336 16.384 20.992 6.656 25.088l0 252.928-191.488 0 0-250.88q0-11.264 4.608-23.552t12.8-22.016 19.456-15.872 24.576-6.144l66.56 0z" p-id="3713" fill="#0c7fbb"></path></svg>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  // 数据区域
  data() {
    return {

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
    goBack() {
      this.$router.back()
    },
    toStatistics() {
      this.$router.push({
        path: '/compare'
      })
    }
  }
}
</script>

<style scoped>
.topBarBox{
  width: 100%;
  text-align: center;
}
.topBarItem{
  width: 100%;
  text-align: center;
}
.textContent .el-icon-arrow-left{
  padding-top:3%;
}
</style>
