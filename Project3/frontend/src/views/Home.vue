<template>
  <div id="home" style="background-color: #121212">
    <banner />

    <br><br><br>

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
      Banner: () => import('../components/home/Banner'),
      Subscribe: () => import('../components/home/Subscribe'),
    },
  }
</script>
