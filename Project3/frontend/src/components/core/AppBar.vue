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


              <v-toolbar-title class="flex text-center">
                장바구니
              </v-toolbar-title>
            </v-toolbar>

            <v-simple-table style="margin-top: 30px">
              <thead>
              <tr style="height: 80px">
                <th>
                  선택
                </th>
                <th class="primary--text">
                  제품 사진
                </th>
                <th class="primary--text">
                  제품명
                </th>
                <th class="primary--text">
                  구매 일자
                </th>
                <th class="primary--text">
                  주문금액(수량)
                </th>
                <th>
                  주문관리
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                      v-for="(item, i) in buy_items"
                      :key="i"
                      style="height: 120px"
                      link>
                <td>
                  <v-checkbox
                          v-model="selected"
                          :value="item.idx"
                  ></v-checkbox>
                </td>
                <td>
                  <v-img
                          :src="require(`@/assets/game_img/`+item.image)"
                          width="200"
                          height="100"
                  ></v-img>
                </td>
                <td>{{ item.product }}</td>
                <td>{{ item.buy_time }}</td>
                <td>{{ item.price }}}</td>
                <td>
                  <v-btn>삭제하기</v-btn>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td style="margin-left: 30px">총액</td>
                <td>150000</td>
                <td></td>
              </tr>
              </tbody>
            </v-simple-table>
            <div style="margin-top: 30px"></div>
            <div style="text-align: center">
              <v-btn> 결제하기 </v-btn>
              <div>{{selected}}</div>
            </div>
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
      products: [
        'GTA5', 'Capcom','Apex','Skylines','삼국지','Counter-Strike'
        ,'Rust','Hood','Slormancer','Another Eden','Euro Truck'
        ,'FIFA','철권','Battlegrounds'
              ],
      buy_items: [
        {idx:1, image: "amongus.jpg", product: "어몽어스", buy_time: "2021_05_26(수)", amount: "3", price: "15000"},
        {idx:2, image: "apex.jpg", product: "apex", buy_time: "2021_05_24(화)", amount: "1", price: "12000"},
        {idx:3, image: "battlefield.jpg", product: "배틀 필드", buy_time: "2021_05_28(금)", amount: "6", price: "10000"},
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
        go_search(){
          location.href="/AppBar_search/" + this.product
        },
    },
    components: {
      // eslint-disable-next-line vue/no-unused-components
      search: () => import('./search'),
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
