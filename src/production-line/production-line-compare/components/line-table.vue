<template class="tableListBox">
  <div class="tableListItem">
    <el-table :data="tableData" style="width: 100%" border height="250">
      <template v-for="(col) in tableColData">
        <el-table-column
          :key="col.prop"
          :prop="col.prop"
          :label="col.label"
        />
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //数组中的每一组数据是一个一个的对象，为键值对
      tableData:[{
        param1: '【左滑台滑出】20ms',
        param2: '【左滑台滑出】20ms',
      },{
        param1: '【右滑台滑出】20ms',
        param2: '【右滑台滑出】20ms',
      },{
        param1: '【左安全门打开】20ms',
        param2: '【左安全门打开】20ms',
      },{
        param1: '【右安全门打开】20ms',
        param2: '【右安全门打开】20ms',
      },{
        param1: '【人工上夹具左】20ms',
        param2: '【人工上夹具左】20ms',
      },{
        param1: '【人工上夹具右】20ms',
        param2: '【人工上夹具右】20ms',
      },{
        param1: '【左安全门关闭】20ms',
        param2: '【左安全门关闭】20ms',
      },{
        param1: '【右安全门关闭】20ms',
        param2: '【右安全门关闭】20ms',
      }],
      tableColData: [{
        label: '实际产线',
        prop: 'param1'
      },{
        label: '标准产线',
        prop: 'param2'
      }]
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
  methods:{
    click(row, event, column) {
      this.$message(row.param1);
    },
    tableHeader() {
      return 'font-size:20px;font-weight:bold;text-align:center'
    },
    tableRowClass({row, rowIndex}) {
      if (row.param1 === '01_1') {
        return 'warning-row';
      }
      else return 'nomal-row';
    }
  }
}
</script>

<style scoped>
.tableListBox {
  width: 100%;
  text-align: center;
}
.tableListItem {
  width: 100%;
  margin-top: 3%;
}
.el-table .warning-row {
  color: #FF6347;
  font-weight:bolder;
}
.el-table .nomal-row {
  color: green;
  font-weight:bolder;
}
</style>
