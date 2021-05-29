<template>
  <div id="product">
    <v-item-group active-class="primary">
      <v-container>
        <v-row>
          <v-col calss="d-flex"
                 cols="20"
                 sm="9"></v-col>
          <v-col
              calss="d-flex"
              cols="4"
              sm="3"
          >
            <v-select
                :items="lists"
                v-model="lists[0]"
                label="Solo field"
                dense
                solo
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              v-for="(gamedata, i) in value"
              :key="i"
              cols="12"
              md="4"
          >
            <v-item>
              <v-card
                width="400"
              >
                <v-hover>
                  <video
                      slot-scope="{ hover }"
                      v-if="hover"
                      :src="require(`@/assets/game_video/${gamedata.video}`)"
                      :autoplay="true"
                      width="400"
                      height="200"
                  >
                  </video>
                  <v-img
                      v-else
                      :src="require(`@/assets/game_img/${gamedata.image}`)"
                      width="400"
                      height="200"
                  >
                  </v-img>
                </v-hover>
                <v-card-title>{{gamedata.title}}</v-card-title>
                <v-card-subtitle>{{gamedata.price}}</v-card-subtitle>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
  //import {mapState} from "vuex";
  //import myVideo from "vue-video";

  import {mapGetters} from "vuex";

  export default {
    name: 'ShopGame',

    props: {
      value: {
        type: Object,
        default: () => ({}),
      },
    },

    computed :{
      ...mapGetters(['lists'])
    },
  }
</script>
