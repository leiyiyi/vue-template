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
import { useStore } from 'vuex'

export default {
  name: 'Menu',
  props: {
    data: Array
  },
  setup (props) {
    const store = useStore()
    const handleFolderClick = item => {
      console.log(item)
      store.dispatch('app/openTab', item)
    }
    const handleFileClick = item => {
      store.dispatch('app/openTab', item)
      // console.log(item)
    }
    return {
      handleFolderClick,
      handleFileClick
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
