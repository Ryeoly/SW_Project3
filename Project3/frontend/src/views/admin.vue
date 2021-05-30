<template>
    <div class="wrapper">
        <div class="leftbar">
            <admin_left />
        </div>
        <div class="mainview">
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        name: "admin.vue",
        components: {
            // eslint-disable-next-line vue/no-unused-components
            admin_left: () =>import('@/components/admin/admin_leftbar'),
            // eslint-disable-next-line vue/no-unused-components
            test: () =>import('@/components/mypage/test')
        },
    }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: repeat(100, 1fr);
        grid-template-rows: repeat(100, 1fr);
    }
    .leftbar{
        margin-left: 5%;
        grid-area: 1/1/100/15;
    }
    .mainview{
        grid-area : 1/20/100/100;
    }
</style>
