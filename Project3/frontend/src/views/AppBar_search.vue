<template>
<div>
    {{product}}
</div>
</template>

<script>
    export default {
        name: "Search.vue",
        data:() =>({
            product:'no name',
        }),
        mounted() {
            this.product = this.$route.params.product
        }
    }
</script>

<style scoped>

</style>
