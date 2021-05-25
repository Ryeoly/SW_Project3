<template>
  <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="800"
  >
    <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
    >
      <v-slide-item
          v-for="(gamedata, i) in paginatedGameDatas"
          :key="gamedata.title"
          :size="layout[i]"
          :value="gamedata"
          v-slot="{ active, toggle }"
      >
        <v-img
            img="{{gamedata.image}}"
            class="ma-4"
            height="100"
            width="100"
            @click="toggle"
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <v-scale-transition>
              <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-img>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "Suggest"
}
</script>
