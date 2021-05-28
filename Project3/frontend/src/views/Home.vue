<template>
  <div id="home">
    <banner />

    <about />

    <subscribe />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    created () {
      this.$http.get('/home').then((response) => {
        this.user = response.data.user
      })
    },
    data () { return { user: [] } },

    components: {
      About: () => import('../components/home/About'),
      //Articles: () => import('@/components/home/Articles'),
      Banner: () => import('../components/home/Banner'),
      //Social: () => import('@/components/home/Social'),
      Subscribe: () => import('../components/home/Subscribe'),
    },
  }
</script>
