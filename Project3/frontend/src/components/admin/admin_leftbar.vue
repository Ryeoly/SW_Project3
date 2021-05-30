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
                { text: '구매 동향', icon: 'mdi-account-cog' , goto:'/admin/trend'},
                { text: 'Q&A 관리', icon: 'mdi-wallet-giftcard', goto:'/admin/QnA_ans' },
                { text: '제품 관리', icon: 'mdi-account-question', goto:'/admin/product_add'},
            ],
            user_info:
                { nickname : '여리', email:'youddbb@naver.com'}
            ,
        }),
    }
</script>

<style scoped>

</style>
