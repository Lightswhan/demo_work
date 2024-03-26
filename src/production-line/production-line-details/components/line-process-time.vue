<template class="topBarBox">
  <div class="topBarItem">
    <div style="">
      <van-divider content-position="center">
        <span style="font-size: larger">环节【传输】历史数据</span>
      </van-divider>
      <van-swipe style="height: 120px;" vertical autoplay="3000">
        <van-swipe-item v-for="(item, index) in historyData1">
          <el-row>
            <el-col :offset="4">
              <div @click="selectItem(item)">
                <el-descriptions :column="1" style="align-content: center" >
                  <template v-for="(col, index) in item">
                    <el-descriptions-item
                      :key="index"
                      :label="col.label"
                      :content-style="rowCenter"
                      :label-style="rowCenter"
                    >
              <span :style="{'color':( item[2].label === '【持续时间】' && item[2].value !== '20ms') ? 'red' : 'black'}">
                {{ col.value }}
              </span>
                    </el-descriptions-item>
                  </template>
                </el-descriptions>
              </div>
          </el-col>
          </el-row>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "line-process-time",
  data() {
    return {
      historyData1: [
        [
          {
            label: "【环节】",
            value: "左滑台滑出"
          },
          {
            label: "【开始时间】",
            value: "2016-07-10 09:30"
          },
          {
            label: "【持续时间】",
            value: "20ms"
          }
        ],
        [
          {
            label: "【环节】",
            value: "右滑台滑出"
          },
          {
            label: "【开始时间】",
            value: "2016-07-10 09:30"
          },
          {
            label: "【持续时间】",
            value: "100ms"
          }
        ],
        [
          {
            label: "【环节】",
            value: "左安全门打开"
          },
          {
            label: "【开始时间】",
            value: "2016-07-10 09:30"
          },
          {
            label: "【持续时间】",
            value: "20ms"
          }
        ],
        [
          {
            label: "【环节】",
            value: "右安全门打开"
          },
          {
            label: "【开始时间】",
            value: "2016-07-10 09:30"
          },
          {
            label: "【持续时间】",
            value: "20ms"
          }
        ],
        [
          {
            label: "【环节】",
            value: "人工上夹具左"
          },
          {
            label: "【开始时间】",
            value: "2016-07-10 09:30"
          },
          {
            label: "【持续时间】",
            value: "20ms"
          }
        ],
        [
          {
            label: "【环节】",
            value: "人工上夹具右"
          },
          {
            label: "【开始时间】",
            value: "2016-07-10 09:30"
          },
          {
            label: "【持续时间】",
            value: "20ms"
          }
        ],
        [
          {
            label: "【环节】",
            value: "左安全门关闭"
          },
          {
            label: "【开始时间】",
            value: "2016-07-10 09:30"
          },
          {
            label: "【持续时间】",
            value: "20ms"
          }
        ],
        [
          {
            label: "【环节】",
            value: "右安全门关闭"
          },
          {
            label: "【开始时间】",
            value: "2016-07-10 09:30"
          },
          {
            label: "【持续时间】",
            value: "20ms"
          }
        ]
      ],
      rowCenter: {
        'text-align': 'center'
      },
    }
  },
  methods:{
    selectItem(val) {
      //TODO  具体某个动作的历史数据
      console.log(val)
      alert(val[0].value)
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
  width: 98%;
  text-align: center;
  border: #337ab7 solid 0.5px
}

</style>
