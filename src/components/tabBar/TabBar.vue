<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  z-index: 100;

  position: fixed; /* 放到最底下 */
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
}
</style>
