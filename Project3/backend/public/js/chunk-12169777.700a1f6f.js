(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12169777"],{"3a66":function(t,i,e){"use strict";e.d(i,"a",(function(){return n}));var o=e("fe6c"),a=e("58df");function n(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,i){i?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,i){this.$vuetify.application.unregister(this._uid,i)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,e=i.length;t<e;t++)this.$watch(i[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"7a74":function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-footer",{staticClass:"py-4",attrs:{dark:"",height:"auto"}},[e("v-container",{staticClass:"mx-auto"},[e("v-row",[e("v-col",{attrs:{cols:"9"}},t._l(t.items,(function(i,o){return e("base-btn",{key:o,staticClass:"ml-0 mr-3",attrs:{href:i.href,color:"primary",square:"",target:"_blank"}},[e("v-icon",{domProps:{textContent:t._s(i.icon)}})],1)})),1),e("v-spacer"),e("base-btn",{staticClass:"mr-0",attrs:{square:"",title:"Go to top"},on:{click:function(i){return t.$vuetify.goTo(0)}}},[e("v-icon",[t._v("mdi-chevron-up")])],1)],1)],1)],1)},a=[],n={name:"CoreFooter",data:function(){return{items:[{href:"#!",icon:"mdi-twitter"},{href:"#!",icon:"mdi-instagram"},{href:"#!",icon:"mdi-facebook"},{href:"#!",icon:"mdi-google-plus"},{href:"#!",icon:"mdi-reddit"},{href:"#!",icon:"mdi-discord"},{href:"#!",icon:"mdi-pinterest"}]}}},s=n,r=e("2877"),c=e("6544"),p=e.n(c),u=e("62ad"),l=e("a523"),h=e("5530"),f=(e("a9e3"),e("c7cd"),e("b5b6"),e("8dd9")),d=e("3a66"),m=e("d10f"),v=e("58df"),b=e("80d2"),g=Object(v["a"])(f["a"],Object(d["a"])("footer",["height","inset"]),m["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(h["a"])(Object(h["a"])({},f["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(h["a"])(Object(h["a"])({},f["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(b["f"])(t),left:Object(b["f"])(this.computedLeft),right:Object(b["f"])(this.computedRight),bottom:Object(b["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var i=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,i,this.$slots.default)}}),y=e("132d"),j=e("0fd9"),O=e("2fa4"),$=Object(r["a"])(s,o,a,!1,null,null,null);i["default"]=$.exports;p()($,{VCol:u["a"],VContainer:l["a"],VFooter:g,VIcon:y["a"],VRow:j["a"],VSpacer:O["a"]})},b5b6:function(t,i,e){}}]);
//# sourceMappingURL=chunk-12169777.700a1f6f.js.map