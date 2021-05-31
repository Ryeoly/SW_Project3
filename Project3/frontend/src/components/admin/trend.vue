<template>
    <div class="base">
        <div class="card1">
          <section>
            <line-chart></line-chart>
          </section>
        </div>

        <div class="card2">
            <v-card
                    class="mx-auto text-center"
                    color="green"
                    dark
                    max-width="600"
            >
                <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                                :value="values"
                                color="rgba(255, 255, 255, .7)"
                                height="100"
                                padding="24"
                                stroke-linecap="round"
                                smooth
                        >
                            <template v-slot:label="item">
                                ${{ item.values }}
                            </template>
                        </v-sparkline>
                    </v-sheet>
                </v-card-text>

                <v-card-text>
                    <div class="display-1 font-weight-thin">
                        Sales Last 24h
                    </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                    <v-btn
                            block
                            text
                    >
                        Go to Report
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>


        <div class="card3">
            <v-card
                    class="mx-auto text-center"
                    color="green"
                    dark
                    max-width="600"
            >
                <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                                :value="values"
                                color="rgba(255, 255, 255, .7)"
                                height="100"
                                padding="24"
                                stroke-linecap="round"
                                smooth
                                option="Bar"
                        >
                            <template v-slot:label="item">
                                ${{ item.values }}
                            </template>
                        </v-sparkline>
                    </v-sheet>
                </v-card-text>

                <v-card-text>
                    <div class="display-1 font-weight-thin">
                        Sales Last 24h
                    </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                    <v-btn
                            block
                            text
                    >
                        Go to Report
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>


        <div class="card4">
            <v-card
                    class="mx-auto text-center"
                    color="green"
                    dark
                    max-width="600"
            >
                <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                                :value="values"
                                color="rgba(255, 255, 255, .7)"
                                height="100"
                                padding="24"
                                stroke-linecap="round"
                                smooth
                        >
                            <template v-slot:label="item">
                                ${{ item.values }}
                            </template>
                        </v-sparkline>
                    </v-sheet>
                </v-card-text>

                <v-card-text>
                    <div class="display-1 font-weight-thin">
                        Sales Last 24h
                    </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                    <v-btn
                            block
                            text
                    >
                        Go to Report
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "trend.vue",
        data: () => ({
            values: [
                423,
                446,
                675,
                510,
                590,
                610,
                760,
            ],
        }),
    }
</script>

<style scoped>
    .v-sheet--offset {
        top: -24px;
        position: relative;
    }
    .base{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .card1{
        grid-area : 5/5/50/50;
    }
    .card2{
        grid-area : 5/55/50/100;
    }
    .card3{
        grid-area : 55/5/100/50;
    }
    .card4{
        grid-area : 55/55/100/100;
    }
</style>
