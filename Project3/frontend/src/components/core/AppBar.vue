<template>
  <v-app-bar
    app
    flat
    color="background"
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
          v-for="(link, i) in bar_link"
          :key="i"
          v-bind="link"
          class="hidden-sm-and-down"
          text
          color="#ffffff"
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
        <v-spacer />

          <v-autocomplete
                  v-model="product"
                  :loading="loading"
                  :items="products"
                  :search-input.sync="search"
                  cache-items
                  class="mx-4"
                  flat
                  hide-no-data
                  hide-details
                  append-icon="mdi-magnify"
                  chips
                  hint="Search..."
                  @click:append="go_search()"
                  solo-inverted
                  style="background-color: #ffffff; max-width: 300px;"
          >
          </v-autocomplete>

        <v-btn v-if="islogin"
               href="/login"
               class="hidden-sm-and-down"
               text
               color="#ffffff">Login</v-btn>
        <v-btn v-else
               @click="logout_user"
               class="hidden-sm-and-down"
               text
               color="#ffffff">Logout</v-btn>

        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-top-transition"
        >
          <template v-slot:activator="{ attrs }">
            <v-btn
                class="hidden-sm-and-down"
                color="#ffffff"
                text
                v-bind="attrs"
                @click="basketCheck"
            >Cart
            </v-btn>
          </template>
          <basket :value="buy_items"
                  @update="updateDialog"
                  @plus="plusAmount"
                  @minus="minusAmount"
                  @delete="deleteItem"
          />
        </v-dialog>

        <v-btn
                class="hidden-sm-and-down"
                color="#ffffff"
                text
                @click="goMypage"
          >
          My Page
        </v-btn>
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
      login:false,
      _login:true,
      loading: false,
      products: [
        'Apex Legends',
        "PLAYERUNKNOWN'S BATTLEGROUNDS",
        'Capcom Arcade Stadium','TEKKEN 7',
        'Counter-Strike: Global Offensive',
        'Rust',
        'ANOTHER EDEN',
        'ROMANCE OF THE THREE KINGDOMS',
        'Hood: Outlaws & Legends',
        'The Slormancer',
        'Cities: Skylines',
        'Euro Truck Simulator 2',
        'EA SPORTS FIFA 21',
        'Grand Theft Auto V',
      ],
      selected:[],
        user_id: false,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      product:""
      }),
    computed: {
      ...mapGetters(['bar_link']),
      ...mapGetters(['return_islogin']),
      buy_items() {
        return this.$store.state.baskets
      },
      islogin(){
        if(this.$store.state.useridx === "1"){
          return true
        }
        else{
          return false
        }
      },
    },
      methods: {
        ...mapMutations(['toggleDrawer','search_product_set' ]),
        ...mapMutations(['islogin_reverse']),
        ...mapMutations(["save_basket"]),
        ...mapMutations(["save_item_data"]),
        ...mapMutations(["save_qna_data"]),
        ...mapMutations(["save_rec_data"]),
        ...mapMutations(["save_count"]),
        ...mapMutations(["save_rev_data"]),
        ...mapMutations(["saveidx"]),
        ...mapMutations(["p_Amount"]),
        ...mapMutations(["m_Amount"]),
        ...mapMutations(["delete_item"]),
        ft_login(){
          if(this.$store.state.userdata.useridx === "1"){
            this.login = false;
            this._login = true;
          }
          else{
            this.login = true;
            this._login = false;
          }

        }
        ,
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
        deleteItem(idx){
          this.delete_item(idx)
        },
        go_search(){
          var idx;
          for(let i=0;i<this.products.length; i++){
            if(this.product === this.products[i]){
              idx = i + 1;
              idx = idx.toString()
            }
          }
          this.$http.post('/detail', {u_idx:this.$store.state.useridx, i_idx:idx}).then((response)=>{
            if(response.data.success === true){
              this.save_item_data(response.data.item_data)
              this.save_rec_data(response.data.recommend_data)
              this.save_rev_data(response.data.review_data)
              this.save_qna_data(response.data.qna_data)
              this.save_count(response.data.count_data)
              this.$router.push({path: '/detail'})
            }
          })
        },
        goMypage(){
          if(this.$store.state.useridx === "1"){
            this.$router.push({path: '/login'})
          }
          else{
            this.$router.push({path: '/mypage/my_info'})
          }
        },
        logout_user(){
          localStorage.clear()
          location.href = '/home'
        }
    },
    components: {
      // eslint-disable-next-line vue/no-unused-components
      basket: () => import('./basket'),
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
