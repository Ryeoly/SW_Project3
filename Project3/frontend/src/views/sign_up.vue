<template>
    <div class="base">
        <v-card class="signup_form">
            <v-simple-table>
                <td style="text-align: center">
                    회원 가입
                </td>
                <tr>
                    <td>
                        Email
                    </td>
                    <td>
                        <v-text-field
                                :rules="rules"
                                label="email"
                                ></v-text-field>
                    </td>
                    <td>
                        <v-btn>
                            이메일 인증
                        </v-btn>
                    </td>
                </tr>

                <tr>
                    <td>
                        Password
                    </td>
                    <td>
                        <v-text-field
                                :rules="rules"
                                label="pwd"
                        ></v-text-field>
                    </td>
                </tr>

                <tr>
                    <td>
                        Confirm Password
                    </td>
                    <td>
                        <v-text-field
                                :rules="rules"
                                label="confirm pwd"
                        ></v-text-field>
                    </td>
                </tr>

                <tr>
                    <td>
                        name
                    </td>
                    <td>
                        <v-text-field
                                :rules="rules"
                                label="name"
                        ></v-text-field>
                    </td>
                </tr>

                <tr>
                    <td>
                        age
                    </td>
                    <td>
                        <v-select
                                v-model="select"
                                :items="items"
                                :error-messages="errors"
                                label="Select"
                                data-vv-name="select"
                                required
                        ></v-select>
                    </td>
                </tr>

                <v-card-actions>
                    <v-btn text>
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

            </v-simple-table>

        </v-card>
    </div>
</template>

<script>
    export default {
        name: "sign_up.vue",
        data() {
            return {
                email: '',
                name: '',
                password: '',
                passwordConfirm: '',
                position: '',
                teamName: '',
                select: null,
                items: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4',
                ],
            };
        },
        methods: {
            submitForm() {
                console.log('dd');
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
