<template>
  <button
    class="submit-button"
    type="submit"
    :form="form"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    label: String,
    form: String
  }
}
</script>

<style lang="scss">
  @import "index";
</style>
