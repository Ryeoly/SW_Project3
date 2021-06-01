<template>
  <div id="itemdetail" style="margin-left: 17%; margin-right: 20%">
    <v-img
        :src="require(`@/assets/game_img/${value[0].image2}`)"
        width="600"
        height="250"
    />
    <br>
    <span><b>{{value[0].content1}}</b></span>
    <br><br>
    <v-img
        :src="require(`@/assets/game_img/${value[0].image3}`)"
        width="600"
        height="250"
    />
    <br>
    <span><b>{{value[0].content2}}</b></span>
    <br><br>
    <span><b>{{value[0].content3}}</b></span>
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