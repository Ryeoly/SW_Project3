<template>

</template>

<script>
  export default {
    name: 'ItemList',

    props: {
      size: {
        type: Number,
        required: true,
      },
      value: {
        type: Object,
        default: () => ({}),
      },
    },
  }
</script>

<style>
/*.v-image__image {
  transition: .3s linear;
}*/
</style>
