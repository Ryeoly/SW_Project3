<template>
  <div id="product">
    <v-item-group active-class="primary">
      <v-container>
        <v-row>
          <v-col
              v-for="(gamedata, i) in value"
              :key="i"
              cols="12"
              md="4"
          >
            <v-item>
              <!--<video
                  :autoplay="false"
                  @mouseover="autoplay = true"
              >
                <source :src="require(`@/assets/game_video/${gamedata.video}`)"
                        type="video/webm">
              </video>-->
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

  export default {
    name: 'ShopGame',

    props: {
      value: {
        type: Object,
        default: () => ({}),
      },
    },
  }
</script>
