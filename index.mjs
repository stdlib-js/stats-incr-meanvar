// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=t,n=e,i=r;var a=function(t){var e,r,a,m,l;if(0===arguments.length)e=[0,0];else{if(!s(t))throw new TypeError(i("invalid argument. Output argument must be an array-like object. Value: `%s`.",t));e=t}return m=0,a=0,l=0,d;function d(t){return 0===arguments.length?0===l?null:(e[0]=a,1===l?(n(m)?e[1]=NaN:e[1]=0,e):(e[1]=m/(l-1),e)):(m+=(r=t-a)*(t-(a+=r/(l+=1))),e[0]=a,l<2?(n(m)?e[1]=NaN:e[1]=0,e):(e[1]=m/(l-1),e))}};export{a as default};
//# sourceMappingURL=index.mjs.map
