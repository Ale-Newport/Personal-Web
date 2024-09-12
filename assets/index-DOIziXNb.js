(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function oc(t,e){const n=new Set(t.split(","));return i=>n.has(i)}const ut={},Sr=[],nn=()=>{},Bp=()=>!1,Fo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ac=t=>t.startsWith("onUpdate:"),Pt=Object.assign,lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kp=Object.prototype.hasOwnProperty,Ze=(t,e)=>kp.call(t,e),Ue=Array.isArray,yr=t=>vs(t)==="[object Map]",Bo=t=>vs(t)==="[object Set]",$c=t=>vs(t)==="[object Date]",He=t=>typeof t=="function",_t=t=>typeof t=="string",Rn=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",sd=t=>(at(t)||He(t))&&He(t.then)&&He(t.catch),od=Object.prototype.toString,vs=t=>od.call(t),zp=t=>vs(t).slice(8,-1),ad=t=>vs(t)==="[object Object]",cc=t=>_t(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,es=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ko=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hp=/-(\w)/g,mn=ko(t=>t.replace(Hp,(e,n)=>n?n.toUpperCase():"")),Vp=/\B([A-Z])/g,Zi=ko(t=>t.replace(Vp,"-$1").toLowerCase()),zo=ko(t=>t.charAt(0).toUpperCase()+t.slice(1)),pa=ko(t=>t?`on${zo(t)}`:""),gi=(t,e)=>!Object.is(t,e),oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ld=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},il=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jc;const cd=()=>jc||(jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uc(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=_t(i)?qp(i):uc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(t)||at(t))return t}const Gp=/;(?![^(]*\))/g,Wp=/:([^]+)/,Xp=/\/\*[^]*?\*\//g;function qp(t){const e={};return t.replace(Xp,"").split(Gp).forEach(n=>{if(n){const i=n.split(Wp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ft(t){let e="";if(_t(t))e=t;else if(Ue(t))for(let n=0;n<t.length;n++){const i=Ft(t[n]);i&&(e+=i+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $p="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jp=oc($p);function ud(t){return!!t||t===""}function Yp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ho(t[i],e[i]);return n}function Ho(t,e){if(t===e)return!0;let n=$c(t),i=$c(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Rn(t),i=Rn(e),n||i)return t===e;if(n=Ue(t),i=Ue(e),n||i)return n&&i?Yp(t,e):!1;if(n=at(t),i=at(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ho(t[o],e[o]))return!1}}return String(t)===String(e)}function fd(t,e){return t.findIndex(n=>Ho(n,e))}const dd=t=>!!(t&&t.__v_isRef===!0),dn=t=>_t(t)?t:t==null?"":Ue(t)||at(t)&&(t.toString===od||!He(t.toString))?dd(t)?dn(t.value):JSON.stringify(t,hd,2):String(t),hd=(t,e)=>dd(e)?hd(t,e.value):yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[ma(i,s)+" =>"]=r,n),{})}:Bo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ma(n))}:Rn(e)?ma(e):at(e)&&!Ue(e)&&!ad(e)?String(e):e,ma=(t,e="")=>{var n;return Rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class Kp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=cn;try{return cn=this,e()}finally{cn=n}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Zp(t,e=cn){e&&e.active&&e.effects.push(t)}function Jp(){return cn}let Gi;class fc{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Zp(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,xi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Qp(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Si()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=di,n=Gi;try{return di=!0,Gi=this,this._runnings++,Yc(this),this.fn()}finally{Kc(this),this._runnings--,Gi=n,di=e}}stop(){this.active&&(Yc(this),Kc(this),this.onStop&&this.onStop(),this.active=!1)}}function Qp(t){return t.value}function Yc(t){t._trackId++,t._depsLength=0}function Kc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)pd(t.deps[e],t);t.deps.length=t._depsLength}}function pd(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let di=!0,rl=0;const md=[];function xi(){md.push(di),di=!1}function Si(){const t=md.pop();di=t===void 0?!0:t}function dc(){rl++}function hc(){for(rl--;!rl&&sl.length;)sl.shift()()}function gd(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&pd(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const sl=[];function _d(t,e,n){dc();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&sl.push(i.scheduler)))}hc()}const vd=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ol=new WeakMap,Wi=Symbol(""),al=Symbol("");function Wt(t,e,n){if(di&&Gi){let i=ol.get(t);i||ol.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=vd(()=>i.delete(n))),gd(Gi,r)}}function Wn(t,e,n,i,r,s){const o=ol.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Ue(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Rn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Ue(t)?cc(n)&&a.push(o.get("length")):(a.push(o.get(Wi)),yr(t)&&a.push(o.get(al)));break;case"delete":Ue(t)||(a.push(o.get(Wi)),yr(t)&&a.push(o.get(al)));break;case"set":yr(t)&&a.push(o.get(Wi));break}dc();for(const l of a)l&&_d(l,4);hc()}const em=oc("__proto__,__v_isRef,__isVue"),xd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn)),Zc=tm();function tm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=rt(this);for(let s=0,o=this.length;s<o;s++)Wt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(rt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xi(),dc();const i=rt(this)[e].apply(this,n);return hc(),Si(),i}}),t}function nm(t){Rn(t)||(t=String(t));const e=rt(this);return Wt(e,"has",t),e.hasOwnProperty(t)}class Sd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?mm:bd:s?Ed:Md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ue(e);if(!r){if(o&&Ze(Zc,n))return Reflect.get(Zc,n,i);if(n==="hasOwnProperty")return nm}const a=Reflect.get(e,n,i);return(Rn(n)?xd.has(n):em(n))||(r||Wt(e,"get",n),s)?a:Xt(a)?o&&cc(n)?a:a.value:at(a)?r?wd(a):Go(a):a}}class yd extends Sd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=qi(s);if(!Rr(i)&&!qi(i)&&(s=rt(s),i=rt(i)),!Ue(e)&&Xt(s)&&!Xt(i))return l?!1:(s.value=i,!0)}const o=Ue(e)&&cc(n)?Number(n)<e.length:Ze(e,n),a=Reflect.set(e,n,i,r);return e===rt(r)&&(o?gi(i,s)&&Wn(e,"set",n,i):Wn(e,"add",n,i)),a}deleteProperty(e,n){const i=Ze(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Wn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Rn(n)||!xd.has(n))&&Wt(e,"has",n),i}ownKeys(e){return Wt(e,"iterate",Ue(e)?"length":Wi),Reflect.ownKeys(e)}}class im extends Sd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rm=new yd,sm=new im,om=new yd(!0);const pc=t=>t,Vo=t=>Reflect.getPrototypeOf(t);function Cs(t,e,n=!1,i=!1){t=t.__v_raw;const r=rt(t),s=rt(e);n||(gi(e,s)&&Wt(r,"get",e),Wt(r,"get",s));const{has:o}=Vo(r),a=i?pc:n?_c:cs;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Ps(t,e=!1){const n=this.__v_raw,i=rt(n),r=rt(t);return e||(gi(t,r)&&Wt(i,"has",t),Wt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ls(t,e=!1){return t=t.__v_raw,!e&&Wt(rt(t),"iterate",Wi),Reflect.get(t,"size",t)}function Jc(t,e=!1){!e&&!Rr(t)&&!qi(t)&&(t=rt(t));const n=rt(this);return Vo(n).has.call(n,t)||(n.add(t),Wn(n,"add",t,t)),this}function Qc(t,e,n=!1){!n&&!Rr(e)&&!qi(e)&&(e=rt(e));const i=rt(this),{has:r,get:s}=Vo(i);let o=r.call(i,t);o||(t=rt(t),o=r.call(i,t));const a=s.call(i,t);return i.set(t,e),o?gi(e,a)&&Wn(i,"set",t,e):Wn(i,"add",t,e),this}function eu(t){const e=rt(this),{has:n,get:i}=Vo(e);let r=n.call(e,t);r||(t=rt(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Wn(e,"delete",t,void 0),s}function tu(){const t=rt(this),e=t.size!==0,n=t.clear();return e&&Wn(t,"clear",void 0,void 0),n}function Ds(t,e){return function(i,r){const s=this,o=s.__v_raw,a=rt(o),l=e?pc:t?_c:cs;return!t&&Wt(a,"iterate",Wi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Is(t,e,n){return function(...i){const r=this.__v_raw,s=rt(r),o=yr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?pc:e?_c:cs;return!e&&Wt(s,"iterate",l?al:Wi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function am(){const t={get(s){return Cs(this,s)},get size(){return Ls(this)},has:Ps,add:Jc,set:Qc,delete:eu,clear:tu,forEach:Ds(!1,!1)},e={get(s){return Cs(this,s,!1,!0)},get size(){return Ls(this)},has:Ps,add(s){return Jc.call(this,s,!0)},set(s,o){return Qc.call(this,s,o,!0)},delete:eu,clear:tu,forEach:Ds(!1,!0)},n={get(s){return Cs(this,s,!0)},get size(){return Ls(this,!0)},has(s){return Ps.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Ds(!0,!1)},i={get(s){return Cs(this,s,!0,!0)},get size(){return Ls(this,!0)},has(s){return Ps.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Ds(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Is(s,!1,!1),n[s]=Is(s,!0,!1),e[s]=Is(s,!1,!0),i[s]=Is(s,!0,!0)}),[t,n,e,i]}const[lm,cm,um,fm]=am();function mc(t,e){const n=e?t?fm:um:t?cm:lm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ze(n,r)&&r in i?n:i,r,s)}const dm={get:mc(!1,!1)},hm={get:mc(!1,!0)},pm={get:mc(!0,!1)};const Md=new WeakMap,Ed=new WeakMap,bd=new WeakMap,mm=new WeakMap;function gm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _m(t){return t.__v_skip||!Object.isExtensible(t)?0:gm(zp(t))}function Go(t){return qi(t)?t:gc(t,!1,rm,dm,Md)}function Td(t){return gc(t,!1,om,hm,Ed)}function wd(t){return gc(t,!0,sm,pm,bd)}function gc(t,e,n,i,r){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=_m(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function ts(t){return qi(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function qi(t){return!!(t&&t.__v_isReadonly)}function Rr(t){return!!(t&&t.__v_isShallow)}function Ad(t){return t?!!t.__v_raw:!1}function rt(t){const e=t&&t.__v_raw;return e?rt(e):t}function vm(t){return Object.isExtensible(t)&&ld(t,"__v_skip",!0),t}const cs=t=>at(t)?Go(t):t,_c=t=>at(t)?wd(t):t;class Rd{constructor(e,n,i,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new fc(()=>e(this._value),()=>ao(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=rt(this);return(!e._cacheable||e.effect.dirty)&&gi(e._value,e._value=e.effect.run())&&ao(e,4),Cd(e),e.effect._dirtyLevel>=2&&ao(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function xm(t,e,n=!1){let i,r;const s=He(t);return s?(i=t,r=nn):(i=t.get,r=t.set),new Rd(i,r,s||!r,n)}function Cd(t){var e;di&&Gi&&(t=rt(t),gd(Gi,(e=t.dep)!=null?e:t.dep=vd(()=>t.dep=void 0,t instanceof Rd?t:void 0)))}function ao(t,e=4,n,i){t=rt(t);const r=t.dep;r&&_d(r,e)}function Xt(t){return!!(t&&t.__v_isRef===!0)}function fi(t){return Pd(t,!1)}function Sm(t){return Pd(t,!0)}function Pd(t,e){return Xt(t)?t:new ym(t,e)}class ym{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:rt(e),this._value=n?e:cs(e)}get value(){return Cd(this),this._value}set value(e){const n=this.__v_isShallow||Rr(e)||qi(e);e=n?e:rt(e),gi(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:cs(e),ao(this,4))}}function Mr(t){return Xt(t)?t.value:t}const Mm={get:(t,e,n)=>Mr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Xt(r)&&!Xt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ld(t){return ts(t)?t:new Proxy(t,Mm)}/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hi(t,e,n,i){try{return i?t(...i):t()}catch(r){Wo(r,e,n)}}function pn(t,e,n,i){if(He(t)){const r=hi(t,e,n,i);return r&&sd(r)&&r.catch(s=>{Wo(s,e,n)}),r}if(Ue(t)){const r=[];for(let s=0;s<t.length;s++)r.push(pn(t[s],e,n,i));return r}}function Wo(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){xi(),hi(l,null,10,[t,o,a]),Si();return}}Em(t,n,r,i)}function Em(t,e,n,i=!0){console.error(t)}let us=!1,ll=!1;const Rt=[];let bn=0;const Er=[];let oi=null,Oi=0;const Dd=Promise.resolve();let vc=null;function Id(t){const e=vc||Dd;return t?e.then(this?t.bind(this):t):e}function bm(t){let e=bn+1,n=Rt.length;for(;e<n;){const i=e+n>>>1,r=Rt[i],s=fs(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function xc(t){(!Rt.length||!Rt.includes(t,us&&t.allowRecurse?bn+1:bn))&&(t.id==null?Rt.push(t):Rt.splice(bm(t.id),0,t),Ud())}function Ud(){!us&&!ll&&(ll=!0,vc=Dd.then(Od))}function Tm(t){const e=Rt.indexOf(t);e>bn&&Rt.splice(e,1)}function wm(t){Ue(t)?Er.push(...t):(!oi||!oi.includes(t,t.allowRecurse?Oi+1:Oi))&&Er.push(t),Ud()}function nu(t,e,n=us?bn+1:0){for(;n<Rt.length;n++){const i=Rt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Rt.splice(n,1),n--,i()}}}function Nd(t){if(Er.length){const e=[...new Set(Er)].sort((n,i)=>fs(n)-fs(i));if(Er.length=0,oi){oi.push(...e);return}for(oi=e,Oi=0;Oi<oi.length;Oi++){const n=oi[Oi];n.active!==!1&&n()}oi=null,Oi=0}}const fs=t=>t.id==null?1/0:t.id,Am=(t,e)=>{const n=fs(t)-fs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Od(t){ll=!1,us=!0,Rt.sort(Am);try{for(bn=0;bn<Rt.length;bn++){const e=Rt[bn];e&&e.active!==!1&&hi(e,e.i,e.i?15:14)}}finally{bn=0,Rt.length=0,Nd(),us=!1,vc=null,(Rt.length||Er.length)&&Od()}}let Kt=null,Xo=null;function Eo(t){const e=Kt;return Kt=t,Xo=t&&t.type.__scopeId||null,e}function yi(t){Xo=t}function Mi(){Xo=null}function Bn(t,e=Kt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&fu(-1);const s=Eo(e);let o;try{o=t(...r)}finally{Eo(s),i._d&&fu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ii(t,e){if(Kt===null)return t;const n=Ko(Kt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ut]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&ci(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ti(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(xi(),pn(l,n,8,[t.el,a,t,e]),Si())}}function Fd(t,e){t.shapeFlag&6&&t.component?Fd(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Bd(t,e){return He(t)?Pt({name:t.name},e,{setup:t}):t}const lo=t=>!!t.type.__asyncLoader,kd=t=>t.type.__isKeepAlive;function Rm(t,e){zd(t,"a",e)}function Cm(t,e){zd(t,"da",e)}function zd(t,e,n=Ct){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(qo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)kd(r.parent.vnode)&&Pm(i,e,n,r),r=r.parent}}function Pm(t,e,n,i){const r=qo(e,t,i,!0);Vd(()=>{lc(i[e],r)},n)}function qo(t,e,n=Ct,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{xi();const a=xs(n),l=pn(e,n,t,o);return a(),Si(),l});return i?r.unshift(s):r.push(s),s}}const jn=t=>(e,n=Ct)=>{(!Yo||t==="sp")&&qo(t,(...i)=>e(...i),n)},Lm=jn("bm"),Sc=jn("m"),Dm=jn("bu"),Im=jn("u"),Hd=jn("bum"),Vd=jn("um"),Um=jn("sp"),Nm=jn("rtg"),Om=jn("rtc");function Fm(t,e=Ct){qo("ec",t,e)}const Gd="components";function ns(t,e){return Xd(Gd,t,!0,e)||t}const Wd=Symbol.for("v-ndc");function Bm(t){return _t(t)?Xd(Gd,t,!1)||t:t||Wd}function Xd(t,e,n=!0,i=!1){const r=Kt||Ct;if(r){const s=r.type;{const a=Ag(s,!1);if(a&&(a===e||a===mn(e)||a===zo(mn(e))))return s}const o=iu(r[t]||s[t],e)||iu(r.appContext[t],e);return!o&&i?s:o}}function iu(t,e){return t&&(t[e]||t[mn(e)]||t[zo(mn(e))])}function ds(t,e,n,i){let r;const s=n;if(Ue(t)||_t(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(at(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s)}}else r=[];return r}const cl=t=>t?dh(t)?Ko(t):cl(t.parent):null,is=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cl(t.parent),$root:t=>cl(t.root),$emit:t=>t.emit,$options:t=>yc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,xc(t.update)}),$nextTick:t=>t.n||(t.n=Id.bind(t.proxy)),$watch:t=>ag.bind(t)}),ga=(t,e)=>t!==ut&&!t.__isScriptSetup&&Ze(t,e),km={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ga(i,e))return o[e]=1,i[e];if(r!==ut&&Ze(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ze(c,e))return o[e]=3,s[e];if(n!==ut&&Ze(n,e))return o[e]=4,n[e];ul&&(o[e]=0)}}const u=is[e];let f,d;if(u)return e==="$attrs"&&Wt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ut&&Ze(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ze(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ga(r,e)?(r[e]=n,!0):i!==ut&&Ze(i,e)?(i[e]=n,!0):Ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ut&&Ze(t,o)||ga(e,o)||(a=s[0])&&Ze(a,o)||Ze(i,o)||Ze(is,o)||Ze(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ze(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ru(t){return Ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ul=!0;function zm(t){const e=yc(t),n=t.proxy,i=t.ctx;ul=!1,e.beforeCreate&&su(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:v,deactivated:h,beforeDestroy:p,beforeUnmount:E,destroyed:x,unmounted:A,render:B,renderTracked:R,renderTriggered:L,errorCaptured:z,serverPrefetch:T,expose:M,inheritAttrs:D,components:te,directives:j,filters:le}=e;if(c&&Hm(c,i,null),o)for(const J in o){const G=o[J];He(G)&&(i[J]=G.bind(n))}if(r){const J=r.call(n,n);at(J)&&(t.data=Go(J))}if(ul=!0,s)for(const J in s){const G=s[J],Se=He(G)?G.bind(n,n):He(G.get)?G.get.bind(n,n):nn,Ee=!He(G)&&He(G.set)?G.set.bind(n):nn,Ae=un({get:Se,set:Ee});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Ne=>Ae.value=Ne})}if(a)for(const J in a)qd(a[J],i,n,J);if(l){const J=He(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{co(G,J[G])})}u&&su(u,t,"c");function Q(J,G){Ue(G)?G.forEach(Se=>J(Se.bind(n))):G&&J(G.bind(n))}if(Q(Lm,f),Q(Sc,d),Q(Dm,m),Q(Im,g),Q(Rm,v),Q(Cm,h),Q(Fm,z),Q(Om,R),Q(Nm,L),Q(Hd,E),Q(Vd,A),Q(Um,T),Ue(M))if(M.length){const J=t.exposed||(t.exposed={});M.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:Se=>n[G]=Se})})}else t.exposed||(t.exposed={});B&&t.render===nn&&(t.render=B),D!=null&&(t.inheritAttrs=D),te&&(t.components=te),j&&(t.directives=j)}function Hm(t,e,n=nn){Ue(t)&&(t=fl(t));for(const i in t){const r=t[i];let s;at(r)?"default"in r?s=Xn(r.from||i,r.default,!0):s=Xn(r.from||i):s=Xn(r),Xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function su(t,e,n){pn(Ue(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function qd(t,e,n,i){const r=i.includes(".")?oh(n,i):()=>n[i];if(_t(t)){const s=e[t];He(s)&&uo(r,s)}else if(He(t))uo(r,t.bind(n));else if(at(t))if(Ue(t))t.forEach(s=>qd(s,e,n,i));else{const s=He(t.handler)?t.handler.bind(n):e[t.handler];He(s)&&uo(r,s,t)}}function yc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>bo(l,c,o,!0)),bo(l,e,o)),at(e)&&s.set(e,l),l}function bo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&bo(t,s,n,!0),r&&r.forEach(o=>bo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Vm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Vm={data:ou,props:au,emits:au,methods:Jr,computed:Jr,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Jr,directives:Jr,watch:Wm,provide:ou,inject:Gm};function ou(t,e){return e?t?function(){return Pt(He(t)?t.call(this,this):t,He(e)?e.call(this,this):e)}:e:t}function Gm(t,e){return Jr(fl(t),fl(e))}function fl(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Jr(t,e){return t?Pt(Object.create(null),t,e):e}function au(t,e){return t?Ue(t)&&Ue(e)?[...new Set([...t,...e])]:Pt(Object.create(null),ru(t),ru(e??{})):e}function Wm(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const i in e)n[i]=Dt(t[i],e[i]);return n}function $d(){return{app:null,config:{isNativeTag:Bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xm=0;function qm(t,e){return function(i,r=null){He(i)||(i=Pt({},i)),r!=null&&!at(r)&&(r=null);const s=$d(),o=new WeakSet;let a=!1;const l=s.app={_uid:Xm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Cg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(l,...u)):He(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=ct(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Ko(d.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=rs;rs=l;try{return c()}finally{rs=u}}};return l}}let rs=null;function co(t,e){if(Ct){let n=Ct.provides;const i=Ct.parent&&Ct.parent.provides;i===n&&(n=Ct.provides=Object.create(i)),n[t]=e}}function Xn(t,e,n=!1){const i=Ct||Kt;if(i||rs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:rs._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&He(e)?e.call(i&&i.proxy):e}}const jd={},Yd=()=>Object.create(jd),Kd=t=>Object.getPrototypeOf(t)===jd;function $m(t,e,n,i=!1){const r={},s=Yd();t.propsDefaults=Object.create(null),Zd(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Td(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function jm(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=rt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if($o(t.emitsOptions,d))continue;const m=e[d];if(l)if(Ze(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const g=mn(d);r[g]=dl(l,a,g,m,t,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Zd(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ze(e,f)&&((u=Zi(f))===f||!Ze(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=dl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],c=!0)}c&&Wn(t.attrs,"set","")}function Zd(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(es(l))continue;const c=e[l];let u;r&&Ze(r,u=mn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:$o(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=rt(n),c=a||ut;for(let u=0;u<s.length;u++){const f=s[u];n[f]=dl(r,l,f,c[f],t,!Ze(c,f))}}return o}function dl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ze(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=xs(r);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Zi(n))&&(i=!0))}return i}const Ym=new WeakMap;function Jd(t,e,n=!1){const i=n?Ym:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!He(t)){const u=f=>{l=!0;const[d,m]=Jd(f,e,!0);Pt(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return at(t)&&i.set(t,Sr),Sr;if(Ue(s))for(let u=0;u<s.length;u++){const f=mn(s[u]);lu(f)&&(o[f]=ut)}else if(s)for(const u in s){const f=mn(u);if(lu(f)){const d=s[u],m=o[f]=Ue(d)||He(d)?{type:d}:Pt({},d),g=m.type;let v=!1,h=!0;if(Ue(g))for(let p=0;p<g.length;++p){const E=g[p],x=He(E)&&E.name;if(x==="Boolean"){v=!0;break}else x==="String"&&(h=!1)}else v=He(g)&&g.name==="Boolean";m[0]=v,m[1]=h,(v||Ze(m,"default"))&&a.push(f)}}const c=[o,a];return at(t)&&i.set(t,c),c}function lu(t){return t[0]!=="$"&&!es(t)}const Qd=t=>t[0]==="_"||t==="$stable",Mc=t=>Ue(t)?t.map(Mn):[Mn(t)],Km=(t,e,n)=>{if(e._n)return e;const i=Bn((...r)=>Mc(e(...r)),n);return i._c=!1,i},eh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Qd(r))continue;const s=t[r];if(He(s))e[r]=Km(r,s,i);else if(s!=null){const o=Mc(s);e[r]=()=>o}}},th=(t,e)=>{const n=Mc(e);t.slots.default=()=>n},nh=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Zm=(t,e,n)=>{const i=t.slots=Yd();if(t.vnode.shapeFlag&32){const r=e._;r?(nh(i,e,n),n&&ld(i,"_",r,!0)):eh(e,i)}else e&&th(t,e)},Jm=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:nh(r,e,n):(s=!e.$stable,eh(e,r)),o=e}else e&&(th(t,e),o={default:1});if(s)for(const a in r)!Qd(a)&&o[a]==null&&delete r[a]};function hl(t,e,n,i,r=!1){if(Ue(t)){t.forEach((d,m)=>hl(d,e&&(Ue(e)?e[m]:e),n,i,r));return}if(lo(i)&&!r)return;const s=i.shapeFlag&4?Ko(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,Ze(f,c)&&(f[c]=null)):Xt(c)&&(c.value=null)),He(l))hi(l,a,12,[o,u]);else{const d=_t(l),m=Xt(l);if(d||m){const g=()=>{if(t.f){const v=d?Ze(f,l)?f[l]:u[l]:l.value;r?Ue(v)&&lc(v,s):Ue(v)?v.includes(s)||v.push(s):d?(u[l]=[s],Ze(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ze(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ot(g,n)):g()}}}const Qm=Symbol("_vte"),eg=t=>t.__isTeleport,Ot=mg;function tg(t){return ng(t)}function ng(t,e){const n=cd();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=nn,insertStaticContent:g}=t,v=(b,w,O,V=null,Y=null,K=null,ie=void 0,y=null,_=!!w.dynamicChildren)=>{if(b===w)return;b&&!Vr(b,w)&&(V=U(b),Ne(b,Y,K,!0),b=null),w.patchFlag===-2&&(_=!1,w.dynamicChildren=null);const{type:C,ref:k,shapeFlag:X}=w;switch(C){case jo:h(b,w,O,V);break;case $i:p(b,w,O,V);break;case fo:b==null&&E(w,O,V,ie);break;case Bt:te(b,w,O,V,Y,K,ie,y,_);break;default:X&1?B(b,w,O,V,Y,K,ie,y,_):X&6?j(b,w,O,V,Y,K,ie,y,_):(X&64||X&128)&&C.process(b,w,O,V,Y,K,ie,y,_,de)}k!=null&&Y&&hl(k,b&&b.ref,K,w||b,!w)},h=(b,w,O,V)=>{if(b==null)i(w.el=a(w.children),O,V);else{const Y=w.el=b.el;w.children!==b.children&&c(Y,w.children)}},p=(b,w,O,V)=>{b==null?i(w.el=l(w.children||""),O,V):w.el=b.el},E=(b,w,O,V)=>{[b.el,b.anchor]=g(b.children,w,O,V,b.el,b.anchor)},x=({el:b,anchor:w},O,V)=>{let Y;for(;b&&b!==w;)Y=d(b),i(b,O,V),b=Y;i(w,O,V)},A=({el:b,anchor:w})=>{let O;for(;b&&b!==w;)O=d(b),r(b),b=O;r(w)},B=(b,w,O,V,Y,K,ie,y,_)=>{w.type==="svg"?ie="svg":w.type==="math"&&(ie="mathml"),b==null?R(w,O,V,Y,K,ie,y,_):T(b,w,Y,K,ie,y,_)},R=(b,w,O,V,Y,K,ie,y)=>{let _,C;const{props:k,shapeFlag:X,transition:H,dirs:he}=b;if(_=b.el=o(b.type,K,k&&k.is,k),X&8?u(_,b.children):X&16&&z(b.children,_,null,V,Y,_a(b,K),ie,y),he&&Ti(b,null,V,"created"),L(_,b,b.scopeId,ie,V),k){for(const me in k)me!=="value"&&!es(me)&&s(_,me,null,k[me],K,V);"value"in k&&s(_,"value",null,k.value,K),(C=k.onVnodeBeforeMount)&&xn(C,V,b)}he&&Ti(b,null,V,"beforeMount");const oe=ig(Y,H);oe&&H.beforeEnter(_),i(_,w,O),((C=k&&k.onVnodeMounted)||oe||he)&&Ot(()=>{C&&xn(C,V,b),oe&&H.enter(_),he&&Ti(b,null,V,"mounted")},Y)},L=(b,w,O,V,Y)=>{if(O&&m(b,O),V)for(let K=0;K<V.length;K++)m(b,V[K]);if(Y){let K=Y.subTree;if(w===K){const ie=Y.vnode;L(b,ie,ie.scopeId,ie.slotScopeIds,Y.parent)}}},z=(b,w,O,V,Y,K,ie,y,_=0)=>{for(let C=_;C<b.length;C++){const k=b[C]=y?ai(b[C]):Mn(b[C]);v(null,k,w,O,V,Y,K,ie,y)}},T=(b,w,O,V,Y,K,ie)=>{const y=w.el=b.el;let{patchFlag:_,dynamicChildren:C,dirs:k}=w;_|=b.patchFlag&16;const X=b.props||ut,H=w.props||ut;let he;if(O&&wi(O,!1),(he=H.onVnodeBeforeUpdate)&&xn(he,O,w,b),k&&Ti(w,b,O,"beforeUpdate"),O&&wi(O,!0),(X.innerHTML&&H.innerHTML==null||X.textContent&&H.textContent==null)&&u(y,""),C?M(b.dynamicChildren,C,y,O,V,_a(w,Y),K):ie||G(b,w,y,null,O,V,_a(w,Y),K,!1),_>0){if(_&16)D(y,X,H,O,Y);else if(_&2&&X.class!==H.class&&s(y,"class",null,H.class,Y),_&4&&s(y,"style",X.style,H.style,Y),_&8){const oe=w.dynamicProps;for(let me=0;me<oe.length;me++){const be=oe[me],fe=X[be],xe=H[be];(xe!==fe||be==="value")&&s(y,be,fe,xe,Y,O)}}_&1&&b.children!==w.children&&u(y,w.children)}else!ie&&C==null&&D(y,X,H,O,Y);((he=H.onVnodeUpdated)||k)&&Ot(()=>{he&&xn(he,O,w,b),k&&Ti(w,b,O,"updated")},V)},M=(b,w,O,V,Y,K,ie)=>{for(let y=0;y<w.length;y++){const _=b[y],C=w[y],k=_.el&&(_.type===Bt||!Vr(_,C)||_.shapeFlag&70)?f(_.el):O;v(_,C,k,null,V,Y,K,ie,!0)}},D=(b,w,O,V,Y)=>{if(w!==O){if(w!==ut)for(const K in w)!es(K)&&!(K in O)&&s(b,K,w[K],null,Y,V);for(const K in O){if(es(K))continue;const ie=O[K],y=w[K];ie!==y&&K!=="value"&&s(b,K,y,ie,Y,V)}"value"in O&&s(b,"value",w.value,O.value,Y)}},te=(b,w,O,V,Y,K,ie,y,_)=>{const C=w.el=b?b.el:a(""),k=w.anchor=b?b.anchor:a("");let{patchFlag:X,dynamicChildren:H,slotScopeIds:he}=w;he&&(y=y?y.concat(he):he),b==null?(i(C,O,V),i(k,O,V),z(w.children||[],O,k,Y,K,ie,y,_)):X>0&&X&64&&H&&b.dynamicChildren?(M(b.dynamicChildren,H,O,Y,K,ie,y),(w.key!=null||Y&&w===Y.subTree)&&ih(b,w,!0)):G(b,w,O,k,Y,K,ie,y,_)},j=(b,w,O,V,Y,K,ie,y,_)=>{w.slotScopeIds=y,b==null?w.shapeFlag&512?Y.ctx.activate(w,O,V,ie,_):le(w,O,V,Y,K,ie,_):se(b,w,_)},le=(b,w,O,V,Y,K,ie)=>{const y=b.component=Mg(b,V,Y);if(kd(b)&&(y.ctx.renderer=de),Eg(y,!1,ie),y.asyncDep){if(Y&&Y.registerDep(y,Q,ie),!b.el){const _=y.subTree=ct($i);p(null,_,w,O)}}else Q(y,b,w,O,Y,K,ie)},se=(b,w,O)=>{const V=w.component=b.component;if(dg(b,w,O))if(V.asyncDep&&!V.asyncResolved){J(V,w,O);return}else V.next=w,Tm(V.update),V.effect.dirty=!0,V.update();else w.el=b.el,V.vnode=w},Q=(b,w,O,V,Y,K,ie)=>{const y=()=>{if(b.isMounted){let{next:k,bu:X,u:H,parent:he,vnode:oe}=b;{const Ge=rh(b);if(Ge){k&&(k.el=oe.el,J(b,k,ie)),Ge.asyncDep.then(()=>{b.isUnmounted||y()});return}}let me=k,be;wi(b,!1),k?(k.el=oe.el,J(b,k,ie)):k=oe,X&&oo(X),(be=k.props&&k.props.onVnodeBeforeUpdate)&&xn(be,he,k,oe),wi(b,!0);const fe=va(b),xe=b.subTree;b.subTree=fe,v(xe,fe,f(xe.el),U(xe),b,Y,K),k.el=fe.el,me===null&&hg(b,fe.el),H&&Ot(H,Y),(be=k.props&&k.props.onVnodeUpdated)&&Ot(()=>xn(be,he,k,oe),Y)}else{let k;const{el:X,props:H}=w,{bm:he,m:oe,parent:me}=b,be=lo(w);if(wi(b,!1),he&&oo(he),!be&&(k=H&&H.onVnodeBeforeMount)&&xn(k,me,w),wi(b,!0),X&&P){const fe=()=>{b.subTree=va(b),P(X,b.subTree,b,Y,null)};be?w.type.__asyncLoader().then(()=>!b.isUnmounted&&fe()):fe()}else{const fe=b.subTree=va(b);v(null,fe,O,V,b,Y,K),w.el=fe.el}if(oe&&Ot(oe,Y),!be&&(k=H&&H.onVnodeMounted)){const fe=w;Ot(()=>xn(k,me,fe),Y)}(w.shapeFlag&256||me&&lo(me.vnode)&&me.vnode.shapeFlag&256)&&b.a&&Ot(b.a,Y),b.isMounted=!0,w=O=V=null}},_=b.effect=new fc(y,nn,()=>xc(C),b.scope),C=b.update=()=>{_.dirty&&_.run()};C.i=b,C.id=b.uid,wi(b,!0),C()},J=(b,w,O)=>{w.component=b;const V=b.vnode.props;b.vnode=w,b.next=null,jm(b,w.props,V,O),Jm(b,w.children,O),xi(),nu(b),Si()},G=(b,w,O,V,Y,K,ie,y,_=!1)=>{const C=b&&b.children,k=b?b.shapeFlag:0,X=w.children,{patchFlag:H,shapeFlag:he}=w;if(H>0){if(H&128){Ee(C,X,O,V,Y,K,ie,y,_);return}else if(H&256){Se(C,X,O,V,Y,K,ie,y,_);return}}he&8?(k&16&&Me(C,Y,K),X!==C&&u(O,X)):k&16?he&16?Ee(C,X,O,V,Y,K,ie,y,_):Me(C,Y,K,!0):(k&8&&u(O,""),he&16&&z(X,O,V,Y,K,ie,y,_))},Se=(b,w,O,V,Y,K,ie,y,_)=>{b=b||Sr,w=w||Sr;const C=b.length,k=w.length,X=Math.min(C,k);let H;for(H=0;H<X;H++){const he=w[H]=_?ai(w[H]):Mn(w[H]);v(b[H],he,O,null,Y,K,ie,y,_)}C>k?Me(b,Y,K,!0,!1,X):z(w,O,V,Y,K,ie,y,_,X)},Ee=(b,w,O,V,Y,K,ie,y,_)=>{let C=0;const k=w.length;let X=b.length-1,H=k-1;for(;C<=X&&C<=H;){const he=b[C],oe=w[C]=_?ai(w[C]):Mn(w[C]);if(Vr(he,oe))v(he,oe,O,null,Y,K,ie,y,_);else break;C++}for(;C<=X&&C<=H;){const he=b[X],oe=w[H]=_?ai(w[H]):Mn(w[H]);if(Vr(he,oe))v(he,oe,O,null,Y,K,ie,y,_);else break;X--,H--}if(C>X){if(C<=H){const he=H+1,oe=he<k?w[he].el:V;for(;C<=H;)v(null,w[C]=_?ai(w[C]):Mn(w[C]),O,oe,Y,K,ie,y,_),C++}}else if(C>H)for(;C<=X;)Ne(b[C],Y,K,!0),C++;else{const he=C,oe=C,me=new Map;for(C=oe;C<=H;C++){const De=w[C]=_?ai(w[C]):Mn(w[C]);De.key!=null&&me.set(De.key,C)}let be,fe=0;const xe=H-oe+1;let Ge=!1,Oe=0;const Te=new Array(xe);for(C=0;C<xe;C++)Te[C]=0;for(C=he;C<=X;C++){const De=b[C];if(fe>=xe){Ne(De,Y,K,!0);continue}let Ye;if(De.key!=null)Ye=me.get(De.key);else for(be=oe;be<=H;be++)if(Te[be-oe]===0&&Vr(De,w[be])){Ye=be;break}Ye===void 0?Ne(De,Y,K,!0):(Te[Ye-oe]=C+1,Ye>=Oe?Oe=Ye:Ge=!0,v(De,w[Ye],O,null,Y,K,ie,y,_),fe++)}const ke=Ge?rg(Te):Sr;for(be=ke.length-1,C=xe-1;C>=0;C--){const De=oe+C,Ye=w[De],I=De+1<k?w[De+1].el:V;Te[C]===0?v(null,Ye,O,I,Y,K,ie,y,_):Ge&&(be<0||C!==ke[be]?Ae(Ye,O,I,2):be--)}}},Ae=(b,w,O,V,Y=null)=>{const{el:K,type:ie,transition:y,children:_,shapeFlag:C}=b;if(C&6){Ae(b.component.subTree,w,O,V);return}if(C&128){b.suspense.move(w,O,V);return}if(C&64){ie.move(b,w,O,de);return}if(ie===Bt){i(K,w,O);for(let X=0;X<_.length;X++)Ae(_[X],w,O,V);i(b.anchor,w,O);return}if(ie===fo){x(b,w,O);return}if(V!==2&&C&1&&y)if(V===0)y.beforeEnter(K),i(K,w,O),Ot(()=>y.enter(K),Y);else{const{leave:X,delayLeave:H,afterLeave:he}=y,oe=()=>i(K,w,O),me=()=>{X(K,()=>{oe(),he&&he()})};H?H(K,oe,me):me()}else i(K,w,O)},Ne=(b,w,O,V=!1,Y=!1)=>{const{type:K,props:ie,ref:y,children:_,dynamicChildren:C,shapeFlag:k,patchFlag:X,dirs:H,cacheIndex:he}=b;if(X===-2&&(Y=!1),y!=null&&hl(y,null,O,b,!0),he!=null&&(w.renderCache[he]=void 0),k&256){w.ctx.deactivate(b);return}const oe=k&1&&H,me=!lo(b);let be;if(me&&(be=ie&&ie.onVnodeBeforeUnmount)&&xn(be,w,b),k&6)pe(b.component,O,V);else{if(k&128){b.suspense.unmount(O,V);return}oe&&Ti(b,null,w,"beforeUnmount"),k&64?b.type.remove(b,w,O,de,V):C&&!C.hasOnce&&(K!==Bt||X>0&&X&64)?Me(C,w,O,!1,!0):(K===Bt&&X&384||!Y&&k&16)&&Me(_,w,O),V&&je(b)}(me&&(be=ie&&ie.onVnodeUnmounted)||oe)&&Ot(()=>{be&&xn(be,w,b),oe&&Ti(b,null,w,"unmounted")},O)},je=b=>{const{type:w,el:O,anchor:V,transition:Y}=b;if(w===Bt){ne(O,V);return}if(w===fo){A(b);return}const K=()=>{r(O),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(b.shapeFlag&1&&Y&&!Y.persisted){const{leave:ie,delayLeave:y}=Y,_=()=>ie(O,K);y?y(b.el,K,_):_()}else K()},ne=(b,w)=>{let O;for(;b!==w;)O=d(b),r(b),b=O;r(w)},pe=(b,w,O)=>{const{bum:V,scope:Y,update:K,subTree:ie,um:y,m:_,a:C}=b;cu(_),cu(C),V&&oo(V),Y.stop(),K&&(K.active=!1,Ne(ie,b,w,O)),y&&Ot(y,w),Ot(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Me=(b,w,O,V=!1,Y=!1,K=0)=>{for(let ie=K;ie<b.length;ie++)Ne(b[ie],w,O,V,Y)},U=b=>{if(b.shapeFlag&6)return U(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const w=d(b.anchor||b.el),O=w&&w[Qm];return O?d(O):w};let ce=!1;const re=(b,w,O)=>{b==null?w._vnode&&Ne(w._vnode,null,null,!0):v(w._vnode||null,b,w,null,null,null,O),ce||(ce=!0,nu(),Nd(),ce=!1),w._vnode=b},de={p:v,um:Ne,m:Ae,r:je,mt:le,mc:z,pc:G,pbc:M,n:U,o:t};let Le,P;return{render:re,hydrate:Le,createApp:qm(re,Le)}}function _a({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function wi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ig(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ih(t,e,n=!1){const i=t.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ai(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&ih(o,a)),a.type===jo&&(a.el=o.el)}}function rg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function rh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rh(e)}function cu(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const sg=Symbol.for("v-scx"),og=()=>Xn(sg),Us={};function uo(t,e,n){return sh(t,e,n)}function sh(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=ut){if(e&&s){const R=e;e=(...L)=>{R(...L),B()}}const l=Ct,c=R=>i===!0?R:ci(R,i===!1?1:void 0);let u,f=!1,d=!1;if(Xt(t)?(u=()=>t.value,f=Rr(t)):ts(t)?(u=()=>c(t),f=!0):Ue(t)?(d=!0,f=t.some(R=>ts(R)||Rr(R)),u=()=>t.map(R=>{if(Xt(R))return R.value;if(ts(R))return c(R);if(He(R))return hi(R,l,2)})):He(t)?e?u=()=>hi(t,l,2):u=()=>(m&&m(),pn(t,l,3,[g])):u=nn,e&&i){const R=u;u=()=>ci(R())}let m,g=R=>{m=x.onStop=()=>{hi(R,l,4),m=x.onStop=void 0}},v;if(Yo)if(g=nn,e?n&&pn(e,l,3,[u(),d?[]:void 0,g]):u(),r==="sync"){const R=og();v=R.__watcherHandles||(R.__watcherHandles=[])}else return nn;let h=d?new Array(t.length).fill(Us):Us;const p=()=>{if(!(!x.active||!x.dirty))if(e){const R=x.run();(i||f||(d?R.some((L,z)=>gi(L,h[z])):gi(R,h)))&&(m&&m(),pn(e,l,3,[R,h===Us?void 0:d&&h[0]===Us?[]:h,g]),h=R)}else x.run()};p.allowRecurse=!!e;let E;r==="sync"?E=p:r==="post"?E=()=>Ot(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),E=()=>xc(p));const x=new fc(u,nn,E),A=Jp(),B=()=>{x.stop(),A&&lc(A.effects,x)};return e?n?p():h=x.run():r==="post"?Ot(x.run.bind(x),l&&l.suspense):x.run(),v&&v.push(B),B}function ag(t,e,n){const i=this.proxy,r=_t(t)?t.includes(".")?oh(i,t):()=>i[t]:t.bind(i,i);let s;He(e)?s=e:(s=e.handler,n=e);const o=xs(this),a=sh(r,s.bind(i),n);return o(),a}function oh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ci(t,e=1/0,n){if(e<=0||!at(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Xt(t))ci(t.value,e,n);else if(Ue(t))for(let i=0;i<t.length;i++)ci(t[i],e,n);else if(Bo(t)||yr(t))t.forEach(i=>{ci(i,e,n)});else if(ad(t)){for(const i in t)ci(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ci(t[i],e,n)}return t}const lg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${Zi(e)}Modifiers`];function cg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ut;let r=n;const s=e.startsWith("update:"),o=s&&lg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>_t(u)?u.trim():u)),o.number&&(r=n.map(il)));let a,l=i[a=pa(e)]||i[a=pa(mn(e))];!l&&s&&(l=i[a=pa(Zi(e))]),l&&pn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pn(c,t,6,r)}}function ah(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!He(t)){const l=c=>{const u=ah(c,e,!0);u&&(a=!0,Pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(at(t)&&i.set(t,null),null):(Ue(s)?s.forEach(l=>o[l]=null):Pt(o,s),at(t)&&i.set(t,o),o)}function $o(t,e){return!t||!Fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(t,e[0].toLowerCase()+e.slice(1))||Ze(t,Zi(e))||Ze(t,e))}function va(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:g,inheritAttrs:v}=t,h=Eo(t);let p,E;try{if(n.shapeFlag&4){const A=r||i,B=A;p=Mn(c.call(B,A,u,f,m,d,g)),E=a}else{const A=e;p=Mn(A.length>1?A(f,{attrs:a,slots:o,emit:l}):A(f,null)),E=e.props?a:ug(a)}}catch(A){ss.length=0,Wo(A,t,1),p=ct($i)}let x=p;if(E&&v!==!1){const A=Object.keys(E),{shapeFlag:B}=x;A.length&&B&7&&(s&&A.some(ac)&&(E=fg(E,s)),x=Cr(x,E,!1,!0))}return n.dirs&&(x=Cr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),p=x,Eo(h),p}const ug=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fo(n))&&((e||(e={}))[n]=t[n]);return e},fg=(t,e)=>{const n={};for(const i in t)(!ac(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function dg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?uu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!$o(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?uu(i,o,c):!0:!!o;return!1}function uu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!$o(n,s))return!0}return!1}function hg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const pg=t=>t.__isSuspense;function mg(t,e){e&&e.pendingBranch?Ue(t)?e.effects.push(...t):e.effects.push(t):wm(t)}const Bt=Symbol.for("v-fgt"),jo=Symbol.for("v-txt"),$i=Symbol.for("v-cmt"),fo=Symbol.for("v-stc"),ss=[];let Zt=null;function We(t=!1){ss.push(Zt=t?null:[])}function gg(){ss.pop(),Zt=ss[ss.length-1]||null}let hs=1;function fu(t){hs+=t,t<0&&Zt&&(Zt.hasOnce=!0)}function lh(t){return t.dynamicChildren=hs>0?Zt||Sr:null,gg(),hs>0&&Zt&&Zt.push(t),t}function $e(t,e,n,i,r,s){return lh(ee(t,e,n,i,r,s,!0))}function ch(t,e,n,i,r){return lh(ct(t,e,n,i,r,!0))}function pl(t){return t?t.__v_isVNode===!0:!1}function Vr(t,e){return t.type===e.type&&t.key===e.key}const uh=({key:t})=>t??null,ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_t(t)||Xt(t)||He(t)?{i:Kt,r:t,k:e,f:!!n}:t:null);function ee(t,e=null,n=null,i=0,r=null,s=t===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uh(e),ref:e&&ho(e),scopeId:Xo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Kt};return a?(Ec(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),hs>0&&!o&&Zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zt.push(l),l}const ct=_g;function _g(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Wd)&&(t=$i),pl(t)){const a=Cr(t,e,!0);return n&&Ec(a,n),hs>0&&!s&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(t)]=a:Zt.push(a)),a.patchFlag=-2,a}if(Rg(t)&&(t=t.__vccOpts),e){e=vg(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=Ft(a)),at(l)&&(Ad(l)&&!Ue(l)&&(l=Pt({},l)),e.style=uc(l))}const o=_t(t)?1:pg(t)?128:eg(t)?64:at(t)?4:He(t)?2:0;return ee(t,e,n,i,r,o,s,!0)}function vg(t){return t?Ad(t)||Kd(t)?Pt({},t):t:null}function Cr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?xg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&uh(c),ref:e&&e.ref?n&&s?Ue(s)?s.concat(ho(e)):[s,ho(e)]:ho(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cr(t.ssContent),ssFallback:t.ssFallback&&Cr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Fd(u,l.clone(u)),u}function yn(t=" ",e=0){return ct(jo,null,t,e)}function fh(t,e){const n=ct(fo,null,t);return n.staticCount=e,n}function Tt(t="",e=!1){return e?(We(),ch($i,null,t)):ct($i,null,t)}function Mn(t){return t==null||typeof t=="boolean"?ct($i):Ue(t)?ct(Bt,null,t.slice()):typeof t=="object"?ai(t):ct(jo,null,String(t))}function ai(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cr(t)}function Ec(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ue(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ec(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Kd(e)?e._ctx=Kt:r===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:Kt},n=32):(e=String(e),i&64?(n=16,e=[yn(e)]):n=8);t.children=e,t.shapeFlag|=n}function xg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ft([e.class,i.class]));else if(r==="style")e.style=uc([e.style,i.style]);else if(Fo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ue(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function xn(t,e,n,i=null){pn(t,e,7,[n,i])}const Sg=$d();let yg=0;function Mg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Sg,s={uid:yg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jd(i,r),emitsOptions:ah(i,r),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=cg.bind(null,s),t.ce&&t.ce(s),s}let Ct=null,To,ml;{const t=cd(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};To=e("__VUE_INSTANCE_SETTERS__",n=>Ct=n),ml=e("__VUE_SSR_SETTERS__",n=>Yo=n)}const xs=t=>{const e=Ct;return To(t),t.scope.on(),()=>{t.scope.off(),To(e)}},du=()=>{Ct&&Ct.scope.off(),To(null)};function dh(t){return t.vnode.shapeFlag&4}let Yo=!1;function Eg(t,e=!1,n=!1){e&&ml(e);const{props:i,children:r}=t.vnode,s=dh(t);$m(t,i,s,e),Zm(t,r,n);const o=s?bg(t,e):void 0;return e&&ml(!1),o}function bg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,km);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?wg(t):null,s=xs(t);xi();const o=hi(i,t,0,[t.props,r]);if(Si(),s(),sd(o)){if(o.then(du,du),e)return o.then(a=>{hu(t,a,e)}).catch(a=>{Wo(a,t,0)});t.asyncDep=o}else hu(t,o,e)}else hh(t,e)}function hu(t,e,n){He(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=Ld(e)),hh(t,n)}let pu;function hh(t,e,n){const i=t.type;if(!t.render){if(!e&&pu&&!i.render){const r=i.template||yc(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Pt(Pt({isCustomElement:s,delimiters:a},o),l);i.render=pu(r,c)}}t.render=i.render||nn}{const r=xs(t);xi();try{zm(t)}finally{Si(),r()}}}const Tg={get(t,e){return Wt(t,"get",""),t[e]}};function wg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Tg),slots:t.slots,emit:t.emit,expose:e}}function Ko(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ld(vm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in is)return is[n](t)},has(e,n){return n in e||n in is}})):t.proxy}function Ag(t,e=!0){return He(t)?t.displayName||t.name:t.name||e&&t.__name}function Rg(t){return He(t)&&"__vccOpts"in t}const un=(t,e)=>xm(t,e,Yo);function ph(t,e,n){const i=arguments.length;return i===2?at(e)&&!Ue(e)?pl(e)?ct(t,null,[e]):ct(t,e):ct(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&pl(n)&&(n=[n]),ct(t,e,n))}const Cg="3.4.35";/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Pg="http://www.w3.org/2000/svg",Lg="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,mu=kn&&kn.createElement("template"),Dg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?kn.createElementNS(Pg,t):e==="mathml"?kn.createElementNS(Lg,t):n?kn.createElement(t,{is:n}):kn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{mu.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=mu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ig=Symbol("_vtc");function Ug(t,e,n){const i=t[Ig];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gu=Symbol("_vod"),Ng=Symbol("_vsh"),Og=Symbol(""),Fg=/(^|;)\s*display\s*:/;function Bg(t,e,n){const i=t.style,r=_t(n);let s=!1;if(n&&!r){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&po(i,a,"")}else for(const o in e)n[o]==null&&po(i,o,"");for(const o in n)o==="display"&&(s=!0),po(i,o,n[o])}else if(r){if(e!==n){const o=i[Og];o&&(n+=";"+o),i.cssText=n,s=Fg.test(n)}}else e&&t.removeAttribute("style");gu in t&&(t[gu]=s?i.display:"",t[Ng]&&(i.display="none"))}const _u=/\s*!important$/;function po(t,e,n){if(Ue(n))n.forEach(i=>po(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=kg(t,e);_u.test(n)?t.setProperty(Zi(i),n.replace(_u,""),"important"):t[i]=n}}const vu=["Webkit","Moz","ms"],xa={};function kg(t,e){const n=xa[e];if(n)return n;let i=mn(e);if(i!=="filter"&&i in t)return xa[e]=i;i=zo(i);for(let r=0;r<vu.length;r++){const s=vu[r]+i;if(s in t)return xa[e]=s}return e}const xu="http://www.w3.org/1999/xlink";function Su(t,e,n,i,r,s=jp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xu,e.slice(6,e.length)):t.setAttributeNS(xu,e,n):n==null||s&&!ud(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Rn(n)?String(n):n)}function zg(t,e,n,i){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=ud(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}function Fi(t,e,n,i){t.addEventListener(e,n,i)}function Hg(t,e,n,i){t.removeEventListener(e,n,i)}const yu=Symbol("_vei");function Vg(t,e,n,i,r=null){const s=t[yu]||(t[yu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Gg(e);if(i){const c=s[e]=qg(i,r);Fi(t,a,c,l)}else o&&(Hg(t,a,o,l),s[e]=void 0)}}const Mu=/(?:Once|Passive|Capture)$/;function Gg(t){let e;if(Mu.test(t)){e={};let i;for(;i=t.match(Mu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zi(t.slice(2)),e]}let Sa=0;const Wg=Promise.resolve(),Xg=()=>Sa||(Wg.then(()=>Sa=0),Sa=Date.now());function qg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;pn($g(i,n.value),e,5,[i])};return n.value=t,n.attached=Xg(),n}function $g(t,e){if(Ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Eu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jg=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Ug(t,i,o):e==="style"?Bg(t,n,i):Fo(e)?ac(e)||Vg(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yg(t,e,i,o))?(zg(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Su(t,e,i,o,s,e!=="value")):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Su(t,e,i,o))};function Yg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Eu(e)&&He(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Eu(e)&&_t(n)?!1:e in t}const wo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ue(e)?n=>oo(e,n):e};function Kg(t){t.target.composing=!0}function bu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const br=Symbol("_assign"),_r={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[br]=wo(r);const s=i||r.props&&r.props.type==="number";Fi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=il(a)),t[br](a)}),n&&Fi(t,"change",()=>{t.value=t.value.trim()}),e||(Fi(t,"compositionstart",Kg),Fi(t,"compositionend",bu),Fi(t,"change",bu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[br]=wo(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?il(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},Zg={deep:!0,created(t,e,n){t[br]=wo(n),Fi(t,"change",()=>{const i=t._modelValue,r=Jg(t),s=t.checked,o=t[br];if(Ue(i)){const a=fd(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Bo(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(mh(t,s))})},mounted:Tu,beforeUpdate(t,e,n){t[br]=wo(n),Tu(t,e,n)}};function Tu(t,{value:e,oldValue:n},i){t._modelValue=e,Ue(e)?t.checked=fd(e,i.props.value)>-1:Bo(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Ho(e,mh(t,!0)))}function Jg(t){return"_value"in t?t._value:t.value}function mh(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Qg=["ctrl","shift","alt","meta"],e_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qg.some(n=>t[`${n}Key`]&&!e.includes(n))},Zo=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=e_[e[o]];if(a&&a(r,e))return}return t(r,...s)})},t_=Pt({patchProp:jg},Dg);let wu;function n_(){return wu||(wu=tg(t_))}const i_=(...t)=>{const e=n_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=s_(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function r_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function s_(t){return _t(t)?document.querySelector(t):t}const o_="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='2000.000000pt'%20height='707.000000pt'%20viewBox='0%200%202000.000000%20707.000000'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20transform='translate(0.000000,707.000000)%20scale(0.100000,-0.100000)'%20fill='%23000000'%20stroke='none'%3e%3cpath%20d='M800%207056%20c-93%20-25%20-156%20-82%20-185%20-167%20-9%20-28%20-44%20-384%20-95%20-964%20-128%20-1464%20-314%20-3586%20-396%20-4520%20-69%20-789%20-75%20-867%20-64%20-944%2020%20-147%2069%20-250%20157%20-333%2055%20-51%20100%20-76%20183%20-104%2052%20-18%20119%20-19%201310%20-22%20868%20-2%201270%201%201306%208%20103%2022%20193%20112%20209%20209%203%2020%2023%20243%2045%20496%2022%20253%2043%20484%2046%20512%20l6%2053%20-961%200%20-961%200%200%2035%20c0%2018%2040%20494%2090%201057%2049%20563%20144%201644%20210%202403%2066%20759%20138%201582%20160%201829%2022%20247%2040%20453%2040%20457%200%2015%20-1047%2010%20-1100%20-5z'/%3e%3cpath%20d='M3437%207054%20c-366%20-66%20-604%20-283%20-682%20-618%20-8%20-34%20-41%20-370%20-75%20-748%20-33%20-379%20-87%20-995%20-120%20-1370%20-33%20-376%20-78%20-892%20-101%20-1148%20-47%20-530%20-47%20-617%20-4%20-765%2035%20-120%2085%20-206%20164%20-285%2074%20-73%20150%20-117%20261%20-152%20l75%20-23%201905%20-3%20c2106%20-3%201991%20-6%202170%2061%20117%2044%20189%2088%20273%20167%20122%20113%20198%20253%20231%20427%209%2043%2029%20236%2045%20428%2042%20485%20203%202324%20252%202875%2045%20512%2044%20565%20-11%20730%20-40%20119%20-73%20174%20-154%20255%20-81%2080%20-158%20125%20-273%20158%20l-78%2022%20-1900%202%20c-1608%201%20-1912%20-1%20-1978%20-13z%20m3103%20-1271%20c0%20-5%20-47%20-537%20-104%20-1183%20-79%20-896%20-107%20-1184%20-120%20-1215%20-22%20-53%20-69%20-101%20-131%20-133%20l-50%20-27%20-1192%20-3%20-1193%20-2%200%2030%20c0%2017%2013%20182%2030%20368%2016%20185%2061%20699%20100%201142%2039%20443%2075%20821%2081%20840%2016%2052%2056%20105%2099%20134%2086%2057%2033%2055%201308%2055%20644%201%201172%20-2%201172%20-6z'/%3e%3cpath%20d='M9495%207059%20c-199%20-29%20-370%20-113%20-501%20-243%20-116%20-116%20-182%20-245%20-213%20-416%20-6%20-36%20-31%20-294%20-56%20-575%20-24%20-280%20-97%20-1104%20-161%20-1830%20-85%20-975%20-114%20-1341%20-110%20-1401%2019%20-266%20146%20-483%20337%20-576%20158%20-78%2041%20-72%201497%20-75%20l1302%20-4%200%20-25%20c0%20-75%20-33%20-387%20-46%20-433%20-19%20-67%20-88%20-139%20-159%20-167%20-48%20-18%20-90%20-19%20-909%20-22%20-473%20-1%20-861%20-3%20-862%20-5%20-1%20-1%20-23%20-240%20-49%20-530%20-44%20-507%20-45%20-530%20-30%20-583%2019%20-66%2071%20-128%20123%20-146%2030%20-10%20268%20-13%201197%20-13%201086%200%201165%201%201245%2018%20363%2079%20601%20314%20660%20652%206%2039%2035%20337%2063%20664%2042%20481%2055%20595%2067%20601%208%204%2051%2017%2095%2029%20237%2064%20406%20198%20510%20403%2072%20143%2078%20184%20160%201133%2041%20473%20114%201307%20162%201854%2082%20934%2086%20999%2075%201086%20-40%20314%20-196%20510%20-469%20588%20l-78%2022%20-1895%201%20c-1045%201%20-1922%20-2%20-1955%20-7z%20m3075%20-1286%20c0%20-37%20-200%20-2310%20-206%20-2338%20-18%20-91%20-95%20-173%20-188%20-200%20-71%20-21%20-2396%20-23%20-2396%20-2%200%208%2027%20319%2060%20693%2032%20373%2077%20891%20100%201149%2022%20259%2048%20494%2056%20523%2025%2088%20103%20158%20201%20181%2021%205%20563%209%201206%2010%201097%201%201167%200%201167%20-16z'/%3e%3cpath%20d='M15508%207055%20c-381%20-64%20-639%20-312%20-697%20-670%20-6%20-39%20-54%20-563%20-106%20-1165%20-52%20-602%20-104%20-1194%20-115%20-1315%20-100%20-1106%20-111%20-1255%20-100%20-1343%2043%20-357%20233%20-566%20556%20-612%2057%20-8%20608%20-10%201969%20-8%20l1890%203%2085%2023%20c109%2029%20269%20107%20345%20169%20124%20101%20215%20249%20255%20413%2014%2062%2046%20384%20115%201170%2052%20597%20125%201420%20161%201830%2072%20816%2075%20898%2034%201040%20-62%20218%20-186%20359%20-376%20429%20-44%2016%20-116%2034%20-158%2040%20-121%2017%20-3756%2013%20-3858%20-4z%20m3092%20-1299%20c0%20-75%20-201%20-2313%20-210%20-2348%20-17%20-60%20-69%20-119%20-135%20-153%20l-59%20-30%20-1193%20-3%20-1194%20-2%206%2057%20c4%2032%2051%20562%20104%201178%2088%201006%20100%201126%20120%201170%2035%2080%2092%20127%20181%20151%2034%2010%20323%2013%201213%2013%20l1167%201%200%20-34z'/%3e%3c/g%3e%3c/svg%3e",Cn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},gh=t=>(yi("data-v-c01b9871"),t=t(),Mi(),t),a_={class:"bg-gray-100 shadow-md dark:bg-[#262626]"},l_={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},c_={class:"relative flex items-center justify-between h-16"},u_={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},f_=gh(()=>ee("span",{class:"sr-only"},"Open menu",-1)),d_={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},h_=gh(()=>ee("img",{class:"h-8 w-auto dark:invert",src:o_,alt:"Logo"},null,-1)),p_={class:"hidden sm:block sm:ml-6"},m_={class:"flex space-x-4"},g_={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},__={class:"ml-4"},v_={for:"darkModeToggle",class:"inline-flex relative items-center cursor-pointer"},x_=["checked"],S_={class:"w-14 h-8 bg-gray-200 rounded-full dark:bg-gray-700 relative transition duration-500"},y_={key:0,class:"fas fa-moon text-blue-500"},M_={key:1,class:"fas fa-sun text-yellow-500"},E_={key:0,class:"sm:hidden",id:"mobile-menu"},b_={class:"px-2 pt-2 pb-3 space-y-1"},T_={__name:"NavBar",setup(t){const e=fi(!1),n=fi(!1),i=()=>{e.value=!e.value},r=()=>{n.value=!n.value,document.documentElement.classList.toggle("dark",n.value),localStorage.setItem("darkMode",n.value?"enabled":"disabled")};return Sc(()=>{localStorage.getItem("darkMode")==="enabled"?(n.value=!0,document.documentElement.classList.add("dark")):(n.value=!1,document.documentElement.classList.remove("dark"))}),(s,o)=>{const a=ns("router-link");return We(),$e("nav",a_,[ee("div",l_,[ee("div",c_,[ee("div",u_,[ee("button",{onClick:i,class:"inline-flex items-center justify-center p-2 transition text-gray-900 dark:text-white"},[f_,ee("i",{class:Ft(["fas",e.value?"fa-times":"fa-bars","h-6","w-6","transition","duration-300","transform",{"rotate-90":e.value}])},null,2)])]),ee("div",d_,[ct(a,{to:"/",class:"flex-shrink-0","aria-current":"page"},{default:Bn(()=>[h_]),_:1}),ee("div",p_,[ee("ul",m_,[ee("li",null,[ct(a,{to:"/search",class:"text-black dark:text-white px-3 py-2 rounded-md text-sm font-medium"},{default:Bn(()=>[yn("Search")]),_:1})]),ee("li",null,[ct(a,{to:"/games",class:"text-black dark:text-white px-3 py-2 rounded-md text-sm font-medium"},{default:Bn(()=>[yn("Games")]),_:1})]),ee("li",null,[ct(a,{to:"/info",class:"text-black dark:text-white px-3 py-2 rounded-md text-sm font-medium"},{default:Bn(()=>[yn("Info")]),_:1})])])])]),ee("div",g_,[ee("div",__,[ee("label",v_,[ee("input",{type:"checkbox",id:"darkModeToggle",class:"sr-only",onChange:r,checked:n.value},null,40,x_),ee("div",S_,[ee("div",{class:Ft(["absolute top-1 left-1 w-6 h-6 bg-yellow-200 rounded-full dark:bg-gray-500 transition-all duration-500 transform flex items-center justify-center",{"translate-x-6":n.value}])},[n.value?(We(),$e("i",y_)):(We(),$e("i",M_))],2)])])])])])]),e.value?(We(),$e("div",E_,[ee("ul",b_,[ee("li",null,[ct(a,{to:"/search",class:"text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium"},{default:Bn(()=>[yn("Search")]),_:1})]),ee("li",null,[ct(a,{to:"/games",class:"text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium"},{default:Bn(()=>[yn("Games")]),_:1})]),ee("li",null,[ct(a,{to:"/info",class:"text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium"},{default:Bn(()=>[yn("Info")]),_:1})])])])):Tt("",!0)])}}},w_=Cn(T_,[["__scopeId","data-v-c01b9871"]]),A_={},R_={class:"bg-gray-100 dark:bg-[#262626] shadow-md py-6"},C_={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},P_={class:"flex flex-col md:flex-row justify-between items-center"},L_={class:"mb-4 md:mb-0"},D_={class:"text-gray-900 dark:text-gray-200 text-center md:text-left"},I_=fh('<div class="flex space-x-6" data-v-bc17dd63><a href="https://www.instagram.com" target="_blank" class="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition" aria-label="Instagram" data-v-bc17dd63><i class="fab fa-instagram" data-v-bc17dd63></i></a><a href="https://www.linkedin.com/in/alejandro-newport-diaz-67087a225" target="_blank" class="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition" aria-label="LinkedIn" data-v-bc17dd63><i class="fab fa-linkedin-in" data-v-bc17dd63></i></a><a href="https://github.com/Ale-Newport" target="_blank" class="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition" aria-label="GitHub" data-v-bc17dd63><i class="fab fa-github" data-v-bc17dd63></i></a></div>',1);function U_(t,e){const n=ns("router-link");return We(),$e("footer",R_,[ee("div",C_,[ee("div",P_,[ee("div",L_,[ee("p",D_,[yn(" Developed by "),ct(n,{to:"/info",class:"no-underline hover:underline text-gray-900 dark:text-gray-200 transition duration-300"},{default:Bn(()=>[yn(" Alejandro Newport ")]),_:1})])]),I_])])])}const N_=Cn(A_,[["render",U_],["__scopeId","data-v-bc17dd63"]]),O_={name:"App",components:{NavBar:w_,FooterBar:N_}},F_={id:"app",class:"min-h-screen flex flex-col"},B_={class:"flex-grow"};function k_(t,e,n,i,r,s){const o=ns("NavBar"),a=ns("router-view"),l=ns("FooterBar");return We(),$e("div",F_,[ct(o,{class:"z-10"}),ee("main",B_,[ct(a)]),ct(l)])}const z_=Cn(O_,[["render",k_]]);/*!
  * vue-router v4.4.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof document<"u";function H_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ot=Object.assign;function ya(t,e){const n={};for(const i in e){const r=e[i];n[i]=gn(r)?r.map(t):t(r)}return n}const os=()=>{},gn=Array.isArray,_h=/#/g,V_=/&/g,G_=/\//g,W_=/=/g,X_=/\?/g,vh=/\+/g,q_=/%5B/g,$_=/%5D/g,xh=/%5E/g,j_=/%60/g,Sh=/%7B/g,Y_=/%7C/g,yh=/%7D/g,K_=/%20/g;function bc(t){return encodeURI(""+t).replace(Y_,"|").replace(q_,"[").replace($_,"]")}function Z_(t){return bc(t).replace(Sh,"{").replace(yh,"}").replace(xh,"^")}function gl(t){return bc(t).replace(vh,"%2B").replace(K_,"+").replace(_h,"%23").replace(V_,"%26").replace(j_,"`").replace(Sh,"{").replace(yh,"}").replace(xh,"^")}function J_(t){return gl(t).replace(W_,"%3D")}function Q_(t){return bc(t).replace(_h,"%23").replace(X_,"%3F")}function e0(t){return t==null?"":Q_(t).replace(G_,"%2F")}function ps(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const t0=/\/$/,n0=t=>t.replace(t0,"");function Ma(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=o0(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ps(o)}}function i0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Au(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function r0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Pr(e.matched[i],n.matched[r])&&Mh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!s0(t[n],e[n]))return!1;return!0}function s0(t,e){return gn(t)?Ru(t,e):gn(e)?Ru(e,t):t===e}function Ru(t,e){return gn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function o0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ms;(function(t){t.pop="pop",t.push="push"})(ms||(ms={}));var as;(function(t){t.back="back",t.forward="forward",t.unknown=""})(as||(as={}));function a0(t){if(!t)if(vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),n0(t)}const l0=/^[^#]+#/;function c0(t,e){return t.replace(l0,"#")+e}function u0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Jo=()=>({left:window.scrollX,top:window.scrollY});function f0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=u0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Cu(t,e){return(history.state?history.state.position-e:-1)+t}const _l=new Map;function d0(t,e){_l.set(t,e)}function h0(t){const e=_l.get(t);return _l.delete(t),e}let p0=()=>location.protocol+"//"+location.host;function Eh(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Au(l,"")}return Au(n,t)+i+r}function m0(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const m=Eh(t,location),g=n.value,v=e.value;let h=0;if(d){if(n.value=m,e.value=d,o&&o===g){o=null;return}h=v?d.position-v.position:0}else i(m);r.forEach(p=>{p(n.value,g,{delta:h,type:ms.pop,direction:h?h>0?as.forward:as.back:as.unknown})})};function l(){o=n.value}function c(d){r.push(d);const m=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(ot({},d.state,{scroll:Jo()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Pu(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Jo():null}}function g0(t){const{history:e,location:n}=window,i={value:Eh(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:p0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(l,c){const u=ot({},e.state,Pu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:Jo()});s(u.current,u,!0);const f=ot({},Pu(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function _0(t){t=a0(t);const e=g0(t),n=m0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ot({location:"",base:t,go:i,createHref:c0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function v0(t){return typeof t=="string"||t&&typeof t=="object"}function bh(t){return typeof t=="string"||typeof t=="symbol"}const Th=Symbol("");var Lu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lu||(Lu={}));function Lr(t,e){return ot(new Error,{type:t,[Th]:!0},e)}function Ln(t,e){return t instanceof Error&&Th in t&&(e==null||!!(t.type&e))}const Du="[^/]+?",x0={sensitive:!1,strict:!1,start:!0,end:!0},S0=/[.+*?^${}()[\]/\\]/g;function y0(t,e){const n=ot({},x0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(S0,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:v,optional:h,regexp:p}=d;s.push({name:g,repeatable:v,optional:h});const E=p||Du;if(E!==Du){m+=10;try{new RegExp(`(${E})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+A.message)}}let x=v?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(x=h&&c.length<2?`(?:/${x})`:"/"+x),h&&(x+="?"),r+=x,m+=20,h&&(m+=-8),v&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",g=s[d-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:v,optional:h}=m,p=g in c?c[g]:"";if(gn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=gn(p)?p.join("/"):p;if(!E)if(h)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function M0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function wh(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=M0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Iu(i))return 1;if(Iu(r))return-1}return r.length-i.length}function Iu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const E0={type:0,value:""},b0=/[a-zA-Z0-9_]/;function T0(t){if(!t)return[[]];if(t==="/")return[[E0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:b0.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function w0(t,e,n){const i=y0(T0(t.path),n),r=ot(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function A0(t,e){const n=[],i=new Map;e=Ou({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,m){const g=!m,v=R0(f);v.aliasOf=m&&m.record;const h=Ou(e,f),p=[v];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const B of A)p.push(ot({},v,{components:m?m.record.components:v.components,path:B,aliasOf:m?m.record:v}))}let E,x;for(const A of p){const{path:B}=A;if(d&&B[0]!=="/"){const R=d.record.path,L=R[R.length-1]==="/"?"":"/";A.path=d.record.path+(B&&L+B)}if(E=w0(A,d,h),m?m.alias.push(E):(x=x||E,x!==E&&x.alias.push(E),g&&f.name&&!Nu(E)&&o(f.name)),Ah(E)&&l(E),v.children){const R=v.children;for(let L=0;L<R.length;L++)s(R[L],E,m&&m.children[L])}m=m||E}return x?()=>{o(x)}:os}function o(f){if(bh(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=L0(f,n);n.splice(d,0,f),f.record.name&&!Nu(f)&&i.set(f.record.name,f)}function c(f,d){let m,g={},v,h;if("name"in f&&f.name){if(m=i.get(f.name),!m)throw Lr(1,{location:f});h=m.record.name,g=ot(Uu(d.params,m.keys.filter(x=>!x.optional).concat(m.parent?m.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&Uu(f.params,m.keys.map(x=>x.name))),v=m.stringify(g)}else if(f.path!=null)v=f.path,m=n.find(x=>x.re.test(v)),m&&(g=m.parse(v),h=m.record.name);else{if(m=d.name?i.get(d.name):n.find(x=>x.re.test(d.path)),!m)throw Lr(1,{location:f,currentLocation:d});h=m.record.name,g=ot({},d.params,f.params),v=m.stringify(g)}const p=[];let E=m;for(;E;)p.unshift(E.record),E=E.parent;return{name:h,path:v,params:g,matched:p,meta:P0(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Uu(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function R0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:C0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function C0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Nu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function P0(t){return t.reduce((e,n)=>ot(e,n.meta),{})}function Ou(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function L0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;wh(t,e[s])<0?i=s:n=s+1}const r=D0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function D0(t){let e=t;for(;e=e.parent;)if(Ah(e)&&wh(t,e)===0)return e}function Ah({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function I0(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(vh," "),o=s.indexOf("="),a=ps(o<0?s:s.slice(0,o)),l=o<0?null:ps(s.slice(o+1));if(a in e){let c=e[a];gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Fu(t){let e="";for(let n in t){const i=t[n];if(n=J_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(i)?i.map(s=>s&&gl(s)):[i&&gl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function U0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=gn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const N0=Symbol(""),Bu=Symbol(""),Tc=Symbol(""),Rh=Symbol(""),vl=Symbol("");function Gr(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function li(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Lr(4,{from:n,to:e})):d instanceof Error?l(d):v0(d)?l(Lr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Ea(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(O0(l)){const u=(l.__vccOpts||l)[e];u&&s.push(li(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=H_(u)?u.default:u;o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&li(m,n,i,o,a,r)()}))}}return s}function O0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ku(t){const e=Xn(Tc),n=Xn(Rh),i=un(()=>{const l=Mr(t.to);return e.resolve(l)}),r=un(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Pr.bind(null,u));if(d>-1)return d;const m=zu(l[c-2]);return c>1&&zu(u)===m&&f[f.length-1].path!==m?f.findIndex(Pr.bind(null,l[c-2])):d}),s=un(()=>r.value>-1&&z0(n.params,i.value.params)),o=un(()=>r.value>-1&&r.value===n.matched.length-1&&Mh(n.params,i.value.params));function a(l={}){return k0(l)?e[Mr(t.replace)?"replace":"push"](Mr(t.to)).catch(os):Promise.resolve()}return{route:i,href:un(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const F0=Bd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ku,setup(t,{slots:e}){const n=Go(ku(t)),{options:i}=Xn(Tc),r=un(()=>({[Hu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Hu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ph("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),B0=F0;function k0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function z0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!gn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function zu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hu=(t,e,n)=>t??e??n,H0=Bd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Xn(vl),r=un(()=>t.route||i.value),s=Xn(Bu,0),o=un(()=>{let c=Mr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=un(()=>r.value.matched[o.value]);co(Bu,un(()=>o.value+1)),co(N0,a),co(vl,r);const l=fi();return uo(()=>[l.value,a.value,t.name],([c,u,f],[d,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Pr(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Vu(n.default,{Component:d,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,h=ph(d,ot({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Vu(n.default,{Component:h,route:c})||h}}});function Vu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const V0=H0;function G0(t){const e=A0(t.routes,t),n=t.parseQuery||I0,i=t.stringifyQuery||Fu,r=t.history,s=Gr(),o=Gr(),a=Gr(),l=Sm(Jn);let c=Jn;vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ya.bind(null,U=>""+U),f=ya.bind(null,e0),d=ya.bind(null,ps);function m(U,ce){let re,de;return bh(U)?(re=e.getRecordMatcher(U),de=ce):de=U,e.addRoute(de,re)}function g(U){const ce=e.getRecordMatcher(U);ce&&e.removeRoute(ce)}function v(){return e.getRoutes().map(U=>U.record)}function h(U){return!!e.getRecordMatcher(U)}function p(U,ce){if(ce=ot({},ce||l.value),typeof U=="string"){const w=Ma(n,U,ce.path),O=e.resolve({path:w.path},ce),V=r.createHref(w.fullPath);return ot(w,O,{params:d(O.params),hash:ps(w.hash),redirectedFrom:void 0,href:V})}let re;if(U.path!=null)re=ot({},U,{path:Ma(n,U.path,ce.path).path});else{const w=ot({},U.params);for(const O in w)w[O]==null&&delete w[O];re=ot({},U,{params:f(w)}),ce.params=f(ce.params)}const de=e.resolve(re,ce),Le=U.hash||"";de.params=u(d(de.params));const P=i0(i,ot({},U,{hash:Z_(Le),path:de.path})),b=r.createHref(P);return ot({fullPath:P,hash:Le,query:i===Fu?U0(U.query):U.query||{}},de,{redirectedFrom:void 0,href:b})}function E(U){return typeof U=="string"?Ma(n,U,l.value.path):ot({},U)}function x(U,ce){if(c!==U)return Lr(8,{from:ce,to:U})}function A(U){return L(U)}function B(U){return A(ot(E(U),{replace:!0}))}function R(U){const ce=U.matched[U.matched.length-1];if(ce&&ce.redirect){const{redirect:re}=ce;let de=typeof re=="function"?re(U):re;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=E(de):{path:de},de.params={}),ot({query:U.query,hash:U.hash,params:de.path!=null?{}:U.params},de)}}function L(U,ce){const re=c=p(U),de=l.value,Le=U.state,P=U.force,b=U.replace===!0,w=R(re);if(w)return L(ot(E(w),{state:typeof w=="object"?ot({},Le,w.state):Le,force:P,replace:b}),ce||re);const O=re;O.redirectedFrom=ce;let V;return!P&&r0(i,de,re)&&(V=Lr(16,{to:O,from:de}),Ae(de,de,!0,!1)),(V?Promise.resolve(V):M(O,de)).catch(Y=>Ln(Y)?Ln(Y,2)?Y:Ee(Y):G(Y,O,de)).then(Y=>{if(Y){if(Ln(Y,2))return L(ot({replace:b},E(Y.to),{state:typeof Y.to=="object"?ot({},Le,Y.to.state):Le,force:P}),ce||O)}else Y=te(O,de,!0,b,Le);return D(O,de,Y),Y})}function z(U,ce){const re=x(U,ce);return re?Promise.reject(re):Promise.resolve()}function T(U){const ce=ne.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(U):U()}function M(U,ce){let re;const[de,Le,P]=W0(U,ce);re=Ea(de.reverse(),"beforeRouteLeave",U,ce);for(const w of de)w.leaveGuards.forEach(O=>{re.push(li(O,U,ce))});const b=z.bind(null,U,ce);return re.push(b),Me(re).then(()=>{re=[];for(const w of s.list())re.push(li(w,U,ce));return re.push(b),Me(re)}).then(()=>{re=Ea(Le,"beforeRouteUpdate",U,ce);for(const w of Le)w.updateGuards.forEach(O=>{re.push(li(O,U,ce))});return re.push(b),Me(re)}).then(()=>{re=[];for(const w of P)if(w.beforeEnter)if(gn(w.beforeEnter))for(const O of w.beforeEnter)re.push(li(O,U,ce));else re.push(li(w.beforeEnter,U,ce));return re.push(b),Me(re)}).then(()=>(U.matched.forEach(w=>w.enterCallbacks={}),re=Ea(P,"beforeRouteEnter",U,ce,T),re.push(b),Me(re))).then(()=>{re=[];for(const w of o.list())re.push(li(w,U,ce));return re.push(b),Me(re)}).catch(w=>Ln(w,8)?w:Promise.reject(w))}function D(U,ce,re){a.list().forEach(de=>T(()=>de(U,ce,re)))}function te(U,ce,re,de,Le){const P=x(U,ce);if(P)return P;const b=ce===Jn,w=vr?history.state:{};re&&(de||b?r.replace(U.fullPath,ot({scroll:b&&w&&w.scroll},Le)):r.push(U.fullPath,Le)),l.value=U,Ae(U,ce,re,b),Ee()}let j;function le(){j||(j=r.listen((U,ce,re)=>{if(!pe.listening)return;const de=p(U),Le=R(de);if(Le){L(ot(Le,{replace:!0}),de).catch(os);return}c=de;const P=l.value;vr&&d0(Cu(P.fullPath,re.delta),Jo()),M(de,P).catch(b=>Ln(b,12)?b:Ln(b,2)?(L(b.to,de).then(w=>{Ln(w,20)&&!re.delta&&re.type===ms.pop&&r.go(-1,!1)}).catch(os),Promise.reject()):(re.delta&&r.go(-re.delta,!1),G(b,de,P))).then(b=>{b=b||te(de,P,!1),b&&(re.delta&&!Ln(b,8)?r.go(-re.delta,!1):re.type===ms.pop&&Ln(b,20)&&r.go(-1,!1)),D(de,P,b)}).catch(os)}))}let se=Gr(),Q=Gr(),J;function G(U,ce,re){Ee(U);const de=Q.list();return de.length?de.forEach(Le=>Le(U,ce,re)):console.error(U),Promise.reject(U)}function Se(){return J&&l.value!==Jn?Promise.resolve():new Promise((U,ce)=>{se.add([U,ce])})}function Ee(U){return J||(J=!U,le(),se.list().forEach(([ce,re])=>U?re(U):ce()),se.reset()),U}function Ae(U,ce,re,de){const{scrollBehavior:Le}=t;if(!vr||!Le)return Promise.resolve();const P=!re&&h0(Cu(U.fullPath,0))||(de||!re)&&history.state&&history.state.scroll||null;return Id().then(()=>Le(U,ce,P)).then(b=>b&&f0(b)).catch(b=>G(b,U,ce))}const Ne=U=>r.go(U);let je;const ne=new Set,pe={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:h,getRoutes:v,resolve:p,options:t,push:A,replace:B,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:Se,install(U){const ce=this;U.component("RouterLink",B0),U.component("RouterView",V0),U.config.globalProperties.$router=ce,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Mr(l)}),vr&&!je&&l.value===Jn&&(je=!0,A(r.location).catch(Le=>{}));const re={};for(const Le in Jn)Object.defineProperty(re,Le,{get:()=>l.value[Le],enumerable:!0});U.provide(Tc,ce),U.provide(Rh,Td(re)),U.provide(vl,l);const de=U.unmount;ne.add(U),U.unmount=function(){ne.delete(U),ne.size<1&&(c=Jn,j&&j(),j=null,l.value=Jn,je=!1,J=!1),de()}}};function Me(U){return U.reduce((ce,re)=>ce.then(()=>T(re)),Promise.resolve())}return pe}function W0(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Pr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Pr(c,l))||r.push(l))}return[n,i,r]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="167",X0=0,Gu=1,q0=2,Ch=1,$0=2,Fn=3,_i=0,zt=1,zn=2,pi=0,Tr=1,Wu=2,Xu=3,qu=4,j0=5,Bi=100,Y0=101,K0=102,Z0=103,J0=104,Q0=200,ev=201,tv=202,nv=203,xl=204,Sl=205,iv=206,rv=207,sv=208,ov=209,av=210,lv=211,cv=212,uv=213,fv=214,dv=0,hv=1,pv=2,Ao=3,mv=4,gv=5,_v=6,vv=7,Ph=0,xv=1,Sv=2,mi=0,yv=1,Mv=2,Ev=3,bv=4,Tv=5,wv=6,Av=7,Lh=300,Dr=301,Ir=302,yl=303,Ml=304,Qo=306,El=1e3,zi=1001,bl=1002,rn=1003,Rv=1004,Ns=1005,fn=1006,ba=1007,Hi=1008,qn=1009,Dh=1010,Ih=1011,gs=1012,Ac=1013,ji=1014,Hn=1015,Ss=1016,Rc=1017,Cc=1018,Ur=1020,Uh=35902,Nh=1021,Oh=1022,hn=1023,Fh=1024,Bh=1025,wr=1026,Nr=1027,kh=1028,Pc=1029,zh=1030,Lc=1031,Dc=1033,mo=33776,go=33777,_o=33778,vo=33779,Tl=35840,wl=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Ll=37496,Dl=37808,Il=37809,Ul=37810,Nl=37811,Ol=37812,Fl=37813,Bl=37814,kl=37815,zl=37816,Hl=37817,Vl=37818,Gl=37819,Wl=37820,Xl=37821,xo=36492,ql=36494,$l=36495,Hh=36283,jl=36284,Yl=36285,Kl=36286,Cv=3200,Pv=3201,Lv=0,Dv=1,ui="",Sn="srgb",Ei="srgb-linear",Ic="display-p3",ea="display-p3-linear",Ro="linear",lt="srgb",Co="rec709",Po="p3",er=7680,$u=519,Iv=512,Uv=513,Nv=514,Vh=515,Ov=516,Fv=517,Bv=518,kv=519,ju=35044,Yu="300 es",Vn=2e3,Lo=2001;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=Math.PI/180,Zl=180/Math.PI;function ys(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[t&255]+wt[t>>8&255]+wt[t>>16&255]+wt[t>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[n&63|128]+wt[n>>8&255]+"-"+wt[n>>16&255]+wt[n>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function zv(t,e){return(t%e+e)%e}function wa(t,e,n){return(1-n)*t+n*e}function Wr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],v=r[0],h=r[3],p=r[6],E=r[1],x=r[4],A=r[7],B=r[2],R=r[5],L=r[8];return s[0]=o*v+a*E+l*B,s[3]=o*h+a*x+l*R,s[6]=o*p+a*A+l*L,s[1]=c*v+u*E+f*B,s[4]=c*h+u*x+f*R,s[7]=c*p+u*A+f*L,s[2]=d*v+m*E+g*B,s[5]=d*h+m*x+g*R,s[8]=d*p+m*A+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=n*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Aa.makeScale(e,n)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,n){return this.premultiply(Aa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new qe;function Gh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Do(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Hv(){const t=Do("canvas");return t.style.display="block",t}const Ku={};function ls(t){t in Ku||(Ku[t]=!0,console.warn(t))}function Vv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Zu=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ju=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[Ei]:{transfer:Ro,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Sn]:{transfer:lt,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ea]:{transfer:Ro,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Ju),fromReference:t=>t.applyMatrix3(Zu)},[Ic]:{transfer:lt,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ju),fromReference:t=>t.applyMatrix3(Zu).convertLinearToSRGB()}},Gv=new Set([Ei,ea]),nt={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Gv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xr[e].toReference,r=Xr[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xr[t].primaries},getTransfer:function(t){return t===ui?Ro:Xr[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Xr[e].luminanceCoefficients)}};function Ar(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ra(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let tr;class Wv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{tr===void 0&&(tr=Do("canvas")),tr.width=e.width,tr.height=e.height;const i=tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=tr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Do("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ar(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ar(n[i]/255)*255):n[i]=Ar(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xv=0;class Wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ca(r[o].image)):s.push(Ca(r[o]))}else s=Ca(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ca(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Wv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qv=0;class Ht extends Fr{constructor(e=Ht.DEFAULT_IMAGE,n=Ht.DEFAULT_MAPPING,i=zi,r=zi,s=fn,o=Hi,a=hn,l=qn,c=Ht.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=ys(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case El:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case El:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Lh;Ht.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],v=l[2],h=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+h)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,A=(m+1)/2,B=(p+1)/2,R=(u+d)/4,L=(f+v)/4,z=(g+h)/4;return x>A&&x>B?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=L/i):A>B?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=R/r,s=z/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=L/s,r=z/s),this.set(i,r,s,n),this}let E=Math.sqrt((h-g)*(h-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(h-g)/E,this.y=(f-v)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $v extends Fr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wh(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends $v{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Xh extends Ht{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jv extends Ht{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==m||u!==g){let h=1-a;const p=l*d+c*m+u*g+f*v,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const B=Math.sqrt(x),R=Math.atan2(B,p*E);h=Math.sin(h*R)/B,a=Math.sin(a*R)/B}const A=a*E;if(l=l*h+d*A,c=c*h+m*A,u=u*h+g*A,f=f*h+v*A,h===1-a){const B=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=B,c*=B,u*=B,f*=B}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*m-c*d,e[n+1]=l*g+u*d+c*f-a*m,e[n+2]=c*g+u*m+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new W,Qu=new Ms;class Es{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(on.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(on.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=on.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Fs.subVectors(this.max,qr),nr.subVectors(e.a,qr),ir.subVectors(e.b,qr),rr.subVectors(e.c,qr),Qn.subVectors(ir,nr),ei.subVectors(rr,ir),Ai.subVectors(nr,rr);let n=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Ai.z,Ai.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Ai.z,0,-Ai.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Ai.y,Ai.x,0];return!La(n,nr,ir,rr,Fs)||(n=[1,0,0,0,1,0,0,0,1],!La(n,nr,ir,rr,Fs))?!1:(Bs.crossVectors(Qn,ei),n=[Bs.x,Bs.y,Bs.z],La(n,nr,ir,rr,Fs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new W,new W,new W,new W,new W,new W,new W,new W],on=new W,Os=new Es,nr=new W,ir=new W,rr=new W,Qn=new W,ei=new W,Ai=new W,qr=new W,Fs=new W,Bs=new W,Ri=new W;function La(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ri.fromArray(t,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=n.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yv=new Es,$r=new W,Da=new W;class ta{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Yv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const n=$r.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Da)),this.expandByPoint($r.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new W,Ia=new W,ks=new W,ti=new W,Ua=new W,zs=new W,Na=new W;class qh{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=In.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,n),In.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ia.copy(e).add(n).multiplyScalar(.5),ks.copy(n).sub(e).normalize(),ti.copy(this.origin).sub(Ia);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ks),a=ti.dot(this.direction),l=-ti.dot(ks),c=ti.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ia).addScaledVector(ks,d),m}intersectSphere(e,n){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,n,i,r,s){Ua.subVectors(n,e),zs.subVectors(i,e),Na.crossVectors(Ua,zs);let o=this.direction.dot(Na),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=a*this.direction.dot(zs.crossVectors(ti,zs));if(l<0)return null;const c=a*this.direction.dot(Ua.cross(ti));if(c<0||l+c>o)return null;const u=-a*ti.dot(Na);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,m,g,v,h){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,m,g,v,h)}set(e,n,i,r,s,o,a,l,c,u,f,d,m,g,v,h){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=m,p[7]=g,p[11]=v,p[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-m,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=m*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=m*f-g,n[2]=g*f-m,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kv,e,Zv)}lookAt(e,n,i){const r=this.elements;return jt.subVectors(e,n),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ni.crossVectors(i,jt),ni.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ni.crossVectors(i,jt)),ni.normalize(),Hs.crossVectors(jt,ni),r[0]=ni.x,r[4]=Hs.x,r[8]=jt.x,r[1]=ni.y,r[5]=Hs.y,r[9]=jt.y,r[2]=ni.z,r[6]=Hs.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],v=i[6],h=i[10],p=i[14],E=i[3],x=i[7],A=i[11],B=i[15],R=r[0],L=r[4],z=r[8],T=r[12],M=r[1],D=r[5],te=r[9],j=r[13],le=r[2],se=r[6],Q=r[10],J=r[14],G=r[3],Se=r[7],Ee=r[11],Ae=r[15];return s[0]=o*R+a*M+l*le+c*G,s[4]=o*L+a*D+l*se+c*Se,s[8]=o*z+a*te+l*Q+c*Ee,s[12]=o*T+a*j+l*J+c*Ae,s[1]=u*R+f*M+d*le+m*G,s[5]=u*L+f*D+d*se+m*Se,s[9]=u*z+f*te+d*Q+m*Ee,s[13]=u*T+f*j+d*J+m*Ae,s[2]=g*R+v*M+h*le+p*G,s[6]=g*L+v*D+h*se+p*Se,s[10]=g*z+v*te+h*Q+p*Ee,s[14]=g*T+v*j+h*J+p*Ae,s[3]=E*R+x*M+A*le+B*G,s[7]=E*L+x*D+A*se+B*Se,s[11]=E*z+x*te+A*Q+B*Ee,s[15]=E*T+x*j+A*J+B*Ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],v=e[7],h=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+v*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+h*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],v=e[13],h=e[14],p=e[15],E=f*h*c-v*d*c+v*l*m-a*h*m-f*l*p+a*d*p,x=g*d*c-u*h*c-g*l*m+o*h*m+u*l*p-o*d*p,A=u*v*c-g*f*c+g*a*m-o*v*m-u*a*p+o*f*p,B=g*f*l-u*v*l-g*a*d+o*v*d+u*a*h-o*f*h,R=n*E+i*x+r*A+s*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=E*L,e[1]=(v*d*s-f*h*s-v*r*m+i*h*m+f*r*p-i*d*p)*L,e[2]=(a*h*s-v*l*s+v*r*c-i*h*c-a*r*p+i*l*p)*L,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*L,e[4]=x*L,e[5]=(u*h*s-g*d*s+g*r*m-n*h*m-u*r*p+n*d*p)*L,e[6]=(g*l*s-o*h*s-g*r*c+n*h*c+o*r*p-n*l*p)*L,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*m+n*l*m)*L,e[8]=A*L,e[9]=(g*f*s-u*v*s-g*i*m+n*v*m+u*i*p-n*f*p)*L,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*p+n*a*p)*L,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*m-n*a*m)*L,e[12]=B*L,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*h+n*f*h)*L,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*h-n*a*h)*L,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,g=s*f,v=o*u,h=o*f,p=a*f,E=l*c,x=l*u,A=l*f,B=i.x,R=i.y,L=i.z;return r[0]=(1-(v+p))*B,r[1]=(m+A)*B,r[2]=(g-x)*B,r[3]=0,r[4]=(m-A)*R,r[5]=(1-(d+p))*R,r[6]=(h+E)*R,r[7]=0,r[8]=(g+x)*L,r[9]=(h-E)*L,r[10]=(1-(d+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),a=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,f=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,n.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let m,g;if(a===Vn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Lo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,m=(i+r)*u;let g,v;if(a===Vn)g=(o+s)*f,v=-2*f;else if(a===Lo)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const sr=new W,an=new gt,Kv=new W(0,0,0),Zv=new W(1,1,1),ni=new W,Hs=new W,jt=new W,ef=new gt,tf=new Ms;class $n{constructor(e=0,n=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jv=0;const nf=new W,or=new Ms,Un=new gt,Vs=new W,jr=new W,Qv=new W,ex=new Ms,rf=new W(1,0,0),sf=new W(0,1,0),of=new W(0,0,1),af={type:"added"},tx={type:"removed"},ar={type:"childadded",child:null},Oa={type:"childremoved",child:null};class Ut extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new W,n=new $n,i=new Ms,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new qe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return or.setFromAxisAngle(e,n),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,n){return or.setFromAxisAngle(e,n),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(sf,e)}rotateZ(e){return this.rotateOnAxis(of,e)}translateOnAxis(e,n){return nf.copy(e).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(sf,e)}translateZ(e){return this.translateOnAxis(of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Vs.copy(e):Vs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(jr,Vs,this.up):Un.lookAt(Vs,jr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),or.setFromRotationMatrix(Un),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(af),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tx),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(af),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,Qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new W(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new W,Nn=new W,Fa=new W,On=new W,lr=new W,cr=new W,lf=new W,Ba=new W,ka=new W,za=new W;class Tn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ln.subVectors(e,n),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ln.subVectors(r,n),Nn.subVectors(i,n),Fa.subVectors(e,n);const o=ln.dot(ln),a=ln.dot(Nn),l=ln.dot(Fa),c=Nn.dot(Nn),u=Nn.dot(Fa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static isFrontFacing(e,n,i,r){return ln.subVectors(i,n),Nn.subVectors(e,n),ln.cross(Nn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;lr.subVectors(r,i),cr.subVectors(s,i),Ba.subVectors(e,i);const l=lr.dot(Ba),c=cr.dot(Ba);if(l<=0&&c<=0)return n.copy(i);ka.subVectors(e,r);const u=lr.dot(ka),f=cr.dot(ka);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(lr,o);za.subVectors(e,s);const m=lr.dot(za),g=cr.dot(za);if(g>=0&&m<=g)return n.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(cr,a);const h=u*g-m*f;if(h<=0&&f-u>=0&&m-g>=0)return lf.subVectors(s,r),a=(f-u)/(f-u+(m-g)),n.copy(r).addScaledVector(lf,a);const p=1/(h+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Ha(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=zv(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ha(o,s,e+1/3),this.g=Ha(o,s,e),this.b=Ha(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const i=jh[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return nt.fromWorkingColorSpace(At.copy(this),e),Math.round(kt(At.r*255,0,255))*65536+Math.round(kt(At.g*255,0,255))*256+Math.round(kt(At.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(At.copy(this),n);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(At.copy(this),n),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Sn){nt.fromWorkingColorSpace(At.copy(this),e);const n=At.r,i=At.g,r=At.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+n,ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ii),e.getHSL(Gs);const i=wa(ii.h,Gs.h,n),r=wa(ii.s,Gs.s,n),s=wa(ii.l,Gs.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new it;it.NAMES=jh;let nx=0;class bs extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Tr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=Sl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xl&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$u&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Yh extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new W,Ws=new st;class wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ju,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ls("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ws.fromBufferAttribute(this,n),Ws.applyMatrix3(e),this.setXY(n,Ws.x,Ws.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ju&&(e.usage=this.usage),e}}class Kh extends wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zh extends wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class An extends wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ix=0;const en=new gt,Va=new Ut,ur=new W,Yt=new Es,Yr=new Es,yt=new W;class Yn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gh(e)?Zh:Kh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,n,i){return en.makeTranslation(e,n,i),this.applyMatrix4(en),this}scale(e,n,i){return en.makeScale(e,n,i),this.applyMatrix4(en),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Yt.min,Yr.min),Yt.expandByPoint(yt),yt.addVectors(Yt.max,Yr.max),Yt.expandByPoint(yt)):(Yt.expandByPoint(Yr.min),Yt.expandByPoint(Yr.max))}Yt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),yt.add(ur)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new W,l[z]=new W;const c=new W,u=new W,f=new W,d=new st,m=new st,g=new st,v=new W,h=new W;function p(z,T,M){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,z),m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),h.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),a[z].add(v),a[T].add(v),a[M].add(v),l[z].add(h),l[T].add(h),l[M].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let z=0,T=E.length;z<T;++z){const M=E[z],D=M.start,te=M.count;for(let j=D,le=D+te;j<le;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const x=new W,A=new W,B=new W,R=new W;function L(z){B.fromBufferAttribute(r,z),R.copy(B);const T=a[z];x.copy(T),x.sub(B.multiplyScalar(B.dot(T))).normalize(),A.crossVectors(R,T);const D=A.dot(l[z])<0?-1:1;o.setXYZW(z,x.x,x.y,x.z,D)}for(let z=0,T=E.length;z<T;++z){const M=E[z],D=M.start,te=M.count;for(let j=D,le=D+te;j<le;j+=3)L(e.getX(j+0)),L(e.getX(j+1)),L(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,h),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,h),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yt.fromBufferAttribute(e,n),yt.normalize(),e.setXYZ(n,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,h=l.length;v<h;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[m++]}return new wn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cf=new gt,Ci=new qh,Xs=new ta,uf=new W,fr=new W,dr=new W,hr=new W,Ga=new W,qs=new W,$s=new st,js=new st,Ys=new st,ff=new W,df=new W,hf=new W,Ks=new W,Zs=new W;class Gn extends Ut{constructor(e=new Yn,n=new Yh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ga.fromBufferAttribute(f,e),o?qs.addScaledVector(Ga,u):qs.addScaledVector(Ga.sub(n),u))}n.add(qs)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(Xs.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Xs,uf)===null||Ci.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(cf.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(cf),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ci)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const h=d[g],p=o[h.materialIndex],E=Math.max(h.start,m.start),x=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let A=E,B=x;A<B;A+=3){const R=a.getX(A),L=a.getX(A+1),z=a.getX(A+2);r=Js(this,p,e,i,c,u,f,R,L,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let h=g,p=v;h<p;h+=3){const E=a.getX(h),x=a.getX(h+1),A=a.getX(h+2);r=Js(this,o,e,i,c,u,f,E,x,A),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const h=d[g],p=o[h.materialIndex],E=Math.max(h.start,m.start),x=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let A=E,B=x;A<B;A+=3){const R=A,L=A+1,z=A+2;r=Js(this,p,e,i,c,u,f,R,L,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let h=g,p=v;h<p;h+=3){const E=h,x=h+1,A=h+2;r=Js(this,o,e,i,c,u,f,E,x,A),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}}}function rx(t,e,n,i,r,s,o,a){let l;if(e.side===zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Zs);return c<n.near||c>n.far?null:{distance:c,point:Zs.clone(),object:t}}function Js(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,fr),t.getVertexPosition(l,dr),t.getVertexPosition(c,hr);const u=rx(t,e,n,i,fr,dr,hr,Ks);if(u){r&&($s.fromBufferAttribute(r,a),js.fromBufferAttribute(r,l),Ys.fromBufferAttribute(r,c),u.uv=Tn.getInterpolation(Ks,fr,dr,hr,$s,js,Ys,new st)),s&&($s.fromBufferAttribute(s,a),js.fromBufferAttribute(s,l),Ys.fromBufferAttribute(s,c),u.uv1=Tn.getInterpolation(Ks,fr,dr,hr,$s,js,Ys,new st)),o&&(ff.fromBufferAttribute(o,a),df.fromBufferAttribute(o,l),hf.fromBufferAttribute(o,c),u.normal=Tn.getInterpolation(Ks,fr,dr,hr,ff,df,hf,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};Tn.getNormal(fr,dr,hr,f.normal),u.face=f}return u}class Br extends Yn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(f,2));function g(v,h,p,E,x,A,B,R,L,z,T){const M=A/L,D=B/z,te=A/2,j=B/2,le=R/2,se=L+1,Q=z+1;let J=0,G=0;const Se=new W;for(let Ee=0;Ee<Q;Ee++){const Ae=Ee*D-j;for(let Ne=0;Ne<se;Ne++){const je=Ne*M-te;Se[v]=je*E,Se[h]=Ae*x,Se[p]=le,c.push(Se.x,Se.y,Se.z),Se[v]=0,Se[h]=0,Se[p]=R>0?1:-1,u.push(Se.x,Se.y,Se.z),f.push(Ne/L),f.push(1-Ee/z),J+=1}}for(let Ee=0;Ee<z;Ee++)for(let Ae=0;Ae<L;Ae++){const Ne=d+Ae+se*Ee,je=d+Ae+se*(Ee+1),ne=d+(Ae+1)+se*(Ee+1),pe=d+(Ae+1)+se*Ee;l.push(Ne,je,pe),l.push(je,ne,pe),G+=6}a.addGroup(m,G,T),m+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function It(t){const e={};for(let n=0;n<t.length;n++){const i=Or(t[n]);for(const r in i)e[r]=i[r]}return e}function sx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const ox={clone:Or,merge:It};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qh extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Vn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new W,pf=new st,mf=new st;class tn extends Qh{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,n){return this.getViewBounds(e,pf,mf),n.subVectors(mf,pf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const pr=-90,mr=1;class cx extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(pr,mr,e,n);r.layers=this.layers,this.add(r);const s=new tn(pr,mr,e,n);s.layers=this.layers,this.add(s);const o=new tn(pr,mr,e,n);o.layers=this.layers,this.add(o);const a=new tn(pr,mr,e,n);a.layers=this.layers,this.add(a);const l=new tn(pr,mr,e,n);l.layers=this.layers,this.add(l);const c=new tn(pr,mr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ep extends Ht{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Dr,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ux extends Yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ep(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Br(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:pi});s.uniforms.tEquirect.value=n;const o=new Gn(r,s),a=n.minFilter;return n.minFilter===Hi&&(n.minFilter=fn),new cx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Wa=new W,fx=new W,dx=new qe;class Ui{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wa.subVectors(i,n).cross(fx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dx.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new ta,Qs=new W;class tp{constructor(e=new Ui,n=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],g=r[9],v=r[10],h=r[11],p=r[12],E=r[13],x=r[14],A=r[15];if(i[0].setComponents(l-s,d-c,h-m,A-p).normalize(),i[1].setComponents(l+s,d+c,h+m,A+p).normalize(),i[2].setComponents(l+o,d+u,h+g,A+E).normalize(),i[3].setComponents(l-o,d-u,h-g,A-E).normalize(),i[4].setComponents(l-a,d-f,h-v,A-x).normalize(),n===Vn)i[5].setComponents(l+a,d+f,h+v,A+x).normalize();else if(n===Lo)i[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function np(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hx(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let m=0,g=d.length;m<g;m++){const v=d[m];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class na extends Yn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,m=[],g=[],v=[],h=[];for(let p=0;p<u;p++){const E=p*d-o;for(let x=0;x<c;x++){const A=x*f-s;g.push(A,-E,0),v.push(0,0,1),h.push(x/a),h.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const x=E+c*p,A=E+c*(p+1),B=E+1+c*(p+1),R=E+1+c*p;m.push(x,A,R),m.push(A,B,R)}this.setIndex(m),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(v,3)),this.setAttribute("uv",new An(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_S=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ES=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ly=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,py=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,My=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,by=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Py=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ny=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,By=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:_x,alphatest_fragment:vx,alphatest_pars_fragment:xx,aomap_fragment:Sx,aomap_pars_fragment:yx,batching_pars_vertex:Mx,batching_vertex:Ex,begin_vertex:bx,beginnormal_vertex:Tx,bsdfs:wx,iridescence_fragment:Ax,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Cx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Dx,color_fragment:Ix,color_pars_fragment:Ux,color_pars_vertex:Nx,color_vertex:Ox,common:Fx,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:kx,displacementmap_pars_vertex:zx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:qx,envmap_common_pars_fragment:$x,envmap_pars_fragment:jx,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:oS,envmap_vertex:Kx,fog_vertex:Zx,fog_pars_vertex:Jx,fog_fragment:Qx,fog_pars_fragment:eS,gradientmap_pars_fragment:tS,lightmap_pars_fragment:nS,lights_lambert_fragment:iS,lights_lambert_pars_fragment:rS,lights_pars_begin:sS,lights_toon_fragment:aS,lights_toon_pars_fragment:lS,lights_phong_fragment:cS,lights_phong_pars_fragment:uS,lights_physical_fragment:fS,lights_physical_pars_fragment:dS,lights_fragment_begin:hS,lights_fragment_maps:pS,lights_fragment_end:mS,logdepthbuf_fragment:gS,logdepthbuf_pars_fragment:_S,logdepthbuf_pars_vertex:vS,logdepthbuf_vertex:xS,map_fragment:SS,map_pars_fragment:yS,map_particle_fragment:MS,map_particle_pars_fragment:ES,metalnessmap_fragment:bS,metalnessmap_pars_fragment:TS,morphinstance_vertex:wS,morphcolor_vertex:AS,morphnormal_vertex:RS,morphtarget_pars_vertex:CS,morphtarget_vertex:PS,normal_fragment_begin:LS,normal_fragment_maps:DS,normal_pars_fragment:IS,normal_pars_vertex:US,normal_vertex:NS,normalmap_pars_fragment:OS,clearcoat_normal_fragment_begin:FS,clearcoat_normal_fragment_maps:BS,clearcoat_pars_fragment:kS,iridescence_pars_fragment:zS,opaque_fragment:HS,packing:VS,premultiplied_alpha_fragment:GS,project_vertex:WS,dithering_fragment:XS,dithering_pars_fragment:qS,roughnessmap_fragment:$S,roughnessmap_pars_fragment:jS,shadowmap_pars_fragment:YS,shadowmap_pars_vertex:KS,shadowmap_vertex:ZS,shadowmask_pars_fragment:JS,skinbase_vertex:QS,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:ry,tonemapping_fragment:sy,tonemapping_pars_fragment:oy,transmission_fragment:ay,transmission_pars_fragment:ly,uv_pars_fragment:cy,uv_pars_vertex:uy,uv_vertex:fy,worldpos_vertex:dy,background_vert:hy,background_frag:py,backgroundCube_vert:my,backgroundCube_frag:gy,cube_vert:_y,cube_frag:vy,depth_vert:xy,depth_frag:Sy,distanceRGBA_vert:yy,distanceRGBA_frag:My,equirect_vert:Ey,equirect_frag:by,linedashed_vert:Ty,linedashed_frag:wy,meshbasic_vert:Ay,meshbasic_frag:Ry,meshlambert_vert:Cy,meshlambert_frag:Py,meshmatcap_vert:Ly,meshmatcap_frag:Dy,meshnormal_vert:Iy,meshnormal_frag:Uy,meshphong_vert:Ny,meshphong_frag:Oy,meshphysical_vert:Fy,meshphysical_frag:By,meshtoon_vert:ky,meshtoon_frag:zy,points_vert:Hy,points_frag:Vy,shadow_vert:Gy,shadow_frag:Wy,sprite_vert:Xy,sprite_frag:qy},ye={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},En={basic:{uniforms:It([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:It([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:It([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:It([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:It([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:It([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:It([ye.points,ye.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:It([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:It([ye.common,ye.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:It([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:It([ye.sprite,ye.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:It([ye.common,ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:It([ye.lights,ye.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};En.physical={uniforms:It([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const eo={r:0,b:0,g:0},Li=new $n,$y=new gt;function jy(t,e,n,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?n:e).get(x)),x}function v(E){let x=!1;const A=g(E);A===null?p(a,l):A&&A.isColor&&(p(A,1),x=!0);const B=t.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function h(E,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Qo)?(u===void 0&&(u=new Gn(new Br(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Or(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(x.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($y.makeRotationFromEuler(Li)),u.material.toneMapped=nt.getTransfer(A.colorSpace)!==lt,(f!==A||d!==A.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,m=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Gn(new na(2,2),new vi({name:"BackgroundMaterial",uniforms:Or(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=nt.getTransfer(A.colorSpace)!==lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,m=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(eo,Jh(t)),i.buffers.color.setClear(eo.r,eo.g,eo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:v,addToRenderList:h}}function Yy(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,D,te,j,le){let se=!1;const Q=f(j,te,D);s!==Q&&(s=Q,c(s.object)),se=m(M,j,te,le),se&&g(M,j,te,le),le!==null&&e.update(le,t.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,A(M,D,te,j),le!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,D,te){const j=te.wireframe===!0;let le=i[M.id];le===void 0&&(le={},i[M.id]=le);let se=le[D.id];se===void 0&&(se={},le[D.id]=se);let Q=se[j];return Q===void 0&&(Q=d(l()),se[j]=Q),Q}function d(M){const D=[],te=[],j=[];for(let le=0;le<n;le++)D[le]=0,te[le]=0,j[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:te,attributeDivisors:j,object:M,attributes:{},index:null}}function m(M,D,te,j){const le=s.attributes,se=D.attributes;let Q=0;const J=te.getAttributes();for(const G in J)if(J[G].location>=0){const Ee=le[G];let Ae=se[G];if(Ae===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),Ee===void 0||Ee.attribute!==Ae||Ae&&Ee.data!==Ae.data)return!0;Q++}return s.attributesNum!==Q||s.index!==j}function g(M,D,te,j){const le={},se=D.attributes;let Q=0;const J=te.getAttributes();for(const G in J)if(J[G].location>=0){let Ee=se[G];Ee===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor));const Ae={};Ae.attribute=Ee,Ee&&Ee.data&&(Ae.data=Ee.data),le[G]=Ae,Q++}s.attributes=le,s.attributesNum=Q,s.index=j}function v(){const M=s.newAttributes;for(let D=0,te=M.length;D<te;D++)M[D]=0}function h(M){p(M,0)}function p(M,D){const te=s.newAttributes,j=s.enabledAttributes,le=s.attributeDivisors;te[M]=1,j[M]===0&&(t.enableVertexAttribArray(M),j[M]=1),le[M]!==D&&(t.vertexAttribDivisor(M,D),le[M]=D)}function E(){const M=s.newAttributes,D=s.enabledAttributes;for(let te=0,j=D.length;te<j;te++)D[te]!==M[te]&&(t.disableVertexAttribArray(te),D[te]=0)}function x(M,D,te,j,le,se,Q){Q===!0?t.vertexAttribIPointer(M,D,te,le,se):t.vertexAttribPointer(M,D,te,j,le,se)}function A(M,D,te,j){v();const le=j.attributes,se=te.getAttributes(),Q=D.defaultAttributeValues;for(const J in se){const G=se[J];if(G.location>=0){let Se=le[J];if(Se===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),Se!==void 0){const Ee=Se.normalized,Ae=Se.itemSize,Ne=e.get(Se);if(Ne===void 0)continue;const je=Ne.buffer,ne=Ne.type,pe=Ne.bytesPerElement,Me=ne===t.INT||ne===t.UNSIGNED_INT||Se.gpuType===Ac;if(Se.isInterleavedBufferAttribute){const U=Se.data,ce=U.stride,re=Se.offset;if(U.isInstancedInterleavedBuffer){for(let de=0;de<G.locationSize;de++)p(G.location+de,U.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let de=0;de<G.locationSize;de++)h(G.location+de);t.bindBuffer(t.ARRAY_BUFFER,je);for(let de=0;de<G.locationSize;de++)x(G.location+de,Ae/G.locationSize,ne,Ee,ce*pe,(re+Ae/G.locationSize*de)*pe,Me)}else{if(Se.isInstancedBufferAttribute){for(let U=0;U<G.locationSize;U++)p(G.location+U,Se.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let U=0;U<G.locationSize;U++)h(G.location+U);t.bindBuffer(t.ARRAY_BUFFER,je);for(let U=0;U<G.locationSize;U++)x(G.location+U,Ae/G.locationSize,ne,Ee,Ae*pe,Ae/G.locationSize*U*pe,Me)}}else if(Q!==void 0){const Ee=Q[J];if(Ee!==void 0)switch(Ee.length){case 2:t.vertexAttrib2fv(G.location,Ee);break;case 3:t.vertexAttrib3fv(G.location,Ee);break;case 4:t.vertexAttrib4fv(G.location,Ee);break;default:t.vertexAttrib1fv(G.location,Ee)}}}}E()}function B(){z();for(const M in i){const D=i[M];for(const te in D){const j=D[te];for(const le in j)u(j[le].object),delete j[le];delete D[te]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const te in D){const j=D[te];for(const le in j)u(j[le].object),delete j[le];delete D[te]}delete i[M.id]}function L(M){for(const D in i){const te=i[D];if(te[M.id]===void 0)continue;const j=te[M.id];for(const le in j)u(j[le].object),delete j[le];delete te[M.id]}}function z(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:h,disableUnusedAttributes:E}}function Ky(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];n.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<d.length;v++)n.update(g,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zy(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==hn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Hn&&!L)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,B=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:p,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:A,maxSamples:B}}function Jy(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ui,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,v=f.clipIntersection,h=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!h)s?u(null):c();else{const E=s?0:i,x=E*4;let A=p.clippingState||null;l.value=A,A=u(g,d,x,m);for(let B=0;B!==x;++B)A[B]=n[B];p.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,g){const v=f!==null?f.length:0;let h=null;if(v!==0){if(h=l.value,g!==!0||h===null){const p=m+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(h===null||h.length<p)&&(h=new Float32Array(p));for(let x=0,A=m;x!==v;++x,A+=4)o.copy(f[x]).applyMatrix4(E,a),o.normal.toArray(h,A),h[A+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}function Qy(t){let e=new WeakMap;function n(o,a){return a===yl?o.mapping=Dr:a===Ml&&(o.mapping=Ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===Ml)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ux(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class eM extends Qh{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xr=4,gf=[.125,.215,.35,.446,.526,.582],ki=20,Xa=new eM,_f=new it;let qa=null,$a=0,ja=0,Ya=!1;const Ni=(1+Math.sqrt(5))/2,gr=1/Ni,vf=[new W(-Ni,gr,0),new W(Ni,gr,0),new W(-gr,0,Ni),new W(gr,0,Ni),new W(0,Ni,-gr),new W(0,Ni,gr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,$a,ja),this._renderer.xr.enabled=Ya,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Dr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Ss,format:hn,colorSpace:Ei,depthBuffer:!1},r=Sf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tM(s)),this._blurMaterial=nM(s,e,n)}return r}_compileMaterial(e){const n=new Gn(this._lodPlanes[0],e);this._renderer.compile(n,Xa)}_sceneToCubeUV(e,n,i,r){const a=new tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(_f),u.toneMapping=mi,u.autoClear=!1;const m=new Yh({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Gn(new Br,m);let v=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,v=!0):(m.color.copy(_f),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;to(r,E*x,p>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Dr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;to(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vf[(r-s-1)%vf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ki-1),v=s/g,h=isFinite(s)?1+Math.floor(u*v):ki;h>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ki}`);const p=[];let E=0;for(let L=0;L<ki;++L){const z=L/v,T=Math.exp(-z*z/2);p.push(T),L===0?E+=T:L<h&&(E+=2*T)}for(let L=0;L<p.length;L++)p[L]=p[L]/E;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const A=this._sizeLods[r],B=3*A*(r>x-xr?r-x+xr:0),R=4*(this._cubeSize-A);to(n,B,R,3*A,2*A),l.setRenderTarget(n),l.render(f,Xa)}}function tM(t){const e=[],n=[],i=[];let r=t;const s=t-xr+1+gf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-xr?l=gf[o-t+xr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,v=3,h=2,p=1,E=new Float32Array(v*g*m),x=new Float32Array(h*g*m),A=new Float32Array(p*g*m);for(let R=0;R<m;R++){const L=R%3*2/3-1,z=R>2?0:-1,T=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];E.set(T,v*g*R),x.set(d,h*g*R);const M=[R,R,R,R,R,R];A.set(M,p*g*R)}const B=new Yn;B.setAttribute("position",new wn(E,v)),B.setAttribute("uv",new wn(x,h)),B.setAttribute("faceIndex",new wn(A,p)),e.push(B),r>xr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Sf(t,e,n){const i=new Yi(t,e,n);return i.texture.mapping=Qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function nM(t,e,n){const i=new Float32Array(ki),r=new W(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function yf(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Mf(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===yl||l===Ml,u=l===Dr||l===Ir;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new xf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new xf(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function rM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ls("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sM(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let h=0,p=v.length;h<p;h++)e.remove(v[h])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let h=0,p=v.length;h<p;h++)e.update(v[h],t.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let x=0,A=E.length;x<A;x+=3){const B=E[x+0],R=E[x+1],L=E[x+2];d.push(B,R,R,L,L,B)}}else if(g!==void 0){const E=g.array;v=g.version;for(let x=0,A=E.length/3-1;x<A;x+=3){const B=x+0,R=x+1,L=x+2;d.push(B,R,R,L,L,B)}}else return;const h=new(Gh(d)?Zh:Kh)(d,1);h.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,h)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function oM(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,d*o,g),n.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let h=0;for(let p=0;p<g;p++)h+=m[p];n.update(h,i,1)}function f(d,m,g,v){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<d.length;p++)c(d[p]/o,m[p],v[p]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=m[E];for(let E=0;E<v.length;E++)n.update(p,i,v[E])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function aM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function lM(t,e,n){const i=new WeakMap,r=new Mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let A=0;g===!0&&(A=1),v===!0&&(A=2),h===!0&&(A=3);let B=a.attributes.position.count*A,R=1;B>e.maxTextureSize&&(R=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const L=new Float32Array(B*R*4*f),z=new Xh(L,B,R,f);z.type=Hn,z.needsUpdate=!0;const T=A*4;for(let D=0;D<f;D++){const te=p[D],j=E[D],le=x[D],se=B*R*4*D;for(let Q=0;Q<te.count;Q++){const J=Q*T;g===!0&&(r.fromBufferAttribute(te,Q),L[se+J+0]=r.x,L[se+J+1]=r.y,L[se+J+2]=r.z,L[se+J+3]=0),v===!0&&(r.fromBufferAttribute(j,Q),L[se+J+4]=r.x,L[se+J+5]=r.y,L[se+J+6]=r.z,L[se+J+7]=0),h===!0&&(r.fromBufferAttribute(le,Q),L[se+J+8]=r.x,L[se+J+9]=r.y,L[se+J+10]=r.z,L[se+J+11]=le.itemSize===4?r.w:1)}}d={count:f,texture:z,size:new st(B,R)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let h=0;h<c.length;h++)g+=c[h];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function cM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class ip extends Ht{constructor(e,n,i,r,s,o,a,l,c,u=wr){if(u!==wr&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===wr&&(i=ji),i===void 0&&u===Nr&&(i=Ur),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const rp=new Ht,Ef=new ip(1,1),sp=new Xh,op=new jv,ap=new ep,bf=[],Tf=[],wf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);function kr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bf[r];if(s===void 0&&(s=new Float32Array(r),bf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ia(t,e){let n=Tf[e];n===void 0&&(n=new Int32Array(e),Tf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function fM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function dM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function hM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function pM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(xt(n,i))return;Rf.set(i),t.uniformMatrix2fv(this.addr,!1,Rf),St(n,i)}}function mM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(xt(n,i))return;Af.set(i),t.uniformMatrix3fv(this.addr,!1,Af),St(n,i)}}function gM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(xt(n,i))return;wf.set(i),t.uniformMatrix4fv(this.addr,!1,wf),St(n,i)}}function _M(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function vM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function xM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function SM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function yM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function MM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function EM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function bM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function TM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ef.compareFunction=Vh,s=Ef):s=rp,n.setTexture2D(e||s,r)}function wM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||op,r)}function AM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ap,r)}function RM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||sp,r)}function CM(t){switch(t){case 5126:return uM;case 35664:return fM;case 35665:return dM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return SM;case 5125:return yM;case 36294:return MM;case 36295:return EM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return RM}}function PM(t,e){t.uniform1fv(this.addr,e)}function LM(t,e){const n=kr(e,this.size,2);t.uniform2fv(this.addr,n)}function DM(t,e){const n=kr(e,this.size,3);t.uniform3fv(this.addr,n)}function IM(t,e){const n=kr(e,this.size,4);t.uniform4fv(this.addr,n)}function UM(t,e){const n=kr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function NM(t,e){const n=kr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function OM(t,e){const n=kr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function FM(t,e){t.uniform1iv(this.addr,e)}function BM(t,e){t.uniform2iv(this.addr,e)}function kM(t,e){t.uniform3iv(this.addr,e)}function zM(t,e){t.uniform4iv(this.addr,e)}function HM(t,e){t.uniform1uiv(this.addr,e)}function VM(t,e){t.uniform2uiv(this.addr,e)}function GM(t,e){t.uniform3uiv(this.addr,e)}function WM(t,e){t.uniform4uiv(this.addr,e)}function XM(t,e,n){const i=this.cache,r=e.length,s=ia(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||rp,s[o])}function qM(t,e,n){const i=this.cache,r=e.length,s=ia(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||op,s[o])}function $M(t,e,n){const i=this.cache,r=e.length,s=ia(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ap,s[o])}function jM(t,e,n){const i=this.cache,r=e.length,s=ia(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||sp,s[o])}function YM(t){switch(t){case 5126:return PM;case 35664:return LM;case 35665:return DM;case 35666:return IM;case 35674:return UM;case 35675:return NM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return BM;case 35668:case 35672:return kM;case 35669:case 35673:return zM;case 5125:return HM;case 36294:return VM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return jM}}class KM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=CM(n.type)}}class ZM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YM(n.type)}}class JM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Cf(t,e){t.seq.push(e),t.map[e.id]=e}function QM(t,e,n){const i=t.name,r=i.length;for(Ka.lastIndex=0;;){const s=Ka.exec(i),o=Ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cf(n,c===void 0?new KM(a,t,e):new ZM(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new JM(a),Cf(n,f)),n=f}}}class So{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);QM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Pf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eE=37297;let tE=0;function nE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function iE(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Po&&n===Co?i="LinearDisplayP3ToLinearSRGB":e===Co&&n===Po&&(i="LinearSRGBToLinearDisplayP3"),t){case Ei:case ea:return[i,"LinearTransferOETF"];case Sn:case Ic:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Lf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+nE(t.getShaderSource(e),o)}else return r}function rE(t,e){const n=iE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function sE(t,e){let n;switch(e){case yv:n="Linear";break;case Mv:n="Reinhard";break;case Ev:n="OptimizedCineon";break;case bv:n="ACESFilmic";break;case wv:n="AgX";break;case Av:n="Neutral";break;case Tv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const no=new W;function oE(){nt.getLuminanceCoefficients(no);const t=no.x.toFixed(4),e=no.y.toFixed(4),n=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function lE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qr(t){return t!==""}function Df(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(t){return t.replace(uE,dE)}const fE=new Map;function dE(t,e){let n=Xe[e];if(n===void 0){const i=fE.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jl(n)}const hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(t){return t.replace(hE,pE)}function pE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function gE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Dr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _E(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function vE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case xv:e="ENVMAP_BLENDING_MIX";break;case Sv:e="ENVMAP_BLENDING_ADD";break}return e}function xE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function SE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=mE(n),c=gE(n),u=_E(n),f=vE(n),d=xE(n),m=aE(n),g=lE(s),v=r.createProgram();let h,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qr).join(`
`),h.length>0&&(h+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qr).join(`
`),p.length>0&&(p+=`
`)):(h=[Nf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),p=[Nf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==mi?sE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,rE("linearToOutputTexel",n.outputColorSpace),oE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Jl(o),o=Df(o,n),o=If(o,n),a=Jl(a),a=Df(a,n),a=If(a,n),o=Uf(o),a=Uf(a),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,p=["#define varying in",n.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+h+o,A=E+p+a,B=Pf(r,r.VERTEX_SHADER,x),R=Pf(r,r.FRAGMENT_SHADER,A);r.attachShader(v,B),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(D){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(v).trim(),j=r.getShaderInfoLog(B).trim(),le=r.getShaderInfoLog(R).trim();let se=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,B,R);else{const J=Lf(r,B,"vertex"),G=Lf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+te+`
`+J+`
`+G)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(j===""||le==="")&&(Q=!1);Q&&(D.diagnostics={runnable:se,programLog:te,vertexShader:{log:j,prefix:h},fragmentShader:{log:le,prefix:p}})}r.deleteShader(B),r.deleteShader(R),z=new So(r,v),T=cE(r,v)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,eE)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=R,this}let yE=0;class ME{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EE(e),n.set(e,i)),i}}class EE{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}}function bE(t,e,n,i,r,s,o){const a=new $h,l=new ME,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function h(T,M,D,te,j){const le=te.fog,se=j.geometry,Q=T.isMeshStandardMaterial?te.environment:null,J=(T.isMeshStandardMaterial?n:e).get(T.envMap||Q),G=J&&J.mapping===Qo?J.image.height:null,Se=g[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const Ee=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ae=Ee!==void 0?Ee.length:0;let Ne=0;se.morphAttributes.position!==void 0&&(Ne=1),se.morphAttributes.normal!==void 0&&(Ne=2),se.morphAttributes.color!==void 0&&(Ne=3);let je,ne,pe,Me;if(Se){const Je=En[Se];je=Je.vertexShader,ne=Je.fragmentShader}else je=T.vertexShader,ne=T.fragmentShader,l.update(T),pe=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const U=t.getRenderTarget(),ce=j.isInstancedMesh===!0,re=j.isBatchedMesh===!0,de=!!T.map,Le=!!T.matcap,P=!!J,b=!!T.aoMap,w=!!T.lightMap,O=!!T.bumpMap,V=!!T.normalMap,Y=!!T.displacementMap,K=!!T.emissiveMap,ie=!!T.metalnessMap,y=!!T.roughnessMap,_=T.anisotropy>0,C=T.clearcoat>0,k=T.dispersion>0,X=T.iridescence>0,H=T.sheen>0,he=T.transmission>0,oe=_&&!!T.anisotropyMap,me=C&&!!T.clearcoatMap,be=C&&!!T.clearcoatNormalMap,fe=C&&!!T.clearcoatRoughnessMap,xe=X&&!!T.iridescenceMap,Ge=X&&!!T.iridescenceThicknessMap,Oe=H&&!!T.sheenColorMap,Te=H&&!!T.sheenRoughnessMap,ke=!!T.specularMap,De=!!T.specularColorMap,Ye=!!T.specularIntensityMap,I=he&&!!T.transmissionMap,ge=he&&!!T.thicknessMap,ae=!!T.gradientMap,ue=!!T.alphaMap,ve=T.alphaTest>0,Fe=!!T.alphaHash,Ke=!!T.extensions;let ht=mi;T.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ht=t.toneMapping);const Et={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:je,fragmentShader:ne,defines:T.defines,customVertexShaderID:pe,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:re,batchingColor:re&&j._colorsTexture!==null,instancing:ce,instancingColor:ce&&j.instanceColor!==null,instancingMorph:ce&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?t.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ei,alphaToCoverage:!!T.alphaToCoverage,map:de,matcap:Le,envMap:P,envMapMode:P&&J.mapping,envMapCubeUVHeight:G,aoMap:b,lightMap:w,bumpMap:O,normalMap:V,displacementMap:d&&Y,emissiveMap:K,normalMapObjectSpace:V&&T.normalMapType===Dv,normalMapTangentSpace:V&&T.normalMapType===Lv,metalnessMap:ie,roughnessMap:y,anisotropy:_,anisotropyMap:oe,clearcoat:C,clearcoatMap:me,clearcoatNormalMap:be,clearcoatRoughnessMap:fe,dispersion:k,iridescence:X,iridescenceMap:xe,iridescenceThicknessMap:Ge,sheen:H,sheenColorMap:Oe,sheenRoughnessMap:Te,specularMap:ke,specularColorMap:De,specularIntensityMap:Ye,transmission:he,transmissionMap:I,thicknessMap:ge,gradientMap:ae,opaque:T.transparent===!1&&T.blending===Tr&&T.alphaToCoverage===!1,alphaMap:ue,alphaTest:ve,alphaHash:Fe,combine:T.combine,mapUv:de&&v(T.map.channel),aoMapUv:b&&v(T.aoMap.channel),lightMapUv:w&&v(T.lightMap.channel),bumpMapUv:O&&v(T.bumpMap.channel),normalMapUv:V&&v(T.normalMap.channel),displacementMapUv:Y&&v(T.displacementMap.channel),emissiveMapUv:K&&v(T.emissiveMap.channel),metalnessMapUv:ie&&v(T.metalnessMap.channel),roughnessMapUv:y&&v(T.roughnessMap.channel),anisotropyMapUv:oe&&v(T.anisotropyMap.channel),clearcoatMapUv:me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:be&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(T.sheenRoughnessMap.channel),specularMapUv:ke&&v(T.specularMap.channel),specularColorMapUv:De&&v(T.specularColorMap.channel),specularIntensityMapUv:Ye&&v(T.specularIntensityMap.channel),transmissionMapUv:I&&v(T.transmissionMap.channel),thicknessMapUv:ge&&v(T.thicknessMap.channel),alphaMapUv:ue&&v(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(V||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!se.attributes.uv&&(de||ue),fog:!!le,useFog:T.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ht,decodeVideoTexture:de&&T.map.isVideoTexture===!0&&nt.getTransfer(T.map.colorSpace)===lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zn,flipSided:T.side===zt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ke&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&T.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)M.push(D),M.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(E(M,T),x(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function E(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function x(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),T.push(a.mask)}function A(T){const M=g[T.type];let D;if(M){const te=En[M];D=ox.clone(te.uniforms)}else D=T.uniforms;return D}function B(T,M){let D;for(let te=0,j=u.length;te<j;te++){const le=u[te];if(le.cacheKey===M){D=le,++D.usedTimes;break}}return D===void 0&&(D=new SE(t,M,T,s),u.push(D)),D}function R(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function L(T){l.remove(T)}function z(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:A,acquireProgram:B,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:z}}function TE(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function wE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Of(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ff(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,g,v,h){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:h},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=h),e++,p}function a(f,d,m,g,v,h){const p=o(f,d,m,g,v,h);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function l(f,d,m,g,v,h){const p=o(f,d,m,g,v,h);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||wE),i.length>1&&i.sort(d||Of),r.length>1&&r.sort(d||Of)}function u(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function AE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ff,t.set(i,[o])):r>=s.length?(o=new Ff,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new it};break;case"SpotLight":n={position:new W,direction:new W,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function CE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PE=0;function LE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DE(t){const e=new RE,n=CE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new gt,o=new gt;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,g=0,v=0,h=0,p=0,E=0,x=0,A=0,B=0,R=0,L=0;c.sort(LE);for(let T=0,M=c.length;T<M;T++){const D=c[T],te=D.color,j=D.intensity,le=D.distance,se=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=te.r*j,f+=te.g*j,d+=te.b*j;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(D.sh.coefficients[Q],j);L++}else if(D.isDirectionalLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,G=n.get(D);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=D.shadow.matrix,E++}i.directional[m]=Q,m++}else if(D.isSpotLight){const Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(te).multiplyScalar(j),Q.distance=le,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,i.spot[v]=Q;const J=D.shadow;if(D.map&&(i.spotLightMap[B]=D.map,B++,J.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[v]=J.matrix,D.castShadow){const G=n.get(D);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=se,A++}v++}else if(D.isRectAreaLight){const Q=e.get(D);Q.color.copy(te).multiplyScalar(j),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),i.rectArea[h]=Q,h++}else if(D.isPointLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const J=D.shadow,G=n.get(D);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=se,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=Q,g++}else if(D.isHemisphereLight){const Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(j),Q.groundColor.copy(D.groundColor).multiplyScalar(j),i.hemi[p]=Q,p++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const z=i.hash;(z.directionalLength!==m||z.pointLength!==g||z.spotLength!==v||z.rectAreaLength!==h||z.hemiLength!==p||z.numDirectionalShadows!==E||z.numPointShadows!==x||z.numSpotShadows!==A||z.numSpotMaps!==B||z.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=h,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=A+B-R,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,z.directionalLength=m,z.pointLength=g,z.spotLength=v,z.rectAreaLength=h,z.hemiLength=p,z.numDirectionalShadows=E,z.numPointShadows=x,z.numSpotShadows=A,z.numSpotMaps=B,z.numLightProbes=L,i.version=PE++)}function l(c,u){let f=0,d=0,m=0,g=0,v=0;const h=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const x=c[p];if(x.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(h),f++}else if(x.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(h),m++}else if(x.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(h),o.identity(),s.copy(x.matrixWorld),s.premultiply(h),o.extractRotation(s),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(h),d++}else if(x.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(h),v++}}}return{setup:a,setupView:l,state:i}}function Bf(t){const e=new DE(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function IE(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bf(t),e.set(r,[a])):s>=o.length?(a=new Bf(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class UE extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NE extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BE(t,e,n){let i=new tp;const r=new st,s=new st,o=new Mt,a=new UE({depthPacking:Pv}),l=new NE,c={},u=n.maxTextureSize,f={[_i]:zt,[zt]:_i,[zn]:zn},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:OE,fragmentShader:FE}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Yn;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Gn(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(R,L,z){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||R.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),te=t.state;te.setBlending(pi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const j=p!==Fn&&this.type===Fn,le=p===Fn&&this.type!==Fn;for(let se=0,Q=R.length;se<Q;se++){const J=R[se],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Se=G.getFrameExtents();if(r.multiply(Se),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Se.x),r.x=s.x*Se.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Se.y),r.y=s.y*Se.y,G.mapSize.y=s.y)),G.map===null||j===!0||le===!0){const Ae=this.type!==Fn?{minFilter:rn,magFilter:rn}:{};G.map!==null&&G.map.dispose(),G.map=new Yi(r.x,r.y,Ae),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const Ee=G.getViewportCount();for(let Ae=0;Ae<Ee;Ae++){const Ne=G.getViewport(Ae);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),te.viewport(o),G.updateMatrices(J,Ae),i=G.getFrustum(),A(L,z,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Fn&&E(G,z),G.needsUpdate=!1}p=this.type,h.needsUpdate=!1,t.setRenderTarget(T,M,D)};function E(R,L){const z=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(L,null,z,d,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(L,null,z,m,v,null)}function x(R,L,z,T){let M=null;const D=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=z.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const te=M.uuid,j=L.uuid;let le=c[te];le===void 0&&(le={},c[te]=le);let se=le[j];se===void 0&&(se=M.clone(),le[j]=se,L.addEventListener("dispose",B)),M=se}if(M.visible=L.visible,M.wireframe=L.wireframe,T===Fn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const te=t.properties.get(M);te.light=z}return M}function A(R,L,z,T,M){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Fn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const j=e.update(R),le=R.material;if(Array.isArray(le)){const se=j.groups;for(let Q=0,J=se.length;Q<J;Q++){const G=se[Q],Se=le[G.materialIndex];if(Se&&Se.visible){const Ee=x(R,Se,T,M);R.onBeforeShadow(t,R,L,z,j,Ee,G),t.renderBufferDirect(z,null,j,Ee,R,G),R.onAfterShadow(t,R,L,z,j,Ee,G)}}}else if(le.visible){const se=x(R,le,T,M);R.onBeforeShadow(t,R,L,z,j,se,null),t.renderBufferDirect(z,null,j,se,R,null),R.onAfterShadow(t,R,L,z,j,se,null)}}const te=R.children;for(let j=0,le=te.length;j<le;j++)A(te[j],L,z,T,M)}function B(R){R.target.removeEventListener("dispose",B);for(const z in c){const T=c[z],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function kE(t){function e(){let I=!1;const ge=new Mt;let ae=null;const ue=new Mt(0,0,0,0);return{setMask:function(ve){ae!==ve&&!I&&(t.colorMask(ve,ve,ve,ve),ae=ve)},setLocked:function(ve){I=ve},setClear:function(ve,Fe,Ke,ht,Et){Et===!0&&(ve*=ht,Fe*=ht,Ke*=ht),ge.set(ve,Fe,Ke,ht),ue.equals(ge)===!1&&(t.clearColor(ve,Fe,Ke,ht),ue.copy(ge))},reset:function(){I=!1,ae=null,ue.set(-1,0,0,0)}}}function n(){let I=!1,ge=null,ae=null,ue=null;return{setTest:function(ve){ve?Me(t.DEPTH_TEST):U(t.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!I&&(t.depthMask(ve),ge=ve)},setFunc:function(ve){if(ae!==ve){switch(ve){case dv:t.depthFunc(t.NEVER);break;case hv:t.depthFunc(t.ALWAYS);break;case pv:t.depthFunc(t.LESS);break;case Ao:t.depthFunc(t.LEQUAL);break;case mv:t.depthFunc(t.EQUAL);break;case gv:t.depthFunc(t.GEQUAL);break;case _v:t.depthFunc(t.GREATER);break;case vv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=ve}},setLocked:function(ve){I=ve},setClear:function(ve){ue!==ve&&(t.clearDepth(ve),ue=ve)},reset:function(){I=!1,ge=null,ae=null,ue=null}}}function i(){let I=!1,ge=null,ae=null,ue=null,ve=null,Fe=null,Ke=null,ht=null,Et=null;return{setTest:function(Je){I||(Je?Me(t.STENCIL_TEST):U(t.STENCIL_TEST))},setMask:function(Je){ge!==Je&&!I&&(t.stencilMask(Je),ge=Je)},setFunc:function(Je,Pn,vn){(ae!==Je||ue!==Pn||ve!==vn)&&(t.stencilFunc(Je,Pn,vn),ae=Je,ue=Pn,ve=vn)},setOp:function(Je,Pn,vn){(Fe!==Je||Ke!==Pn||ht!==vn)&&(t.stencilOp(Je,Pn,vn),Fe=Je,Ke=Pn,ht=vn)},setLocked:function(Je){I=Je},setClear:function(Je){Et!==Je&&(t.clearStencil(Je),Et=Je)},reset:function(){I=!1,ge=null,ae=null,ue=null,ve=null,Fe=null,Ke=null,ht=null,Et=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],m=null,g=!1,v=null,h=null,p=null,E=null,x=null,A=null,B=null,R=new it(0,0,0),L=0,z=!1,T=null,M=null,D=null,te=null,j=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,Q=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(J)[1]),se=Q>=1):J.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),se=Q>=2);let G=null,Se={};const Ee=t.getParameter(t.SCISSOR_BOX),Ae=t.getParameter(t.VIEWPORT),Ne=new Mt().fromArray(Ee),je=new Mt().fromArray(Ae);function ne(I,ge,ae,ue){const ve=new Uint8Array(4),Fe=t.createTexture();t.bindTexture(I,Fe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<ae;Ke++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(ge+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Fe}const pe={};pe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Me(t.DEPTH_TEST),s.setFunc(Ao),O(!1),V(Gu),Me(t.CULL_FACE),b(pi);function Me(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function U(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function ce(I,ge){return u[I]!==ge?(t.bindFramebuffer(I,ge),u[I]=ge,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ge),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function re(I,ge){let ae=d,ue=!1;if(I){ae=f.get(ge),ae===void 0&&(ae=[],f.set(ge,ae));const ve=I.textures;if(ae.length!==ve.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Fe=0,Ke=ve.length;Fe<Ke;Fe++)ae[Fe]=t.COLOR_ATTACHMENT0+Fe;ae.length=ve.length,ue=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ue=!0);ue&&t.drawBuffers(ae)}function de(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const Le={[Bi]:t.FUNC_ADD,[Y0]:t.FUNC_SUBTRACT,[K0]:t.FUNC_REVERSE_SUBTRACT};Le[Z0]=t.MIN,Le[J0]=t.MAX;const P={[Q0]:t.ZERO,[ev]:t.ONE,[tv]:t.SRC_COLOR,[xl]:t.SRC_ALPHA,[av]:t.SRC_ALPHA_SATURATE,[sv]:t.DST_COLOR,[iv]:t.DST_ALPHA,[nv]:t.ONE_MINUS_SRC_COLOR,[Sl]:t.ONE_MINUS_SRC_ALPHA,[ov]:t.ONE_MINUS_DST_COLOR,[rv]:t.ONE_MINUS_DST_ALPHA,[lv]:t.CONSTANT_COLOR,[cv]:t.ONE_MINUS_CONSTANT_COLOR,[uv]:t.CONSTANT_ALPHA,[fv]:t.ONE_MINUS_CONSTANT_ALPHA};function b(I,ge,ae,ue,ve,Fe,Ke,ht,Et,Je){if(I===pi){g===!0&&(U(t.BLEND),g=!1);return}if(g===!1&&(Me(t.BLEND),g=!0),I!==j0){if(I!==v||Je!==z){if((h!==Bi||x!==Bi)&&(t.blendEquation(t.FUNC_ADD),h=Bi,x=Bi),Je)switch(I){case Tr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wu:t.blendFunc(t.ONE,t.ONE);break;case Xu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Tr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,E=null,A=null,B=null,R.set(0,0,0),L=0,v=I,z=Je}return}ve=ve||ge,Fe=Fe||ae,Ke=Ke||ue,(ge!==h||ve!==x)&&(t.blendEquationSeparate(Le[ge],Le[ve]),h=ge,x=ve),(ae!==p||ue!==E||Fe!==A||Ke!==B)&&(t.blendFuncSeparate(P[ae],P[ue],P[Fe],P[Ke]),p=ae,E=ue,A=Fe,B=Ke),(ht.equals(R)===!1||Et!==L)&&(t.blendColor(ht.r,ht.g,ht.b,Et),R.copy(ht),L=Et),v=I,z=!1}function w(I,ge){I.side===zn?U(t.CULL_FACE):Me(t.CULL_FACE);let ae=I.side===zt;ge&&(ae=!ae),O(ae),I.blending===Tr&&I.transparent===!1?b(pi):b(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const ue=I.stencilWrite;o.setTest(ue),ue&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),K(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):U(t.SAMPLE_ALPHA_TO_COVERAGE)}function O(I){T!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),T=I)}function V(I){I!==X0?(Me(t.CULL_FACE),I!==M&&(I===Gu?t.cullFace(t.BACK):I===q0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):U(t.CULL_FACE),M=I}function Y(I){I!==D&&(se&&t.lineWidth(I),D=I)}function K(I,ge,ae){I?(Me(t.POLYGON_OFFSET_FILL),(te!==ge||j!==ae)&&(t.polygonOffset(ge,ae),te=ge,j=ae)):U(t.POLYGON_OFFSET_FILL)}function ie(I){I?Me(t.SCISSOR_TEST):U(t.SCISSOR_TEST)}function y(I){I===void 0&&(I=t.TEXTURE0+le-1),G!==I&&(t.activeTexture(I),G=I)}function _(I,ge,ae){ae===void 0&&(G===null?ae=t.TEXTURE0+le-1:ae=G);let ue=Se[ae];ue===void 0&&(ue={type:void 0,texture:void 0},Se[ae]=ue),(ue.type!==I||ue.texture!==ge)&&(G!==ae&&(t.activeTexture(ae),G=ae),t.bindTexture(I,ge||pe[I]),ue.type=I,ue.texture=ge)}function C(){const I=Se[G];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function k(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(I){Ne.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ne.copy(I))}function Te(I){je.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),je.copy(I))}function ke(I,ge){let ae=l.get(ge);ae===void 0&&(ae=new WeakMap,l.set(ge,ae));let ue=ae.get(I);ue===void 0&&(ue=t.getUniformBlockIndex(ge,I.name),ae.set(I,ue))}function De(I,ge){const ue=l.get(ge).get(I);a.get(ge)!==ue&&(t.uniformBlockBinding(ge,ue,I.__bindingPointIndex),a.set(ge,ue))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},G=null,Se={},u={},f=new WeakMap,d=[],m=null,g=!1,v=null,h=null,p=null,E=null,x=null,A=null,B=null,R=new it(0,0,0),L=0,z=!1,T=null,M=null,D=null,te=null,j=null,Ne.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Me,disable:U,bindFramebuffer:ce,drawBuffers:re,useProgram:de,setBlending:b,setMaterial:w,setFlipSided:O,setCullFace:V,setLineWidth:Y,setPolygonOffset:K,setScissorTest:ie,activeTexture:y,bindTexture:_,unbindTexture:C,compressedTexImage2D:k,compressedTexImage3D:X,texImage2D:xe,texImage3D:Ge,updateUBOMapping:ke,uniformBlockBinding:De,texStorage2D:be,texStorage3D:fe,texSubImage2D:H,texSubImage3D:he,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Oe,viewport:Te,reset:Ye}}function kf(t,e,n,i){const r=zE(i);switch(n){case Nh:return t*e;case Fh:return t*e;case Bh:return t*e*2;case kh:return t*e/r.components*r.byteLength;case Pc:return t*e/r.components*r.byteLength;case zh:return t*e*2/r.components*r.byteLength;case Lc:return t*e*2/r.components*r.byteLength;case Oh:return t*e*3/r.components*r.byteLength;case hn:return t*e*4/r.components*r.byteLength;case Dc:return t*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _o:case vo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wl:case Rl:return Math.max(t,16)*Math.max(e,8)/4;case Tl:case Al:return Math.max(t,8)*Math.max(e,8)/2;case Cl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xo:case ql:case $l:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hh:case jl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yl:case Kl:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zE(t){switch(t){case qn:case Dh:return{byteLength:1,components:1};case gs:case Ih:case Ss:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case ji:case Ac:case Hn:return{byteLength:4,components:1};case Uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function HE(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return m?new OffscreenCanvas(y,_):Do("canvas")}function v(y,_,C){let k=1;const X=ie(y);if((X.width>C||X.height>C)&&(k=C/Math.max(X.width,X.height)),k<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const H=Math.floor(k*X.width),he=Math.floor(k*X.height);f===void 0&&(f=g(H,he));const oe=_?g(H,he):f;return oe.width=H,oe.height=he,oe.getContext("2d").drawImage(y,0,0,H,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+H+"x"+he+")."),oe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),y;return y}function h(y){return y.generateMipmaps&&y.minFilter!==rn&&y.minFilter!==fn}function p(y){t.generateMipmap(y)}function E(y,_,C,k,X=!1){if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let H=_;if(_===t.RED&&(C===t.FLOAT&&(H=t.R32F),C===t.HALF_FLOAT&&(H=t.R16F),C===t.UNSIGNED_BYTE&&(H=t.R8)),_===t.RED_INTEGER&&(C===t.UNSIGNED_BYTE&&(H=t.R8UI),C===t.UNSIGNED_SHORT&&(H=t.R16UI),C===t.UNSIGNED_INT&&(H=t.R32UI),C===t.BYTE&&(H=t.R8I),C===t.SHORT&&(H=t.R16I),C===t.INT&&(H=t.R32I)),_===t.RG&&(C===t.FLOAT&&(H=t.RG32F),C===t.HALF_FLOAT&&(H=t.RG16F),C===t.UNSIGNED_BYTE&&(H=t.RG8)),_===t.RG_INTEGER&&(C===t.UNSIGNED_BYTE&&(H=t.RG8UI),C===t.UNSIGNED_SHORT&&(H=t.RG16UI),C===t.UNSIGNED_INT&&(H=t.RG32UI),C===t.BYTE&&(H=t.RG8I),C===t.SHORT&&(H=t.RG16I),C===t.INT&&(H=t.RG32I)),_===t.RGB&&C===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),_===t.RGBA){const he=X?Ro:nt.getTransfer(k);C===t.FLOAT&&(H=t.RGBA32F),C===t.HALF_FLOAT&&(H=t.RGBA16F),C===t.UNSIGNED_BYTE&&(H=he===lt?t.SRGB8_ALPHA8:t.RGBA8),C===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),C===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(y,_){let C;return y?_===null||_===ji||_===Ur?C=t.DEPTH24_STENCIL8:_===Hn?C=t.DEPTH32F_STENCIL8:_===gs&&(C=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ji||_===Ur?C=t.DEPTH_COMPONENT24:_===Hn?C=t.DEPTH_COMPONENT32F:_===gs&&(C=t.DEPTH_COMPONENT16),C}function A(y,_){return h(y)===!0||y.isFramebufferTexture&&y.minFilter!==rn&&y.minFilter!==fn?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function B(y){const _=y.target;_.removeEventListener("dispose",B),L(_),_.isVideoTexture&&u.delete(_)}function R(y){const _=y.target;_.removeEventListener("dispose",R),T(_)}function L(y){const _=i.get(y);if(_.__webglInit===void 0)return;const C=y.source,k=d.get(C);if(k){const X=k[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&z(y),Object.keys(k).length===0&&d.delete(C)}i.remove(y)}function z(y){const _=i.get(y);t.deleteTexture(_.__webglTexture);const C=y.source,k=d.get(C);delete k[_.__cacheKey],o.memory.textures--}function T(y){const _=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let X=0;X<_.__webglFramebuffer[k].length;X++)t.deleteFramebuffer(_.__webglFramebuffer[k][X]);else t.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)t.deleteFramebuffer(_.__webglFramebuffer[k]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=y.textures;for(let k=0,X=C.length;k<X;k++){const H=i.get(C[k]);H.__webglTexture&&(t.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(C[k])}i.remove(y)}let M=0;function D(){M=0}function te(){const y=M;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),M+=1,y}function j(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function le(y,_){const C=i.get(y);if(y.isVideoTexture&&Y(y),y.isRenderTargetTexture===!1&&y.version>0&&C.__version!==y.version){const k=y.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(C,y,_);return}}n.bindTexture(t.TEXTURE_2D,C.__webglTexture,t.TEXTURE0+_)}function se(y,_){const C=i.get(y);if(y.version>0&&C.__version!==y.version){je(C,y,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,C.__webglTexture,t.TEXTURE0+_)}function Q(y,_){const C=i.get(y);if(y.version>0&&C.__version!==y.version){je(C,y,_);return}n.bindTexture(t.TEXTURE_3D,C.__webglTexture,t.TEXTURE0+_)}function J(y,_){const C=i.get(y);if(y.version>0&&C.__version!==y.version){ne(C,y,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+_)}const G={[El]:t.REPEAT,[zi]:t.CLAMP_TO_EDGE,[bl]:t.MIRRORED_REPEAT},Se={[rn]:t.NEAREST,[Rv]:t.NEAREST_MIPMAP_NEAREST,[Ns]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[ba]:t.LINEAR_MIPMAP_NEAREST,[Hi]:t.LINEAR_MIPMAP_LINEAR},Ee={[Iv]:t.NEVER,[kv]:t.ALWAYS,[Uv]:t.LESS,[Vh]:t.LEQUAL,[Nv]:t.EQUAL,[Bv]:t.GEQUAL,[Ov]:t.GREATER,[Fv]:t.NOTEQUAL};function Ae(y,_){if(_.type===Hn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===fn||_.magFilter===ba||_.magFilter===Ns||_.magFilter===Hi||_.minFilter===fn||_.minFilter===ba||_.minFilter===Ns||_.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,G[_.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,G[_.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,G[_.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,Se[_.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==Ns&&_.minFilter!==Hi||_.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ne(y,_){let C=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",B));const k=_.source;let X=d.get(k);X===void 0&&(X={},d.set(k,X));const H=j(_);if(H!==y.__cacheKey){X[H]===void 0&&(X[H]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,C=!0),X[H].usedTimes++;const he=X[y.__cacheKey];he!==void 0&&(X[y.__cacheKey].usedTimes--,he.usedTimes===0&&z(_)),y.__cacheKey=H,y.__webglTexture=X[H].texture}return C}function je(y,_,C){let k=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=t.TEXTURE_3D);const X=Ne(y,_),H=_.source;n.bindTexture(k,y.__webglTexture,t.TEXTURE0+C);const he=i.get(H);if(H.version!==he.__version||X===!0){n.activeTexture(t.TEXTURE0+C);const oe=nt.getPrimaries(nt.workingColorSpace),me=_.colorSpace===ui?null:nt.getPrimaries(_.colorSpace),be=_.colorSpace===ui||oe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let fe=v(_.image,!1,r.maxTextureSize);fe=K(_,fe);const xe=s.convert(_.format,_.colorSpace),Ge=s.convert(_.type);let Oe=E(_.internalFormat,xe,Ge,_.colorSpace,_.isVideoTexture);Ae(k,_);let Te;const ke=_.mipmaps,De=_.isVideoTexture!==!0,Ye=he.__version===void 0||X===!0,I=H.dataReady,ge=A(_,fe);if(_.isDepthTexture)Oe=x(_.format===Nr,_.type),Ye&&(De?n.texStorage2D(t.TEXTURE_2D,1,Oe,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Oe,fe.width,fe.height,0,xe,Ge,null));else if(_.isDataTexture)if(ke.length>0){De&&Ye&&n.texStorage2D(t.TEXTURE_2D,ge,Oe,ke[0].width,ke[0].height);for(let ae=0,ue=ke.length;ae<ue;ae++)Te=ke[ae],De?I&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,Te.width,Te.height,xe,Ge,Te.data):n.texImage2D(t.TEXTURE_2D,ae,Oe,Te.width,Te.height,0,xe,Ge,Te.data);_.generateMipmaps=!1}else De?(Ye&&n.texStorage2D(t.TEXTURE_2D,ge,Oe,fe.width,fe.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,xe,Ge,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,fe.width,fe.height,0,xe,Ge,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Oe,ke[0].width,ke[0].height,fe.depth);for(let ae=0,ue=ke.length;ae<ue;ae++)if(Te=ke[ae],_.format!==hn)if(xe!==null)if(De){if(I)if(_.layerUpdates.size>0){const ve=kf(Te.width,Te.height,_.format,_.type);for(const Fe of _.layerUpdates){const Ke=Te.data.subarray(Fe*ve/Te.data.BYTES_PER_ELEMENT,(Fe+1)*ve/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,Fe,Te.width,Te.height,1,xe,Ke,0,0)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,Te.width,Te.height,fe.depth,xe,Te.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Oe,Te.width,Te.height,fe.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,Te.width,Te.height,fe.depth,xe,Ge,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Oe,Te.width,Te.height,fe.depth,0,xe,Ge,Te.data)}else{De&&Ye&&n.texStorage2D(t.TEXTURE_2D,ge,Oe,ke[0].width,ke[0].height);for(let ae=0,ue=ke.length;ae<ue;ae++)Te=ke[ae],_.format!==hn?xe!==null?De?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,Te.width,Te.height,xe,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?I&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,Te.width,Te.height,xe,Ge,Te.data):n.texImage2D(t.TEXTURE_2D,ae,Oe,Te.width,Te.height,0,xe,Ge,Te.data)}else if(_.isDataArrayTexture)if(De){if(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Oe,fe.width,fe.height,fe.depth),I)if(_.layerUpdates.size>0){const ae=kf(fe.width,fe.height,_.format,_.type);for(const ue of _.layerUpdates){const ve=fe.data.subarray(ue*ae/fe.data.BYTES_PER_ELEMENT,(ue+1)*ae/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,xe,Ge,ve)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ge,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,fe.width,fe.height,fe.depth,0,xe,Ge,fe.data);else if(_.isData3DTexture)De?(Ye&&n.texStorage3D(t.TEXTURE_3D,ge,Oe,fe.width,fe.height,fe.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ge,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,fe.width,fe.height,fe.depth,0,xe,Ge,fe.data);else if(_.isFramebufferTexture){if(Ye)if(De)n.texStorage2D(t.TEXTURE_2D,ge,Oe,fe.width,fe.height);else{let ae=fe.width,ue=fe.height;for(let ve=0;ve<ge;ve++)n.texImage2D(t.TEXTURE_2D,ve,Oe,ae,ue,0,xe,Ge,null),ae>>=1,ue>>=1}}else if(ke.length>0){if(De&&Ye){const ae=ie(ke[0]);n.texStorage2D(t.TEXTURE_2D,ge,Oe,ae.width,ae.height)}for(let ae=0,ue=ke.length;ae<ue;ae++)Te=ke[ae],De?I&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,xe,Ge,Te):n.texImage2D(t.TEXTURE_2D,ae,Oe,xe,Ge,Te);_.generateMipmaps=!1}else if(De){if(Ye){const ae=ie(fe);n.texStorage2D(t.TEXTURE_2D,ge,Oe,ae.width,ae.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ge,fe)}else n.texImage2D(t.TEXTURE_2D,0,Oe,xe,Ge,fe);h(_)&&p(k),he.__version=H.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function ne(y,_,C){if(_.image.length!==6)return;const k=Ne(y,_),X=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+C);const H=i.get(X);if(X.version!==H.__version||k===!0){n.activeTexture(t.TEXTURE0+C);const he=nt.getPrimaries(nt.workingColorSpace),oe=_.colorSpace===ui?null:nt.getPrimaries(_.colorSpace),me=_.colorSpace===ui||he===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const be=_.isCompressedTexture||_.image[0].isCompressedTexture,fe=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let ue=0;ue<6;ue++)!be&&!fe?xe[ue]=v(_.image[ue],!0,r.maxCubemapSize):xe[ue]=fe?_.image[ue].image:_.image[ue],xe[ue]=K(_,xe[ue]);const Ge=xe[0],Oe=s.convert(_.format,_.colorSpace),Te=s.convert(_.type),ke=E(_.internalFormat,Oe,Te,_.colorSpace),De=_.isVideoTexture!==!0,Ye=H.__version===void 0||k===!0,I=X.dataReady;let ge=A(_,Ge);Ae(t.TEXTURE_CUBE_MAP,_);let ae;if(be){De&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,ke,Ge.width,Ge.height);for(let ue=0;ue<6;ue++){ae=xe[ue].mipmaps;for(let ve=0;ve<ae.length;ve++){const Fe=ae[ve];_.format!==hn?Oe!==null?De?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve,0,0,Fe.width,Fe.height,Oe,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve,ke,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve,0,0,Fe.width,Fe.height,Oe,Te,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve,ke,Fe.width,Fe.height,0,Oe,Te,Fe.data)}}}else{if(ae=_.mipmaps,De&&Ye){ae.length>0&&ge++;const ue=ie(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,ke,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(fe){De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,xe[ue].width,xe[ue].height,Oe,Te,xe[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ke,xe[ue].width,xe[ue].height,0,Oe,Te,xe[ue].data);for(let ve=0;ve<ae.length;ve++){const Ke=ae[ve].image[ue].image;De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve+1,0,0,Ke.width,Ke.height,Oe,Te,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve+1,ke,Ke.width,Ke.height,0,Oe,Te,Ke.data)}}else{De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,Te,xe[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ke,Oe,Te,xe[ue]);for(let ve=0;ve<ae.length;ve++){const Fe=ae[ve];De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve+1,0,0,Oe,Te,Fe.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve+1,ke,Oe,Te,Fe.image[ue])}}}h(_)&&p(t.TEXTURE_CUBE_MAP),H.__version=X.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function pe(y,_,C,k,X,H){const he=s.convert(C.format,C.colorSpace),oe=s.convert(C.type),me=E(C.internalFormat,he,oe,C.colorSpace);if(!i.get(_).__hasExternalTextures){const fe=Math.max(1,_.width>>H),xe=Math.max(1,_.height>>H);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,H,me,fe,xe,_.depth,0,he,oe,null):n.texImage2D(X,H,me,fe,xe,0,he,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),V(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,X,i.get(C).__webglTexture,0,O(_)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,X,i.get(C).__webglTexture,H),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(y,_,C){if(t.bindRenderbuffer(t.RENDERBUFFER,y),_.depthBuffer){const k=_.depthTexture,X=k&&k.isDepthTexture?k.type:null,H=x(_.stencilBuffer,X),he=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=O(_);V(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,H,_.width,_.height):C?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,H,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,H,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,y)}else{const k=_.textures;for(let X=0;X<k.length;X++){const H=k[X],he=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),me=E(H.internalFormat,he,oe,H.colorSpace),be=O(_);C&&V(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,me,_.width,_.height):V(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,me,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,me,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function U(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),le(_.depthTexture,0);const k=i.get(_.depthTexture).__webglTexture,X=O(_);if(_.depthTexture.format===wr)V(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,k,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,k,0);else if(_.depthTexture.format===Nr)V(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,k,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function ce(y){const _=i.get(y),C=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");U(_.__webglFramebuffer,y)}else if(C){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]=t.createRenderbuffer(),Me(_.__webglDepthbuffer[k],y,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=t.createRenderbuffer(),Me(_.__webglDepthbuffer,y,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(y,_,C){const k=i.get(y);_!==void 0&&pe(k.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),C!==void 0&&ce(y)}function de(y){const _=y.texture,C=i.get(y),k=i.get(_);y.addEventListener("dispose",R);const X=y.textures,H=y.isWebGLCubeRenderTarget===!0,he=X.length>1;if(he||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=_.version,o.memory.textures++),H){C.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[oe]=[];for(let me=0;me<_.mipmaps.length;me++)C.__webglFramebuffer[oe][me]=t.createFramebuffer()}else C.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)C.__webglFramebuffer[oe]=t.createFramebuffer()}else C.__webglFramebuffer=t.createFramebuffer();if(he)for(let oe=0,me=X.length;oe<me;oe++){const be=i.get(X[oe]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(y.samples>0&&V(y)===!1){C.__webglMultisampledFramebuffer=t.createFramebuffer(),C.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let oe=0;oe<X.length;oe++){const me=X[oe];C.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,C.__webglColorRenderbuffer[oe]);const be=s.convert(me.format,me.colorSpace),fe=s.convert(me.type),xe=E(me.internalFormat,be,fe,me.colorSpace,y.isXRRenderTarget===!0),Ge=O(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,xe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,C.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(C.__webglDepthRenderbuffer=t.createRenderbuffer(),Me(C.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(H){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Ae(t.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)pe(C.__webglFramebuffer[oe][me],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else pe(C.__webglFramebuffer[oe],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);h(_)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let oe=0,me=X.length;oe<me;oe++){const be=X[oe],fe=i.get(be);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Ae(t.TEXTURE_2D,be),pe(C.__webglFramebuffer,y,be,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),h(be)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(oe=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,k.__webglTexture),Ae(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)pe(C.__webglFramebuffer[me],y,_,t.COLOR_ATTACHMENT0,oe,me);else pe(C.__webglFramebuffer,y,_,t.COLOR_ATTACHMENT0,oe,0);h(_)&&p(oe),n.unbindTexture()}y.depthBuffer&&ce(y)}function Le(y){const _=y.textures;for(let C=0,k=_.length;C<k;C++){const X=_[C];if(h(X)){const H=y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(X).__webglTexture;n.bindTexture(H,he),p(H),n.unbindTexture()}}}const P=[],b=[];function w(y){if(y.samples>0){if(V(y)===!1){const _=y.textures,C=y.width,k=y.height;let X=t.COLOR_BUFFER_BIT;const H=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(y),oe=_.length>1;if(oe)for(let me=0;me<_.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<_.length;me++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const be=i.get(_[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,C,k,0,0,C,k,X,t.NEAREST),l===!0&&(P.length=0,b.length=0,P.push(t.COLOR_ATTACHMENT0+me),y.depthBuffer&&y.resolveDepthBuffer===!1&&(P.push(H),b.push(H),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let me=0;me<_.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const be=i.get(_[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function O(y){return Math.min(r.maxSamples,y.samples)}function V(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function K(y,_){const C=y.colorSpace,k=y.format,X=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||C!==Ei&&C!==ui&&(nt.getTransfer(C)===lt?(k!==hn||X!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function ie(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=D,this.setTexture2D=le,this.setTexture2DArray=se,this.setTexture3D=Q,this.setTextureCube=J,this.rebindTextures=re,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=V}function VE(t,e){function n(i,r=ui){let s;const o=nt.getTransfer(r);if(i===qn)return t.UNSIGNED_BYTE;if(i===Rc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Dh)return t.BYTE;if(i===Ih)return t.SHORT;if(i===gs)return t.UNSIGNED_SHORT;if(i===Ac)return t.INT;if(i===ji)return t.UNSIGNED_INT;if(i===Hn)return t.FLOAT;if(i===Ss)return t.HALF_FLOAT;if(i===Nh)return t.ALPHA;if(i===Oh)return t.RGB;if(i===hn)return t.RGBA;if(i===Fh)return t.LUMINANCE;if(i===Bh)return t.LUMINANCE_ALPHA;if(i===wr)return t.DEPTH_COMPONENT;if(i===Nr)return t.DEPTH_STENCIL;if(i===kh)return t.RED;if(i===Pc)return t.RED_INTEGER;if(i===zh)return t.RG;if(i===Lc)return t.RG_INTEGER;if(i===Dc)return t.RGBA_INTEGER;if(i===mo||i===go||i===_o||i===vo)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===wl||i===Al||i===Rl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Pl||i===Ll)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cl||i===Pl)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ll)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dl||i===Il||i===Ul||i===Nl||i===Ol||i===Fl||i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xo||i===ql||i===$l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xo)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hh||i===jl||i===Yl||i===Kl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ur?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class GE extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class io extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const h=n.getJointPose(v,i),p=this._getHandJoint(c,v);h!==null&&(p.matrix.fromArray(h.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=h.radius),p.visible=h!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new io;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const XE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:XE,fragmentShader:qE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gn(new na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jE extends Fr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null;const v=new $E,h=n.getContextAttributes();let p=null,E=null;const x=[],A=[],B=new st;let R=null;const L=new tn;L.layers.enable(1),L.viewport=new Mt;const z=new tn;z.layers.enable(2),z.viewport=new Mt;const T=[L,z],M=new GE;M.layers.enable(1),M.layers.enable(2);let D=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=x[ne];return pe===void 0&&(pe=new Za,x[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=x[ne];return pe===void 0&&(pe=new Za,x[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=x[ne];return pe===void 0&&(pe=new Za,x[ne]=pe),pe.getHandSpace()};function j(ne){const pe=A.indexOf(ne.inputSource);if(pe===-1)return;const Me=x[pe];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,c||o),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function le(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",le),r.removeEventListener("inputsourceschange",se);for(let ne=0;ne<x.length;ne++){const pe=A[ne];pe!==null&&(A[ne]=null,x[ne].disconnect(pe))}D=null,te=null,v.reset(),e.setRenderTarget(p),m=null,d=null,f=null,r=null,E=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",le),r.addEventListener("inputsourceschange",se),h.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const pe={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Yi(m.framebufferWidth,m.framebufferHeight,{format:hn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let pe=null,Me=null,U=null;h.depth&&(U=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=h.stencil?Nr:wr,Me=h.stencil?Ur:ji);const ce={colorFormat:n.RGBA8,depthFormat:U,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Yi(d.textureWidth,d.textureHeight,{format:hn,type:qn,depthTexture:new ip(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function se(ne){for(let pe=0;pe<ne.removed.length;pe++){const Me=ne.removed[pe],U=A.indexOf(Me);U>=0&&(A[U]=null,x[U].disconnect(Me))}for(let pe=0;pe<ne.added.length;pe++){const Me=ne.added[pe];let U=A.indexOf(Me);if(U===-1){for(let re=0;re<x.length;re++)if(re>=A.length){A.push(Me),U=re;break}else if(A[re]===null){A[re]=Me,U=re;break}if(U===-1)break}const ce=x[U];ce&&ce.connect(Me)}}const Q=new W,J=new W;function G(ne,pe,Me){Q.setFromMatrixPosition(pe.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const U=Q.distanceTo(J),ce=pe.projectionMatrix.elements,re=Me.projectionMatrix.elements,de=ce[14]/(ce[10]-1),Le=ce[14]/(ce[10]+1),P=(ce[9]+1)/ce[5],b=(ce[9]-1)/ce[5],w=(ce[8]-1)/ce[0],O=(re[8]+1)/re[0],V=de*w,Y=de*O,K=U/(-w+O),ie=K*-w;pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ie),ne.translateZ(K),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const y=de+K,_=Le+K,C=V-ie,k=Y+(U-ie),X=P*Le/_*y,H=b*Le/_*y;ne.projectionMatrix.makePerspective(C,k,X,H,y,_),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function Se(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;v.texture!==null&&(ne.near=v.depthNear,ne.far=v.depthFar),M.near=z.near=L.near=ne.near,M.far=z.far=L.far=ne.far,(D!==M.near||te!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,te=M.far,L.near=D,L.far=te,z.near=D,z.far=te,L.updateProjectionMatrix(),z.updateProjectionMatrix(),ne.updateProjectionMatrix());const pe=ne.parent,Me=M.cameras;Se(M,pe);for(let U=0;U<Me.length;U++)Se(Me[U],pe);Me.length===2?G(M,L,z):M.projectionMatrix.copy(L.projectionMatrix),Ee(ne,M,pe)};function Ee(ne,pe,Me){Me===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Zl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Ae=null;function Ne(ne,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let U=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,U=!0);for(let re=0;re<Me.length;re++){const de=Me[re];let Le=null;if(m!==null)Le=m.getViewport(de);else{const b=f.getViewSubImage(d,de);Le=b.viewport,re===0&&(e.setRenderTargetTextures(E,b.colorTexture,d.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(E))}let P=T[re];P===void 0&&(P=new tn,P.layers.enable(re),P.viewport=new Mt,T[re]=P),P.matrix.fromArray(de.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(de.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Le.x,Le.y,Le.width,Le.height),re===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),U===!0&&M.cameras.push(P)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const re=f.getDepthInformation(Me[0]);re&&re.isValid&&re.texture&&v.init(e,re,r.renderState)}}for(let Me=0;Me<x.length;Me++){const U=A[Me],ce=x[Me];U!==null&&ce!==void 0&&ce.update(U,pe,c||o)}Ae&&Ae(ne,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const je=new np;je.setAnimationLoop(Ne),this.setAnimationLoop=function(ne){Ae=ne},this.dispose=function(){}}}const Di=new $n,YE=new gt;function KE(t,e){function n(h,p){h.matrixAutoUpdate===!0&&h.updateMatrix(),p.value.copy(h.matrix)}function i(h,p){p.color.getRGB(h.fogColor.value,Jh(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function r(h,p,E,x,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(h,p):p.isMeshToonMaterial?(s(h,p),f(h,p)):p.isMeshPhongMaterial?(s(h,p),u(h,p)):p.isMeshStandardMaterial?(s(h,p),d(h,p),p.isMeshPhysicalMaterial&&m(h,p,A)):p.isMeshMatcapMaterial?(s(h,p),g(h,p)):p.isMeshDepthMaterial?s(h,p):p.isMeshDistanceMaterial?(s(h,p),v(h,p)):p.isMeshNormalMaterial?s(h,p):p.isLineBasicMaterial?(o(h,p),p.isLineDashedMaterial&&a(h,p)):p.isPointsMaterial?l(h,p,E,x):p.isSpriteMaterial?c(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map,n(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,n(p.alphaMap,h.alphaMapTransform)),p.bumpMap&&(h.bumpMap.value=p.bumpMap,n(p.bumpMap,h.bumpMapTransform),h.bumpScale.value=p.bumpScale,p.side===zt&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,n(p.normalMap,h.normalMapTransform),h.normalScale.value.copy(p.normalScale),p.side===zt&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,n(p.displacementMap,h.displacementMapTransform),h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,h.emissiveMapTransform)),p.specularMap&&(h.specularMap.value=p.specularMap,n(p.specularMap,h.specularMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const E=e.get(p),x=E.envMap,A=E.envMapRotation;x&&(h.envMap.value=x,Di.copy(A),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.envMapRotation.value.setFromMatrix4(YE.makeRotationFromEuler(Di)),h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap&&(h.lightMap.value=p.lightMap,h.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,h.lightMapTransform)),p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,h.aoMapTransform))}function o(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,p.map&&(h.map.value=p.map,n(p.map,h.mapTransform))}function a(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function l(h,p,E,x){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*E,h.scale.value=x*.5,p.map&&(h.map.value=p.map,n(p.map,h.uvTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,n(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function c(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map,n(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,n(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function f(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.metalness.value=p.metalness,p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,h.metalnessMapTransform)),h.roughness.value=p.roughness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,h.roughnessMapTransform)),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function m(h,p,E){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,h.sheenColorMapTransform)),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,h.sheenRoughnessMapTransform))),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,h.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(h.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&h.clearcoatNormalScale.value.negate())),p.dispersion>0&&(h.dispersion.value=p.dispersion),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,h.iridescenceMapTransform)),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,h.transmissionMapTransform)),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(h.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(h.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,h.specularColorMapTransform)),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function v(h,p){const E=e.get(p).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZE(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const A=x.program;i.uniformBlockBinding(E,A)}function c(E,x){let A=r[E.id];A===void 0&&(g(E),A=u(E),r[E.id]=A,E.addEventListener("dispose",h));const B=x.program;i.updateUBOMapping(E,B);const R=e.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function u(E){const x=f();E.__bindingPointIndex=x;const A=t.createBuffer(),B=E.__size,R=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,B,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,A),A}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=r[E.id],A=E.uniforms,B=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let R=0,L=A.length;R<L;R++){const z=Array.isArray(A[R])?A[R]:[A[R]];for(let T=0,M=z.length;T<M;T++){const D=z[T];if(m(D,R,T,B)===!0){const te=D.__offset,j=Array.isArray(D.value)?D.value:[D.value];let le=0;for(let se=0;se<j.length;se++){const Q=j[se],J=v(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,te+le,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,le),le+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,te,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(E,x,A,B){const R=E.value,L=x+"_"+A;if(B[L]===void 0)return typeof R=="number"||typeof R=="boolean"?B[L]=R:B[L]=R.clone(),!0;{const z=B[L];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return B[L]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(E){const x=E.uniforms;let A=0;const B=16;for(let L=0,z=x.length;L<z;L++){const T=Array.isArray(x[L])?x[L]:[x[L]];for(let M=0,D=T.length;M<D;M++){const te=T[M],j=Array.isArray(te.value)?te.value:[te.value];for(let le=0,se=j.length;le<se;le++){const Q=j[le],J=v(Q),G=A%B,Se=G%J.boundary,Ee=G+Se;A+=Se,Ee!==0&&B-Ee<J.storage&&(A+=B-Ee),te.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=A,A+=J.storage}}}const R=A%B;return R>0&&(A+=B-R),E.__size=A,E.__cache={},this}function v(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function h(E){const x=E.target;x.removeEventListener("dispose",h);const A=o.indexOf(x.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const E in r)t.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class JE{constructor(e={}){const{canvas:n=Hv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,h=null;const p=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=mi,this.toneMappingExposure=1;const x=this;let A=!1,B=0,R=0,L=null,z=-1,T=null;const M=new Mt,D=new Mt;let te=null;const j=new it(0);let le=0,se=n.width,Q=n.height,J=1,G=null,Se=null;const Ee=new Mt(0,0,se,Q),Ae=new Mt(0,0,se,Q);let Ne=!1;const je=new tp;let ne=!1,pe=!1;const Me=new gt,U=new W,ce=new Mt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Le(){return L===null?J:1}let P=i;function b(S,N){return n.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wc}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",ve,!1),P===null){const N="webgl2";if(P=b(N,S),P===null)throw b(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let w,O,V,Y,K,ie,y,_,C,k,X,H,he,oe,me,be,fe,xe,Ge,Oe,Te,ke,De,Ye;function I(){w=new rM(P),w.init(),ke=new VE(P,w),O=new Zy(P,w,e,ke),V=new kE(P),Y=new aM(P),K=new TE,ie=new HE(P,w,V,K,O,ke,Y),y=new Qy(x),_=new iM(x),C=new hx(P),De=new Yy(P,C),k=new sM(P,C,Y,De),X=new cM(P,k,C,Y),Ge=new lM(P,O,ie),be=new Jy(K),H=new bE(x,y,_,w,O,De,be),he=new KE(x,K),oe=new AE,me=new IE(w),xe=new jy(x,y,_,V,X,d,l),fe=new BE(x,X,O),Ye=new ZE(P,Y,O,V),Oe=new Ky(P,w,Y),Te=new oM(P,w,Y),Y.programs=H.programs,x.capabilities=O,x.extensions=w,x.properties=K,x.renderLists=oe,x.shadowMap=fe,x.state=V,x.info=Y}I();const ge=new jE(x,P);this.xr=ge,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=w.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=w.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(se,Q,!1))},this.getSize=function(S){return S.set(se,Q)},this.setSize=function(S,N,q=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=S,Q=N,n.width=Math.floor(S*J),n.height=Math.floor(N*J),q===!0&&(n.style.width=S+"px",n.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(se*J,Q*J).floor()},this.setDrawingBufferSize=function(S,N,q){se=S,Q=N,J=q,n.width=Math.floor(S*q),n.height=Math.floor(N*q),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,N,q,$){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,N,q,$),V.viewport(M.copy(Ee).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(Ae)},this.setScissor=function(S,N,q,$){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,N,q,$),V.scissor(D.copy(Ae).multiplyScalar(J).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(S){V.setScissorTest(Ne=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){Se=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(S=!0,N=!0,q=!0){let $=0;if(S){let F=!1;if(L!==null){const _e=L.texture.format;F=_e===Dc||_e===Lc||_e===Pc}if(F){const _e=L.texture.type,we=_e===qn||_e===ji||_e===gs||_e===Ur||_e===Rc||_e===Cc,Re=xe.getClearColor(),Ce=xe.getClearAlpha(),Be=Re.r,ze=Re.g,Ie=Re.b;we?(m[0]=Be,m[1]=ze,m[2]=Ie,m[3]=Ce,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Be,g[1]=ze,g[2]=Ie,g[3]=Ce,P.clearBufferiv(P.COLOR,0,g))}else $|=P.COLOR_BUFFER_BIT}N&&($|=P.DEPTH_BUFFER_BIT),q&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),oe.dispose(),me.dispose(),K.dispose(),y.dispose(),_.dispose(),X.dispose(),De.dispose(),Ye.dispose(),H.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",vn),ge.removeEventListener("sessionend",zc),bi.stop()};function ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=Y.autoReset,N=fe.enabled,q=fe.autoUpdate,$=fe.needsUpdate,F=fe.type;I(),Y.autoReset=S,fe.enabled=N,fe.autoUpdate=q,fe.needsUpdate=$,fe.type=F}function ve(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Fe(S){const N=S.target;N.removeEventListener("dispose",Fe),Ke(N)}function Ke(S){ht(S),K.remove(S)}function ht(S){const N=K.get(S).programs;N!==void 0&&(N.forEach(function(q){H.releaseProgram(q)}),S.isShaderMaterial&&H.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,q,$,F,_e){N===null&&(N=re);const we=F.isMesh&&F.matrixWorld.determinant()<0,Re=Up(S,N,q,$,F);V.setMaterial($,we);let Ce=q.index,Be=1;if($.wireframe===!0){if(Ce=k.getWireframeAttribute(q),Ce===void 0)return;Be=2}const ze=q.drawRange,Ie=q.attributes.position;let Qe=ze.start*Be,ft=(ze.start+ze.count)*Be;_e!==null&&(Qe=Math.max(Qe,_e.start*Be),ft=Math.min(ft,(_e.start+_e.count)*Be)),Ce!==null?(Qe=Math.max(Qe,0),ft=Math.min(ft,Ce.count)):Ie!=null&&(Qe=Math.max(Qe,0),ft=Math.min(ft,Ie.count));const dt=ft-Qe;if(dt<0||dt===1/0)return;De.setup(F,$,Re,q,Ce);let qt,et=Oe;if(Ce!==null&&(qt=C.get(Ce),et=Te,et.setIndex(qt)),F.isMesh)$.wireframe===!0?(V.setLineWidth($.wireframeLinewidth*Le()),et.setMode(P.LINES)):et.setMode(P.TRIANGLES);else if(F.isLine){let Pe=$.linewidth;Pe===void 0&&(Pe=1),V.setLineWidth(Pe*Le()),F.isLineSegments?et.setMode(P.LINES):F.isLineLoop?et.setMode(P.LINE_LOOP):et.setMode(P.LINE_STRIP)}else F.isPoints?et.setMode(P.POINTS):F.isSprite&&et.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)et.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(w.get("WEBGL_multi_draw"))et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,bt=F._multiDrawCounts,tt=F._multiDrawCount,sn=Ce?C.get(Ce).bytesPerElement:1,Qi=K.get($).currentProgram.getUniforms();for(let $t=0;$t<tt;$t++)Qi.setValue(P,"_gl_DrawID",$t),et.render(Pe[$t]/sn,bt[$t])}else if(F.isInstancedMesh)et.renderInstances(Qe,dt,F.count);else if(q.isInstancedBufferGeometry){const Pe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bt=Math.min(q.instanceCount,Pe);et.renderInstances(Qe,dt,bt)}else et.render(Qe,dt)};function Et(S,N,q){S.transparent===!0&&S.side===zn&&S.forceSinglePass===!1?(S.side=zt,S.needsUpdate=!0,Rs(S,N,q),S.side=_i,S.needsUpdate=!0,Rs(S,N,q),S.side=zn):Rs(S,N,q)}this.compile=function(S,N,q=null){q===null&&(q=S),h=me.get(q),h.init(N),E.push(h),q.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),S!==q&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const $=new Set;return S.traverse(function(F){const _e=F.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Re=_e[we];Et(Re,q,F),$.add(Re)}else Et(_e,q,F),$.add(_e)}),E.pop(),h=null,$},this.compileAsync=function(S,N,q=null){const $=this.compile(S,N,q);return new Promise(F=>{function _e(){if($.forEach(function(we){K.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){F(S);return}setTimeout(_e,10)}w.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Je=null;function Pn(S){Je&&Je(S)}function vn(){bi.stop()}function zc(){bi.start()}const bi=new np;bi.setAnimationLoop(Pn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(S){Je=S,ge.setAnimationLoop(S),S===null?bi.stop():bi.start()},ge.addEventListener("sessionstart",vn),ge.addEventListener("sessionend",zc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(N),N=ge.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,L),h=me.get(S,E.length),h.init(N),E.push(h),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),je.setFromProjectionMatrix(Me),pe=this.localClippingEnabled,ne=be.init(this.clippingPlanes,pe),v=oe.get(S,p.length),v.init(),p.push(v),ge.enabled===!0&&ge.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&ua(_e,N,-1/0,x.sortObjects)}ua(S,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,Se),de=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,de&&xe.addToRenderList(v,S),this.info.render.frame++,ne===!0&&be.beginShadows();const q=h.state.shadowsArray;fe.render(q,S,N),ne===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,F=v.transmissive;if(h.setupLights(),N.isArrayCamera){const _e=N.cameras;if(F.length>0)for(let we=0,Re=_e.length;we<Re;we++){const Ce=_e[we];Vc($,F,S,Ce)}de&&xe.render(S);for(let we=0,Re=_e.length;we<Re;we++){const Ce=_e[we];Hc(v,S,Ce,Ce.viewport)}}else F.length>0&&Vc($,F,S,N),de&&xe.render(S),Hc(v,S,N);L!==null&&(ie.updateMultisampleRenderTarget(L),ie.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(x,S,N),De.resetDefaultState(),z=-1,T=null,E.pop(),E.length>0?(h=E[E.length-1],ne===!0&&be.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ua(S,N,q,$){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||je.intersectsSprite(S)){$&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Me);const we=X.update(S),Re=S.material;Re.visible&&v.push(S,we,Re,q,ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||je.intersectsObject(S))){const we=X.update(S),Re=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ce.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ce.copy(we.boundingSphere.center)),ce.applyMatrix4(S.matrixWorld).applyMatrix4(Me)),Array.isArray(Re)){const Ce=we.groups;for(let Be=0,ze=Ce.length;Be<ze;Be++){const Ie=Ce[Be],Qe=Re[Ie.materialIndex];Qe&&Qe.visible&&v.push(S,we,Qe,q,ce.z,Ie)}}else Re.visible&&v.push(S,we,Re,q,ce.z,null)}}const _e=S.children;for(let we=0,Re=_e.length;we<Re;we++)ua(_e[we],N,q,$)}function Hc(S,N,q,$){const F=S.opaque,_e=S.transmissive,we=S.transparent;h.setupLightsView(q),ne===!0&&be.setGlobalState(x.clippingPlanes,q),$&&V.viewport(M.copy($)),F.length>0&&As(F,N,q),_e.length>0&&As(_e,N,q),we.length>0&&As(we,N,q),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Vc(S,N,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[$.id]===void 0&&(h.state.transmissionRenderTarget[$.id]=new Yi(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float")?Ss:qn,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const _e=h.state.transmissionRenderTarget[$.id],we=$.viewport||M;_e.setSize(we.z,we.w);const Re=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(j),le=x.getClearAlpha(),le<1&&x.setClearColor(16777215,.5),x.clear(),de&&xe.render(q);const Ce=x.toneMapping;x.toneMapping=mi;const Be=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),h.setupLightsView($),ne===!0&&be.setGlobalState(x.clippingPlanes,$),As(S,q,$),ie.updateMultisampleRenderTarget(_e),ie.updateRenderTargetMipmap(_e),w.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ie=0,Qe=N.length;Ie<Qe;Ie++){const ft=N[Ie],dt=ft.object,qt=ft.geometry,et=ft.material,Pe=ft.group;if(et.side===zn&&dt.layers.test($.layers)){const bt=et.side;et.side=zt,et.needsUpdate=!0,Gc(dt,q,$,qt,et,Pe),et.side=bt,et.needsUpdate=!0,ze=!0}}ze===!0&&(ie.updateMultisampleRenderTarget(_e),ie.updateRenderTargetMipmap(_e))}x.setRenderTarget(Re),x.setClearColor(j,le),Be!==void 0&&($.viewport=Be),x.toneMapping=Ce}function As(S,N,q){const $=N.isScene===!0?N.overrideMaterial:null;for(let F=0,_e=S.length;F<_e;F++){const we=S[F],Re=we.object,Ce=we.geometry,Be=$===null?we.material:$,ze=we.group;Re.layers.test(q.layers)&&Gc(Re,N,q,Ce,Be,ze)}}function Gc(S,N,q,$,F,_e){S.onBeforeRender(x,N,q,$,F,_e),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.transparent===!0&&F.side===zn&&F.forceSinglePass===!1?(F.side=zt,F.needsUpdate=!0,x.renderBufferDirect(q,N,$,F,S,_e),F.side=_i,F.needsUpdate=!0,x.renderBufferDirect(q,N,$,F,S,_e),F.side=zn):x.renderBufferDirect(q,N,$,F,S,_e),S.onAfterRender(x,N,q,$,F,_e)}function Rs(S,N,q){N.isScene!==!0&&(N=re);const $=K.get(S),F=h.state.lights,_e=h.state.shadowsArray,we=F.state.version,Re=H.getParameters(S,F.state,_e,N,q),Ce=H.getProgramCacheKey(Re);let Be=$.programs;$.environment=S.isMeshStandardMaterial?N.environment:null,$.fog=N.fog,$.envMap=(S.isMeshStandardMaterial?_:y).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Be===void 0&&(S.addEventListener("dispose",Fe),Be=new Map,$.programs=Be);let ze=Be.get(Ce);if(ze!==void 0){if($.currentProgram===ze&&$.lightsStateVersion===we)return Xc(S,Re),ze}else Re.uniforms=H.getUniforms(S),S.onBeforeCompile(Re,x),ze=H.acquireProgram(Re,Ce),Be.set(Ce,ze),$.uniforms=Re.uniforms;const Ie=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=be.uniform),Xc(S,Re),$.needsLights=Op(S),$.lightsStateVersion=we,$.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),$.currentProgram=ze,$.uniformsList=null,ze}function Wc(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=So.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Xc(S,N){const q=K.get(S);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function Up(S,N,q,$,F){N.isScene!==!0&&(N=re),ie.resetTextureUnits();const _e=N.fog,we=$.isMeshStandardMaterial?N.environment:null,Re=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ei,Ce=($.isMeshStandardMaterial?_:y).get($.envMap||we),Be=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color;let dt=mi;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(dt=x.toneMapping);const qt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,et=qt!==void 0?qt.length:0,Pe=K.get($),bt=h.state.lights;if(ne===!0&&(pe===!0||S!==T)){const Qt=S===T&&$.id===z;be.setState($,S,Qt)}let tt=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==bt.state.version||Pe.outputColorSpace!==Re||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Ce||$.fog===!0&&Pe.fog!==_e||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==be.numPlanes||Pe.numIntersection!==be.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==ze||Pe.morphTargets!==Ie||Pe.morphNormals!==Qe||Pe.morphColors!==ft||Pe.toneMapping!==dt||Pe.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Pe.__version=$.version);let sn=Pe.currentProgram;tt===!0&&(sn=Rs($,N,F));let Qi=!1,$t=!1,fa=!1;const pt=sn.getUniforms(),Kn=Pe.uniforms;if(V.useProgram(sn.program)&&(Qi=!0,$t=!0,fa=!0),$.id!==z&&(z=$.id,$t=!0),Qi||T!==S){pt.setValue(P,"projectionMatrix",S.projectionMatrix),pt.setValue(P,"viewMatrix",S.matrixWorldInverse);const Qt=pt.map.cameraPosition;Qt!==void 0&&Qt.setValue(P,U.setFromMatrixPosition(S.matrixWorld)),O.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,$t=!0,fa=!0)}if(F.isSkinnedMesh){pt.setOptional(P,F,"bindMatrix"),pt.setOptional(P,F,"bindMatrixInverse");const Qt=F.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),pt.setValue(P,"boneTexture",Qt.boneTexture,ie))}F.isBatchedMesh&&(pt.setOptional(P,F,"batchingTexture"),pt.setValue(P,"batchingTexture",F._matricesTexture,ie),pt.setOptional(P,F,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",F._indirectTexture,ie),pt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",F._colorsTexture,ie));const da=q.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0)&&Ge.update(F,q,sn),($t||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,pt.setValue(P,"receiveShadow",F.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Kn.envMap.value=Ce,Kn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&N.environment!==null&&(Kn.envMapIntensity.value=N.environmentIntensity),$t&&(pt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Np(Kn,fa),_e&&$.fog===!0&&he.refreshFogUniforms(Kn,_e),he.refreshMaterialUniforms(Kn,$,J,Q,h.state.transmissionRenderTarget[S.id]),So.upload(P,Wc(Pe),Kn,ie)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(So.upload(P,Wc(Pe),Kn,ie),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(P,"center",F.center),pt.setValue(P,"modelViewMatrix",F.modelViewMatrix),pt.setValue(P,"normalMatrix",F.normalMatrix),pt.setValue(P,"modelMatrix",F.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Qt=$.uniformsGroups;for(let ha=0,Fp=Qt.length;ha<Fp;ha++){const qc=Qt[ha];Ye.update(qc,sn),Ye.bind(qc,sn)}}return sn}function Np(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Op(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,N,q){K.get(S.texture).__webglTexture=N,K.get(S.depthTexture).__webglTexture=q;const $=K.get(S);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const q=K.get(S);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,q=0){L=S,B=N,R=q;let $=!0,F=null,_e=!1,we=!1;if(S){const Ce=K.get(S);Ce.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(P.FRAMEBUFFER,null),$=!1):Ce.__webglFramebuffer===void 0?ie.setupRenderTarget(S):Ce.__hasExternalTextures&&ie.rebindTextures(S,K.get(S.texture).__webglTexture,K.get(S.depthTexture).__webglTexture);const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const ze=K.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?F=ze[N][q]:F=ze[N],_e=!0):S.samples>0&&ie.useMultisampledRTT(S)===!1?F=K.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[q]:F=ze,M.copy(S.viewport),D.copy(S.scissor),te=S.scissorTest}else M.copy(Ee).multiplyScalar(J).floor(),D.copy(Ae).multiplyScalar(J).floor(),te=Ne;if(V.bindFramebuffer(P.FRAMEBUFFER,F)&&$&&V.drawBuffers(S,F),V.viewport(M),V.scissor(D),V.setScissorTest(te),_e){const Ce=K.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,q)}else if(we){const Ce=K.get(S.texture),Be=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,q||0,Be)}z=-1},this.readRenderTargetPixels=function(S,N,q,$,F,_e,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=K.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){V.bindFramebuffer(P.FRAMEBUFFER,Re);try{const Ce=S.texture,Be=Ce.format,ze=Ce.type;if(!O.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-$&&q>=0&&q<=S.height-F&&P.readPixels(N,q,$,F,ke.convert(Be),ke.convert(ze),_e)}finally{const Ce=L!==null?K.get(L).__webglFramebuffer:null;V.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,N,q,$,F,_e,we){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=K.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){V.bindFramebuffer(P.FRAMEBUFFER,Re);try{const Ce=S.texture,Be=Ce.format,ze=Ce.type;if(!O.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-$&&q>=0&&q<=S.height-F){const Ie=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.bufferData(P.PIXEL_PACK_BUFFER,_e.byteLength,P.STREAM_READ),P.readPixels(N,q,$,F,ke.convert(Be),ke.convert(ze),0),P.flush();const Qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Vv(P,Qe,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_e)}finally{P.deleteBuffer(Ie),P.deleteSync(Qe)}return _e}}finally{const Ce=L!==null?K.get(L).__webglFramebuffer:null;V.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(S,N=null,q=0){S.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const $=Math.pow(2,-q),F=Math.floor(S.image.width*$),_e=Math.floor(S.image.height*$),we=N!==null?N.x:0,Re=N!==null?N.y:0;ie.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,we,Re,F,_e),V.unbindTexture()},this.copyTextureToTexture=function(S,N,q=null,$=null,F=0){S.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,q=null);let _e,we,Re,Ce,Be,ze;q!==null?(_e=q.max.x-q.min.x,we=q.max.y-q.min.y,Re=q.min.x,Ce=q.min.y):(_e=S.image.width,we=S.image.height,Re=0,Ce=0),$!==null?(Be=$.x,ze=$.y):(Be=0,ze=0);const Ie=ke.convert(N.format),Qe=ke.convert(N.type);ie.setTexture2D(N,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const ft=P.getParameter(P.UNPACK_ROW_LENGTH),dt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qt=P.getParameter(P.UNPACK_SKIP_PIXELS),et=P.getParameter(P.UNPACK_SKIP_ROWS),Pe=P.getParameter(P.UNPACK_SKIP_IMAGES),bt=S.isCompressedTexture?S.mipmaps[F]:S.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ce),S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Be,ze,_e,we,Ie,Qe,bt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Be,ze,bt.width,bt.height,Ie,bt.data):P.texSubImage2D(P.TEXTURE_2D,F,Be,ze,_e,we,Ie,Qe,bt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qt),P.pixelStorei(P.UNPACK_SKIP_ROWS,et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe),F===0&&N.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(S,N,q=null,$=null,F=0){S.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0);let _e,we,Re,Ce,Be,ze,Ie,Qe,ft;const dt=S.isCompressedTexture?S.mipmaps[F]:S.image;q!==null?(_e=q.max.x-q.min.x,we=q.max.y-q.min.y,Re=q.max.z-q.min.z,Ce=q.min.x,Be=q.min.y,ze=q.min.z):(_e=dt.width,we=dt.height,Re=dt.depth,Ce=0,Be=0,ze=0),$!==null?(Ie=$.x,Qe=$.y,ft=$.z):(Ie=0,Qe=0,ft=0);const qt=ke.convert(N.format),et=ke.convert(N.type);let Pe;if(N.isData3DTexture)ie.setTexture3D(N,0),Pe=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)ie.setTexture2DArray(N,0),Pe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const bt=P.getParameter(P.UNPACK_ROW_LENGTH),tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=P.getParameter(P.UNPACK_SKIP_PIXELS),Qi=P.getParameter(P.UNPACK_SKIP_ROWS),$t=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze),S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Pe,F,Ie,Qe,ft,_e,we,Re,qt,et,dt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,F,Ie,Qe,ft,_e,we,Re,qt,dt.data):P.texSubImage3D(Pe,F,Ie,Qe,ft,_e,we,Re,qt,et,dt),P.pixelStorei(P.UNPACK_ROW_LENGTH,bt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$t),F===0&&N.generateMipmaps&&P.generateMipmap(Pe),V.unbindTexture()},this.initRenderTarget=function(S){K.get(S).__webglFramebuffer===void 0&&ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ie.setTextureCube(S,0):S.isData3DTexture?ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ie.setTexture2DArray(S,0):ie.setTexture2D(S,0),V.unbindTexture()},this.resetState=function(){B=0,R=0,L=null,V.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ic?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===ea?"display-p3":"srgb"}}class QE extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class lp extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new W,Uo=new W,zf=new gt,Kr=new qh,ro=new ta,Ja=new W,Hf=new W;class eb extends Ut{constructor(e=new Yn,n=new lp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Io.fromBufferAttribute(n,r-1),Uo.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Io.distanceTo(Uo);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(r),ro.radius+=s,e.ray.intersectsSphere(ro)===!1)return;zf.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(zf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=m,h=g-1;v<h;v+=c){const p=u.getX(v),E=u.getX(v+1),x=so(this,e,Kr,l,p,E);x&&n.push(x)}if(this.isLineLoop){const v=u.getX(g-1),h=u.getX(m),p=so(this,e,Kr,l,v,h);p&&n.push(p)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=m,h=g-1;v<h;v+=c){const p=so(this,e,Kr,l,v,v+1);p&&n.push(p)}if(this.isLineLoop){const v=so(this,e,Kr,l,g-1,m);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function so(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Io.fromBufferAttribute(o,r),Uo.fromBufferAttribute(o,s),n.distanceSqToSegment(Io,Uo,Ja,Hf)>i)return;Ja.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Ja);if(!(l<e.near||l>e.far))return{distance:l,point:Hf.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Vf=new W,Gf=new W;class tb extends eb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Vf.fromBufferAttribute(n,r),Gf.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vf.distanceTo(Gf);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nb extends Yn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new W,s=new W;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],d=f.start,m=f.count;for(let g=d,v=d+m;g<v;g+=3)for(let h=0;h<3;h++){const p=a.getX(g+h),E=a.getX(g+(h+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,E),Wf(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),Wf(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new An(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Wf(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class ib extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class rb extends ib{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);const sb={name:"HomeView",setup(){const t=fi(null);let e,n,i,r;const s=()=>{const c=t.value,u=c.clientWidth,f=c.clientHeight;e=new QE,n=new tn(75,u/f,.1,1e3),i=new JE({antialias:!0,alpha:!0}),i.setSize(u,f),i.setPixelRatio(window.devicePixelRatio),c.appendChild(i.domElement);const d=new Br(4,4,4),m=new nb(d),g=new lp({color:33791});r=new tb(m,g),e.add(r),n.position.z=5;const v=new rb(16777215,.5);e.add(v),o()},o=()=>{requestAnimationFrame(o),i.render(e,n)},a=()=>{const c=window.scrollY,u=document.documentElement.scrollHeight-window.innerHeight,f=c/u*(2*Math.PI);r&&(r.rotation.x=f,r.rotation.y=f)};Sc(()=>{s(),window.addEventListener("scroll",a),window.addEventListener("resize",l)});const l=()=>{const c=t.value,u=c.clientWidth,f=c.clientHeight;n.aspect=u/f,n.updateProjectionMatrix(),i.setSize(u,f)};return Hd(()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",l)}),{threeDContainer:t}}},ra=t=>(yi("data-v-189bca39"),t=t(),Mi(),t),ob={class:"bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-[#1e1e1e] dark:to-[#111111] transition-colors duration-500 relative w-full"},ab={class:"min-h-screen flex flex-col items-center justify-start relative w-full"},lb={class:"mt-20 text-center space-y-6"},cb=ra(()=>ee("h1",{class:"text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 transition-colors duration-500"}," Welcome to Ale.Newport web page ",-1)),ub=ra(()=>ee("p",{class:"text-lg mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-500"}," Explore our interactive content with dynamic animations, games and image search ",-1)),fb=ra(()=>ee("span",{class:"text-xl font-bold lg:font-normal"},"Discover More",-1)),db=[fb],hb={ref:"threeDContainer",class:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96"},pb=ra(()=>ee("div",{class:"min-h-[200vh]"},null,-1));function mb(t,e,n,i,r,s){return We(),$e("div",ob,[ee("div",ab,[ee("div",lb,[cb,ub,ee("button",{class:"px-6 py-2 text-indigo-600 border-[3px] lg:border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 shadow-2xl lg:shadow-none",onClick:e[0]||(e[0]=o=>{this.$router.push("/info")})},db)]),ee("div",hb,null,512)]),pb])}const gb=Cn(sb,[["render",mb],["__scopeId","data-v-189bca39"]]);function cp(t,e){return function(){return t.apply(e,arguments)}}const{toString:_b}=Object.prototype,{getPrototypeOf:Nc}=Object,sa=(t=>e=>{const n=_b.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_n=t=>(t=t.toLowerCase(),e=>sa(e)===t),oa=t=>e=>typeof e===t,{isArray:zr}=Array,_s=oa("undefined");function vb(t){return t!==null&&!_s(t)&&t.constructor!==null&&!_s(t.constructor)&&Jt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const up=_n("ArrayBuffer");function xb(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&up(t.buffer),e}const Sb=oa("string"),Jt=oa("function"),fp=oa("number"),aa=t=>t!==null&&typeof t=="object",yb=t=>t===!0||t===!1,yo=t=>{if(sa(t)!=="object")return!1;const e=Nc(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Mb=_n("Date"),Eb=_n("File"),bb=_n("Blob"),Tb=_n("FileList"),wb=t=>aa(t)&&Jt(t.pipe),Ab=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Jt(t.append)&&((e=sa(t))==="formdata"||e==="object"&&Jt(t.toString)&&t.toString()==="[object FormData]"))},Rb=_n("URLSearchParams"),[Cb,Pb,Lb,Db]=["ReadableStream","Request","Response","Headers"].map(_n),Ib=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ts(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),zr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function dp(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hp=t=>!_s(t)&&t!==Vi;function Ql(){const{caseless:t}=hp(this)&&this||{},e={},n=(i,r)=>{const s=t&&dp(e,r)||r;yo(e[s])&&yo(i)?e[s]=Ql(e[s],i):yo(i)?e[s]=Ql({},i):zr(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Ts(arguments[i],n);return e}const Ub=(t,e,n,{allOwnKeys:i}={})=>(Ts(e,(r,s)=>{n&&Jt(r)?t[s]=cp(r,n):t[s]=r},{allOwnKeys:i}),t),Nb=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Ob=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Fb=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Nc(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Bb=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},kb=t=>{if(!t)return null;if(zr(t))return t;let e=t.length;if(!fp(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},zb=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Nc(Uint8Array)),Hb=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},Vb=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Gb=_n("HTMLFormElement"),Wb=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Xf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Xb=_n("RegExp"),pp=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Ts(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},qb=t=>{pp(t,(e,n)=>{if(Jt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Jt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},$b=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return zr(t)?i(t):i(String(t).split(e)),n},jb=()=>{},Yb=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Qa="abcdefghijklmnopqrstuvwxyz",qf="0123456789",mp={DIGIT:qf,ALPHA:Qa,ALPHA_DIGIT:Qa+Qa.toUpperCase()+qf},Kb=(t=16,e=mp.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function Zb(t){return!!(t&&Jt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Jb=t=>{const e=new Array(10),n=(i,r)=>{if(aa(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=zr(i)?[]:{};return Ts(i,(o,a)=>{const l=n(o,r+1);!_s(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},Qb=_n("AsyncFunction"),eT=t=>t&&(aa(t)||Jt(t))&&Jt(t.then)&&Jt(t.catch),gp=((t,e)=>t?setImmediate:e?((n,i)=>(Vi.addEventListener("message",({source:r,data:s})=>{r===Vi&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Vi.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Jt(Vi.postMessage)),tT=typeof queueMicrotask<"u"?queueMicrotask.bind(Vi):typeof process<"u"&&process.nextTick||gp,Z={isArray:zr,isArrayBuffer:up,isBuffer:vb,isFormData:Ab,isArrayBufferView:xb,isString:Sb,isNumber:fp,isBoolean:yb,isObject:aa,isPlainObject:yo,isReadableStream:Cb,isRequest:Pb,isResponse:Lb,isHeaders:Db,isUndefined:_s,isDate:Mb,isFile:Eb,isBlob:bb,isRegExp:Xb,isFunction:Jt,isStream:wb,isURLSearchParams:Rb,isTypedArray:zb,isFileList:Tb,forEach:Ts,merge:Ql,extend:Ub,trim:Ib,stripBOM:Nb,inherits:Ob,toFlatObject:Fb,kindOf:sa,kindOfTest:_n,endsWith:Bb,toArray:kb,forEachEntry:Hb,matchAll:Vb,isHTMLForm:Gb,hasOwnProperty:Xf,hasOwnProp:Xf,reduceDescriptors:pp,freezeMethods:qb,toObjectSet:$b,toCamelCase:Wb,noop:jb,toFiniteNumber:Yb,findKey:dp,global:Vi,isContextDefined:hp,ALPHABET:mp,generateString:Kb,isSpecCompliantForm:Zb,toJSONObject:Jb,isAsyncFn:Qb,isThenable:eT,setImmediate:gp,asap:tT};function Ve(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}Z.inherits(Ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.status}}});const _p=Ve.prototype,vp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{vp[t]={value:t}});Object.defineProperties(Ve,vp);Object.defineProperty(_p,"isAxiosError",{value:!0});Ve.from=(t,e,n,i,r,s)=>{const o=Object.create(_p);return Z.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ve.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const nT=null;function ec(t){return Z.isPlainObject(t)||Z.isArray(t)}function xp(t){return Z.endsWith(t,"[]")?t.slice(0,-2):t}function $f(t,e,n){return t?t.concat(e).map(function(r,s){return r=xp(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function iT(t){return Z.isArray(t)&&!t.some(ec)}const rT=Z.toFlatObject(Z,{},null,function(e){return/^is[A-Z]/.test(e)});function la(t,e,n){if(!Z.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,h){return!Z.isUndefined(h[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(e);if(!Z.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(Z.isDate(g))return g.toISOString();if(!l&&Z.isBlob(g))throw new Ve("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(g)||Z.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,h){let p=g;if(g&&!h&&typeof g=="object"){if(Z.endsWith(v,"{}"))v=i?v:v.slice(0,-2),g=JSON.stringify(g);else if(Z.isArray(g)&&iT(g)||(Z.isFileList(g)||Z.endsWith(v,"[]"))&&(p=Z.toArray(g)))return v=xp(v),p.forEach(function(x,A){!(Z.isUndefined(x)||x===null)&&e.append(o===!0?$f([v],A,s):o===null?v:v+"[]",c(x))}),!1}return ec(g)?!0:(e.append($f(h,v,s),c(g)),!1)}const f=[],d=Object.assign(rT,{defaultVisitor:u,convertValue:c,isVisitable:ec});function m(g,v){if(!Z.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),Z.forEach(g,function(p,E){(!(Z.isUndefined(p)||p===null)&&r.call(e,p,Z.isString(E)?E.trim():E,v,d))===!0&&m(p,v?v.concat(E):[E])}),f.pop()}}if(!Z.isObject(t))throw new TypeError("data must be an object");return m(t),e}function jf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Oc(t,e){this._pairs=[],t&&la(t,this,e)}const Sp=Oc.prototype;Sp.append=function(e,n){this._pairs.push([e,n])};Sp.toString=function(e){const n=e?function(i){return e.call(this,i,jf)}:jf;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function sT(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yp(t,e,n){if(!e)return t;const i=n&&n.encode||sT,r=n&&n.serialize;let s;if(r?s=r(e,n):s=Z.isURLSearchParams(e)?e.toString():new Oc(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Yf{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Z.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Mp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oT=typeof URLSearchParams<"u"?URLSearchParams:Oc,aT=typeof FormData<"u"?FormData:null,lT=typeof Blob<"u"?Blob:null,cT={isBrowser:!0,classes:{URLSearchParams:oT,FormData:aT,Blob:lT},protocols:["http","https","file","blob","url","data"]},Fc=typeof window<"u"&&typeof document<"u",tc=typeof navigator=="object"&&navigator||void 0,uT=Fc&&(!tc||["ReactNative","NativeScript","NS"].indexOf(tc.product)<0),fT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",dT=Fc&&window.location.href||"http://localhost",hT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fc,hasStandardBrowserEnv:uT,hasStandardBrowserWebWorkerEnv:fT,navigator:tc,origin:dT},Symbol.toStringTag,{value:"Module"})),Vt={...hT,...cT};function pT(t,e){return la(t,new Vt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Vt.isNode&&Z.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function mT(t){return Z.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function gT(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Ep(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&Z.isArray(r)?r.length:o,l?(Z.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!Z.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&Z.isArray(r[o])&&(r[o]=gT(r[o])),!a)}if(Z.isFormData(t)&&Z.isFunction(t.entries)){const n={};return Z.forEachEntry(t,(i,r)=>{e(mT(i),r,n,0)}),n}return null}function _T(t,e,n){if(Z.isString(t))try{return(e||JSON.parse)(t),Z.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ws={transitional:Mp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=Z.isObject(e);if(s&&Z.isHTMLForm(e)&&(e=new FormData(e)),Z.isFormData(e))return r?JSON.stringify(Ep(e)):e;if(Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e)||Z.isReadableStream(e))return e;if(Z.isArrayBufferView(e))return e.buffer;if(Z.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return pT(e,this.formSerializer).toString();if((a=Z.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return la(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),_T(e)):e}],transformResponse:[function(e){const n=this.transitional||ws.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(Z.isResponse(e)||Z.isReadableStream(e))return e;if(e&&Z.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ve.from(a,Ve.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vt.classes.FormData,Blob:Vt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],t=>{ws.headers[t]={}});const vT=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xT=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&vT[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Kf=Symbol("internals");function Zr(t){return t&&String(t).trim().toLowerCase()}function Mo(t){return t===!1||t==null?t:Z.isArray(t)?t.map(Mo):String(t)}function ST(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const yT=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function el(t,e,n,i,r){if(Z.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!Z.isString(e)){if(Z.isString(i))return e.indexOf(i)!==-1;if(Z.isRegExp(i))return i.test(e)}}function MT(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function ET(t,e){const n=Z.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class Gt{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=Zr(l);if(!u)throw new Error("header name must be a non-empty string");const f=Z.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Mo(a))}const o=(a,l)=>Z.forEach(a,(c,u)=>s(c,u,l));if(Z.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(Z.isString(e)&&(e=e.trim())&&!yT(e))o(xT(e),n);else if(Z.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=Zr(e),e){const i=Z.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return ST(r);if(Z.isFunction(n))return n.call(this,r,i);if(Z.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Zr(e),e){const i=Z.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||el(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Zr(o),o){const a=Z.findKey(i,o);a&&(!n||el(i,i[a],a,n))&&(delete i[a],r=!0)}}return Z.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||el(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return Z.forEach(this,(r,s)=>{const o=Z.findKey(i,s);if(o){n[o]=Mo(r),delete n[s];return}const a=e?MT(s):String(s).trim();a!==s&&delete n[s],n[a]=Mo(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Z.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&Z.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Kf]=this[Kf]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Zr(o);i[a]||(ET(r,o),i[a]=!0)}return Z.isArray(e)?e.forEach(s):s(e),this}}Gt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(Gt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});Z.freezeMethods(Gt);function tl(t,e){const n=this||ws,i=e||n,r=Gt.from(i.headers);let s=i.data;return Z.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function bp(t){return!!(t&&t.__CANCEL__)}function Hr(t,e,n){Ve.call(this,t??"canceled",Ve.ERR_CANCELED,e,n),this.name="CanceledError"}Z.inherits(Hr,Ve,{__CANCEL__:!0});function Tp(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ve("Request failed with status code "+n.status,[Ve.ERR_BAD_REQUEST,Ve.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function bT(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function TT(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const m=u&&c-u;return m?Math.round(d*1e3/m):void 0}}function wT(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const No=(t,e,n=3)=>{let i=0;const r=TT(50,250);return wT(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Zf=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Jf=t=>(...e)=>Z.asap(()=>t(...e)),AT=Vt.hasStandardBrowserEnv?function(){const e=Vt.navigator&&/(msie|trident)/i.test(Vt.navigator.userAgent),n=document.createElement("a");let i;function r(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const a=Z.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}(),RT=Vt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];Z.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),Z.isString(i)&&o.push("path="+i),Z.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function CT(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function PT(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function wp(t,e){return t&&!CT(e)?PT(t,e):e}const Qf=t=>t instanceof Gt?{...t}:t;function Ki(t,e){e=e||{};const n={};function i(c,u,f){return Z.isPlainObject(c)&&Z.isPlainObject(u)?Z.merge.call({caseless:f},c,u):Z.isPlainObject(u)?Z.merge({},u):Z.isArray(u)?u.slice():u}function r(c,u,f){if(Z.isUndefined(u)){if(!Z.isUndefined(c))return i(void 0,c,f)}else return i(c,u,f)}function s(c,u){if(!Z.isUndefined(u))return i(void 0,u)}function o(c,u){if(Z.isUndefined(u)){if(!Z.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(Qf(c),Qf(u),!0)};return Z.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);Z.isUndefined(d)&&f!==a||(n[u]=d)}),n}const Ap=t=>{const e=Ki({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=Gt.from(o),e.url=yp(wp(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(Z.isFormData(n)){if(Vt.hasStandardBrowserEnv||Vt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Vt.hasStandardBrowserEnv&&(i&&Z.isFunction(i)&&(i=i(e)),i||i!==!1&&AT(e.url))){const c=r&&s&&RT.read(s);c&&o.set(r,c)}return e},LT=typeof XMLHttpRequest<"u",DT=LT&&function(t){return new Promise(function(n,i){const r=Ap(t);let s=r.data;const o=Gt.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,m,g;function v(){m&&m(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function p(){if(!h)return;const x=Gt.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),B={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:x,config:t,request:h};Tp(function(L){n(L),v()},function(L){i(L),v()},B),h=null}"onloadend"in h?h.onloadend=p:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(p)},h.onabort=function(){h&&(i(new Ve("Request aborted",Ve.ECONNABORTED,t,h)),h=null)},h.onerror=function(){i(new Ve("Network Error",Ve.ERR_NETWORK,t,h)),h=null},h.ontimeout=function(){let A=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const B=r.transitional||Mp;r.timeoutErrorMessage&&(A=r.timeoutErrorMessage),i(new Ve(A,B.clarifyTimeoutError?Ve.ETIMEDOUT:Ve.ECONNABORTED,t,h)),h=null},s===void 0&&o.setContentType(null),"setRequestHeader"in h&&Z.forEach(o.toJSON(),function(A,B){h.setRequestHeader(B,A)}),Z.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),a&&a!=="json"&&(h.responseType=r.responseType),c&&([d,g]=No(c,!0),h.addEventListener("progress",d)),l&&h.upload&&([f,m]=No(l),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(u=x=>{h&&(i(!x||x.type?new Hr(null,t,h):x),h.abort(),h=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const E=bT(r.url);if(E&&Vt.protocols.indexOf(E)===-1){i(new Ve("Unsupported protocol "+E+":",Ve.ERR_BAD_REQUEST,t));return}h.send(s||null)})},IT=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ve?u:new Hr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Ve(`timeout ${e} of ms exceeded`,Ve.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>Z.asap(a),l}},UT=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},NT=async function*(t,e){for await(const n of OT(t))yield*UT(n,e)},OT=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},ed=(t,e,n,i)=>{const r=NT(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},ca=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Rp=ca&&typeof ReadableStream=="function",FT=ca&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Cp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},BT=Rp&&Cp(()=>{let t=!1;const e=new Request(Vt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),td=64*1024,nc=Rp&&Cp(()=>Z.isReadableStream(new Response("").body)),Oo={stream:nc&&(t=>t.body)};ca&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Oo[e]&&(Oo[e]=Z.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new Ve(`Response type '${e}' is not supported`,Ve.ERR_NOT_SUPPORT,i)})})})(new Response);const kT=async t=>{if(t==null)return 0;if(Z.isBlob(t))return t.size;if(Z.isSpecCompliantForm(t))return(await new Request(Vt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(t)||Z.isArrayBuffer(t))return t.byteLength;if(Z.isURLSearchParams(t)&&(t=t+""),Z.isString(t))return(await FT(t)).byteLength},zT=async(t,e)=>{const n=Z.toFiniteNumber(t.getContentLength());return n??kT(e)},HT=ca&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=Ap(t);c=c?(c+"").toLowerCase():"text";let m=IT([r,s&&s.toAbortSignal()],o),g;const v=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let h;try{if(l&&BT&&n!=="get"&&n!=="head"&&(h=await zT(u,i))!==0){let B=new Request(e,{method:"POST",body:i,duplex:"half"}),R;if(Z.isFormData(i)&&(R=B.headers.get("content-type"))&&u.setContentType(R),B.body){const[L,z]=Zf(h,No(Jf(l)));i=ed(B.body,td,L,z)}}Z.isString(f)||(f=f?"include":"omit");const p="credentials"in Request.prototype;g=new Request(e,{...d,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:p?f:void 0});let E=await fetch(g);const x=nc&&(c==="stream"||c==="response");if(nc&&(a||x&&v)){const B={};["status","statusText","headers"].forEach(T=>{B[T]=E[T]});const R=Z.toFiniteNumber(E.headers.get("content-length")),[L,z]=a&&Zf(R,No(Jf(a),!0))||[];E=new Response(ed(E.body,td,L,()=>{z&&z(),v&&v()}),B)}c=c||"text";let A=await Oo[Z.findKey(Oo,c)||"text"](E,t);return!x&&v&&v(),await new Promise((B,R)=>{Tp(B,R,{data:A,headers:Gt.from(E.headers),status:E.status,statusText:E.statusText,config:t,request:g})})}catch(p){throw v&&v(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new Ve("Network Error",Ve.ERR_NETWORK,t,g),{cause:p.cause||p}):Ve.from(p,p&&p.code,t,g)}}),ic={http:nT,xhr:DT,fetch:HT};Z.forEach(ic,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const nd=t=>`- ${t}`,VT=t=>Z.isFunction(t)||t===null||t===!1,Pp={getAdapter:t=>{t=Z.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!VT(n)&&(i=ic[(o=String(n)).toLowerCase()],i===void 0))throw new Ve(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(nd).join(`
`):" "+nd(s[0]):"as no adapter specified";throw new Ve("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:ic};function nl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Hr(null,t)}function id(t){return nl(t),t.headers=Gt.from(t.headers),t.data=tl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Pp.getAdapter(t.adapter||ws.adapter)(t).then(function(i){return nl(t),i.data=tl.call(t,t.transformResponse,i),i.headers=Gt.from(i.headers),i},function(i){return bp(i)||(nl(t),i&&i.response&&(i.response.data=tl.call(t,t.transformResponse,i.response),i.response.headers=Gt.from(i.response.headers))),Promise.reject(i)})}const Lp="1.7.7",Bc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Bc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const rd={};Bc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+Lp+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Ve(r(o," has been removed"+(n?" in "+n:"")),Ve.ERR_DEPRECATED);return n&&!rd[o]&&(rd[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function GT(t,e,n){if(typeof t!="object")throw new Ve("options must be an object",Ve.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Ve("option "+s+" must be "+l,Ve.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ve("Unknown option "+s,Ve.ERR_BAD_OPTION)}}const rc={assertOptions:GT,validators:Bc},si=rc.validators;class Xi{constructor(e){this.defaults=e,this.interceptors={request:new Yf,response:new Yf}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ki(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&rc.assertOptions(i,{silentJSONParsing:si.transitional(si.boolean),forcedJSONParsing:si.transitional(si.boolean),clarifyTimeoutError:si.transitional(si.boolean)},!1),r!=null&&(Z.isFunction(r)?n.paramsSerializer={serialize:r}:rc.assertOptions(r,{encode:si.function,serialize:si.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&Z.merge(s.common,s[n.method]);s&&Z.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=Gt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const g=[id.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let m=n;for(f=0;f<d;){const g=a[f++],v=a[f++];try{m=g(m)}catch(h){v.call(this,h);break}}try{u=id.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Ki(this.defaults,e);const n=wp(e.baseURL,e.url);return yp(n,e.params,e.paramsSerializer)}}Z.forEach(["delete","get","head","options"],function(e){Xi.prototype[e]=function(n,i){return this.request(Ki(i||{},{method:e,url:n,data:(i||{}).data}))}});Z.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Ki(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Xi.prototype[e]=n(),Xi.prototype[e+"Form"]=n(!0)});class kc{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Hr(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new kc(function(r){e=r}),cancel:e}}}function WT(t){return function(n){return t.apply(null,n)}}function XT(t){return Z.isObject(t)&&t.isAxiosError===!0}const sc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sc).forEach(([t,e])=>{sc[e]=t});function Dp(t){const e=new Xi(t),n=cp(Xi.prototype.request,e);return Z.extend(n,Xi.prototype,e,{allOwnKeys:!0}),Z.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Dp(Ki(t,r))},n}const vt=Dp(ws);vt.Axios=Xi;vt.CanceledError=Hr;vt.CancelToken=kc;vt.isCancel=bp;vt.VERSION=Lp;vt.toFormData=la;vt.AxiosError=Ve;vt.Cancel=vt.CanceledError;vt.all=function(e){return Promise.all(e)};vt.spread=WT;vt.isAxiosError=XT;vt.mergeConfig=Ki;vt.AxiosHeaders=Gt;vt.formToJSON=t=>Ep(Z.isHTMLForm(t)?new FormData(t):t);vt.getAdapter=Pp.getAdapter;vt.HttpStatusCode=sc;vt.default=vt;const qT={data(){return{searchQuery:"",filters:["All","Photos","Videos"],selectedFilter:"All",items:[],isModalOpen:!1,selectedItem:null}},computed:{filteredItems(){let t=this.items;return this.selectedFilter==="Photos"?t=t.filter(e=>e.src):this.selectedFilter==="Videos"&&(t=t.filter(e=>e.video_files)),this.searchQuery&&(t=t.filter(e=>e.alt&&e.alt.toLowerCase().includes(this.searchQuery.toLowerCase()))),t}},methods:{fetchData(){const t="qTQcQUmPyzuRhvplfbmZsYavTTyWUsA7JR3Rzx99XpreUSKMcPYtBQ3h";let e="";this.selectedFilter==="Videos"?e=`https://api.pexels.com/videos/search?query=${encodeURIComponent(this.searchQuery)}&per_page=20`:e=`https://api.pexels.com/v1/search?query=${encodeURIComponent(this.searchQuery)}&per_page=20`,vt.get(e,{headers:{Authorization:t}}).then(n=>{this.items=this.selectedFilter==="Videos"?n.data.videos:n.data.photos}).catch(n=>{console.error("Error fetching data:",n)})},applyFilter(t){this.selectedFilter=t,this.fetchData()},openModal(t){this.selectedItem=t,this.isModalOpen=!0},closeModal(){this.isModalOpen=!1,this.selectedItem=null}},mounted(){this.fetchData()}},$T=t=>(yi("data-v-41cecf68"),t=t(),Mi(),t),jT={class:"min-h-screen p-6 bg-white dark:bg-[#1e1e1e] transition-colors duration-500"},YT={class:"flex flex-col sm:flex-row justify-between items-center mb-4"},KT={class:"flex space-x-2 sm:space-x-4"},ZT=["onClick"],JT={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"},QT=["onClick"],ew=["src"],tw=["src"],nw={class:"p-4"},iw={class:"text-sm sm:text-base font-bold dark:text-white"},rw={key:0,class:"text-center mt-6 text-gray-500 dark:text-gray-400"},sw={class:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative"},ow=$T(()=>ee("i",{class:"fas fa-times"},null,-1)),aw=[ow],lw=["src"],cw={class:"text-xl font-bold mb-2 dark:text-white"},uw={class:"text-gray-700 dark:text-gray-300"};function fw(t,e,n,i,r,s){return We(),$e("div",jT,[ee("div",YT,[Ii(ee("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.searchQuery=o),onInput:e[1]||(e[1]=(...o)=>s.fetchData&&s.fetchData(...o)),type:"text",placeholder:"Search for images or videos...",class:"w-full sm:w-1/2 px-4 py-2 mb-4 sm:mb-0 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-500"},null,544),[[_r,r.searchQuery]]),ee("div",KT,[(We(!0),$e(Bt,null,ds(r.filters,o=>(We(),$e("button",{key:o,onClick:a=>s.applyFilter(o),class:Ft([r.selectedFilter===o?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-600 dark:text-white","px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none text-sm sm:text-base transition-colors duration-500"])},dn(o),11,ZT))),128))])]),ee("div",JT,[(We(!0),$e(Bt,null,ds(s.filteredItems,o=>(We(),$e("div",{key:o.id,onClick:a=>s.openModal(o),class:"border rounded-lg overflow-hidden shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-colors duration-500 cursor-pointer"},[o.src?(We(),$e("img",{key:0,src:o.src.medium,alt:"Image",class:"w-full h-48 sm:h-40 object-cover"},null,8,ew)):Tt("",!0),o.video_files?(We(),$e("video",{key:1,controls:"",src:o.video_files[0].link,class:"w-full h-48 sm:h-40 object-cover"},null,8,tw)):Tt("",!0),ee("div",nw,[ee("h2",iw,dn(o.alt||"No description available"),1)])],8,QT))),128))]),s.filteredItems.length===0?(We(),$e("div",rw," No results found. ")):Tt("",!0),r.isModalOpen?(We(),$e("div",{key:1,onClick:e[3]||(e[3]=Zo((...o)=>s.closeModal&&s.closeModal(...o),["self"])),class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"},[ee("div",sw,[ee("button",{onClick:e[2]||(e[2]=(...o)=>s.closeModal&&s.closeModal(...o)),class:"absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white"},aw),ee("img",{src:r.selectedItem.src.large,alt:"Enlarged image",class:"w-full h-auto mb-4 rounded-lg"},null,8,lw),ee("h2",cw,dn(r.selectedItem.alt||"No description available"),1),ee("p",uw,"Photographer: "+dn(r.selectedItem.photographer),1)])])):Tt("",!0)])}const dw=Cn(qT,[["render",fw],["__scopeId","data-v-41cecf68"]]),hw={data(){return{board:Array(9).fill(null),currentPlayer:"X",winner:null}},methods:{makeMove(t){!this.board[t]&&!this.winner&&(this.board[t]=this.currentPlayer,this.checkWinner()?this.winner=this.currentPlayer:this.currentPlayer=this.currentPlayer==="X"?"O":"X")},checkWinner(){return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].some(e=>e.every(n=>this.board[n]===this.currentPlayer))},resetGame(){console.log("Restarting game..."),this.board=Array(9).fill(null),this.currentPlayer="X",this.winner=null}},computed:{winnerMessage(){return`The winner is ${this.winner}`}}},pw=t=>(yi("data-v-8811ac6a"),t=t(),Mi(),t),mw={class:"flex flex-col items-center justify-center bg-gray-100 p-6"},gw=pw(()=>ee("h1",{class:"text-4xl font-bold mb-6 text-gray-800"},"Tic Tac Toe",-1)),_w={class:"grid grid-cols-3 gap-4 mb-6"},vw=["onClick"],xw={key:0,class:"text-2xl font-semibold text-green-600 mb-4"};function Sw(t,e,n,i,r,s){return We(),$e("div",mw,[gw,ee("div",_w,[(We(!0),$e(Bt,null,ds(r.board,(o,a)=>(We(),$e("div",{key:a,class:"w-24 h-24 bg-white border-4 border-gray-300 rounded-lg flex justify-center items-center text-4xl font-bold text-gray-700 cursor-pointer transition duration-300",onClick:l=>s.makeMove(a)},[o?(We(),$e("span",{key:0,class:Ft({"text-blue-500":o==="X","text-red-500":o==="O"})},dn(o),3)):Tt("",!0)],8,vw))),128))]),r.winner?(We(),$e("div",xw,dn(s.winnerMessage),1)):Tt("",!0),ee("button",{onClick:e[0]||(e[0]=(...o)=>s.resetGame&&s.resetGame(...o)),class:"bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"}," Restart Game ")])}const yw=Cn(hw,[["render",Sw],["__scopeId","data-v-8811ac6a"]]),Mw={data(){return{snake:[{x:10,y:10}],direction:{x:1,y:0},food:{x:15,y:15},gridSize:20,message:"",interval:null}},methods:{startGame(){this.snake=[{x:10,y:10}],this.direction={x:1,y:0},this.food={x:Math.floor(Math.random()*this.gridSize),y:Math.floor(Math.random()*this.gridSize)},this.message="",this.interval&&clearInterval(this.interval),this.interval=setInterval(this.gameLoop,100),window.addEventListener("keydown",this.changeDirection)},gameLoop(){const t={...this.snake[0]};if(t.x+=this.direction.x,t.y+=this.direction.y,t.x<0||t.x>=this.gridSize||t.y<0||t.y>=this.gridSize||this.snake.some(e=>e.x===t.x&&e.y===t.y)){clearInterval(this.interval),this.message="You lost!";return}this.snake.unshift(t),t.x===this.food.x&&t.y===this.food.y?this.food={x:Math.floor(Math.random()*this.gridSize),y:Math.floor(Math.random()*this.gridSize)}:this.snake.pop(),this.drawGame()},drawGame(){const t=this.$refs.gameCanvas,e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),e.fillStyle="green",this.snake.forEach(n=>e.fillRect(n.x*20,n.y*20,20,20)),e.fillStyle="red",e.fillRect(this.food.x*20,this.food.y*20,20,20)},changeDirection(t){(t.key==="ArrowUp"||t.key==="w")&&this.direction.y===0&&(this.direction={x:0,y:-1}),(t.key==="ArrowDown"||t.key==="s")&&this.direction.y===0&&(this.direction={x:0,y:1}),(t.key==="ArrowLeft"||t.key==="a")&&this.direction.x===0&&(this.direction={x:-1,y:0}),(t.key==="ArrowRight"||t.key==="d")&&this.direction.x===0&&(this.direction={x:1,y:0})}},beforeUnmount(){window.removeEventListener("keydown",this.changeDirection),this.interval&&clearInterval(this.interval)}},Ew=t=>(yi("data-v-d6089c99"),t=t(),Mi(),t),bw={class:"flex flex-col items-center justify-center bg-gray-100 p-6"},Tw=Ew(()=>ee("h1",{class:"text-4xl font-bold mb-6 text-gray-800"},"Snake Game",-1)),ww={ref:"gameCanvas",width:"400",height:"400",class:"bg-white border-4 border-gray-300 rounded-lg mb-6"},Aw={key:0,class:"text-2xl font-semibold text-red-600 mb-4"};function Rw(t,e,n,i,r,s){return We(),$e("div",bw,[Tw,ee("canvas",ww,null,512),ee("button",{onClick:e[0]||(e[0]=(...o)=>s.startGame&&s.startGame(...o)),class:"bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-4"}," Start Game "),r.message?(We(),$e("div",Aw,dn(r.message),1)):Tt("",!0)])}const Cw=Cn(Mw,[["render",Rw],["__scopeId","data-v-d6089c99"]]),Pw={data(){return{board:[],rows:10,cols:10,mines:10,gameOver:!1,message:""}},mounted(){this.resetGame()},methods:{resetGame(){this.board=this.generateBoard(),this.placeMines(),this.calculateNeighborMines(),this.gameOver=!1,this.message=""},generateBoard(){return Array.from({length:this.rows},()=>Array.from({length:this.cols},()=>({revealed:!1,mine:!1,neighborMines:0,flagged:!1})))},placeMines(){let t=0;for(;t<this.mines;){const e=Math.floor(Math.random()*this.rows),n=Math.floor(Math.random()*this.cols);this.board[e][n].mine||(this.board[e][n].mine=!0,t++)}},calculateNeighborMines(){const t=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(let e=0;e<this.rows;e++)for(let n=0;n<this.cols;n++)if(!this.board[e][n].mine){let i=0;t.forEach(([r,s])=>{const o=e+r,a=n+s;this.isInBounds(o,a)&&this.board[o][a].mine&&i++}),this.board[e][n].neighborMines=i}},isInBounds(t,e){return t>=0&&t<this.rows&&e>=0&&e<this.cols},revealCell(t,e){const n=this.board[t][e];n.revealed||this.gameOver||n.flagged||(n.revealed=!0,n.mine?(this.message="You lost! 💣",this.gameOver=!0):n.neighborMines===0&&this.revealAdjacentCells(t,e),this.checkWin())},revealAdjacentCells(t,e){[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(([i,r])=>{const s=t+i,o=e+r;this.isInBounds(s,o)&&!this.board[s][o].revealed&&!this.board[s][o].flagged&&this.revealCell(s,o)})},toggleFlag(t,e){const n=this.board[t][e];n.revealed||this.gameOver||(n.flagged=!n.flagged)},checkWin(){this.board.every(e=>e.every(n=>n.mine&&!n.revealed||n.revealed))&&!this.gameOver&&(this.message="You won! 🎉",this.gameOver=!0)}}},Lw=t=>(yi("data-v-cf18d2b8"),t=t(),Mi(),t),Dw={class:"minesweeper-container flex flex-col items-center justify-center bg-gray-100 p-6"},Iw=Lw(()=>ee("h1",{class:"text-4xl font-bold mb-6 text-gray-800"},"Minesweeper",-1)),Uw=["onClick","onContextmenu"],Nw={key:0},Ow={key:0,class:"text-3xl font-semibold text-red-600 mt-6"};function Fw(t,e,n,i,r,s){return We(),$e("div",Dw,[Iw,(We(!0),$e(Bt,null,ds(r.board,(o,a)=>(We(),$e("div",{key:a,class:"row flex"},[(We(!0),$e(Bt,null,ds(o,(l,c)=>(We(),$e("div",{key:c,class:Ft(["cell w-12 h-12 border border-gray-500 rounded-md flex justify-center items-center text-lg cursor-pointer",{"bg-gray-300 cursor-default":l.revealed,"bg-yellow-200":l.flagged,"bg-white":!l.revealed&&!l.flagged}]),onClick:u=>s.revealCell(a,c),onContextmenu:Zo(u=>s.toggleFlag(a,c),["prevent"])},[yn(dn(l.revealed?l.mine?"💣":l.neighborMines>0?l.neighborMines:"":"")+" ",1),l.flagged&&!l.revealed?(We(),$e("span",Nw,"🚩")):Tt("",!0)],42,Uw))),128))]))),128)),r.message?(We(),$e("div",Ow,dn(r.message),1)):Tt("",!0),ee("button",{onClick:e[0]||(e[0]=(...o)=>s.resetGame&&s.resetGame(...o)),class:"bg-blue-500 text-white my-6 px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"}," Restart Game ")])}const Bw=Cn(Pw,[["render",Fw],["__scopeId","data-v-cf18d2b8"]]),kw="/assets/tictactoe_preview-Bz1ju3_K.png",zw="/assets/snake_preview-cdpbhQ2j.png",Hw="/assets/minesweeper_preview-DsoynsGs.png",Vw={data(){return{dialog:!1,currentGame:null}},computed:{currentGameComponent(){return this.currentGame==="tictactoe"?yw:this.currentGame==="snake"?Cw:this.currentGame==="minesweeper"?Bw:null}},methods:{openGame(t){this.currentGame=t,this.dialog=!0},closeDialog(){this.dialog=!1,this.currentGame=null}}},Ji=t=>(yi("data-v-8a63d276"),t=t(),Mi(),t),Gw={class:"flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4"},Ww=Ji(()=>ee("h1",{class:"text-5xl font-bold mb-8 text-gray-800 dark:text-white"},"Games",-1)),Xw={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"},qw=Ji(()=>ee("img",{src:kw,alt:"Previsualización de Tres en Raya",class:"rounded-md mb-4 w-full object-contain"},null,-1)),$w=Ji(()=>ee("h3",{class:"text-xl font-semibold text-gray-800 dark:text-white"},"Tic Tac Toe",-1)),jw=[qw,$w],Yw=Ji(()=>ee("img",{src:zw,alt:"Previsualización de Snake",class:"rounded-md mb-4 w-full object-contain"},null,-1)),Kw=Ji(()=>ee("h3",{class:"text-xl font-semibold text-gray-800 dark:text-white"},"Snake Game",-1)),Zw=[Yw,Kw],Jw=Ji(()=>ee("img",{src:Hw,alt:"Previsualización de Buscaminas",class:"rounded-md mb-4 w-full object-contain"},null,-1)),Qw=Ji(()=>ee("h3",{class:"text-xl font-semibold text-gray-800 dark:text-white"},"Minesweeper",-1)),eA=[Jw,Qw];function tA(t,e,n,i,r,s){return We(),$e("div",Gw,[Ww,ee("div",Xw,[ee("div",{class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-md p-6 hover:shadow-2xl dark:hover:shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105",onClick:e[0]||(e[0]=o=>s.openGame("tictactoe"))},jw),ee("div",{class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-md p-6 hover:shadow-2xl dark:hover:shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105",onClick:e[1]||(e[1]=o=>s.openGame("snake"))},Zw),ee("div",{class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-md p-6 hover:shadow-2xl dark:hover:shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105",onClick:e[2]||(e[2]=o=>s.openGame("minesweeper"))},eA)]),r.dialog?(We(),$e("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex justify-center items-center",onClick:e[5]||(e[5]=(...o)=>s.closeDialog&&s.closeDialog(...o))},[ee("div",{class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl relative",onClick:e[4]||(e[4]=Zo(()=>{},["stop"]))},[ee("button",{onClick:e[3]||(e[3]=(...o)=>s.closeDialog&&s.closeDialog(...o)),class:"absolute top-2 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"}," × "),(We(),ch(Bm(s.currentGameComponent)))])])):Tt("",!0)])}const nA=Cn(Vw,[["render",tA],["__scopeId","data-v-8a63d276"]]),Lt=t=>(yi("data-v-7b314b04"),t=t(),Mi(),t),iA={class:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"},rA=Lt(()=>ee("div",{class:"flex items-center justify-center py-16 px-8"},[ee("h1",{class:"text-5xl font-bold text-blue-600 dark:text-blue-400"},"Contact & Information")],-1)),sA=Lt(()=>ee("div",{class:"max-w-4xl mx-auto mt-10 px-6"},[ee("p",{class:"text-lg text-gray-700 dark:text-gray-300 leading-relaxed"}," Welcome to my first web project! I'm Alejandro Newport and I'm excited to share with you this interactive platform that combines art, technology, and entertainment. Here you can explore amazing images through the Pexels API, enjoy 3D animations, and have fun with mini games designed for all ages. ")],-1)),oA={class:"max-w-4xl mx-auto mt-10 px-4"},aA=Lt(()=>ee("h2",{class:"text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4"},"Frequently Asked Questions",-1)),lA={class:"space-y-4"},cA={class:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"},uA=Lt(()=>ee("h3",{class:"font-bold text-gray-900 dark:text-gray-100"},"Who is Alejandro Newport?",-1)),fA={key:0,class:"mt-2"},dA=Lt(()=>ee("p",{class:"text-gray-600 dark:text-gray-300"}," Alejandro Newport, the developer of this website, is an MSci Computer Science student at King’s College London. He specializes in software development, artificial intelligence and robotics. He has participated in hackathons, developed autonomous robots and drones, and worked as a systems technician and software developer at Grupo Newport. ",-1)),hA=[dA],pA={class:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"},mA=Lt(()=>ee("h3",{class:"font-bold text-gray-900 dark:text-gray-100"},"What is the purpose of this website?",-1)),gA={key:0,class:"mt-2"},_A=Lt(()=>ee("p",{class:"text-gray-600 dark:text-gray-300"}," This website was created as an interactive space to showcase my programming and animation skills, and for users to experiment with 3D images, games, and visuals. My goal is to offer an entertaining and visually appealing experience. ",-1)),vA=[_A],xA={class:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"},SA=Lt(()=>ee("h3",{class:"font-bold text-gray-900 dark:text-gray-100"},"What technologies are used on the web?",-1)),yA={key:0,class:"mt-2"},MA=Lt(()=>ee("p",{class:"text-gray-600 dark:text-gray-300"}," This website is built using modern technologies like HTML, CSS, JavaScript, and Vue.js. For images, I use the Pexels API, while 3D animations are created using specialized tools. Mini games are developed using lightweight JavaScript frameworks. ",-1)),EA=[MA],bA={class:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"},TA=Lt(()=>ee("h3",{class:"font-bold text-gray-900 dark:text-gray-100"},"How can I interact with the website features?",-1)),wA={key:0,class:"mt-2"},AA=Lt(()=>ee("p",{class:"text-gray-600 dark:text-gray-300"}," It's very simple. You can search and explore images via the Pexels API, play 3D animations in the viewer, and try out the available mini games by simply clicking through the interactive menu. Each section is designed to be user-friendly and intuitive. ",-1)),RA=[AA],CA={class:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"},PA=Lt(()=>ee("h3",{class:"font-bold text-gray-900 dark:text-gray-100"},"What plans do you have for this website in the future?",-1)),LA={key:0,class:"mt-2"},DA=Lt(()=>ee("p",{class:"text-gray-600 dark:text-gray-300"}," My goal is to continue improving the platform with new features, more games, and better 3D animations. I also plan to integrate more APIs that allow for even more interactive experiences, offering a creative space that is constantly evolving. ",-1)),IA=[DA],UA={class:"flex flex-col lg:flex-row lg:space-x-8 justify-center pt-20 pb-40 px-4 sm:px-14 md:px-20"},NA=fh('<div class="flex flex-col text-center lg:text-left space-y-8 mb-8 lg:mb-0 lg:mr-12 xl:mr-32 mt-0 lg:mt-20" data-v-7b314b04><div class="flex items-center" data-v-7b314b04><div class="flex-shrink-0 mr-4" data-v-7b314b04><a href="mailto:rizar.croquetas0r@icloud.com" data-v-7b314b04><i class="fas fa-envelope text-blue-600 dark:text-blue-400 text-2xl" data-v-7b314b04></i></a></div><div class="text-lg font-bold text-gray-800 dark:text-gray-100" data-v-7b314b04><a href="mailto:rizar.croquetas0r@icloud.com" class="hover:underline" data-v-7b314b04>rizar.croquetas0r@icloud.com</a></div></div><div class="flex items-center" data-v-7b314b04><div class="flex-shrink-0 mr-4" data-v-7b314b04><a href="https://www.linkedin.com/in/alejandro-newport-diaz-67087a225" target="_blank" aria-label="LinkedIn" data-v-7b314b04><i class="fab fa-linkedin-in text-blue-600 dark:text-blue-400 text-2xl" data-v-7b314b04></i></a></div><div class="flex-shrink-0 mr-4" data-v-7b314b04><a href="https://github.com/Ale-Newport" target="_blank" aria-label="GitHub" data-v-7b314b04><i class="fab fa-github text-blue-600 dark:text-blue-400 text-2xl" data-v-7b314b04></i></a></div><div class="flex-shrink-0 mr-4" data-v-7b314b04><a href="https://www.instagram.com" target="_blank" aria-label="Instagram" data-v-7b314b04><i class="fab fa-instagram text-blue-600 dark:text-blue-400 text-2xl" data-v-7b314b04></i></a></div></div></div>',1),OA={class:"bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg w-full max-w-4xl"},FA=Lt(()=>ee("h2",{class:"text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center"},"How can we help you?",-1)),BA={class:"grid grid-cols-1 md:gap-4 md:grid-cols-2"},kA={class:"mb-4"},zA={class:"mb-4"},HA={class:"grid grid-cols-1 md:gap-4 md:grid-cols-2"},VA={class:"mb-4"},GA={class:"mb-4"},WA={class:"mb-4"},XA={class:"mb-4"},qA={class:"inline-flex items-center"},$A=Lt(()=>ee("span",{class:"ml-2 text-gray-400 dark:text-gray-300"},"I agree to the use of the personal data provided in this form.",-1)),jA=Lt(()=>ee("div",{class:"text-center"},[ee("button",{type:"submit",class:"px-8 py-2 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition duration-300"}," SEND ")],-1)),YA={key:0,class:"text-center mt-4"},KA={__name:"InfoView",setup(t){const e=fi({1:!1,2:!1,3:!1,4:!1,5:!1}),n=a=>{e.value[a]=!e.value[a]},i=fi({nombre:"",apellidos:"",telefono:"",email:"",consulta:"",privacyConsent:!1}),r=fi(""),s=fi(!1),o=async()=>{try{if((await fetch("https://formspree.io/f/xrbzdwln",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({nombre:i.value.nombre,apellidos:i.value.apellidos,telefono:i.value.telefono,email:i.value.email,consulta:i.value.consulta})})).ok)r.value="Inquiry sent successfully!",s.value=!1,i.value={nombre:"",apellidos:"",telefono:"",email:"",consulta:"",privacyConsent:!1};else throw new Error("Error sending query.")}catch{r.value="There was an error sending the query. Please try again.",s.value=!0}};return(a,l)=>(We(),$e("div",iA,[rA,sA,ee("div",oA,[aA,ee("div",lA,[ee("div",cA,[ee("div",{class:"flex justify-between items-center cursor-pointer",onClick:l[0]||(l[0]=c=>n(1))},[uA,ee("i",{class:Ft([e.value[1]?"fas fa-chevron-up":"fas fa-chevron-down","text-gray-600 dark:text-gray-300"])},null,2)]),e.value[1]?(We(),$e("div",fA,hA)):Tt("",!0)]),ee("div",pA,[ee("div",{class:"flex justify-between items-center cursor-pointer",onClick:l[1]||(l[1]=c=>n(2))},[mA,ee("i",{class:Ft([e.value[2]?"fas fa-chevron-up":"fas fa-chevron-down","text-gray-600 dark:text-gray-300"])},null,2)]),e.value[2]?(We(),$e("div",gA,vA)):Tt("",!0)]),ee("div",xA,[ee("div",{class:"flex justify-between items-center cursor-pointer",onClick:l[2]||(l[2]=c=>n(3))},[SA,ee("i",{class:Ft([e.value[3]?"fas fa-chevron-up":"fas fa-chevron-down","text-gray-600 dark:text-gray-300"])},null,2)]),e.value[3]?(We(),$e("div",yA,EA)):Tt("",!0)]),ee("div",bA,[ee("div",{class:"flex justify-between items-center cursor-pointer",onClick:l[3]||(l[3]=c=>n(4))},[TA,ee("i",{class:Ft([e.value[4]?"fas fa-chevron-up":"fas fa-chevron-down","text-gray-600 dark:text-gray-300"])},null,2)]),e.value[4]?(We(),$e("div",wA,RA)):Tt("",!0)]),ee("div",CA,[ee("div",{class:"flex justify-between items-center cursor-pointer",onClick:l[4]||(l[4]=c=>n(5))},[PA,ee("i",{class:Ft([e.value[5]?"fas fa-chevron-up":"fas fa-chevron-down","text-gray-600 dark:text-gray-300"])},null,2)]),e.value[5]?(We(),$e("div",LA,IA)):Tt("",!0)])])]),ee("div",UA,[NA,ee("div",OA,[FA,ee("form",{onSubmit:Zo(o,["prevent"])},[ee("div",BA,[ee("div",kA,[Ii(ee("input",{"onUpdate:modelValue":l[5]||(l[5]=c=>i.value.nombre=c),type:"text",placeholder:"Frist Name *","aria-label":"nombre",class:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500",required:""},null,512),[[_r,i.value.nombre]])]),ee("div",zA,[Ii(ee("input",{"onUpdate:modelValue":l[6]||(l[6]=c=>i.value.apellidos=c),type:"text",placeholder:"Surname","aria-label":"apellidos",class:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700"},null,512),[[_r,i.value.apellidos]])])]),ee("div",HA,[ee("div",VA,[Ii(ee("input",{"onUpdate:modelValue":l[7]||(l[7]=c=>i.value.telefono=c),type:"text",placeholder:"Phone","aria-label":"telefono",class:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700"},null,512),[[_r,i.value.telefono]])]),ee("div",GA,[Ii(ee("input",{"onUpdate:modelValue":l[8]||(l[8]=c=>i.value.email=c),type:"email",placeholder:"E-mail *","aria-label":"email",class:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700",required:""},null,512),[[_r,i.value.email]])])]),ee("div",WA,[Ii(ee("textarea",{"onUpdate:modelValue":l[9]||(l[9]=c=>i.value.consulta=c),placeholder:"Query *","aria-label":"consulta",class:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-xl h-32 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500",required:""},null,512),[[_r,i.value.consulta]])]),ee("div",XA,[ee("label",qA,[Ii(ee("input",{"onUpdate:modelValue":l[10]||(l[10]=c=>i.value.privacyConsent=c),type:"checkbox",class:"form-checkbox h-5 w-5 text-blue-600 dark:text-blue-500 flex-shrink-0",required:""},null,512),[[Zg,i.value.privacyConsent]]),$A])]),jA],32),r.value?(We(),$e("div",YA,[ee("p",{class:Ft(s.value?"text-red-600":"text-green-600")},dn(r.value),3)])):Tt("",!0)])])]))}},ZA=Cn(KA,[["__scopeId","data-v-7b314b04"]]),JA=G0({history:_0("/"),routes:[{path:"/",name:"home",component:gb},{path:"/search",name:"search",component:dw},{path:"/games",name:"games",component:nA},{path:"/info",name:"info",component:ZA}]}),Ip=i_(z_);Ip.use(JA);Ip.mount("#app");
