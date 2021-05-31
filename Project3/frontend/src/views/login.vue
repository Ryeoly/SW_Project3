<template>
    <div class="base">
        <div class="login_form">
        <v-card class="elevation-12">
            <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form>
                    <v-text-field
                            prepend-icon="mdi-identifier"
                            v-model="email"
                            label="Email을 입력해주세요"
                            type="text"
                    ></v-text-field>
                    <v-text-field
                            prepend-icon="mdi-lock"
                            v-model="password"
                            label="패스워드를 입력해주세요"
                            type="password"
                    ></v-text-field>
                  <span v-if="this.fail"
                  color="red">Login Failed!</span>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <div>
                    <a style="margin-right: 3px;margin-left: 10px">아이디</a>
                    <span class="bar" aria-hidden="true">|</span>
                    <a style="margin-left: 3px">비밀번호</a>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="primary" to="/sign_up">회원가입</v-btn>
                <v-btn color="primary" @click="click">Login</v-btn>
            </v-card-actions>
        </v-card>
        </div>
    </div>
</template>


<script>
  import {mapMutations} from 'vuex'
    export default {
        name: "login.vue",
        props: {
            source: String,
        },

      data:()=> ({
        fail : false,
        email : null,
        password : null,
      }),

        methods: {
          ...mapMutations(['saveuser']),
          ...mapMutations(['saveidx']),
          ...mapMutations(['saveemail']),
          click(){
            this.$http.post('/login',{email: this.email, pwd: this.password}).then((res)=>{
              if(res.data.success===false){
                console.log("error")
                this.fail = true
              }
              else{
                this.saveuser(res.data.information[0])
                this.saveidx(res.data.information[0].useridx)
                this.saveemail(this.email)
                this.$router.push({path:'/mypage/my_info'})
              }

            })
          },
        },
    };
</script>

<style scoped>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .login_form{
        grid-area : 10/30/90/70;
    }
    .bar {
        display: inline-block;
        width: 2px;
        height: 25px;
        text-indent: -999em;
        background: #e4e4e5;
        vertical-align: bottom;
    }
</style>
