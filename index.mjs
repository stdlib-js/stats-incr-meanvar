// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var e=r,n=t,i=s;var o=function(r){var t,s,o,d,m;if(0===arguments.length)t=[0,0];else{if(!e(r))throw new TypeError(i("0drAC",r));t=r}return d=0,o=0,m=0,a;function a(r){return 0===arguments.length?0===m?null:(t[0]=o,1===m?(n(d)?t[1]=NaN:t[1]=0,t):(t[1]=d/(m-1),t)):(d+=(s=r-o)*(r-(o+=s/(m+=1))),t[0]=o,m<2?(n(d)?t[1]=NaN:t[1]=0,t):(t[1]=d/(m-1),t))}};export{o as default};
//# sourceMappingURL=index.mjs.map
