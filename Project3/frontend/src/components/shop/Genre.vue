<template>
  <v-container
    id="genre"
    tag="section"
  >
    <!--<base-subheading>Genre</base-subheading>-->
    <v-list-item-content>
      <v-checkbox v-model="checkbox"><br />
        <template v-slot:label>RPG</template>
      </v-checkbox>
      <v-checkbox v-model="checkbox"><br />
        <template v-slot:label>FPS</template>
      </v-checkbox>
      <v-checkbox v-model="checkbox"><br />
        <template v-slot:label>Arcade</template>
      </v-checkbox>
      <v-checkbox v-model="checkbox"><br />
        <template v-slot:label>Video Game</template>
      </v-checkbox>
    </v-list-item-content>
  </v-container>
</template>

<script>
  export default {
    name: 'ShopGenre',
  }
</script>
