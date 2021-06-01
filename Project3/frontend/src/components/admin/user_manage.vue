<template>
    <div class="base">
        <v-simple-table class="card" v-model="user_list" id="virtual-scroll-table"
                        v-scroll:#virtual-scroll-table="onScroll">
            <thead>
            <tr>
                <th class="primary--text">
                    idx
                </th>
                <th class="primary--text">
                    이름
                </th>
                <th class="primary--text">
                    email
                </th>
                <th class="primary--text">
                    전화번호
                </th>
                <th>
                    생년월일
                </th>
                <th>
                    회원 삭제
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, i) in user_list"
                    :key="i"
                    style="height: 120px"
                    link>
                <td>{{ i }}</td>
                <td>{{item.name}}</td>
                <td>{{ item.email}}</td>
                <td>{{item.phone}}</td>
                <td>{{$moment(item.birth).format('YYYY-MM-DD')}}</td>
                <td><v-btn @click="delete_user(item.idx)">삭제</v-btn></td>
            </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        name: "user_manage.vue",
        created(){
            this.$http.get('/admin/user_list').then((res)=>{
                this.user_list=res.data.user_list
                console.log(this.user_list)
            })
        },
        data: () => ({
            user_list:[],
        }),
        methods: {
            delete_user(user_idx) {
                this.$http.post('/admin/user_delete', {user_idx: user_idx}).then((res) => {
                    this.user_list=res.data.user_list
                })
            }
        },
        onScroll(e) {
            // debounce if scrolling fast
            this.timeout && clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                const { scrollTop } = e.target;
                const rows = Math.ceil(scrollTop / this.rowHeight);

                this.start = rows + this.perPage > this.desserts.length ?
                    this.desserts.length - this.perPage: rows;

                this.$nextTick(() => {
                    e.target.scrollTop = scrollTop;
                });
            }, 20);
        }
    }
</script>

<style>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .card{
        grid-area : 2/2/70/98;
    }
</style>
