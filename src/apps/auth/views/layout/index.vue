<template>
  <div class="layout">
    <aside class="layout__aside"/>
    <header class="layout__header">
      <a
        class="layout__header__logo"
        href="javascript:;"
      >
        <img
          class="layout__header__logo-img"
          src="@/assets/imgs/logo.png"
          alt=""
        />
      </a>
      <a
        class="layout__header__return"
        href="javascript:;"
      >
        返回首页
      </a>
    </header>
    <router-view class="layout__main"/>
    <footer class="layout__footer">
      Copyright &copy;{{ year }} XXX All Rights Reserved
    </footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'Layout',
  data () {
    return {
      year: dayjs().format('YYYY')
    }
  }
}
</script>

<style lang="scss">
  @import "index";
</style>
