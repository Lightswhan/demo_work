<template>
    <div class="block">
      <div class="demonstration">选择时间范围：</div>
      <van-field
        readonly
        clickable
        label="日期"
        :value="currentDate.toLocaleDateString()"
        placeholder="选择日期"
        @click="showPicker1 = true"
      />
      <van-popup v-model="showPicker1" round position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirm1"
          @cancel="onCancel1"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        label="开始时间"
        :value="beginTime"
        placeholder="选择时间"
        @click="showPicker2 = true"
      />
      <van-popup v-model="showPicker2" round position="bottom">
        <van-datetime-picker
          v-model="beginTime"
          type="time"
          title="选择时间"
          :min-hour="0"
          :max-hour="23"
          @confirm="onConfirm2"
          @cancel="onCancel2"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        label="结束时间"
        :value="endTime"
        placeholder="选择时间"
        @click="showPicker3 = true"
      />
      <van-popup v-model="showPicker3" round position="bottom">
        <van-datetime-picker
          v-model="endTime"
          type="time"
          title="选择时间"
          :min-hour="0"
          :max-hour="23"
          @confirm="onConfirm3"
          @cancel="onCancel3"
        />
      </van-popup>
      <van-button type="primary" v-on:click="onClick()" class="button">绘制图象</van-button>
    </div>
  </template>

  <script>
    export default {
      name: 'deviceTimePicker',
      data() {
        return {
          value: '',
          minDate: new Date(2023, 3, 1),
          maxDate: new Date(2023, 10, 31),
          currentDate: new Date(2023, 3, 13),
          showPicker1: false,
          showPicker2: false,
          showPicker3: false,
          beginTime: '8:00',
          endTime: '8:05'
        };
      },
      methods:{
        onChange(e){
            const start_time = new Date(e[0]);
            const start_time_mili = start_time.getTime() + '000000';
            const end_time = new Date(e[1]);
            const end_time_mili = end_time.getTime() + '000000';
            this.$bus.$emit(
                'sendTimeToChart',
                {
                    begin_time: start_time_mili,
                    end_time: end_time_mili
                }
            );
        },
        onConfirm1(){
          this.showPicker1 = false;
          console.log(this.currentDate);
        },
        onCancel1(){
          this.showPicker1 = false;
        },
        onConfirm2(){
          this.showPicker2 = false;
          console.log(this.beginTime);
        },
        onCancel2(){
          this.showPicker2 = false;
        },
        onConfirm3(){
          this.showPicker3 = false;
          console.log(this.endTime);
        },
        onCancel3(){
          this.showPicker3 = false;
        },
        onClick(){
          const date = this.currentDate;
          const year = date.getFullYear();
          const month = date.getMonth();
          const thisDay = date.getDate();

          const [sHoursStr, sMinutesStr] = this.beginTime.split(":");
          const sHours = parseInt(sHoursStr,10);
          const sMinutes = parseInt(sMinutesStr,10);
          const beginTime = new Date(year,month,thisDay,sHours,sMinutes);
          console.log(beginTime);

          const [eHoursStr, eMinutesStr] = this.endTime.split(":");
          const eHours = parseInt(eHoursStr,10);
          const eMinutes = parseInt(eMinutesStr,10);
          const endTime = new Date(year, month,thisDay,eHours,eMinutes);
          console.log(endTime);

          const begin_time_mili = beginTime.getTime() + '000000';
          const end_time_mili = endTime.getTime() + '000000';
          this.$bus.$emit(
            'sendTimeToChart',
            {
                begin_time: begin_time_mili,
                end_time: end_time_mili
            }
          );
        }
      }
    };
  </script>


<style scoped>
.button{
  margin-top: 10px;
  margin-bottom: 5px;
}
.demonstration{
  margin-bottom: 10px;
}
</style>
