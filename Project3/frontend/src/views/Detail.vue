<template>
  <div id="detail" class="detailbase" >
    <div class="itemcontent">
      <item :values="[item,count_star]" />
    </div>
    <div class="maincontent">
      <v-container>
        <v-row>
          <v-col cols="7">
            <item-detail :value="item"/>
          </v-col>
          <v-divider vertical/>
          <v-col cols="3">
            <h3>Relative Video</h3>
            <br><br>
            <div>
              <youtube
                  :video-id="youtube_1"
                  :player-vars="playerVars"
                  width="400"
                  height="200"
                  @ready="ready"
                  @playing="playing"
                  @ended="ended"
                  @error="error"
                  ref="youtube" />
            </div>
            <br><br>
            <div>
              <youtube
                  :video-id="youtube_2"
                  :player-vars="playerVars"
                  width="400"
                  height="200"
                  @ready="ready"
                  @playing="playing"
                  @ended="ended"
                  @error="error"
                  ref="youtube" />
            </div>
            <br><br>
            <div>
              <youtube
                  :video-id="youtube_3"
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
    </div>
    <div class="suggest">
      <suggest :value="recommend" />
    </div>
    <div class="rev">
      <review :boards="review"/>
    </div>
    <div class="q">
      <qna :boards="qna"/>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {getIdFromURL} from "vue-youtube-embed";
//import {getIdFromURL} from "vue-youtube-embed";

export default {
  name: "Detail",

  data : () => ({
    itemdata : this.item,
    recommenddata: this.recommend,
    reviewdata : this.review,
    qnadata: this.qna,
    count : this.count_star,
    video_id1: this.youtube_1,
    video_id2: this.youtube_2,
    video_id3: this.youtube_3,
  }),

  computed: {
    ...mapState(['gamedatas']),

    item(){
      return this.$store.state.itemdata
    },
    recommend(){
      return this.$store.state.recommenddata
    },
    review(){
      return this.$store.state.reviewdata
    },
    qna(){
      return this.$store.state.qnadata
    },
    count_star(){
      return this.$store.state.count
    },
    youtube_1(){
      return getIdFromURL(this.$store.state.itemdata[0].youtube1)
    },
    youtube_2(){
      return getIdFromURL(this.$store.state.itemdata[0].youtube2)
    },
    youtube_3(){
      return getIdFromURL(this.$store.state.itemdata[0].youtube3)
    },

    playerVars() {
      return {
        //controls: 0,
        //player3: Object,
        rel: 0,
        //autoplay: 1,
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
    applyConfig() {
      this.play = Object.assign(this.play, this.temp)
    },
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
  }
  .itemcontent{
    grid-column-start: 10;
    grid-column-end: 91;
  }
  .maincontent{
    grid-column-start : 10;
    grid-column-end: 90;
  }
  .suggest {
    grid-column-start : 10;
    grid-column-end: 90;
  }
  .rev {
    grid-column-start : 15;
    grid-column-end: 85;
  }
  .q {
    grid-column-start : 15;
    grid-column-end: 85;
  }
</style>