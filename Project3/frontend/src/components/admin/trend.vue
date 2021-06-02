<template>
    <div style="align-content: center;">
        <trend-chart :value="[genre_data, month_data, sell_data]" />
    </div>
</template>

<script>
    export default {
      data:()=>({
        genre_data: [],
        month_data: [],
        sell_data: []
      }),
        created() {
            this.$http.get('/admin/trend').then((response)=>{
                if(response.data.success === true){
                    var genredata=[]
                    var monthdata=[]
                    var selldata=[]
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
                    this.genre_data = genredata
                    this.month_data = monthdata
                    this.sell_data = selldata
                }
            })
        },

      components: {
        TrendChart: () => import('./trendChart'),
      }
    }
</script>

<style scoped>
.base{
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
}
.table1{
  grid-area : 10/2/70/98;
}
</style>
