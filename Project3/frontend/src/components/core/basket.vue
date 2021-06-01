<template>
    <v-card>
      <v-toolbar
          dark
          color="background"
      >
        <v-btn
            icon
            dark
            @click="changeDialog"
        >
          <v-icon color="#ffffff">mdi-close</v-icon>
        </v-btn>


        <v-toolbar-title class="white--text flex text-center">
          Cart
        </v-toolbar-title>
      </v-toolbar>

      <v-simple-table style="margin-top: 30px">
        <thead>
        <tr style="height: 80px">
          <th>
            선택
          </th>
          <th class="black--text">
            제품 사진
          </th>
          <th class="black--text">
            제품명
          </th>
          <th class="black--text">
            수량
          </th>
          <th class="black--text">
            주문금액
          </th>
          <th class="black--text">
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
                :value="[i,item.idx,item.product]"
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
              <v-icon>mdi-minus</v-icon>
            </base-btn>
            {{ item.amount }}
            <base-btn
                class="mr-0"
                square
                title="Plus Amount"
                @click="amountUp(i)"
            >
              <v-icon>mdi-plus</v-icon>
            </base-btn>
          </td>
          <td>{{ item.total_price }}</td>
          <td>
            <v-btn @click="deleteitem(i)" color="secondary" class="white--text">삭제하기</v-btn>
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
        <v-btn @click="requestPay" color="secondary" class="white--text">결제하기</v-btn>
      </div>
    </v-card>
</template>

<script>
export default {
  name: "basket",
  mounted () {
    const IMP = window.IMP;
    IMP.init("impCode");
  },

  data:()=>({
    selected:[],
    impCode : '',
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
      for(let i = 0;i < this.selected.length; i++ ) {
        result += this.value[this.selected[i][0]].total_price
      }
      return result
    }
  },

  methods: {
    requestPay: function(){
      //1. 객체 초기화 (가맹점 식별코드 삽입)
      const IMP = window.IMP;
      IMP.init('imp49200152');
      //3. 결제창 호출
      IMP.request_pay({
        pg : 'inicis',
        pay_method : 'card',
        merchant_uid : 'merchant_' + new Date().getTime(),
        name : 'games',
        amount : this.sum,
        buyer_tel : '010-1234-5678',
      }, function(rsp) {
        let msg;
        var check;//결제가 완료되었는지 체크하는 변수
        if ( rsp.success ) {
          //4. 결제 요청 결과 서버(자사)에 적용하기
          //ajax 서버 통신 구현 -> 5. 서버사이드에서 validation check

          //6. 최종 서버 응답 클라이언트에서 단계 4.에서 보낸 서버사이드 응답 에따라 결제 성공 실패 출력
          msg = '결제가 완료되었습니다.';
          msg += '고유ID : ' + rsp.imp_uid;
          msg += '상점 거래ID : ' + rsp.merchant_uid;
          msg += '결제 금액 : ' + rsp.paid_amount;
          msg += '카드 승인번호 : ' + rsp.apply_num;
          check=0;//결제가 성공하면 0
        } else {
          // eslint-disable-next-line no-redeclare
          msg = '결제에 실패하였습니다.';
          msg += '에러내용 : ' + rsp.error_msg;
          check=1; //결제가 실패하면 1
        }
        alert(msg);
        if(check==0){//결제에 성공했을때
          this.$http.get('/basket/sendcode').then((response)=>{//결제코드 전송
            if(response.data.success === false){
              console.log("error")
            }
            else{
              console.log("success")
            }
          })
          //여기다가 바스켓 테이블에 산물건들 complete를 1로 바꿔줘야함
          //그리고 홈페이지로 이동


        }
        else{//결제 실패했을때
          this.$router.push('/home')
        }
      });
    },
    changeDialog() {
      this.$emit('update')
    },
    amountUp(idx){
      var new_amount = this.value[idx].amount + 1;
      var new_price = this.value[idx].total_price + this.value[idx].price;
      this.$http.post('/basket/update', {new_amount : new_amount, new_price: new_price,item_idx: this.value[idx].idx, user_idx: this.$store.state.useridx}).then((response)=>{
        if(response.data.success === true){
          this.$emit('plus', idx)
        }
      })
    },
    amountDown(idx){
      var new_amount = this.value[idx].amount - 1;
      var new_price = this.value[idx].total_price - this.value[idx].price;
      this.$http.post('/basket/update', {new_amount : new_amount, new_price: new_price,item_idx: this.value[idx].idx, user_idx: this.$store.state.useridx}).then((response)=>{
        if(response.data.success === true){
          this.$emit('minus', idx)
        }
      })
    },
    deleteitem(idx){
      this.$http.post('/basket/delete', {item_idx: this.value[idx].idx, user_idx: this.$store.state.useridx}).then((response)=>{
        if(response.data.success === true){
          this.value.splice(idx,1);
          this.$emit('delete', this.value)
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
