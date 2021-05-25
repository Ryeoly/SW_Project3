<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <slot />
      </v-col>

      <feed-card
        v-for="(gamedata, i) in paginatedGameDatas"
        :key="gamedata.title"
        :size="layout[i]"
        :value="gamedata"
      />
    </v-row>

    <v-row align="center">
      <v-col cols="3">
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          square
          title="Previous page"
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-col>

      <v-col
        class="text-center subheading"
        cols="6"
      >
        PAGE {{ page }} OF {{ pages }}
      </v-col>

      <v-col
        class="text-right"
        cols="3"
      >
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          square
          title="Next page"
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('./FeedCard'),
    },

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
