<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{user_info.nickname}}
          </v-list-item-title>
          <v-list-item-subtitle> {{user_info.email}}</v-list-item-subtitle>
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
          color="#DCDCDC"
          text="#000000"
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
  name: "admin_leftbar.vue",
  data: () => ({
    selectedItem: 0,
    items: [
      { text: '구매 동향', icon: 'mdi-trending-up' , goto:'/admin/trend'},
      { text: 'Q&A 관리', icon: 'mdi-comment-question', goto:'/admin/QnA_ans' },
      { text: '제품 추가', icon: 'mdi-cart-plus', goto:'/admin/product_add'},
      { text: '제품 수정', icon: 'mdi-pencil-outline', goto:'/admin/product_modify'},
      { text: '제품 삭제', icon: 'mdi-trash-can-outline', goto:'/admin/product_delete'},
      { text: '판매 내역', icon: 'mdi-clipboard-list-outline', goto:'/admin/sell_list'},
      { text: '회원 관리', icon: 'mdi-account-supervisor', goto:'/admin/user_manage'},
    ],
    user_info:
        { nickname : '관리자', email:'dtree0520@gmail.com'}
    ,
  }),
}
</script>

<style scoped>
</style>
