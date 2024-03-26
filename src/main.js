// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from "vue-router";


import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'


import Vant from 'vant'
import 'vant/lib/index.css'
import axios from "axios"
import * as echarts from "echarts";
import qs from 'qs'

Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Element);

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
  },
  render: h => h(App)
}).$mount('#app')
