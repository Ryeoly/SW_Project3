<template>
    <div class="base">
        <div class="card1">
            <h1>장르별 판매량</h1>
            <mdb-container >
                <mdb-pie-chart
                        datalabels
                        v-model="pieChartData.datasets.data"
                        :data="pieChartData"
                        :options="pieChartOptions"
                        :width="600"
                        :height="300"
                />
            </mdb-container>
        </div>
        <div class="card2">
            <h1>월간 판매량</h1>
            <mdb-container>
                <mdb-bar-chart
                        v-model="barChartData.datasets.data"
                        :data="barChartData"
                        :options="barChartOptions"
                        :width="600"
                        :height="300"
                ></mdb-bar-chart>
            </mdb-container>
        </div>
        <div class="card3">
            <h1>누적 판매액</h1>
            <mdb-container>
                <mdb-line-chart
                        v-model="lineChartData.datasets.data"
                        :data="lineChartData"
                        :options="lineChartOptions"
                        :width="600"
                        :height="300"
                ></mdb-line-chart>
            </mdb-container>
        </div>
    </div>
</template>

<script>
    import { mdbPieChart,mdbBarChart,mdbLineChart,mdbContainer } from "mdbvue";
    export default {
        name: "trend.vue",
        components: {
            mdbPieChart,
            mdbBarChart,
            mdbLineChart,
            mdbContainer
        },

        props: {
          value:{
              type:Object,
              default: () => ({}),
          }
        },

        data() {
            return {
                pieChartData: {
                    labels: ['Action','Arcade','FPS','Role Play','RPG','Simulation','Video Game'],
                    datasets: [
                        {
                            data:this.value[0],
                            backgroundColor: [
                                "rgba(255,99,132,1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                                "rgba(200, 120, 64, 1)"
                            ],
                            hoverBackgroundColor: [
                                "#FF5A5E",
                                "#5AD3D1",
                                "#FFC870",
                                "#A8B3C5",
                                "#616774",
                                "#616774",
                                "#616774"
                            ]
                        }
                    ]
                },
                pieChartOptions: {
                    responsive: false,
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            color: "white",
                            align: "center",
                            font: {
                                size: 16
                            },
                            formatter: value => {
                                const [dataset] = this.pieChartData.datasets;
                                const setValue = dataset.data.reduce((a, b) => a + b);

                                return `${Math.round((value / setValue) * 100)}%`;
                            }
                        }
                    }
                },
                lineChartData: {
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                    ],
                    datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "rgba(255, 99, 132, 0.1)",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 0.7,
                            data: this.value[2],
                        },
                    ]
                },
                lineChartOptions: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                }
                            }
                        ]
                    }
                },
                barChartData: {
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                    ],
                    datasets: [
                        {
                            label: "월간 판매량",
                            data: this.value[1],
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(153, 102, 255, 0.2)"
                            ],
                            borderColor: [
                                "rgba(255,99,132,1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(153, 102, 255, 1)"
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                barChartOptions: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [
                            {
                                barPercentage: 1,
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                }
                            }
                        ]
                    }
                },
            };
        }
    };
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
  grid-area : 5/5/30/50;
}
.card2{
  grid-area : 5/55/30/100;
}
.card3{
  grid-area : 35/5/60/50;
}
.card4{
  grid-area : 55/55/100/100;
}
</style>
