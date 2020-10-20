<template>
  <nav class="tabs">
    {{tabLength}}
    {{[...tabs]}}
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Tabs',
  computed: {
    ...mapState('app', [
      'tabs'
    ]),
    ...mapGetters('app', [
      'tabLength'
    ])
  }
}
</script>

<style lang="scss">
@import "index";
</style>
