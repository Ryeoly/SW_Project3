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
                  <v-dialog
                      v-model="dialog"
                      width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    @click="send_auth"
                    v-bind="attrs"
                    v-on="on">
                      인증하기
                    </v-btn>
                    </template>
                  <v-card>
                    <v-card-title class="headline grey lighten-2">
                      확인 메세지
                    </v-card-title>

                    <v-card-text>
                      해당 이메일로 인증번호를 발송했습니다.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                          color="primary"
                          text
                          @click="dialog=false"
                      >
                        확인
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  </v-dialog>
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
                        type="password"
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
                  type="password"
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

              <v-autocomplete
                  ref="address"
                  v-model="address"
                  :rules="[() => !!address || 'This field is required']"
                  :items="countries"
                  label="국가"
                  placeholder="Select..."
                  required
              ></v-autocomplete>

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
              <v-autocomplete
                  ref="like_genre3"
                  v-model="like_genre3"
                  :rules="[() => !!like_genre3 || 'This field is required']"
                  :items="genres"
                  label="관심있는 게임장르3"
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
              <v-dialog
                  v-model="dialog2"
                  width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                        color="primary"
                        text
                        @click="submit"
                        v-bind="attrs"


                >
                    가입하기
                </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2">
                    회원가입을 완료되었습니다!
                  </v-card-title>

                  <v-card-text>
                    로그인페이지에서 로그인해주세요.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="confirm"
                        href="/login"
                    >
                      확인
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

            </v-card-actions>
        </v-card>
    </div>


</template>

<script>
    export default {
        name: "sign_up.vue",

        data: () => ({
            dialog: false,
            dialog2: false,
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
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
            like_genre3: null,
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
                    like_genre2: this.like_genre2,
                    like_genre3: this.like_genre3
                }
            },
        },

        watch: {
            name () {
                this.errorMessages = ''
                this.authMessages=''
                this.checkMessages=''

            },
        },

        methods: {
            pwdcheck(){
              if(this.pwd==this.pwd_check && !!this.pwd){
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

            if(this.pwd==this.pwd_check && this.truekey==this.auth_num){

              this.$http.post('/sign_up',{email:this.email, name:this.name, pwd:this.pwd, year:this.year, month:this.month, day:this.day, phone:this.phone, address:this.address, like_genre1:this.like_genre1, like_genre2:this.like_genre2, like_genre3:this.like_genre3}).then((res)=>{
                if(res.data.success===false){
                  console.log("error")
                }
                else{
                  this.dialog2=true
                }

              })
            }


          },
            send_auth (){
              this.$http.post('/sign_up/sendauth',{email: this.email}).then((res)=>{
                if(res.data.success===false){
                  console.log(res);
                }
                console.log(res.data.truekey);
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
          },
          confirm(){
              this.dialog2=false
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
