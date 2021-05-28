<template>
  <v-col
    cols="9"
    md="4"
  >
      <v-img
        :src="require(`@/assets/game_img/amongus.jpg`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      />
    <v-row
        class="fill-height text-right ma-0"
    >
      <v-col cols="12">
        <v-chip
            label
            class="mx-0 mb-2 text-uppercase"
            color="grey darken-3"
            text-color="white"
            small
            @click.stop=""
        >
          {{ value.genre }}
        </v-chip>

        <h3 class="title font-weight-bold mb-2">
          {{ value.product }}
        </h3>

        <div class="caption">
          {{ value.price }}
        </div>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
  export default {
    name: 'FeedCard',

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
