(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var r={},a={app:0},i=[];function n(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=r,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0746":function(t,e,s){},"3d3c":function(t,e,s){"use strict";var r=s("402a"),a=s.n(r);e["default"]=a.a},"402a":function(t,e){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=s("8c4f"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],o={name:"app"},c=o,l=s("2877"),u=Object(l["a"])(c,i,n,!1,null,null,null),d=u.exports,f=s("f9ff"),m=s("758e");s("df25"),s("0746"),s("6672"),r["a"].use(a["a"]);var p=[{name:"userlogin",path:"/admin-templates/orbiter/vue",component:f["default"]},{name:"userregister",path:"/admin-templates/orbiter/vue/userregister",component:m["default"]},{path:"*",redirect:"'/admin-templates/orbiter/vue"}],b=new a["a"]({mode:"history",routes:p});new r["a"]({el:"#app",router:b,render:function(t){return t(d)}})},6672:function(t,e,s){},"6da7":function(t,e){},"758e":function(t,e,s){"use strict";var r=s("db97"),a=s("c1ac"),i=s("2877"),n=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=n.exports},c1ac:function(t,e,s){"use strict";var r=s("6da7"),a=s.n(r);e["default"]=a.a},db97:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"user-register"}},[s("div",{staticClass:"containerbar authenticate-bg",attrs:{id:"containerbar"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"auth-box register-box"},[s("div",{staticClass:"row no-gutters align-items-center justify-content-center"},[s("div",{staticClass:"col-md-6 col-lg-5"},[s("div",{staticClass:"auth-box-right"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t._m(0),s("p",{staticClass:"mb-0 mt-3"},[t._v("Already have an account? "),s("router-link",{attrs:{to:{name:"userlogin"}}},[t._v("Log in")])],1)])])])])])])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"#"}},[r("div",{staticClass:"form-head"},[r("a",{staticClass:"logo",attrs:{href:"index.html"}},[r("img",{staticClass:"img-fluid",attrs:{src:s("e347"),alt:"logo"}})])]),r("h4",{staticClass:"text-primary my-4"},[t._v("Sign Up !")]),r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Enter Username here",required:""}})]),r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Enter Email here",required:""}})]),r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter Password here",required:""}})]),r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-control",attrs:{type:"password",id:"re-password",placeholder:"Re-Type Password",required:""}})]),r("div",{staticClass:"form-row mb-3"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"custom-control custom-checkbox text-left"},[r("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"terms"}}),r("label",{staticClass:"custom-control-label font-14",attrs:{for:"terms"}},[t._v("I Agree to Terms & Conditions of Orbiter")])])])]),r("button",{staticClass:"btn btn-success btn-lg btn-block font-18",attrs:{type:"submit"}},[t._v("Register")])])}];s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return a}))},df25:function(t,e,s){},e347:function(t,e,s){t.exports=s.p+"img/logo.b643fb0e.svg"},e977:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"user-login"}},[s("div",{staticClass:"containerbar authenticate-bg",attrs:{id:"containerbar"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"auth-box login-box"},[s("div",{staticClass:"row no-gutters align-items-center justify-content-center"},[s("div",{staticClass:"col-md-6 col-lg-5"},[s("div",{staticClass:"auth-box-right"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t._m(0),t._m(1),t._m(2),s("p",{staticClass:"mb-0 mt-3"},[t._v("Don't have a account? "),s("router-link",{attrs:{to:{name:"userregister"}}},[t._v("Sign up")])],1)])])])])])])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"#"}},[r("div",{staticClass:"form-head"},[r("a",{staticClass:"logo",attrs:{href:"index.html"}},[r("img",{staticClass:"img-fluid",attrs:{src:s("e347"),alt:"logo"}})])]),r("h4",{staticClass:"text-primary my-4"},[t._v("Log in !")]),r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Enter Username here",required:""}})]),r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter Password here",required:""}})]),r("div",{staticClass:"form-row mb-3"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"custom-control custom-checkbox text-left"},[r("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"rememberme"}}),r("label",{staticClass:"custom-control-label font-14",attrs:{for:"rememberme"}},[t._v("Remember Me")])])]),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"forgot-psw"},[r("a",{staticClass:"font-14",attrs:{id:"forgot-psw",href:"user-forgotpsw.html"}},[t._v("Forgot Password?")])])])]),r("button",{staticClass:"btn btn-success btn-lg btn-block font-18",attrs:{type:"submit"}},[t._v("Log in")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-or"},[s("h6",{staticClass:"text-muted"},[t._v("OR")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"social-login text-center"},[s("button",{staticClass:"btn btn-primary-rgba font-18",attrs:{type:"submit"}},[s("i",{staticClass:"mdi mdi-facebook mr-2"}),t._v("Facebook")]),s("button",{staticClass:"btn btn-danger-rgba font-18",attrs:{type:"submit"}},[s("i",{staticClass:"mdi mdi-google mr-2"}),t._v("Google")])])}];s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return a}))},f9ff:function(t,e,s){"use strict";var r=s("e977"),a=s("3d3c"),i=s("2877"),n=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=n.exports}});
//# sourceMappingURL=app.90ce94a8.js.map