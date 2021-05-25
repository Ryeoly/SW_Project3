<template>
  <v-container class="pa-0">
    <base-subheading>On Product</base-subheading>

    <v-row>
      <v-col
          v-for="(gamedata, i) in gamedatas"
          :key="i"
          class="d-flex child-flex"
          cols="4"
      >
        <v-img
            :src="`../assets/game_img/${gamedata.image}`"
            aspect-ratio="1"
            class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: 'Instagram',

    data: () => ({
      layout: [3, 3, 3, 3],
      page: 1,
    }),

    computed: {
      ...mapState(['gamedatas']),
      pages () {
        return Math.ceil(this.gamedatas.length / 11)
      },
      paginatedGameDatas () {
        const start = (this.page - 1) * 11
        const stop = this.page * 11

        return this.gamedatas.slice(start, stop)
      },
    },

    watch: {
      page () {
        window.scrollTo(0, 0)
      },
    },
  }
</script>
