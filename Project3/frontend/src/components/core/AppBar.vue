<template>
  <v-app-bar
    app
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          class="hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
        <v-spacer />

        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />

        <v-img
                :src="require('../../assets/icon/shopping-cart.png')"
                class="text-right"
                contain
                height="35"
                width="35"
                max-width="48"
                permanent
        ></v-img>
        <v-img
                :src="require('../../assets/icon/profile.png')"
                class="text-right"
                contain
                height="35"
                width="35"
                max-width="48"
                permanent
                @click="$router.push({path:'/mypage/my_info'})"
          >

        </v-img>

      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'
  const router = require("@/router/index")

  export default {
    name: 'CoreAppBar',

    computed: {
      ...mapGetters(['links']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.href === '#about') {
          this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
        }

        else{
          router.push({path: item.href})
        }
      },
    },
  }
</script>

<style>
  .text-right{
    float:right;
  }
</style>
