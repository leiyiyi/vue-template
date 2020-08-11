<template>
  <div class="layout">
    <aside class="layout__aside">左边</aside>
    <header class="layout__header">头部</header>
    <router-view class="layout__main"/>
    <footer class="layout__footer">底部</footer>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss">
  @import "index";
</style>
