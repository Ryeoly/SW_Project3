(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79c76c94"],{"220e":function(e,t,a){e.exports=a.p+"media/EA_SPORTS_FIFA_21_1.c5ee0ad0.webm"},3877:function(e,t,a){e.exports=a.p+"media/apex.51fe18c2.webm"},"42cc":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"product"}},[i("v-item-group",{attrs:{"active-class":"primary"}},[i("v-container",[i("v-row",e._l(e.paginatedGameDatas,(function(t,n){return i("v-col",{key:n,attrs:{cols:"12",md:"4"}},[i("v-item",[i("v-card",{attrs:{width:"400"},on:{click:function(a){e.gotoDetail(t.idx.toString())}}},[i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(e){var n=e.hover;return n?i("video",{attrs:{src:a("a661")("./"+t.video1),autoplay:!0,width:"400",height:"200"}}):i("v-img",{attrs:{src:a("b21d")("./"+t.image1),width:"400",height:"200"}})}}],null,!0)}),i("v-card-title",[e._v(e._s(t.product))]),i("v-card-subtitle",[e._v(e._s(t.price))])],1)],1)],1)})),1),i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{cols:"3"}},[1!==e.page?i("base-btn",{staticClass:"ml-0",attrs:{square:"",title:"Previous page"},on:{click:function(t){e.page--}}},[i("v-icon",[e._v("mdi-chevron-left")])],1):e._e()],1),i("v-col",{staticClass:"text-center subheading",attrs:{cols:"6"}},[e._v(" PAGE "+e._s(e.page)+" OF "+e._s(e.pages)+" ")]),i("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[e.pages>1&&e.page<e.pages?i("base-btn",{staticClass:"mr-0",attrs:{square:"",title:"Next page"},on:{click:function(t){e.page++}}},[i("v-icon",[e._v("mdi-chevron-right")])],1):e._e()],1)],1)],1)],1)],1)},n=[],o=a("5530"),s=(a("fb6a"),a("2f62")),c={name:"ShopGame",props:{value:{type:Object,default:function(){return{}}}},data:function(){return{page:1,u_idx:null,test:"1234"}},computed:{pages:function(){return Math.ceil(this.value.length/9)},paginatedGameDatas:function(){var e=9*(this.page-1),t=9*this.page;return this.value.slice(e,t)}},watch:{page:function(){window.scrollTo(0,0)}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["c"])(["save_item_data"])),Object(s["c"])(["save_qna_data"])),Object(s["c"])(["save_rec_data"])),Object(s["c"])(["save_count"])),Object(s["c"])(["save_rev_data"])),{},{gotoDetail:function(e){var t=this;this.u_idx=this.$store.state.useridx,this.$http.post("/detail",{u_idx:this.u_idx,i_idx:e}).then((function(e){!0===e.data.success&&(t.save_item_data(e.data.item_data),t.save_rec_data(e.data.recommend_data),t.save_rev_data(e.data.review_data),t.save_qna_data(e.data.qna_data),t.save_count(e.data.count_data),t.$router.push({path:"/detail"}))}))}})},r=c,d=a("2877"),u=a("6544"),l=a.n(u),_=a("b0af"),b=a("99d9"),m=a("62ad"),p=a("a523"),v=a("16b7"),f=a("f2e7"),h=a("58df"),g=a("d9bd"),w=Object(h["a"])(v["a"],f["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(g["c"])("v-hover should only contain a single element",this),e)):(Object(g["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var e}}),O=a("132d"),x=a("adda"),S=a("d903"),A=a("604c"),E=a("0fd9"),y=Object(d["a"])(r,i,n,!1,null,null,null);t["default"]=y.exports;l()(y,{VCard:_["a"],VCardSubtitle:b["b"],VCardTitle:b["d"],VCol:m["a"],VContainer:p["a"],VHover:w,VIcon:O["a"],VImg:x["a"],VItem:S["b"],VItemGroup:A["b"],VRow:E["a"]})},"43ce":function(e,t,a){e.exports=a.p+"media/Hood_outlaws&Legends_1.f0e982cb.webm"},4467:function(e,t,a){e.exports=a.p+"media/PLAYERUNKNOWNS_BATTLEGROUNDS_1.04355853.webm"},"47ac":function(e,t,a){e.exports=a.p+"media/Apex_Legends_1.95f55404.webm"},5382:function(e,t,a){e.exports=a.p+"media/amongus.b719f386.webm"},"5cea":function(e,t,a){e.exports=a.p+"media/Counter_Strike_1.57b824da.webm"},"61c2":function(e,t,a){e.exports=a.p+"media/Rust_1.0f12b3e0.webm"},"69ab":function(e,t,a){e.exports=a.p+"media/The_Slormancer_1.98a2c2fb.webm"},"7b7f":function(e,t,a){e.exports=a.p+"media/another_eden_1.04816bf2.webm"},"80b1":function(e,t,a){e.exports=a.p+"media/Euro_Truck_Simulator2_1.d0c3af53.webm"},9143:function(e,t,a){e.exports=a.p+"media/battlefield.e54bdd89.webm"},"9c24":function(e,t,a){e.exports=a.p+"media/TEKKEN_7_1.4baf0e5a.webm"},a661:function(e,t,a){var i={"./Apex_Legends_1.webm":"47ac","./Capcom_Arcade_Stadium_1.webm":"ea03","./Cities_Skylines_1.webm":"b424","./Counter_Strike_1.webm":"5cea","./EA_SPORTS_FIFA_21_1.webm":"220e","./Euro_Truck_Simulator2_1.webm":"80b1","./Grand_Theft_Auto_V_1.webm":"cd8c","./Hood_outlaws&Legends_1.webm":"43ce","./PLAYERUNKNOWNS_BATTLEGROUNDS_1.webm":"4467","./ROMANCE_OF_THE_THREE_KINGDOMS_XIV_1.webm":"bdbc","./Rust_1.webm":"61c2","./TEKKEN_7_1.webm":"9c24","./The_Slormancer_1.webm":"69ab","./amongus.webm":"5382","./another_eden_1.webm":"7b7f","./apex.webm":"3877","./battlefield.webm":"9143","./battleground.webm":"e91b"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id="a661"},b424:function(e,t,a){e.exports=a.p+"media/Cities_Skylines_1.69335fd1.webm"},bdbc:function(e,t,a){e.exports=a.p+"media/ROMANCE_OF_THE_THREE_KINGDOMS_XIV_1.0bfcabe3.webm"},cd8c:function(e,t,a){e.exports=a.p+"media/Grand_Theft_Auto_V_1.07b3a489.webm"},d903:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("ade3"),n=a("4e82"),o=a("58df"),s=a("d9bd"),c=a("2b0e"),r=c["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(e.data=this._b(e.data||{},e.tag,{class:Object(i["a"])({},this.activeClass,this.isActive)}),e):(Object(s["c"])("v-item should only contain a single element",this),e)):(Object(s["c"])("v-item is missing a default scopedSlot",this),null);var e}});t["b"]=Object(o["a"])(r,Object(n["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},e91b:function(e,t,a){e.exports=a.p+"media/battleground.04355853.webm"},ea03:function(e,t,a){e.exports=a.p+"media/Capcom_Arcade_Stadium_1.b76dbe7f.webm"}}]);
//# sourceMappingURL=chunk-79c76c94.59b90876.js.map