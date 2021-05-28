<template>
  <div id="detail">
      <item />

      <item-detail />

      <suggest :value="gamedatas" />

      <review />

      <qna />
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Detail",

  computed: {
    ...mapState(['gamedatas']),
  },

  components: {
    Item: () => import('../components/detail/Item'),
    ItemDetail: () => import('../components/detail/ItemDetail'),
    //Youtube: () => import('../components/detail/Youtube'),
    Suggest: () => import('../components/detail/Suggest'),
    Review: () => import('../components/detail/Review'),
    Qna: () => import('../components/detail/QnA'),
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
    margin-left: 5%;
    grid-area: 1/1/100/15;
  }
  .mainview{
    grid-area : 1/20/100/100;
  }
</style>