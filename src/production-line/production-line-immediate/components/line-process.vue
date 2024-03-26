<template class="topBarBox">
  <div class="topBarItem">
    <van-divider content-position="left">
      <span style="font-size: larger">产线进度</span>
    </van-divider>
    <van-steps direction="vertical" :active="0" >
      <van-step v-for="(item, index) in setps" >
        <div @click="toNextLine(item)">
          <h3>【环节】{{item.name}}</h3>
          <p>{{item.time}}</p>
        </div>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: "line-process",
  data() {
    return {
      setps: [
        {
          name: "传输",
          time: "2016-07-10 09:30"
        },{
          name: "工艺动作",
          time: "2016-07-10 09:30"
        },{
          name: "传输",
          time: "2016-07-10 09:30"
        }
      ]
    }
  },
  methods: {
    toNextLine(item) {
      console.log(item);
      this.$router.push({
        path: '/details',
        params: item
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
</style>
