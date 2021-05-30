<template>
  <div style="margin-top: 30px">
    <b>Q&A Board</b>
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
              <td>{{board.idx}}</td>
              <td>{{board.title}}</td>
              <td>{{board.createdate}}</td>
              <td>{{board.writer}}</td>
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
            <div style="margin-top: 20px; width: 40%; margin-left: 30%">
              <v-textarea
                      color="#000000"
                      label="Message"
                      solo
                      background-color="#DDDDDD"
                      flat
                      append-icon="mdi-send"
              />
            </div>
          </v-expansion-panel-content>

        </v-simple-table>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "qna",
  data: () =>({
    boards:[
      {idx:1, title: "제목1", createdate:"2021-04-02", writer:"윤득렬", content:"  Alice was beginning to get very tired of sitting by her sister\n" +
                "on the bank, and of having nothing to do:  once or twice she had\n" +
                "peeped into the book her sister was reading, but it had no\n" +
                "pictures or conversations in it, `and what is the use of a book,'\n" +
                "thought Alice `without pictures or conversation?'\n" +
                "\n" +
                "  So she was considering in her own mind (as well as she could,\n" +
                "for the hot day made her feel very sleepy and stupid), whether\n" +
                "the pleasure of making a daisy-chain would be worth the trouble\n" +
                "of getting up and picking the daisies, when suddenly a White\n" +
                "Rabbit with pink eyes ran close by her.\n" +
                "\n" +
                "  There was nothing so VERY remarkable in that; nor did Alice\n" +
                "think it so VERY much out of the way to hear the Rabbit say to\n" +
                "itself, `Oh dear!  Oh dear!  I shall be late!'  (when she thought\n" +
                "it over afterwards, it occurred to her that she ought to have\n" +
                "wondered at this, but at the time it all seemed quite natural);\n" +
                "but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT-\n" +
                "POCKET, and looked at it, and then hurried on, Alice started to\n" +
                "her feet, for it flashed across her mind that she had never\n" +
                "before seen a rabbit with either a waistcoat-pocket, or a watch to\n" +
                "take out of it, and burning with curiosity, she ran across the\n" +
                "field after it, and fortunately was just in time to see it pop\n" +
                "down a large rabbit-hole under the hedge.", reply:[{writer:"관리자", content:"wow"},{writer:"윤득렬", content:"wow2"}]},
      {idx:2, title: "제목2", createdate:"2021-04-03", writer:"고건영",content:"  Alice was beginning to get very tired of sitting by her sister\n" +
                "on the bank, and of having nothing to do:  once or twice she had\n" +
                "peeped into the book her sister was reading, but it had no\n" +
                "pictures or conversations in it, `and what is the use of a book,'\n" +
                "thought Alice `without pictures or conversation?'\n" +
                "\n" +
                "  So she was considering in her own mind (as well as she could,\n" +
                "for the hot day made her feel very sleepy and stupid), whether\n" +
                "the pleasure of making a daisy-chain would be worth the trouble\n" +
                "of getting up and picking the daisies, when suddenly a White\n" +
                "Rabbit with pink eyes ran close by her.\n" +
                "\n" +
                "  There was nothing so VERY remarkable in that; nor did Alice\n" +
                "think it so VERY much out of the way to hear the Rabbit say to\n" +
                "itself, `Oh dear!  Oh dear!  I shall be late!'  (when she thought\n" +
                "it over afterwards, it occurred to her that she ought to have\n" +
                "wondered at this, but at the time it all seemed quite natural);\n" +
                "but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT-\n" +
                "POCKET, and looked at it, and then hurried on, Alice started to\n" +
                "her feet, for it flashed across her mind that she had never\n" +
                "before seen a rabbit with either a waistcoat-pocket, or a watch to\n" +
                "take out of it, and burning with curiosity, she ran across the\n" +
                "field after it, and fortunately was just in time to see it pop\n" +
                "down a large rabbit-hole under the hedge."},
      {idx:3, title: "제목3", createdate:"2021-04-05", writer:"조현우", content:
                "  So she was considering in her own mind (as well as she could,\n" +
                "for the hot day made her feel very sleepy and stupid), whether\n" +
                "the pleasure of making a daisy-chain would be worth the trouble\n" +
                "of getting up and picking the daisies, when suddenly a White\n" +
                "Rabbit with pink eyes ran close by her.\n" +
                "\n" +
                "  There was nothing so VERY remarkable in that; nor did Alice\n" +
                "think it so VERY much out of the way to hear the Rabbit say to\n" +
                "itself, `Oh dear!  Oh dear!  I shall be late!'  (when she thought\n" +
                "it over afterwards, it occurred to her that she ought to have\n" +
                "wondered at this, but at the time it all seemed quite natural);\n" +
                "but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT-\n" +
                "POCKET, and looked at it, and then hurried on, Alice started to\n" +
                "her feet, for it flashed across her mind that she had never\n" +
                "before seen a rabbit with either a waistcoat-pocket, or a watch to\n" +
                "take out of it, and burning with curiosity, she ran across the\n" +
                "field after it, and fortunately was just in time to see it pop\n" +
                "down a large rabbit-hole under the hedge."},
      {idx:4, title: "제목4", createdate:"2021-04-02", writer:"진우빈", content:"  Alice was beginning to get very tired of sitting by her sister\n" +
                "on the bank, and of having nothing to do:  once or twice she had\n" +
                "peeped into the book her sister was reading, but it had no\n" +
                "pictures or conversations in it, `and what is the use of a book,'\n" +
                "thought Alice `without pictures or conversation?'\n" +

                "  There was nothing so VERY remarkable in that; nor did Alice\n" +
                "think it so VERY much out of the way to hear the Rabbit say to\n" +
                "itself, `Oh dear!  Oh dear!  I shall be late!'  (when she thought\n" +
                "it over afterwards, it occurred to her that she ought to have\n" +
                "wondered at this, but at the time it all seemed quite natural);\n" +
                "but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT-\n" +
                "POCKET, and looked at it, and then hurried on, Alice started to\n" +
                "her feet, for it flashed across her mind that she had never\n" +
                "before seen a rabbit with either a waistcoat-pocket, or a watch to\n" +
                "take out of it, and burning with curiosity, she ran across the\n" +
                "field after it, and fortunately was just in time to see it pop\n" +
                "down a large rabbit-hole under the hedge."},
      {idx:5, title: "제목5", createdate:"2021-04-09", writer:"윤득렬",content:"  11111111111"}
    ],
    treat:[
      {title:"10", content:"10"},
      {title:"99", content:"99"}
    ],
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
