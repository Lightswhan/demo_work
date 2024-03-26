<template class="topBarBox">
  <div class="topBarItem">
    <el-row>
      <el-col :span="3">
        <i class="el-icon-arrow-left" style="font-weight: bold;color: white" @click="goBack" />
      </el-col>
      <el-col :span="18">
        <div class="textContent" style="font-weight: bold;color: white">
          产线详情
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
