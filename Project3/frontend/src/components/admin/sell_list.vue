<template>
    <div class="base">
        <v-simple-table class="card" >
            <thead>
            <tr>
                <th class="primary--text">
                    제품 사진
                </th>
                <th class="primary--text">
                    제품명
                </th>
                <th class="primary--text">
                    판매 일자
                </th>
                <th class="primary--text">
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
            buy_items: [
                // {image: "amongus.jpg", product: "어몽어스", buy_time: "2021_05_26(수)", amount: "3", price: "15000"},
                // {image: "apex.jpg", product: "apex", buy_time: "2021_05_24(화)", amount: "1", price: "12000"},
                // {image: "battlefield.jpg", product: "배틀 필드", buy_time: "2021_05_28(금)", amount: "6", price: "10000"},
            ],
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
    .card{
        grid-area : 2/2/70/98;
    }
</style>
