<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="require('../../assets/icon/person.jpeg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-title class="title">
          {{value[0]}}
        </v-list-item-title>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-subtitle>{{value[1]}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list
        nav
        dense
    >
      <v-list-item-group
          v-model="selectedItem"
          color="secondary"
      >
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="$router.push(item.goto)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "leftside.vue",

  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },


  data: () => ({
    selectedItem: 0,
    u_idx: null,
    items: [
      { text: '내 정보 수정', icon: 'mdi-account-cog' , goto:'/mypage/my_info'},
      { text: '구매 내역', icon: 'mdi-wallet-giftcard', goto:'/mypage/buy_history' },
      { text: 'Q&A 문의', icon: 'mdi-account-question', goto:'/mypage/Q_A'},
    ],

  }),

  computed:{
    adminname(){
      return this.$store.state.adminname
    },
    adminemail(){
      return this.$store.state.adminemail
    }
  },

}
</script>


<style scoped>

</style>
