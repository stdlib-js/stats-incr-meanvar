// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function r(r){var n,i,o,d,m;if(0===arguments.length)n=[0,0];else{if(!t(r))throw new TypeError(e("0drAC",r));n=r}return d=0,o=0,m=0,l;function l(t){return 0===arguments.length?0===m?null:(n[0]=o,1===m?(s(d)?n[1]=NaN:n[1]=0,n):(n[1]=d/(m-1),n)):(d+=(i=t-o)*(t-(o+=i/(m+=1))),n[0]=o,m<2?(s(d)?n[1]=NaN:n[1]=0,n):(n[1]=d/(m-1),n))}}export{r as default};
//# sourceMappingURL=index.mjs.map
