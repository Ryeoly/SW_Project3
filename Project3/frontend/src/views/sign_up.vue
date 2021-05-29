<template>
    <div class="base">
        <v-card ref="form" class="signup_form">
            <v-card-text>
                <v-row>
                    <v-text-field
                            ref="email"
                            v-model="email"
                            :rules="[() => !!email || 'This field is required']"

                            label="E-mail"
                            placeholder="examplpe@example.com"
                            required
                    ></v-text-field>
                    <v-btn
                    @click="send_auth">
                      인증하기
                    </v-btn>
                </v-row>
                <v-row>
                    <v-text-field
                            ref="auth_num"
                            v-model="auth_num"
                            :rules="[() => !!auth_num || 'This field is required']"
                            :error-messages="errorMessages"
                            :success-messages="authMessages"
                            label="인증 번호"
                            placeholder="number"
                            required
                    ></v-text-field>
                    <v-btn
                        @click="comparekey"
                    >인증 확인</v-btn>
                </v-row>

              <v-text-field
                  ref="name"
                  v-model="name"
                  :rules="[() => !!name || 'This field is required']"
                  label="이름"
                  required
              ></v-text-field>
                <v-text-field
                        ref="pwd"
                        v-model="pwd"
                        :rules="[() => !!pwd || 'This field is required']"
                        label="패스워드"
                        required
                ></v-text-field>
              <v-text-field
                  ref="pwd_check"
                  v-model="pwd_check"
                  :rules="[() => !!pwd_check || 'This field is required',
                            () => pwd ==pwd_check || '패스워드가 일치하지않습니다.',pwdcheck
                          ]"
                  :success-messages="checkMessages"
                  label="패스워드확인"
                  required
              ></v-text-field>
              <v-row>
                <v-text-field
                    ref="year"
                    v-model="year"
                    :rules="[
                () => !!year || 'This field is required',
                () => !!year && year.length <= 4 || 'Address must be less than 4 characters'
              ]"
                    label="태어난 년도"
                    placeholder="1997"
                    counter="4"
                    required
                ></v-text-field>
                <v-autocomplete
                    ref="month"
                    v-model="month"
                    :rules="[() => !!month || 'This field is required']"
                    :items="months"
                    label="태어난 달"
                    placeholder="Select..."
                    required
                ></v-autocomplete>
                <v-autocomplete
                    ref="day"
                    v-model="day"
                    :rules="[() => !!day || 'This field is required']"
                    :items="days"
                    label="태어난 일"
                    placeholder="Select..."
                    required
                ></v-autocomplete>
              </v-row>

              <v-text-field
                  ref="address"
                  v-model="address"
                  :rules="[() => !!address || 'This field is required']"
                  label="주소"
                  placeholder="시만 입력 ex) 안양시"
                  required
              ></v-text-field>
              <v-text-field
                  ref="phone"
                  v-model="phone"
                  :rules="[() => !!phone || 'This field is required']"
                  label="휴대폰 번호"
                  placeholder="-빼고 입력"
                  required
              ></v-text-field>

                <v-autocomplete
                        ref="like_genre1"
                        v-model="like_genre1"
                        :rules="[() => !!like_genre1 || 'This field is required']"
                        :items="genres"
                        label="관심있는 게임장르1"
                        placeholder="Select..."
                        required
                ></v-autocomplete>
              <v-autocomplete
                  ref="like_genre2"
                  v-model="like_genre2"
                  :rules="[() => !!like_genre2 || 'This field is required']"
                  :items="genres"
                  label="관심있는 게임장르2"
                  placeholder="Select..."
                  required
              ></v-autocomplete>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
                <v-btn text href="/login">
                    돌아가기
                </v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                    <v-tooltip
                            v-if="formHasErrors"
                            left
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    icon
                                    class="my-0"
                                    v-bind="attrs"
                                    @click="resetForm"
                                    v-on="on"
                            >
                                <v-icon>mdi-refresh</v-icon>
                            </v-btn>
                        </template>
                        <span>Refresh form</span>
                    </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn
                        color="primary"
                        text
                        @click="submit"
                >
                    가입하기
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>


</template>

<script>
    export default {
        name: "sign_up.vue",

        data: () => ({
            genres: ['Action','Arcade','FPS','Role Play','RPG','Simulation','Video Game'],
            months: ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
            errorMessages: '',
            authMessages:'',
            checkMessages:'',
            email: null,
            auth_num: null,
            name: null,
            address: null,
            pwd: null,
            pwd_check: null,
            year: null,
            month: null,
            day: null,
            phone: null,
            like_genre1: null,
            like_genre2: null,
            formHasErrors: false,
            truekey: null
        }),

        computed: {
            form () {
                return {
                    email: this.email,
                    auth_num: this.auth_num,
                    name: this.name,
                    address: this.address,
                    pwd: this.pwd,
                    pwd_check: this.pwd_check,
                    year: this.year,
                    month: this.month,
                    day: this.day,
                    phone: this.phone,
                    like_genre1: this.like_genre1,
                    like_genre2: this.like_genre2
                }
            },
        },

        watch: {
            name () {
                this.errorMessages = ''
                this.authMessages=''
            },
        },

        methods: {
            pwdcheck(){
              if(this.pwd==this.pwd_check){
                  this.checkMessages='패스워드가 일치합니다.'
              }
              else{
                this.checkMessages=''
              }


            },

            resetForm () {
                this.errorMessages = []
                this.formHasErrors = false

                Object.keys(this.form).forEach(f => {
                    this.$refs[f].reset()
                })
            },
          submit () {
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
              if (!this.form[f]) this.formHasErrors = true

              this.$refs[f].validate(true)
            })
          },
            send_auth (){
              this.$http.post('/sign_up/sendauth',{email: this.email}).then((res)=>{
                if(res.data.success===false){
                  console.log(res);
                }
                this.truekey=res.data.truekey;
              })
            },
          comparekey(){
              if(this.auth_num==this.truekey){
                this.authMessages='인증 성공'
                this.errorMessages=''
                console.log('인증 성공');
              }
              else{
                this.errorMessages='인증번호가 일치하지 않습니다.'
                this.authMessages=''
                console.log('인증 실패');
              }
          }
        },
    };
</script>

<style scoped>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .signup_form{
        grid-area : 10/30/90/70;
    }
</style>
