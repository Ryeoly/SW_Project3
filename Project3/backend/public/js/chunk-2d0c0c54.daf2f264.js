(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0c54"],{"42cc":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"product"}},[e("v-item-group",[e("v-row",t._l(t.paginatedDatas,(function(a,n){return e("feed-card",{key:n,attrs:{size:t.layout[0],value:a}})})),1)],1)],1)},c=[],u=(e("d3b7"),e("3ca3"),e("ddb0"),e("fb6a"),{name:"ShopGame",components:{FeedCard:function(){return e.e("chunk-5af138e8").then(e.bind(null,"eb3a"))}},created:function(){var t=this;this.$http.get("/shop").then((function(a){t.datas=a.data.items}))},data:function(){return{layout:[3,3,3,3],page:1,datas:[]}},computed:{pages:function(){return Math.ceil(this.datas.length/11)},paginatedDatas:function(){var t=11*(this.page-1),a=11*this.page;return this.datas.slice(t,a)}},watch:{page:function(){window.scrollTo(0,0)}}}),i=u,o=e("2877"),r=e("6544"),s=e.n(r),d=e("604c"),p=e("0fd9"),l=Object(o["a"])(i,n,c,!1,null,null,null);a["default"]=l.exports;s()(l,{VItemGroup:d["b"],VRow:p["a"]})}}]);
//# sourceMappingURL=chunk-2d0c0c54.daf2f264.js.map