(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=a("f309");n["a"].use(o["a"]);var i=new o["a"]({icons:{iconfont:"mdi"}}),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-navigation"),a("v-content",{attrs:{transition:"slide-x-transition"}},[a("router-view")],1)],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("v-navigation-drawer",{staticClass:"deep-orange darken-4",attrs:{app:"",dark:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:""}},[t._l(t.items,function(e,n){return[a("v-list-item",{key:n,attrs:{link:""},on:{click:function(a){return a.stopPropagation(),t.closeWindow(e.title)}}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)]})],2)],1),a("v-app-bar",{staticClass:"elevation-5",attrs:{app:"",dense:"",color:"gray darken-4",dark:""}},[a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-spacer",{staticClass:"hidden-sm-and-down"}),a("v-btn",{staticClass:"hidden-sm-and-down mx-2",attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.loginWindow=!0}}},[t._v("LOGIN")]),a("v-btn",{staticClass:"hidden-sm-and-down mx-2",attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.signupWindow=!0}}},[t._v("SIGN UP")]),a("login",{attrs:{dialog:t.loginWindow},on:{closeLogin:t.closeLogin}}),a("signup",{attrs:{dialog:t.signupWindow},on:{closeSignup:t.closeSignup}})],1)],1)},c=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{staticClass:"elevation-5",attrs:{color:"deep-orange darken-4",prominent:"",dark:""}},[a("v-toolbar-title",{staticClass:"display-1 mx-4"},[t._v("Login")])],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",label:"Email","prepend-inner-icon":"mdi-email",required:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",label:"Password","prepend-inner-icon":"mdi-key",type:"password",required:""}})],1)],1)],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"deep-orange darken-1",text:""},on:{click:t.closeLogin}},[t._v("Close")]),a("v-btn",{attrs:{color:"deep-orange darken-1",text:""}},[t._v("Submit")])],1)],1)],1)},u=[],p={name:"Login",data(){return{}},props:{dialog:Boolean},components:{},methods:{closeLogin(){this.$emit("closeLogin",!1)}}},m=p,v=a("2877"),f=a("6544"),g=a.n(f),b=a("8336"),h=a("b0af"),w=a("99d9"),x=a("62ad"),_=a("a523"),k=a("169a"),V=a("0fd9"),y=a("8654"),C=a("71d9"),S=a("2a7f"),L=Object(v["a"])(m,d,u,!1,null,null,null),O=L.exports;g()(L,{VBtn:b["a"],VCard:h["a"],VCardActions:w["a"],VCardText:w["b"],VCol:x["a"],VContainer:_["a"],VDialog:k["a"],VRow:V["a"],VTextField:y["a"],VToolbar:C["a"],VToolbarTitle:S["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{staticClass:"elevation-5",attrs:{color:"deep-orange darken-4",prominent:"",dark:""}},[a("v-toolbar-title",{staticClass:"display-1 mx-4"},[t._v("Sign up")])],1),a("v-alert",{staticClass:"ma-1",attrs:{type:"error",dense:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v("\n        "+t._s(t.err_msg)+"\n      ")]),a("v-alert",{staticClass:"ma-1",attrs:{type:"success",dense:""},model:{value:t.success,callback:function(e){t.success=e},expression:"success"}},[t._v("\n        "+t._s(t.succ_msg)+"\n      ")]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{outlined:"",label:"First Name",required:""},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{outlined:"",label:"Last Name",required:""},model:{value:t.last_name,callback:function(e){t.last_name=e},expression:"last_name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",label:"Email","prepend-inner-icon":"mdi-email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",label:"Password","prepend-inner-icon":"mdi-key",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeSignup}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.signup}},[t._v("Submit")])],1)],1)],1)},j=[],P=a("bc3a"),A=a.n(P),W={name:"Signup",data(){return{first_name:"",last_name:"",email:"",password:"",err_msg:"",succ_msg:"",alert:!1,success:!1}},props:{dialog:Boolean},components:{},methods:{closeSignup(){this.$emit("closeSignup",!1)},signup(){this.alert=!1,this.success=!1,A.a.post("http://127.0.0.1:5000/signup",{first_name:this.first_name,last_name:this.last_name,email:this.email,password:this.password}).then(t=>{this.succ_msg="Account successfully created!",this.success=!0}).catch(t=>{this.err_msg=t.response.data,this.alert=!0})}}},E=W,I=a("0798"),N=Object(v["a"])(E,T,j,!1,null,null,null),$=N.exports;g()(N,{VAlert:I["a"],VBtn:b["a"],VCard:h["a"],VCardActions:w["a"],VCardText:w["b"],VCol:x["a"],VContainer:_["a"],VDialog:k["a"],VRow:V["a"],VTextField:y["a"],VToolbar:C["a"],VToolbarTitle:S["a"]});var M={name:"AppNavigation",data(){return{drawer:!1,loginWindow:!1,signupWindow:!1,items:[{title:"Login",icon:"mdi-account-key"},{title:"Sign Up",icon:"mdi-account-plus"}]}},components:{Login:O,Signup:$},methods:{closeLogin(t){this.loginWindow=t},closeSignup(t){this.signupWindow=t},closeWindow(t){"Login"===t?this.loginWindow=!0:"Sign Up"===t&&(this.signupWindow=!0)}}},q=M,B=a("40dc"),U=a("5bc1"),D=a("132d"),F=a("8860"),G=a("da13"),R=a("5d23"),J=a("34c3"),z=a("f774"),Q=a("2fa4"),Y=Object(v["a"])(q,l,c,!1,null,"57a8a593",null),H=Y.exports;g()(Y,{VAppBar:B["a"],VAppBarNavIcon:U["a"],VBtn:b["a"],VIcon:D["a"],VList:F["a"],VListItem:G["a"],VListItemContent:R["a"],VListItemIcon:J["a"],VListItemTitle:R["b"],VNavigationDrawer:z["a"],VSpacer:Q["a"]});var K={name:"App",components:{AppNavigation:H}},X=K,Z=a("7496"),tt=a("a75b"),et=Object(v["a"])(X,s,r,!1,null,null,null),at=et.exports;g()(et,{VApp:Z["a"],VContent:tt["a"]});var nt=a("8c4f"),ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("welcome")],1)},it=[],st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"welcome",staticStyle:{"max-height":"100vh"},attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[a("div",{staticClass:"display-2 font-weight-black white--text text-xs-center mb-3",attrs:{id:"content"}},[t._v("AQUARIUM MANAGEMENT SYSTEM")]),a("div",{staticClass:"headline font-weight-bold white--text text-xs-center",attrs:{id:"content"}},[t._v("The all-in-one solution for remote aquarium management.")])])],1)},rt=[],lt={name:"welcome"},ct=lt,dt=(a("6cd9"),a("a722")),ut=Object(v["a"])(ct,st,rt,!1,null,"ddaed516",null),pt=ut.exports;g()(ut,{VContainer:_["a"],VLayout:dt["a"]});var mt={name:"home",components:{Welcome:pt}},vt=mt,ft=Object(v["a"])(vt,ot,it,!1,null,null,null),gt=ft.exports;n["a"].use(nt["a"]);var bt=new nt["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:gt}]});n["a"].config.productionTip=!1,new n["a"]({router:bt,vuetify:i,render:t=>t(at)}).$mount("#app")},"6cd9":function(t,e,a){"use strict";var n=a("b5a0"),o=a.n(n);o.a},b5a0:function(t,e,a){}});
//# sourceMappingURL=app.19f7b96a.js.map