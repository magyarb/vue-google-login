!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VueGoogleLogin=n():t.VueGoogleLogin=n()}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n){},function(t,n){},function(t,n,e){"use strict";var o=e(0);e.n(o).a},function(t,n,e){"use strict";var o=e(1);e.n(o).a},function(t,n,e){"use strict";e.r(n);var o=function(){var t=this.$createElement;return(this._self._c||t)("button",{on:{click:this.signIn}},[this._v("Login")])};o._withStripped=!0;var r=function(t,n){return window.auth2?t[n]():Promise.reject({err:"Script not loaded yet or not loaded correctly"})},i=function(t){!function(t){!window.onGapiLoad&&t&&(window.onGapiLoad=function(){window.gapi.load("auth2",function(){window.auth2=window.gapi.auth2.init({client_id:t})})})}(t),function(){if(!document.getElementById("auth2_script_id")){var t=document.createElement("script");t.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),t.setAttribute("async",!0),t.setAttribute("defer","defer"),t.setAttribute("id","auth2_script_id"),document.head.appendChild(t)}}()},u=function(){return r(window.auth2,"signIn")},c={name:"LoginButton",props:{client_id:String,onSuccess:Function,onFailure:Function},methods:{signIn:function(){var t=this;u().then(function(n){return t.onSuccess(n)}).catch(function(n){return t.onFailure(n)})}},mounted:function(){i(this.client_id)}};e(2);function s(t,n,e,o,r,i,u,c){var s,a="function"==typeof t?t.options:t;if(n&&(a.render=n,a.staticRenderFns=e,a._compiled=!0),o&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},a._ssrRegister=s):r&&(s=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),s)if(a.functional){a._injectStyles=s;var d=a.render;a.render=function(t,n){return s.call(n),d(t,n)}}else{var f=a.beforeCreate;a.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:a}}var a=s(c,o,[],!1,null,null,null);a.options.__file="src/LoginButton.vue";var d=a.exports,f=function(){var t=this.$createElement;return(this._self._c||t)("div")};f._withStripped=!0;var l={name:"LogoutButton"},p=(e(3),s(l,f,[],!1,null,null,null));p.options.__file="src/LogoutButton.vue";var _=p.exports;e.d(n,"LoginButton",function(){return d}),e.d(n,"LogoutButton",function(){return _})}])});