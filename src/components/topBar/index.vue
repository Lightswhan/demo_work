<template class="topBarBox">
  <div class="topBarItem">
    <el-row>
      <el-col :span="3" v-if="isShowBack">
        <i class="el-icon-arrow-left" style="font-weight: bold" @click="goBack" />
      </el-col>
      <el-col :span="isShowBack ? (isShowButton ? 18 : 18) : (isShowButton ? 18 : 24)" :offset="isShowBack? 0 :(isShowButton ? 3 : 0)">
        <div class="textContent" style="font-weight: bold;color: white">
          {{ topBarText }}
        </div>
      </el-col>
      <el-col :span="3" v-if="isShowButton">
        <div class="topBarButton">
          <el-button type="text" style="color: white" @click="show">{{ buttonText }}</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "topBarIndex",
  props: {
    topBarText: {
      type: String,
      default: ''
    },
    isShowBack: {
      type: Boolean,
      default: false
    },
    isShowButton: {
      type: Boolean,
      default: false
    },
    buttonText:{
      type: String,
      default: ''
    }
},
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    goBack() {
      this.$router.back()
    },
    show() {
      this.$parent.pubTask()
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
  position: fixed; /* 放到最顶上 */
  left: 0;
  right: 0;
  top: 0;
  height: 56px;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
  z-index: 100;


  width: 100%;
  text-align: center;
  background-color:rgb( 51, 153, 255 );
}
.textContent{
  text-align: center;
  line-height: 56px;
}
.el-icon-arrow-left{
  text-align: center;
  line-height: 56px;
}
.topBarButton {
  text-align: center;
  line-height: 56px;
}
</style>
