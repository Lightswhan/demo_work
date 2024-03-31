<template class="templateBox">
  <div class="templateItem">
    <van-grid :column-num="2" square>
      <van-grid-item
        v-for="item in sceneValue"
        :key="item.key"
        :icon="item.src"
      >
        <van-image width="100%" height="100px" :src="item.src" @click="handleData(item)" />
        {{item.label}}
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "selectFunctionIndex",
  data() {
    return {
      // data
      sceneValue: [
        {
          label: '设备监控',
          value: 'equipmentMonitor',
          src:'http://10.112.16.136:8989/base-file/images/productionMonitor.jpeg'
        },
        {
          label: '生产监控',
          value: 'productionMonitor',
          src:'http://10.112.16.136:8989/base-file/images/increaseEfficiency.jpeg'
        },
        {
          label: '工单管理',
          value: 'formManagement',
          src:'http://10.112.16.136:8989/base-file/images/OMManagement.jpeg'
        },
      ],
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
    handleData(e){
      console.log(e)
      // 点击不同图片触发不同事件，目前已有生产监控以及运维管理
      if (e.value === 'equipmentMonitor') {
          this.$router.push('/deviceManagement')
          this.$bus.$emit("toEquipmentMonitor")
      } else if (e.value === 'productionMonitor'){
          this.$router.push('/productionMain')
          this.$bus.$emit("toProductionMonitor")
      } else if (e.value === 'formManagement'){
          this.$router.push('/formManagement')
          this.$bus.$emit('toFormManagement')
      }
    }
  }
}
</script>

<style scoped>
.templateBox {
  width: 100%;
  text-align: center;
}
.templateItem{
  width: 100%;
  text-align: center;
}
</style>
