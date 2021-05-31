<template>
  <div id="product">
    <v-item-group active-class="primary">
      <v-container>
        <v-row>
          <v-col
              v-for="(gamedata, i) in paginatedGameDatas"
              :key="i"
              cols="12"
              md="4"
          >
            <v-item>
              <v-card
                width="400"
                @click="gotoDetail(gamedata.idx.toString())"
              >
                <v-hover>
                  <video
                      slot-scope="{ hover }"
                      v-if="hover"
                      :src="require(`@/assets/game_video/${gamedata.video1}`)"
                      :autoplay="true"
                      width="400"
                      height="200"
                  >
                  </video>
                  <v-img
                      v-else
                      :src="require(`@/assets/game_img/${gamedata.image1}`)"
                      width="400"
                      height="200"
                  >
                  </v-img>
                </v-hover>
                <v-card-title>{{gamedata.product}}</v-card-title>
                <v-card-subtitle>{{gamedata.price}}</v-card-subtitle>
              </v-card>
            </v-item>
          </v-col>
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
    </v-item-group>
  </div>
</template>

<script>
//import {mapGetters, mapState} from "vuex";
  //import myVideo from "vue-video";

  import {mapMutations} from "vuex";
  //import Shop from "../../views/Shop";

  export default {
    name: 'ShopGame',

    props: {
      value: {
        type: Object,
        default: () => ({}),
      },
    },

    data : ()=> ({
      page : 1,
      u_idx : null,
      test : "1234"
    }),

    computed: {
      pages () {
        return Math.ceil(this.value.length / 9)
      },
      paginatedGameDatas () {
        const start = (this.page - 1) * 9
        const stop = this.page * 9

        return this.value.slice(start, stop)
      },
    },

    watch: {
      page () {
        window.scrollTo(0, 0)
      },
    },
    methods: {
      ...mapMutations(["save_item_data"]),
      ...mapMutations(["save_qna_data"]),
      ...mapMutations(["save_rec_data"]),
      ...mapMutations(["save_count"]),
      ...mapMutations(["save_rev_data"]),
      // eslint-disable-next-line no-unused-vars
      gotoDetail(idx) {
        this.u_idx=this.$store.state.useridx
        // eslint-disable-next-line no-unused-vars
        this.$http.post('/detail', {u_idx:this.u_idx, i_idx:idx}).then((response)=>{
          if(response.data.success === true){
            this.save_item_data(response.data.item_data)
            this.save_rec_data(response.data.recommend_data)
            this.save_rev_data(response.data.review_data)
            this.save_qna_data(response.data.qna_data)
            this.save_count(response.data.count_data)
            this.$router.push({path: '/detail'})
          }
        })
      }
    }

  }
</script>
