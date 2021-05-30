<template>
    <div
        class="item"
        max-width="1200"
        max-height="800"
    >
      <div style="margin-right: 20px">{{rating}}</div>
      <div style="margin-right: 20px">{{this.values[0][0].star}}</div>
      <div>{{this.values[1][0].cnt}}</div>
      <div class="bigimagesection">
        <v-img
            v-if="represent"
            :src="require(`@/assets/game_img/${values[0][0].image1}`)"
            width="460"
            height="215"
        />
        <video
            v-else
            autoplay
            :src="require(`@/assets/game_video/${values[0][0].video1}`)"
            width="460"
            height="215"
        />
      </div>
      <div class="product">
        <br><br>
        <v-rating
            readonly
            v-model="rating"
            color="warning"
            icon-label="custom icon label text {0} of {1}"
        ></v-rating>
        <v-card-title><h1>{{values[0][0].product}}</h1></v-card-title>
        <v-card-subtitle>{{values[0][0].price}}</v-card-subtitle>
        <v-btn width="120">구매하기</v-btn>
        <v-btn width="120">장바구니에 담기</v-btn>
      </div>

      <div class="smallimage">
        <v-img
            :src="require(`@/assets/game_img/${values[0][0].image1}`)"
            max-width="90"
            max-height="50"
            @click="RepresentImage"
        />
      </div>
      <div class="smallvideo">
        <video
            :src="require(`@/assets/game_video/${values[0][0].video1}`)"
            width="90"
            height="50"
            @click="RepresentVideo"
        />
      </div>
    </div>
</template>

<script>
export default {
  name: "Item",

  props: {
    values: {
      type: Object,
      default: () => ({}),
    },
  },


  data: () => ({
    rating: 0,
    represent : true
  }),
  computed:{
    calculation:function() {
      return parseInt(this.values[0][0].star)/parseInt(this.values[1][0].cnt)
    }
  },
  created () {
    // eslint-disable-next-line no-undef
    this.rating = this.calculation
  },
  methods: {
    RepresentImage(){
      this.represent = true
    },
    RepresentVideo(){
      this.represent = false
    },
  }
}
</script>

<style scoped>
  .item{
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(100, 1fr);
  }
  .bigimagesection{
    grid-area : 20/1/70/50;
  }
  .product{
    grid-area : 20/51/70/99;
  }
  .smallimage{
    grid-area : 71/1/100/10;
  }
  .smallvideo{
    grid-area : 71/11/100/50;
  }
</style>
