<template>
  <div class="form-box">
    <div class="form-box__title">
      {{ title }}
    </div>
    <slot/>
    <slot
      klass="form-box__button"
      name="button"
    />
  </div>
</template>

<script>
export default {
  name: 'FormBox',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
  @import "index";
</style>
