<template>
  <div class="base">
    <v-card ref="form" class="card22">
      <v-card-text>

        <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            label="이름"
            style="margin-left: 3%; margin-right: 85%; margin-top: 20px"
            required
        ></v-text-field>

        <v-row style="margin-top: 20px">

          <v-text-field
              ref="year"
              v-model="year"
              :rules="[
                () => !!year || 'This field is required',
                //() => !!year && year.length <= 4 || 'Address must be less than 4 characters'
              ]"
              label="출생년도"
              placeholder="1997"
              counter="4"
              style="margin-right: 5%; margin-left: 3%; text-align: right"
              required
          ></v-text-field>
          <v-autocomplete
              ref="month"
              v-model="month"
              :rules="[() => !!month || 'This field is required']"
              :items="months"
              label="태어난 달"
              placeholder="Select..."
              style="text-align: right"
              required
          ></v-autocomplete>
          <v-autocomplete
              ref="day"
              v-model="day"
              :rules="[() => !!day || 'This field is required']"
              :items="days"
              label="출생 일"
              placeholder="Select..."
              style="margin-right: 3%; margin-left: 5%; text-align: right"
              required
          ></v-autocomplete>

        </v-row>

        <v-row style="margin-top: 20px">

          <v-autocomplete
              ref="address"
              v-model="address"
              :rules="[() => !!address || 'This field is required']"
              :items="countries"
              label="국적"
              style="margin-left: 3%; margin-right: 10%"
              placeholder="Select..."
              required
          ></v-autocomplete>

          <v-text-field
              ref="phone"
              v-model="phone"
              :rules="[() => !!phone || 'This field is required']"
              label="전화 번호"
              placeholder="-빼고 출력"
              style="margin-left: 10%; margin-right: 3%"
              required
          ></v-text-field>
        </v-row>

        <v-row style="margin-top: 20px">
          <v-autocomplete
              ref="like_genre1"
              v-model="like_genre1"
              :rules="[() => !!like_genre1 || 'This field is required']"
              :items="genres"
              label="관심있는 게임장르1"
              style="margin-right: 5%; margin-left: 3%;"
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
              style="margin-right: 3%; margin-left: 5%;"
              required
          ></v-autocomplete>
        </v-row>
      </v-card-text>
      <v-divider class="mt-12"></v-divider>
      <v-card-actions>

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
            v-model="dialog"
            width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                text
                @click="submit"
                v-bind="attrs"

            >
              수정하기
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline grey lighten-2">
              성공메세지
            </v-card-title>

            <v-card-text>
              정보가 수정되었습니다.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  text
                  @click="confirm"

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
  import {mapMutations} from 'vuex'

export default {
  name: "user_info.vue",

  created(){
        this.name= this.$store.state.userdata.name,
        this.address= this.$store.state.userdata.address,
        this.year= this.$store.state.userdata.nowyear,
        this.month= this.$store.state.userdata.nowmonth.toString(),
        this.day= this.$store.state.userdata.nowday.toString(),
        this.phone= this.$store.state.userdata.phone,
        this.like_genre1= this.$store.state.userdata.like_genre1,
        this.like_genre2= this.$store.state.userdata.like_genre2,
        this.like_genre3= this.$store.state.userdata.like_genre3
  },

  data: () => ({
    dialog: false,
    countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
    genres: ['Action','Arcade','FPS','Role Play','RPG','Simulation','Video Game'],
    months: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    days: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    errorMessages: '',
    name: "",
    address: "",
    year:"",
    month:"",
    day:"",
    phone: "",
    like_genre1: "",
    like_genre2:"",
    like_genre3:"",
    formHasErrors: false,
  }),

  computed: {
    // name(){
    //   return this.$store.state.userdata.name
    // },
    // address(){
    //   return this.$store.state.userdata.address
    // },
    // year(){
    //   return this.$store.state.userdata.nowyear
    // },
    // month(){
    //   return this.$store.state.userdata.nowmonth.toString()
    // },
    // day(){
    //   return this.$store.state.userdata.nowday.toString()
    // },
    // phone(){
    //   return this.$store.state.userdata.phone
    // },
    // like_genre1(){
    //   return this.$store.state.userdata.like_genre1
    // },
    // like_genre2(){
    //   return this.$store.state.userdata.like_genre2
    // },
    // like_genre3(){
    //   return this.$store.state.userdata.like_genre3
    // },
    form () {
      return {
        name: this.name,
        address: this.address,
        year: this.year,
        month: this.month,
        day: this.day,
        phone: this.phone,
        like_genre1: this.like_genre1,
        like_genre2: this.like_genre2,
        like_genre3: this.like_genre3
      }
    },
    userdata () {
      return {
        name: this.name,
        address: this.address,
        nowyear: this.year,
        nowmonth: this.month,
        nowday: this.day,
        phone: this.phone,
        like_genre1: this.like_genre1,
        like_genre2: this.like_genre2,
        like_genre3: this.like_genre3
      }
    }

  },

  watch: {
    name () {
      this.errorMessages = ''
      this.checkMessages=''

    },
  },

  methods: {
    ...mapMutations(['saveuser']),
    ...mapMutations(['saveidx']),
    ...mapMutations(['saveemail']),
    ...mapMutations(['saveuser']),

    resetForm () {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    submit () {
      this.u_idx=this.$store.state.userdata.useridx
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })

      this.$http.post('/mypage/my_info/2',{user_idx: this.u_idx,name:this.name, year:this.year, month:this.month, day:this.day, phone:this.phone, address:this.address, like_genre1:this.like_genre1, like_genre2:this.like_genre2, like_genre3:this.like_genre3}).then((res)=>{
        if(res.data.success===false){
          console.log("error")
        }
        else{
          this.saveuser(this.userdata)
          this.dialog=true
        }

      })



    },

    confirm(){
      this.dialog=false
      this.$router.push({path:'/mypage/my_info'})
    }


  },
};
</script>

<style>
.base{
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
}
.card22{
  grid-area : 10/10/90/90;
}
</style>
