<template>
  <v-container>
    <v-card
        outlined
        class="mx-auto my-12"
        max-width="1200"
    >
      <v-row>
          <v-col>
            <v-img
                :src="require('@/assets/game_img/battleground.jpg')"
                height="300"
                width="500"
            />
          </v-col>
          <v-col>
            <v-rating
                readonly
                v-model="rating"
                color="warning"
                icon-label="custom icon label text {0} of {1}"
            ></v-rating>
            <v-card-title>Battle Ground</v-card-title>
            <v-card-subtitle>33000</v-card-subtitle>
            <v-btn width="100">구매하기</v-btn>
          </v-col>
      </v-row>
        <v-img
            :src="require('@/assets/game_img/battleground.jpg')"
            height="30"
            width="50"/>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Item",

  data: () => ({
    rating: 4.3,
  }),
}
</script>

<style scoped>

</style>