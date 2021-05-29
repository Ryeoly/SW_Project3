<template>
  <div id="detail" class="base">
    <div class="maincontent">
      <item />
      <v-divider/>
      <item-detail />
      <v-divider/><br>
      <suggest :value="gamedatas" />
      <v-divider/><br>
      <review />
      <v-divider/><br>
      <qna />
    </div>
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
  .base{
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(100, 1fr);
  }
  .maincontent{
    grid-area : 1/20/90/80;
  }
  .itemcontent{
    grid-area : 1/20/30/80;
  }
  .bar {
    display: inline-block;
    width: 2px;
    height: 25px;
    text-indent: -999em;
    background: #e4e4e5;
    vertical-align: bottom;
  }
</style>