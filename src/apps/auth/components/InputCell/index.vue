<template>
  <div
    class="input-cell"
    :class="{
      // 'input-cell--suffix': $scopedSlots.default,
      'input-cell--focused': focused
    }"
  >
    <label
      class="input-cell__label"
      :for="fakeId"
    >
      {{ label }}
    </label>
    <i
      class="input-cell__icon iconfont"
      :class="`icon-${icon}`"
    />
    <input
      class="input-cell__input"
      v-model.trim="value"
      :id="fakeId"
      :type="type"
      :form="form"
      :placeholder="placeholder"
      @focus="focused = true"
      @blur="!value && (focused = false)"
    />
    <slot klass="input-cell__suffix"/>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { generateFakeId } from '@/utils/string'

export default {
  name: 'InputCell',
  props: {
    value: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    form: String,
    placeholder: String,
    icon: String
  },
  setup (props, { emit }) {
    const fakeId = generateFakeId()
    const focused = ref(false)
    const value = computed({
      get: () => props.value,
      set: (v) => emit('update:value', v)
    })
    return {
      fakeId,
      focused,
      value
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
