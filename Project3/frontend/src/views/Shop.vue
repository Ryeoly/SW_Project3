<template>
  <div class="wrapper">
    <div class="selectlist">
      <list @update="changeDataByList" :value="genre"/>
    </div>
    <div class="leftbar">
      <genre @update="changeDataByGenre"/>
    </div>
    <v-spacer />
    <div class="mainview">
      <product :value="gamedatas" />
    </div>
  </div>
</template>

<script>
  //import {mapState} from "vuex";

  export default {
    name: 'Shop',
    created () {
      this.$http.get('/shop').then((response) => {
        this.gamedatas = response.data.items
      })
    },

    components: {
      //Suggest: () => import('../components/shop/Suggest'),
      List: () => import('../components/shop/List'),
      Genre: () => import('../components/shop/Genre'),
      Product: () => import('../components/shop/Product'),
    },
    data: () => ({
      //layout: [3, 3, 3, 3],
      gamedatas: [],
      genre: "ALL"
    }),

    methods: {
      changeDataByGenre (params) {
        this.gamedatas = params[0]
        this.genre = params[1]
      },
      changeDataByList (params) {
        this.gamedatas = params
      }
    }
  }
</script>

<style scoped>
.wrapper{
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
}
.selectlist{
  grid-area : 1/22/9/100;
}
.leftbar{
  grid-area: 1/1/100/20;
}
.mainview{
  grid-area : 10/22/100/100;
}
</style>
