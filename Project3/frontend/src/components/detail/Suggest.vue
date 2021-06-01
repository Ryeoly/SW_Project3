<template>
    <div style="margin-bottom: 5%; margin-top: 5%">
      <h1><b> Suggestion For You </b></h1>
      <v-slide-group
          v-model="value"
          class="ma-12"
          active-class="success"
          show-arrows
      >
        <v-slide-item
            v-for="(gamedata, i) in value"
            :key="i"
        >
          <v-img
              :src="require(`@/assets/game_img/${gamedata.image1}`)"
              class="ma-4"
              height="100"
              width="100"
              @click="gotoDetail(gamedata.idx)"
          >
<!--            <v-row-->
<!--                class="fill-height"-->
<!--                align="center"-->
<!--                justify="center"-->
<!--            >-->
<!--              <v-scale-transition>-->
<!--                <v-icon-->
<!--                    v-if="active"-->
<!--                    color="black"-->
<!--                    size="48"-->
<!--                    v-text="'mdi-close-circle-outline'"-->
<!--                ></v-icon>-->
<!--              </v-scale-transition>-->
<!--            </v-row>-->
          </v-img>
        </v-slide-item>
      </v-slide-group>
    </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Suggest",

  data: () => ({
    text: "Suggestion for Your Game Style"
  }),

  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },

  methods:{
    ...mapMutations(["save_item_data"]),
    ...mapMutations(["save_qna_data"]),
    ...mapMutations(["save_rec_data"]),
    ...mapMutations(["save_count"]),
    ...mapMutations(["save_rev_data"]),
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
          this.$vuetify.goTo(0)
        }
      })
    }
  }
}
</script>
