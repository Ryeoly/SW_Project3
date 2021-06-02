<template>
    <div class="base">
        <v-simple-table class="card_sell" >
            <thead>
            <tr>
                <th>
                    제품 사진
                </th>
                <th>
                    제품명
                </th>
                <th>
                    판매 일자
                </th>
                <th>
                    판매금액(수량)
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, i) in sale_list"
                    :key="i"
                    style="height: 120px"
                    link>
                <td>
                    <v-img
                            :src="require(`@/assets/game_img/`+item.image)"
                            width="200"
                            height="100"
                    ></v-img>
                </td>
                <td>{{ item.product }}</td>
                <td>{{$moment(item.buytime).format('YYYY-MM-DD')}}</td>
                <td>{{ item.total_price}}({{ item.amount}})</td>
            </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        name: "sell_list.vue",
        created(){
            this.$http.get('/basket/all_list').then((res)=>{
                    this.sale_list=res.data.sale_list
            })
        },


        data: () => ({
            sale_list:[],
            idx:null,
            rating: 0,
            title:"",
            content:"",
            user_id:"",
            i_idx:"",
            dialog:false,
            buy_items: [],
        }),
        methods:{
        }
    }
</script>

<style>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .card_sell{
        grid-area : 2/2/70/98;
    }
</style>
