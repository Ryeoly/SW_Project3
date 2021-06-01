<template>
    <div style="align-content: center; margin-top: 10%">
        <div style="margin-left: 10%;">
            <h1>장르별 판매량</h1>
            <mdb-container >
                <mdb-pie-chart
                        datalabels
                        :data="pieChartData"
                        :options="pieChartOptions"
                        :width="600"
                        :height="300"
                />
            </mdb-container>
        </div>
        <v-divider /><br><br>
        <div style="margin-left: 10%;">
            <h1>월간 판매량</h1>
            <mdb-container>
                <mdb-bar-chart
                        :data="barChartData"
                        :options="barChartOptions"
                        :width="600"
                        :height="300"
                ></mdb-bar-chart>
            </mdb-container>
        </div>
        <v-divider /><br><br>
        <div style="margin-left: 10%;">
            <h1>누적 판매액</h1>
            <mdb-container>
                <mdb-line-chart
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
        created() {
            this.$http.get('/admin/trend').then((response)=>{
                if(response.data.success === true){
                    var genredata=[]
                    var monthdata=[]
                    var selldata=[]
                    console.log(response.data.genre_data)
                    console.log(response.data.month_data)
                    console.log(response.data.sell_data)
                    for(let i=0;i<response.data.genre_data.length; i++){
                        genredata[i] = response.data.genre_data[i].amount
                    }
                    for(let i=0;i<response.data.month_data.length; i++){
                        monthdata[i] = response.data.month_data[i].amount
                    }
                    for(let i=0;i<response.data.sell_data.length; i++){
                        selldata[i] = response.data.sell_data[i].price
                        if(i>0){
                            selldata[i] += selldata[i-1]
                        }
                    }
                    this.pieChartData.datasets.data = genredata
                    this.barChartData.datasets.data = monthdata
                    this.lineChartData.datasets.data = selldata
                    console.log(this.lineChartData.datasets.data)
                }
            })
        },
        mounted() {
        },
        components: {
            mdbPieChart,
            mdbBarChart,
            mdbLineChart,
            mdbContainer
        },

        data :()=>({
                a1:[],
                a2:[],
                a3:[],
                pieChartData: {
                    labels: ['Action','Arcade','FPS','Role Play','RPG','Simulation','Video Game'],
                    datasets: [
                        {
                            data:[],
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
                            data: [],
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
                            data: [],
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
