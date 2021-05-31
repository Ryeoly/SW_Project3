<template>
    <div class="base">
    <v-card class="table">
        <v-toolbar
                flat
                color="primary"
                dark
        >
            <v-toolbar-title>문의 모음</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
            <v-tab>
                <v-icon left>
                    mdi-check-bold
                </v-icon>
                처리된 Q&A
            </v-tab>
            <v-tab>
                <v-icon left>
                    mdi-help
                </v-icon>
                미처리 Q&A
            </v-tab>

            <v-tab-item>



                <v-simple-table class="card">
                    <thead>
                    <tr>
                        <th class="primary--text">
                            글 번호
                        </th>
                        <th class="primary--text">
                            제목
                        </th>
                        <th class="primary--text">
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
                        <v-simple-table>

                            <tr>
                                <v-expansion-panel-header>
                                    <td>{{i}}</td>
                                    <td>{{board.title}}</td>
                                    <td>{{board.create_time}}</td>
                                    <td>{{board.name}}</td>
                                </v-expansion-panel-header>
                            </tr>

                            <v-expansion-panel-content
                                    color="#F3E2CC"
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
                                            댓글
                                          </span>
                                </div>
                                <div
                                        v-for="(_reply,i) in board.reply"
                                        :key="i"
                                        class="reply_form"
                                >
                                    {{_reply.content}}
                                </div>
                            </v-expansion-panel-content>

                        </v-simple-table>
                    </v-expansion-panel>
                </v-expansion-panels>





            </v-tab-item>

            <v-tab-item>


                <v-simple-table class="card">
                    <thead>
                    <tr>
                        <th class="primary--text">
                            글 번호
                        </th>
                        <th class="primary--text">
                            제목
                        </th>
                        <th class="primary--text">
                            등록일
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
                                    <td>{{i}}</td>
                                    <td>{{board.title}}</td>
                                    <td>{{board.create_time}}</td>
                                    <td>{{board.name}}</td>
                                </v-expansion-panel-header>
                            </tr>

                            <v-expansion-panel-content
                                    color="#F3E2CC"
                            >
                                <div class="title" style="margin-top: 20px; margin-bottom: 30px">
                                          <span>
                                            Q&A
                                          </span>
                                </div>
                                <div style="text-align: center; height: 150px">
                                    {{board.content}}
                                </div>
                            </v-expansion-panel-content>

                        </v-simple-table>
                    </v-expansion-panel>
                </v-expansion-panels>



            </v-tab-item>
        </v-tabs>
    </v-card>
        <v-card class="message">
            <base-heading class="mb-5">
                Q&A 문의하기
            </base-heading>
            <v-text-field
                    color="info"
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
                    v-model="content"
                    solo
                    name="content"
                    label="Q&A 내용"
                    style="margin-right:10%; margin-left: 10% "
            ></v-textarea>
            <v-row>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-btn >Send</v-btn>
            </v-row>

        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Q_A.vue",
        data: () =>({
            tabs:null,
            game:null,
            games: [
                'ALL',
                'GTA5', 'Capcom','Apex','Skylines','삼국지','Counter-Strike'
                ,'Rust','Hood','Slormancer','Another Eden','Euro Truck'
                ,'FIFA','철권','Battlegrounds'
            ],
            content:null,
            treat:[
                {idx:1, title:"타이틀1", content:"내용1", create_time:"2021-04-22", writer:"윤득렬", reply:[{content : "asdfasdfasdf"},{content : "aqgqfbassdf"}]},
                {idx:2, title:"타이틀2", content:"내용2", create_time:"2021-04-30", writer:"윤득",},
                {idx:3, title:"타이틀3", content:"내용3", create_time:"2021-05-01", writer:"윤렬", },
                {idx:4, title:"타이틀4", content:"내용4", create_time:"2021-05-12", writer:"득렬", },
                {idx:5, title:"타이틀5", content:"내용5", create_time:"2021-08-31", writer:"윤렬", },
                {idx:6, title:"타이틀6", content:"내용6", create_time:"2021-01-01", writer:"렬", },
            ],
            untreat:[
                {idx:7, title:"타이틀3", content:"내용3", create_time:"2021-05-01", writer:"윤렬", },
                {idx:8, title:"타이틀4", content:"내용4", create_time:"2021-05-12", writer:"득렬", },
                {idx:9, title:"타이틀5", content:"내용5", create_time:"2021-08-31", writer:"윤렬", },
                {idx:10, title:"타이틀6", content:"내용6", create_time:"2021-01-01", writer:"렬", },
            ],
        }),
    }
</script>

<style scoped>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .table{
        grid-area : 10/2/100/40;
    }
    .message{
        grid-area: 10/45/100/90;
        background-color: #5c6bc0;
    }
</style>
