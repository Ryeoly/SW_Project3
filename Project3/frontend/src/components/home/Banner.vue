<template>
  <base-card dark>
    <v-img
      :src="require('@/assets/image/banner_new.jpg')"
      class="grey lighten-2"
      height="100%"
      width="100%"
      style="background-size:cover"
    >
<!--      <v-row-->
<!--        class="fill-height pa-3"-->
<!--        align="center"-->
<!--      >-->
<!--        <v-col-->
<!--          cols="12"-->
<!--          md="7"-->
<!--          offset-md="5"-->
<!--        >-->
<!--          &lt;!&ndash;<h1 class="display-3 font-weight-light">-->
<!--            Yunchoko-->
<!--          </h1>-->

<!--          <div class="subheading text-uppercase pl-2 mb-4">-->
<!--            The Game Store-->
<!--          </div>&ndash;&gt;-->

<!--        </v-col>-->
<!--      </v-row>-->
    </v-img>
  </base-card>
</template>

<script>
  export default {
    name: 'HomeBanner',
  }
</script>
