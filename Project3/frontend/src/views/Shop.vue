<template>
  <div id="shop" class="wrapper">
    <div class="leftbar">
      <list />
    </div>
    <v-spacer />
    <div class="mainview">
      <product />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Shop',

    components: {
      //Suggest: () => import('../components/shop/Suggest'),
      List: () => import('../components/shop/List'),
      //Genre: () => import('../components/shop/Genre'),
      Product: () => import('../components/shop/Product'),
    },
  }
</script>

<style>
.wrapper{
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
}
.leftbar{
  grid-area: 1/1/100/20;
}
.mainview{
  grid-area : 10/22/100/100;
}
</style>
