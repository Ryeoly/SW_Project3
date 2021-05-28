<template>
    <div class="base">
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
                작성자
            </th>
            <th class="primary--text">
                등록일자
            </th>
            <th class="text-right primary--text">
                댓글수
            </th>
        </tr>
        </thead>
        <tbody>
            <tr
                    v-for="(board, i) in board_list"
                    :key="i"
                    >
                <td>{{board.idx}}</td>
                <td>{{board.title}}</td>
                <td>{{board.writer}}</td>
                <td>{{board.create_time}}</td>
                <td class="text-right">
                    {{board.reply_num}}
                </td>
            </tr>
        </tbody>
    </v-simple-table>
    </div>
</template>

<script>
    export default {
        name: "my_board",
        data: () => ({
            board_list: [
                {idx: 1, title: "내가 쓴글 1", writer: "윤득렬", create_time: "2021-04-01", reply_num: 10},
                {idx: 2, title: "내가 쓴글 2", writer: "윤득렬", create_time: "2021-05-15", reply_num: 1},
                {idx: 3, title: "내가 쓴글 3", writer: "윤득렬", create_time: "2021-06-30", reply_num: 15},
            ],
        })
    }
</script>

<style>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .card{
        grid-area : 10/2/100/80;
    }
</style>
