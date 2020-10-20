export default {
  name: 'test', // not required
  beforeMount (el, binding, vnode, prevVnode) {
    console.log('el', el)
  },
  mounted (el, binding, vnode) {},
  beforeUpdate () {},
  updated () {},
  beforeUnmount () {},
  unmounted () {}
}
