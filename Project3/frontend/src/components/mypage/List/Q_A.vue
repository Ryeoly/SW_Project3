<template>
    <div class="base">
    <v-card class="table">
        <v-toolbar
                flat
                color="background"
                dark
        >
            <v-toolbar-title>문의 모음</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
            <v-tab>
                <v-icon left color="secondary">
                    mdi-check-bold
                </v-icon>
              <b>처리된 Q&A</b>
            </v-tab>
            <v-tab>
                <v-icon left color="secondary">
                    mdi-help
                </v-icon>
              <b>미처리 Q&A</b>
            </v-tab>
            <v-tab-item>
                <v-simple-table class="card" style="border-width: medium">
                    <thead>
                    <tr>
                        <th style="width: 10%">
                            번호
                        </th>
                        <th style="width: 30%">
                            제목
                        </th>
                        <th style="width: 60%">
                            등록일
                        </th>
                        <th style="width: 6px">
                        </th>
                    </tr>
                    </thead>
                </v-simple-table>

                <v-expansion-panels>
                    <v-expansion-panel
                            v-for="(board, i) in treat"
                            :key="i">
                        <v-simple-table style="border-width: medium; border-color: black">

                            <tr>
                                <v-expansion-panel-header>
                                    <td style="width: 7%">{{i + 1}}</td>
                                    <td style="width: 30%">{{board.title}}</td>
                                    <td style="width: 63%">{{$moment(board.create_time).format('YYYY-MM-DD')}}</td>
                                </v-expansion-panel-header>
                            </tr>

                            <v-expansion-panel-content
                                    style="border-width: medium"

                            >
                                <div class="title" style="margin-top: 20px; margin-bottom: 30px">
                                          <span>
                                            Q&A
                                          </span>
                                </div>
                                <div style="text-align: center; height: 150px">
                                    {{board.content}}
                                </div>
                                <div class="title" style="margin-top: 20px; margin-bottom: 30px">
                                          <span>
                                            관리자의 답변
                                          </span>
                                </div>
                                <div

                                >
                                    {{board.re_content}}
                                </div>
                            </v-expansion-panel-content>

                        </v-simple-table>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-tab-item>

            <v-tab-item>
                <v-simple-table class="card" style="border-width: medium">
                    <thead>
                    <tr>
                        <th style="width: 10%">
                            번호
                        </th>
                        <th style="width: 30%">
                            제목
                        </th>
                        <th style="width: 60%">
                            등록일
                        </th>
                        <th style="width: 6px">
                        </th>
                    </tr>
                    </thead>
                </v-simple-table>

                <v-expansion-panels>
                    <v-expansion-panel
                            v-for="(boards, i) in untreat"
                            :key="i">
                        <v-simple-table style="border-width: medium; border-color: black">

                            <tr>
                                <v-expansion-panel-header>
                                    <td  style="width: 7%">{{i + 1}}</td>
                                    <td  style="width: 30%">{{boards.title}}</td>
                                    <td  style="width: 63%">{{$moment(boards.create_time).format('YYYY-MM-DD')}}</td>
                                </v-expansion-panel-header>
                            </tr>

                            <v-expansion-panel-content
                                style="border-width: medium"
                            >
                                <div class="title" style="margin-top: 20px; margin-bottom: 30px">
                                          <span>
                                            Q&A
                                          </span>
                                </div>
                                <div style="text-align: center; height: 150px">
                                    {{boards.content}}
                                </div>
                            </v-expansion-panel-content>

                        </v-simple-table>
                    </v-expansion-panel>
                </v-expansion-panels>



            </v-tab-item>
        </v-tabs>
    </v-card>
        <v-card class="message">
          <v-toolbar
              flat
              color="background"
              dark
          >
            <v-toolbar-title>Q&A 문의하기</v-toolbar-title>
          </v-toolbar>
            <v-text-field
                    color="info"
                    v-model="email"
                    label="Email"
                    style="margin-right:40%; margin-left: 10%; margin-top: 20px"
            />
            <v-autocomplete
                    ref="game"
                    v-model="game"
                    :items="games"
                    label="게임"
                    placeholder="Q&A"
                    required
                    style="margin-right: 40%; margin-left: 10%"
            ></v-autocomplete>
          <v-textarea
              v-model="title"
              outlined
              rounded
              solo
              name="title"
              label="Q&A 제목"
              style="margin-right:10%; margin-left: 10% "
          ></v-textarea>
            <v-textarea
                outlined
                rounded
                    v-model="content"
                    solo
                    name="content"
                    label="Q&A 내용"
                    style="margin-right:10%; margin-left: 10% "
            ></v-textarea>
            <v-row>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-btn color="secondary"
                @click="qnasend">Send</v-btn>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Q_A.vue",

      created(){
        this.u_idx=this.$store.state.userdata.useridx
        this.$http.post('/mypage/qna',{u_idx: this.u_idx}).then((res)=>{
          if(res.data.success===false){
            console.log("error")
          }
          else{
            this.treat=res.data.treat
            this.untreat=res.data.untreat
          }
        })
      },

        data: () =>({
            tabs:null,
            game:null,
            title: null,
            games: [
                'Apex Legends',"PLAYERUNKNOWN'S BATTLEGROUNDS",'Capcom Arcade Stadium','TEKKEN 7','Counter-Strike: Global Offensive','Rust','ANOTHER EDEN','ROMANCE OF THE THREE KINGDOMS','Hood: Outlaws & Legends','The Slormancer','Cities: Skylines','Euro Truck Simulator 2','EA SPORTS FIFA 21','Grand Theft Auto V',
            ],
            content:null,
            treat:[

            ],
            untreat:[

            ],
        }),

      computed: {
         email(){
           return this.$store.state.useremail
         },
      },

      methods: {
        qnasend(){
          this.u_idx=this.$store.state.useridx
          this.$http.post('/mypage/qnasend',{user_idx: this.u_idx, title: this.title, content: this.content, product: this.game}).then((res)=>{
            if(res.data.success===false){
              console.log("error")
            }
            else{
              this.untreat = res.data.untreat_data
              this.game = null
              this.title = null
              this.content = null
            }
          })
        }
      },
    }
</script>

<style scoped>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .table{
        grid-area : 10/2/70/60;
    }
    .message{
        grid-area: 10/65/70/98;
    }
</style>
