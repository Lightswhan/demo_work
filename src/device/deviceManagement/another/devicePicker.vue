<template>
    <div>
      <van-field
          readonly
          clickable
          label="设备位置"
          :value="value"
          @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
          <van-picker
              title="设备位置"
              show-toolbar
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
              @change="onChange"
          />
      </van-popup>
  </div>

</template>


<script>

export default {
  name: 'devicePicker',
  props:{
    putPosition:{
      type:String,
      default:"全部"
    }
  },
  data() {
        return{
            value:'全部',
            showPicker: false,
            columns: ['全部','花都', '黄埔']
        };
    },
  methods: {
      onConfirm(value) {
          this.value = value;
          this.showPicker = false;
          this.$emit('getPosition', value)
      },
      onCancel() {
      },
      onChange() {
      }
  },
  watch:{
    // 在analysis界面选择全部的时候需要将picker界面的显示进行修改
    putPosition(val){
      if(val ==="全部"){
        this.value = val;
      }
    }
  }
}
</script>


<style scoped>

</style>
