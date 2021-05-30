<template>
  <div id="itemdetail">
    <span>{{value.content1}}</span>
  </div>
</template>

<script>
export default {
  name: "ItemDetail",

  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped>

</style>