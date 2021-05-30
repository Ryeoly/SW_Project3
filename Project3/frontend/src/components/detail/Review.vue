<template>
  <div>
    <b>Review Board</b>
    <v-simple-table>
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
        <th class="primary--text">
          작성자
        </th>
        <th style="width: 6px">
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
              <v-row>
                <span>
                Review
              </span>
                <v-spacer/>
                <v-rating
                        v-model="rating"
                        background-color="indigo lighten-3"
                        color="indigo"
                        size="large"
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
