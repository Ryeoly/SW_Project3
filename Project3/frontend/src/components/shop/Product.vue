<template>
  <div id="product">
    <v-item-group>
      <v-row>
        <feed-card
            v-for="(gamedata, i) in paginatedDatas"
            :key="i"
            :size="layout[0]"
            :value="gamedata"
        />


      </v-row>
    </v-item-group>
  </div>
</template>

<script>
  //import {mapState} from "vuex";
  export default {
    name: 'ShopGame',

    /*components: {
      //Feed: () => import('@/components/Feed'),
    },*/
    components: {
      FeedCard: () => import('../FeedCard'),
    },

    created () {
      this.$http.get('/shop').then((response) => {
        this.datas = response.data.items
      })
    },
    data: () => ({
      layout: [3, 3, 3, 3],
      page: 1,
      datas: []
    }),

    computed: {
      //...mapState(['gamedatas']),
      pages () {
        return Math.ceil(this.datas.length / 11)
      },
      paginatedDatas () {
        const start = (this.page - 1) * 11
        const stop = this.page * 11

        return this.datas.slice(start, stop)
      },
    },

    watch: {
      page () {
        window.scrollTo(0, 0)
      },
    },
  }
</script>
