<template class="selectBox">
  <div class="selectItem">
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="产线"
      placeholder="请选择产线"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom" :get-container="getContainer">
      <van-cascader
        v-model="cascaderValue"
        title="请选择产线"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  </div>
</template>

<script>
// JS区域
export default {
  // 数据区域
  data() {
    return {
      show: false,
      fieldValue: '北邮-轴承',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          value: 'bupt',
          text: '北邮',
          children: [{
            value: 'bearing',
            text: '轴承'
          }, {
            value: 'paderborn',
            text: '滚动轴承'
          }, {
            value: 'fans',
            text: '风机'
          }]
        },{
          value: 'huadu',
          text: '花都',
          children: [{
            value: 'CPS-1',
            text: '1号采集器'
          }, {
            value: 'CPS-2',
            text: '2号采集器'
          }, {
            value: 'CPS-3',
            text: '3号采集器'
          }, {
            value: 'CPS-4',
            text: '4号采集器'
          }]
        }, {
          value: 'huangbu',
          text: '黄埔',
          children: [{
            value: 'EM-1',
            text: '1号切削液冷却电机'
          }, {
            value: 'EM-2',
            text: '2号切削液冷却电机'
          }, {
            value: 'EM-3',
            text: '3号切削液冷却电机'
          }, {
            value: 'EM-4',
            text: '4号切削液冷却电机'
          }, {
            value: 'TH',
            text: '环境温湿度'
          }, {
            value: 'cylinder',
            text: '立体库气缸'
          }, {
            value: 'pressAir',
            text: '立体库压缩空气'
          }]
        }],

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
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('-');
      // console.log(selectedOptions)
      // this.$bus.$emit("passLineToShow", selectedOptions[1].value);// bearing
      // this.$bus.$emit("passLine", selectedOptions[1].value);// bearing
      this.$router.push({
        path: "/immediate"
      })
    },
    getContainer(){
      return document.querySelector('#mobile-app');
    }

  }
}
</script>

<style scoped>
.selectBox {
  width: 100%;
  text-align: center;
}
.selectItem{
  width: 100%;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
}
.van-overlay {
  position: relative;
}
.van-popup {
  position: sticky;
}
</style>
