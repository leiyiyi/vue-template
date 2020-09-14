<template>
  <ul class="menu__ul">
    <li
      class="menu__li"
      v-for="item in data"
      :key="item.nodes.join(',')"
    >
      <div
        class="menu__li-folder"
        @click="handleFolderClick(item)"
      >
        {{ item.name }} - {{ item.order }}
      </div>
      <Menu
        class="menu__li-children"
        :data="item.children"
      ></Menu>
      <ul class="menu__li-items">
        <li
          class="menu__li-item"
          v-for="itm in item.items"
          :key="itm.nodes.join(',')"
          @click="handleFileClick(itm)"
        >
          {{ itm.name }} - {{ itm.order }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Menu',
  props: {
    data: Array
  },
  computed: {
    ...mapState('app', [
      'tabs'
    ])
  },
  methods: {
    ...mapActions('app', [
      'openTab'
    ]),
    handleFolderClick (item) {

    },
    handleFileClick (item) {
      this.openTab(item)
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
