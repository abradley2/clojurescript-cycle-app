var fr=Object.create;var it=Object.defineProperty;var cr=Object.getOwnPropertyDescriptor;var yr=Object.getOwnPropertyNames;var hr=Object.getPrototypeOf,lr=Object.prototype.hasOwnProperty;var c=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var vr=(r,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of yr(t))!lr.call(r,n)&&n!==e&&it(r,n,{get:()=>t[n],enumerable:!(o=cr(t,n))||o.enumerable});return r};var st=(r,t,e)=>(e=r!=null?fr(hr(r)):{},vr(t||!r||!r.__esModule?it(e,"default",{value:r,enumerable:!0}):e,r));var at=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.default=_r;function _r(r){var t,e=r.Symbol;if(typeof e=="function")if(e.observable)t=e.observable;else{t=e.for("https://github.com/benlesh/symbol-observable");try{e.observable=t}catch(o){}}else t="@@observable";return t}});var pt=c((Fe,ut)=>{ut.exports=at()});var L=c((ke,ct)=>{"use strict";var ft=Object.prototype.toString;ct.exports=function(t){var e=ft.call(t),o=e==="[object Arguments]";return o||(o=e!=="[object Array]"&&t!==null&&typeof t=="object"&&typeof t.length=="number"&&t.length>=0&&ft.call(t.callee)==="[object Function]"),o}});var gt=c((Re,bt)=>{"use strict";var mt;Object.keys||(x=Object.prototype.hasOwnProperty,G=Object.prototype.toString,yt=L(),q=Object.prototype.propertyIsEnumerable,ht=!q.call({toString:null},"toString"),lt=q.call(function(){},"prototype"),j=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],N=function(r){var t=r.constructor;return t&&t.prototype===r},vt={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},_t=function(){if(typeof window=="undefined")return!1;for(var r in window)try{if(!vt["$"+r]&&x.call(window,r)&&window[r]!==null&&typeof window[r]=="object")try{N(window[r])}catch(t){return!0}}catch(t){return!0}return!1}(),dt=function(r){if(typeof window=="undefined"||!_t)return N(r);try{return N(r)}catch(t){return!1}},mt=function(t){var e=t!==null&&typeof t=="object",o=G.call(t)==="[object Function]",n=yt(t),s=e&&G.call(t)==="[object String]",p=[];if(!e&&!o&&!n)throw new TypeError("Object.keys called on a non-object");var a=lt&&o;if(s&&t.length>0&&!x.call(t,0))for(var f=0;f<t.length;++f)p.push(String(f));if(n&&t.length>0)for(var l=0;l<t.length;++l)p.push(String(l));else for(var y in t)!(a&&y==="prototype")&&x.call(t,y)&&p.push(String(y));if(ht)for(var d=dt(t),v=0;v<j.length;++v)!(d&&j[v]==="constructor")&&x.call(t,j[v])&&p.push(j[v]);return p});var x,G,yt,q,ht,lt,j,N,vt,_t,dt;bt.exports=mt});var Pt=c((Ne,At)=>{"use strict";var dr=Array.prototype.slice,mr=L(),wt=Object.keys,D=wt?function(t){return wt(t)}:gt(),St=Object.keys;D.shim=function(){if(Object.keys){var t=function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2);t||(Object.keys=function(o){return mr(o)?St(dr.call(o)):St(o)})}else Object.keys=D;return Object.keys||D};At.exports=D});var Et=c((De,Ot)=>{"use strict";Ot.exports=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var t={},e=Symbol("test"),o=Object(e);if(typeof e=="string"||Object.prototype.toString.call(e)!=="[object Symbol]"||Object.prototype.toString.call(o)!=="[object Symbol]")return!1;var n=42;t[e]=n;for(e in t)return!1;if(typeof Object.keys=="function"&&Object.keys(t).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(t).length!==0)return!1;var s=Object.getOwnPropertySymbols(t);if(s.length!==1||s[0]!==e||!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var p=Object.getOwnPropertyDescriptor(t,e);if(p.value!==n||p.enumerable!==!0)return!1}return!0}});var It=c((Te,jt)=>{"use strict";var xt=typeof Symbol!="undefined"&&Symbol,br=Et();jt.exports=function(){return typeof xt!="function"||typeof Symbol!="function"||typeof xt("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:br()}});var kt=c(($e,Ft)=>{"use strict";var gr="Function.prototype.bind called on incompatible ",B=Array.prototype.slice,wr=Object.prototype.toString,Sr="[object Function]";Ft.exports=function(t){var e=this;if(typeof e!="function"||wr.call(e)!==Sr)throw new TypeError(gr+e);for(var o=B.call(arguments,1),n,s=function(){if(this instanceof n){var y=e.apply(this,o.concat(B.call(arguments)));return Object(y)===y?y:this}else return e.apply(t,o.concat(B.call(arguments)))},p=Math.max(0,e.length-o.length),a=[],f=0;f<p;f++)a.push("$"+f);if(n=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(s),e.prototype){var l=function(){};l.prototype=e.prototype,n.prototype=new l,l.prototype=null}return n}});var z=c((Me,Rt)=>{"use strict";var Ar=kt();Rt.exports=Function.prototype.bind||Ar});var Dt=c((Ue,Nt)=>{"use strict";var Pr=z();Nt.exports=Pr.call(Function.call,Object.prototype.hasOwnProperty)});var Wt=c((We,Ut)=>{"use strict";var u,E=SyntaxError,Mt=Function,P=TypeError,J=function(r){try{return Mt('"use strict"; return ('+r+").constructor;")()}catch(t){}},g=Object.getOwnPropertyDescriptor;if(g)try{g({},"")}catch(r){g=null}var V=function(){throw new P},Or=g?function(){try{return arguments.callee,V}catch(r){try{return g(arguments,"callee").get}catch(t){return V}}}():V,S=It()(),m=Object.getPrototypeOf||function(r){return r.__proto__},A={},Er=typeof Uint8Array=="undefined"?u:m(Uint8Array),O={"%AggregateError%":typeof AggregateError=="undefined"?u:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?u:ArrayBuffer,"%ArrayIteratorPrototype%":S?m([][Symbol.iterator]()):u,"%AsyncFromSyncIteratorPrototype%":u,"%AsyncFunction%":A,"%AsyncGenerator%":A,"%AsyncGeneratorFunction%":A,"%AsyncIteratorPrototype%":A,"%Atomics%":typeof Atomics=="undefined"?u:Atomics,"%BigInt%":typeof BigInt=="undefined"?u:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?u:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?u:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?u:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?u:FinalizationRegistry,"%Function%":Mt,"%GeneratorFunction%":A,"%Int8Array%":typeof Int8Array=="undefined"?u:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?u:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?u:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":S?m(m([][Symbol.iterator]())):u,"%JSON%":typeof JSON=="object"?JSON:u,"%Map%":typeof Map=="undefined"?u:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!S?u:m(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?u:Promise,"%Proxy%":typeof Proxy=="undefined"?u:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?u:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?u:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!S?u:m(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?u:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":S?m(""[Symbol.iterator]()):u,"%Symbol%":S?Symbol:u,"%SyntaxError%":E,"%ThrowTypeError%":Or,"%TypedArray%":Er,"%TypeError%":P,"%Uint8Array%":typeof Uint8Array=="undefined"?u:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?u:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?u:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?u:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?u:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?u:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?u:WeakSet},xr=function r(t){var e;if(t==="%AsyncFunction%")e=J("async function () {}");else if(t==="%GeneratorFunction%")e=J("function* () {}");else if(t==="%AsyncGeneratorFunction%")e=J("async function* () {}");else if(t==="%AsyncGenerator%"){var o=r("%AsyncGeneratorFunction%");o&&(e=o.prototype)}else if(t==="%AsyncIteratorPrototype%"){var n=r("%AsyncGenerator%");n&&(e=m(n.prototype))}return O[t]=e,e},Tt={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},I=z(),T=Dt(),jr=I.call(Function.call,Array.prototype.concat),Ir=I.call(Function.apply,Array.prototype.splice),$t=I.call(Function.call,String.prototype.replace),$=I.call(Function.call,String.prototype.slice),Fr=I.call(Function.call,RegExp.prototype.exec),kr=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Rr=/\\(\\)?/g,Nr=function(t){var e=$(t,0,1),o=$(t,-1);if(e==="%"&&o!=="%")throw new E("invalid intrinsic syntax, expected closing `%`");if(o==="%"&&e!=="%")throw new E("invalid intrinsic syntax, expected opening `%`");var n=[];return $t(t,kr,function(s,p,a,f){n[n.length]=a?$t(f,Rr,"$1"):p||s}),n},Dr=function(t,e){var o=t,n;if(T(Tt,o)&&(n=Tt[o],o="%"+n[0]+"%"),T(O,o)){var s=O[o];if(s===A&&(s=xr(o)),typeof s=="undefined"&&!e)throw new P("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:n,name:o,value:s}}throw new E("intrinsic "+t+" does not exist!")};Ut.exports=function(t,e){if(typeof t!="string"||t.length===0)throw new P("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof e!="boolean")throw new P('"allowMissing" argument must be a boolean');if(Fr(/^%?[^%]*%?$/,t)===null)throw new E("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var o=Nr(t),n=o.length>0?o[0]:"",s=Dr("%"+n+"%",e),p=s.name,a=s.value,f=!1,l=s.alias;l&&(n=l[0],Ir(o,jr([0,1],l)));for(var y=1,d=!0;y<o.length;y+=1){var v=o[y],F=$(v,0,1),k=$(v,-1);if((F==='"'||F==="'"||F==="`"||k==='"'||k==="'"||k==="`")&&F!==k)throw new E("property names with quotes must have matching quotes");if((v==="constructor"||!d)&&(f=!0),n+="."+v,p="%"+n+"%",T(O,p))a=O[p];else if(a!=null){if(!(v in a)){if(!e)throw new P("base intrinsic for "+t+" exists, but the property is not available.");return}if(g&&y+1>=o.length){var R=g(a,v);d=!!R,d&&"get"in R&&!("originalValue"in R.get)?a=R.get:a=a[v]}else d=T(a,v),a=a[v];d&&!f&&(O[p]=a)}}return a}});var Lt=c((Ce,Ct)=>{"use strict";var Tr=Wt(),H=Tr("%Object.defineProperty%",!0),Y=function(){if(H)try{return H({},"a",{value:1}),!0}catch(t){return!1}return!1};Y.hasArrayLengthDefineBug=function(){if(!Y())return null;try{return H([],"length",{value:1}).length!==1}catch(t){return!0}};Ct.exports=Y});var K=c((Le,zt)=>{"use strict";var $r=Pt(),Mr=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",Ur=Object.prototype.toString,Wr=Array.prototype.concat,Gt=Object.defineProperty,Cr=function(r){return typeof r=="function"&&Ur.call(r)==="[object Function]"},Lr=Lt()(),qt=Gt&&Lr,Gr=function(r,t,e,o){t in r&&(!Cr(o)||!o())||(qt?Gt(r,t,{configurable:!0,enumerable:!1,value:e,writable:!0}):r[t]=e)},Bt=function(r,t){var e=arguments.length>2?arguments[2]:{},o=$r(t);Mr&&(o=Wr.call(o,Object.getOwnPropertySymbols(t)));for(var n=0;n<o.length;n+=1)Gr(r,o[n],t[o[n]],e[o[n]])};Bt.supportsDescriptors=!!qt;zt.exports=Bt});var X=c((Ge,M)=>{"use strict";typeof self!="undefined"?M.exports=self:typeof window!="undefined"?M.exports=window:M.exports=Function("return this")()});var Q=c((qe,Jt)=>{"use strict";var qr=X();Jt.exports=function(){return typeof global!="object"||!global||global.Math!==Math||global.Array!==Array?qr:global}});var Ht=c((Be,Vt)=>{"use strict";var Br=K(),zr=Q();Vt.exports=function(){var t=zr();if(Br.supportsDescriptors){var e=Object.getOwnPropertyDescriptor(t,"globalThis");(!e||e.configurable&&(e.enumerable||!e.writable||globalThis!==t))&&Object.defineProperty(t,"globalThis",{configurable:!0,enumerable:!1,value:t,writable:!0})}else(typeof globalThis!="object"||globalThis!==t)&&(t.globalThis=t);return t}});var Qt=c((ze,Xt)=>{"use strict";var Jr=K(),Vr=X(),Yt=Q(),Hr=Ht(),Yr=Yt(),Kt=function(){return Yr};Jr(Kt,{getPolyfill:Yt,implementation:Vr,shim:Hr});Xt.exports=Kt});var tr=c(_=>{"use strict";var Kr=_&&_.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s])},r(t,e)};return function(t,e){r(t,e);function o(){this.constructor=t}t.prototype=e===null?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(_,"__esModule",{value:!0});_.NO_IL=_.NO=_.MemoryStream=_.Stream=void 0;var Xr=pt(),Qr=Qt(),U=Xr.default(Qr.getPolyfill()),i={};_.NO=i;function h(){}function W(r){for(var t=r.length,e=Array(t),o=0;o<t;++o)e[o]=r[o];return e}function Zr(r,t){return function(o){return r(o)&&t(o)}}function tt(r,t,e){try{return r.f(t)}catch(o){return e._e(o),i}}var w={_n:h,_e:h,_c:h};_.NO_IL=w;function Zt(r){r._start=function(e){e.next=e._n,e.error=e._e,e.complete=e._c,this.start(e)},r._stop=r.stop}var te=function(){function r(t,e){this._stream=t,this._listener=e}return r.prototype.unsubscribe=function(){this._stream._remove(this._listener)},r}(),re=function(){function r(t){this._listener=t}return r.prototype.next=function(t){this._listener._n(t)},r.prototype.error=function(t){this._listener._e(t)},r.prototype.complete=function(){this._listener._c()},r}(),ee=function(){function r(t){this.type="fromObservable",this.ins=t,this.active=!1}return r.prototype._start=function(t){this.out=t,this.active=!0,this._sub=this.ins.subscribe(new re(t)),this.active||this._sub.unsubscribe()},r.prototype._stop=function(){this._sub&&this._sub.unsubscribe(),this.active=!1},r}(),oe=function(){function r(t){this.type="merge",this.insArr=t,this.out=i,this.ac=0}return r.prototype._start=function(t){this.out=t;var e=this.insArr,o=e.length;this.ac=o;for(var n=0;n<o;n++)e[n]._add(this)},r.prototype._stop=function(){for(var t=this.insArr,e=t.length,o=0;o<e;o++)t[o]._remove(this);this.out=i},r.prototype._n=function(t){var e=this.out;e!==i&&e._n(t)},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){if(--this.ac<=0){var t=this.out;if(t===i)return;t._c()}},r}(),ne=function(){function r(t,e,o){this.i=t,this.out=e,this.p=o,o.ils.push(this)}return r.prototype._n=function(t){var e=this.p,o=this.out;if(o!==i&&e.up(t,this.i)){var n=W(e.vals);o._n(n)}},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){var t=this.p;t.out!==i&&--t.Nc===0&&t.out._c()},r}(),ie=function(){function r(t){this.type="combine",this.insArr=t,this.out=i,this.ils=[],this.Nc=this.Nn=0,this.vals=[]}return r.prototype.up=function(t,e){var o=this.vals[e],n=this.Nn?o===i?--this.Nn:this.Nn:0;return this.vals[e]=t,n===0},r.prototype._start=function(t){this.out=t;var e=this.insArr,o=this.Nc=this.Nn=e.length,n=this.vals=new Array(o);if(o===0)t._n([]),t._c();else for(var s=0;s<o;s++)n[s]=i,e[s]._add(new ne(s,t,this))},r.prototype._stop=function(){for(var t=this.insArr,e=t.length,o=this.ils,n=0;n<e;n++)t[n]._remove(o[n]);this.out=i,this.ils=[],this.vals=[]},r}(),se=function(){function r(t){this.type="fromArray",this.a=t}return r.prototype._start=function(t){for(var e=this.a,o=0,n=e.length;o<n;o++)t._n(e[o]);t._c()},r.prototype._stop=function(){},r}(),ae=function(){function r(t){this.type="fromPromise",this.on=!1,this.p=t}return r.prototype._start=function(t){var e=this;this.on=!0,this.p.then(function(o){e.on&&(t._n(o),t._c())},function(o){t._e(o)}).then(h,function(o){setTimeout(function(){throw o})})},r.prototype._stop=function(){this.on=!1},r}(),ue=function(){function r(t){this.type="periodic",this.period=t,this.intervalID=-1,this.i=0}return r.prototype._start=function(t){var e=this;function o(){t._n(e.i++)}this.intervalID=setInterval(o,this.period)},r.prototype._stop=function(){this.intervalID!==-1&&clearInterval(this.intervalID),this.intervalID=-1,this.i=0},r}(),pe=function(){function r(t,e){this.type="debug",this.ins=t,this.out=i,this.s=h,this.l="",typeof e=="string"?this.l=e:typeof e=="function"&&(this.s=e)}return r.prototype._start=function(t){this.out=t,this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.out=i},r.prototype._n=function(t){var e=this.out;if(e!==i){var o=this.s,n=this.l;if(o!==h)try{o(t)}catch(s){e._e(s)}else n?console.log(n+":",t):console.log(t);e._n(t)}},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){var t=this.out;t!==i&&t._c()},r}(),fe=function(){function r(t,e){this.type="drop",this.ins=e,this.out=i,this.max=t,this.dropped=0}return r.prototype._start=function(t){this.out=t,this.dropped=0,this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.out=i},r.prototype._n=function(t){var e=this.out;e!==i&&this.dropped++>=this.max&&e._n(t)},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){var t=this.out;t!==i&&t._c()},r}(),ce=function(){function r(t,e){this.out=t,this.op=e}return r.prototype._n=function(){this.op.end()},r.prototype._e=function(t){this.out._e(t)},r.prototype._c=function(){this.op.end()},r}(),ye=function(){function r(t,e){this.type="endWhen",this.ins=e,this.out=i,this.o=t,this.oil=w}return r.prototype._start=function(t){this.out=t,this.o._add(this.oil=new ce(t,this)),this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.o._remove(this.oil),this.out=i,this.oil=w},r.prototype.end=function(){var t=this.out;t!==i&&t._c()},r.prototype._n=function(t){var e=this.out;e!==i&&e._n(t)},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){this.end()},r}(),Z=function(){function r(t,e){this.type="filter",this.ins=e,this.out=i,this.f=t}return r.prototype._start=function(t){this.out=t,this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.out=i},r.prototype._n=function(t){var e=this.out;if(e!==i){var o=tt(this,t,e);o===i||!o||e._n(t)}},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){var t=this.out;t!==i&&t._c()},r}(),he=function(){function r(t,e){this.out=t,this.op=e}return r.prototype._n=function(t){this.out._n(t)},r.prototype._e=function(t){this.out._e(t)},r.prototype._c=function(){this.op.inner=i,this.op.less()},r}(),le=function(){function r(t){this.type="flatten",this.ins=t,this.out=i,this.open=!0,this.inner=i,this.il=w}return r.prototype._start=function(t){this.out=t,this.open=!0,this.inner=i,this.il=w,this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.inner!==i&&this.inner._remove(this.il),this.out=i,this.open=!0,this.inner=i,this.il=w},r.prototype.less=function(){var t=this.out;t!==i&&!this.open&&this.inner===i&&t._c()},r.prototype._n=function(t){var e=this.out;if(e!==i){var o=this,n=o.inner,s=o.il;n!==i&&s!==w&&n._remove(s),(this.inner=t)._add(this.il=new he(e,this))}},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){this.open=!1,this.less()},r}(),ve=function(){function r(t,e,o){var n=this;this.type="fold",this.ins=o,this.out=i,this.f=function(s){return t(n.acc,s)},this.acc=this.seed=e}return r.prototype._start=function(t){this.out=t,this.acc=this.seed,t._n(this.acc),this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.out=i,this.acc=this.seed},r.prototype._n=function(t){var e=this.out;if(e!==i){var o=tt(this,t,e);o!==i&&e._n(this.acc=o)}},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){var t=this.out;t!==i&&t._c()},r}(),_e=function(){function r(t){this.type="last",this.ins=t,this.out=i,this.has=!1,this.val=i}return r.prototype._start=function(t){this.out=t,this.has=!1,this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.out=i,this.val=i},r.prototype._n=function(t){this.has=!0,this.val=t},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){var t=this.out;t!==i&&(this.has?(t._n(this.val),t._c()):t._e(new Error("last() failed because input stream completed")))},r}(),de=function(){function r(t,e){this.type="map",this.ins=e,this.out=i,this.f=t}return r.prototype._start=function(t){this.out=t,this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.out=i},r.prototype._n=function(t){var e=this.out;if(e!==i){var o=tt(this,t,e);o!==i&&e._n(o)}},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){var t=this.out;t!==i&&t._c()},r}(),me=function(){function r(t){this.type="remember",this.ins=t,this.out=i}return r.prototype._start=function(t){this.out=t,this.ins._add(t)},r.prototype._stop=function(){this.ins._remove(this.out),this.out=i},r}(),be=function(){function r(t,e){this.type="replaceError",this.ins=e,this.out=i,this.f=t}return r.prototype._start=function(t){this.out=t,this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.out=i},r.prototype._n=function(t){var e=this.out;e!==i&&e._n(t)},r.prototype._e=function(t){var e=this.out;if(e!==i)try{this.ins._remove(this),(this.ins=this.f(t))._add(this)}catch(o){e._e(o)}},r.prototype._c=function(){var t=this.out;t!==i&&t._c()},r}(),ge=function(){function r(t,e){this.type="startWith",this.ins=t,this.out=i,this.val=e}return r.prototype._start=function(t){this.out=t,this.out._n(this.val),this.ins._add(t)},r.prototype._stop=function(){this.ins._remove(this.out),this.out=i},r}(),we=function(){function r(t,e){this.type="take",this.ins=e,this.out=i,this.max=t,this.taken=0}return r.prototype._start=function(t){this.out=t,this.taken=0,this.max<=0?t._c():this.ins._add(this)},r.prototype._stop=function(){this.ins._remove(this),this.out=i},r.prototype._n=function(t){var e=this.out;if(e!==i){var o=++this.taken;o<this.max?e._n(t):o===this.max&&(e._n(t),e._c())}},r.prototype._e=function(t){var e=this.out;e!==i&&e._e(t)},r.prototype._c=function(){var t=this.out;t!==i&&t._c()},r}(),rt=function(){function r(t){this._prod=t||i,this._ils=[],this._stopID=i,this._dl=i,this._d=!1,this._target=null,this._err=i}return r.prototype._n=function(t){var e=this._ils,o=e.length;if(this._d&&this._dl._n(t),o==1)e[0]._n(t);else{if(o==0)return;for(var n=W(e),s=0;s<o;s++)n[s]._n(t)}},r.prototype._e=function(t){if(this._err===i){this._err=t;var e=this._ils,o=e.length;if(this._x(),this._d&&this._dl._e(t),o==1)e[0]._e(t);else{if(o==0)return;for(var n=W(e),s=0;s<o;s++)n[s]._e(t)}if(!this._d&&o==0)throw this._err}},r.prototype._c=function(){var t=this._ils,e=t.length;if(this._x(),this._d&&this._dl._c(),e==1)t[0]._c();else{if(e==0)return;for(var o=W(t),n=0;n<e;n++)o[n]._c()}},r.prototype._x=function(){this._ils.length!==0&&(this._prod!==i&&this._prod._stop(),this._err=i,this._ils=[])},r.prototype._stopNow=function(){this._prod._stop(),this._err=i,this._stopID=i},r.prototype._add=function(t){var e=this._target;if(e)return e._add(t);var o=this._ils;if(o.push(t),!(o.length>1))if(this._stopID!==i)clearTimeout(this._stopID),this._stopID=i;else{var n=this._prod;n!==i&&n._start(this)}},r.prototype._remove=function(t){var e=this,o=this._target;if(o)return o._remove(t);var n=this._ils,s=n.indexOf(t);s>-1&&(n.splice(s,1),this._prod!==i&&n.length<=0?(this._err=i,this._stopID=setTimeout(function(){return e._stopNow()})):n.length===1&&this._pruneCycles())},r.prototype._pruneCycles=function(){this._hasNoSinks(this,[])&&this._remove(this._ils[0])},r.prototype._hasNoSinks=function(t,e){if(e.indexOf(t)!==-1)return!0;if(t.out===this)return!0;if(t.out&&t.out!==i)return this._hasNoSinks(t.out,e.concat(t));if(t._ils){for(var o=0,n=t._ils.length;o<n;o++)if(!this._hasNoSinks(t._ils[o],e.concat(t)))return!1;return!0}else return!1},r.prototype.ctor=function(){return this instanceof b?b:r},r.prototype.addListener=function(t){t._n=t.next||h,t._e=t.error||h,t._c=t.complete||h,this._add(t)},r.prototype.removeListener=function(t){this._remove(t)},r.prototype.subscribe=function(t){return this.addListener(t),new te(this,t)},r.prototype[U]=function(){return this},r.create=function(t){if(t){if(typeof t.start!="function"||typeof t.stop!="function")throw new Error("producer requires both start and stop functions");Zt(t)}return new r(t)},r.createWithMemory=function(t){return t&&Zt(t),new b(t)},r.never=function(){return new r({_start:h,_stop:h})},r.empty=function(){return new r({_start:function(t){t._c()},_stop:h})},r.throw=function(t){return new r({_start:function(e){e._e(t)},_stop:h})},r.from=function(t){if(typeof t[U]=="function")return r.fromObservable(t);if(typeof t.then=="function")return r.fromPromise(t);if(Array.isArray(t))return r.fromArray(t);throw new TypeError("Type of input to from() must be an Array, Promise, or Observable")},r.of=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.fromArray(t)},r.fromArray=function(t){return new r(new se(t))},r.fromPromise=function(t){return new r(new ae(t))},r.fromObservable=function(t){if(t.endWhen!==void 0)return t;var e=typeof t[U]=="function"?t[U]():t;return new r(new ee(e))},r.periodic=function(t){return new r(new ue(t))},r.prototype._map=function(t){return new(this.ctor())(new de(t,this))},r.prototype.map=function(t){return this._map(t)},r.prototype.mapTo=function(t){var e=this.map(function(){return t}),o=e._prod;return o.type="mapTo",e},r.prototype.filter=function(t){var e=this._prod;return e instanceof Z?new r(new Z(Zr(e.f,t),e.ins)):new r(new Z(t,this))},r.prototype.take=function(t){return new(this.ctor())(new we(t,this))},r.prototype.drop=function(t){return new r(new fe(t,this))},r.prototype.last=function(){return new r(new _e(this))},r.prototype.startWith=function(t){return new b(new ge(this,t))},r.prototype.endWhen=function(t){return new(this.ctor())(new ye(t,this))},r.prototype.fold=function(t,e){return new b(new ve(t,e,this))},r.prototype.replaceError=function(t){return new(this.ctor())(new be(t,this))},r.prototype.flatten=function(){return new r(new le(this))},r.prototype.compose=function(t){return t(this)},r.prototype.remember=function(){return new b(new me(this))},r.prototype.debug=function(t){return new(this.ctor())(new pe(this,t))},r.prototype.imitate=function(t){if(t instanceof b)throw new Error("A MemoryStream was given to imitate(), but it only supports a Stream. Read more about this restriction here: https://github.com/staltz/xstream#faq");this._target=t;for(var e=this._ils,o=e.length,n=0;n<o;n++)t._add(e[n]);this._ils=[]},r.prototype.shamefullySendNext=function(t){this._n(t)},r.prototype.shamefullySendError=function(t){this._e(t)},r.prototype.shamefullySendComplete=function(){this._c()},r.prototype.setDebugListener=function(t){t?(this._d=!0,t._n=t.next||h,t._e=t.error||h,t._c=t.complete||h,this._dl=t):(this._d=!1,this._dl=i)},r.merge=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return new r(new oe(e))},r.combine=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return new r(new ie(e))},r}();_.Stream=rt;var b=function(r){Kr(t,r);function t(e){var o=r.call(this,e)||this;return o._has=!1,o}return t.prototype._n=function(e){this._v=e,this._has=!0,r.prototype._n.call(this,e)},t.prototype._add=function(e){var o=this._target;if(o)return o._add(e);var n=this._ils;if(n.push(e),n.length>1){this._has&&e._n(this._v);return}if(this._stopID!==i)this._has&&e._n(this._v),clearTimeout(this._stopID),this._stopID=i;else if(this._has)e._n(this._v);else{var s=this._prod;s!==i&&s._start(this)}},t.prototype._stopNow=function(){this._has=!1,r.prototype._stopNow.call(this)},t.prototype._x=function(){this._has=!1,r.prototype._x.call(this)},t.prototype.map=function(e){return this._map(e)},t.prototype.mapTo=function(e){return r.prototype.mapTo.call(this,e)},t.prototype.take=function(e){return r.prototype.take.call(this,e)},t.prototype.endWhen=function(e){return r.prototype.endWhen.call(this,e)},t.prototype.replaceError=function(e){return r.prototype.replaceError.call(this,e)},t.prototype.remember=function(){return this},t.prototype.debug=function(e){return r.prototype.debug.call(this,e)},t}(rt);_.MemoryStream=b;var Se=rt;_.default=Se});var rr=c(et=>{"use strict";Object.defineProperty(et,"__esModule",{value:!0});function Ae(){return typeof queueMicrotask!="undefined"?queueMicrotask:typeof setImmediate!="undefined"?setImmediate:typeof process!="undefined"?process.nextTick:setTimeout}et.default=Ae});var ot=st(tr()),or=st(rr());function Pe(){var r;return typeof window!="undefined"?r=window:typeof global!="undefined"?r=global:r=this,r.Cyclejs=r.Cyclejs||{},r=r.Cyclejs,r.adaptStream=r.adaptStream||function(t){return t},r}function er(r){return Pe().adaptStream(r)}function nr(r){var t={};for(var e in r)r.hasOwnProperty(e)&&(t[e]=ot.default.create());return t}function ir(r,t){var e={};for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o](t[o],o),e[o]&&typeof e[o]=="object"&&(e[o]._isCycleSource=o));return e}function sr(r){for(var t in r)r.hasOwnProperty(t)&&r[t]&&typeof r[t].shamefullySendNext=="function"&&(r[t]=er(r[t]));return r}function ar(r,t){var e=(0,or.default)(),o=Object.keys(r).filter(function(a){return!!t[a]}),n={},s={};o.forEach(function(a){n[a]={_n:[],_e:[]},s[a]={next:function(f){return n[a]._n.push(f)},error:function(f){return n[a]._e.push(f)},complete:function(){}}});var p=o.map(function(a){return ot.default.fromObservable(r[a]).subscribe(s[a])});return o.forEach(function(a){var f=t[a],l=function(d){e(function(){return f._n(d)})},y=function(d){e(function(){(console.error||console.log)(d),f._e(d)})};n[a]._n.forEach(l),n[a]._e.forEach(y),s[a].next=l,s[a].error=y,s[a]._n=l,s[a]._e=y}),n=null,function(){p.forEach(function(f){return f.unsubscribe()})}}function ur(r){Object.keys(r).forEach(function(t){return r[t]._c()})}function pr(r){for(var t in r)r.hasOwnProperty(t)&&r[t]&&r[t].dispose&&r[t].dispose()}function nt(r){return Object.keys(r).length===0}function Oe(r,t){if(typeof r!="function")throw new Error("First argument given to Cycle must be the 'main' function.");if(typeof t!="object"||t===null)throw new Error("Second argument given to Cycle must be an object with driver functions as properties.");if(nt(t))throw new Error("Second argument given to Cycle must be an object with at least one driver function declared as a property.");var e=Ee(t),o=r(e.sources);typeof window!="undefined"&&(window.Cyclejs=window.Cyclejs||{},window.Cyclejs.sinks=o);function n(){var s=e.run(o);return function(){s(),e.dispose()}}return{sinks:o,sources:e.sources,run:n}}function Ee(r){if(typeof r!="object"||r===null)throw new Error("Argument given to setupReusable must be an object with driver functions as properties.");if(nt(r))throw new Error("Argument given to setupReusable must be an object with at least one driver function declared as a property.");var t=nr(r),e=ir(r,t),o=sr(e);function n(p){return ar(p,t)}function s(){pr(o),ur(t)}return{sources:o,run:n,dispose:s}}function xe(r,t){var e=Oe(r,t);return typeof window!="undefined"&&window.CyclejsDevTool_startGraphSerializer&&window.CyclejsDevTool_startGraphSerializer(e.sinks),e.run()}var Qe=xe;export{Qe as default,xe as run,Oe as setup,Ee as setupReusable};
//# sourceMappingURL=cycle-run.js.map