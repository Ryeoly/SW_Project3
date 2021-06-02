<template>
    <v-card tile style="margin-top: 5%; margin-bottom: 5%">
      <v-container>
        <v-row>
          <v-cols cols="6">
            <v-img
                v-if="represent"
                :src="require(`@/assets/game_img/${values[0][0].image1}`)"
                width="460"
                height="215"
                style="align-content: center"
            />
            <video
                v-else
                autoplay
                :src="require(`@/assets/game_video/${values[0][0].video1}`)"
                width="460"
                height="215"
                style="align-content: center"
            />
          </v-cols>
          <v-col cols="3" />
          <v-cols cols="6">
            <v-rating
                readonly
                v-model="make_rate"
                color="warning"
                icon-label="custom icon label text {0} of {1}"
                half-increments
            ></v-rating>
            <v-card-title style="text-align: right"><h1>{{values[0][0].product}}</h1></v-card-title>
            <br>
            <v-card-subtitle style="text-align: right"><h2>{{values[0][0].price}}₩</h2></v-card-subtitle>
            <v-btn style="alignment: center" width="400" @click="addCart(values[0][0].idx, values[0][0].price)" color="background" class="white--text">장바구니에 담기</v-btn>
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
    addCart(data, price){
      this.$http.post('/basket', {i_idx: data, u_idx: this.$store.state.useridx, amount: "1", price: price}).then((response) => {
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