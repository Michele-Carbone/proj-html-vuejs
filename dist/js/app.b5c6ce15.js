(function(t){function e(e){for(var r,s,c=e[0],l=e[1],o=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08b7":function(t,e,n){},"3f73":function(t,e,n){"use strict";n("ad1f")},"426d":function(t,e,n){"use strict";n("08b7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[n("Header")],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("SocialBar"),n("div",{staticClass:"text-center"},[n("img",{staticClass:"m-3",attrs:{src:t.logo,alt:"Logo"}})]),n("NavbarMenu",{attrs:{links:t.links}})],1)},c=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-between align-items-center mt-2",attrs:{id:"social-bar"}},[n("div",{staticClass:"d-flex align-items-center"},[n("ul",[n("li",{staticClass:"me-4"},[t._v(" Download App "),n("a",{attrs:{href:"#"}},[n("button",{staticClass:"btn-sm"},[t._v("iOS")])])]),n("li",[t._v("Advertise whit us")])])]),n("div",{staticClass:"d-flex align-items-center social-icon"},[n("ul",[n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook"})])]),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])]),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter-square"})])]),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-youtube"})])])])])])}],u={name:"SocialBar"},f=u,p=(n("426d"),n("2877")),d=Object(p["a"])(f,l,o,!1,null,"1811b47e",null),b=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"navbarmenu"}},[n("ul",{staticClass:"text-center"},[t._l(t.links,(function(e,r){return n("li",{key:r},[n("a",{class:{active:e.current},attrs:{href:e.url}},[t._v(t._s(e.text))])])})),t._m(0)],2)])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("i",{staticClass:"fas fa-search"})])}],h={name:"NavbarMenu",props:["links"]},_=h,g=(n("3f73"),Object(p["a"])(_,v,m,!1,null,"02cf4a8f",null)),x=g.exports,y={name:"Header",components:{SocialBar:b,NavbarMenu:x},data:function(){return{logo:n("9eff"),links:[{text:"Home",url:"#",current:!0},{text:"Recipes",url:"#",current:!1},{text:"Places",url:"#",current:!1},{text:"Blog",url:"#",current:!1},{text:"About",url:"#",current:!1},{text:"Contact",url:"#",current:!1}]}}},C=y,O=Object(p["a"])(C,s,c,!1,null,null,null),w=O.exports,j={name:"App",components:{Header:w}},k=j,S=(n("5c0b"),Object(p["a"])(k,a,i,!1,null,null,null)),P=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},"9eff":function(t,e,n){t.exports=n.p+"img/avada-food-logo-2x.a6dd4933.png"},ad1f:function(t,e,n){}});
//# sourceMappingURL=app.b5c6ce15.js.map