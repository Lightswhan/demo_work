<template class="topBarBox">
  <div class="topBarItem">
    <div @click="toSlow" style="border: #455a6e solid 0.5px">
      <el-row>
        <el-col :span="4" :offset="1">
          <svg t="1685342721333" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2644" width="48" height="48"><path d="M793.6 819.2a51.2 51.2 0 1 1 0 102.4h-614.4a51.2 51.2 0 0 1 0-102.4h614.4z m-307.2-563.2a307.2 307.2 0 0 1 307.2 307.2v204.8h-614.4v-204.8a307.2 307.2 0 0 1 307.2-307.2z m51.2 102.4l-153.6 153.6H460.8l-25.6 153.6 153.6-153.6-76.8-0.0512L537.6 358.4zM138.1376 232.448l4.096 2.2528 76.8 51.2a25.6 25.6 0 0 1-24.3712 44.8l-4.096-2.2016-76.8-51.2a25.6 25.6 0 0 1 24.3712-44.8z m727.9616 9.3696a25.6 25.6 0 0 1-3.4816 32.5632l-3.584 2.9184-76.8 51.2-4.096 2.2016a25.6 25.6 0 0 1-27.9552-41.8816l3.584-2.9184 76.8-51.2 4.096-2.2016a25.6 25.6 0 0 1 31.4368 9.3184zM300.032 110.2336l2.8672 3.584 51.2 76.8a25.6 25.6 0 0 1-39.68 32l-2.9184-3.584-51.2-76.8a25.6 25.6 0 0 1 39.7312-32.0512z m405.3504-3.5328a25.6 25.6 0 0 1 9.3184 31.4368l-2.2016 4.096-51.2 76.8-2.8672 3.584a25.6 25.6 0 0 1-41.984-27.9552l2.2528-4.096 51.2-76.8 2.9184-3.584a25.6 25.6 0 0 1 32.5632-3.4816zM486.4 51.2a25.6 25.6 0 0 1 25.1904 20.992L512 76.8v102.4a25.6 25.6 0 0 1-50.7904 4.608L460.8 179.2v-102.4a25.6 25.6 0 0 1 25.6-25.6z" fill="#0c7fbb" p-id="2645"></path></svg>        </el-col>
      </el-row>
      <el-row style="margin-bottom: 2%">
        <el-col :offset="4" :span="18">
          <div class="list-box">
            <el-row v-for="(item, index) in statusList">
              <el-col :span="10">
                {{item.value}}
              </el-col>
              <el-col :span="10">
                {{item.status}}状态
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div  @click="toTimeOut" style="border: #455a6e solid 0.5px;margin-top: 1%">
      <el-row>
        <el-col :span="4" :offset="1">
          <svg t="1685342721333" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2644" width="48" height="48"><path d="M793.6 819.2a51.2 51.2 0 1 1 0 102.4h-614.4a51.2 51.2 0 0 1 0-102.4h614.4z m-307.2-563.2a307.2 307.2 0 0 1 307.2 307.2v204.8h-614.4v-204.8a307.2 307.2 0 0 1 307.2-307.2z m51.2 102.4l-153.6 153.6H460.8l-25.6 153.6 153.6-153.6-76.8-0.0512L537.6 358.4zM138.1376 232.448l4.096 2.2528 76.8 51.2a25.6 25.6 0 0 1-24.3712 44.8l-4.096-2.2016-76.8-51.2a25.6 25.6 0 0 1 24.3712-44.8z m727.9616 9.3696a25.6 25.6 0 0 1-3.4816 32.5632l-3.584 2.9184-76.8 51.2-4.096 2.2016a25.6 25.6 0 0 1-27.9552-41.8816l3.584-2.9184 76.8-51.2 4.096-2.2016a25.6 25.6 0 0 1 31.4368 9.3184zM300.032 110.2336l2.8672 3.584 51.2 76.8a25.6 25.6 0 0 1-39.68 32l-2.9184-3.584-51.2-76.8a25.6 25.6 0 0 1 39.7312-32.0512z m405.3504-3.5328a25.6 25.6 0 0 1 9.3184 31.4368l-2.2016 4.096-51.2 76.8-2.8672 3.584a25.6 25.6 0 0 1-41.984-27.9552l2.2528-4.096 51.2-76.8 2.9184-3.584a25.6 25.6 0 0 1 32.5632-3.4816zM486.4 51.2a25.6 25.6 0 0 1 25.1904 20.992L512 76.8v102.4a25.6 25.6 0 0 1-50.7904 4.608L460.8 179.2v-102.4a25.6 25.6 0 0 1 25.6-25.6z" fill="#ea9518" p-id="2645"></path></svg>        </el-col>
      </el-row>
      <el-row style="margin-bottom: 2%">
        <el-col :offset="4" :span="18">
          <div class="list-box-2">
            <el-row v-for="(item, index) in statusList2">
              <el-col :span="10">
                {{item.value}}
              </el-col>
              <el-col :span="10">
                {{item.status}}状态
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: "line-details",
  data() {
    return {
      statusList: [
        {
          value: "产线一",
          status: "缓慢"
        },
        {
          value: "产线五",
          status: "缓慢"
        },
        {
          value: "产线九",
          status: "缓慢"
        },
        {
          value: "产线十",
          status: "缓慢"
        }
      ],
      statusList2: [
        {
          value: "产线二",
          status: "超时"
        },
        {
          value: "产线六",
          status: "超时"
        }
      ]
    }
  },

  methods: {
    toSlow() {
      this.$router.push({
        path: "/immediate"
      })
    },
    toTimeOut() {
      this.$router.push({
        path: "/immediate"
      })
    }
  }

}
</script>

<style scoped>
.list-box{
  max-height: 120px;
  overflow-y: auto;
  color: #155e9a;
}
.list-box-2{
  max-height: 120px;
  overflow-y: auto;
  color: #ffcc1b;
}
.topBarBox{
  width: 100%;
  text-align: center;
}
.topBarItem{
  width: 98%;
  text-align: center;
  margin-top: 3%;
}
</style>
