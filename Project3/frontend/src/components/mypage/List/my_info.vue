<template>
<div class="base">
        <v-card class="card">
        <v-row>
            <v-col>
                <material-card
                        color="primary"
                        icon="mdi-account-outline"
                >
                    <template #title>
                        Edit Profile — <small class="text-body-1">Complete your profile</small>
                    </template>

                    <v-form>
                        <v-container class="py-0">
                            <v-row>
                                <v-col
                                        cols="12"
                                        md="3"
                                >
                                    <v-text-field
                                            disabled
                                            label="내 정보 변경"
                                    />
                                </v-col>

                                <v-col
                                        cols="12"
                                        md="3"
                                >
                                    <v-text-field
                                            color="purple"
                                            label="User Name"
                                    />
                                </v-col>

                                <v-col
                                        cols="12"
                                        md="3"
                                >
                                    <v-text-field
                                            color="purple"
                                            label="Email Address"
                                    />
                                </v-col>

                                <v-col
                                        cols="12"
                                        md="4"
                                >
                                    <v-text-field
                                            color="purple"
                                            label="Name"
                                    />
                                </v-col>

                                <v-col
                                        cols="12"
                                        md="4"
                                >
                                    <v-text-field
                                            color="purple"
                                            label="Nick Name"
                                    />
                                </v-col>

                                <v-col
                                        cols="12"
                                        md="8"
                                >
                                    <v-text-field
                                            color="purple"
                                            label="Adress"
                                    />
                                </v-col>

                                <v-col
                                        cols="12"
                                        md="3"
                                >
                                    <v-text-field
                                            color="purple"
                                            label="City"
                                    />
                                </v-col>

                                <v-col
                                        cols="12"
                                        md="3"
                                >
                                    <v-text-field
                                            color="purple"
                                            label="Country"
                                    />
                                </v-col>

                                <v-col
                                        cols="12"
                                        md="3"
                                >
                                    <v-text-field
                                            color="purple"
                                            label="Postal Code"
                                            type="number"
                                    />
                                </v-col>

                                <v-col
                                        cols="12"
                                        class="text-right"
                                >
                                    <v-btn
                                            color="primary"
                                            min-width="150"
                                    >
                                        Update Profile
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>

                            </v-row>
                        </v-container>
                    </v-form>
                </material-card>
            </v-col>
        </v-row>
        </v-card>
</div>
</template>

<script>
    export default { name: "user_info.vue", }
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
