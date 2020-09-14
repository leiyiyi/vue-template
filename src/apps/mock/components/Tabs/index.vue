<template>
  <nav class="tabs">
    {{[...tabs]}}
    {{tabLength}}
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

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
