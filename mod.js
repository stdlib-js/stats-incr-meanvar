// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=Math.floor;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(e=t.length,n(e)===e)&&t.length>=0&&t.length<=4294967295;var e}function e(n){return n!=n}function r(){var n,t=arguments,e=t[0],r="https://stdlib.io/e/"+e+"?";for(n=1;n<t.length;n++)r+="&arg[]="+encodeURIComponent(t[n]);return r}function o(n){var o,l,u,f,a;if(0===arguments.length)o=[0,0];else{if(!t(n))throw new TypeError(r("0drAC",n));o=n}return f=0,u=0,a=0,h;function h(n){return 0===arguments.length?0===a?null:(o[0]=u,1===a?(e(f)?o[1]=NaN:o[1]=0,o):(o[1]=f/(a-1),o)):(f+=(l=n-u)*(n-(u+=l/(a+=1))),o[0]=u,a<2?(e(f)?o[1]=NaN:o[1]=0,o):(o[1]=f/(a-1),o))}}export{o as default};
//# sourceMappingURL=mod.js.map
