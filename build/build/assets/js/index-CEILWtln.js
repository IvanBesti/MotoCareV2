import{g as X}from"./app-CyaN6xsP.js";var k={exports:{}},J="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ee=J,re=ee;function z(){}function V(){}V.resetWarningCache=z;var te=function(){function a(t,i,o,n,s,u){if(u!==re){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}a.isRequired=a;function e(){return a}var r={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:e,element:a,elementType:a,instanceOf:e,node:a,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:V,resetWarningCache:z};return r.PropTypes=r,r};k.exports=te();var ne=k.exports;const He=X(ne);var ie=String.prototype.replace,ae=/%20/g,T={RFC1738:"RFC1738",RFC3986:"RFC3986"},_={default:T.RFC3986,formatters:{RFC1738:function(a){return ie.call(a,ae,"+")},RFC3986:function(a){return String(a)}},RFC1738:T.RFC1738,RFC3986:T.RFC3986},oe=_,R=Object.prototype.hasOwnProperty,O=Array.isArray,b=function(){for(var a=[],e=0;e<256;++e)a.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return a}(),le=function(e){for(;e.length>1;){var r=e.pop(),t=r.obj[r.prop];if(O(t)){for(var i=[],o=0;o<t.length;++o)typeof t[o]<"u"&&i.push(t[o]);r.obj[r.prop]=i}}},W=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},i=0;i<e.length;++i)typeof e[i]<"u"&&(t[i]=e[i]);return t},se=function a(e,r,t){if(!r)return e;if(typeof r!="object"){if(O(e))e.push(r);else if(e&&typeof e=="object")(t&&(t.plainObjects||t.allowPrototypes)||!R.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var i=e;return O(e)&&!O(r)&&(i=W(e,t)),O(e)&&O(r)?(r.forEach(function(o,n){if(R.call(e,n)){var s=e[n];s&&typeof s=="object"&&o&&typeof o=="object"?e[n]=a(s,o,t):e.push(o)}else e[n]=o}),e):Object.keys(r).reduce(function(o,n){var s=r[n];return R.call(o,n)?o[n]=a(o[n],s,t):o[n]=s,o},i)},ue=function(e,r){return Object.keys(r).reduce(function(t,i){return t[i]=r[i],t},e)},fe=function(a,e,r){var t=a.replace(/\+/g," ");if(r==="iso-8859-1")return t.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(t)}catch{return t}},ce=function(e,r,t,i,o){if(e.length===0)return e;var n=e;if(typeof e=="symbol"?n=Symbol.prototype.toString.call(e):typeof e!="string"&&(n=String(e)),t==="iso-8859-1")return escape(n).replace(/%u[0-9a-f]{4}/gi,function(f){return"%26%23"+parseInt(f.slice(2),16)+"%3B"});for(var s="",u=0;u<n.length;++u){var l=n.charCodeAt(u);if(l===45||l===46||l===95||l===126||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||o===oe.RFC1738&&(l===40||l===41)){s+=n.charAt(u);continue}if(l<128){s=s+b[l];continue}if(l<2048){s=s+(b[192|l>>6]+b[128|l&63]);continue}if(l<55296||l>=57344){s=s+(b[224|l>>12]+b[128|l>>6&63]+b[128|l&63]);continue}u+=1,l=65536+((l&1023)<<10|n.charCodeAt(u)&1023),s+=b[240|l>>18]+b[128|l>>12&63]+b[128|l>>6&63]+b[128|l&63]}return s},pe=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],i=0;i<r.length;++i)for(var o=r[i],n=o.obj[o.prop],s=Object.keys(n),u=0;u<s.length;++u){var l=s[u],f=n[l];typeof f=="object"&&f!==null&&t.indexOf(f)===-1&&(r.push({obj:n,prop:l}),t.push(f))}return le(r),e},de=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},he=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},ye=function(e,r){return[].concat(e,r)},me=function(e,r){if(O(e)){for(var t=[],i=0;i<e.length;i+=1)t.push(r(e[i]));return t}return r(e)},Z={arrayToObject:W,assign:ue,combine:ye,compact:pe,decode:fe,encode:ce,isBuffer:he,isRegExp:de,maybeMap:me,merge:se},A=Z,j=_,ve=Object.prototype.hasOwnProperty,B={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},x=Array.isArray,ge=String.prototype.split,be=Array.prototype.push,M=function(a,e){be.apply(a,x(e)?e:[e])},we=Date.prototype.toISOString,U=j.default,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:A.encode,encodeValuesOnly:!1,format:U,formatter:j.formatters[U],indices:!1,serializeDate:function(e){return we.call(e)},skipNulls:!1,strictNullHandling:!1},Oe=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},xe=function a(e,r,t,i,o,n,s,u,l,f,h,p,y,d){var c=e;if(typeof s=="function"?c=s(r,c):c instanceof Date?c=f(c):t==="comma"&&x(c)&&(c=A.maybeMap(c,function(F){return F instanceof Date?f(F):F})),c===null){if(i)return n&&!y?n(r,v.encoder,d,"key",h):r;c=""}if(Oe(c)||A.isBuffer(c)){if(n){var L=y?r:n(r,v.encoder,d,"key",h);if(t==="comma"&&y){for(var Q=ge.call(String(c),","),I="",P=0;P<Q.length;++P)I+=(P===0?"":",")+p(n(Q[P],v.encoder,d,"value",h));return[p(L)+"="+I]}return[p(L)+"="+p(n(c,v.encoder,d,"value",h))]}return[p(r)+"="+p(String(c))]}var E=[];if(typeof c>"u")return E;var S;if(t==="comma"&&x(c))S=[{value:c.length>0?c.join(",")||null:void 0}];else if(x(s))S=s;else{var H=Object.keys(c);S=u?H.sort(u):H}for(var N=0;N<S.length;++N){var w=S[N],q=typeof w=="object"&&typeof w.value<"u"?w.value:c[w];if(!(o&&q===null)){var Y=x(c)?typeof t=="function"?t(r,w):r:r+(l?"."+w:"["+w+"]");M(E,a(q,Y,t,i,o,n,s,u,l,f,h,p,y,d))}}return E},$e=function(e){if(!e)return v;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||v.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=j.default;if(typeof e.format<"u"){if(!ve.call(j.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var i=j.formatters[t],o=v.filter;return(typeof e.filter=="function"||x(e.filter))&&(o=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:v.addQueryPrefix,allowDots:typeof e.allowDots>"u"?v.allowDots:!!e.allowDots,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:v.charsetSentinel,delimiter:typeof e.delimiter>"u"?v.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:v.encode,encoder:typeof e.encoder=="function"?e.encoder:v.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:v.encodeValuesOnly,filter:o,format:t,formatter:i,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:v.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:v.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:v.strictNullHandling}},Se=function(a,e){var r=a,t=$e(e),i,o;typeof t.filter=="function"?(o=t.filter,r=o("",r)):x(t.filter)&&(o=t.filter,i=o);var n=[];if(typeof r!="object"||r===null)return"";var s;e&&e.arrayFormat in B?s=e.arrayFormat:e&&"indices"in e?s=e.indices?"indices":"repeat":s="indices";var u=B[s];i||(i=Object.keys(r)),t.sort&&i.sort(t.sort);for(var l=0;l<i.length;++l){var f=i[l];t.skipNulls&&r[f]===null||M(n,xe(r[f],f,u,t.strictNullHandling,t.skipNulls,t.encode?t.encoder:null,t.filter,t.sort,t.allowDots,t.serializeDate,t.format,t.formatter,t.encodeValuesOnly,t.charset))}var h=n.join(t.delimiter),p=t.addQueryPrefix===!0?"?":"";return t.charsetSentinel&&(t.charset==="iso-8859-1"?p+="utf8=%26%2310003%3B&":p+="utf8=%E2%9C%93&"),h.length>0?p+h:""},$=Z,D=Object.prototype.hasOwnProperty,je=Array.isArray,m={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:$.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Pe=function(a){return a.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},G=function(a,e){return a&&typeof a=="string"&&e.comma&&a.indexOf(",")>-1?a.split(","):a},Ee="utf8=%26%2310003%3B",Ne="utf8=%E2%9C%93",Fe=function(e,r){var t={},i=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,o=r.parameterLimit===1/0?void 0:r.parameterLimit,n=i.split(r.delimiter,o),s=-1,u,l=r.charset;if(r.charsetSentinel)for(u=0;u<n.length;++u)n[u].indexOf("utf8=")===0&&(n[u]===Ne?l="utf-8":n[u]===Ee&&(l="iso-8859-1"),s=u,u=n.length);for(u=0;u<n.length;++u)if(u!==s){var f=n[u],h=f.indexOf("]="),p=h===-1?f.indexOf("="):h+1,y,d;p===-1?(y=r.decoder(f,m.decoder,l,"key"),d=r.strictNullHandling?null:""):(y=r.decoder(f.slice(0,p),m.decoder,l,"key"),d=$.maybeMap(G(f.slice(p+1),r),function(c){return r.decoder(c,m.decoder,l,"value")})),d&&r.interpretNumericEntities&&l==="iso-8859-1"&&(d=Pe(d)),f.indexOf("[]=")>-1&&(d=je(d)?[d]:d),D.call(t,y)?t[y]=$.combine(t[y],d):t[y]=d}return t},Te=function(a,e,r,t){for(var i=t?e:G(e,r),o=a.length-1;o>=0;--o){var n,s=a[o];if(s==="[]"&&r.parseArrays)n=[].concat(i);else{n=r.plainObjects?Object.create(null):{};var u=s.charAt(0)==="["&&s.charAt(s.length-1)==="]"?s.slice(1,-1):s,l=parseInt(u,10);!r.parseArrays&&u===""?n={0:i}:!isNaN(l)&&s!==u&&String(l)===u&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(n=[],n[l]=i):u!=="__proto__"&&(n[u]=i)}i=n}return i},Re=function(e,r,t,i){if(e){var o=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,u=t.depth>0&&n.exec(o),l=u?o.slice(0,u.index):o,f=[];if(l){if(!t.plainObjects&&D.call(Object.prototype,l)&&!t.allowPrototypes)return;f.push(l)}for(var h=0;t.depth>0&&(u=s.exec(o))!==null&&h<t.depth;){if(h+=1,!t.plainObjects&&D.call(Object.prototype,u[1].slice(1,-1))&&!t.allowPrototypes)return;f.push(u[1])}return u&&f.push("["+o.slice(u.index)+"]"),Te(f,r,t,i)}},Ce=function(e){if(!e)return m;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof e.charset>"u"?m.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?m.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:m.allowPrototypes,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:m.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:m.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:m.comma,decoder:typeof e.decoder=="function"?e.decoder:m.decoder,delimiter:typeof e.delimiter=="string"||$.isRegExp(e.delimiter)?e.delimiter:m.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:m.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:m.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:m.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:m.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:m.strictNullHandling}},Ae=function(a,e){var r=Ce(e);if(a===""||a===null||typeof a>"u")return r.plainObjects?Object.create(null):{};for(var t=typeof a=="string"?Fe(a,r):a,i=r.plainObjects?Object.create(null):{},o=Object.keys(t),n=0;n<o.length;++n){var s=o[n],u=Re(s,t[s],r,typeof a=="string");i=$.merge(i,u,r)}return $.compact(i)},De=Se,_e=Ae,Le=_,K={formats:Le,parse:_e,stringify:De};function g(){return g=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)({}).hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},g.apply(null,arguments)}class C{constructor(e,r,t){var i,o;this.name=e,this.definition=r,this.bindings=(i=r.bindings)!=null?i:{},this.wheres=(o=r.wheres)!=null?o:{},this.config=t}get template(){const e=`${this.origin}/${this.definition.uri}`.replace(/\/+$/,"");return e===""?"/":e}get origin(){return this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?`:${this.config.port}`:""}`:this.config.url:""}get parameterSegments(){var e,r;return(e=(r=this.template.match(/{[^}?]+\??}/g))==null?void 0:r.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))!=null?e:[]}matchesUrl(e){var r;if(!this.definition.methods.includes("GET"))return!1;const t=this.template.replace(/[.*+$()[\]]/g,"\\$&").replace(/(\/?){([^}?]*)(\??)}/g,(s,u,l,f)=>{var h;const p=`(?<${l}>${((h=this.wheres[l])==null?void 0:h.replace(/(^\^)|(\$$)/g,""))||"[^/?]+"})`;return f?`(${u}${p})?`:`${u}${p}`}).replace(/^\w+:\/\//,""),[i,o]=e.replace(/^\w+:\/\//,"").split("?"),n=(r=new RegExp(`^${t}/?$`).exec(i))!=null?r:new RegExp(`^${t}/?$`).exec(decodeURI(i));if(n){for(const s in n.groups)n.groups[s]=typeof n.groups[s]=="string"?decodeURIComponent(n.groups[s]):n.groups[s];return{params:n.groups,query:K.parse(o)}}return!1}compile(e){return this.parameterSegments.length?this.template.replace(/{([^}?]+)(\??)}/g,(r,t,i)=>{var o,n;if(!i&&[null,void 0].includes(e[t]))throw new Error(`Ziggy error: '${t}' parameter is required for route '${this.name}'.`);if(this.wheres[t]&&!new RegExp(`^${i?`(${this.wheres[t]})?`:this.wheres[t]}$`).test((n=e[t])!=null?n:""))throw new Error(`Ziggy error: '${t}' parameter '${e[t]}' does not match required format '${this.wheres[t]}' for route '${this.name}'.`);return encodeURI((o=e[t])!=null?o:"").replace(/%7C/g,"|").replace(/%25/g,"%").replace(/\$/g,"%24")}).replace(this.config.absolute?/(\.[^/]+?)(\/\/)/:/(^)(\/\/)/,"$1/").replace(/\/+$/,""):this.template}}class Qe extends String{constructor(e,r,t=!0,i){if(super(),this.t=i??(typeof Ziggy<"u"?Ziggy:globalThis==null?void 0:globalThis.Ziggy),this.t=g({},this.t,{absolute:t}),e){if(!this.t.routes[e])throw new Error(`Ziggy error: route '${e}' is not in the route list.`);this.i=new C(e,this.t.routes[e],this.t),this.o=this.u(r)}}toString(){const e=Object.keys(this.o).filter(r=>!this.i.parameterSegments.some(({name:t})=>t===r)).filter(r=>r!=="_query").reduce((r,t)=>g({},r,{[t]:this.o[t]}),{});return this.i.compile(this.o)+K.stringify(g({},e,this.o._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(r,t)=>typeof r=="boolean"?Number(r):t(r)})}h(e){e?this.t.absolute&&e.startsWith("/")&&(e=this.l().host+e):e=this.m();let r={};const[t,i]=Object.entries(this.t.routes).find(([o,n])=>r=new C(o,n,this.t).matchesUrl(e))||[void 0,void 0];return g({name:t},r,{route:i})}m(){const{host:e,pathname:r,search:t}=this.l();return(this.t.absolute?e+r:r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+t}current(e,r){const{name:t,params:i,query:o,route:n}=this.h();if(!e)return t;const s=new RegExp(`^${e.replace(/\./g,"\\.").replace(/\*/g,".*")}$`).test(t);if([null,void 0].includes(r)||!s)return s;const u=new C(t,n,this.t);r=this.u(r,u);const l=g({},i,o);if(Object.values(r).every(h=>!h)&&!Object.values(l).some(h=>h!==void 0))return!0;const f=(h,p)=>Object.entries(h).every(([y,d])=>Array.isArray(d)&&Array.isArray(p[y])?d.every(c=>p[y].includes(c)):typeof d=="object"&&typeof p[y]=="object"&&d!==null&&p[y]!==null?f(d,p[y]):p[y]==d);return f(r,l)}l(){var e,r,t,i,o,n;const{host:s="",pathname:u="",search:l=""}=typeof window<"u"?window.location:{};return{host:(e=(r=this.t.location)==null?void 0:r.host)!=null?e:s,pathname:(t=(i=this.t.location)==null?void 0:i.pathname)!=null?t:u,search:(o=(n=this.t.location)==null?void 0:n.search)!=null?o:l}}get params(){const{params:e,query:r}=this.h();return g({},e,r)}get routeParams(){return this.h().params}get queryParams(){return this.h().query}has(e){return this.t.routes.hasOwnProperty(e)}u(e={},r=this.i){e!=null||(e={}),e=["string","number"].includes(typeof e)?[e]:e;const t=r.parameterSegments.filter(({name:i})=>!this.t.defaults[i]);return Array.isArray(e)?e=e.reduce((i,o,n)=>g({},i,t[n]?{[t[n].name]:o}:typeof o=="object"?o:{[o]:""}),{}):t.length!==1||e[t[0].name]||!e.hasOwnProperty(Object.values(r.bindings)[0])&&!e.hasOwnProperty("id")||(e={[t[0].name]:e}),g({},this.$(r),this.p(e,r))}$(e){return e.parameterSegments.filter(({name:r})=>this.t.defaults[r]).reduce((r,{name:t},i)=>g({},r,{[t]:this.t.defaults[t]}),{})}p(e,{bindings:r,parameterSegments:t}){return Object.entries(e).reduce((i,[o,n])=>{if(!n||typeof n!="object"||Array.isArray(n)||!t.some(({name:s})=>s===o))return g({},i,{[o]:n});if(!n.hasOwnProperty(r[o])){if(!n.hasOwnProperty("id"))throw new Error(`Ziggy error: object passed as '${o}' parameter is missing route model binding key '${r[o]}'.`);r[o]="id"}return g({},i,{[o]:n[r[o]]})},{})}valueOf(){return this.toString()}}function qe(a,e,r,t){const i=new Qe(a,e,r,t);return a?i.toString():i}export{He as P,qe as s};
