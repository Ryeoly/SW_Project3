(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222014"],{cd85:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",[s("v-row",[s("v-col",{attrs:{calss:"d-flex",cols:"20",sm:"9"}}),s("v-col",{attrs:{calss:"d-flex",cols:"4",sm:"3"}},[s("v-select",{attrs:{items:t.lists,label:"Solo field",dense:"",solo:"","return-object":""},on:{change:function(e){return t.postList()}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)],1)},n=[],o=s("5530"),c=(s("d3b7"),s("25f0"),s("2f62")),a={name:"ShopList",computed:Object(o["a"])({},Object(c["b"])(["lists"])),data:function(){return{selected:null}},methods:{postList:function(){var t=this;this.$http.post("/shop/list",{list:this.selected.value.toString()}).then((function(e){t.$emit("update",e.data.items)}))}}},i=a,d=s("2877"),r=s("6544"),u=s.n(r),f=s("62ad"),p=s("a523"),h=s("0fd9"),b=s("b974"),v=Object(d["a"])(i,l,n,!1,null,null,null);e["default"]=v.exports;u()(v,{VCol:f["a"],VContainer:p["a"],VRow:h["a"],VSelect:b["a"]})}}]);
//# sourceMappingURL=chunk-2d222014.c35f0c86.js.map