<template>
  <div>
    <v-list-group
        sub-group
        no-action
        :value="true"
    >
      <template v-slot:activator>
        <v-list-item-title>Genres</v-list-item-title>
      </template>

      <v-list-item
          v-for="(genre, i) in genres"
          :key="i"
          link
      >
        <v-list-item-title v-text="genre.text"></v-list-item-title>
      </v-list-item>
    </v-list-group>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ShopList',
  computed: {
    ...mapGetters(['lists']),
    ...mapGetters(['genres']),
  },
}

</script>
