<template>
  <div
    class="input-cell"
    :class="{
      'input-cell--suffix': $scopedSlots.default,
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
      v-model.trim="val"
      :id="fakeId"
      :type="type"
      :form="form"
      :placeholder="placeholder"
      @focus="focused = true"
      @blur="!val && (focused = false)"
    />
    <slot klass="input-cell__suffix"/>
  </div>
</template>

<script>
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
  computed: {
    val: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  },
  data () {
    return {
      fakeId: generateFakeId(),
      focused: false
    }
  }
}
</script>

<style lang="scss">
  @import "index";
</style>
