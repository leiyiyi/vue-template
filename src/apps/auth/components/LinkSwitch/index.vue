<template>
  <div class="link-switch">
    <router-link
      class="link-switch__item"
      v-for="item in showLinks"
      :key="item.name"
      :to="{
        name: item.name,
        // query: $route.query
      }"
    >
      {{ item.label }}
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const links = [
  {
    name: 'login',
    label: '已有账号登录'
  },
  {
    name: 'register',
    label: '注册新账号'
  },
  {
    name: 'forget',
    label: '忘记密码'
  }
]

export default {
  name: 'LinkSwitch',
  props: {
    current: String
  },
  setup (props) {
    const route = useRoute()
    const hideName = computed(() => props.current || route.name)
    const showLinks = computed(() => links.filter(v => v.name !== hideName.value))
    return {
      hideName,
      showLinks
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
