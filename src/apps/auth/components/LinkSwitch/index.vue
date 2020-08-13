<template>
  <div class="link-switch">
    <router-link
      class="link-switch__item"
      v-for="item in showLinks"
      :key="item.name"
      :to="{
        name: item.name,
        query: $route.query
      }"
    >
      {{ item.label }}
    </router-link>
  </div>
</template>

<script>
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
  computed: {
    hideName () {
      return this.current || this.$route.name
    },
    showLinks () {
      return links.filter(v => v.name !== this.hideName)
    }
  }
}
</script>

<style lang="scss">
  @import "index";
</style>
