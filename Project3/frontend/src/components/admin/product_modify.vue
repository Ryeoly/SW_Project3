<template>
    <div class="base">
        <v-simple-table class="card1111" v-model="gamedatas" >
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
                <th>
                    변경할 금액
                </th>
                <th>
                    변경하기
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
                            :src="require(`@/assets/game_img/`+item.image1)"
                            width="200"
                            height="100"
                    ></v-img>
                </td>
                <td>{{ item.product }}</td>
                <td>{{item.price}}</td>
                <td>
                    <v-text-field
                            label="수정할 가격"
                            v-model="modi_price[i]"
                            placeholder="input price"
                    >

                    </v-text-field>
                </td>
                <td><v-btn @click="modify_price(item.idx,i)">수정하기</v-btn></td>
            </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        name: "product_modify.vue",
        created(){
            this.$http.get('/shop/all').then((res)=>{
                this.gamedatas = res.data.items
            })
        },


        data: () => ({
            gamedatas: [],
            modi_price: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
        }),
        methods:{
            modify_price(i_idx,i){
                this.$http.post('/shop/modify_price', {i_idx: i_idx, modi_price:this.modi_price[i]}).then((res) => {
                    this.gamedatas = res.data.items
                    this.modi_price[i]=""
                })
            }
        },
    }
</script>


<style>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .card1111{
        grid-area : 2/2/70/98;
    }
</style>
