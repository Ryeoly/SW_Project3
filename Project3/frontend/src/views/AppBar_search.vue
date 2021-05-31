<template>
<div>
    <span>{{hi}}</span>
    <span>a;ksjfdoiqwjgvo;kasmdklfas</span>
</div>
</template>

<script>
    export default {
        name: "Search.vue",
        data:() =>({
            //product:'no name',
        }),
        computed:{
            hi() {
                return this.$store.state.search_product
            }
        }
    }
</script>

<style scoped>

</style>
