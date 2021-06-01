<template>
<div class="base">
    <v-card ref="form" class="table">
      <v-toolbar
          flat
          color="background"
          dark
      >
        <v-toolbar-title>물품 등록</v-toolbar-title>
      </v-toolbar>
        <v-card-text>
            <v-text-field
                    ref="Product"
                    v-model="Product"
                    :rules="[() => !!Product || 'This field is required']"
                    label="제품명"
                    placeholder="insert product name"
                    required
            ></v-text-field>

            <v-row>
                <v-autocomplete
                        ref="genre"
                        v-model="genre"
                        :rules="[() => !!genre || 'This field is required']"
                        :items="genres"
                        label="게임장르"
                        placeholder="Select..."
                        required
                        style="margin-right: 10px; margin-left: 10px"
                ></v-autocomplete>
                <v-autocomplete
                        ref="total_num"
                        v-model="total_num"
                        :rules="[() => !!total_num || 'This field is required']"
                        :items="numbers"
                        label="등록할 개수"
                        placeholder="Select..."
                        required
                ></v-autocomplete>
                <v-autocomplete
                        ref="age"
                        v-model="age"
                        :rules="[() => !!age || 'This field is required']"
                        :items="ages"
                        label="권장 나이 ex) 12세 이상"
                        placeholder="Select..."
                        required
                        style="margin-right: 10px; margin-left: 10px"

                ></v-autocomplete>
            </v-row>

            <v-file-input
                    v-model="images"
                    show-size
                    counter
                    multiple
                    label="Images input"
            ></v-file-input>


            <v-file-input
                    v-model="videos"
                    show-size
                    counter
                    multiple
                    label="Videos input"
            ></v-file-input>

          <v-text-field
              ref="youtube link1"
              v-model="youtube1"
              :rules="[() => !!youtube1 || 'This field is required']"
              label="등록할 유튜브링크"
              placeholder="insert youtube link"
              required
          ></v-text-field>
          <v-text-field
              ref="youtube link2"
              v-model="youtube2"
              :rules="[() => !!youtube2 || 'This field is required']"
              label="등록할 유튜브링크"
              placeholder="insert youtube link"
              required
          ></v-text-field>
          <v-text-field
              ref="youtube link3"
              v-model="youtube3"
              :rules="[() => !!youtube3 || 'This field is required']"
              label="등록할 유튜브링크"
              placeholder="insert youtube link"
              required
          ></v-text-field>

            <v-row>
                <v-text-field
                        ref="price"
                        v-model="price"
                        :rules="[() => !!price || 'This field is required']"
                        label="제품 가격"
                        placeholder="product price"
                        style="margin-left: 20%; margin-right: 20%"
                        required
                ></v-text-field>
                <v-text-field
                        ref="sale"
                        v-model="sale"
                        :rules="[() => !!sale || 'This field is required']"
                        label="sale percent"
                        placeholder="sale percent insert"
                        required
                        style="margin-right: 20%"
                ></v-text-field>
            </v-row>

            <div>
                <div class="mb-6">출시일 등록: <code>{{ activePicker || 'null' }}</code></div>
                <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                                v-model="date"
                                label="출시일"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                            v-model="date"
                            :active-picker.sync="activePicker"
                            :max="new Date().toISOString().substr(0, 10)"
                            min="1950-01-01"
                            @change="save"
                    ></v-date-picker>
                </v-menu>
            </div>

            <v-textarea
                    solo
                    v-model="content1"
                    name="content1"
                    label="content1"
            ></v-textarea>
            <v-textarea
                    solo
                    v-model="content2"
                    name="content2"
                    label="content2"
            ></v-textarea>
            <v-textarea
                    solo
                    v-model="content3"
                    name="content3"
                    label="content3"
            ></v-textarea>



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
                    color="secondary"
                    text
                    @click="submit"
                    v-bind="attrs"
            >
              추가하기
            </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline grey lighten-2">
                성공 메세지
              </v-card-title>

              <v-card-text>
                상품이 성공적으로 추가되었습니다.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="secondary"
                    text
                    @click="confirm"
                >
                  확인
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>

        </v-card-text>

    </v-card>
</div>
</template>

<script>
    export default {
        name: "product_add.vue",

        data: () => ({
            dialog: false,
            images: [],
            videos: [],
            image1: '',
            image2: '',
            image3: '',
            video: '',
            content1: null,
            content2: null,
            content3: null,
            activePicker: null,
            menu: false,
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            genres: ['Action','Arcade','FPS','Role Play','RPG','Simulation','Video Game'],
            months: ['01','02','03','04','05','06','07','08','09','10','11','12'],
            numbers: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'],
            days: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
            ages:['0','7','12','18','19'],
            errorMessages: '',
            checkMessages:'',
            Product: null,
            sale:null,
            date: null,
            total_num: null,
            genre: null,
            price : null,
            age:null,
            youtube1:null,
            youtube2:null,
            youtube3:null,
            formHasErrors: false,

        }),

        computed: {
            form () {
                return {
                    sale:this.sale,
                    price:this.price,
                    age : this.age,
                    Product: this.Product,
                    date: this.date,
                    total_num: this.total_num,
                    genre: this.genre,
                }
            },
        },

        watch: {
            menu (val) {
                val && setTimeout(() => (this.activePicker = 'YEAR'))
            },
            name () {
                this.errorMessages = ''
                this.checkMessages=''
            },
        },

        methods: {
          test(){
            this.image1=this.images[0].name
            this.image2=this.images[1].name
            this.image3=this.images[2].name
            this.video=this.videos[0].name
          },
            save (date) {
                this.$refs.menu.save(date)
            },

            resetForm () {
                this.errorMessages = []
                this.formHasErrors = false

                Object.keys(this.form).forEach(f => {
                    this.$refs[f].reset()
                })
            },

            submit () {
              this.test()
              this.$http.post('/admin/add',{product:this.Product, discount:this.sale, release_day:this.date, remain_num:this.total_num, genre:this.genre, age:this.age, price:this.price,content1: this.content1,content2: this.content2, content3: this.content3, image1:this.image1, image2:this.image2,image3:this.image3,video1:this.video,youtube1:this.youtube1,youtube2:this.youtube2,youtube3:this.youtube3}).then((res)=>{
                if(res.data.success===false){
                  console.log("error")
                }
                else{
                  this.dialog=true
                }

              })

            },
          confirm(){
            this.dialog=false
            this.$router.go();
          }


        },
    }
</script>

<style scoped>
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .table{
      grid-area : 10/2/70/98;
    }
</style>
