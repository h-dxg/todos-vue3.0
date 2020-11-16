<template>
  <div>
    我是子节点
    <button @click="handleClick">点击我改变父级Title</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    handleClick () {
      this.count += 1
      this.$emit('update:childTitle', this.count)
    }
  }
}
</script>
