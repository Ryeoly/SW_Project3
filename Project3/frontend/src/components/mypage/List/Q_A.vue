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
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dakota Rice</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Minverva Hooper</td>
                    </tr>
                    </tbody>
                </v-simple-table>
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
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>5</td>
                        <td>Doris Greene</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Mason Porter</td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </v-tab-item>
        </v-tabs>
    </v-card>
        <v-card class="message">
            <v-col
                    class="pa-5"
                    cols="12"
                    md="6"
            >
                <base-heading class="mb-5">
                    Q&A 문의하기
                </base-heading>
                <v-sheet
                        color="transparent"
                        max-width="600"
                >
                    <v-text-field
                            color="info"
                            label="Name"
                            solo
                            flat
                    />
                    <v-text-field
                            color="info"
                            label="Email"
                            solo
                            flat
                    />

                    <v-text-field
                            color="info"
                            label="Subject"
                            solo
                            flat
                    />
                    <v-textarea
                            color="info"
                            label="Message"
                            solo
                            flat
                    />
                    <base-btn>Send</base-btn>
                </v-sheet>
            </v-col>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Q_A.vue",
        data: () =>({
            tabs:null,
            table:[
                {title:"1", content:"11"},
                {title:"2", content:"22"},
                {title:"3", content:"33"},
                {title:"4", content:"44"},
                {title:"5", content:"55"},
                {title:"6", content:"66"},
            ]
            ,
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
