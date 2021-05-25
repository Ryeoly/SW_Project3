<template>
  <v-container
    id="list"
    tag="section"
  >
    <!--<base-subheading>List</base-subheading>-->

    <div>
      <v-list-item-content>
        <v-list-item-title>List</v-list-item-title>
        <v-checkbox v-model="list">By Rating</v-checkbox>
        <v-checkbox v-model="list">By Release Date</v-checkbox>
        <v-checkbox v-model="list">By Sale Volume</v-checkbox>
        <!--평점 순 <input type="checkbox" v-model="list_check" value="평점 순">
        판매량 순 <input type="checkbox" v-model="list_check" value="판매량 순">
        출시일 순 <input type="checkbox" v-model="list_check" value="출시일 순">-->
      </v-list-item-content>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'ShopList',
  }
</script>
