(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cda03c8"],{d903:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("ade3"),a=i("4e82"),n=i("58df"),c=i("d9bd"),l=i("2b0e"),o=l["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(s["a"])({},this.activeClass,this.isActive)}),t):(Object(c["c"])("v-item should only contain a single element",this),t)):(Object(c["c"])("v-item is missing a default scopedSlot",this),null);var t}});e["b"]=Object(n["a"])(o,Object(a["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},f0de:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-slide-group",{staticClass:"pa-4",attrs:{"active-class":"success","show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.value,(function(e,a){return s("v-slide-item",{key:a,scopedSlots:t._u([{key:"default",fn:function(a){var n=a.active,c=a.toggle;return[s("v-img",{staticClass:"ma-4",attrs:{src:i("b21d")("./"+e.image1),height:"100",width:"100"},on:{click:c}},[s("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[s("v-scale-transition",[n?s("v-icon",{attrs:{color:"white",size:"48"},domProps:{textContent:t._s("mdi-close-circle-outline")}}):t._e()],1)],1)],1)]}}],null,!0)})})),1)},a=[],n={name:"Suggest",data:function(){return{text:"Suggestion for Your Game Style"}},props:{value:{type:Object,default:function(){return{}}}}},c=n,l=i("2877"),o=i("6544"),r=i.n(o),d=i("132d"),u=i("adda"),v=i("0fd9"),f=i("0789"),m=i("7efd"),g=i("d903"),h=i("4e82"),p=i("58df"),b=Object(p["a"])(g["a"],Object(h["a"])("slideGroup")).extend({name:"v-slide-item"}),w=Object(l["a"])(c,s,a,!1,null,null,null);e["default"]=w.exports;r()(w,{VIcon:d["a"],VImg:u["a"],VRow:v["a"],VScaleTransition:f["d"],VSlideGroup:m["b"],VSlideItem:b})}}]);
//# sourceMappingURL=chunk-1cda03c8.ca207c40.js.map