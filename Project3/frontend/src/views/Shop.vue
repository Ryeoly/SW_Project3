<template>
  <div class="wrapper">
    <div class="leftbar">
      <genre />
    </div>
    <v-spacer />
    <div class="mainview">
      <product :value="paginatedGameDatas" />
    </div>
  </div>
  <!--<div id="shop">
    <suggest :value="gamedatas" />
    <div class="wrapper">
      <div class="leftbar">
        <genre />
      </div>
      <v-spacer />
      <div class="mainview">
        <product :value="paginatedGameDatas" />
      </div>
    </div>
  </div>-->
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: 'Shop',
    created () {
      this.$http.get('/shop').then((response) => {
        this.datas = response.data.items
      })
    },

    components: {
      //Suggest: () => import('../components/shop/Suggest'),
      //List: () => import('../components/shop/List'),
      Genre: () => import('../components/shop/Genre'),
      Product: () => import('../components/shop/Product'),
    },
    data: () => ({
      //layout: [3, 3, 3, 3],
      page: 1,
      datas: []
    }),

    computed: {
      ...mapState(['gamedatas']),
      pages () {
        return Math.ceil(this.datas.length / 11)
      },
      paginatedGameDatas () {
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

<style>
.wrapper{
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
}
.leftbar{
  grid-area: 1/1/100/20;
}
.mainview{
  grid-area : 10/22/100/100;
}
</style>
