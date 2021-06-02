<template>
<div class="base">
    <div class="table1" style="margin-top: 30px">
        <v-card class="table">
            <v-toolbar
                    flat
                    color="background"
                    dark
            >
                <v-toolbar-title>Q&A 모음</v-toolbar-title>
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
                        <v-simple-table>
                            <thead>
                            <tr>
                                <th style="width: 10%">
                                    글 번호
                                </th>
                                <th style="width: 30%">
                                    제목
                                </th>
                                <th style="width: 40%">
                                    등록일
                                </th>
                                <th style="width: 20%">
                                    작성자
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
                                <v-simple-table>

                                    <tr>
                                        <v-expansion-panel-header>
                                            <td style="width: 10%">{{i + 1}}</td>
                                            <td style="width: 30%">{{board.title}}</td>
                                            <td style="width: 40%">{{$moment(board.create_time).format('YYYY-MM-DD')}}</td>
                                            <td style="width: 20%">{{board.name}}</td>
                                        </v-expansion-panel-header>
                                    </tr>

                                    <v-expansion-panel-content>
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
                                        <div>
                                            {{board.re_content}}
                                        </div>
                                    </v-expansion-panel-content>
                                </v-simple-table>
                            </v-expansion-panel>
                        </v-expansion-panels>
                </v-tab-item>

                <v-tab-item>
                    <v-simple-table>
                        <thead>
                            <tr>
                                <th style="width: 10%">
                                    글 번호
                                </th>
                                <th style="width: 30%">
                                    제목
                                </th>
                                <th style="width: 40%">
                                    등록일
                                </th>
                                <th style="width: 20%">
                                    작성자
                                </th>
                                <th style="width: 6px">
                                </th>
                            </tr>
                        </thead>
                    </v-simple-table>

                    <v-expansion-panels>
                        <v-expansion-panel
                            v-for="(board, i) in untreat"
                            :key="i">
                            <v-simple-table>
                                <tr>
                                    <v-expansion-panel-header>
                                      <td style="width: 10%">{{i + 1}}</td>
                                      <td style="width: 30%">{{board.title}}</td>
                                      <td style="width: 40%">{{$moment(board.create_time).format('YYYY-MM-DD')}}</td>
                                      <td style="width: 20%">{{board.name}}</td>
                                    </v-expansion-panel-header>
                                </tr>

                                <v-expansion-panel-content>
                                    <div class="title" style="margin-top: 20px; margin-bottom: 30px">
                                          <span>
                                            Q&A
                                          </span>
                                    </div>
                                    <div style="text-align: center; height: 150px">
                                        {{board.content}}
                                    </div>
                                    <div class="title" style="margin-top: 20px; margin-bottom: 30px">
                                        <div style="margin-top: 20px; width: 40%; margin-left: 30%">
                                            <v-textarea
                                                v-model="replymessage"
                                                color="#000000"
                                                label="Message"
                                                solo
                                                background-color="#ffffff"
                                                flat
                                                append-icon="mdi-send"
                                                @click:append="send(board.idx,board.itemidx)"
                                            />
                                        </div>
                                    </div>
                                </v-expansion-panel-content>
                            </v-simple-table>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</div>
</template>

<script>
    export default {
        name: "QnA_ans.vue",

        created(){
          this.$http.get('/admin/qna').then((res)=>{
            if(res.data.success===false){
              console.log("error")
            }
            else{
              this.treat=res.data.treat
              this.untreat=res.data.untreat
            }
          })
        },

        data: () => ({
            replymessage: "",
            treat:[

            ],
            untreat:[

            ],
          idx:null,
          item_idx:null,
        }),

        methods:{
          send(idxx,idxxx){
            this.idx=idxx
            this.item_idx=idxxx
            this.$http.post('/admin/qnasend',{parent_idx: this.idx, content: this.replymessage, item_idx: this.item_idx}).then((res)=>{
              if(res.data.success===false){
                console.log("error")
              }
              else{
                this.untreat = res.data.untreat_data
                this.treat = res.data.treat_data
                this.replymessage = ""
                console.log("success")
              }

            })
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
    .table1{
      grid-area : 10/2/70/98;
    }
    .title {
        border-top: 1px solid;
        border-bottom: 1px solid;
        padding: .5rem .75rem;
        font-size: 1.2rem;
    }
</style>
