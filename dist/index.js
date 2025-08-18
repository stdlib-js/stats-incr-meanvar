"use strict";var m=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var v=m(function(q,l){
var c=require('@stdlib/assert-is-array-like-object/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function g(t){var r,i,a,n,e;if(arguments.length===0)r=[0,0];else{if(!c(t))throw new TypeError(o('1Hv9a',t));r=t}return n=0,a=0,e=0,f;function f(u){return arguments.length===0?e===0?null:(r[0]=a,e===1?(s(n)?r[1]=NaN:r[1]=0,r):(r[1]=n/(e-1),r)):(e+=1,i=u-a,a+=i/e,n+=i*(u-a),r[0]=a,e<2?(s(n)?r[1]=NaN:r[1]=0,r):(r[1]=n/(e-1),r))}}l.exports=g
});var N=v();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
