<template>
    <div class="base">
        <v-simple-table class="card" >
            <thead>
            <tr style="height: 80px">
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
            </tr>
            </thead>
            <tbody>
                <tr
                        v-for="(item, i) in buy_items"
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
                    <td>{{ item.buytime }}</td>
                    <td>{{ item.price}}({{ item.amount}})</td>
                </tr>
            </tbody>
        </v-simple-table>
        <div class="graph">

        </div>
    </div>

</template>

<script>
    export default {
        name: "buy_history.vue",

      created(){
        this.u_idx=this.$store.state.userdata.useridx
        this.$http.post('/mypage/buyhistory',{u_idx: this.u_idx}).then((res)=>{
          if(res.data.success===false){
            console.log("error")
          }
          else{
            this.buy_items=res.data.historydatas
          }
        })
      },


        data: () => ({
            buy_items: [
                // {image: "amongus.jpg", product: "어몽어스", buy_time: "2021_05_26(수)", amount: "3", price: "15000"},
                // {image: "apex.jpg", product: "apex", buy_time: "2021_05_24(화)", amount: "1", price: "12000"},
                // {image: "battlefield.jpg", product: "배틀 필드", buy_time: "2021_05_28(금)", amount: "6", price: "10000"},
            ],
        })
    }
</script>

<style scoped>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .card{
        grid-area : 10/2/70/80;
    }
    .graph{
        grid-area : 72/2/100/100;
    }
</style>
