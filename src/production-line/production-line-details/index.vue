<template>
  <div>
    <div id="top-bar">
      <top-bar></top-bar>
    </div>
    <div :style="{'margin-top': '56px'}">
      <el-row class="simulator-content">
        <el-col class="grid-content">
          <basic-select></basic-select>
        </el-col>
      </el-row>
      <el-row class="simulator-content">
        <el-col class="grid-content">
          <line-process-time></line-process-time>
        </el-col>
      </el-row>
      <el-row class="simulator-content">
        <el-col class="grid-content">
          <line-chart-app></line-chart-app>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import TopBar from "./components/top-bar";
import BasicSelect from "./components/basic-select";
import LineProcessTime from "./components/line-process-time";
import LineChartApp from "./components/line-chart-app";
export default {
  name: "index",
  components: {
    TopBar,
    BasicSelect,
    LineProcessTime,
    LineChartApp
  }
}
</script>

<style scoped>
#top-bar {
  display: flex;
  background-color:rgb( 51, 153, 255 );
  height: 56px;
  align-items: center;
  z-index: 100;

  position: fixed; /* 放到最顶上 */
  left: 0;
  right: 0;
  top: 0;

  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
}
.simulator-container {
  display: flex;
  flex-direction: column;
  background: white;
  height: 90%;
  width: 100%;
}

.grid-content {
  width: 100%;
  display: flex;
  /*border: 0.5px solid #333;*/
  justify-content: center;
  flex-wrap: wrap;
}
</style>
