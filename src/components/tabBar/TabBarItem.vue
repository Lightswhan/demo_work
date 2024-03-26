<template>
  <div class="tab-bar-item" @click="navigateTo">
    <el-badge :value="msg" class="item" :hidden="isHiddenBadge">
      <div v-if="!isActive">
        <slot name="item-img"></slot>
      </div>
      <div v-else>
        <slot name="item-img-active"></slot>
      </div>
    </el-badge>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    isHiddenBadge: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      msg: 0
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  created() {

  },
  methods: {
    navigateTo() {
      if (this.path && this.path !== this.$route.path) {
        this.$router.push(this.path);
      }
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 56px;  /* 移动端的TabBar一般高度都是49px */
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: #008000
;
}
</style>
