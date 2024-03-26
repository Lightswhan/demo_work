<template class="topBarBox">
  <div class="topBarItem">
    <van-collapse v-model="activeNames" accordion @change="change3">
      <template v-for="(item, index) in container">
        <van-collapse-item :title=item.techniqueName :name=index>
          <van-collapse v-model="activeNamesSub" accordion @change="change2">
            <template v-for="(item2, index_2) in item.children">
              <van-collapse-item :title=item2.techniqueName :name="`${index}-${index_2}`">
                <van-collapse v-model="activeNamesSubSub" accordion @change="change">
                  <template v-for="(item3, index_3) in item2.children">
                    <van-collapse-item :title=item3.techniqueName :name=item3.techniqueId >
                      <div>动作执行时间：{{actionStart}}</div>
                      <div>动作持续时间：{{actionDuration}}ms</div>
                    </van-collapse-item>
                  </template>
                </van-collapse>
              </van-collapse-item>
            </template>
          </van-collapse>
        </van-collapse-item>
      </template>
    </van-collapse>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "collapse",
  data() {
    return {
      activeNames: [],
      activeNamesSub: [],
      activeNamesSubSub: [],
      container: [],
      actionStart: '',
      actionDuration: '',
      logicTime: ''
    };
  },
  created() {
  },
  mounted() {
    this.loadData()
    this.dataParse2()
    // console.log(this.container);
  },
  methods: {
    change3(item) {
      console.log(item);
    },
    change2(item) {
      console.log("change2");
      console.log(item);
      let first = item.split('-')[0];
      let second = item.split('-')[1];
      this.loadAllTime(this.container[first].children[second].children)
    },
    change(item) {
      console.log(item);
      this.actionStart = ''
      this.actionDuration = ''
      var _this = this
      this.loadTime(1679443800000000000,1679444400000000000,item).then(res => {
        this.actionStart = _this.timestampToTime(res[0][0])
        this.actionDuration = res[0][2]
        // console.log(res);
      })
    },

    loadData() {
      var params = {
        method: 'GET',
        url: 'http://10.112.16.136:8989/base-file/mino_data.json'
      }
      var _this = this
      this.$axios(params)
      .then(function (response) {
        console.log(response);
        _this.container = response.data.data
        console.log(_this.container);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(_this.container);
    },
    loadAllTime(item) {
      var promises = []
      item.forEach((it, index) => {
        promises.push(this.loadTime(1679443800000000000,1679444400000000000,it.techniqueId))
      })
      var _this = this
      Promise.all(promises).then(res => {
        console.log(res);
        res.forEach(item => {
          if (item){
            _this.logicTime += item[2]
          }
        })
      })
    },

    loadTime(start, end, deviceId) {
      return new Promise((resolve, reject) => {
        this.$axios.get('http://10.112.6.250:8888/api/v1/cylinder',{
          params: {
            dev_id: deviceId,
            begin_time: start,
            end_time: end
          }
        }).then(res => {
          // console.log(res);
          if (res.data.data) {
            // console.log(res);
            resolve(res.data.data.rows);
          }else {
            resolve([])
          }
        })
      })
    },
    dataParse() {
      let date = new Date(1679493272064);
      console.log(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + '-' + date.getHours());
    },
    dataParse2() {
      let time = new Date('2023-03-22 08:10:00').getTime();
      let time2 = new Date('2023-03-22 08:20:00').getTime();
      console.log(time);
      console.log(time2);
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp/1000000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ' ';
      var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
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
  border: solid 0.5px;
  /*border-radius: 5%;*/
}
</style>
