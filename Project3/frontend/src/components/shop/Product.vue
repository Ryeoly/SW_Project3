<template>
  <div id="product">
    <v-item-group>
      <v-row>
        <feed-card
            v-for="(gamedata, i) in paginatedGameDatas"
            :key="gamedata.title"
            :size="layout[i]"
            :value="gamedata"
        />
      </v-row>
    </v-item-group>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: 'ShopGame',

    /*components: {
      //Feed: () => import('@/components/Feed'),
    },*/
    components: {
      FeedCard: () => import('../FeedCard'),
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
