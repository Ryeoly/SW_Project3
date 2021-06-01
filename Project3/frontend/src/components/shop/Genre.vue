<template>
  <div>
    <v-list flat>
      <v-subheader class="black--text"><h1>GENRES</h1></v-subheader>
      <v-list-item-group
          v-model="selectedItem"
          :value="true"
          color="secondary"
      >
        <v-list-item
            v-for="(genre, i) in genres"
            :key="i"
            link
            @click="postGenre(genre.text, i)"
        >
          <v-list-item-title v-text="genre.text"></v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ShopList',

  data:()=>({
    selectedItem: 0
  }),

  computed: {
    ...mapGetters(['genres']),
  },

  methods: {
    postGenre(sel_genre) {
      this.$http.post('/shop/genre', {genre: sel_genre}).then((response) => {
        this.$emit('update', [response.data.items, sel_genre])
      })
    }
  },
}

</script>
