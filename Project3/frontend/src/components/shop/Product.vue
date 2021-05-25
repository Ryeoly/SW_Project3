<template>
  <section id="product">
    <feed>
      <slot />
    </feed>
  </section>
</template>

<script>
  export default {
    name: 'ShopGame',

    components: {
      Feed: () => import('@/components/Feed'),
    },
  }
</script>
