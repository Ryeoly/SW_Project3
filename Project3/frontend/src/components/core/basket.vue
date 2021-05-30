<template>
    <v-card>
      <v-toolbar
          dark
          color="primary"
      >
        <v-btn
            icon
            dark
            @click="changeDialog"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>


        <v-toolbar-title class="flex text-center">
          Cart
        </v-toolbar-title>
      </v-toolbar>

      <v-simple-table style="margin-top: 30px">
        <thead>
        <tr style="height: 80px">
          <th>
            선택
          </th>
          <th class="primary--text">
            제품 사진
          </th>
          <th class="primary--text">
            제품명
          </th>
          <th class="primary--text">
            수량
          </th>
          <th class="primary--text">
            주문금액
          </th>
          <th>
            주문관리
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(item, i) in value"
            :key="i"
            style="height: 120px"
            link>
          <td>
            <v-checkbox
                v-model="selected"
                :value="i"
            ></v-checkbox>
          </td>
          <td>
            <v-img
                :src="require(`@/assets/game_img/${item.image1}`)"
                width="200"
                height="100"
            ></v-img>
          </td>
          <td>{{ item.product }}</td>
          <td>
            <base-btn
                v-if="item.amount !== 1"
                class="ml-0"
                square
                title="Minus Amount"
                @click="amountDown(i)"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </base-btn>
            {{ item.amount }}
            <base-btn
                class="mr-0"
                square
                title="Plus Amount"
                @click="amountUp(i)"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </base-btn>
          </td>
          <td>{{ item.total_price }}</td>
          <td>
            <v-btn>삭제하기</v-btn>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td style="margin-left: 30px">총액</td>
          <td>{{sum}}</td>
          <td></td>
        </tr>
        </tbody>
      </v-simple-table>
      <div style="margin-top: 30px"></div>
      <div style="text-align: center">
        <v-btn> 결제하기 </v-btn>
        <div>{{selected}}</div>
      </div>
    </v-card>
</template>

<script>
export default {
  name: "basket",

  data:()=>({
    selected:[],
  }),

  props: {
    value: {
      type: Object,
      default:()=>({})
    }
  },

  computed: {
    sum() {
      var result = 0;
      for(let i = 0;i < this.value.length; i++ ) {
        result += this.value[i].total_price
      }
      return result
    }
  },

  methods: {
    changeDialog() {
      this.$emit('update')
    },
    amountUp(idx){
      this.$emit('plus', idx)
    },
    amountDown(idx){
      this.$emit('minus', idx)
    }
  }
}
</script>

<style scoped>

</style>