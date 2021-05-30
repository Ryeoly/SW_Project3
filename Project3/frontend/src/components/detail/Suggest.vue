<template>
    <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
    >
      <v-slide-item
          v-for="(gamedata, i) in value"
          :key="i"
          v-slot="{ active, toggle }"
      >
        <v-img
            :src="require(`@/assets/game_img/${gamedata.image1}`)"
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
</template>

<script>
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
}
</script>
