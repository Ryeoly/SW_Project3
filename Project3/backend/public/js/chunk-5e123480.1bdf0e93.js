(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e123480"],{"220e":function(e,t,a){e.exports=a.p+"media/EA_SPORTS_FIFA_21_1.c5ee0ad0.webm"},3877:function(e,t,a){e.exports=a.p+"media/apex.51fe18c2.webm"},"3faa":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticStyle:{"margin-top":"5%","margin-bottom":"5%"},attrs:{tile:""}},[n("v-container",[n("v-row",[n("v-cols",{attrs:{cols:"6"}},[e.represent?n("v-img",{staticStyle:{"align-content":"center"},attrs:{src:a("b21d")("./"+e.values[0][0].image1),width:"460",height:"215"}}):n("video",{staticStyle:{"align-content":"center"},attrs:{autoplay:"",src:a("a661")("./"+e.values[0][0].video1),width:"460",height:"215"}})],1),n("v-col",{attrs:{cols:"3"}}),n("v-cols",{attrs:{cols:"6"}},[n("v-rating",{attrs:{readonly:"",color:"warning","icon-label":"custom icon label text {0} of {1}","half-increments":""},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}},[e._v(e._s(e.rating)+"/5.0")]),n("v-card-title",{staticStyle:{"text-align":"right"}},[n("h1",[e._v(e._s(e.values[0][0].product))])]),n("br"),n("v-card-subtitle",{staticStyle:{"text-align":"right"}},[n("h2",[e._v(e._s(e.values[0][0].price)+"₩")])]),n("v-btn",{staticClass:"white--text",staticStyle:{alignment:"center"},attrs:{width:"400",color:"background"},on:{click:function(t){return e.addCart(e.values[0][0].idx,e.values[0][0].price)}}},[e._v("장바구니에 담기")])],1)],1),n("v-row",[n("v-img",{attrs:{src:a("b21d")("./"+e.values[0][0].image1),"max-width":"90","max-height":"50"},on:{click:e.RepresentImage}}),n("video",{attrs:{src:a("a661")("./"+e.values[0][0].video1),width:"90",height:"50"},on:{click:e.RepresentVideo}})],1)],1)],1)},i=[],r=(a("d3b7"),a("ddb0"),{name:"Item",data:function(){return{represent:!0,rating:0}},created:function(){this.rating=this.make_rate},computed:{make_rate:function(){return parseInt(this.values[0][0].star)/parseInt(this.values[1][0].cnt)}},props:{values:{type:Object,default:function(){return{}}}},methods:{RepresentImage:function(){this.represent=!0},RepresentVideo:function(){this.represent=!1},addCart:function(e,t){this.$http.post("/basket",{i_idx:e,u_idx:this.$store.state.useridx,amount:"1",price:t}).then((function(e){!0===e.data.success&&alert("Success Add Your Item to Cart")}))}}}),o=r,c=(a("6f7e"),a("2877")),s=a("6544"),d=a.n(s),u=a("8336"),m=a("b0af"),_=a("99d9"),b=a("62ad"),l=a("a523"),p=a("adda"),f=a("1d4d"),w=a("0fd9"),h=Object(c["a"])(o,n,i,!1,null,"0cc515e2",null);t["default"]=h.exports;d()(h,{VBtn:u["a"],VCard:m["a"],VCardSubtitle:_["b"],VCardTitle:_["d"],VCol:b["a"],VContainer:l["a"],VImg:p["a"],VRating:f["a"],VRow:w["a"]})},"43ce":function(e,t,a){e.exports=a.p+"media/Hood_outlaws&Legends_1.f0e982cb.webm"},4467:function(e,t,a){e.exports=a.p+"media/PLAYERUNKNOWNS_BATTLEGROUNDS_1.04355853.webm"},"47ac":function(e,t,a){e.exports=a.p+"media/Apex_Legends_1.95f55404.webm"},5382:function(e,t,a){e.exports=a.p+"media/amongus.b719f386.webm"},"5cea":function(e,t,a){e.exports=a.p+"media/Counter_Strike_1.57b824da.webm"},"61c2":function(e,t,a){e.exports=a.p+"media/Rust_1.0f12b3e0.webm"},"69ab":function(e,t,a){e.exports=a.p+"media/The_Slormancer_1.98a2c2fb.webm"},"6f7e":function(e,t,a){"use strict";a("a578")},"7b7f":function(e,t,a){e.exports=a.p+"media/another_eden_1.04816bf2.webm"},"80b1":function(e,t,a){e.exports=a.p+"media/Euro_Truck_Simulator2_1.d0c3af53.webm"},9143:function(e,t,a){e.exports=a.p+"media/battlefield.e54bdd89.webm"},"9c24":function(e,t,a){e.exports=a.p+"media/TEKKEN_7_1.4baf0e5a.webm"},a578:function(e,t,a){},a661:function(e,t,a){var n={"./Apex_Legends_1.webm":"47ac","./Capcom_Arcade_Stadium_1.webm":"ea03","./Cities_Skylines_1.webm":"b424","./Counter_Strike_1.webm":"5cea","./EA_SPORTS_FIFA_21_1.webm":"220e","./Euro_Truck_Simulator2_1.webm":"80b1","./Grand_Theft_Auto_V_1.webm":"cd8c","./Hood_outlaws&Legends_1.webm":"43ce","./PLAYERUNKNOWNS_BATTLEGROUNDS_1.webm":"4467","./ROMANCE_OF_THE_THREE_KINGDOMS_XIV_1.webm":"bdbc","./Rust_1.webm":"61c2","./TEKKEN_7_1.webm":"9c24","./The_Slormancer_1.webm":"69ab","./amongus.webm":"5382","./another_eden_1.webm":"7b7f","./apex.webm":"3877","./battlefield.webm":"9143","./battleground.webm":"e91b"};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="a661"},b424:function(e,t,a){e.exports=a.p+"media/Cities_Skylines_1.69335fd1.webm"},bdbc:function(e,t,a){e.exports=a.p+"media/ROMANCE_OF_THE_THREE_KINGDOMS_XIV_1.0bfcabe3.webm"},cd8c:function(e,t,a){e.exports=a.p+"media/Grand_Theft_Auto_V_1.07b3a489.webm"},e91b:function(e,t,a){e.exports=a.p+"media/battleground.04355853.webm"},ea03:function(e,t,a){e.exports=a.p+"media/Capcom_Arcade_Stadium_1.b76dbe7f.webm"}}]);
//# sourceMappingURL=chunk-5e123480.1bdf0e93.js.map