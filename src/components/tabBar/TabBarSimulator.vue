<template>
  <TabBar>
    <template v-for="(item, index) in configData">
      <tab-bar-item :path="item.routerTo" :is-hidden-badge="item.isHiddenBadge">
        <img slot="item-img" :src=item.src>
        <img slot="item-img-active" :src=item.srcActive>
        <div slot="item-text" style="font-size: xx-small;color: black" >{{item.text}}</div>
      </tab-bar-item>
    </template>
<!--    <tab-bar-item>-->
<!--      <img slot="item-img" src="@/assets/icon.svg">-->
<!--      <div slot="item-text">首页</div>-->
<!--    </tab-bar-item>-->
<!--    <tab-bar-item>-->
<!--      <img slot="item-img" src="@/assets/icon.svg">-->
<!--      <div slot="item-text">我的</div>-->
<!--    </tab-bar-item>-->
  </TabBar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "TabBarSimulator",
  props: {configBarData: Array},
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      configData: this.configBarData
    }
  },
  created() {
    // this.configData = []
    // for (var i = 0; i < configbarData.barData.length; ++i) {
    //   this.configData.push(configbarData.barData[i])
    // }
  },
  methods: {
    navigateTo(target) {
      console.log(target)
      // this.$message(this.$route.path)
      // this.$index.push(target);
    }
  }
}
</script>

<style scoped>

</style>
