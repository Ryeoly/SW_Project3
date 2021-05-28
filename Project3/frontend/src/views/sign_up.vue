<template>
    <div class="base">
        <v-card ref="form" class="signup_form">
            <v-card-text>
                <v-row>
                    <v-text-field
                            ref="name"
                            v-model="name"
                            :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages"
                            label="Full Name"
                            placeholder="John Doe"
                            required
                    ></v-text-field>
                    <v-btn>인증하기</v-btn>
                </v-row>
                <v-row>
                    <v-text-field
                            ref="email_num"
                            v-model="email_num"
                            :rules="[() => !!email_num || 'This field is required']"
                            :error-messages="errorMessages"
                            label="인증 번호"
                            placeholder="number"
                            required
                    ></v-text-field>
                    <v-btn>인증 확인</v-btn>
                </v-row>
                <v-text-field
                        ref="address"
                        v-model="address"
                        :rules="[
              () => !!address || 'This field is required',
              () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
              addressCheck
            ]"
                        label="Address Line"
                        placeholder="Snowy Rock Pl"
                        counter="25"
                        required
                ></v-text-field>
                <v-text-field
                        ref="city"
                        v-model="city"
                        :rules="[() => !!city || 'This field is required', addressCheck]"
                        label="City"
                        placeholder="El Paso"
                        required
                ></v-text-field>
                <v-text-field
                        ref="state"
                        v-model="state"
                        :rules="[() => !!state || 'This field is required']"
                        label="State/Province/Region"
                        required
                        placeholder="TX"
                ></v-text-field>
                <v-text-field
                        ref="zip"
                        v-model="zip"
                        :rules="[() => !!zip || 'This field is required']"
                        label="ZIP / Postal Code"
                        required
                        placeholder="79938"
                ></v-text-field>
                <v-autocomplete
                        ref="country"
                        v-model="country"
                        :rules="[() => !!country || 'This field is required']"
                        :items="countries"
                        label="Country"
                        placeholder="Select..."
                        required
                ></v-autocomplete>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
                <v-btn text href="/home">
                    Cancel
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
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>

<!--    <div class="base">-->
<!--        <v-card class="signup_form">-->
<!--            <v-simple-table>-->
<!--                <td style="text-align: center">-->
<!--                    회원 가입-->
<!--                </td>-->
<!--                <tr>-->
<!--                    <td>-->
<!--                        Email-->
<!--                    </td>-->
<!--                    <td>-->
<!--                        <v-text-field-->
<!--                                :rules="rules"-->
<!--                                label="email"-->
<!--                                ></v-text-field>-->
<!--                    </td>-->
<!--                    <td>-->
<!--                        <v-btn>-->
<!--                            이메일 인증-->
<!--                        </v-btn>-->
<!--                    </td>-->
<!--                </tr>-->

<!--                <tr>-->
<!--                    <td>-->
<!--                        Password-->
<!--                    </td>-->
<!--                    <td>-->
<!--                        <v-text-field-->
<!--                                :rules="rules"-->
<!--                                label="pwd"-->
<!--                        ></v-text-field>-->
<!--                    </td>-->
<!--                </tr>-->

<!--                <tr>-->
<!--                    <td>-->
<!--                        Confirm Password-->
<!--                    </td>-->
<!--                    <td>-->
<!--                        <v-text-field-->
<!--                                :rules="rules"-->
<!--                                label="confirm pwd"-->
<!--                        ></v-text-field>-->
<!--                    </td>-->
<!--                </tr>-->

<!--                <tr>-->
<!--                    <td>-->
<!--                        name-->
<!--                    </td>-->
<!--                    <td>-->
<!--                        <v-text-field-->
<!--                                :rules="rules"-->
<!--                                label="name"-->
<!--                        ></v-text-field>-->
<!--                    </td>-->
<!--                </tr>-->

<!--                <tr>-->
<!--                    <td>-->
<!--                        age-->
<!--                    </td>-->
<!--                    <td>-->
<!--                        <v-select-->
<!--                                v-model="select"-->
<!--                                :items="items"-->
<!--                                :error-messages="errors"-->
<!--                                label="Select"-->
<!--                                data-vv-name="select"-->
<!--                                required-->
<!--                        ></v-select>-->
<!--                    </td>-->
<!--                </tr>-->

<!--                <v-card-actions>-->
<!--                    <v-btn text>-->
<!--                        Cancel-->
<!--                    </v-btn>-->
<!--                    <v-spacer></v-spacer>-->
<!--                    <v-slide-x-reverse-transition>-->
<!--                        <v-tooltip-->
<!--                                v-if="formHasErrors"-->
<!--                                left-->
<!--                        >-->
<!--                            <template v-slot:activator="{ on, attrs }">-->
<!--                                <v-btn-->
<!--                                        icon-->
<!--                                        class="my-0"-->
<!--                                        v-bind="attrs"-->
<!--                                        @click="resetForm"-->
<!--                                        v-on="on"-->
<!--                                >-->
<!--                                    <v-icon>mdi-refresh</v-icon>-->
<!--                                </v-btn>-->
<!--                            </template>-->
<!--                            <span>Refresh form</span>-->
<!--                        </v-tooltip>-->
<!--                    </v-slide-x-reverse-transition>-->
<!--                    <v-btn-->
<!--                            color="primary"-->
<!--                            text-->
<!--                            @click="submit"-->
<!--                    >-->
<!--                        Submit-->
<!--                    </v-btn>-->
<!--                </v-card-actions>-->

<!--            </v-simple-table>-->

<!--        </v-card>-->
<!--    </div>-->
</template>

<script>
    export default {
        name: "sign_up.vue",
        // data() {
        //     return {
        //         email: '',
        //         name: '',
        //         password: '',
        //         passwordConfirm: '',
        //         position: '',
        //         teamName: '',
        //         select: null,
        //         items: [
        //             'Item 1',
        //             'Item 2',
        //             'Item 3',
        //             'Item 4',
        //         ],
        //     };
        // },
        // methods: {
        //     submitForm() {
        //         console.log('dd');
        //     },
        // },
        data: () => ({
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            errorMessages: '',
            name: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            formHasErrors: false,
            email_num: null
        }),

        computed: {
            form () {
                return {
                    name: this.name,
                    address: this.address,
                    city: this.city,
                    state: this.state,
                    zip: this.zip,
                    country: this.country,
                    email_num: this.email_num
                }
            },
        },

        watch: {
            name () {
                this.errorMessages = ''
            },
        },

        methods: {
            addressCheck () {
                this.errorMessages = this.address && !this.name
                    ? `Hey! I'm required`
                    : ''

                return true
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
