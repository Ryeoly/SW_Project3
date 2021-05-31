<template>
    <v-card style="margin-left: 10%; margin-right: 10%; margin-top: 5%; margin-bottom: 5%">
      <v-container>
      <v-row>
        <v-cols cols="6">
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
        </v-cols>
        <v-col cols="3" />
        <v-cols cols="6">
          <v-rating
              readonly
              v-model="rating"
              color="warning"
              icon-label="custom icon label text {0} of {1}"
          ></v-rating>
          <v-card-title><h1>{{values[0][0].product}}</h1></v-card-title>
          <br>
          <v-card-subtitle>{{values[0][0].price}}</v-card-subtitle>
          <v-btn width="240" @click="addCart(values[0][0].idx)">장바구니에 담기</v-btn>
        </v-cols>
      </v-row>
      <v-row>
          <v-img
              :src="require(`@/assets/game_img/${values[0][0].image1}`)"
              max-width="90"
              max-height="50"
              @click="RepresentImage"
          />
          <video
              :src="require(`@/assets/game_video/${values[0][0].video1}`)"
              width="90"
              height="50"
              @click="RepresentVideo"
          />
      </v-row>
      </v-container>
    </v-card>
</template>

<script>
export default {
  name: "Item",

  data: () => ({
    represent : true,
    rating: 0,
  }),

  created() {
    this.rating = this.make_rate
  },

  computed:{
    make_rate:function (){
      return parseInt(this.values[0][0].star)/parseInt(this.values[1][0].cnt)
    }
  },

  props: {
    values: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    RepresentImage(){
      this.represent = true
    },
    RepresentVideo(){
      this.represent = false
    },
    addCart(data){
      this.$http.post('/basket', {i_idx: data, u_idx: this.$store.state.useridx, amount: "1"}).then((response) => {
          if(response.data.success === true){
            alert("Success Add Your Item to Cart")
          }
      })
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