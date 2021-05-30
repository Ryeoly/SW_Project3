<template>
    <youtube
        :video-id="videoId"
        :player-vars="playerVars"
        @ready="ready"
        @playing="playing"
        @ended="ended"
        @error="error"
        ref="youtube" />
</template>

<script>
import { getIdFromURL} from 'vue-youtube-embed'

export default {
  name: "Youtube",

  computed: {
    videoId : getIdFromURL("https://www.youtube.com/watch?v=Ns6AEbqprN4"),

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
  }
}
</script>

<style scoped>

</style>