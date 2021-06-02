<template>
    <div class="base">
        <v-simple-table class="card" >
            <thead>
            <tr style="height: 40px">
                <th class="secondary--text">
                    제품 사진
                </th>
                <th class="secondary--text">
                    제품명
                </th>
                <th class="secondary--text">
                    구매 일자
                </th>
                <th class="secondary--text">
                    주문금액(수량)
                </th>
                <th class="secondary--text">
                    Review
                </th>
            </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(item, i) in buy_items"
                    :key="i"
                    style="height: 120px">
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
                    <td>
                        <v-dialog
                                v-model="dialog"
                                persistent
                                max-width="600px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                        color="secondary"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        @click="event_click(item.i_idx)"
                                >
                                    리뷰 쓰기
                                </v-btn>
                            </template>
                            <v-card>
                                <v-text-field
                                        ref="title"
                                        v-model="title"
                                        label="제목"
                                        required
                                        style="margin-left: 10%; margin-right: 15%"
                                ></v-text-field>
                                <v-rating
                                        v-model="rating"
                                        color="yellow darken-3"
                                        background-color="grey darken-1"
                                        empty-icon="$ratingFull"
                                        half-increments
                                        hover
                                        medium
                                        style="margin-left: 65%"
                                ></v-rating>
                                <v-textarea
                                        solo
                                        name="content"
                                        label="content"
                                        v-model="content"
                                        style="margin-left: 10%; margin-right: 10%"
                                ></v-textarea>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            color="secondary"
                                            text
                                            @click="dialog = false"
                                    >
                                        Close
                                    </v-btn>
                                    <v-btn
                                            color="secondary"
                                            text
                                            @click="write_review"
                                    >
                                        Write
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </div>

</template>

<script>
    export default {
        name: "buy_history.vue",

      created(){
        this.$http.post('/mypage/buyhistory',{u_idx: this.$store.state.useridx}).then((res)=>{
          if(res.data.success===false){
            console.log("error")
          }
          else{
            this.buy_items=res.data.historydatas
          }
        })
      },


        data: () => ({
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
            event_click(i_idx){
                this.i_idx=i_idx
            },
            write_review(){
                this.$http.post('/mypage/write_review',{u_idx: this.$store.state.useridx, i_idx: this.i_idx, title: this.title, content:this.content, rating: this.rating})
                this.dialog = false
            }
        }
    }
</script>

<style scoped>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .card{
        grid-area : 10/2/70/98;
    }
</style>
