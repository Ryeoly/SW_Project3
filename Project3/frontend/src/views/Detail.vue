<template>
  <div id="detail">
        <item :values="[itemdata,count]"/>

        <v-container>
          <v-row>
            <v-col md="7">
              <item-detail />
            </v-col>
            <v-col md="3">
              <div>
                <youtube
                    :video-id="videoId"
                    :player-vars="playerVars"
                    width="400"
                    height="200"
                    @ready="ready"
                    @playing="playing"
                    @ended="ended"
                    @error="error"
                    ref="youtube" />
              </div>
              <div>
                <youtube
                    :video-id="videoId"
                    :player-vars="playerVars"
                    width="400"
                    height="200"
                    @ready="ready"
                    @playing="playing"
                    @ended="ended"
                    @error="error"
                    ref="youtube" />
              </div>
              <div>
                <youtube
                    :video-id="videoId"
                    :player-vars="playerVars"
                    width="400"
                    height="200"
                    @ready="ready"
                    @playing="playing"
                    @ended="ended"
                    @error="error"
                    ref="youtube" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      <suggest :value="recommenddata" />
      <review :boards="reviewdata"/>
      <qna :boards="qnadata"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
//import {getIdFromURL} from "vue-youtube-embed";

export default {
  name: "Detail",

  data : () => ({
    itemdata : [],
    recommenddata: [],
    reviewdata : [],
    qnadata: [],
    count : 0,
  }),

  created () {
    this.$http.get('/detail').then((response) => {
      this.itemdata = response.data.item_data
      this.recommenddata = response.data.recommend_data
      this.reviewdata = response.data.review_data
      this.qnadata = response.data.qna_data
      this.count = response.data.count_data
    })
  },

  computed: {
    ...mapState(['gamedatas']),
    videoId : "lG0Ys-2d4MA",

    playerVars() {
      return {
        //controls: 0,
        player3: Object,
        rel: 0,
        autoplay: 1,
        enablejsapi: 1,
        fs: 0,
        playsinline: 1,
        ivLoadPolicy2: 1,
        //playlist: this.videoId,
        //muted: 1,
        //loop: 1,
        start: this.start,
        end: this.end
      };
    },
  },
  methods: {
    ready(){},
    playing(){},
    ended(){},
    error(){}
  },

  components: {
    Item: () => import('../components/detail/Item'),
    ItemDetail: () => import('../components/detail/ItemDetail'),
    //YoutubePlay: () => import('../components/detail/Youtube'),
    Suggest: () => import('../components/detail/Suggest'),
    Review: () => import('../components/detail/Review'),
    Qna: () => import('../components/detail/QnA'),
  },
}
</script>

<style scoped>
  .detailbase{
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(100, 1fr);
  }
  .maincontent{
    grid-column-start: 20;
    grid-column-end: 80;
  }
  .itemcontent{
    grid-column-start: 20;
    grid-column-end: 80;
  }
  .suggest {
    grid-column-start: 20;
    grid-column-end: 80;
  }
  .rev {
    grid-column-start: 20;
    grid-column-end: 80;
  }
  .q {
    grid-column-start: 20;
    grid-column-end: 80;
  }
</style>
