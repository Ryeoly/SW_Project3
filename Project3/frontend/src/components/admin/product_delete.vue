<template>
    <div class="base">
        <v-simple-table class="card" v-model="gamedatas">
            <thead>
            <tr>
                <th class="primary--text">
                    제품 사진
                </th>
                <th class="primary--text">
                    제품명
                </th>
                <th class="primary--text">
                    판매 금액
                </th>
                <th class="primary--text">
                    제품 삭제
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, i) in gamedatas"
                    :key="i"
                    style="height: 120px"
                    link>
                <td>
                    <v-img
                            :src="require(`@/assets/game_img/${item.image1}`)"
                            width="200"
                            height="100"
                    ></v-img>
                </td>
                <td>{{ item.product }}</td>
                <td>{{item.price}}</td>
                <td><v-btn @click="delete_product(item.idx)">삭제</v-btn></td>
            </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        name: "product_delete.vue",
        created(){
            this.$http.get('/shop/all').then((res)=>{
                this.gamedatas = res.data.items
                console.log(this.gamedatas)
            })
        },


        data: () => ({
            gamedatas: [],
        }),
        methods:{
            delete_product(i_idx){
                this.$http.post('/shop/delete_product', {i_idx: i_idx}).then((res) => {
                    this.gamedatas = res.data.items
                    console.log(this.gamedatas)
                })
            },
        }
    }
</script>

<style>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .card{
        grid-area : 2/2/70/98;
    }
</style>
