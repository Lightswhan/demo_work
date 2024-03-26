<template>
    <div class="deviceAnalysisContainer">
      <div class="deviceMonitorNumsBox" @click="ShowAll">
        <div class="deviceMonitors" style="color:#0066FF">{{deviceOverview.normal+deviceOverview.abnormal}}</div>
        <div class="deviceMonitorNumsDesc">全部设备</div>
      </div>
      <!-- <div class="deviceMonitorContent">
        <div class="deviceMonitorNums" style="color:#444444">0</div>
        <div class="deviceMonitorNumsDesc">待机</div>
      </div> -->
      <!-- <div class="deviceMonitorContent">
        <div class="deviceMonitorNums">{{ deviceOverview.normal }}</div>
        <div class="deviceMonitorNumsDesc">运行</div>
      </div> -->
      <div class="deviceMonitorContent" @click="ShowNormal">
        <div class="deviceMonitorNums"  style="color:#227700">
          <!-- <span
            v-if="
              fan_21_predicts[deviceAnalysisIndex] == 0 &&
                fan_15_predicts[deviceAnalysisIndex] == 0
            "
            >2</span
          >
          <span
            v-else-if="
              fan_21_predicts[deviceAnalysisIndex] == 1 &&
                fan_15_predicts[deviceAnalysisIndex] == 1
            "
            >0</span
          >
          <span v-else>1</span> -->
          {{ deviceOverview.normal }}
        </div>
        <div class="deviceMonitorNumsDesc">正常</div>
      </div>
      <div class="deviceMonitorContent" @click="ShowAbnormal">
        <div class="deviceMonitorNums" style="color:#C63300">
          <!-- <span
            v-if="
              fan_21_predicts[deviceAnalysisIndex] == 0 &&
                fan_15_predicts[deviceAnalysisIndex] == 0
            "
            >0</span
          >
          <span
            v-else-if="
              fan_21_predicts[deviceAnalysisIndex] == 1 &&
                fan_15_predicts[deviceAnalysisIndex] == 1
            "
            >2</span
          >
          <span v-else>1</span> -->
          {{ deviceOverview.abnormal }}
        </div>
        <div class="deviceMonitorNumsDesc">异常</div>
      </div>
    </div>
</template>

<script>
   //import {bus} from '@/bus.js'
   export default {
    name: "deviceanalysis",
    props:{
      deviceOverview: {
        Type: Object,
        required: true,
        default:function (){
          return {
            normal:0,
            abnormal:0
          }
        }
      }
    },
    data() {
      return {
        // timer: null,
        // deviceAnalysisIndex: 0,
        // fan_15_predicts: [1, 0, 0, 1, 1, 1, 0, 0, 0],
        // fan_21_predicts: [1, 0, 0, 0, 0, 1, 0, 1, 0]
        value:'全部',
        ConditionJudge:'全部',
        showPicker: false,
        columns: ['全部','花都', '黄埔']
      };
    },
/*     watch:{
      ConditionJudge:{
        handler(sd){
          this.$emit('ShowAll',sd)
        }
      }
     },*/
   // 组件初始化前的准备操作，在此处执行
     created() {
       // 事件监听，this.$bus.$on事件一般在此处定义

       // 初始数据载入

     },
    beforeDestroy() {
      // clearInterval(this.timer);
      // this.timer = null;
    },
     mounted() {
       // 组件渲染，传递参数，this.$bus.$emit
      // this.setDeviceAnylysisInterval();
    },
    methods: {
      // setDeviceAnylysisInterval() {
      //   if (this.timer) {
      //     this.timer = null;
      //   }
      //   this.deviceAnalysisIndex = 0;
      //   this.timer = setInterval(() => {
      //     const length = this.fan_15_predicts.length;
      //     if (this.deviceAnalysisIndex < length) {
      //       this.deviceAnalysisIndex = this.deviceAnalysisIndex + 1;
      //     } else {
      //       clearInterval(this.timer);
      //       this.timer = null;
      //       this.deviceAnalysisIndex = 0;
      //       this.setDeviceAnylysisInterval();
      //     }
      //   }, 1000);
      // }
      /*这个condition参数在index界面的修改没有对齐*/
      ShowAll(){
        // alert("显示全部容器");
        this.ConditionJudge = '全部';
        this.$emit('ShowAll','全部')
      },
      ShowNormal(){
        // alert("显示正常容器");
        this.ConditionJudge = '正常';
        this.$emit('ShowNormal','正常')
      },
      ShowAbnormal(){
        // alert("显示异常容器");
        this.ConditionJudge = '异常';
        this.$emit('ShowAbnormal', '异常')
      },

      onCancel() {
      },
      onChange() {
      }
    }
   };
   </script>
   <style scoped>
   .deviceAnalysisContainer {
     height: 100px;
     /* background-color: rgba(221, 221, 221, 0.5); */
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-around;
     position: relative;
     background-color: white;
     padding-bottom: 10px;
     padding-top: 10px;
   }

   .deviceMonitorContent {
     height: 90px;
     width: 18%;
     text-align: center;
   }

   .deviceMonitorNums {
     display: inline-block;
     width: 100%;
     height: 60px;
     line-height: 60px;
     font-weight: bold;
     font-size: 28px;
     text-align: center;
   }

   .deviceMonitors {
     display: inline-block;
     height: 50px;
     width: 100%;
     line-height: 50px;
     font-weight: bold;
     font-size: 36px;
     text-align: center;
   }

   .deviceMonitorNumsBox {
     height: 75px;
     border-right: 1px solid black;
     width: 26%;
   }

   .deviceMonitorNumsDesc {
     text-align: center;
   }
   </style>
