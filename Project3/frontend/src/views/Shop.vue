<template>
  <div id="shop">
    <v-row>
      <v-navigation-drawer
          permanent="true"
      >
        <list />

        <genre />
      </v-navigation-drawer>

      <product />
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Shop',
    created () {
      this.$http.get('/shop').then((response) => {
        this.user = response.data
      })
    },
    data () { return { user: [] } },

    components: {
      List: () => import('@/components/shop/List'),
      Genre: () => import('@/components/shop/Genre'),
      Product: () => import('@/components/shop/Product'),
    },
  }
</script>
