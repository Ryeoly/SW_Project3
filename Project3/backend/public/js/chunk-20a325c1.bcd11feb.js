(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20a325c1"],{"175c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.png"}})],1)],1),i("v-list-item",{attrs:{link:""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.user_info.nickname)+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.user_info.email))])],1),i("v-list-item-action",[i("v-icon",[t._v("mdi-menu-down")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",{attrs:{color:"#DCDCDC",text:"#000000"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,s){return i("v-list-item",{key:s,on:{click:function(i){return t.$router.push(e.goto)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)},n=[],a={name:"leftside.vue",data:function(){return{selectedItem:0,items:[{text:"내 정보 수정",icon:"mdi-account-cog",goto:"/mypage/my_info"},{text:"구매 내역",icon:"mdi-wallet-giftcard",goto:"/mypage/buy_history"},{text:"Q&A 문의",icon:"mdi-account-question",goto:"/mypage/Q_A"},{text:"내가 쓴 글",icon:"mdi-clipboard-edit",goto:"/mypage/my_board"}],user_info:{nickname:"여리",email:"youddbb@naver.com"}}}},o=a,r=i("2877"),c=i("6544"),l=i.n(c),m=i("5530"),v=(i("8ce9"),i("7560")),d=v["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(m["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(m["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),u=i("132d"),p=i("adda"),h=i("8860"),f=i("da13"),_=i("1800"),g=i("8270"),b=i("5d23"),I=i("1baa"),V=i("34c3"),x=Object(r["a"])(o,s,n,!1,null,"88697d50",null);e["default"]=x.exports;l()(x,{VDivider:d,VIcon:u["a"],VImg:p["a"],VList:h["a"],VListItem:f["a"],VListItemAction:_["a"],VListItemAvatar:g["a"],VListItemContent:b["a"],VListItemGroup:I["a"],VListItemIcon:V["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"]})},"8ce9":function(t,e,i){}}]);
//# sourceMappingURL=chunk-20a325c1.bcd11feb.js.map