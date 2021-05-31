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

          <v-autocomplete
                  v-model="product"
                  :items="products"
                  label="Product"
                  append-icon="mdi-magnify"
                  chips
                  @click:append="go_search()"
                  color="blue"
                  flat
                  hide-details
                  solo-inverted
                  style="max-width: 300px;"
          >
          </v-autocomplete>


        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-top-transition"
        >
          <template v-slot:activator="{ attrs }">
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
                @click="basketCheck"
            >
            </v-img>
          </template>
          <basket :value="buy_items" @update="updateDialog" @plus="plusAmount" @minus="minusAmount"/>
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
      products: [
        'GTA5', 'Capcom','Apex','Skylines','삼국지','Counter-Strike'
        ,'Rust','Hood','Slormancer','Another Eden','Euro Truck'
        ,'FIFA','철권','Battlegrounds'
              ],
      selected:[],
        user_id: false,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      product:null
      }),
    computed: {
      ...mapGetters(['links']),
      ...mapGetters(['return_islogin']),
      buy_items() {
        return this.$store.state.baskets
      },

    },
      methods: {
        ...mapMutations(['toggleDrawer']),
        ...mapMutations(['islogin_reverse']),
        ...mapMutations(["save_basket"]),
        ...mapMutations(["p_Amount"]),
        ...mapMutations(["m_Amount"]),
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
          basketCheck(){
            this.$http.post('/basket/check', {user_idx: this.$store.state.useridx}).then((response) => {
              if(response.data.success === true){
                this.save_basket(response.data.basket_datas)
                this.dialog = true
              }
            })
          },
        updateDialog(){
          this.dialog = false
        },
        plusAmount(idx){
          this.p_Amount(idx)
        },
        minusAmount(idx){
          this.m_Amount(idx)
        },
    },
    components: {
      // eslint-disable-next-line vue/no-unused-components
      search: () => import('./search'),
      basket: () => import('./basket')
    },
  }
</script>

<style>
  .text-right{
    float:right;
  }
  .base{
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(100, 1fr);
  }
  .table{
    grid-area : 30/30/70/70;
  }
</style>
