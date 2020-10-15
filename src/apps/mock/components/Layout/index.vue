<template>
  <div class="layout">
    <Header class="layout__header"/>
    <aside class="layout__aside">
      <Menu
        class="layout__aside-menu"
        :data="data"
      />
    </aside>
    <Tabs class="layout__tabs"/>
    <main class="layout__main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import Header from '../Header'
import Menu from '../Menu'
import Tabs from '../Tabs'
import data1 from './data'

export default {
  name: 'Layout',
  components: {
    Header,
    Menu,
    Tabs
  },
  setup () {
    const data = ref(data1)
    return {
      data
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
