<template>
    <div>
      <div class="topBarItem">
        <el-row>
          <el-col :span="3">
            <i class="el-icon-arrow-left" style="font-weight: bold;color: white" @click="goBack"/>
          </el-col>
          <el-col :span="18">
            <div class="textContent" style="font-weight: bold;color: white">
              任务
            </div>
          </el-col>
          <el-col :span="30">
            <div class="textContent1" style="font-weight: bold;color: white" @click="creat">
              添加
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="margin-top: 56px;margin-bottom: 49px;height: 100%">
  <!--      <select-line></select-line>-->
  <!--      <show-device></show-device>-->
  <van-calendar
     ref="calendars"
     :poppable="false"
     :show-confirm="false"
     :style="{ height: '450px' }"
     :formatter="formatter"
   
   >
   </van-calendar>
      </div>
    </div>
    
  </template>
  
  



  
  
  <script>
 
 //import Calendar from 'vue-calendar-component';
 import { ref } from 'vue';
 import Calendar from 'vant';

  export default {
    name: "formManagementIndex",
    components: {Calendar},

    setup(){
        const date = ref('');
        const show = ref(false);

        //const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
        
      return {
        date,
        show,
        
      };
    },

    data() {
      return{
        devOverview: {},
        position: '全部',
        condition:'全部'
      }
    },
    created() {
      window.scrollTo(0, 0);
    },
    methods: {
      goBack() {
        this.$router.back()
      },

      creat(){
        //this.$router.creat()
      },


          //日历方法
      


      
    }
  }
  </script>
  
  <style scoped>
  .topBarItem {
    position: fixed; /* 放到最顶上 */
    left: 0;
    right: 0;
    top: 0;
    height: 56px;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
    z-index: 100;
  
  
    width: 100%;
    text-align: center;
    background-color: rgb(51, 153, 255);
  }
  .textContent {
    text-align: center;
    line-height: 56px;
  }

  .textContent1 {
    text-align: end;
    line-height: 50px;
  }
  
  .el-icon-arrow-left {
    text-align: center;
    line-height: 56px;
  }
  </style>
  