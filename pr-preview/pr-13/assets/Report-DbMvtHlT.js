import{b as Ol,r as ee,j as K,P as xl}from"./index-bnaH3D-O.js";const kl=()=>{};var Oi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Ml=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],h=n[e++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,d=f?n[i+2]:0,I=o>>2,A=(o&3)<<4|h>>4;let R=(h&15)<<2|d>>6,b=d&63;f||(b=64,l||(R=64)),r.push(e[I],e[A],e[R],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(xo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ml(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||d==null||A==null)throw new Ll;const R=o<<2|h>>4;if(r.push(R),d!==64){const b=h<<4&240|d>>2;if(r.push(b),A!==64){const D=d<<6&192|A;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ll extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fl=function(n){const t=xo(n);return ko.encodeByteArray(t,!0)},Un=function(n){return Fl(n).replace(/\./g,"")},Ul=function(n){try{return ko.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=()=>Bl().__FIREBASE_DEFAULTS__,$l=()=>{if(typeof process>"u"||typeof Oi>"u")return;const n=Oi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ql=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ul(n[1]);return t&&JSON.parse(t)},ss=()=>{try{return kl()||jl()||$l()||ql()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zl=n=>ss()?.emulatorHosts?.[n],Hl=n=>{const t=zl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Mo=()=>ss()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Un(JSON.stringify(e)),Un(JSON.stringify(l)),""].join(".")}const Ge={};function Ql(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ge))Ge[t]?n.emulator.push(t):n.prod.push(t);return n}function Xl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let xi=!1;function Jl(n,t){if(typeof window>"u"||typeof document>"u"||!is(window.location.host)||Ge[n]===t||Ge[n]||xi)return;Ge[n]=t;function e(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=Ql().prod.length>0;function l(){const R=document.getElementById(r);R&&R.remove()}function h(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function f(R,b){R.setAttribute("width","24"),R.setAttribute("id",b),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function d(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{xi=!0,l()},R}function I(R,b){R.setAttribute("id",b),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=Xl(r),b=e("text"),D=document.getElementById(b)||document.createElement("span"),x=e("learnmore"),O=document.getElementById(x)||document.createElement("a"),q=e("preprendIcon"),z=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const G=R.element;h(G),I(O,x);const Tt=d();f(z,q),G.append(z,D,O,Tt),document.body.appendChild(G)}o?(D.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zl(){const n=ss()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tc(){return!Zl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ec(){try{return typeof indexedDB=="object"}catch{return!1}}function nc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="FirebaseError";class Re extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=rc,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?sc(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new Re(i,h,r)}}function sc(n,t){return n.replace(ic,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ic=/\{\$([^}]+)}/g;function Bn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(ki(o)&&ki(l)){if(!Bn(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ki(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Gl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lc(t))try{this.getOrInitializeService({instanceIdentifier:ne})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ne){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ne){return this.instances.has(t)}getOptions(t=ne){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ac(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ne){return this.component?this.component.multipleInstances?t:ne:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ac(n){return n===ne?void 0:n}function lc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new oc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const uc={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},hc=U.INFO,fc={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},dc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=fc[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fo{constructor(t){this.name=t,this._logLevel=hc,this._logHandler=dc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const pc=(n,t)=>t.some(e=>n instanceof e);let Mi,Li;function mc(){return Mi||(Mi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gc(){return Li||(Li=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uo=new WeakMap,jr=new WeakMap,Bo=new WeakMap,Or=new WeakMap,os=new WeakMap;function _c(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e($t(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Uo.set(e,n)}).catch(()=>{}),os.set(t,n),t}function yc(n){if(jr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});jr.set(n,t)}let $r={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return jr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Bo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ec(n){$r=n($r)}function Tc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(xr(this),t,...e);return Bo.set(r,t.sort?t.sort():[t]),$t(r)}:gc().includes(n)?function(...t){return n.apply(xr(this),t),$t(Uo.get(this))}:function(...t){return $t(n.apply(xr(this),t))}}function vc(n){return typeof n=="function"?Tc(n):(n instanceof IDBTransaction&&yc(n),pc(n,mc())?new Proxy(n,$r):n)}function $t(n){if(n instanceof IDBRequest)return _c(n);if(Or.has(n))return Or.get(n);const t=vc(n);return t!==n&&(Or.set(n,t),os.set(t,n)),t}const xr=n=>os.get(n);function Ic(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),h=$t(l);return r&&l.addEventListener("upgradeneeded",f=>{r($t(l.result),f.oldVersion,f.newVersion,$t(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),h}const Ac=["get","getKey","getAll","getAllKeys","count"],wc=["put","add","delete","clear"],kr=new Map;function Fi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(kr.get(t))return kr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=wc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ac.includes(e)))return;const o=async function(l,...h){const f=this.transaction(l,i?"readwrite":"readonly");let d=f.store;return r&&(d=d.index(h.shift())),(await Promise.all([d[e](...h),i&&f.done]))[0]};return kr.set(t,o),o}Ec(n=>({...n,get:(t,e,r)=>Fi(t,e)||n.get(t,e,r),has:(t,e)=>!!Fi(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Sc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Sc(n){return n.getComponent()?.type==="VERSION"}const qr="@firebase/app",Ui="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Fo("@firebase/app"),Cc="@firebase/app-compat",Pc="@firebase/analytics-compat",bc="@firebase/analytics",Vc="@firebase/app-check-compat",Dc="@firebase/app-check",Nc="@firebase/auth",Oc="@firebase/auth-compat",xc="@firebase/database",kc="@firebase/data-connect",Mc="@firebase/database-compat",Lc="@firebase/functions",Fc="@firebase/functions-compat",Uc="@firebase/installations",Bc="@firebase/installations-compat",jc="@firebase/messaging",$c="@firebase/messaging-compat",qc="@firebase/performance",zc="@firebase/performance-compat",Hc="@firebase/remote-config",Gc="@firebase/remote-config-compat",Kc="@firebase/storage",Wc="@firebase/storage-compat",Qc="@firebase/firestore",Xc="@firebase/ai",Jc="@firebase/firestore-compat",Yc="firebase",Zc="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]",tu={[qr]:"fire-core",[Cc]:"fire-core-compat",[bc]:"fire-analytics",[Pc]:"fire-analytics-compat",[Dc]:"fire-app-check",[Vc]:"fire-app-check-compat",[Nc]:"fire-auth",[Oc]:"fire-auth-compat",[xc]:"fire-rtdb",[kc]:"fire-data-connect",[Mc]:"fire-rtdb-compat",[Lc]:"fire-fn",[Fc]:"fire-fn-compat",[Uc]:"fire-iid",[Bc]:"fire-iid-compat",[jc]:"fire-fcm",[$c]:"fire-fcm-compat",[qc]:"fire-perf",[zc]:"fire-perf-compat",[Hc]:"fire-rc",[Gc]:"fire-rc-compat",[Kc]:"fire-gcs",[Wc]:"fire-gcs-compat",[Qc]:"fire-fst",[Jc]:"fire-fst-compat",[Xc]:"fire-vertex","fire-js":"fire-js",[Yc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Map,eu=new Map,Hr=new Map;function Bi(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function $n(n){const t=n.name;if(Hr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;Hr.set(t,n);for(const e of jn.values())Bi(e,n);for(const e of eu.values())Bi(e,n);return!0}function nu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ru(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Lo("app","Firebase",su);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=Zc;function jo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:zr,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(e||(e=Mo()),!e)throw qt.create("no-options");const o=jn.get(i);if(o){if(Bn(e,o.options)&&Bn(r,o.config))return o;throw qt.create("duplicate-app",{appName:i})}const l=new cc(i);for(const f of Hr.values())l.addComponent(f);const h=new iu(e,r,l);return jn.set(i,h),h}function au(n=zr){const t=jn.get(n);if(!t&&n===zr&&Mo())return jo();if(!t)throw qt.create("no-app",{appName:n});return t}function _e(n,t,e){let r=tu[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(l.join(" "));return}$n(new Ze(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="firebase-heartbeat-database",cu=1,tn="firebase-heartbeat-store";let Mr=null;function $o(){return Mr||(Mr=Ic(lu,cu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),Mr}async function uu(n){try{const e=(await $o()).transaction(tn),r=await e.objectStore(tn).get(qo(n));return await e.done,r}catch(t){if(t instanceof Re)kt.warn(t.message);else{const e=qt.create("idb-get",{originalErrorMessage:t?.message});kt.warn(e.message)}}}async function ji(n,t){try{const r=(await $o()).transaction(tn,"readwrite");await r.objectStore(tn).put(t,qo(n)),await r.done}catch(e){if(e instanceof Re)kt.warn(e.message);else{const r=qt.create("idb-set",{originalErrorMessage:e?.message});kt.warn(r.message)}}}function qo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=1024,fu=30;class du{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new mu(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$i();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>fu){const i=gu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){kt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$i(),{heartbeatsToSend:e,unsentEntries:r}=pu(this._heartbeatsCache.heartbeats),i=Un(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function $i(){return new Date().toISOString().substring(0,10)}function pu(n,t=hu){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),qi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),qi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class mu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ec()?nc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await uu(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ji(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ji(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function qi(n){return Un(JSON.stringify({version:2,heartbeats:n})).length}function gu(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n){$n(new Ze("platform-logger",t=>new Rc(t),"PRIVATE")),$n(new Ze("heartbeat",t=>new du(t),"PRIVATE")),_e(qr,Ui,n),_e(qr,Ui,"esm2020"),_e("fire-js","")}_u("");var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function g(){}g.prototype=p.prototype,y.F=p.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,v){for(var m=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)m[_t-2]=arguments[_t];return p.prototype[_].apply(E,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,g){g||(g=0);const E=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)E[_]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=y.g[0],g=y.g[1],_=y.g[2];let v=y.g[3],m;m=p+(v^g&(_^v))+E[0]+3614090360&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[1]+3905402710&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[2]+606105819&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[3]+3250441966&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(v^g&(_^v))+E[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[5]+1200080426&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[6]+2821735955&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[7]+4249261313&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(v^g&(_^v))+E[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[9]+2336552879&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[10]+4294925233&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[11]+2304563134&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(v^g&(_^v))+E[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[13]+4254626195&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[14]+2792965006&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[15]+1236535329&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(_^v&(g^_))+E[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[6]+3225465664&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[11]+643717713&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[0]+3921069994&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(g^_))+E[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[10]+38016083&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[15]+3634488961&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[4]+3889429448&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(g^_))+E[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[14]+3275163606&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[3]+4107603335&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[8]+1163531501&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(g^_))+E[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[2]+4243563512&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[7]+1735328473&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[12]+2368359562&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(g^_^v)+E[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[8]+2272392833&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[11]+1839030562&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[14]+4259657740&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^v)+E[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[4]+1272893353&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[7]+4139469664&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[10]+3200236656&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^v)+E[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[0]+3936430074&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[3]+3572445317&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[6]+76029189&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^v)+E[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[12]+3873151461&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[15]+530742520&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[2]+3299628645&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(_^(g|~v))+E[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[7]+1126891415&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[14]+2878612391&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[5]+4237533241&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~v))+E[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[3]+2399980690&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[10]+4293915773&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[1]+2240044497&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~v))+E[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[15]+4264355552&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[6]+2734768916&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[13]+1309151649&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~v))+E[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[11]+3174756917&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[2]+718787259&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+v&4294967295}r.prototype.v=function(y,p){p===void 0&&(p=y.length);const g=p-this.blockSize,E=this.C;let _=this.h,v=0;for(;v<p;){if(_==0)for(;v<=g;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<p;)if(E[_++]=y.charCodeAt(v++),_==this.blockSize){i(this,E),_=0;break}}else for(;v<p;)if(E[_++]=y[v++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=p},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;p=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=p&255,p/=256;for(this.v(y),y=Array(16),p=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[p++]=this.g[g]>>>E&255;return y};function o(y,p){var g=h;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=p(y)}function l(y,p){this.h=p;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const v=y[_]|0;E&&v==p||(g[_]=v,E=!1)}this.g=g}var h={};function f(y){return-128<=y&&y<128?o(y,function(p){return new l([p|0],p<0?-1:0)}):new l([y|0],y<0?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return A;if(y<0)return O(d(-y));const p=[];let g=1;for(let E=0;y>=g;E++)p[E]=y/g|0,g*=4294967296;return new l(p,0)}function I(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return O(I(y.substring(1),p));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(p,8));let E=A;for(let v=0;v<y.length;v+=8){var _=Math.min(8,y.length-v);const m=parseInt(y.substring(v,v+_),p);_<8?(_=d(Math.pow(p,_)),E=E.j(_).add(d(m))):(E=E.j(g),E=E.add(d(m)))}return E}var A=f(0),R=f(1),b=f(16777216);n=l.prototype,n.m=function(){if(x(this))return-O(this).m();let y=0,p=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(D(this))return"0";if(x(this))return"-"+O(this).toString(y);const p=d(Math.pow(y,6));var g=this;let E="";for(;;){const _=Tt(g,p).g;g=q(g,_.j(p));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,D(g))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function D(y){if(y.h!=0)return!1;for(let p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function x(y){return y.h==-1}n.l=function(y){return y=q(this,y),x(y)?-1:D(y)?0:1};function O(y){const p=y.g.length,g=[];for(let E=0;E<p;E++)g[E]=~y.g[E];return new l(g,~y.h).add(R)}n.abs=function(){return x(this)?O(this):this},n.add=function(y){const p=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=p;_++){let v=E+(this.i(_)&65535)+(y.i(_)&65535),m=(v>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=m>>>16,v&=65535,m&=65535,g[_]=m<<16|v}return new l(g,g[g.length-1]&-2147483648?-1:0)};function q(y,p){return y.add(O(p))}n.j=function(y){if(D(this)||D(y))return A;if(x(this))return x(y)?O(this).j(O(y)):O(O(this).j(y));if(x(y))return O(this.j(O(y)));if(this.l(b)<0&&y.l(b)<0)return d(this.m()*y.m());const p=this.g.length+y.g.length,g=[];for(var E=0;E<2*p;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const v=this.i(E)>>>16,m=this.i(E)&65535,_t=y.i(_)>>>16,Qt=y.i(_)&65535;g[2*E+2*_]+=m*Qt,z(g,2*E+2*_),g[2*E+2*_+1]+=v*Qt,z(g,2*E+2*_+1),g[2*E+2*_+1]+=m*_t,z(g,2*E+2*_+1),g[2*E+2*_+2]+=v*_t,z(g,2*E+2*_+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new l(g,0)};function z(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function G(y,p){this.g=y,this.h=p}function Tt(y,p){if(D(p))throw Error("division by zero");if(D(y))return new G(A,A);if(x(y))return p=Tt(O(y),p),new G(O(p.g),O(p.h));if(x(p))return p=Tt(y,O(p)),new G(O(p.g),p.h);if(y.g.length>30){if(x(y)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,E=p;E.l(y)<=0;)g=It(g),E=It(E);var _=pt(g,1),v=pt(E,1);for(E=pt(E,2),g=pt(g,2);!D(E);){var m=v.add(E);m.l(y)<=0&&(_=_.add(g),v=m),E=pt(E,1),g=pt(g,1)}return p=q(y,_.j(p)),new G(_,p)}for(_=A;y.l(p)>=0;){for(g=Math.max(1,Math.floor(y.m()/p.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=d(g),m=v.j(p);x(m)||m.l(y)>0;)g-=E,v=d(g),m=v.j(p);D(v)&&(v=R),_=_.add(v),y=q(y,m)}return new G(_,y)}n.B=function(y){return Tt(this,y).h},n.and=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)&y.i(E);return new l(g,this.h&y.h)},n.or=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)|y.i(E);return new l(g,this.h|y.h)},n.xor=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)^y.i(E);return new l(g,this.h^y.h)};function It(y){const p=y.g.length+1,g=[];for(let E=0;E<p;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new l(g,y.h)}function pt(y,p){const g=p>>5;p%=32;const E=y.g.length-g,_=[];for(let v=0;v<E;v++)_[v]=p>0?y.i(v+g)>>>p|y.i(v+g+1)<<32-p:y.i(v+g);return new l(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=I,as=l}).apply(typeof zi<"u"?zi:typeof self<"u"?self:typeof window<"u"?window:{});var Pn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zo,He,Ho,xn,Gr,Go,Ko,Wo;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pn=="object"&&Pn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var u=0;u<s.length-1;u++){var T=s[u];if(!(T in c))break t;c=c[T]}s=s[s.length-1],u=c[s],a=a(u),a!=u&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var c=[],u;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&c.push([u,a[u]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function h(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,c){return s.call.apply(s.bind,arguments)}function d(s,a,c){return d=f,d.apply(null,arguments)}function I(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var u=c.slice();return u.push.apply(u,arguments),s.apply(this,u)}}function A(s,a){function c(){}c.prototype=a.prototype,s.Z=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(u,T,w){for(var P=Array(arguments.length-2),M=2;M<arguments.length;M++)P[M-2]=arguments[M];return a.prototype[T].apply(u,P)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function b(s){const a=s.length;if(a>0){const c=Array(a);for(let u=0;u<a;u++)c[u]=s[u];return c}return[]}function D(s,a){for(let u=1;u<arguments.length;u++){const T=arguments[u];var c=typeof T;if(c=c!="object"?c:T?Array.isArray(T)?"array":c:"null",c=="array"||c=="object"&&typeof T.length=="number"){c=s.length||0;const w=T.length||0;s.length=c+w;for(let P=0;P<w;P++)s[c+P]=T[P]}else s.push(T)}}class x{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function O(s){l.setTimeout(()=>{throw s},0)}function q(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class z{constructor(){this.h=this.g=null}add(a,c){const u=G.get();u.set(a,c),this.h?this.h.next=u:this.g=u,this.h=u}}var G=new x(()=>new Tt,s=>s.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let It,pt=!1,y=new z,p=()=>{const s=Promise.resolve(void 0);It=()=>{s.then(g)}};function g(){for(var s;s=q();){try{s.h.call(s.g)}catch(c){O(c)}var a=G;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}pt=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s})();function m(s){return/^[\s\xa0]*$/.test(s)}function _t(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}A(_t,_),_t.prototype.init=function(s,a){const c=this.type=s.type,u=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&_t.Z.h.call(this)},_t.prototype.h=function(){_t.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Qt="closure_listenable_"+(Math.random()*1e6|0),el=0;function nl(s,a,c,u,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!u,this.ha=T,this.key=++el,this.da=this.fa=!1}function dn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function pn(s,a,c){for(const u in s)a.call(c,s[u],u,s)}function rl(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function Ns(s){const a={};for(const c in s)a[c]=s[c];return a}const Os="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xs(s,a){let c,u;for(let T=1;T<arguments.length;T++){u=arguments[T];for(c in u)s[c]=u[c];for(let w=0;w<Os.length;w++)c=Os[w],Object.prototype.hasOwnProperty.call(u,c)&&(s[c]=u[c])}}function mn(s){this.src=s,this.g={},this.h=0}mn.prototype.add=function(s,a,c,u,T){const w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);const P=ur(s,a,u,T);return P>-1?(a=s[P],c||(a.fa=!1)):(a=new nl(a,this.src,w,!!u,T),a.fa=c,s.push(a)),a};function cr(s,a){const c=a.type;if(c in s.g){var u=s.g[c],T=Array.prototype.indexOf.call(u,a,void 0),w;(w=T>=0)&&Array.prototype.splice.call(u,T,1),w&&(dn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function ur(s,a,c,u){for(let T=0;T<s.length;++T){const w=s[T];if(!w.da&&w.listener==a&&w.capture==!!c&&w.ha==u)return T}return-1}var hr="closure_lm_"+(Math.random()*1e6|0),fr={};function ks(s,a,c,u,T){if(Array.isArray(a)){for(let w=0;w<a.length;w++)ks(s,a[w],c,u,T);return null}return c=Fs(c),s&&s[Qt]?s.J(a,c,h(u)?!!u.capture:!1,T):sl(s,a,c,!1,u,T)}function sl(s,a,c,u,T,w){if(!a)throw Error("Invalid event type");const P=h(T)?!!T.capture:!!T;let M=pr(s);if(M||(s[hr]=M=new mn(s)),c=M.add(a,c,u,P,w),c.proxy)return c;if(u=il(),c.proxy=u,u.src=s,u.listener=c,s.addEventListener)v||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),u,T);else if(s.attachEvent)s.attachEvent(Ls(a.toString()),u);else if(s.addListener&&s.removeListener)s.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return c}function il(){function s(c){return a.call(s.src,s.listener,c)}const a=ol;return s}function Ms(s,a,c,u,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)Ms(s,a[w],c,u,T);else u=h(u)?!!u.capture:!!u,c=Fs(c),s&&s[Qt]?(s=s.i,w=String(a).toString(),w in s.g&&(a=s.g[w],c=ur(a,c,u,T),c>-1&&(dn(a[c]),Array.prototype.splice.call(a,c,1),a.length==0&&(delete s.g[w],s.h--)))):s&&(s=pr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=ur(a,c,u,T)),(c=s>-1?a[s]:null)&&dr(c))}function dr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Qt])cr(a.i,s);else{var c=s.type,u=s.proxy;a.removeEventListener?a.removeEventListener(c,u,s.capture):a.detachEvent?a.detachEvent(Ls(c),u):a.addListener&&a.removeListener&&a.removeListener(u),(c=pr(a))?(cr(c,s),c.h==0&&(c.src=null,a[hr]=null)):dn(s)}}}function Ls(s){return s in fr?fr[s]:fr[s]="on"+s}function ol(s,a){if(s.da)s=!0;else{a=new _t(a,this);const c=s.listener,u=s.ha||s.src;s.fa&&dr(s),s=c.call(u,a)}return s}function pr(s){return s=s[hr],s instanceof mn?s:null}var mr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fs(s){return typeof s=="function"?s:(s[mr]||(s[mr]=function(a){return s.handleEvent(a)}),s[mr])}function ct(){E.call(this),this.i=new mn(this),this.M=this,this.G=null}A(ct,E),ct.prototype[Qt]=!0,ct.prototype.removeEventListener=function(s,a,c,u){Ms(this,s,a,c,u)};function mt(s,a){var c,u=s.G;if(u)for(c=[];u;u=u.G)c.push(u);if(s=s.M,u=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var T=a;a=new _(u,s),xs(a,T)}T=!0;let w,P;if(c)for(P=c.length-1;P>=0;P--)w=a.g=c[P],T=gn(w,u,!0,a)&&T;if(w=a.g=s,T=gn(w,u,!0,a)&&T,T=gn(w,u,!1,a)&&T,c)for(P=0;P<c.length;P++)w=a.g=c[P],T=gn(w,u,!1,a)&&T}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const c=s.g[a];for(let u=0;u<c.length;u++)dn(c[u]);delete s.g[a],s.h--}}this.G=null},ct.prototype.J=function(s,a,c,u){return this.i.add(String(s),a,!1,c,u)},ct.prototype.K=function(s,a,c,u){return this.i.add(String(s),a,!0,c,u)};function gn(s,a,c,u){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let T=!0;for(let w=0;w<a.length;++w){const P=a[w];if(P&&!P.da&&P.capture==c){const M=P.listener,et=P.ha||P.src;P.fa&&cr(s.i,P),T=M.call(et,u)!==!1&&T}}return T&&!u.defaultPrevented}function al(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:l.setTimeout(s,a||0)}function Us(s){s.g=al(()=>{s.g=null,s.i&&(s.i=!1,Us(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class ll extends E{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Us(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(s){E.call(this),this.h=s,this.g={}}A(Pe,E);var Bs=[];function js(s){pn(s.g,function(a,c){this.g.hasOwnProperty(c)&&dr(a)},s),s.g={}}Pe.prototype.N=function(){Pe.Z.N.call(this),js(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gr=l.JSON.stringify,cl=l.JSON.parse,ul=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function $s(){}function qs(){}var be={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _r(){_.call(this,"d")}A(_r,_);function yr(){_.call(this,"c")}A(yr,_);var Xt={},zs=null;function _n(){return zs=zs||new ct}Xt.Ia="serverreachability";function Hs(s){_.call(this,Xt.Ia,s)}A(Hs,_);function Ve(s){const a=_n();mt(a,new Hs(a))}Xt.STAT_EVENT="statevent";function Gs(s,a){_.call(this,Xt.STAT_EVENT,s),this.stat=a}A(Gs,_);function gt(s){const a=_n();mt(a,new Gs(a,s))}Xt.Ja="timingevent";function Ks(s,a){_.call(this,Xt.Ja,s),this.size=a}A(Ks,_);function De(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Ne(){this.g=!0}Ne.prototype.ua=function(){this.g=!1};function hl(s,a,c,u,T,w){s.info(function(){if(s.g)if(w){var P="",M=w.split("&");for(let j=0;j<M.length;j++){var et=M[j].split("=");if(et.length>1){const nt=et[0];et=et[1];const Pt=nt.split("_");P=Pt.length>=2&&Pt[1]=="type"?P+(nt+"="+et+"&"):P+(nt+"=redacted&")}}}else P=null;else P=w;return"XMLHTTP REQ ("+u+") [attempt "+T+"]: "+a+`
`+c+`
`+P})}function fl(s,a,c,u,T,w,P){s.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+T+"]: "+a+`
`+c+`
`+w+" "+P})}function fe(s,a,c,u){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+pl(s,c)+(u?" "+u:"")})}function dl(s,a){s.info(function(){return"TIMEOUT: "+a})}Ne.prototype.info=function(){};function pl(s,a){if(!s.g)return a;if(!a)return null;try{const w=JSON.parse(a);if(w){for(s=0;s<w.length;s++)if(Array.isArray(w[s])){var c=w[s];if(!(c.length<2)){var u=c[1];if(Array.isArray(u)&&!(u.length<1)){var T=u[0];if(T!="noop"&&T!="stop"&&T!="close")for(let P=1;P<u.length;P++)u[P]=""}}}}return gr(w)}catch{return a}}var yn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ws={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qs;function Er(){}A(Er,$s),Er.prototype.g=function(){return new XMLHttpRequest},Qs=new Er;function Oe(s){return encodeURIComponent(String(s))}function ml(s){var a=1;s=s.split(":");const c=[];for(;a>0&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function Mt(s,a,c,u){this.j=s,this.i=a,this.l=c,this.S=u||1,this.V=new Pe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xs}function Xs(){this.i=null,this.g="",this.h=!1}var Js={},Tr={};function vr(s,a,c){s.M=1,s.A=Tn(Ct(a)),s.u=c,s.R=!0,Ys(s,null)}function Ys(s,a){s.F=Date.now(),En(s),s.B=Ct(s.A);var c=s.B,u=s.S;Array.isArray(u)||(u=[String(u)]),hi(c.i,"t",u),s.C=0,c=s.j.L,s.h=new Xs,s.g=bi(s.j,c?a:null,!s.u),s.P>0&&(s.O=new ll(d(s.Y,s,s.g),s.P)),a=s.V,c=s.g,u=s.ba;var T="readystatechange";Array.isArray(T)||(T&&(Bs[0]=T.toString()),T=Bs);for(let w=0;w<T.length;w++){const P=ks(c,T[w],u||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.J?Ns(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Ve(),hl(s.i,s.v,s.B,s.l,s.S,s.u)}Mt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Ut(s)==3?a.j():this.Y(s)},Mt.prototype.Y=function(s){try{if(s==this.g)t:{const M=Ut(this.g),et=this.g.ya(),j=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||yi(this.g)))){this.K||M!=4||et==7||(et==8||j<=0?Ve(3):Ve(2)),Ir(this);var a=this.g.ca();this.X=a;var c=gl(this);if(this.o=a==200,fl(this.i,this.v,this.B,this.l,this.S,M,a),this.o){if(this.U&&!this.L){e:{if(this.g){var u,T=this.g;if((u=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(u)){var w=u;break e}}w=null}if(s=w)fe(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ar(this,s);else{this.o=!1,this.m=3,gt(12),Jt(this),xe(this);break t}}if(this.R){s=!0;let nt;for(;!this.K&&this.C<c.length;)if(nt=_l(this,c),nt==Tr){M==4&&(this.m=4,gt(14),s=!1),fe(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Js){this.m=4,gt(15),fe(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else fe(this.i,this.l,nt,null),Ar(this,nt);if(Zs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||c.length!=0||this.h.h||(this.m=1,gt(16),s=!1),this.o=this.o&&s,!s)fe(this.i,this.l,c,"[Invalid Chunked Response]"),Jt(this),xe(this);else if(c.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),Dr(P),P.P=!0,gt(11))}}else fe(this.i,this.l,c,null),Ar(this,c);M==4&&Jt(this),this.o&&!this.K&&(M==4?Ri(this.j,this):(this.o=!1,En(this)))}else Dl(this.g),a==400&&c.indexOf("Unknown SID")>0?(this.m=3,gt(12)):(this.m=0,gt(13)),Jt(this),xe(this)}}}catch{}finally{}};function gl(s){if(!Zs(s))return s.g.la();const a=yi(s.g);if(a==="")return"";let c="";const u=a.length,T=Ut(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Jt(s),xe(s),"";s.h.i=new l.TextDecoder}for(let w=0;w<u;w++)s.h.h=!0,c+=s.h.i.decode(a[w],{stream:!(T&&w==u-1)});return a.length=0,s.h.g+=c,s.C=0,s.h.g}function Zs(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function _l(s,a){var c=s.C,u=a.indexOf(`
`,c);return u==-1?Tr:(c=Number(a.substring(c,u)),isNaN(c)?Js:(u+=1,u+c>a.length?Tr:(a=a.slice(u,u+c),s.C=u+c,a)))}Mt.prototype.cancel=function(){this.K=!0,Jt(this)};function En(s){s.T=Date.now()+s.H,ti(s,s.H)}function ti(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=De(d(s.aa,s),a)}function Ir(s){s.D&&(l.clearTimeout(s.D),s.D=null)}Mt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(dl(this.i,this.B),this.M!=2&&(Ve(),gt(17)),Jt(this),this.m=2,xe(this)):ti(this,this.T-s)};function xe(s){s.j.I==0||s.K||Ri(s.j,s)}function Jt(s){Ir(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,js(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Ar(s,a){try{var c=s.j;if(c.I!=0&&(c.g==s||wr(c.h,s))){if(!s.L&&wr(c.h,s)&&c.I==3){try{var u=c.Ba.g.parse(a)}catch{u=null}if(Array.isArray(u)&&u.length==3){var T=u;if(T[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)Rn(c),An(c);else break t;Vr(c),gt(18)}}else c.xa=T[1],0<c.xa-c.K&&T[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=De(d(c.Va,c),6e3));ri(c.h)<=1&&c.ta&&(c.ta=void 0)}else Zt(c,11)}else if((s.L||c.g==s)&&Rn(c),!m(a))for(T=c.Ba.g.parse(a),a=0;a<T.length;a++){let j=T[a];const nt=j[0];if(!(nt<=c.K))if(c.K=nt,j=j[1],c.I==2)if(j[0]=="c"){c.M=j[1],c.ba=j[2];const Pt=j[3];Pt!=null&&(c.ka=Pt,c.j.info("VER="+c.ka));const te=j[4];te!=null&&(c.za=te,c.j.info("SVER="+c.za));const Bt=j[5];Bt!=null&&typeof Bt=="number"&&Bt>0&&(u=1.5*Bt,c.O=u,c.j.info("backChannelRequestTimeoutMs_="+u)),u=c;const jt=s.g;if(jt){const Cn=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var w=u.h;w.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Rr(w,w.h),w.h=null))}if(u.G){const Nr=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Nr&&(u.wa=Nr,H(u.J,u.G,Nr))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),u=c;var P=s;if(u.na=Pi(u,u.L?u.ba:null,u.W),P.L){si(u.h,P);var M=P,et=u.O;et&&(M.H=et),M.D&&(Ir(M),En(M)),u.g=P}else Ai(u);c.i.length>0&&wn(c)}else j[0]!="stop"&&j[0]!="close"||Zt(c,7);else c.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Zt(c,7):br(c):j[0]!="noop"&&c.l&&c.l.qa(j),c.A=0)}}Ve(4)}catch{}}var yl=class{constructor(s,a){this.g=s,this.map=a}};function ei(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ni(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ri(s){return s.h?1:s.g?s.g.size:0}function wr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Rr(s,a){s.g?s.g.add(a):s.h=a}function si(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ei.prototype.cancel=function(){if(this.i=ii(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ii(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.G);return a}return b(s.i)}var oi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function El(s,a){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const u=s[c].indexOf("=");let T,w=null;u>=0?(T=s[c].substring(0,u),w=s[c].substring(u+1)):T=s[c],a(T,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Lt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Lt?(this.l=s.l,ke(this,s.j),this.o=s.o,this.g=s.g,Me(this,s.u),this.h=s.h,Sr(this,fi(s.i)),this.m=s.m):s&&(a=String(s).match(oi))?(this.l=!1,ke(this,a[1]||"",!0),this.o=Le(a[2]||""),this.g=Le(a[3]||"",!0),Me(this,a[4]),this.h=Le(a[5]||"",!0),Sr(this,a[6]||"",!0),this.m=Le(a[7]||"")):(this.l=!1,this.i=new Ue(null,this.l))}Lt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Fe(a,ai,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Fe(a,ai,!0),"@"),s.push(Oe(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Fe(c,c.charAt(0)=="/"?Il:vl,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Fe(c,wl)),s.join("")},Lt.prototype.resolve=function(s){const a=Ct(this);let c=!!s.j;c?ke(a,s.j):c=!!s.o,c?a.o=s.o:c=!!s.g,c?a.g=s.g:c=s.u!=null;var u=s.h;if(c)Me(a,s.u);else if(c=!!s.h){if(u.charAt(0)!="/")if(this.g&&!this.h)u="/"+u;else{var T=a.h.lastIndexOf("/");T!=-1&&(u=a.h.slice(0,T+1)+u)}if(T=u,T==".."||T==".")u="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){u=T.lastIndexOf("/",0)==0,T=T.split("/");const w=[];for(let P=0;P<T.length;){const M=T[P++];M=="."?u&&P==T.length&&w.push(""):M==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),u&&P==T.length&&w.push("")):(w.push(M),u=!0)}u=w.join("/")}else u=T}return c?a.h=u:c=s.i.toString()!=="",c?Sr(a,fi(s.i)):c=!!s.m,c&&(a.m=s.m),a};function Ct(s){return new Lt(s)}function ke(s,a,c){s.j=c?Le(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Me(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Sr(s,a,c){a instanceof Ue?(s.i=a,Rl(s.i,s.l)):(c||(a=Fe(a,Al)),s.i=new Ue(a,s.l))}function H(s,a,c){s.i.set(a,c)}function Tn(s){return H(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Le(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Fe(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Tl),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Tl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ai=/[#\/\?@]/g,vl=/[#\?:]/g,Il=/[#\?]/g,Al=/[#\?@]/g,wl=/#/g;function Ue(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Yt(s){s.g||(s.g=new Map,s.h=0,s.i&&El(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Ue.prototype,n.add=function(s,a){Yt(this),this.i=null,s=de(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function li(s,a){Yt(s),a=de(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ci(s,a){return Yt(s),a=de(s,a),s.g.has(a)}n.forEach=function(s,a){Yt(this),this.g.forEach(function(c,u){c.forEach(function(T){s.call(a,T,u,this)},this)},this)};function ui(s,a){Yt(s);let c=[];if(typeof a=="string")ci(s,a)&&(c=c.concat(s.g.get(de(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)c=c.concat(s[a]);return c}n.set=function(s,a){return Yt(this),this.i=null,s=de(this,s),ci(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=ui(this,s),s.length>0?String(s[0]):a):a};function hi(s,a,c){li(s,a),c.length>0&&(s.i=null,s.g.set(de(s,a),b(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let u=0;u<a.length;u++){var c=a[u];const T=Oe(c);c=ui(this,c);for(let w=0;w<c.length;w++){let P=T;c[w]!==""&&(P+="="+Oe(c[w])),s.push(P)}}return this.i=s.join("&")};function fi(s){const a=new Ue;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function de(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Rl(s,a){a&&!s.j&&(Yt(s),s.i=null,s.g.forEach(function(c,u){const T=u.toLowerCase();u!=T&&(li(this,u),hi(this,T,c))},s)),s.j=a}function Sl(s,a){const c=new Ne;if(l.Image){const u=new Image;u.onload=I(Ft,c,"TestLoadImage: loaded",!0,a,u),u.onerror=I(Ft,c,"TestLoadImage: error",!1,a,u),u.onabort=I(Ft,c,"TestLoadImage: abort",!1,a,u),u.ontimeout=I(Ft,c,"TestLoadImage: timeout",!1,a,u),l.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=s}else a(!1)}function Cl(s,a){const c=new Ne,u=new AbortController,T=setTimeout(()=>{u.abort(),Ft(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:u.signal}).then(w=>{clearTimeout(T),w.ok?Ft(c,"TestPingServer: ok",!0,a):Ft(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ft(c,"TestPingServer: error",!1,a)})}function Ft(s,a,c,u,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),u(c)}catch{}}function Pl(){this.g=new ul}function Cr(s){this.i=s.Sb||null,this.h=s.ab||!1}A(Cr,$s),Cr.prototype.g=function(){return new vn(this.i,this.h)};function vn(s,a){ct.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(vn,ct),n=vn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,je(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||l).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Be(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;di(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function di(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Be(this):je(this),this.readyState==3&&di(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Be(this))},n.Na=function(s){this.g&&(this.response=s,Be(this))},n.ga=function(){this.g&&Be(this)};function Be(s){s.readyState=4,s.l=null,s.j=null,s.B=null,je(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function je(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function pi(s){let a="";return pn(s,function(c,u){a+=u,a+=":",a+=c,a+=`\r
`}),a}function Pr(s,a,c){t:{for(u in c){var u=!1;break t}u=!0}u||(c=pi(c),typeof s=="string"?c!=null&&Oe(c):H(s,a,c))}function J(s){ct.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(J,ct);var bl=/^https?$/i,Vl=["POST","PUT"];n=J.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,c,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qs.g(),this.g.onreadystatechange=R(d(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){mi(this,w);return}if(s=c||"",c=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var T in u)c.set(T,u[T]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const w of u.keys())c.set(w,u.get(w));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(Array.prototype.indexOf.call(Vl,a,void 0)>=0)||u||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,P]of c)this.g.setRequestHeader(w,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(w){mi(this,w)}};function mi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,gi(s),In(s)}function gi(s){s.A||(s.A=!0,mt(s,"complete"),mt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,mt(this,"complete"),mt(this,"abort"),In(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),J.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?_i(this):this.Xa())},n.Xa=function(){_i(this)};function _i(s){if(s.h&&typeof o<"u"){if(s.v&&Ut(s)==4)setTimeout(s.Ca.bind(s),0);else if(mt(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const w=s.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var u;if(u=w===0){let P=String(s.D).match(oi)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),u=!bl.test(P?P.toLowerCase():"")}c=u}if(c)mt(s,"complete"),mt(s,"success");else{s.o=6;try{var T=Ut(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",gi(s)}}finally{In(s)}}}}function In(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,a||mt(s,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Ut(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),cl(a)}};function yi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Dl(s){const a={};s=(s.g&&Ut(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<s.length;u++){if(m(s[u]))continue;var c=ml(s[u]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=a[T]||[];a[T]=w,w.push(c)}rl(a,function(u){return u.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $e(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Ei(s){this.za=0,this.i=[],this.j=new Ne,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$e("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$e("baseRetryDelayMs",5e3,s),this.Za=$e("retryDelaySeedMs",1e4,s),this.Ta=$e("forwardChannelMaxRetries",2,s),this.va=$e("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new ei(s&&s.concurrentRequestLimit),this.Ba=new Pl,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ei.prototype,n.ka=8,n.I=1,n.connect=function(s,a,c,u){gt(0),this.W=s,this.H=a||{},c&&u!==void 0&&(this.H.OSID=c,this.H.OAID=u),this.F=this.X,this.J=Pi(this,null,this.W),wn(this)};function br(s){if(Ti(s),s.I==3){var a=s.V++,c=Ct(s.J);if(H(c,"SID",s.M),H(c,"RID",a),H(c,"TYPE","terminate"),qe(s,c),a=new Mt(s,s.j,a),a.M=2,a.A=Tn(Ct(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.A.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.A,c=!0),c||(a.g=bi(a.j,null),a.g.ea(a.A)),a.F=Date.now(),En(a)}Ci(s)}function An(s){s.g&&(Dr(s),s.g.cancel(),s.g=null)}function Ti(s){An(s),s.v&&(l.clearTimeout(s.v),s.v=null),Rn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&l.clearTimeout(s.m),s.m=null)}function wn(s){if(!ni(s.h)&&!s.m){s.m=!0;var a=s.Ea;It||p(),pt||(It(),pt=!0),y.add(a,s),s.D=0}}function Nl(s,a){return ri(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=De(d(s.Ea,s,a),Si(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new Mt(this,this.j,s);let w=this.o;if(this.U&&(w?(w=Ns(w),xs(w,this.U)):w=this.U),this.u!==null||this.R||(T.J=w,w=null),this.S)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var u=this.i[c];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break e}u=void 0}if(u===void 0)break;if(a+=u,a>4096){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Ii(this,T,a),c=Ct(this.J),H(c,"RID",s),H(c,"CVER",22),this.G&&H(c,"X-HTTP-Session-Id",this.G),qe(this,c),w&&(this.R?a="headers="+Oe(pi(w))+"&"+a:this.u&&Pr(c,this.u,w)),Rr(this.h,T),this.Ra&&H(c,"TYPE","init"),this.S?(H(c,"$req",a),H(c,"SID","null"),T.U=!0,vr(T,c,null)):vr(T,c,a),this.I=2}}else this.I==3&&(s?vi(this,s):this.i.length==0||ni(this.h)||vi(this))};function vi(s,a){var c;a?c=a.l:c=s.V++;const u=Ct(s.J);H(u,"SID",s.M),H(u,"RID",c),H(u,"AID",s.K),qe(s,u),s.u&&s.o&&Pr(u,s.u,s.o),c=new Mt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Ii(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Rr(s.h,c),vr(c,u,a)}function qe(s,a){s.H&&pn(s.H,function(c,u){H(a,u,c)}),s.l&&pn({},function(c,u){H(a,u,c)})}function Ii(s,a,c){c=Math.min(s.i.length,c);const u=s.l?d(s.l.Ka,s.l,s):null;t:{var T=s.i;let M=-1;for(;;){const et=["count="+c];M==-1?c>0?(M=T[0].g,et.push("ofs="+M)):M=0:et.push("ofs="+M);let j=!0;for(let nt=0;nt<c;nt++){var w=T[nt].g;const Pt=T[nt].map;if(w-=M,w<0)M=Math.max(0,T[nt].g-100),j=!1;else try{w="req"+w+"_"||"";try{var P=Pt instanceof Map?Pt:Object.entries(Pt);for(const[te,Bt]of P){let jt=Bt;h(Bt)&&(jt=gr(Bt)),et.push(w+te+"="+encodeURIComponent(jt))}}catch(te){throw et.push(w+"type="+encodeURIComponent("_badmap")),te}}catch{u&&u(Pt)}}if(j){P=et.join("&");break t}}P=void 0}return s=s.i.splice(0,c),a.G=s,P}function Ai(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;It||p(),pt||(It(),pt=!0),y.add(a,s),s.A=0}}function Vr(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=De(d(s.Da,s),Si(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,wi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=De(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,gt(10),An(this),wi(this))};function Dr(s){s.B!=null&&(l.clearTimeout(s.B),s.B=null)}function wi(s){s.g=new Mt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=Ct(s.na);H(a,"RID","rpc"),H(a,"SID",s.M),H(a,"AID",s.K),H(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&H(a,"TO",s.ia),H(a,"TYPE","xmlhttp"),qe(s,a),s.u&&s.o&&Pr(a,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=Tn(Ct(a)),c.u=null,c.R=!0,Ys(c,s)}n.Va=function(){this.C!=null&&(this.C=null,An(this),Vr(this),gt(19))};function Rn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Ri(s,a){var c=null;if(s.g==a){Rn(s),Dr(s),s.g=null;var u=2}else if(wr(s.h,a))c=a.G,si(s.h,a),u=1;else return;if(s.I!=0){if(a.o)if(u==1){c=a.u?a.u.length:0,a=Date.now()-a.F;var T=s.D;u=_n(),mt(u,new Ks(u,c)),wn(s)}else Ai(s);else if(T=a.m,T==3||T==0&&a.X>0||!(u==1&&Nl(s,a)||u==2&&Vr(s)))switch(c&&c.length>0&&(a=s.h,a.i=a.i.concat(c)),T){case 1:Zt(s,5);break;case 4:Zt(s,10);break;case 3:Zt(s,6);break;default:Zt(s,2)}}}function Si(s,a){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*a}function Zt(s,a){if(s.j.info("Error code "+a),a==2){var c=d(s.bb,s),u=s.Ua;const T=!u;u=new Lt(u||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ke(u,"https"),Tn(u),T?Sl(u.toString(),c):Cl(u.toString(),c)}else gt(2);s.I=0,s.l&&s.l.pa(a),Ci(s),Ti(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Ci(s){if(s.I=0,s.ja=[],s.l){const a=ii(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ja,a),D(s.ja,s.i),s.h.i.length=0,b(s.i),s.i.length=0),s.l.oa()}}function Pi(s,a,c){var u=c instanceof Lt?Ct(c):new Lt(c);if(u.g!="")a&&(u.g=a+"."+u.g),Me(u,u.u);else{var T=l.location;u=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;const w=new Lt(null);u&&ke(w,u),a&&(w.g=a),T&&Me(w,T),c&&(w.h=c),u=w}return c=s.G,a=s.wa,c&&a&&H(u,c,a),H(u,"VER",s.ka),qe(s,u),u}function bi(s,a,c){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new J(new Cr({ab:c})):new J(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vi(){}n=Vi.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Sn(){}Sn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ct.call(this),this.g=new Ei(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!m(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!m(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new pe(this)}A(vt,ct),vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){br(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=gr(s),s=c);a.i.push(new yl(a.Ya++,s)),a.I==3&&wn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,br(this.g),delete this.g,vt.Z.N.call(this)};function Di(s){_r.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}A(Di,_r);function Ni(){yr.call(this),this.status=1}A(Ni,yr);function pe(s){this.g=s}A(pe,Vi),pe.prototype.ra=function(){mt(this.g,"a")},pe.prototype.qa=function(s){mt(this.g,new Di(s))},pe.prototype.pa=function(s){mt(this.g,new Ni)},pe.prototype.oa=function(){mt(this.g,"b")},Sn.prototype.createWebChannel=Sn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Wo=function(){return new Sn},Ko=function(){return _n()},Go=Xt,Gr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,xn=yn,Ws.COMPLETE="complete",Ho=Ws,qs.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",ct.prototype.listen=ct.prototype.J,He=qs,J.prototype.listenOnce=J.prototype.K,J.prototype.getLastError=J.prototype.Ha,J.prototype.getLastErrorCode=J.prototype.ya,J.prototype.getStatus=J.prototype.ca,J.prototype.getResponseJson=J.prototype.La,J.prototype.getResponseText=J.prototype.la,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Fa,zo=J}).apply(typeof Pn<"u"?Pn:typeof self<"u"?self:typeof window<"u"?window:{});const Hi="@firebase/firestore",Gi="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Fo("@firebase/firestore");function me(){return oe.logLevel}function V(n,...t){if(oe.logLevel<=U.DEBUG){const e=t.map(ls);oe.debug(`Firestore (${Se}): ${n}`,...e)}}function ae(n,...t){if(oe.logLevel<=U.ERROR){const e=t.map(ls);oe.error(`Firestore (${Se}): ${n}`,...e)}}function tr(n,...t){if(oe.logLevel<=U.WARN){const e=t.map(ls);oe.warn(`Firestore (${Se}): ${n}`,...e)}}function ls(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Qo(n,r,e)}function Qo(n,t,e){let r=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw ae(r),new Error(r)}function Y(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Qo(t,i,r)}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Re{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ht.UNAUTHENTICATED)))}shutdown(){}}class Eu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Tu{constructor(t){this.t=t,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new se;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new se,t.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const f=o;t.enqueueRetryable((async()=>{await f.promise,await i(this.currentUser)}))},h=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((f=>h(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new se)}}),0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new Xo(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new ht(t)}}class vu{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Iu{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new vu(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ki{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Au{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ru(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ki(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ki(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=wu(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Kr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Lr(i)===Lr(o)?B(i,o):Lr(i)?1:-1}return B(n.length,t.length)}const Ru=55296,Su=57343;function Lr(n){const t=n.charCodeAt(0);return t>=Ru&&t<=Su}function Te(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="__name__";class bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=bt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=bt.isNumericId(t),i=bt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?bt.extractNumericId(t).compare(bt.extractNumericId(e)):Kr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return as.fromString(t.substring(4,t.length-2))}}class X extends bt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const Cu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends bt{construct(t,e,r){return new at(t,e,r)}static isValidIdentifier(t){return Cu.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wi}static keyField(){return new at([Wi])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new N(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new N(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(X.fromString(t))}static fromName(t){return new k(X.fromString(t).popFirst(5))}static empty(){return new k(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n,t,e){if(!e)throw new N(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Pu(n,t,e,r){if(t===!0&&r===!0)throw new N(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Qi(n){if(!k.isDocumentKey(n))throw new N(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xi(n){if(k.isDocumentKey(n))throw new N(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function us(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function Zo(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=us(n);throw new N(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,t){const e={typeString:n};return t&&(e.value=t),e}function an(n,t){if(!Yo(n))throw new N(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=-62135596800,Yi=1e6;class Q{static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Yi);return new Q(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ji)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yi}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Q._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(an(t,Q._jsonSchema))return new Q(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ji;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Q._jsonSchemaVersion="firestore/timestamp/1.0",Q._jsonSchema={type:tt("string",Q._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(t){return new W(t)}static min(){return new W(new Q(0,0))}static max(){return new W(new Q(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=-1;function bu(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Q(e+1,0):new Q(e,r));return new Ht(i,k.empty(),t)}function Vu(n){return new Ht(n.readTime,n.key,en)}class Ht{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ht(W.min(),k.empty(),en)}static max(){return new Ht(W.max(),k.empty(),en)}}function Du(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ou{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Nu)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let i=0,o=0,l=!1;t.forEach((h=>{++i,h.next((()=>{++o,l&&o===i&&e()}),(f=>r(f)))})),l=!0,o===i&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((i=>i?S.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,i)=>{const o=t.length,l=new Array(o);let h=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next((I=>{l[d]=I,++h,h===o&&r(l)}),(I=>i(I)))}}))}static doWhile(t,e){return new S(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function xu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}fs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=-1;function ps(n){return n==null}function qn(n){return n===0&&1/n==-1/0}function ku(n){return typeof n=="number"&&Number.isInteger(n)&&!qn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="";function Mu(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Zi(t)),t=Lu(n.get(e),t);return Zi(t)}function Lu(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case ta:e+="";break;default:e+=o}}return e}function Zi(n){return n+ta+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ce(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ea(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new Et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bn(this.root,t,this.comparator,!0)}}class bn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new it(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new eo(this.data.getIterator())}getIteratorFrom(t){return new eo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class eo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new St([])}unionWith(t){let e=new lt(at.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Fu("Invalid base64 string: "+o):o}})(t);return new Vt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o})(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Uu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function le(n){if(Y(!!n,39018),typeof n=="string"){let t=0;const e=Uu.exec(n);if(Y(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ve(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="server_timestamp",ra="__type__",sa="__previous_value__",ia="__local_write_time__";function ms(n){return(n?.mapValue?.fields||{})[ra]?.stringValue===na}function gs(n){const t=n.mapValue.fields[sa];return ms(t)?gs(t):t}function zn(n){const t=le(n.mapValue.fields[ia].timestampValue);return new Q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,e,r,i,o,l,h,f,d,I){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=I}}const Hn="(default)";class Gn{constructor(t,e){this.projectId=t,this.database=e||Hn}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database===Hn}isEqual(t){return t instanceof Gn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="__type__",ju="__max__",Vn={mapValue:{}},aa="__vector__",Wr="value";function ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ms(n)?4:qu(n)?9007199254740991:$u(n)?10:11:L(28295,{value:n})}function Dt(n,t){if(n===t)return!0;const e=ce(n);if(e!==ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return zn(n).isEqual(zn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=le(i.timestampValue),h=le(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return ve(i.bytesValue).isEqual(ve(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return ot(i.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return ot(i.integerValue)===ot(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=ot(i.doubleValue),h=ot(o.doubleValue);return l===h?qn(l)===qn(h):isNaN(l)&&isNaN(h)}return!1})(n,t);case 9:return Te(n.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return(function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(to(l)!==to(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Dt(l[f],h[f])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function nn(n,t){return(n.values||[]).find((e=>Dt(e,t)))!==void 0}function Ie(n,t){if(n===t)return 0;const e=ce(n),r=ce(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return(function(o,l){const h=ot(o.integerValue||o.doubleValue),f=ot(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1})(n,t);case 3:return no(n.timestampValue,t.timestampValue);case 4:return no(zn(n),zn(t));case 5:return Kr(n.stringValue,t.stringValue);case 6:return(function(o,l){const h=ve(o),f=ve(l);return h.compareTo(f)})(n.bytesValue,t.bytesValue);case 7:return(function(o,l){const h=o.split("/"),f=l.split("/");for(let d=0;d<h.length&&d<f.length;d++){const I=B(h[d],f[d]);if(I!==0)return I}return B(h.length,f.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,l){const h=B(ot(o.latitude),ot(l.latitude));return h!==0?h:B(ot(o.longitude),ot(l.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return ro(n.arrayValue,t.arrayValue);case 10:return(function(o,l){const h=o.fields||{},f=l.fields||{},d=h[Wr]?.arrayValue,I=f[Wr]?.arrayValue,A=B(d?.values?.length||0,I?.values?.length||0);return A!==0?A:ro(d,I)})(n.mapValue,t.mapValue);case 11:return(function(o,l){if(o===Vn.mapValue&&l===Vn.mapValue)return 0;if(o===Vn.mapValue)return 1;if(l===Vn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),d=l.fields||{},I=Object.keys(d);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const R=Kr(f[A],I[A]);if(R!==0)return R;const b=Ie(h[f[A]],d[I[A]]);if(b!==0)return b}return B(f.length,I.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function no(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=le(n),r=le(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function ro(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ie(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function Ae(n){return Qr(n)}function Qr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=le(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ve(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return k.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Qr(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${Qr(e.fields[l])}`;return i+"}"})(n.mapValue):L(61005,{value:n})}function kn(n){switch(ce(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=gs(n);return t?16+kn(t):16;case 5:return 2*n.stringValue.length;case 6:return ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+kn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Ce(r.fields,((o,l)=>{i+=o.length+kn(l)})),i})(n.mapValue);default:throw L(13486,{value:n})}}function Xr(n){return!!n&&"integerValue"in n}function _s(n){return!!n&&"arrayValue"in n}function Mn(n){return!!n&&"mapValue"in n}function $u(n){return(n?.mapValue?.fields||{})[oa]?.stringValue===aa}function Ke(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ce(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Ke(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ke(n.arrayValue.values[e]);return t}return{...n}}function qu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ju}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Mn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ke(e)}setAll(t){let e=at.emptyPath(),r={},i=[];t.forEach(((l,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=h.popLast()}l?r[h.lastSegment()]=Ke(l):i.push(h.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Mn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Mn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ce(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new wt(Ke(this.value))}}function la(n){const t=[];return Ce(n.fields,((e,r)=>{const i=new at([e]);if(Mn(r)){const o=la(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)})),new St(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,i,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new At(t,0,W.min(),W.min(),W.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new At(t,1,e,W.min(),r,i,0)}static newNoDocument(t,e){return new At(t,2,e,W.min(),W.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,W.min(),W.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e){this.position=t,this.inclusive=e}}function so(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=k.comparator(k.fromName(l.referenceValue),e.key):r=Ie(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function io(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Dt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function zu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{}class st extends ca{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Gu(t,e,r):e==="array-contains"?new Qu(t,r):e==="in"?new Xu(t,r):e==="not-in"?new Ju(t,r):e==="array-contains-any"?new Yu(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ku(t,r):new Wu(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ie(e,this.value)):e!==null&&ce(this.value)===ce(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends ca{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Gt(t,e)}matches(t){return ua(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ua(n){return n.op==="and"}function ha(n){return Hu(n)&&ua(n)}function Hu(n){for(const t of n.filters)if(t instanceof Gt)return!1;return!0}function Jr(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+Ae(n.value);if(ha(n))return n.filters.map((t=>Jr(t))).join(",");{const t=n.filters.map((e=>Jr(e))).join(",");return`${n.op}(${t})`}}function fa(n,t){return n instanceof st?(function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Dt(r.value,i.value)})(n,t):n instanceof Gt?(function(r,i){return i instanceof Gt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,l,h)=>o&&fa(l,i.filters[h])),!0):!1})(n,t):void L(19439)}function da(n){return n instanceof st?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ae(e.value)}`})(n):n instanceof Gt?(function(e){return e.op.toString()+" {"+e.getFilters().map(da).join(" ,")+"}"})(n):"Filter"}class Gu extends st{constructor(t,e,r){super(t,e,r),this.key=k.fromName(r.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ku extends st{constructor(t,e){super(t,"in",e),this.keys=pa("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Wu extends st{constructor(t,e){super(t,"not-in",e),this.keys=pa("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pa(n,t){return(t.arrayValue?.values||[]).map((e=>k.fromName(e.referenceValue)))}class Qu extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _s(e)&&nn(e.arrayValue,this.value)}}class Xu extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class Ju extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!nn(this.value.arrayValue,e)}}class Yu extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_s(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>nn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e=null,r=[],i=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.Te=null}}function oo(n,t=null,e=[],r=[],i=null,o=null,l=null){return new Zu(n,t,e,r,i,o,l)}function ys(n){const t=$(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Jr(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),ps(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Ae(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Ae(r))).join(",")),t.Te=e}return t.Te}function Es(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!zu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!fa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!io(n.startAt,t.startAt)&&io(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e=null,r=[],i=[],o=null,l="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function th(n,t,e,r,i,o,l,h){return new er(n,t,e,r,i,o,l,h)}function eh(n){return new er(n)}function ao(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nh(n){return n.collectionGroup!==null}function We(n){const t=$(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new lt(at.comparator);return l.filters.forEach((f=>{f.getFlattenedFilters().forEach((d=>{d.isInequality()&&(h=h.add(d.field))}))})),h})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Wn(o,r))})),e.has(at.keyField().canonicalString())||t.Ie.push(new Wn(at.keyField(),r))}return t.Ie}function ie(n){const t=$(n);return t.Ee||(t.Ee=rh(t,We(n))),t.Ee}function rh(n,t){if(n.limitType==="F")return oo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new Wn(i.field,o)}));const e=n.endAt?new Kn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Kn(n.startAt.position,n.startAt.inclusive):null;return oo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Yr(n,t,e){return new er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ma(n,t){return Es(ie(n),ie(t))&&n.limitType===t.limitType}function ga(n){return`${ys(ie(n))}|lt:${n.limitType}`}function ze(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>da(i))).join(", ")}]`),ps(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Ae(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Ae(i))).join(",")),`Target(${r})`})(ie(n))}; limitType=${n.limitType})`}function Ts(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):k.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of We(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(l,h,f){const d=so(l,h,f);return l.inclusive?d<=0:d<0})(r.startAt,We(r),i)||r.endAt&&!(function(l,h,f){const d=so(l,h,f);return l.inclusive?d>=0:d>0})(r.endAt,We(r),i))})(n,t)}function sh(n){return(t,e)=>{let r=!1;for(const i of We(n)){const o=ih(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function ih(n,t,e){const r=n.field.isKeyField()?k.comparator(t.key,e.key):(function(o,l,h){const f=l.data.field(o),d=h.data.field(o);return f!==null&&d!==null?Ie(f,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ce(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return ea(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Et(k.comparator);function Qn(){return oh}const _a=new Et(k.comparator);function Dn(...n){let t=_a;for(const e of n)t=t.insert(e.key,e);return t}function ya(n){let t=_a;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function re(){return Qe()}function Ea(){return Qe()}function Qe(){return new ue((n=>n.toString()),((n,t)=>n.isEqual(t)))}const ah=new Et(k.comparator),lh=new lt(k.comparator);function ft(...n){let t=lh;for(const e of n)t=t.add(e);return t}const ch=new lt(B);function uh(){return ch}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qn(t)?"-0":t}}function Ta(n){return{integerValue:""+n}}function hh(n,t){return ku(t)?Ta(t):vs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this._=void 0}}function fh(n,t,e){return n instanceof rn?(function(i,o){const l={fields:{[ra]:{stringValue:na},[ia]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ms(o)&&(o=gs(o)),o&&(l.fields[sa]=o),{mapValue:l}})(e,t):n instanceof sn?Ia(n,t):n instanceof on?Aa(n,t):(function(i,o){const l=va(i,o),h=lo(l)+lo(i.Ae);return Xr(l)&&Xr(i.Ae)?Ta(h):vs(i.serializer,h)})(n,t)}function dh(n,t,e){return n instanceof sn?Ia(n,t):n instanceof on?Aa(n,t):e}function va(n,t){return n instanceof Xn?(function(r){return Xr(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class rn extends nr{}class sn extends nr{constructor(t){super(),this.elements=t}}function Ia(n,t){const e=wa(t);for(const r of n.elements)e.some((i=>Dt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class on extends nr{constructor(t){super(),this.elements=t}}function Aa(n,t){let e=wa(t);for(const r of n.elements)e=e.filter((i=>!Dt(i,r)));return{arrayValue:{values:e}}}class Xn extends nr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function lo(n){return ot(n.integerValue||n.doubleValue)}function wa(n){return _s(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,e){this.field=t,this.transform=e}}function mh(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof sn&&i instanceof sn||r instanceof on&&i instanceof on?Te(r.elements,i.elements,Dt):r instanceof Xn&&i instanceof Xn?Dt(r.Ae,i.Ae):r instanceof rn&&i instanceof rn})(n.transform,t.transform)}class gh{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ln(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class rr{}function Ra(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ca(n.key,Nt.none()):new cn(n.key,n.data,Nt.none());{const e=n.data,r=wt.empty();let i=new lt(at.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new he(n.key,r,new St(i.toArray()),Nt.none())}}function _h(n,t,e){n instanceof cn?(function(i,o,l){const h=i.value.clone(),f=uo(i.fieldTransforms,o,l.transformResults);h.setAll(f),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()})(n,t,e):n instanceof he?(function(i,o,l){if(!Ln(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=uo(i.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(Sa(i)),f.setAll(h),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()})(n,t,e):(function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()})(0,t,e)}function Xe(n,t,e,r){return n instanceof cn?(function(o,l,h,f){if(!Ln(o.precondition,l))return h;const d=o.value.clone(),I=ho(o.fieldTransforms,f,l);return d.setAll(I),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof he?(function(o,l,h,f){if(!Ln(o.precondition,l))return h;const d=ho(o.fieldTransforms,f,l),I=l.data;return I.setAll(Sa(o)),I.setAll(d),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((A=>A.field)))})(n,t,e,r):(function(o,l,h){return Ln(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h})(n,t,e)}function yh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=va(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function co(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Te(r,i,((o,l)=>mh(o,l)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class cn extends rr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class he extends rr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Sa(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function uo(n,t,e){const r=new Map;Y(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,h=t.data.field(o.field);r.set(o.field,dh(l,h,e[i]))}return r}function ho(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,fh(o,l,t))}return r}class Ca extends rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&_h(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ea();return this.mutations.forEach((i=>{const o=t.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(i.key)?null:h;const f=Ra(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(W.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ft())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,((e,r)=>co(e,r)))&&Te(this.baseMutations,t.baseMutations,((e,r)=>co(e,r)))}}class Is{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Y(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return ah})();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Is(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,F;function Ih(n){switch(n){case C.OK:return L(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Ah(n){if(n===void 0)return ae("GRPC error has no .code"),C.UNKNOWN;switch(n){case Z.OK:return C.OK;case Z.CANCELLED:return C.CANCELLED;case Z.UNKNOWN:return C.UNKNOWN;case Z.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Z.INTERNAL:return C.INTERNAL;case Z.UNAVAILABLE:return C.UNAVAILABLE;case Z.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Z.NOT_FOUND:return C.NOT_FOUND;case Z.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Z.ABORTED:return C.ABORTED;case Z.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Z.DATA_LOSS:return C.DATA_LOSS;default:return L(39323,{code:n})}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new as([4294967295,4294967295],0);class wh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Zr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Sh(n,t){return Zr(n,t.toTimestamp())}function ye(n){return Y(!!n,49232),W.fromTimestamp((function(e){const r=le(e);return new Q(r.seconds,r.nanos)})(n))}function Pa(n,t){return ts(n,t).canonicalString()}function ts(n,t){const e=(function(i){return new X(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Ch(n){const t=X.fromString(n);return Y(kh(t),10190,{key:t.toString()}),t}function es(n,t){return Pa(n.databaseId,t.path)}function Ph(n){const t=Ch(n);return t.length===4?X.emptyPath():Vh(t)}function bh(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vh(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fo(n,t,e){return{name:es(n,t),fields:e.value.mapValue.fields}}function Dh(n,t){let e;if(t instanceof cn)e={update:fo(n,t.key,t.value)};else if(t instanceof Ca)e={delete:es(n,t.key)};else if(t instanceof he)e={update:fo(n,t.key,t.data),updateMask:xh(t.fieldMask)};else{if(!(t instanceof Eh))return L(16599,{Vt:t.type});e={verify:es(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,l){const h=l.transform;if(h instanceof rn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof sn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof on)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Xn)return{fieldPath:l.field.canonicalString(),increment:h.Ae};throw L(20930,{transform:l.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Sh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function Nh(n,t){return n&&n.length>0?(Y(t!==void 0,14353),n.map((e=>(function(i,o){let l=i.updateTime?ye(i.updateTime):ye(o);return l.isEqual(W.min())&&(l=ye(o)),new gh(l,i.transformResults||[])})(e,t)))):[]}function Oh(n){let t=Ph(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Y(r===1,65062);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=(function(A){const R=ba(A);return R instanceof Gt&&ha(R)?R.getFilters():[R]})(e.where));let l=[];e.orderBy&&(l=(function(A){return A.map((R=>(function(D){return new Wn(ge(D.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(R)))})(e.orderBy));let h=null;e.limit&&(h=(function(A){let R;return R=typeof A=="object"?A.value:A,ps(R)?null:R})(e.limit));let f=null;e.startAt&&(f=(function(A){const R=!!A.before,b=A.values||[];return new Kn(b,R)})(e.startAt));let d=null;return e.endAt&&(d=(function(A){const R=!A.before,b=A.values||[];return new Kn(b,R)})(e.endAt)),th(t,i,l,o,h,"F",f,d)}function ba(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ge(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ge(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ge(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=ge(e.unaryFilter.field);return st.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return st.create(ge(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Gt.create(e.compositeFilter.filters.map((r=>ba(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function ge(n){return at.fromServerFormat(n.fieldPath)}function xh(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t){this.yt=t}}function Lh(n){const t=Oh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.Cn=new Uh}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Ht.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Ht.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Uh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new lt(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new lt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Va=41943040;class yt{static withCacheSize(t){return new yt(t,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Va,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new we(0)}static cr(){return new we(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="LruGarbageCollector",Bh=1048576;function go([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class jh{constructor(t){this.Ir=t,this.buffer=new lt(go),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();go(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class $h{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){V(mo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?V(mo,"Ignoring IndexedDB error during garbage collection: ",e):await hs(e)}await this.Vr(3e5)}))}}class qh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(fs.ce);const r=new jh(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(po)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),po):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,l,h,f,d;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,l=Date.now(),this.nthSequenceNumber(t,i)))).next((A=>(r=A,h=Date.now(),this.removeTargets(t,r,e)))).next((A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(d=Date.now(),me()<=U.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-I}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${A} documents in `+(d-f)+`ms
Total Duration: ${d-I}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A}))))}}function zh(n,t){return new qh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.changes=new ue((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&Xe(r.mutation,i,St.empty(),Q.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,ft()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=ft()){const i=re();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let l=Dn();return o.forEach(((h,f)=>{l=l.insert(h,f.overlayedDocument)})),l}))))}getOverlayedDocuments(t,e){const r=re();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,ft())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((l,h)=>{e.set(l,h)}))}))}computeViews(t,e,r,i){let o=Qn();const l=Qe(),h=(function(){return Qe()})();return e.forEach(((f,d)=>{const I=r.get(d.key);i.has(d.key)&&(I===void 0||I.mutation instanceof he)?o=o.insert(d.key,d):I!==void 0?(l.set(d.key,I.mutation.getFieldMask()),Xe(I.mutation,d,I.mutation.getFieldMask(),Q.now())):l.set(d.key,St.empty())})),this.recalculateAndSaveOverlays(t,o).next((f=>(f.forEach(((d,I)=>l.set(d,I))),e.forEach(((d,I)=>h.set(d,new Gh(I,l.get(d)??null)))),h)))}recalculateAndSaveOverlays(t,e){const r=Qe();let i=new Et(((l,h)=>l-h)),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((l=>{for(const h of l)h.keys().forEach((f=>{const d=e.get(f);if(d===null)return;let I=r.get(f)||St.empty();I=h.applyToLocalView(d,I),r.set(f,I);const A=(i.get(h.batchId)||ft()).add(f);i=i.insert(h.batchId,A)}))})).next((()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),d=f.key,I=f.value,A=Ea();I.forEach((R=>{if(!o.has(R)){const b=Ra(e.get(R),r.get(R));b!==null&&A.set(R,b),o=o.add(R)}})),l.push(this.documentOverlayCache.saveOverlays(t,d,A))}return S.waitFor(l)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(l){return k.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):nh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(re());let h=en,f=o;return l.next((d=>S.forEach(d,((I,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(I)?S.resolve():this.remoteDocumentCache.getEntry(t,I).next((R=>{f=f.insert(I,R)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,f,d,ft()))).next((I=>({batchId:h,changes:ya(I)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next((r=>{let i=Dn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=Dn();return this.indexManager.getCollectionParents(t,o).next((h=>S.forEach(h,(f=>{const d=(function(A,R){return new er(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next((I=>{I.forEach(((A,R)=>{l=l.insert(A,R)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((l=>{o.forEach(((f,d)=>{const I=d.getKey();l.get(I)===null&&(l=l.insert(I,At.newInvalidDocument(I)))}));let h=Dn();return l.forEach(((f,d)=>{const I=o.get(f);I!==void 0&&Xe(I.mutation,d,St.empty(),Q.now()),Ts(e,d)&&(h=h.insert(f,d))})),h}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:ye(i.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Lh(i.bundledQuery),readTime:ye(i.readTime)}})(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.overlays=new Et(k.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=re();return S.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=re(),o=e.length+1,l=new k(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Et(((d,I)=>d-I));const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let I=o.get(d.largestBatchId);I===null&&(I=re(),o=o.insert(d.largestBatchId,I)),I.set(d.getKey(),d)}}const h=re(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((d,I)=>h.set(d,I))),!(h.size()>=i)););return S.resolve(h)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new vh(e,r));let o=this.qr.get(e);o===void 0&&(o=ft(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.Qr=new lt(rt.$r),this.Ur=new lt(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new rt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new k(new X([])),r=new rt(e,t),i=new rt(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(l=>{this.Gr(l),o.push(l.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new k(new X([])),r=new rt(e,t),i=new rt(e,t+1);let o=ft();return this.Ur.forEachInRange([r,i],(l=>{o=o.add(l.key)})),o}containsKey(t){const e=new rt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return k.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new lt(rt.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Th(o,e,r,i);this.mutationQueue.push(l);for(const h of i)this.Zr=this.Zr.add(new rt(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return S.resolve(l)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ds:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(l=>{const h=this.Xr(l.Yr);o.push(h)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(B);return e.forEach((i=>{const o=new rt(i,0),l=new rt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,l],(h=>{r=r.add(h.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;k.isDocumentKey(o)||(o=o.child(""));const l=new rt(new k(o),0);let h=new lt(B);return this.Zr.forEachWhile((f=>{const d=f.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(h=h.add(f.Yr)),!0)}),l),S.resolve(this.ti(h))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){Y(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,(i=>{const o=new rt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new rt(e,0),i=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){this.ri=t,this.docs=(function(){return new Et(k.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Qn();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():At.newInvalidDocument(i))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Qn();const l=e.path,h=new k(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:d,value:{document:I}}=f.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||Du(Vu(I),r)<=0||(i.has(I.key)||Ts(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L(9500)}ii(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Zh(this)}getSize(t){return S.resolve(this.size)}}class Zh extends Hh{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.persistence=t,this.si=new ue((e=>ys(e)),Es),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new As,this.targetCount=0,this.ai=we.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new we(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.si.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)})),S.waitFor(o).next((()=>i))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((l=>{o.push(i.markPotentiallyOrphaned(t,l))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e){this.ui={},this.overlays={},this.ci=new fs(0),this.li=!1,this.li=!0,this.hi=new Xh,this.referenceDelegate=t(this),this.Pi=new tf(this),this.indexManager=new Fh,this.remoteDocumentCache=(function(i){return new Yh(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Mh(e),this.Ii=new Wh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Qh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Jh(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new ef(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class ef extends Ou{constructor(t){super(),this.currentSequenceNumber=t}}class ws{constructor(t){this.persistence=t,this.Ri=new As,this.Vi=null}static mi(t){return new ws(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const i=k.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,W.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Jn{constructor(t,e){this.persistence=t,this.pi=new ue((r=>Mu(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=zh(this,e)}static mi(t,e){return new Jn(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return S.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?S.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(l=>this.br(t,l,e).next((h=>{h||(r++,o.removeEntry(l,W.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=kn(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=ft(),i=ft();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Rs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return tc()?8:xu(Yl())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((l=>{o.result=l})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((l=>{o.result=l}))})).next((()=>{if(o.result)return;const l=new nf;return this.Ss(t,e,l).next((h=>{if(o.result=h,this.Vs)return this.bs(t,e,l,h.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(me()<=U.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ze(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(me()<=U.DEBUG&&V("QueryEngine","Query:",ze(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(me()<=U.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ze(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ie(e))):S.resolve())}ys(t,e){if(ao(e))return S.resolve(null);let r=ie(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Yr(e,null,"F"),r=ie(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const l=ft(...o);return this.ps.getDocuments(t,l).next((h=>this.indexManager.getMinOffset(t,r).next((f=>{const d=this.Ds(e,h);return this.Cs(e,d,l,f.readTime)?this.ys(t,Yr(e,null,"F")):this.vs(t,d,e,f)}))))})))))}ws(t,e,r,i){return ao(e)||i.isEqual(W.min())?S.resolve(null):this.ps.getDocuments(t,r).next((o=>{const l=this.Ds(e,o);return this.Cs(e,l,r,i)?S.resolve(null):(me()<=U.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ze(e)),this.vs(t,l,e,bu(i,en)).next((h=>h)))}))}Ds(t,e){let r=new lt(sh(t));return e.forEach(((i,o)=>{Ts(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return me()<=U.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ze(e)),this.ps.getDocumentsMatchingQuery(t,e,Ht.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((l=>{o=o.insert(l.key,l)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="LocalStore";class of{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new Et(B),this.xs=new ue((o=>ys(o)),Es),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kh(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function af(n,t,e,r){return new of(n,t,e,r)}async function Na(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const l=[],h=[];let f=ft();for(const d of i){l.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}for(const d of o){h.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next((d=>({Ls:d,removedBatchIds:l,addedBatchIds:h})))}))}))}function lf(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(h,f,d,I){const A=d.batch,R=A.keys();let b=S.resolve();return R.forEach((D=>{b=b.next((()=>I.getEntry(f,D))).next((x=>{const O=d.docVersions.get(D);Y(O!==null,48541),x.version.compareTo(O)<0&&(A.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),I.addEntry(x)))}))})),b.next((()=>h.mutationQueue.removeMutationBatch(f,A)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(h){let f=ft();for(let d=0;d<h.mutationResults.length;++d)h.mutationResults[d].transformResults.length>0&&(f=f.add(h.batch.mutations[d].key));return f})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function cf(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function uf(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=ds),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class _o{constructor(){this.activeTargetIds=uh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hf{constructor(){this.Mo=new _o,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new _o,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="ConnectivityMonitor";class Eo{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(yo,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){V(yo,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn=null;function ns(){return Nn===null?Nn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Nn++,"0x"+Nn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="RestConnection",df={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Hn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const l=ns(),h=this.zo(t,e.toUriEncodedString());V(Fr,`Sending RPC '${t}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,i,o);const{host:d}=new URL(h),I=is(d);return this.Jo(t,h,f,r,I).then((A=>(V(Fr,`Received RPC '${t}' ${l}: `,A),A)),(A=>{throw tr(Fr,`RPC '${t}' ${l} failed with error: `,A,"url: ",h,"request:",r),A}))}Ho(t,e,r,i,o,l){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Se})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=df[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class gf extends pf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const l=ns();return new Promise(((h,f)=>{const d=new zo;d.setWithCredentials(!0),d.listenOnce(Ho.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case xn.NO_ERROR:const A=d.getResponseJson();V(ut,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(A)),h(A);break;case xn.TIMEOUT:V(ut,`RPC '${t}' ${l} timed out`),f(new N(C.DEADLINE_EXCEEDED,"Request time out"));break;case xn.HTTP_ERROR:const R=d.getStatus();if(V(ut,`RPC '${t}' ${l} failed with status:`,R,"response text:",d.getResponseText()),R>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const D=b?.error;if(D&&D.status&&D.message){const x=(function(q){const z=q.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(z)>=0?z:C.UNKNOWN})(D.status);f(new N(x,D.message))}else f(new N(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new N(C.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:l,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(ut,`RPC '${t}' ${l} completed.`)}}));const I=JSON.stringify(i);V(ut,`RPC '${t}' ${l} sending request:`,i),d.send(e,"POST",I,r,15)}))}T_(t,e,r){const i=ns(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Wo(),h=Ko(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const I=o.join("");V(ut,`Creating RPC '${t}' stream ${i}: ${I}`,f);const A=l.createWebChannel(I,f);this.I_(A);let R=!1,b=!1;const D=new mf({Yo:O=>{b?V(ut,`Not sending because RPC '${t}' stream ${i} is closed:`,O):(R||(V(ut,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),V(ut,`RPC '${t}' stream ${i} sending:`,O),A.send(O))},Zo:()=>A.close()}),x=(O,q,z)=>{O.listen(q,(G=>{try{z(G)}catch(Tt){setTimeout((()=>{throw Tt}),0)}}))};return x(A,He.EventType.OPEN,(()=>{b||(V(ut,`RPC '${t}' stream ${i} transport opened.`),D.o_())})),x(A,He.EventType.CLOSE,(()=>{b||(b=!0,V(ut,`RPC '${t}' stream ${i} transport closed`),D.a_(),this.E_(A))})),x(A,He.EventType.ERROR,(O=>{b||(b=!0,tr(ut,`RPC '${t}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),D.a_(new N(C.UNAVAILABLE,"The operation could not be completed")))})),x(A,He.EventType.MESSAGE,(O=>{if(!b){const q=O.data[0];Y(!!q,16349);const z=q,G=z?.error||z[0]?.error;if(G){V(ut,`RPC '${t}' stream ${i} received error:`,G);const Tt=G.status;let It=(function(p){const g=Z[p];if(g!==void 0)return Ah(g)})(Tt),pt=G.message;It===void 0&&(It=C.INTERNAL,pt="Unknown error status: "+Tt+" with message "+G.message),b=!0,D.a_(new N(It,pt)),A.close()}else V(ut,`RPC '${t}' stream ${i} received:`,q),D.u_(q)}})),x(h,Go.STAT_EVENT,(O=>{O.stat===Gr.PROXY?V(ut,`RPC '${t}' stream ${i} detected buffering proxy`):O.stat===Gr.NOPROXY&&V(ut,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Ur(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){return new wh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="PersistentStream";class _f{constructor(t,e,r,i,o,l,h,f){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Oa(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(ae(e.toString()),ae("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new N(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return V(To,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(V(To,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yf extends _f{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Nh(t.writeResults,t.commitTime),r=ye(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=bh(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Dh(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{}class Tf extends Ef{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Go(t,ts(e,r),i,o,l))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(C.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Ho(t,ts(e,r),i,l,h,o))).catch((l=>{throw l.name==="FirebaseError"?(l.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new N(C.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class vf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ae(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="RemoteStore";class If{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((l=>{r.enqueueAndForget((async()=>{fn(this)&&(V(un,"Restarting streams for network reachability change."),await(async function(f){const d=$(f);d.Ea.add(4),await hn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await ir(d)})(this))}))})),this.Ra=new vf(r,i)}}async function ir(n){if(fn(n))for(const t of n.da)await t(!0)}async function hn(n){for(const t of n.da)await t(!1)}function fn(n){return $(n).Ea.size===0}async function xa(n,t,e){if(!ln(t))throw t;n.Ea.add(1),await hn(n),n.Ra.set("Offline"),e||(e=()=>cf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(un,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await ir(n)}))}function ka(n,t){return t().catch((e=>xa(n,e,t)))}async function or(n){const t=$(n),e=Kt(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ds;for(;Af(t);)try{const i=await uf(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,wf(t,i)}catch(i){await xa(t,i)}Ma(t)&&La(t)}function Af(n){return fn(n)&&n.Ta.length<10}function wf(n,t){n.Ta.push(t);const e=Kt(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Ma(n){return fn(n)&&!Kt(n).x_()&&n.Ta.length>0}function La(n){Kt(n).start()}async function Rf(n){Kt(n).ra()}async function Sf(n){const t=Kt(n);for(const e of n.Ta)t.ea(e.mutations)}async function Cf(n,t,e){const r=n.Ta.shift(),i=Is.from(r,t,e);await ka(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await or(n)}async function Pf(n,t){t&&Kt(n).X_&&await(async function(r,i){if((function(l){return Ih(l)&&l!==C.ABORTED})(i.code)){const o=r.Ta.shift();Kt(r).B_(),await ka(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await or(r)}})(n,t),Ma(n)&&La(n)}async function vo(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),V(un,"RemoteStore received new credentials");const r=fn(e);e.Ea.add(3),await hn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await ir(e)}async function bf(n,t){const e=$(n);t?(e.Ea.delete(2),await ir(e)):t||(e.Ea.add(2),await hn(e),e.Ra.set("Unknown"))}function Kt(n){return n.fa||(n.fa=(function(e,r,i){const o=$(e);return o.sa(),new yf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Rf.bind(null,n),r_:Pf.bind(null,n),ta:Sf.bind(null,n),na:Cf.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await or(n)):(await n.fa.stop(),n.Ta.length>0&&(V(un,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,h=new Ss(t,e,l,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fa(n,t){if(ae("AsyncQueue",`${t}: ${n}`),ln(n))return new N(C.UNAVAILABLE,`${t}: ${n}`);throw n}class Vf{constructor(){this.queries=Io(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=$(e),o=i.queries;i.queries=Io(),o.forEach(((l,h)=>{for(const f of h.Sa)f.onError(r)}))})(this,new N(C.ABORTED,"Firestore shutting down"))}}function Io(){return new ue((n=>ga(n)),ma)}function Df(n){n.Ca.forEach((t=>{t.next()}))}var Ao,wo;(wo=Ao||(Ao={})).Ma="default",wo.Cache="cache";const Nf="SyncEngine";class Of{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new ue((h=>ga(h)),ma),this.Iu=new Map,this.Eu=new Set,this.du=new Et(k.comparator),this.Au=new Map,this.Ru=new As,this.Vu={},this.mu=new Map,this.fu=we.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xf(n,t,e){const r=Ff(n);try{const i=await(function(l,h){const f=$(l),d=Q.now(),I=h.reduce(((b,D)=>b.add(D.key)),ft());let A,R;return f.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let D=Qn(),x=ft();return f.Ns.getEntries(b,I).next((O=>{D=O,D.forEach(((q,z)=>{z.isValidDocument()||(x=x.add(q))}))})).next((()=>f.localDocuments.getOverlayedDocuments(b,D))).next((O=>{A=O;const q=[];for(const z of h){const G=yh(z,A.get(z.key).overlayedDocument);G!=null&&q.push(new he(z.key,G,la(G.value.mapValue),Nt.exists(!0)))}return f.mutationQueue.addMutationBatch(b,d,q,h)})).next((O=>{R=O;const q=O.applyToLocalDocumentSet(A,x);return f.documentOverlayCache.saveOverlays(b,O.batchId,q)}))})).then((()=>({batchId:R.batchId,changes:ya(A)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(l,h,f){let d=l.Vu[l.currentUser.toKey()];d||(d=new Et(B)),d=d.insert(h,f),l.Vu[l.currentUser.toKey()]=d})(r,i.batchId,e),await ar(r,i.changes),await or(r.remoteStore)}catch(i){const o=Fa(i,"Failed to persist write");e.reject(o)}}function Ro(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,l)=>{const h=l.view.va(t);h.snapshot&&i.push(h.snapshot)})),(function(l,h){const f=$(l);f.onlineState=h;let d=!1;f.queries.forEach(((I,A)=>{for(const R of A.Sa)R.va(h)&&(d=!0)})),d&&Df(f)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kf(n,t){const e=$(n),r=t.batch.batchId;try{const i=await lf(e.localStore,t);Ba(e,r,null),Ua(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ar(e,i)}catch(i){await hs(i)}}async function Mf(n,t,e){const r=$(n);try{const i=await(function(l,h){const f=$(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let I;return f.mutationQueue.lookupMutationBatch(d,h).next((A=>(Y(A!==null,37113),I=A.keys(),f.mutationQueue.removeMutationBatch(d,A)))).next((()=>f.mutationQueue.performConsistencyCheck(d))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(d,I,h))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,I))).next((()=>f.localDocuments.getDocuments(d,I)))}))})(r.localStore,t);Ba(r,t,e),Ua(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ar(r,i)}catch(i){await hs(i)}}function Ua(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Ba(n,t,e){const r=$(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}async function ar(n,t,e){const r=$(n),i=[],o=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach(((h,f)=>{l.push(r.pu(f,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:e?.targetChanges.get(f.targetId)?.current;r.sharedClientState.updateQueryState(f.targetId,I?"current":"not-current")}if(d){i.push(d);const I=Rs.As(f.targetId,d);o.push(I)}})))})),await Promise.all(l),r.Pu.H_(i),await(async function(f,d){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>S.forEach(d,(R=>S.forEach(R.Es,(b=>I.persistence.referenceDelegate.addReference(A,R.targetId,b))).next((()=>S.forEach(R.ds,(b=>I.persistence.referenceDelegate.removeReference(A,R.targetId,b)))))))))}catch(A){if(!ln(A))throw A;V(sf,"Failed to update sequence numbers: "+A)}for(const A of d){const R=A.targetId;if(!A.fromCache){const b=I.Ms.get(R),D=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(D);I.Ms=I.Ms.insert(R,x)}}})(r.localStore,o))}async function Lf(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){V(Nf,"User change. New user:",t.toKey());const r=await Na(e.localStore,t);e.currentUser=t,(function(o,l){o.mu.forEach((h=>{h.forEach((f=>{f.reject(new N(C.CANCELLED,l))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ar(e,r.Ls)}}function Ff(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mf.bind(null,t),t}class Yn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=sr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return af(this.persistence,new rf,t.initialUser,this.serializer)}Cu(t){return new Da(ws.mi,this.serializer)}Du(t){return new hf}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yn.provider={build:()=>new Yn};class Uf extends Yn{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Y(this.persistence.referenceDelegate instanceof Jn,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $h(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Da((r=>Jn.mi(r,e)),this.serializer)}}class rs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ro(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lf.bind(null,this.syncEngine),await bf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Vf})()}createDatastore(t){const e=sr(t.databaseInfo.databaseId),r=(function(o){return new gf(o)})(t.databaseInfo);return(function(o,l,h,f){return new Tf(o,l,h,f)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,l,h){return new If(r,i,o,l,h)})(this.localStore,this.datastore,t.asyncQueue,(e=>Ro(this.syncEngine,e,0)),(function(){return Eo.v()?new Eo:new ff})())}createSyncEngine(t,e){return(function(i,o,l,h,f,d,I){const A=new Of(i,o,l,h,f,d);return I&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=$(e);V(un,"RemoteStore shutting down."),r.Ea.add(5),await hn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}rs.provider={build:()=>new rs};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="FirestoreClient";class Bf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=cs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async l=>{V(Wt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(r,(l=>(V(Wt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Fa(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Br(n,t){n.asyncQueue.verifyOperationInProgress(),V(Wt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Na(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function So(n,t){n.asyncQueue.verifyOperationInProgress();const e=await jf(n);V(Wt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>vo(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>vo(t.remoteStore,i))),n._onlineComponents=t}async function jf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Wt,"Using user provided OfflineComponentProvider");try{await Br(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;tr("Error using user provided cache. Falling back to memory cache: "+e),await Br(n,new Yn)}}else V(Wt,"Using default OfflineComponentProvider"),await Br(n,new Uf(void 0));return n._offlineComponents}async function $f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Wt,"Using user provided OnlineComponentProvider"),await So(n,n._uninitializedComponentsProvider._online)):(V(Wt,"Using default OnlineComponentProvider"),await So(n,new rs))),n._onlineComponents}function qf(n){return $f(n).then((t=>t.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="firestore.googleapis.com",Po=!0;class bo{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$a,this.ssl=Po}else this.host=t.host,this.ssl=t.ssl??Po;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Va;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Bh)throw new N(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ja(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new yu;switch(r.type){case"firstParty":return new Iu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Co.get(e);r&&(V("ComponentProvider","Removing Datastore"),Co.delete(e),r.terminate())})(this),Promise.resolve()}}function zf(n,t,e,r={}){n=Zo(n,lr);const i=is(t),o=n._getSettings(),l={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;i&&(Kl(`https://${h}`),Jl("Firestore",!0)),o.host!==$a&&o.host!==h&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:h,ssl:i,emulatorOptions:r};if(!Bn(f,l)&&(n._setSettings(f),r.mockUserToken)){let d,I;if(typeof r.mockUserToken=="string")d=r.mockUserToken,I=ht.MOCK_USER;else{d=Wl(r.mockUserToken,n._app?.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new N(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ht(A)}n._authCredentials=new Eu(new Xo(d,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Cs(this.firestore,t,this._query)}}class dt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(an(e,dt._jsonSchema))return new dt(t,r||null,new k(X.fromString(e.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:tt("string",dt._jsonSchemaVersion),referencePath:tt("string")};class zt extends Cs{constructor(t,e,r){super(t,e,eh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new k(t))}withConverter(t){return new zt(this.firestore,t,this._path)}}function Hf(n,t,...e){if(n=Ye(n),Jo("collection","path",t),n instanceof lr){const r=X.fromString(t,...e);return Xi(r),new zt(n,null,r)}{if(!(n instanceof dt||n instanceof zt))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Xi(r),new zt(n.firestore,null,r)}}function Gf(n,t,...e){if(n=Ye(n),arguments.length===1&&(t=cs.newId()),Jo("doc","path",t),n instanceof lr){const r=X.fromString(t,...e);return Qi(r),new dt(n,null,new k(r))}{if(!(n instanceof dt||n instanceof zt))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Qi(r),new dt(n.firestore,n instanceof zt?n.converter:null,new k(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="AsyncQueue";class Do{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Oa(this,"async_queue_retry"),this._c=()=>{const r=Ur();r&&V(Vo,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Ur();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ur();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new se;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ln(t))throw t;V(Vo,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,ae("INTERNAL UNHANDLED ERROR: ",No(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Ss.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:No(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function No(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class qa extends lr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Do,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Do(t),this._firestoreClient=void 0,await t}}}function Kf(n,t){const e=typeof n=="object"?n:au(),r=typeof n=="string"?n:Hn,i=nu(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Hl("firestore");o&&zf(i,...o)}return i}function Wf(n){if(n._terminated)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qf(n),n._firestoreClient}function Qf(n){const t=n._freezeSettings(),e=(function(i,o,l,h){return new Bu(i,o,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ja(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Bf(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rt(Vt.fromBase64String(t))}catch(e){throw new N(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rt(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(an(t,Rt._jsonSchema))return Rt.fromBase64String(t.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:tt("string",Rt._jsonSchemaVersion),bytes:tt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ot._jsonSchemaVersion}}static fromJSON(t){if(an(t,Ot._jsonSchema))return new Ot(t.latitude,t.longitude)}}Ot._jsonSchemaVersion="firestore/geoPoint/1.0",Ot._jsonSchema={type:tt("string",Ot._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(an(t,xt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new xt(t.vectorValues);throw new N(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xt._jsonSchemaVersion="firestore/vectorValue/1.0",xt._jsonSchema={type:tt("string",xt._jsonSchemaVersion),vectorValues:tt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=/^__.*__$/;class Jf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new he(t,this.data,this.fieldMask,e,this.fieldTransforms):new cn(t,this.data,e,this.fieldTransforms)}}function za(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class Vs{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Vs({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Zn(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(za(this.Ac)&&Xf.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Yf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||sr(t)}Cc(t,e,r,i=!1){return new Vs({Ac:t,methodName:e,Dc:r,path:at.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zf(n){const t=n._freezeSettings(),e=sr(n._databaseId);return new Yf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function td(n,t,e,r,i,o={}){const l=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);Wa("Data must be an object, but it was:",l,r);const h=Ga(r,l);let f,d;if(o.merge)f=new St(l.fieldMask),d=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const R=ed(t,A,e);if(!l.contains(R))throw new N(C.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);rd(I,R)||I.push(R)}f=new St(I),d=l.fieldTransforms.filter((A=>f.covers(A.field)))}else f=null,d=l.fieldTransforms;return new Jf(new wt(h),f,d)}class Ds extends bs{_toFieldTransform(t){return new ph(t.path,new rn)}isEqual(t){return t instanceof Ds}}function Ha(n,t){if(Ka(n=Ye(n)))return Wa("Unsupported field value:",t,n),Ga(n,t);if(n instanceof bs)return(function(r,i){if(!za(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let l=0;for(const h of r){let f=Ha(h,i.wc(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Q.fromDate(r);return{timestampValue:Zr(i.serializer,o)}}if(r instanceof Q){const o=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zr(i.serializer,o)}}if(r instanceof Ot)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:Rh(i.serializer,r._byteString)};if(r instanceof dt){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Pa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof xt)return(function(l,h){return{mapValue:{fields:{[oa]:{stringValue:aa},[Wr]:{arrayValue:{values:l.toArray().map((d=>{if(typeof d!="number")throw h.Sc("VectorValues must only contain numeric values.");return vs(h.serializer,d)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${us(r)}`)})(n,t)}function Ga(n,t){const e={};return ea(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ce(n,((r,i)=>{const o=Ha(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Ka(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof Ot||n instanceof Rt||n instanceof dt||n instanceof bs||n instanceof xt)}function Wa(n,t,e){if(!Ka(e)||!Yo(e)){const r=us(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function ed(n,t,e){if((t=Ye(t))instanceof Ps)return t._internalPath;if(typeof t=="string")return Qa(n,t);throw Zn("Field path arguments must be of type string or ",n,!1,void 0,e)}const nd=new RegExp("[~\\*/\\[\\]]");function Qa(n,t,e){if(t.search(nd)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ps(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zn(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new N(C.INVALID_ARGUMENT,h+n+f)}function rd(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new sd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ja("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class sd extends Xa{data(){return super.data()}}function Ja(n,t){return typeof t=="string"?Qa(n,t):t instanceof Ps?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class On{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ee extends Xa{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ja("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ee._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ee._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ee._jsonSchema={type:tt("string",Ee._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class Fn extends Ee{data(t={}){return super.data(t)}}class Je{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new On(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Fn(this._firestore,this._userDataWriter,r.key,r,new On(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((h=>{const f=new Fn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new On(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const f=new Fn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new On(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,I=-1;return h.type!==0&&(d=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),I=l.indexOf(h.doc.key)),{type:od(h.type),doc:f,oldIndex:d,newIndex:I}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Je._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=cs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function od(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}Je._jsonSchemaVersion="firestore/querySnapshot/1.0",Je._jsonSchema={type:tt("string",Je._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};function ad(n,t){const e=Zo(n.firestore,qa),r=Gf(n),i=id(n.converter,t);return ld(e,[td(Zf(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then((()=>r))}function ld(n,t){return(function(r,i){const o=new se;return r.asyncQueue.enqueueAndForget((async()=>xf(await qf(r),i,o))),o.promise})(Wf(n),t)}function Oo(){return new Ds("serverTimestamp")}(function(t,e=!0){(function(i){Se=i})(ou),$n(new Ze("firestore",((r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new qa(new Tu(r.getProvider("auth-internal")),new Au(l,r.getProvider("app-check-internal")),(function(d,I){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(d.options.projectId,I)})(l,i),l);return o={useFetchStreams:e,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),_e(Hi,Gi,t),_e(Hi,Gi,"esm2020")})();var cd="firebase",ud="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_e(cd,ud,"app");const hd={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},fd=jo(hd),dd=Kf(fd),pd={ANONYMOUS_REPORTS:"anonymous_reports"},Ya={HARASSMENT:"harassment",DISCRIMINATION:"discrimination",INAPPROPRIATE_CONTENT:"inappropriate_content",SPAM:"spam",VIOLENCE:"violence",HATE_SPEECH:"hate_speech",OTHER:"other"},md={PENDING:"pending",UNDER_REVIEW:"under_review",RESOLVED:"resolved",DISMISSED:"dismissed"};class Za{static sanitizeInput(t){return typeof t!="string"?t:t.trim().slice(0,1e3)}static validateReportData(t){const e=[],r=t||{},i=r.report_type||"",o=r.description||"",l={report_type:this.sanitizeInput(i),description:this.sanitizeInput(o)};(!i.trim()||!Object.values(Ya).includes(i.trim()))&&e.push("Please select a valid report type");const h=o.trim();return h.length<10&&e.push("Description must be at least 10 characters"),h.length>1e3&&e.push("Description must be less than 1000 characters"),{isValid:e.length===0,errors:e,sanitizedData:l}}}const gd=pd.ANONYMOUS_REPORTS,_d=async(n,t=null)=>{try{const e=Za.validateReportData(n);return e.isValid?{success:!0,id:(await ad(Hf(dd,gd),{report_type:e.sanitizedData.report_type,description:e.sanitizedData.description,status:md.PENDING,created_at:Oo(),updated_at:Oo(),has_recaptcha:!!t,ip_address:null,user_agent:null})).id}:{success:!1,error:e.errors.join(", ")}}catch{return{success:!1,error:"Failed to submit report. Please try again."}}};function tl({className:n}){const{executeRecaptcha:t,recaptchaLoaded:e}=Ol(),[r,i]=ee.useState({report_type:"",description:""}),[o,l]=ee.useState(!1),[h,f]=ee.useState({type:"",text:""}),d=ee.useRef(null);ee.useEffect(()=>{const R=d.current;R&&(R.style.height="auto",R.style.height=`${R.scrollHeight}px`)},[r.description]);const I=ee.useCallback(R=>{const{name:b,value:D}=R.target;i(x=>({...x,[b]:D})),h.text&&f({type:"",text:""})},[h.text]),A=ee.useCallback(async R=>{if(R.preventDefault(),!o){l(!0);try{let b=null;if(e)try{b=await t("submit_report")}catch{f({type:"error",text:"Bot protection verification failed. Please try again."});return}const D=Za.validateReportData(r);if(!D.isValid){f({type:"error",text:D.errors.join(", ")});return}const x=await _d(r,b);x.success?(f({type:"success",text:"Your report has been submitted successfully. Thank you for helping make our community safer."}),i({report_type:"",description:""})):f({type:"error",text:x.error||"An error occurred while submitting your report. Please try again."})}catch{f({type:"error",text:"An unexpected error occurred. Please try again."})}finally{l(!1)}}},[r,o,e,t]);return K.jsxs("div",{className:`report-form ${n||""}`.trim(),children:[K.jsxs("form",{onSubmit:A,children:[K.jsxs("div",{className:"form-group",children:[K.jsx("label",{htmlFor:"report_type",children:"Report Type"}),K.jsxs("select",{id:"report_type",name:"report_type",value:r.report_type,onChange:I,required:!0,className:"report-type-select",children:[K.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Select a report type"}),Object.entries(Ya).map(([R,b])=>K.jsx("option",{value:b,children:b.replace(/_/g," ").replace(/\b\w/g,D=>D.toUpperCase())},R))]})]}),K.jsxs("div",{className:"form-group",children:[K.jsx("label",{htmlFor:"description",children:"Description"}),K.jsx("textarea",{id:"description",name:"description",value:r.description,onChange:I,placeholder:"Please provide details about the incident. Be as specific as possible to help us investigate effectively.",rows:4,required:!0,maxLength:1e3,className:"report-description",ref:d}),K.jsxs("small",{className:"char-count",children:[r.description.length,"/1000"]})]}),h.text&&K.jsx("div",{className:`message ${h.type}`,children:h.text}),K.jsx("button",{type:"submit",disabled:o||!e,className:"submit-btn",children:o?"Submitting...":e?"Submit Report":"Loading security..."}),!e&&!0&&K.jsx("div",{className:"recaptcha-status",children:K.jsx("small",{children:"Loading security verification..."})})]}),K.jsxs("div",{className:"privacy-notice",children:[K.jsx("p",{children:"This report is completely anonymous. We do not collect or store any personal information that could identify you. Your IP address is not recorded."}),K.jsx("a",{href:"#",className:"privacy-link",children:"Privacy Notice"})]})]})}tl.propTypes={className:xl.string};function Td(){return K.jsxs("div",{className:"report-page",children:[K.jsxs("div",{className:"report-header",children:[K.jsx("h1",{children:"Anonymous Report"}),K.jsx("p",{className:"subtitle",children:"Help keep ZATech safe and respectful for everyone."})]}),K.jsx("div",{className:"report-form-card",children:K.jsx(tl,{})})]})}export{Td as default};
