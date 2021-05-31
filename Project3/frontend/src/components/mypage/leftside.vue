<template>
    <div>
        <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
              <v-list-item-title class="title">
                {{value[0].NAME}}
              </v-list-item-title>
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-subtitle> {{value[0].email}}</v-list-item-subtitle>
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
                { text: '내가 쓴 글', icon: 'mdi-clipboard-edit', goto: '/mypage/my_board' },
            ],

        }),

    }
</script>


<style scoped>

</style>
