<template>
<div class="base" style="background-color: #9fa8da">
    <v-card ref="form" class="table">
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
                        :items="days"
                        label="등록할 개수"
                        placeholder="Select..."
                        required
                ></v-autocomplete>
                <v-autocomplete
                        ref="age"
                        v-model="age"
                        :rules="[() => !!age || 'This field is required']"
                        :items="ages"
                        label="권장 나이+"
                        placeholder="Select..."
                        required
                        style="margin-right: 10px; margin-left: 10px"

                ></v-autocomplete>
            </v-row>

            <v-file-input
                    show-size
                    counter
                    multiple
                    label="Images input"
            ></v-file-input>

            <v-file-input
                    show-size
                    counter
                    multiple
                    label="Videos input"
            ></v-file-input>

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
                    name="content1"
                    label="content1"
            ></v-textarea>
            <v-textarea
                    solo
                    name="content2"
                    label="content2"
            ></v-textarea>
            <v-textarea
                    solo
                    name="content3"
                    label="content3"
            ></v-textarea>



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
        name: "product_add.vue",
        data: () => ({
            activePicker: null,
            date: null,
            menu: false,
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            genres: ['Action','Arcade','FPS','Role Play','RPG','Simulation','Video Game'],
            months: ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
            ages:['ALL', '7','12+','18+'],
            errorMessages: '',
            authMessages:'',
            checkMessages:'',
            Product: null,
            auth_num: null,
            sale:null,
            name: null,
            address: null,
            pwd: null,
            pwd_check: null,
            year: null,
            month: null,
            total_num: null,
            phone: null,
            genre: null,
            price : null,
            age:null,
            like_genre2: null,
            formHasErrors: false,
            truekey: null
        }),

        computed: {
            form () {
                return {
                    sale:this.sale,
                    price:this.price,
                    age : this.age,
                    Product: this.Product,
                    auth_num: this.auth_num,
                    name: this.name,
                    address: this.address,
                    pwd: this.pwd,
                    pwd_check: this.pwd_check,
                    year: this.year,
                    month: this.month,
                    total_num: this.total_num,
                    phone: this.phone,
                    genre: this.genre,
                    like_genre2: this.like_genre2
                }
            },
        },

        watch: {
            menu (val) {
                val && setTimeout(() => (this.activePicker = 'YEAR'))
            },
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
                this.formHasErrors = false

                Object.keys(this.form).forEach(f => {
                    if (!this.form[f]) this.formHasErrors = true

                    this.$refs[f].validate(true)
                })

                if(this.pwd==this.pwd_check && this.truekey==this.auth_num){
                    this.$http.post('/sign_up',{email:this.email, name:this.name, pwd:this.pwd, year:this.year, month:this.month, day:this.day, phone:this.phone, address:this.address, like_genre1:this.like_genre1, like_genre2:this.like_genre2}).then((res)=>{
                        if(res.data.success===false){
                            console.log("error")
                        }
                        else{
                            location.href="/login"
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
        grid-area : 5/10/90/90;
    }
</style>
