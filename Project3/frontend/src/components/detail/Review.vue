<template>
  <div style=" margin-top: 30px; margin-bottom: 5%; shape-rendering: crispEdges">
    <h1><b>Review Board</b></h1>
    <v-simple-table>
      <thead>
      <tr>
        <th class="black--text" style="width: 10%">
          글 번호
        </th>
        <th class="black--text" style="width: 40%">
          제목
        </th>
        <th class="black--text" style="width: 30%">
          등록일
        </th>
        <th class="black--text" style="width: 20%">
          작성자
        </th>
        <th style="width: 8px">
        </th>
      </tr>
      </thead>
    </v-simple-table>
    <v-expansion-panels>
      <v-expansion-panel
              v-for="(board, i) in boards"
              :key="i">
        <v-simple-table>

          <tr>
            <v-expansion-panel-header>
              <td style="width: 10%">{{i + 1}}</td>
              <td style="width: 40%">{{board.title}}</td>
              <td style="width: 30%">{{$moment(board.create_time).format('YYYY-MM-DD')}}</td>
              <td style="width: 20%">{{board.NAME}}</td>
            </v-expansion-panel-header>
          </tr>

          <v-expansion-panel-content
                  color="#ffffff"
          >
            <div class="title" style="margin-top: 20px; margin-bottom: 30px">
              <v-row>
                <span>
                Review
              </span>
                <v-spacer/>
                <v-rating
                        readonly
                        v-model="rating"
                        color="warning"
                        dense
                        half-increments
                ></v-rating>
              </v-row>
            </div>
            <div style="text-align: center; height: 150px">
              {{board.content}}
            </div>
          </v-expansion-panel-content>

        </v-simple-table>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    name: "review",

    props: {
      boards: {
        type: Object,
        default: () => ({}),
      },
    },

    data: () =>({
      rating:this.boards.star,
    }),
  }
</script>

<style>
  .base{
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(100, 1fr);
  }
  .board_area{
    grid-area : 0/30/100/70;
  }
  .title {
    border-top: 1px solid;
    border-bottom: 1px solid;
    padding: .5rem .75rem;
    font-size: 1.2rem;
  }
  .reply_form {
    position: relative;
    margin: -1px 0;
    padding: 11px 11px 10px 88px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    transition: background .5s;
  }
</style>
