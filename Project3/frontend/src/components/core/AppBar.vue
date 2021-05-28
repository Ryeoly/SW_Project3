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



        <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-img
                    :src="require('../../assets/icon/shopping-cart.png')"
                    class="text-right"
                    contain
                    height="35"
                    width="35"
                    max-width="48"
                    permanent
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
            >
            </v-img>
          </template>
          <v-card>
            <v-toolbar
                    dark
                    color="primary"
            >
              <v-btn
                      icon
                      dark
                      @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>


              <v-toolbar-title>Settings</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                        dark
                        text
                        @click="dialog = false"
                >
                  Save
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-list
                    three-line
                    subheader
            >
              <v-subheader>User Controls</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
                    three-line
                    subheader
            >
              <v-subheader>General</v-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Notifications</v-list-item-title>
                  <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Sound</v-list-item-title>
                  <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Auto-add widgets</v-list-item-title>
                  <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-dialog>




        <v-img
                :src="require('../../assets/icon/profile.png')"
                class="text-right"
                contain
                height="35"
                width="35"
                max-width="48"
                permanent
                @click="[islogin(return_islogin),islogin_reverse]"
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
    data :()=>({
        user_id: false,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }),
    computed: {
      ...mapGetters(['links']),
      ...mapGetters(['return_islogin']),
    },
      methods: {
      ...mapMutations(['toggleDrawer']),
      ...mapMutations(['islogin_reverse']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.href === '/home#about') {
          router.push({path: '/home'})
          this.$vuetify.goTo('#about')
        }

        else{
          router.push({path: item.href})
        }
      },
        islogin(user_id){
          if(user_id === false){
            location.href="/login"
          }
          else{
            location.href="/login1"
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
