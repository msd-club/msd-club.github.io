const Dc=()=>{};var lo={};/**
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
 */const _a=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Nc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,_=o>>2,I=(o&3)<<4|l>>4;let R=(l&15)<<2|d>>6,P=d&63;h||(P=64,a||(R=64)),r.push(e[_],e[I],e[R],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(_a(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Nc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||I==null)throw new kc;const R=o<<2|l>>4;if(r.push(R),d!==64){const P=l<<4&240|d>>2;if(r.push(P),I!==64){const k=d<<6&192|I;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oc=function(n){const t=_a(n);return ya.encodeByteArray(t,!0)},Zn=function(n){return Oc(n).replace(/\./g,"")},Mc=function(n){try{return ya.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lc=()=>xc().__FIREBASE_DEFAULTS__,Fc=()=>{if(typeof process>"u"||typeof lo>"u")return;const n=lo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Mc(n[1]);return t&&JSON.parse(t)},Cs=()=>{try{return Dc()||Lc()||Fc()||Uc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bc=n=>Cs()?.emulatorHosts?.[n],jc=n=>{const t=Bc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ea=()=>Cs()?.config;/**
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
 */class qc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ps(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $c(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function zc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zn(JSON.stringify(e)),Zn(JSON.stringify(a)),""].join(".")}const sn={};function Gc(){const n={prod:[],emulator:[]};for(const t of Object.keys(sn))sn[t]?n.emulator.push(t):n.prod.push(t);return n}function Hc(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ho=!1;function Kc(n,t){if(typeof window>"u"||typeof document>"u"||!Ps(window.location.host)||sn[n]===t||sn[n]||ho)return;sn[n]=t;function e(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=Gc().prod.length>0;function a(){const R=document.getElementById(r);R&&R.remove()}function l(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function h(R,P){R.setAttribute("width","24"),R.setAttribute("id",P),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function d(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{ho=!0,a()},R}function _(R,P){R.setAttribute("id",P),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function I(){const R=Hc(r),P=e("text"),k=document.getElementById(P)||document.createElement("span"),M=e("learnmore"),b=document.getElementById(M)||document.createElement("a"),z=e("preprendIcon"),G=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const H=R.element;l(H),_(b,M);const _t=d();h(G,z),H.append(G,k,b,_t),document.body.appendChild(H)}o?(k.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function Wc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qc(){const n=Cs()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xc(){return!Qc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yc(){try{return typeof indexedDB=="object"}catch{return!1}}function Jc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
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
 */const Zc="FirebaseError";class ke extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Zc,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?tl(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ke(i,l,r)}}function tl(n,t){return n.replace(el,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const el=/\{\$([^}]+)}/g;function tr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(fo(o)&&fo(a)){if(!tr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function fo(n){return n!==null&&typeof n=="object"}/**
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
 */function er(n){return n&&n._delegate?n._delegate:n}class hn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ce="[DEFAULT]";/**
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
 */class nl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new qc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sl(t))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ce){return this.instances.has(t)}getOptions(t=ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ce){return this.component?this.component.multipleInstances?t:ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rl(n){return n===ce?void 0:n}function sl(n){return n.instantiationMode==="EAGER"}/**
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
 */class il{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new nl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const ol={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},al=$.INFO,ul={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},cl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=ul[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ia{constructor(t){this.name=t,this._logLevel=al,this._logHandler=cl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ol[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const ll=(n,t)=>t.some(e=>n instanceof e);let mo,po;function hl(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fl(){return po||(po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const va=new WeakMap,os=new WeakMap,Aa=new WeakMap,Yr=new WeakMap,Vs=new WeakMap;function dl(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Kt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&va.set(e,n)}).catch(()=>{}),Vs.set(t,n),t}function ml(n){if(os.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});os.set(n,t)}let as={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return os.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Aa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Kt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function pl(n){as=n(as)}function gl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Jr(this),t,...e);return Aa.set(r,t.sort?t.sort():[t]),Kt(r)}:fl().includes(n)?function(...t){return n.apply(Jr(this),t),Kt(va.get(this))}:function(...t){return Kt(n.apply(Jr(this),t))}}function _l(n){return typeof n=="function"?gl(n):(n instanceof IDBTransaction&&ml(n),ll(n,hl())?new Proxy(n,as):n)}function Kt(n){if(n instanceof IDBRequest)return dl(n);if(Yr.has(n))return Yr.get(n);const t=_l(n);return t!==n&&(Yr.set(n,t),Vs.set(t,n)),t}const Jr=n=>Vs.get(n);function yl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=Kt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Kt(a.result),h.oldVersion,h.newVersion,Kt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const El=["get","getKey","getAll","getAllKeys","count"],Tl=["put","add","delete","clear"],Zr=new Map;function go(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Zr.get(t))return Zr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Tl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||El.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&h.done]))[0]};return Zr.set(t,o),o}pl(n=>({...n,get:(t,e,r)=>go(t,e)||n.get(t,e,r),has:(t,e)=>!!go(t,e)||n.has(t,e)}));/**
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
 */class Il{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(vl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function vl(n){return n.getComponent()?.type==="VERSION"}const us="@firebase/app",_o="0.14.6";/**
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
 */const Lt=new Ia("@firebase/app"),Al="@firebase/app-compat",wl="@firebase/analytics-compat",Rl="@firebase/analytics",Sl="@firebase/app-check-compat",Cl="@firebase/app-check",Pl="@firebase/auth",Vl="@firebase/auth-compat",bl="@firebase/database",Dl="@firebase/data-connect",Nl="@firebase/database-compat",kl="@firebase/functions",Ol="@firebase/functions-compat",Ml="@firebase/installations",xl="@firebase/installations-compat",Ll="@firebase/messaging",Fl="@firebase/messaging-compat",Ul="@firebase/performance",Bl="@firebase/performance-compat",jl="@firebase/remote-config",ql="@firebase/remote-config-compat",$l="@firebase/storage",zl="@firebase/storage-compat",Gl="@firebase/firestore",Hl="@firebase/ai",Kl="@firebase/firestore-compat",Wl="firebase",Ql="12.6.0";/**
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
 */const cs="[DEFAULT]",Xl={[us]:"fire-core",[Al]:"fire-core-compat",[Rl]:"fire-analytics",[wl]:"fire-analytics-compat",[Cl]:"fire-app-check",[Sl]:"fire-app-check-compat",[Pl]:"fire-auth",[Vl]:"fire-auth-compat",[bl]:"fire-rtdb",[Dl]:"fire-data-connect",[Nl]:"fire-rtdb-compat",[kl]:"fire-fn",[Ol]:"fire-fn-compat",[Ml]:"fire-iid",[xl]:"fire-iid-compat",[Ll]:"fire-fcm",[Fl]:"fire-fcm-compat",[Ul]:"fire-perf",[Bl]:"fire-perf-compat",[jl]:"fire-rc",[ql]:"fire-rc-compat",[$l]:"fire-gcs",[zl]:"fire-gcs-compat",[Gl]:"fire-fst",[Kl]:"fire-fst-compat",[Hl]:"fire-vertex","fire-js":"fire-js",[Wl]:"fire-js-all"};/**
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
 */const nr=new Map,Yl=new Map,ls=new Map;function yo(n,t){try{n.container.addComponent(t)}catch(e){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function rr(n){const t=n.name;if(ls.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;ls.set(t,n);for(const e of nr.values())yo(e,n);for(const e of Yl.values())yo(e,n);return!0}function Jl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Zl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const th={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new Ta("app","Firebase",th);/**
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
 */class eh{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const nh=Ql;function wa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:cs,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(e||(e=Ea()),!e)throw Wt.create("no-options");const o=nr.get(i);if(o){if(tr(e,o.options)&&tr(r,o.config))return o;throw Wt.create("duplicate-app",{appName:i})}const a=new il(i);for(const h of ls.values())a.addComponent(h);const l=new eh(e,r,a);return nr.set(i,l),l}function rh(n=cs){const t=nr.get(n);if(!t&&n===cs&&Ea())return wa();if(!t)throw Wt.create("no-app",{appName:n});return t}function Re(n,t,e){let r=Xl[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(a.join(" "));return}rr(new hn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const sh="firebase-heartbeat-database",ih=1,fn="firebase-heartbeat-store";let ts=null;function Ra(){return ts||(ts=yl(sh,ih,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(fn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),ts}async function oh(n){try{const e=(await Ra()).transaction(fn),r=await e.objectStore(fn).get(Sa(n));return await e.done,r}catch(t){if(t instanceof ke)Lt.warn(t.message);else{const e=Wt.create("idb-get",{originalErrorMessage:t?.message});Lt.warn(e.message)}}}async function Eo(n,t){try{const r=(await Ra()).transaction(fn,"readwrite");await r.objectStore(fn).put(t,Sa(n)),await r.done}catch(e){if(e instanceof ke)Lt.warn(e.message);else{const r=Wt.create("idb-set",{originalErrorMessage:e?.message});Lt.warn(r.message)}}}function Sa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ah=1024,uh=30;class ch{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new hh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=To();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>uh){const i=fh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Lt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=To(),{heartbeatsToSend:e,unsentEntries:r}=lh(this._heartbeatsCache.heartbeats),i=Zn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Lt.warn(t),""}}}function To(){return new Date().toISOString().substring(0,10)}function lh(n,t=ah){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Io(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Io(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class hh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yc()?Jc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await oh(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Io(n){return Zn(JSON.stringify({version:2,heartbeats:n})).length}function fh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function dh(n){rr(new hn("platform-logger",t=>new Il(t),"PRIVATE")),rr(new hn("heartbeat",t=>new ch(t),"PRIVATE")),Re(us,_o,n),Re(us,_o,"esm2020"),Re("fire-js","")}dh("");var mh="firebase",ph="12.6.0";/**
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
 */Re(mh,ph,"app");var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,Ca;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function g(){}g.prototype=m.prototype,E.F=m.prototype,E.prototype=new g,E.prototype.constructor=E,E.D=function(T,y,A){for(var p=Array(arguments.length-2),It=2;It<arguments.length;It++)p[It-2]=arguments[It];return m.prototype[y].apply(T,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,g){g||(g=0);const T=Array(16);if(typeof m=="string")for(var y=0;y<16;++y)T[y]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(y=0;y<16;++y)T[y]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=E.g[0],g=E.g[1],y=E.g[2];let A=E.g[3],p;p=m+(A^g&(y^A))+T[0]+3614090360&4294967295,m=g+(p<<7&4294967295|p>>>25),p=A+(y^m&(g^y))+T[1]+3905402710&4294967295,A=m+(p<<12&4294967295|p>>>20),p=y+(g^A&(m^g))+T[2]+606105819&4294967295,y=A+(p<<17&4294967295|p>>>15),p=g+(m^y&(A^m))+T[3]+3250441966&4294967295,g=y+(p<<22&4294967295|p>>>10),p=m+(A^g&(y^A))+T[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=A+(y^m&(g^y))+T[5]+1200080426&4294967295,A=m+(p<<12&4294967295|p>>>20),p=y+(g^A&(m^g))+T[6]+2821735955&4294967295,y=A+(p<<17&4294967295|p>>>15),p=g+(m^y&(A^m))+T[7]+4249261313&4294967295,g=y+(p<<22&4294967295|p>>>10),p=m+(A^g&(y^A))+T[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=A+(y^m&(g^y))+T[9]+2336552879&4294967295,A=m+(p<<12&4294967295|p>>>20),p=y+(g^A&(m^g))+T[10]+4294925233&4294967295,y=A+(p<<17&4294967295|p>>>15),p=g+(m^y&(A^m))+T[11]+2304563134&4294967295,g=y+(p<<22&4294967295|p>>>10),p=m+(A^g&(y^A))+T[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=A+(y^m&(g^y))+T[13]+4254626195&4294967295,A=m+(p<<12&4294967295|p>>>20),p=y+(g^A&(m^g))+T[14]+2792965006&4294967295,y=A+(p<<17&4294967295|p>>>15),p=g+(m^y&(A^m))+T[15]+1236535329&4294967295,g=y+(p<<22&4294967295|p>>>10),p=m+(y^A&(g^y))+T[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=A+(g^y&(m^g))+T[6]+3225465664&4294967295,A=m+(p<<9&4294967295|p>>>23),p=y+(m^g&(A^m))+T[11]+643717713&4294967295,y=A+(p<<14&4294967295|p>>>18),p=g+(A^m&(y^A))+T[0]+3921069994&4294967295,g=y+(p<<20&4294967295|p>>>12),p=m+(y^A&(g^y))+T[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=A+(g^y&(m^g))+T[10]+38016083&4294967295,A=m+(p<<9&4294967295|p>>>23),p=y+(m^g&(A^m))+T[15]+3634488961&4294967295,y=A+(p<<14&4294967295|p>>>18),p=g+(A^m&(y^A))+T[4]+3889429448&4294967295,g=y+(p<<20&4294967295|p>>>12),p=m+(y^A&(g^y))+T[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=A+(g^y&(m^g))+T[14]+3275163606&4294967295,A=m+(p<<9&4294967295|p>>>23),p=y+(m^g&(A^m))+T[3]+4107603335&4294967295,y=A+(p<<14&4294967295|p>>>18),p=g+(A^m&(y^A))+T[8]+1163531501&4294967295,g=y+(p<<20&4294967295|p>>>12),p=m+(y^A&(g^y))+T[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=A+(g^y&(m^g))+T[2]+4243563512&4294967295,A=m+(p<<9&4294967295|p>>>23),p=y+(m^g&(A^m))+T[7]+1735328473&4294967295,y=A+(p<<14&4294967295|p>>>18),p=g+(A^m&(y^A))+T[12]+2368359562&4294967295,g=y+(p<<20&4294967295|p>>>12),p=m+(g^y^A)+T[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=A+(m^g^y)+T[8]+2272392833&4294967295,A=m+(p<<11&4294967295|p>>>21),p=y+(A^m^g)+T[11]+1839030562&4294967295,y=A+(p<<16&4294967295|p>>>16),p=g+(y^A^m)+T[14]+4259657740&4294967295,g=y+(p<<23&4294967295|p>>>9),p=m+(g^y^A)+T[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=A+(m^g^y)+T[4]+1272893353&4294967295,A=m+(p<<11&4294967295|p>>>21),p=y+(A^m^g)+T[7]+4139469664&4294967295,y=A+(p<<16&4294967295|p>>>16),p=g+(y^A^m)+T[10]+3200236656&4294967295,g=y+(p<<23&4294967295|p>>>9),p=m+(g^y^A)+T[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=A+(m^g^y)+T[0]+3936430074&4294967295,A=m+(p<<11&4294967295|p>>>21),p=y+(A^m^g)+T[3]+3572445317&4294967295,y=A+(p<<16&4294967295|p>>>16),p=g+(y^A^m)+T[6]+76029189&4294967295,g=y+(p<<23&4294967295|p>>>9),p=m+(g^y^A)+T[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=A+(m^g^y)+T[12]+3873151461&4294967295,A=m+(p<<11&4294967295|p>>>21),p=y+(A^m^g)+T[15]+530742520&4294967295,y=A+(p<<16&4294967295|p>>>16),p=g+(y^A^m)+T[2]+3299628645&4294967295,g=y+(p<<23&4294967295|p>>>9),p=m+(y^(g|~A))+T[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=A+(g^(m|~y))+T[7]+1126891415&4294967295,A=m+(p<<10&4294967295|p>>>22),p=y+(m^(A|~g))+T[14]+2878612391&4294967295,y=A+(p<<15&4294967295|p>>>17),p=g+(A^(y|~m))+T[5]+4237533241&4294967295,g=y+(p<<21&4294967295|p>>>11),p=m+(y^(g|~A))+T[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=A+(g^(m|~y))+T[3]+2399980690&4294967295,A=m+(p<<10&4294967295|p>>>22),p=y+(m^(A|~g))+T[10]+4293915773&4294967295,y=A+(p<<15&4294967295|p>>>17),p=g+(A^(y|~m))+T[1]+2240044497&4294967295,g=y+(p<<21&4294967295|p>>>11),p=m+(y^(g|~A))+T[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=A+(g^(m|~y))+T[15]+4264355552&4294967295,A=m+(p<<10&4294967295|p>>>22),p=y+(m^(A|~g))+T[6]+2734768916&4294967295,y=A+(p<<15&4294967295|p>>>17),p=g+(A^(y|~m))+T[13]+1309151649&4294967295,g=y+(p<<21&4294967295|p>>>11),p=m+(y^(g|~A))+T[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=A+(g^(m|~y))+T[11]+3174756917&4294967295,A=m+(p<<10&4294967295|p>>>22),p=y+(m^(A|~g))+T[2]+718787259&4294967295,y=A+(p<<15&4294967295|p>>>17),p=g+(A^(y|~m))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,m){m===void 0&&(m=E.length);const g=m-this.blockSize,T=this.C;let y=this.h,A=0;for(;A<m;){if(y==0)for(;A<=g;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(T[y++]=E.charCodeAt(A++),y==this.blockSize){i(this,T),y=0;break}}else for(;A<m;)if(T[y++]=E[A++],y==this.blockSize){i(this,T),y=0;break}}this.h=y,this.o+=m},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;m=this.o*8;for(var g=E.length-8;g<E.length;++g)E[g]=m&255,m/=256;for(this.v(E),E=Array(16),m=0,g=0;g<4;++g)for(let T=0;T<32;T+=8)E[m++]=this.g[g]>>>T&255;return E};function o(E,m){var g=l;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=m(E)}function a(E,m){this.h=m;const g=[];let T=!0;for(let y=E.length-1;y>=0;y--){const A=E[y]|0;T&&A==m||(g[y]=A,T=!1)}this.g=g}var l={};function h(E){return-128<=E&&E<128?o(E,function(m){return new a([m|0],m<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(E<0)return b(d(-E));const m=[];let g=1;for(let T=0;E>=g;T++)m[T]=E/g|0,g*=4294967296;return new a(m,0)}function _(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return b(_(E.substring(1),m));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(m,8));let T=I;for(let A=0;A<E.length;A+=8){var y=Math.min(8,E.length-A);const p=parseInt(E.substring(A,A+y),m);y<8?(y=d(Math.pow(m,y)),T=T.j(y).add(d(p))):(T=T.j(g),T=T.add(d(p)))}return T}var I=h(0),R=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-b(this).m();let E=0,m=1;for(let g=0;g<this.g.length;g++){const T=this.i(g);E+=(T>=0?T:4294967296+T)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(M(this))return"-"+b(this).toString(E);const m=d(Math.pow(E,6));var g=this;let T="";for(;;){const y=_t(g,m).g;g=z(g,y.j(m));let A=((g.g.length>0?g.g[0]:g.h)>>>0).toString(E);if(g=y,k(g))return A+T;for(;A.length<6;)A="0"+A;T=A+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=z(this,E),M(E)?-1:k(E)?0:1};function b(E){const m=E.g.length,g=[];for(let T=0;T<m;T++)g[T]=~E.g[T];return new a(g,~E.h).add(R)}n.abs=function(){return M(this)?b(this):this},n.add=function(E){const m=Math.max(this.g.length,E.g.length),g=[];let T=0;for(let y=0;y<=m;y++){let A=T+(this.i(y)&65535)+(E.i(y)&65535),p=(A>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);T=p>>>16,A&=65535,p&=65535,g[y]=p<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function z(E,m){return E.add(b(m))}n.j=function(E){if(k(this)||k(E))return I;if(M(this))return M(E)?b(this).j(b(E)):b(b(this).j(E));if(M(E))return b(this.j(b(E)));if(this.l(P)<0&&E.l(P)<0)return d(this.m()*E.m());const m=this.g.length+E.g.length,g=[];for(var T=0;T<2*m;T++)g[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<E.g.length;y++){const A=this.i(T)>>>16,p=this.i(T)&65535,It=E.i(y)>>>16,re=E.i(y)&65535;g[2*T+2*y]+=p*re,G(g,2*T+2*y),g[2*T+2*y+1]+=A*re,G(g,2*T+2*y+1),g[2*T+2*y+1]+=p*It,G(g,2*T+2*y+1),g[2*T+2*y+2]+=A*It,G(g,2*T+2*y+2)}for(E=0;E<m;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=m;E<2*m;E++)g[E]=0;return new a(g,0)};function G(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function H(E,m){this.g=E,this.h=m}function _t(E,m){if(k(m))throw Error("division by zero");if(k(E))return new H(I,I);if(M(E))return m=_t(b(E),m),new H(b(m.g),b(m.h));if(M(m))return m=_t(E,b(m)),new H(b(m.g),m.h);if(E.g.length>30){if(M(E)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var g=R,T=m;T.l(E)<=0;)g=Tt(g),T=Tt(T);var y=ot(g,1),A=ot(T,1);for(T=ot(T,2),g=ot(g,2);!k(T);){var p=A.add(T);p.l(E)<=0&&(y=y.add(g),A=p),T=ot(T,1),g=ot(g,1)}return m=z(E,y.j(m)),new H(y,m)}for(y=I;E.l(m)>=0;){for(g=Math.max(1,Math.floor(E.m()/m.m())),T=Math.ceil(Math.log(g)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),A=d(g),p=A.j(m);M(p)||p.l(E)>0;)g-=T,A=d(g),p=A.j(m);k(A)&&(A=R),y=y.add(A),E=z(E,p)}return new H(y,E)}n.B=function(E){return _t(this,E).h},n.and=function(E){const m=Math.max(this.g.length,E.g.length),g=[];for(let T=0;T<m;T++)g[T]=this.i(T)&E.i(T);return new a(g,this.h&E.h)},n.or=function(E){const m=Math.max(this.g.length,E.g.length),g=[];for(let T=0;T<m;T++)g[T]=this.i(T)|E.i(T);return new a(g,this.h|E.h)},n.xor=function(E){const m=Math.max(this.g.length,E.g.length),g=[];for(let T=0;T<m;T++)g[T]=this.i(T)^E.i(T);return new a(g,this.h^E.h)};function Tt(E){const m=E.g.length+1,g=[];for(let T=0;T<m;T++)g[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(g,E.h)}function ot(E,m){const g=m>>5;m%=32;const T=E.g.length-g,y=[];for(let A=0;A<T;A++)y[A]=m>0?E.i(A+g)>>>m|E.i(A+g+1)<<32-m:E.i(A+g);return new a(y,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ca=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=_,Qt=a}).apply(typeof vo<"u"?vo:typeof self<"u"?self:typeof window<"u"?window:{});var qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pa,tn,Va,Kn,hs,ba,Da,Na;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof qn=="object"&&qn];for(var u=0;u<s.length;++u){var c=s[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var c=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var v=s[f];if(!(v in c))break t;c=c[v]}s=s[s.length-1],f=c[s],u=u(f),u!=f&&u!=null&&t(c,s,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(u){var c=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&c.push([f,u[f]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function h(s,u,c){return s.call.apply(s.bind,arguments)}function d(s,u,c){return d=h,d.apply(null,arguments)}function _(s,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function I(s,u){function c(){}c.prototype=u.prototype,s.Z=u.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(f,v,w){for(var V=Array(arguments.length-2),U=2;U<arguments.length;U++)V[U-2]=arguments[U];return u.prototype[v].apply(f,V)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function P(s){const u=s.length;if(u>0){const c=Array(u);for(let f=0;f<u;f++)c[f]=s[f];return c}return[]}function k(s,u){for(let f=1;f<arguments.length;f++){const v=arguments[f];var c=typeof v;if(c=c!="object"?c:v?Array.isArray(v)?"array":c:"null",c=="array"||c=="object"&&typeof v.length=="number"){c=s.length||0;const w=v.length||0;s.length=c+w;for(let V=0;V<w;V++)s[c+V]=v[V]}else s.push(v)}}class M{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function b(s){a.setTimeout(()=>{throw s},0)}function z(){var s=E;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,c){const f=H.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var H=new M(()=>new _t,s=>s.reset());class _t{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Tt,ot=!1,E=new G,m=()=>{const s=Promise.resolve(void 0);Tt=()=>{s.then(g)}};function g(){for(var s;s=z();){try{s.h.call(s.g)}catch(c){b(c)}var u=H;u.j(s),u.h<100&&(u.h++,s.next=u.g,u.g=s)}ot=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};a.addEventListener("test",c,u),a.removeEventListener("test",c,u)}catch{}return s})();function p(s){return/^[\s\xa0]*$/.test(s)}function It(s,u){y.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,u)}I(It,y),It.prototype.init=function(s,u){const c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget,u||(c=="mouseover"?u=s.fromElement:c=="mouseout"&&(u=s.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),Zu=0;function tc(s,u,c,f,v){this.listener=s,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=v,this.key=++Zu,this.da=this.fa=!1}function Cn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Pn(s,u,c){for(const f in s)u.call(c,s[f],f,s)}function ec(s,u){for(const c in s)u.call(void 0,s[c],c,s)}function ci(s){const u={};for(const c in s)u[c]=s[c];return u}const li="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hi(s,u){let c,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(c in f)s[c]=f[c];for(let w=0;w<li.length;w++)c=li[w],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function Vn(s){this.src=s,this.g={},this.h=0}Vn.prototype.add=function(s,u,c,f,v){const w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);const V=Pr(s,u,f,v);return V>-1?(u=s[V],c||(u.fa=!1)):(u=new tc(u,this.src,w,!!f,v),u.fa=c,s.push(u)),u};function Cr(s,u){const c=u.type;if(c in s.g){var f=s.g[c],v=Array.prototype.indexOf.call(f,u,void 0),w;(w=v>=0)&&Array.prototype.splice.call(f,v,1),w&&(Cn(u),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Pr(s,u,c,f){for(let v=0;v<s.length;++v){const w=s[v];if(!w.da&&w.listener==u&&w.capture==!!c&&w.ha==f)return v}return-1}var Vr="closure_lm_"+(Math.random()*1e6|0),br={};function fi(s,u,c,f,v){if(Array.isArray(u)){for(let w=0;w<u.length;w++)fi(s,u[w],c,f,v);return null}return c=pi(c),s&&s[re]?s.J(u,c,l(f)?!!f.capture:!1,v):nc(s,u,c,!1,f,v)}function nc(s,u,c,f,v,w){if(!u)throw Error("Invalid event type");const V=l(v)?!!v.capture:!!v;let U=Nr(s);if(U||(s[Vr]=U=new Vn(s)),c=U.add(u,c,f,V,w),c.proxy)return c;if(f=rc(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)A||(v=V),v===void 0&&(v=!1),s.addEventListener(u.toString(),f,v);else if(s.attachEvent)s.attachEvent(mi(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function rc(){function s(c){return u.call(s.src,s.listener,c)}const u=sc;return s}function di(s,u,c,f,v){if(Array.isArray(u))for(var w=0;w<u.length;w++)di(s,u[w],c,f,v);else f=l(f)?!!f.capture:!!f,c=pi(c),s&&s[re]?(s=s.i,w=String(u).toString(),w in s.g&&(u=s.g[w],c=Pr(u,c,f,v),c>-1&&(Cn(u[c]),Array.prototype.splice.call(u,c,1),u.length==0&&(delete s.g[w],s.h--)))):s&&(s=Nr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Pr(u,c,f,v)),(c=s>-1?u[s]:null)&&Dr(c))}function Dr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[re])Cr(u.i,s);else{var c=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(c,f,s.capture):u.detachEvent?u.detachEvent(mi(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=Nr(u))?(Cr(c,s),c.h==0&&(c.src=null,u[Vr]=null)):Cn(s)}}}function mi(s){return s in br?br[s]:br[s]="on"+s}function sc(s,u){if(s.da)s=!0;else{u=new It(u,this);const c=s.listener,f=s.ha||s.src;s.fa&&Dr(s),s=c.call(f,u)}return s}function Nr(s){return s=s[Vr],s instanceof Vn?s:null}var kr="__closure_events_fn_"+(Math.random()*1e9>>>0);function pi(s){return typeof s=="function"?s:(s[kr]||(s[kr]=function(u){return s.handleEvent(u)}),s[kr])}function dt(){T.call(this),this.i=new Vn(this),this.M=this,this.G=null}I(dt,T),dt.prototype[re]=!0,dt.prototype.removeEventListener=function(s,u,c,f){di(this,s,u,c,f)};function yt(s,u){var c,f=s.G;if(f)for(c=[];f;f=f.G)c.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new y(u,s);else if(u instanceof y)u.target=u.target||s;else{var v=u;u=new y(f,s),hi(u,v)}v=!0;let w,V;if(c)for(V=c.length-1;V>=0;V--)w=u.g=c[V],v=bn(w,f,!0,u)&&v;if(w=u.g=s,v=bn(w,f,!0,u)&&v,v=bn(w,f,!1,u)&&v,c)for(V=0;V<c.length;V++)w=u.g=c[V],v=bn(w,f,!1,u)&&v}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var s=this.i;for(const u in s.g){const c=s.g[u];for(let f=0;f<c.length;f++)Cn(c[f]);delete s.g[u],s.h--}}this.G=null},dt.prototype.J=function(s,u,c,f){return this.i.add(String(s),u,!1,c,f)},dt.prototype.K=function(s,u,c,f){return this.i.add(String(s),u,!0,c,f)};function bn(s,u,c,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let w=0;w<u.length;++w){const V=u[w];if(V&&!V.da&&V.capture==c){const U=V.listener,rt=V.ha||V.src;V.fa&&Cr(s.i,V),v=U.call(rt,f)!==!1&&v}}return v&&!f.defaultPrevented}function ic(s,u){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(s,u||0)}function gi(s){s.g=ic(()=>{s.g=null,s.i&&(s.i=!1,gi(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class oc extends T{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:gi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(s){T.call(this),this.h=s,this.g={}}I(Fe,T);var _i=[];function yi(s){Pn(s.g,function(u,c){this.g.hasOwnProperty(c)&&Dr(u)},s),s.g={}}Fe.prototype.N=function(){Fe.Z.N.call(this),yi(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Or=a.JSON.stringify,ac=a.JSON.parse,uc=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function Ei(){}function Ti(){}var Ue={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Mr(){y.call(this,"d")}I(Mr,y);function xr(){y.call(this,"c")}I(xr,y);var se={},Ii=null;function Dn(){return Ii=Ii||new dt}se.Ia="serverreachability";function vi(s){y.call(this,se.Ia,s)}I(vi,y);function Be(s){const u=Dn();yt(u,new vi(u))}se.STAT_EVENT="statevent";function Ai(s,u){y.call(this,se.STAT_EVENT,s),this.stat=u}I(Ai,y);function Et(s){const u=Dn();yt(u,new Ai(u,s))}se.Ja="timingevent";function wi(s,u){y.call(this,se.Ja,s),this.size=u}I(wi,y);function je(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},u)}function qe(){this.g=!0}qe.prototype.ua=function(){this.g=!1};function cc(s,u,c,f,v,w){s.info(function(){if(s.g)if(w){var V="",U=w.split("&");for(let W=0;W<U.length;W++){var rt=U[W].split("=");if(rt.length>1){const at=rt[0];rt=rt[1];const Pt=at.split("_");V=Pt.length>=2&&Pt[1]=="type"?V+(at+"="+rt+"&"):V+(at+"=redacted&")}}}else V=null;else V=w;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+u+`
`+c+`
`+V})}function lc(s,u,c,f,v,w,V){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+u+`
`+c+`
`+w+" "+V})}function ye(s,u,c,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+fc(s,c)+(f?" "+f:"")})}function hc(s,u){s.info(function(){return"TIMEOUT: "+u})}qe.prototype.info=function(){};function fc(s,u){if(!s.g)return u;if(!u)return null;try{const w=JSON.parse(u);if(w){for(s=0;s<w.length;s++)if(Array.isArray(w[s])){var c=w[s];if(!(c.length<2)){var f=c[1];if(Array.isArray(f)&&!(f.length<1)){var v=f[0];if(v!="noop"&&v!="stop"&&v!="close")for(let V=1;V<f.length;V++)f[V]=""}}}}return Or(w)}catch{return u}}var Nn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ri={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Si;function Lr(){}I(Lr,Ei),Lr.prototype.g=function(){return new XMLHttpRequest},Si=new Lr;function $e(s){return encodeURIComponent(String(s))}function dc(s){var u=1;s=s.split(":");const c=[];for(;u>0&&s.length;)c.push(s.shift()),u--;return s.length&&c.push(s.join(":")),c}function Bt(s,u,c,f){this.j=s,this.i=u,this.l=c,this.S=f||1,this.V=new Fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ci}function Ci(){this.i=null,this.g="",this.h=!1}var Pi={},Fr={};function Ur(s,u,c){s.M=1,s.A=On(Ct(u)),s.u=c,s.R=!0,Vi(s,null)}function Vi(s,u){s.F=Date.now(),kn(s),s.B=Ct(s.A);var c=s.B,f=s.S;Array.isArray(f)||(f=[String(f)]),qi(c.i,"t",f),s.C=0,c=s.j.L,s.h=new Ci,s.g=oo(s.j,c?u:null,!s.u),s.P>0&&(s.O=new oc(d(s.Y,s,s.g),s.P)),u=s.V,c=s.g,f=s.ba;var v="readystatechange";Array.isArray(v)||(v&&(_i[0]=v.toString()),v=_i);for(let w=0;w<v.length;w++){const V=fi(c,v[w],f||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=s.J?ci(s.J):{},s.u?(s.v||(s.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,u)):(s.v="GET",s.g.ea(s.B,s.v,null,u)),Be(),cc(s.i,s.v,s.B,s.l,s.S,s.u)}Bt.prototype.ba=function(s){s=s.target;const u=this.O;u&&$t(s)==3?u.j():this.Y(s)},Bt.prototype.Y=function(s){try{if(s==this.g)t:{const U=$t(this.g),rt=this.g.ya(),W=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||Qi(this.g)))){this.K||U!=4||rt==7||(rt==8||W<=0?Be(3):Be(2)),Br(this);var u=this.g.ca();this.X=u;var c=mc(this);if(this.o=u==200,lc(this.i,this.v,this.B,this.l,this.S,U,u),this.o){if(this.U&&!this.L){e:{if(this.g){var f,v=this.g;if((f=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(f)){var w=f;break e}}w=null}if(s=w)ye(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,jr(this,s);else{this.o=!1,this.m=3,Et(12),ie(this),ze(this);break t}}if(this.R){s=!0;let at;for(;!this.K&&this.C<c.length;)if(at=pc(this,c),at==Fr){U==4&&(this.m=4,Et(14),s=!1),ye(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Pi){this.m=4,Et(15),ye(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else ye(this.i,this.l,at,null),jr(this,at);if(bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||c.length!=0||this.h.h||(this.m=1,Et(16),s=!1),this.o=this.o&&s,!s)ye(this.i,this.l,c,"[Invalid Chunked Response]"),ie(this),ze(this);else if(c.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),Qr(V),V.P=!0,Et(11))}}else ye(this.i,this.l,c,null),jr(this,c);U==4&&ie(this),this.o&&!this.K&&(U==4?no(this.j,this):(this.o=!1,kn(this)))}else Vc(this.g),u==400&&c.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),ie(this),ze(this)}}}catch{}finally{}};function mc(s){if(!bi(s))return s.g.la();const u=Qi(s.g);if(u==="")return"";let c="";const f=u.length,v=$t(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return ie(s),ze(s),"";s.h.i=new a.TextDecoder}for(let w=0;w<f;w++)s.h.h=!0,c+=s.h.i.decode(u[w],{stream:!(v&&w==f-1)});return u.length=0,s.h.g+=c,s.C=0,s.h.g}function bi(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function pc(s,u){var c=s.C,f=u.indexOf(`
`,c);return f==-1?Fr:(c=Number(u.substring(c,f)),isNaN(c)?Pi:(f+=1,f+c>u.length?Fr:(u=u.slice(f,f+c),s.C=f+c,u)))}Bt.prototype.cancel=function(){this.K=!0,ie(this)};function kn(s){s.T=Date.now()+s.H,Di(s,s.H)}function Di(s,u){if(s.D!=null)throw Error("WatchDog timer not null");s.D=je(d(s.aa,s),u)}function Br(s){s.D&&(a.clearTimeout(s.D),s.D=null)}Bt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(hc(this.i,this.B),this.M!=2&&(Be(),Et(17)),ie(this),this.m=2,ze(this)):Di(this,this.T-s)};function ze(s){s.j.I==0||s.K||no(s.j,s)}function ie(s){Br(s);var u=s.O;u&&typeof u.dispose=="function"&&u.dispose(),s.O=null,yi(s.V),s.g&&(u=s.g,s.g=null,u.abort(),u.dispose())}function jr(s,u){try{var c=s.j;if(c.I!=0&&(c.g==s||qr(c.h,s))){if(!s.L&&qr(c.h,s)&&c.I==3){try{var f=c.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)Un(c),Ln(c);else break t;Wr(c),Et(18)}}else c.xa=v[1],0<c.xa-c.K&&v[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=je(d(c.Va,c),6e3));Oi(c.h)<=1&&c.ta&&(c.ta=void 0)}else ae(c,11)}else if((s.L||c.g==s)&&Un(c),!p(u))for(v=c.Ba.g.parse(u),u=0;u<v.length;u++){let W=v[u];const at=W[0];if(!(at<=c.K))if(c.K=at,W=W[1],c.I==2)if(W[0]=="c"){c.M=W[1],c.ba=W[2];const Pt=W[3];Pt!=null&&(c.ka=Pt,c.j.info("VER="+c.ka));const ue=W[4];ue!=null&&(c.za=ue,c.j.info("SVER="+c.za));const zt=W[5];zt!=null&&typeof zt=="number"&&zt>0&&(f=1.5*zt,c.O=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Gt=s.g;if(Gt){const jn=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jn){var w=f.h;w.g||jn.indexOf("spdy")==-1&&jn.indexOf("quic")==-1&&jn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&($r(w,w.h),w.h=null))}if(f.G){const Xr=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Xr&&(f.wa=Xr,Q(f.J,f.G,Xr))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),f=c;var V=s;if(f.na=io(f,f.L?f.ba:null,f.W),V.L){Mi(f.h,V);var U=V,rt=f.O;rt&&(U.H=rt),U.D&&(Br(U),kn(U)),f.g=V}else to(f);c.i.length>0&&Fn(c)}else W[0]!="stop"&&W[0]!="close"||ae(c,7);else c.I==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?ae(c,7):Kr(c):W[0]!="noop"&&c.l&&c.l.qa(W),c.A=0)}}Be(4)}catch{}}var gc=class{constructor(s,u){this.g=s,this.map=u}};function Ni(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ki(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Oi(s){return s.h?1:s.g?s.g.size:0}function qr(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function $r(s,u){s.g?s.g.add(u):s.h=u}function Mi(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Ni.prototype.cancel=function(){if(this.i=xi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function xi(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const c of s.g.values())u=u.concat(c.G);return u}return P(s.i)}var Li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _c(s,u){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const f=s[c].indexOf("=");let v,w=null;f>=0?(v=s[c].substring(0,f),w=s[c].substring(f+1)):v=s[c],u(v,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function jt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;s instanceof jt?(this.l=s.l,Ge(this,s.j),this.o=s.o,this.g=s.g,He(this,s.u),this.h=s.h,zr(this,$i(s.i)),this.m=s.m):s&&(u=String(s).match(Li))?(this.l=!1,Ge(this,u[1]||"",!0),this.o=Ke(u[2]||""),this.g=Ke(u[3]||"",!0),He(this,u[4]),this.h=Ke(u[5]||"",!0),zr(this,u[6]||"",!0),this.m=Ke(u[7]||"")):(this.l=!1,this.i=new Qe(null,this.l))}jt.prototype.toString=function(){const s=[];var u=this.j;u&&s.push(We(u,Fi,!0),":");var c=this.g;return(c||u=="file")&&(s.push("//"),(u=this.o)&&s.push(We(u,Fi,!0),"@"),s.push($e(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(We(c,c.charAt(0)=="/"?Tc:Ec,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",We(c,vc)),s.join("")},jt.prototype.resolve=function(s){const u=Ct(this);let c=!!s.j;c?Ge(u,s.j):c=!!s.o,c?u.o=s.o:c=!!s.g,c?u.g=s.g:c=s.u!=null;var f=s.h;if(c)He(u,s.u);else if(c=!!s.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var v=u.h.lastIndexOf("/");v!=-1&&(f=u.h.slice(0,v+1)+f)}if(v=f,v==".."||v==".")f="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){f=v.lastIndexOf("/",0)==0,v=v.split("/");const w=[];for(let V=0;V<v.length;){const U=v[V++];U=="."?f&&V==v.length&&w.push(""):U==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),f&&V==v.length&&w.push("")):(w.push(U),f=!0)}f=w.join("/")}else f=v}return c?u.h=f:c=s.i.toString()!=="",c?zr(u,$i(s.i)):c=!!s.m,c&&(u.m=s.m),u};function Ct(s){return new jt(s)}function Ge(s,u,c){s.j=c?Ke(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function He(s,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);s.u=u}else s.u=null}function zr(s,u,c){u instanceof Qe?(s.i=u,Ac(s.i,s.l)):(c||(u=We(u,Ic)),s.i=new Qe(u,s.l))}function Q(s,u,c){s.i.set(u,c)}function On(s){return Q(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Ke(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function We(s,u,c){return typeof s=="string"?(s=encodeURI(s).replace(u,yc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function yc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Fi=/[#\/\?@]/g,Ec=/[#\?:]/g,Tc=/[#\?]/g,Ic=/[#\?@]/g,vc=/#/g;function Qe(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function oe(s){s.g||(s.g=new Map,s.h=0,s.i&&_c(s.i,function(u,c){s.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=Qe.prototype,n.add=function(s,u){oe(this),this.i=null,s=Ee(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(u),this.h+=1,this};function Ui(s,u){oe(s),u=Ee(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function Bi(s,u){return oe(s),u=Ee(s,u),s.g.has(u)}n.forEach=function(s,u){oe(this),this.g.forEach(function(c,f){c.forEach(function(v){s.call(u,v,f,this)},this)},this)};function ji(s,u){oe(s);let c=[];if(typeof u=="string")Bi(s,u)&&(c=c.concat(s.g.get(Ee(s,u))));else for(s=Array.from(s.g.values()),u=0;u<s.length;u++)c=c.concat(s[u]);return c}n.set=function(s,u){return oe(this),this.i=null,s=Ee(this,s),Bi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=ji(this,s),s.length>0?String(s[0]):u):u};function qi(s,u,c){Ui(s,u),c.length>0&&(s.i=null,s.g.set(Ee(s,u),P(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var c=u[f];const v=$e(c);c=ji(this,c);for(let w=0;w<c.length;w++){let V=v;c[w]!==""&&(V+="="+$e(c[w])),s.push(V)}}return this.i=s.join("&")};function $i(s){const u=new Qe;return u.i=s.i,s.g&&(u.g=new Map(s.g),u.h=s.h),u}function Ee(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Ac(s,u){u&&!s.j&&(oe(s),s.i=null,s.g.forEach(function(c,f){const v=f.toLowerCase();f!=v&&(Ui(this,f),qi(this,v,c))},s)),s.j=u}function wc(s,u){const c=new qe;if(a.Image){const f=new Image;f.onload=_(qt,c,"TestLoadImage: loaded",!0,u,f),f.onerror=_(qt,c,"TestLoadImage: error",!1,u,f),f.onabort=_(qt,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=_(qt,c,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function Rc(s,u){const c=new qe,f=new AbortController,v=setTimeout(()=>{f.abort(),qt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(w=>{clearTimeout(v),w.ok?qt(c,"TestPingServer: ok",!0,u):qt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),qt(c,"TestPingServer: error",!1,u)})}function qt(s,u,c,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(c)}catch{}}function Sc(){this.g=new uc}function Gr(s){this.i=s.Sb||null,this.h=s.ab||!1}I(Gr,Ei),Gr.prototype.g=function(){return new Mn(this.i,this.h)};function Mn(s,u){dt.call(this),this.H=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Mn,dt),n=Mn.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=u,this.readyState=1,Ye(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(u.body=s),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;zi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function zi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?Xe(this):Ye(this),this.readyState==3&&zi(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Xe(this))},n.Na=function(s){this.g&&(this.response=s,Xe(this))},n.ga=function(){this.g&&Xe(this)};function Xe(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Ye(s)}n.setRequestHeader=function(s,u){this.A.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=u.next();return s.join(`\r
`)};function Ye(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Gi(s){let u="";return Pn(s,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function Hr(s,u,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Gi(c),typeof s=="string"?c!=null&&$e(c):Q(s,u,c))}function Z(s){dt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(Z,dt);var Cc=/^https?$/i,Pc=["POST","PUT"];n=Z.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Si.g(),this.g.onreadystatechange=R(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(w){Hi(this,w);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)c.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const w of f.keys())c.set(w,f.get(w));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),v=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Pc,u,void 0)>=0)||f||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,V]of c)this.g.setRequestHeader(w,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(w){Hi(this,w)}};function Hi(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.o=5,Ki(s),xn(s)}function Ki(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,yt(this,"complete"),yt(this,"abort"),xn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xn(this,!0)),Z.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wi(this):this.Xa())},n.Xa=function(){Wi(this)};function Wi(s){if(s.h&&typeof o<"u"){if(s.v&&$t(s)==4)setTimeout(s.Ca.bind(s),0);else if(yt(s,"readystatechange"),$t(s)==4){s.h=!1;try{const w=s.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var f;if(f=w===0){let V=String(s.D).match(Li)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),f=!Cc.test(V?V.toLowerCase():"")}c=f}if(c)yt(s,"complete"),yt(s,"success");else{s.o=6;try{var v=$t(s)>2?s.g.statusText:""}catch{v=""}s.l=v+" ["+s.ca()+"]",Ki(s)}}finally{xn(s)}}}}function xn(s,u){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,u||yt(s,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function $t(s){return s.g?s.g.readyState:0}n.ca=function(){try{return $t(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),ac(u)}};function Qi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Vc(s){const u={};s=(s.g&&$t(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(p(s[f]))continue;var c=dc(s[f]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=u[v]||[];u[v]=w,w.push(c)}ec(u,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(s,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||u}function Xi(s){this.za=0,this.i=[],this.j=new qe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Je("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Je("baseRetryDelayMs",5e3,s),this.Za=Je("retryDelaySeedMs",1e4,s),this.Ta=Je("forwardChannelMaxRetries",2,s),this.va=Je("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Ni(s&&s.concurrentRequestLimit),this.Ba=new Sc,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Xi.prototype,n.ka=8,n.I=1,n.connect=function(s,u,c,f){Et(0),this.W=s,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.J=io(this,null,this.W),Fn(this)};function Kr(s){if(Yi(s),s.I==3){var u=s.V++,c=Ct(s.J);if(Q(c,"SID",s.M),Q(c,"RID",u),Q(c,"TYPE","terminate"),Ze(s,c),u=new Bt(s,s.j,u),u.M=2,u.A=On(Ct(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=u.A,c=!0),c||(u.g=oo(u.j,null),u.g.ea(u.A)),u.F=Date.now(),kn(u)}so(s)}function Ln(s){s.g&&(Qr(s),s.g.cancel(),s.g=null)}function Yi(s){Ln(s),s.v&&(a.clearTimeout(s.v),s.v=null),Un(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Fn(s){if(!ki(s.h)&&!s.m){s.m=!0;var u=s.Ea;Tt||m(),ot||(Tt(),ot=!0),E.add(u,s),s.D=0}}function bc(s,u){return Oi(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=u.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=je(d(s.Ea,s,u),ro(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const v=new Bt(this,this.j,s);let w=this.o;if(this.U&&(w?(w=ci(w),hi(w,this.U)):w=this.U),this.u!==null||this.R||(v.J=w,w=null),this.S)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=Zi(this,v,u),c=Ct(this.J),Q(c,"RID",s),Q(c,"CVER",22),this.G&&Q(c,"X-HTTP-Session-Id",this.G),Ze(this,c),w&&(this.R?u="headers="+$e(Gi(w))+"&"+u:this.u&&Hr(c,this.u,w)),$r(this.h,v),this.Ra&&Q(c,"TYPE","init"),this.S?(Q(c,"$req",u),Q(c,"SID","null"),v.U=!0,Ur(v,c,null)):Ur(v,c,u),this.I=2}}else this.I==3&&(s?Ji(this,s):this.i.length==0||ki(this.h)||Ji(this))};function Ji(s,u){var c;u?c=u.l:c=s.V++;const f=Ct(s.J);Q(f,"SID",s.M),Q(f,"RID",c),Q(f,"AID",s.K),Ze(s,f),s.u&&s.o&&Hr(f,s.u,s.o),c=new Bt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),u&&(s.i=u.G.concat(s.i)),u=Zi(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),$r(s.h,c),Ur(c,f,u)}function Ze(s,u){s.H&&Pn(s.H,function(c,f){Q(u,f,c)}),s.l&&Pn({},function(c,f){Q(u,f,c)})}function Zi(s,u,c){c=Math.min(s.i.length,c);const f=s.l?d(s.l.Ka,s.l,s):null;t:{var v=s.i;let U=-1;for(;;){const rt=["count="+c];U==-1?c>0?(U=v[0].g,rt.push("ofs="+U)):U=0:rt.push("ofs="+U);let W=!0;for(let at=0;at<c;at++){var w=v[at].g;const Pt=v[at].map;if(w-=U,w<0)U=Math.max(0,v[at].g-100),W=!1;else try{w="req"+w+"_"||"";try{var V=Pt instanceof Map?Pt:Object.entries(Pt);for(const[ue,zt]of V){let Gt=zt;l(zt)&&(Gt=Or(zt)),rt.push(w+ue+"="+encodeURIComponent(Gt))}}catch(ue){throw rt.push(w+"type="+encodeURIComponent("_badmap")),ue}}catch{f&&f(Pt)}}if(W){V=rt.join("&");break t}}V=void 0}return s=s.i.splice(0,c),u.G=s,V}function to(s){if(!s.g&&!s.v){s.Y=1;var u=s.Da;Tt||m(),ot||(Tt(),ot=!0),E.add(u,s),s.A=0}}function Wr(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=je(d(s.Da,s),ro(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,eo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=je(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),Ln(this),eo(this))};function Qr(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function eo(s){s.g=new Bt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var u=Ct(s.na);Q(u,"RID","rpc"),Q(u,"SID",s.M),Q(u,"AID",s.K),Q(u,"CI",s.F?"0":"1"),!s.F&&s.ia&&Q(u,"TO",s.ia),Q(u,"TYPE","xmlhttp"),Ze(s,u),s.u&&s.o&&Hr(u,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=On(Ct(u)),c.u=null,c.R=!0,Vi(c,s)}n.Va=function(){this.C!=null&&(this.C=null,Ln(this),Wr(this),Et(19))};function Un(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function no(s,u){var c=null;if(s.g==u){Un(s),Qr(s),s.g=null;var f=2}else if(qr(s.h,u))c=u.G,Mi(s.h,u),f=1;else return;if(s.I!=0){if(u.o)if(f==1){c=u.u?u.u.length:0,u=Date.now()-u.F;var v=s.D;f=Dn(),yt(f,new wi(f,c)),Fn(s)}else to(s);else if(v=u.m,v==3||v==0&&u.X>0||!(f==1&&bc(s,u)||f==2&&Wr(s)))switch(c&&c.length>0&&(u=s.h,u.i=u.i.concat(c)),v){case 1:ae(s,5);break;case 4:ae(s,10);break;case 3:ae(s,6);break;default:ae(s,2)}}}function ro(s,u){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*u}function ae(s,u){if(s.j.info("Error code "+u),u==2){var c=d(s.bb,s),f=s.Ua;const v=!f;f=new jt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ge(f,"https"),On(f),v?wc(f.toString(),c):Rc(f.toString(),c)}else Et(2);s.I=0,s.l&&s.l.pa(u),so(s),Yi(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function so(s){if(s.I=0,s.ja=[],s.l){const u=xi(s.h);(u.length!=0||s.i.length!=0)&&(k(s.ja,u),k(s.ja,s.i),s.h.i.length=0,P(s.i),s.i.length=0),s.l.oa()}}function io(s,u,c){var f=c instanceof jt?Ct(c):new jt(c);if(f.g!="")u&&(f.g=u+"."+f.g),He(f,f.u);else{var v=a.location;f=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const w=new jt(null);f&&Ge(w,f),u&&(w.g=u),v&&He(w,v),c&&(w.h=c),f=w}return c=s.G,u=s.wa,c&&u&&Q(f,c,u),Q(f,"VER",s.ka),Ze(s,f),f}function oo(s,u,c){if(u&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Aa&&!s.ma?new Z(new Gr({ab:c})):new Z(s.ma),u.Fa(s.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ao(){}n=ao.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Bn(){}Bn.prototype.g=function(s,u){return new At(s,u)};function At(s,u){dt.call(this),this.g=new Xi(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(s?s["X-WebChannel-Client-Profile"]=u.sa:s={"X-WebChannel-Client-Profile":u.sa}),this.g.U=s,(s=u&&u.Qb)&&!p(s)&&(this.g.u=s),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!p(u)&&(this.g.G=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new Te(this)}I(At,dt),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Kr(this.g)},At.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=Or(s),s=c);u.i.push(new gc(u.Ya++,s)),u.I==3&&Fn(u)},At.prototype.N=function(){this.g.l=null,delete this.j,Kr(this.g),delete this.g,At.Z.N.call(this)};function uo(s){Mr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const c in u){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}I(uo,Mr);function co(){xr.call(this),this.status=1}I(co,xr);function Te(s){this.g=s}I(Te,ao),Te.prototype.ra=function(){yt(this.g,"a")},Te.prototype.qa=function(s){yt(this.g,new uo(s))},Te.prototype.pa=function(s){yt(this.g,new co)},Te.prototype.oa=function(){yt(this.g,"b")},Bn.prototype.createWebChannel=Bn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Na=function(){return new Bn},Da=function(){return Dn()},ba=se,hs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,Kn=Nn,Ri.COMPLETE="complete",Va=Ri,Ti.EventType=Ue,Ue.OPEN="a",Ue.CLOSE="b",Ue.ERROR="c",Ue.MESSAGE="d",dt.prototype.listen=dt.prototype.J,tn=Ti,Z.prototype.listenOnce=Z.prototype.K,Z.prototype.getLastError=Z.prototype.Ha,Z.prototype.getLastErrorCode=Z.prototype.ya,Z.prototype.getStatus=Z.prototype.ca,Z.prototype.getResponseJson=Z.prototype.La,Z.prototype.getResponseText=Z.prototype.la,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Fa,Pa=Z}).apply(typeof qn<"u"?qn:typeof self<"u"?self:typeof window<"u"?window:{});const Ao="@firebase/firestore",wo="4.9.2";/**
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
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Oe="12.3.0";/**
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
 */const fe=new Ia("@firebase/firestore");function Ie(){return fe.logLevel}function D(n,...t){if(fe.logLevel<=$.DEBUG){const e=t.map(bs);fe.debug(`Firestore (${Oe}): ${n}`,...e)}}function Ft(n,...t){if(fe.logLevel<=$.ERROR){const e=t.map(bs);fe.error(`Firestore (${Oe}): ${n}`,...e)}}function Ce(n,...t){if(fe.logLevel<=$.WARN){const e=t.map(bs);fe.warn(`Firestore (${Oe}): ${n}`,...e)}}function bs(n){if(typeof n=="string")return n;try{/**
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
 */function x(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,ka(n,r,e)}function ka(n,t,e){let r=`FIRESTORE (${Oe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ft(r),new Error(r)}function K(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||ka(t,i,r)}function F(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ke{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Oa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(pt.UNAUTHENTICATED)))}shutdown(){}}class _h{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class yh{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new Oa(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class Eh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Th{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Eh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ro{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ih{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ro(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ro(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Ds{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=vh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function fs(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return es(i)===es(o)?B(i,o):es(i)?1:-1}return B(n.length,t.length)}const Ah=55296,wh=57343;function es(n){const t=n.charCodeAt(0);return t>=Ah&&t<=wh}function Pe(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
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
 */const So="__name__";class Vt{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Vt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Vt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Vt.isNumericId(t),i=Vt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Vt.extractNumericId(t).compare(Vt.extractNumericId(e)):fs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Qt.fromString(t.substring(4,t.length-2))}}class Y extends Vt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const Rh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Vt{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return Rh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===So}static keyField(){return new ht([So])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new N(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new N(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}/**
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
 */function Sh(n,t,e){if(!e)throw new N(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ch(n,t,e,r){if(t===!0&&r===!0)throw new N(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Co(n){if(!O.isDocumentKey(n))throw new N(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ma(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ns(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function dn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ns(n);throw new N(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function nt(n,t){const e={typeString:n};return t&&(e.value=t),e}function vn(n,t){if(!Ma(n))throw new N(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(C.INVALID_ARGUMENT,e);return!0}/**
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
 */const Po=-62135596800,Vo=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Vo);return new X(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Po)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vo}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(vn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Po;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:nt("string",X._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new X(0,0))}static max(){return new L(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const mn=-1;function Ph(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new X(e+1,0):new X(e,r));return new Yt(i,O.empty(),t)}function Vh(n){return new Yt(n.readTime,n.key,mn)}class Yt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Yt(L.min(),O.empty(),mn)}static max(){return new Yt(L.max(),O.empty(),mn)}}function bh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
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
 */const Dh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Me(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Dh)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let i=0,o=0,a=!1;t.forEach((l=>{++i,l.next((()=>{++o,a&&o===i&&e()}),(h=>r(h)))})),a=!0,o===i&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((i=>i?S.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((_=>{a[d]=_,++l,l===o&&r(a)}),(_=>i(_)))}}))}static doWhile(t,e){return new S(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function kh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function xe(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class pr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}pr.ce=-1;/**
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
 */const ks=-1;function gr(n){return n==null}function sr(n){return n===0&&1/n==-1/0}function Oh(n){return typeof n=="number"&&Number.isInteger(n)&&!sr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const xa="";function Mh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=bo(t)),t=xh(n.get(e),t);return bo(t)}function xh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case xa:e+="";break;default:e+=o}}return e}function bo(n){return n+xa+""}/**
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
 */function Do(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function La(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class J{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $n(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $n(this.root,t,this.comparator,!1)}getReverseIterator(){return new $n(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $n(this.root,t,this.comparator,!0)}}class $n{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new lt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new No(this.data.getIterator())}getIteratorFrom(t){return new No(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class No{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new St([])}unionWith(t){let e=new it(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Fa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Fa("Invalid base64 string: "+o):o}})(t);return new ft(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Lh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Lh.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
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
 */const Ua="server_timestamp",Ba="__type__",ja="__previous_value__",qa="__local_write_time__";function Os(n){return(n?.mapValue?.fields||{})[Ba]?.stringValue===Ua}function _r(n){const t=n.mapValue.fields[ja];return Os(t)?_r(t):t}function pn(n){const t=Jt(n.mapValue.fields[qa].timestampValue);return new X(t.seconds,t.nanos)}/**
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
 */class Fh{constructor(t,e,r,i,o,a,l,h,d,_){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=_}}const ir="(default)";class gn{constructor(t,e){this.projectId=t,this.database=e||ir}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database===ir}isEqual(t){return t instanceof gn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const $a="__type__",Uh="__max__",zn={mapValue:{}},za="__vector__",or="value";function te(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Os(n)?4:jh(n)?9007199254740991:Bh(n)?10:11:x(28295,{value:n})}function Ot(n,t){if(n===t)return!0;const e=te(n);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return pn(n).isEqual(pn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Jt(i.timestampValue),l=Jt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return Zt(i.bytesValue).isEqual(Zt(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=tt(i.doubleValue),l=tt(o.doubleValue);return a===l?sr(a)===sr(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return Pe(n.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Do(a)!==Do(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ot(a[h],l[h])))return!1;return!0})(n,t);default:return x(52216,{left:n})}}function _n(n,t){return(n.values||[]).find((e=>Ot(e,t)))!==void 0}function Ve(n,t){if(n===t)return 0;const e=te(n),r=te(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return ko(n.timestampValue,t.timestampValue);case 4:return ko(pn(n),pn(t));case 5:return fs(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=Zt(o),h=Zt(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const _=B(l[d],h[d]);if(_!==0)return _}return B(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=B(tt(o.latitude),tt(a.latitude));return l!==0?l:B(tt(o.longitude),tt(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Oo(n.arrayValue,t.arrayValue);case 10:return(function(o,a){const l=o.fields||{},h=a.fields||{},d=l[or]?.arrayValue,_=h[or]?.arrayValue,I=B(d?.values?.length||0,_?.values?.length||0);return I!==0?I:Oo(d,_)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===zn.mapValue&&a===zn.mapValue)return 0;if(o===zn.mapValue)return 1;if(a===zn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},_=Object.keys(d);h.sort(),_.sort();for(let I=0;I<h.length&&I<_.length;++I){const R=fs(h[I],_[I]);if(R!==0)return R;const P=Ve(l[h[I]],d[_[I]]);if(P!==0)return P}return B(h.length,_.length)})(n.mapValue,t.mapValue);default:throw x(23264,{he:e})}}function ko(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=Jt(n),r=Jt(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function Oo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ve(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function be(n){return ds(n)}function ds(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Jt(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Zt(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ds(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ds(e.fields[a])}`;return i+"}"})(n.mapValue):x(61005,{value:n})}function Wn(n){switch(te(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=_r(n);return t?16+Wn(t):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+Wn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return me(r.fields,((o,a)=>{i+=o.length+Wn(a)})),i})(n.mapValue);default:throw x(13486,{value:n})}}function ms(n){return!!n&&"integerValue"in n}function Ms(n){return!!n&&"arrayValue"in n}function Mo(n){return!!n&&"nullValue"in n}function xo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qn(n){return!!n&&"mapValue"in n}function Bh(n){return(n?.mapValue?.fields||{})[$a]?.stringValue===za}function on(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return me(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=on(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=on(n.arrayValue.values[e]);return t}return{...n}}function jh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Uh}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Qn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=on(e)}setAll(t){let e=ht.emptyPath(),r={},i=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=on(a):i.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Qn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Qn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){me(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new wt(on(this.value))}}function Ga(n){const t=[];return me(n.fields,((e,r)=>{const i=new ht([e]);if(Qn(r)){const o=Ga(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)})),new St(t)}/**
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
 */class gt{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new gt(t,0,L.min(),L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new gt(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new gt(t,2,e,L.min(),L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,L.min(),L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ar{constructor(t,e){this.position=t,this.inclusive=e}}function Lo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Ve(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ot(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function qh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ha{}class st extends Ha{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new zh(t,e,r):e==="array-contains"?new Kh(t,r):e==="in"?new Wh(t,r):e==="not-in"?new Qh(t,r):e==="array-contains-any"?new Xh(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Gh(t,r):new Hh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ve(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(Ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Ha{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Mt(t,e)}matches(t){return Ka(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ka(n){return n.op==="and"}function Wa(n){return $h(n)&&Ka(n)}function $h(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function ps(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+be(n.value);if(Wa(n))return n.filters.map((t=>ps(t))).join(",");{const t=n.filters.map((e=>ps(e))).join(",");return`${n.op}(${t})`}}function Qa(n,t){return n instanceof st?(function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Ot(r.value,i.value)})(n,t):n instanceof Mt?(function(r,i){return i instanceof Mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,a,l)=>o&&Qa(a,i.filters[l])),!0):!1})(n,t):void x(19439)}function Xa(n){return n instanceof st?(function(e){return`${e.field.canonicalString()} ${e.op} ${be(e.value)}`})(n):n instanceof Mt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Xa).join(" ,")+"}"})(n):"Filter"}class zh extends st{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Gh extends st{constructor(t,e){super(t,"in",e),this.keys=Ya("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Hh extends st{constructor(t,e){super(t,"not-in",e),this.keys=Ya("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ya(n,t){return(t.arrayValue?.values||[]).map((e=>O.fromName(e.referenceValue)))}class Kh extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ms(e)&&_n(e.arrayValue,this.value)}}class Wh extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_n(this.value.arrayValue,e)}}class Qh extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!_n(this.value.arrayValue,e)}}class Xh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ms(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>_n(this.value.arrayValue,r)))}}/**
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
 */class Yh{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Uo(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Yh(n,t,e,r,i,o,a)}function xs(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>ps(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),gr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>be(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>be(r))).join(",")),t.Te=e}return t.Te}function Ls(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!qh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Qa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Fo(n.startAt,t.startAt)&&Fo(n.endAt,t.endAt)}function gs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class yr{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Jh(n,t,e,r,i,o,a,l){return new yr(n,t,e,r,i,o,a,l)}function Fs(n){return new yr(n)}function Bo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zh(n){return n.collectionGroup!==null}function an(n){const t=F(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new it(ht.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new ur(o,r))})),e.has(ht.keyField().canonicalString())||t.Ie.push(new ur(ht.keyField(),r))}return t.Ie}function bt(n){const t=F(n);return t.Ee||(t.Ee=tf(t,an(n))),t.Ee}function tf(n,t){if(n.limitType==="F")return Uo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new ur(i.field,o)}));const e=n.endAt?new ar(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ar(n.startAt.position,n.startAt.inclusive):null;return Uo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function _s(n,t,e){return new yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Er(n,t){return Ls(bt(n),bt(t))&&n.limitType===t.limitType}function Ja(n){return`${xs(bt(n))}|lt:${n.limitType}`}function ve(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>Xa(i))).join(", ")}]`),gr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>be(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>be(i))).join(",")),`Target(${r})`})(bt(n))}; limitType=${n.limitType})`}function Tr(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of an(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(a,l,h){const d=Lo(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,an(r),i)||r.endAt&&!(function(a,l,h){const d=Lo(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,an(r),i))})(n,t)}function ef(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Za(n){return(t,e)=>{let r=!1;for(const i of an(n)){const o=nf(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function nf(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Ve(h,d):x(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
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
 */class pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){me(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return La(this.inner)}size(){return this.innerSize}}/**
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
 */const rf=new J(O.comparator);function Ut(){return rf}const tu=new J(O.comparator);function en(...n){let t=tu;for(const e of n)t=t.insert(e.key,e);return t}function eu(n){let t=tu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function le(){return un()}function nu(){return un()}function un(){return new pe((n=>n.toString()),((n,t)=>n.isEqual(t)))}const sf=new J(O.comparator),of=new it(O.comparator);function j(...n){let t=of;for(const e of n)t=t.add(e);return t}const af=new it(B);function uf(){return af}/**
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
 */function Us(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sr(t)?"-0":t}}function ru(n){return{integerValue:""+n}}function cf(n,t){return Oh(t)?ru(t):Us(n,t)}/**
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
 */class Ir{constructor(){this._=void 0}}function lf(n,t,e){return n instanceof yn?(function(i,o){const a={fields:{[Ba]:{stringValue:Ua},[qa]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Os(o)&&(o=_r(o)),o&&(a.fields[ja]=o),{mapValue:a}})(e,t):n instanceof En?iu(n,t):n instanceof Tn?ou(n,t):(function(i,o){const a=su(i,o),l=jo(a)+jo(i.Ae);return ms(a)&&ms(i.Ae)?ru(l):Us(i.serializer,l)})(n,t)}function hf(n,t,e){return n instanceof En?iu(n,t):n instanceof Tn?ou(n,t):e}function su(n,t){return n instanceof cr?(function(r){return ms(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class yn extends Ir{}class En extends Ir{constructor(t){super(),this.elements=t}}function iu(n,t){const e=au(t);for(const r of n.elements)e.some((i=>Ot(i,r)))||e.push(r);return{arrayValue:{values:e}}}class Tn extends Ir{constructor(t){super(),this.elements=t}}function ou(n,t){let e=au(t);for(const r of n.elements)e=e.filter((i=>!Ot(i,r)));return{arrayValue:{values:e}}}class cr extends Ir{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function jo(n){return tt(n.integerValue||n.doubleValue)}function au(n){return Ms(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ff{constructor(t,e){this.field=t,this.transform=e}}function df(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof En&&i instanceof En||r instanceof Tn&&i instanceof Tn?Pe(r.elements,i.elements,Ot):r instanceof cr&&i instanceof cr?Ot(r.Ae,i.Ae):r instanceof yn&&i instanceof yn})(n.transform,t.transform)}class mf{constructor(t,e){this.version=t,this.transformResults=e}}class xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xt}static exists(t){return new xt(void 0,t)}static updateTime(t){return new xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class vr{}function uu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new lu(n.key,xt.none()):new An(n.key,n.data,xt.none());{const e=n.data,r=wt.empty();let i=new it(ht.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ge(n.key,r,new St(i.toArray()),xt.none())}}function pf(n,t,e){n instanceof An?(function(i,o,a){const l=i.value.clone(),h=$o(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof ge?(function(i,o,a){if(!Xn(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=$o(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(cu(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function cn(n,t,e,r){return n instanceof An?(function(o,a,l,h){if(!Xn(o.precondition,a))return l;const d=o.value.clone(),_=zo(o.fieldTransforms,h,a);return d.setAll(_),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof ge?(function(o,a,l,h){if(!Xn(o.precondition,a))return l;const d=zo(o.fieldTransforms,h,a),_=a.data;return _.setAll(cu(o)),_.setAll(d),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(n,t,e,r):(function(o,a,l){return Xn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function gf(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=su(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function qo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pe(r,i,((o,a)=>df(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class An extends vr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ge extends vr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function cu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function $o(n,t,e){const r=new Map;K(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,hf(a,l,e[i]))}return r}function zo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,lf(o,a,t))}return r}class lu extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _f extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yf{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&pf(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=cn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=cn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=nu();return this.mutations.forEach((i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=uu(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,((e,r)=>qo(e,r)))&&Pe(this.baseMutations,t.baseMutations,((e,r)=>qo(e,r)))}}class Bs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){K(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return sf})();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Bs(t,e,r,i)}}/**
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
 */class Ef{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Tf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var et,q;function If(n){switch(n){case C.OK:return x(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function hu(n){if(n===void 0)return Ft("GRPC error has no .code"),C.UNKNOWN;switch(n){case et.OK:return C.OK;case et.CANCELLED:return C.CANCELLED;case et.UNKNOWN:return C.UNKNOWN;case et.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case et.INTERNAL:return C.INTERNAL;case et.UNAVAILABLE:return C.UNAVAILABLE;case et.UNAUTHENTICATED:return C.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case et.NOT_FOUND:return C.NOT_FOUND;case et.ALREADY_EXISTS:return C.ALREADY_EXISTS;case et.PERMISSION_DENIED:return C.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case et.ABORTED:return C.ABORTED;case et.OUT_OF_RANGE:return C.OUT_OF_RANGE;case et.UNIMPLEMENTED:return C.UNIMPLEMENTED;case et.DATA_LOSS:return C.DATA_LOSS;default:return x(39323,{code:n})}}(q=et||(et={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vf(){return new TextEncoder}/**
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
 */const Af=new Qt([4294967295,4294967295],0);function Go(n){const t=vf().encode(n),e=new Ca;return e.update(t),new Uint8Array(e.digest())}function Ho(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Qt([e,r],0),new Qt([i,o],0)]}class js{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(r<0)throw new nn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Qt.fromNumber(this.ge)}ye(t,e,r){let i=t.add(e.multiply(Qt.fromNumber(r)));return i.compare(Af)===1&&(i=new Qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Go(t),[r,i]=Ho(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new js(o,i,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=Go(t),[r,i]=Ho(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ar{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,wn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ar(L.min(),i,new J(B),Ut(),j())}}class wn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new wn(r,e,j(),j(),j())}}/**
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
 */class Yn{constructor(t,e,r,i){this.be=t,this.removedTargetIds=e,this.key=r,this.De=i}}class fu{constructor(t,e){this.targetId=t,this.Ce=e}}class du{constructor(t,e,r=ft.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ko{constructor(){this.ve=0,this.Fe=Wo(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),r=j();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:x(38017,{changeType:o})}})),new wn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Wo()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class wf{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ut(),this.Je=Gn(),this.He=Gn(),this.Ye=new J(B)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:x(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,r=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(gs(o))if(r===0){const a=new O(o.path);this.et(e,a,gt.newNoDocument(a,L.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=Zt(r).toUint8Array()}catch(h){if(h instanceof Fa)return Ce("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new js(a,i,o)}catch(h){return Ce(h instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&gs(l.target)){const h=new O(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,gt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let r=j();this.He.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const i=new Ar(t,e,this.Ye,this.je,r);return this.je=Ut(),this.Je=Gn(),this.He=Gn(),this.Ye=new J(B),i}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Ko,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new it(B),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new it(B),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ko),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Gn(){return new J(O.comparator)}function Wo(){return new J(O.comparator)}const Rf={asc:"ASCENDING",desc:"DESCENDING"},Sf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cf={and:"AND",or:"OR"};class Pf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ys(n,t){return n.useProto3Json||gr(t)?t:{value:t}}function lr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Vf(n,t){return lr(n,t.toTimestamp())}function Dt(n){return K(!!n,49232),L.fromTimestamp((function(e){const r=Jt(e);return new X(r.seconds,r.nanos)})(n))}function qs(n,t){return Es(n,t).canonicalString()}function Es(n,t){const e=(function(i){return new Y(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function pu(n){const t=Y.fromString(n);return K(Tu(t),10190,{key:t.toString()}),t}function Ts(n,t){return qs(n.databaseId,t.path)}function ns(n,t){const e=pu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(_u(e))}function gu(n,t){return qs(n.databaseId,t)}function bf(n){const t=pu(n);return t.length===4?Y.emptyPath():_u(t)}function Is(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _u(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Qo(n,t,e){return{name:Ts(n,t),fields:e.value.mapValue.fields}}function Df(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(d,_){return d.useProto3Json?(K(_===void 0||typeof _=="string",58123),ft.fromBase64String(_||"")):(K(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),ft.fromUint8Array(_||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const _=d.code===void 0?C.UNKNOWN:hu(d.code);return new N(_,d.message||"")})(a);e=new du(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ns(n,r.document.name),o=Dt(r.document.updateTime),a=r.document.createTime?Dt(r.document.createTime):L.min(),l=new wt({mapValue:{fields:r.document.fields}}),h=gt.newFoundDocument(i,o,a,l),d=r.targetIds||[],_=r.removedTargetIds||[];e=new Yn(d,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ns(n,r.document),o=r.readTime?Dt(r.readTime):L.min(),a=gt.newNoDocument(i,o),l=r.removedTargetIds||[];e=new Yn([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ns(n,r.document),o=r.removedTargetIds||[];e=new Yn([],o,i,null)}else{if(!("filter"in t))return x(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Tf(i,o),l=r.targetId;e=new fu(l,a)}}return e}function Nf(n,t){let e;if(t instanceof An)e={update:Qo(n,t.key,t.value)};else if(t instanceof lu)e={delete:Ts(n,t.key)};else if(t instanceof ge)e={update:Qo(n,t.key,t.data),updateMask:jf(t.fieldMask)};else{if(!(t instanceof _f))return x(16599,{Vt:t.type});e={verify:Ts(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof yn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof En)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Tn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw x(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Vf(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)})(n,t.precondition)),e}function kf(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map((e=>(function(i,o){let a=i.updateTime?Dt(i.updateTime):Dt(o);return a.isEqual(L.min())&&(a=Dt(o)),new mf(a,i.transformResults||[])})(e,t)))):[]}function Of(n,t){return{documents:[gu(n,t.path)]}}function Mf(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=gu(n,i);const o=(function(d){if(d.length!==0)return Eu(Mt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((_=>(function(R){return{field:Ae(R.field),direction:Ff(R.dir)}})(_)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=ys(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:i}}function xf(n){let t=bf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){K(r===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(I){const R=yu(I);return R instanceof Mt&&Wa(R)?R.getFilters():[R]})(e.where));let a=[];e.orderBy&&(a=(function(I){return I.map((R=>(function(k){return new ur(we(k.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(R)))})(e.orderBy));let l=null;e.limit&&(l=(function(I){let R;return R=typeof I=="object"?I.value:I,gr(R)?null:R})(e.limit));let h=null;e.startAt&&(h=(function(I){const R=!!I.before,P=I.values||[];return new ar(P,R)})(e.startAt));let d=null;return e.endAt&&(d=(function(I){const R=!I.before,P=I.values||[];return new ar(P,R)})(e.endAt)),Jh(t,i,a,o,l,"F",h,d)}function Lf(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function yu(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=we(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=we(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=we(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=we(e.unaryFilter.field);return st.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}})(n):n.fieldFilter!==void 0?(function(e){return st.create(we(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Mt.create(e.compositeFilter.filters.map((r=>yu(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}})(e.compositeFilter.op))})(n):x(30097,{filter:n})}function Ff(n){return Rf[n]}function Uf(n){return Sf[n]}function Bf(n){return Cf[n]}function Ae(n){return{fieldPath:n.canonicalString()}}function we(n){return ht.fromServerFormat(n.fieldPath)}function Eu(n){return n instanceof st?(function(e){if(e.op==="=="){if(xo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NAN"}};if(Mo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NAN"}};if(Mo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ae(e.field),op:Uf(e.op),value:e.value}}})(n):n instanceof Mt?(function(e){const r=e.getFilters().map((i=>Eu(i)));return r.length===1?r[0]:{compositeFilter:{op:Bf(e.op),filters:r}}})(n):x(54877,{filter:n})}function jf(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Tu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ht{constructor(t,e,r,i,o=L.min(),a=L.min(),l=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class qf{constructor(t){this.yt=t}}function $f(n){const t=xf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_s(t,t.limit,"L"):t}/**
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
 */class zf{constructor(){this.Cn=new Gf}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Yt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Gf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new it(Y.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new it(Y.comparator)).toArray()}}/**
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
 */const Xo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Iu=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Iu,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */class De{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new De(0)}static cr(){return new De(-1)}}/**
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
 */const Yo="LruGarbageCollector",Hf=1048576;function Jo([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class Kf{constructor(t){this.Ir=t,this.buffer=new it(Jo),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Jo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Wf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){D(Yo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xe(e)?D(Yo,"Ignoring IndexedDB error during garbage collection: ",e):await Me(e)}await this.Vr(3e5)}))}}class Qf{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(pr.ce);const r=new Kf(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Xo)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xo):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,a,l,h,d;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(t,i)))).next((I=>(r=I,l=Date.now(),this.removeTargets(t,r,e)))).next((I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((I=>(d=Date.now(),Ie()<=$.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-_}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I}))))}}function Xf(n,t){return new Qf(n,t)}/**
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
 */class Yf{constructor(){this.changes=new pe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Jf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Zf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&cn(r.mutation,i,St.empty(),X.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,j()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=j()){const i=le();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let a=en();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=le();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,j())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,i){let o=Ut();const a=un(),l=(function(){return un()})();return e.forEach(((h,d)=>{const _=r.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof ge)?o=o.insert(d.key,d):_!==void 0?(a.set(d.key,_.mutation.getFieldMask()),cn(_.mutation,d,_.mutation.getFieldMask(),X.now())):a.set(d.key,St.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,_)=>a.set(d,_))),e.forEach(((d,_)=>l.set(d,new Jf(_,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=un();let i=new J(((a,l)=>a-l)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let _=r.get(h)||St.empty();_=l.applyToLocalView(d,_),r.set(h,_);const I=(i.get(l.batchId)||j()).add(h);i=i.insert(l.batchId,I)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,_=h.value,I=nu();_.forEach((R=>{if(!o.has(R)){const P=uu(e.get(R),r.get(R));P!==null&&I.set(R,P),o=o.add(R)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return S.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Zh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(le());let l=mn,h=o;return a.next((d=>S.forEach(d,((_,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(_)?S.resolve():this.remoteDocumentCache.getEntry(t,_).next((R=>{h=h.insert(_,R)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,j()))).next((_=>({batchId:l,changes:eu(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let i=en();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=en();return this.indexManager.getCollectionParents(t,o).next((l=>S.forEach(l,(h=>{const d=(function(I,R){return new yr(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next((_=>{_.forEach(((I,R)=>{a=a.insert(I,R)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((a=>{o.forEach(((h,d)=>{const _=d.getKey();a.get(_)===null&&(a=a.insert(_,gt.newInvalidDocument(_)))}));let l=en();return a.forEach(((h,d)=>{const _=o.get(h);_!==void 0&&cn(_.mutation,d,St.empty(),X.now()),Tr(e,d)&&(l=l.insert(h,d))})),l}))}}/**
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
 */class td{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:$f(i.bundledQuery),readTime:Dt(i.readTime)}})(e)),S.resolve()}}/**
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
 */class ed{constructor(){this.overlays=new J(O.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=le();return S.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=le(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new J(((d,_)=>d-_));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let _=o.get(d.largestBatchId);_===null&&(_=le(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const l=le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,_)=>l.set(d,_))),!(l.size()>=i)););return S.resolve(l)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ef(e,r));let o=this.qr.get(e);o===void 0&&(o=j(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
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
 */class nd{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class $s{constructor(){this.Qr=new it(ut.$r),this.Ur=new it(ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new ut(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new ut(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new O(new Y([])),r=new ut(e,t),i=new ut(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new Y([])),r=new ut(e,t),i=new ut(e,t+1);let o=j();return this.Ur.forEachInRange([r,i],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ut(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
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
 */class rd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new it(ut.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new yf(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new ut(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ks:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ut(e,0),i=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(a=>{const l=this.Xr(a.Yr);o.push(l)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(B);return e.forEach((i=>{const o=new ut(i,0),a=new ut(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{r=r.add(l.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ut(new O(o),0);let l=new it(B);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.Yr)),!0)}),a),S.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){K(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,(i=>{const o=new ut(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new ut(e,0),i=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class sd{constructor(t){this.ri=t,this.docs=(function(){return new J(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=Ut();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Ut();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:_}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||bh(Vh(_),r)<=0||(i.has(_.key)||Tr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){x(9500)}ii(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new id(this)}getSize(t){return S.resolve(this.size)}}class id extends Yf{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class od{constructor(t){this.persistence=t,this.si=new pe((e=>xs(e)),Ls),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new $s,this.targetCount=0,this.ai=De.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new De(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)})),S.waitFor(o).next((()=>i))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((a=>{o.push(i.markPotentiallyOrphaned(t,a))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
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
 */class vu{constructor(t,e){this.ui={},this.overlays={},this.ci=new pr(0),this.li=!1,this.li=!0,this.hi=new nd,this.referenceDelegate=t(this),this.Pi=new od(this),this.indexManager=new zf,this.remoteDocumentCache=(function(i){return new sd(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new qf(e),this.Ii=new td(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ed,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new rd(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new ad(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class ad extends Nh{constructor(t){super(),this.currentSequenceNumber=t}}class zs{constructor(t){this.persistence=t,this.Ri=new $s,this.Vi=null}static mi(t){return new zs(t)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const i=O.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,L.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class hr{constructor(t,e){this.persistence=t,this.pi=new pe((r=>Mh(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Xf(this,e)}static mi(t,e){return new hr(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return S.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?S.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(a=>this.br(t,a,e).next((l=>{l||(r++,o.removeEntry(a,L.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Wn(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Gs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Gs(t,e.fromCache,r,i)}}/**
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
 */class ud{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class cd{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Xc()?8:kh(Wc())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new ud;return this.Ss(t,e,a).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(Ie()<=$.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ve(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(Ie()<=$.DEBUG&&D("QueryEngine","Query:",ve(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ie()<=$.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ve(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):S.resolve())}ys(t,e){if(Bo(e))return S.resolve(null);let r=bt(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=_s(e,null,"F"),r=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=j(...o);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.Ds(e,l);return this.Cs(e,d,a,h.readTime)?this.ys(t,_s(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ws(t,e,r,i){return Bo(e)||i.isEqual(L.min())?S.resolve(null):this.ps.getDocuments(t,r).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,i)?S.resolve(null):(Ie()<=$.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ve(e)),this.vs(t,a,e,Ph(i,mn)).next((l=>l)))}))}Ds(t,e){let r=new it(Za(t));return e.forEach(((i,o)=>{Tr(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return Ie()<=$.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ve(e)),this.ps.getDocumentsMatchingQuery(t,e,Yt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const Hs="LocalStore",ld=3e8;class hd{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new J(B),this.xs=new pe((o=>xs(o)),Ls),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function fd(n,t,e,r){return new hd(n,t,e,r)}async function Au(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=j();for(const d of i){a.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}for(const d of o){l.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function dd(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,_){const I=d.batch,R=I.keys();let P=S.resolve();return R.forEach((k=>{P=P.next((()=>_.getEntry(h,k))).next((M=>{const b=d.docVersions.get(k);K(b!==null,48541),M.version.compareTo(b)<0&&(I.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),_.addEntry(M)))}))})),P.next((()=>l.mutationQueue.removeMutationBatch(h,I)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=j();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function wu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function md(n,t){const e=F(n),r=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const l=[];t.targetChanges.forEach(((_,I)=>{const R=i.get(I);if(!R)return;l.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,I).next((()=>e.Pi.addMatchingKeys(o,_.addedDocuments,I))));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?P=P.withResumeToken(ft.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,r)),i=i.insert(I,P),(function(M,b,z){return M.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=ld?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(R,P,_)&&l.push(e.Pi.updateTargetData(o,P))}));let h=Ut(),d=j();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),l.push(pd(o,a,t.documentUpdates).next((_=>{h=_.ks,d=_.qs}))),!r.isEqual(L.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next((I=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(_)}return S.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Ms=i,o)))}function pd(n,t,e){let r=j(),i=j();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=Ut();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):D(Hs,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:i}}))}function gd(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=ks),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function _d(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.Pi.getTargetData(r,t).next((o=>o?(i=o,S.resolve(i)):e.Pi.allocateTargetId(r).next((a=>(i=new Ht(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function vs(n,t,e){const r=F(n),i=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!xe(a))throw a;D(Hs,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function Zo(n,t,e){const r=F(n);let i=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,_){const I=F(h),R=I.xs.get(_);return R!==void 0?S.resolve(I.Ms.get(R)):I.Pi.getTargetData(d,_)})(r,a,bt(t)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:j()))).next((l=>(yd(r,ef(t),l),{documents:l,Qs:o})))))}function yd(n,t,e){let r=n.Os.get(t)||L.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class ta{constructor(){this.activeTargetIds=uf()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ed{constructor(){this.Mo=new ta,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new ta,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Td{Oo(t){}shutdown(){}}/**
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
 */const ea="ConnectivityMonitor";class na{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(ea,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){D(ea,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hn=null;function As(){return Hn===null?Hn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hn++,"0x"+Hn.toString(16)}/**
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
 */const rs="RestConnection",Id={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vd{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===ir?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const a=As(),l=this.zo(t,e.toUriEncodedString());D(rs,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:d}=new URL(l),_=Ps(d);return this.Jo(t,l,h,r,_).then((I=>(D(rs,`Received RPC '${t}' ${a}: `,I),I)),(I=>{throw Ce(rs,`RPC '${t}' ${a} failed with error: `,I,"url: ",l,"request:",r),I}))}Ho(t,e,r,i,o,a){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Oe})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=Id[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Ad{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const mt="WebChannelConnection";class wd extends vd{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const a=As();return new Promise(((l,h)=>{const d=new Pa;d.setWithCredentials(!0),d.listenOnce(Va.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Kn.NO_ERROR:const I=d.getResponseJson();D(mt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),l(I);break;case Kn.TIMEOUT:D(mt,`RPC '${t}' ${a} timed out`),h(new N(C.DEADLINE_EXCEEDED,"Request time out"));break;case Kn.HTTP_ERROR:const R=d.getStatus();if(D(mt,`RPC '${t}' ${a} failed with status:`,R,"response text:",d.getResponseText()),R>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const k=P?.error;if(k&&k.status&&k.message){const M=(function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN})(k.status);h(new N(M,k.message))}else h(new N(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(C.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(mt,`RPC '${t}' ${a} completed.`)}}));const _=JSON.stringify(i);D(mt,`RPC '${t}' ${a} sending request:`,i),d.send(e,"POST",_,r,15)}))}T_(t,e,r){const i=As(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Na(),l=Da(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const _=o.join("");D(mt,`Creating RPC '${t}' stream ${i}: ${_}`,h);const I=a.createWebChannel(_,h);this.I_(I);let R=!1,P=!1;const k=new Ad({Yo:b=>{P?D(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(R||(D(mt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),R=!0),D(mt,`RPC '${t}' stream ${i} sending:`,b),I.send(b))},Zo:()=>I.close()}),M=(b,z,G)=>{b.listen(z,(H=>{try{G(H)}catch(_t){setTimeout((()=>{throw _t}),0)}}))};return M(I,tn.EventType.OPEN,(()=>{P||(D(mt,`RPC '${t}' stream ${i} transport opened.`),k.o_())})),M(I,tn.EventType.CLOSE,(()=>{P||(P=!0,D(mt,`RPC '${t}' stream ${i} transport closed`),k.a_(),this.E_(I))})),M(I,tn.EventType.ERROR,(b=>{P||(P=!0,Ce(mt,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),k.a_(new N(C.UNAVAILABLE,"The operation could not be completed")))})),M(I,tn.EventType.MESSAGE,(b=>{if(!P){const z=b.data[0];K(!!z,16349);const G=z,H=G?.error||G[0]?.error;if(H){D(mt,`RPC '${t}' stream ${i} received error:`,H);const _t=H.status;let Tt=(function(m){const g=et[m];if(g!==void 0)return hu(g)})(_t),ot=H.message;Tt===void 0&&(Tt=C.INTERNAL,ot="Unknown error status: "+_t+" with message "+H.message),P=!0,k.a_(new N(Tt,ot)),I.close()}else D(mt,`RPC '${t}' stream ${i} received:`,z),k.u_(z)}})),M(l,ba.STAT_EVENT,(b=>{b.stat===hs.PROXY?D(mt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===hs.NOPROXY&&D(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function ss(){return typeof document<"u"?document:null}/**
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
 */function wr(n){return new Pf(n,!0)}/**
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
 */class Ru{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ra="PersistentStream";class Su{constructor(t,e,r,i,o,a,l,h){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ru(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new N(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return D(ra,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(D(ra,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Rd extends Su{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Df(this.serializer,t),r=(function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Dt(a.readTime):L.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Is(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=gs(h)?{documents:Of(o,h)}:{query:Mf(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=mu(o,a.resumeToken);const d=ys(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=lr(o,a.snapshotVersion.toTimestamp());const d=ys(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=Lf(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Is(this.serializer),e.removeTarget=t,this.q_(e)}}class Sd extends Su{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=kf(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Is(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Nf(this.serializer,r)))};this.q_(e)}}/**
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
 */class Cd{}class Pd extends Cd{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,Es(e,r),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(C.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,Es(e,r),i,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Vd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ft(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const de="RemoteStore";class bd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{_e(this)&&(D(de,"Restarting streams for network reachability change."),await(async function(h){const d=F(h);d.Ea.add(4),await Rn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Rr(d)})(this))}))})),this.Ra=new Vd(r,i)}}async function Rr(n){if(_e(n))for(const t of n.da)await t(!0)}async function Rn(n){for(const t of n.da)await t(!1)}function Cu(n,t){const e=F(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Xs(e)?Qs(e):Le(e).O_()&&Ws(e,t))}function Ks(n,t){const e=F(n),r=Le(e);e.Ia.delete(t),r.O_()&&Pu(e,t),e.Ia.size===0&&(r.O_()?r.L_():_e(e)&&e.Ra.set("Unknown"))}function Ws(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Le(n).Y_(t)}function Pu(n,t){n.Va.Ue(t),Le(n).Z_(t)}function Qs(n){n.Va=new wf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Le(n).start(),n.Ra.ua()}function Xs(n){return _e(n)&&!Le(n).x_()&&n.Ia.size>0}function _e(n){return F(n).Ea.size===0}function Vu(n){n.Va=void 0}async function Dd(n){n.Ra.set("Online")}async function Nd(n){n.Ia.forEach(((t,e)=>{Ws(n,t)}))}async function kd(n,t){Vu(n),Xs(n)?(n.Ra.ha(t),Qs(n)):n.Ra.set("Unknown")}async function Od(n,t,e){if(n.Ra.set("Online"),t instanceof du&&t.state===2&&t.cause)try{await(async function(i,o){const a=o.cause;for(const l of o.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ia.delete(l),i.Va.removeTarget(l))})(n,t)}catch(r){D(de,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await fr(n,r)}else if(t instanceof Yn?n.Va.Ze(t):t instanceof fu?n.Va.st(t):n.Va.tt(t),!e.isEqual(L.min()))try{const r=await wu(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.Ia.get(d);_&&o.Ia.set(d,_.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const _=o.Ia.get(h);if(!_)return;o.Ia.set(h,_.withResumeToken(ft.EMPTY_BYTE_STRING,_.snapshotVersion)),Pu(o,h);const I=new Ht(_.target,h,d,_.sequenceNumber);Ws(o,I)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){D(de,"Failed to raise snapshot:",r),await fr(n,r)}}async function fr(n,t,e){if(!xe(t))throw t;n.Ea.add(1),await Rn(n),n.Ra.set("Offline"),e||(e=()=>wu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{D(de,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Rr(n)}))}function bu(n,t){return t().catch((e=>fr(n,e,t)))}async function Sr(n){const t=F(n),e=ee(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ks;for(;Md(t);)try{const i=await gd(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,xd(t,i)}catch(i){await fr(t,i)}Du(t)&&Nu(t)}function Md(n){return _e(n)&&n.Ta.length<10}function xd(n,t){n.Ta.push(t);const e=ee(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Du(n){return _e(n)&&!ee(n).x_()&&n.Ta.length>0}function Nu(n){ee(n).start()}async function Ld(n){ee(n).ra()}async function Fd(n){const t=ee(n);for(const e of n.Ta)t.ea(e.mutations)}async function Ud(n,t,e){const r=n.Ta.shift(),i=Bs.from(r,t,e);await bu(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Sr(n)}async function Bd(n,t){t&&ee(n).X_&&await(async function(r,i){if((function(a){return If(a)&&a!==C.ABORTED})(i.code)){const o=r.Ta.shift();ee(r).B_(),await bu(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Sr(r)}})(n,t),Du(n)&&Nu(n)}async function sa(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),D(de,"RemoteStore received new credentials");const r=_e(e);e.Ea.add(3),await Rn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Rr(e)}async function jd(n,t){const e=F(n);t?(e.Ea.delete(2),await Rr(e)):t||(e.Ea.add(2),await Rn(e),e.Ra.set("Unknown"))}function Le(n){return n.ma||(n.ma=(function(e,r,i){const o=F(e);return o.sa(),new Rd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Dd.bind(null,n),t_:Nd.bind(null,n),r_:kd.bind(null,n),H_:Od.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Xs(n)?Qs(n):n.Ra.set("Unknown")):(await n.ma.stop(),Vu(n))}))),n.ma}function ee(n){return n.fa||(n.fa=(function(e,r,i){const o=F(e);return o.sa(),new Sd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ld.bind(null,n),r_:Bd.bind(null,n),ta:Fd.bind(null,n),na:Ud.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Sr(n)):(await n.fa.stop(),n.Ta.length>0&&(D(de,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Ys{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new Ys(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Js(n,t){if(Ft("AsyncQueue",`${t}: ${n}`),xe(n))return new N(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Se{static emptySet(t){return new Se(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=en(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Se)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Se;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ia{constructor(){this.ga=new J(O.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):x(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Ne{constructor(t,e,r,i,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new Ne(t,e,Se.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Er(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class qd{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class $d{constructor(){this.queries=oa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=oa(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new N(C.ABORTED,"Firestore shutting down"))}}function oa(){return new pe((n=>Ja(n)),Er)}async function zd(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(r=2):(o=new qd,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=Js(a,`Initialization of query '${ve(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Zs(e)}async function Gd(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Hd(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(i)&&(r=!0);a.wa=i}}r&&Zs(e)}function Kd(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function Zs(n){n.Ca.forEach((t=>{t.next()}))}var ws,aa;(aa=ws||(ws={})).Ma="default",aa.Cache="cache";class Wd{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ne(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Ne.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ws.Cache}}/**
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
 */class ku{constructor(t){this.key=t}}class Ou{constructor(t){this.key=t}}class Qd{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=j(),this.mutatedKeys=j(),this.eu=Za(t),this.tu=new Se(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new ia,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((_,I)=>{const R=i.get(_),P=Tr(this.query,I)?I:null,k=!!R&&this.mutatedKeys.has(R.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;R&&P?R.data.isEqual(P.data)?k!==M&&(r.track({type:3,doc:P}),b=!0):this.su(R,P)||(r.track({type:2,doc:P}),b=!0,(h&&this.eu(P,h)>0||d&&this.eu(P,d)<0)&&(l=!0)):!R&&P?(r.track({type:0,doc:P}),b=!0):R&&!P&&(r.track({type:1,doc:R}),b=!0,(h||d)&&(l=!0)),b&&(P?(a=a.add(P),o=M?o.add(_):o.delete(_)):(a=a.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const _=this.query.limitType==="F"?a.last():a.first();a=a.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((_,I)=>(function(P,k){const M=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Rt:b})}};return M(P)-M(k)})(_.type,I.type)||this.eu(_.doc,I.doc))),this.ou(r),i=i??!1;const l=e&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new Ne(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ia,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=j(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new Ou(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new ku(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ne.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ti="SyncEngine";class Xd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Yd{constructor(t){this.key=t,this.hu=!1}}class Jd{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new pe((l=>Ja(l)),Er),this.Iu=new Map,this.Eu=new Set,this.du=new J(O.comparator),this.Au=new Map,this.Ru=new $s,this.Vu={},this.mu=new Map,this.fu=De.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Zd(n,t,e=!0){const r=Bu(n);let i;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await Mu(r,t,e,!0),i}async function tm(n,t){const e=Bu(n);await Mu(e,t,!0,!1)}async function Mu(n,t,e,r){const i=await _d(n.localStore,bt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await em(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Cu(n.remoteStore,i),l}async function em(n,t,e,r,i){n.pu=(I,R,P)=>(async function(M,b,z,G){let H=b.view.ru(z);H.Cs&&(H=await Zo(M.localStore,b.query,!1).then((({documents:E})=>b.view.ru(E,H))));const _t=G&&G.targetChanges.get(b.targetId),Tt=G&&G.targetMismatches.get(b.targetId)!=null,ot=b.view.applyChanges(H,M.isPrimaryClient,_t,Tt);return ca(M,b.targetId,ot.au),ot.snapshot})(n,I,R,P);const o=await Zo(n.localStore,t,!0),a=new Qd(t,o.Qs),l=a.ru(o.documents),h=wn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,h);ca(n,e,d.au);const _=new Xd(t,e,a);return n.Tu.set(t,_),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function nm(n,t,e){const r=F(n),i=r.Tu.get(t),o=r.Iu.get(i.targetId);if(o.length>1)return r.Iu.set(i.targetId,o.filter((a=>!Er(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vs(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Ks(r.remoteStore,i.targetId),Rs(r,i.targetId)})).catch(Me)):(Rs(r,i.targetId),await vs(r.localStore,i.targetId,!0))}async function rm(n,t){const e=F(n),r=e.Tu.get(t),i=e.Iu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ks(e.remoteStore,r.targetId))}async function sm(n,t,e){const r=hm(n);try{const i=await(function(a,l){const h=F(a),d=X.now(),_=l.reduce(((P,k)=>P.add(k.key)),j());let I,R;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let k=Ut(),M=j();return h.Ns.getEntries(P,_).next((b=>{k=b,k.forEach(((z,G)=>{G.isValidDocument()||(M=M.add(z))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,k))).next((b=>{I=b;const z=[];for(const G of l){const H=gf(G,I.get(G.key).overlayedDocument);H!=null&&z.push(new ge(G.key,H,Ga(H.value.mapValue),xt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,z,l)})).next((b=>{R=b;const z=b.applyToLocalDocumentSet(I,M);return h.documentOverlayCache.saveOverlays(P,b.batchId,z)}))})).then((()=>({batchId:R.batchId,changes:eu(I)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(a,l,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new J(B)),d=d.insert(l,h),a.Vu[a.currentUser.toKey()]=d})(r,i.batchId,e),await Sn(r,i.changes),await Sr(r.remoteStore)}catch(i){const o=Js(i,"Failed to persist write");e.reject(o)}}async function xu(n,t){const e=F(n);try{const r=await md(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const a=e.Au.get(o);a&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?K(a.hu,14607):i.removedDocuments.size>0&&(K(a.hu,42227),a.hu=!1))})),await Sn(e,r,t)}catch(r){await Me(r)}}function ua(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const h=F(a);h.onlineState=l;let d=!1;h.queries.forEach(((_,I)=>{for(const R of I.Sa)R.va(l)&&(d=!0)})),d&&Zs(h)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function im(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Au.get(t),o=i&&i.key;if(o){let a=new J(O.comparator);a=a.insert(o,gt.newNoDocument(o,L.min()));const l=j().add(o),h=new Ar(L.min(),new Map,new J(B),a,l);await xu(r,h),r.du=r.du.remove(o),r.Au.delete(t),ei(r)}else await vs(r.localStore,t,!1).then((()=>Rs(r,t,e))).catch(Me)}async function om(n,t){const e=F(n),r=t.batch.batchId;try{const i=await dd(e.localStore,t);Fu(e,r,null),Lu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Sn(e,i)}catch(i){await Me(i)}}async function am(n,t,e){const r=F(n);try{const i=await(function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let _;return h.mutationQueue.lookupMutationBatch(d,l).next((I=>(K(I!==null,37113),_=I.keys(),h.mutationQueue.removeMutationBatch(d,I)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,_,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_))).next((()=>h.localDocuments.getDocuments(d,_)))}))})(r.localStore,t);Fu(r,t,e),Lu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Sn(r,i)}catch(i){await Me(i)}}function Lu(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Fu(n,t,e){const r=F(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function Rs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||Uu(n,r)}))}function Uu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Ks(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),ei(n))}function ca(n,t,e){for(const r of e)r instanceof ku?(n.Ru.addReference(r.key,t),um(n,r)):r instanceof Ou?(D(ti,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||Uu(n,r.key)):x(19791,{wu:r})}function um(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(D(ti,"New document in limbo: "+e),n.Eu.add(r),ei(n))}function ei(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new O(Y.fromString(t)),r=n.fu.next();n.Au.set(r,new Yd(e)),n.du=n.du.insert(e,r),Cu(n.remoteStore,new Ht(bt(Fs(e.path)),r,"TargetPurposeLimboResolution",pr.ce))}}async function Sn(n,t,e){const r=F(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const _=d?!d.fromCache:e?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){i.push(d);const _=Gs.As(h.targetId,d);o.push(_)}})))})),await Promise.all(a),r.Pu.H_(i),await(async function(h,d){const _=F(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>S.forEach(d,(R=>S.forEach(R.Es,(P=>_.persistence.referenceDelegate.addReference(I,R.targetId,P))).next((()=>S.forEach(R.ds,(P=>_.persistence.referenceDelegate.removeReference(I,R.targetId,P)))))))))}catch(I){if(!xe(I))throw I;D(Hs,"Failed to update sequence numbers: "+I)}for(const I of d){const R=I.targetId;if(!I.fromCache){const P=_.Ms.get(R),k=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(k);_.Ms=_.Ms.insert(R,M)}}})(r.localStore,o))}async function cm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){D(ti,"User change. New user:",t.toKey());const r=await Au(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new N(C.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Sn(e,r.Ls)}}function lm(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return j().add(r.key);{let i=j();const o=e.Iu.get(t);if(!o)return i;for(const a of o){const l=e.Tu.get(a);i=i.unionWith(l.view.nu)}return i}}function Bu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=xu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=im.bind(null,t),t.Pu.H_=Hd.bind(null,t.eventManager),t.Pu.yu=Kd.bind(null,t.eventManager),t}function hm(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=om.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=am.bind(null,t),t}class dr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=wr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return fd(this.persistence,new cd,t.initialUser,this.serializer)}Cu(t){return new vu(zs.mi,this.serializer)}Du(t){return new Ed}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dr.provider={build:()=>new dr};class fm extends dr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){K(this.persistence.referenceDelegate instanceof hr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Wf(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new vu((r=>hr.mi(r,e)),this.serializer)}}class Ss{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ua(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cm.bind(null,this.syncEngine),await jd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new $d})()}createDatastore(t){const e=wr(t.databaseInfo.databaseId),r=(function(o){return new wd(o)})(t.databaseInfo);return(function(o,a,l,h){return new Pd(o,a,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,a,l){return new bd(r,i,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>ua(this.syncEngine,e,0)),(function(){return na.v()?new na:new Td})())}createSyncEngine(t,e){return(function(i,o,a,l,h,d,_){const I=new Jd(i,o,a,l,h,d);return _&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=F(e);D(de,"RemoteStore shutting down."),r.Ea.add(5),await Rn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ss.provider={build:()=>new Ss};/**
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
 *//**
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
 */class dm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const ne="FirestoreClient";class mm{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Ds.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{D(ne,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(D(ne,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Js(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function is(n,t){n.asyncQueue.verifyOperationInProgress(),D(ne,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Au(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function la(n,t){n.asyncQueue.verifyOperationInProgress();const e=await pm(n);D(ne,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>sa(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>sa(t.remoteStore,i))),n._onlineComponents=t}async function pm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(ne,"Using user provided OfflineComponentProvider");try{await is(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Ce("Error using user provided cache. Falling back to memory cache: "+e),await is(n,new dr)}}else D(ne,"Using default OfflineComponentProvider"),await is(n,new fm(void 0));return n._offlineComponents}async function ju(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(ne,"Using user provided OnlineComponentProvider"),await la(n,n._uninitializedComponentsProvider._online)):(D(ne,"Using default OnlineComponentProvider"),await la(n,new Ss))),n._onlineComponents}function gm(n){return ju(n).then((t=>t.syncEngine))}async function _m(n){const t=await ju(n),e=t.eventManager;return e.onListen=Zd.bind(null,t.syncEngine),e.onUnlisten=nm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=tm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=rm.bind(null,t.syncEngine),e}function ym(n,t,e={}){const r=new Xt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,d){const _=new dm({next:R=>{_.Nu(),a.enqueueAndForget((()=>Gd(o,I)));const P=R.docs.has(l);!P&&R.fromCache?d.reject(new N(C.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&R.fromCache&&h&&h.source==="server"?d.reject(new N(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),I=new Wd(Fs(l.path),_,{includeMetadataChanges:!0,qa:!0});return zd(o,I)})(await _m(n),n.asyncQueue,t,e,r))),r.promise}/**
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
 */function qu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ha=new Map;/**
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
 */const $u="firestore.googleapis.com",fa=!0;class da{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$u,this.ssl=fa}else this.host=t.host,this.ssl=t.ssl??fa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Iu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Hf)throw new N(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ch("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qu(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ni{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new da({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new da(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new gh;switch(r.type){case"firstParty":return new Th(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=ha.get(e);r&&(D("ComponentProvider","Removing Datastore"),ha.delete(e),r.terminate())})(this),Promise.resolve()}}function Em(n,t,e,r={}){n=dn(n,ni);const i=Ps(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;i&&($c(`https://${l}`),Kc("Firestore",!0)),o.host!==$u&&o.host!==l&&Ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:i,emulatorOptions:r};if(!tr(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,_;if(typeof r.mockUserToken=="string")d=r.mockUserToken,_=pt.MOCK_USER;else{d=zc(r.mockUserToken,n._app?.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new N(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new pt(I)}n._authCredentials=new _h(new Oa(d,_))}}/**
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
 */class ri{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ri(this.firestore,t,this._query)}}class ct{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(vn(e,ct._jsonSchema))return new ct(t,r||null,new O(Y.fromString(e.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:nt("string",ct._jsonSchemaVersion),referencePath:nt("string")};class In extends ri{constructor(t,e,r){super(t,e,Fs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new O(t))}withConverter(t){return new In(this.firestore,t,this._path)}}function Bm(n,t,...e){if(n=er(n),arguments.length===1&&(t=Ds.newId()),Sh("doc","path",t),n instanceof ni){const r=Y.fromString(t,...e);return Co(r),new ct(n,null,new O(r))}{if(!(n instanceof ct||n instanceof In))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Co(r),new ct(n.firestore,n instanceof In?n.converter:null,new O(r))}}/**
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
 */const ma="AsyncQueue";class pa{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ru(this,"async_queue_retry"),this._c=()=>{const r=ss();r&&D(ma,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ss();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ss();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Xt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!xe(t))throw t;D(ma,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Ft("INTERNAL UNHANDLED ERROR: ",ga(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Ys.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&x(47125,{Pc:ga(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ga(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class si extends ni{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new pa,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new pa(t),this._firestoreClient=void 0,await t}}}function Tm(n,t){const e=typeof n=="object"?n:rh(),r=typeof n=="string"?n:ir,i=Jl(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=jc("firestore");o&&Em(i,...o)}return i}function zu(n){if(n._terminated)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Im(n),n._firestoreClient}function Im(n){const t=n._freezeSettings(),e=(function(i,o,a,l){return new Fh(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,qu(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new mm(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
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
 */class Rt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rt(ft.fromBase64String(t))}catch(e){throw new N(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rt(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(vn(t,Rt._jsonSchema))return Rt.fromBase64String(t.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:nt("string",Rt._jsonSchemaVersion),bytes:nt("string")};/**
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
 */class ii{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class oi{constructor(t){this._methodName=t}}/**
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
 */class Nt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nt._jsonSchemaVersion}}static fromJSON(t){if(vn(t,Nt._jsonSchema))return new Nt(t.latitude,t.longitude)}}Nt._jsonSchemaVersion="firestore/geoPoint/1.0",Nt._jsonSchema={type:nt("string",Nt._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
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
 */class kt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(vn(t,kt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new kt(t.vectorValues);throw new N(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kt._jsonSchemaVersion="firestore/vectorValue/1.0",kt._jsonSchema={type:nt("string",kt._jsonSchemaVersion),vectorValues:nt("object")};/**
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
 */const vm=/^__.*__$/;class Am{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new An(t,this.data,e,this.fieldTransforms)}}function Gu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:n})}}class ai{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new ai({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return mr(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Gu(this.Ac)&&vm.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class wm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||wr(t)}Cc(t,e,r,i=!1){return new ai({Ac:t,methodName:e,Dc:r,path:ht.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rm(n){const t=n._freezeSettings(),e=wr(n._databaseId);return new wm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Sm(n,t,e,r,i,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);Qu("Data must be an object, but it was:",a,r);const l=Ku(r,a);let h,d;if(o.merge)h=new St(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const _=[];for(const I of o.mergeFields){const R=Cm(t,I,e);if(!a.contains(R))throw new N(C.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Vm(_,R)||_.push(R)}h=new St(_),d=a.fieldTransforms.filter((I=>h.covers(I.field)))}else h=null,d=a.fieldTransforms;return new Am(new wt(l),h,d)}class ui extends oi{_toFieldTransform(t){return new ff(t.path,new yn)}isEqual(t){return t instanceof ui}}function Hu(n,t){if(Wu(n=er(n)))return Qu("Unsupported field value:",t,n),Ku(n,t);if(n instanceof oi)return(function(r,i){if(!Gu(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let h=Hu(l,i.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=er(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=X.fromDate(r);return{timestampValue:lr(i.serializer,o)}}if(r instanceof X){const o=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lr(i.serializer,o)}}if(r instanceof Nt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:mu(i.serializer,r._byteString)};if(r instanceof ct){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:qs(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof kt)return(function(a,l){return{mapValue:{fields:{[$a]:{stringValue:za},[or]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Us(l.serializer,d)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Ns(r)}`)})(n,t)}function Ku(n,t){const e={};return La(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(n,((r,i)=>{const o=Hu(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Wu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Nt||n instanceof Rt||n instanceof ct||n instanceof oi||n instanceof kt)}function Qu(n,t,e){if(!Wu(e)||!Ma(e)){const r=Ns(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function Cm(n,t,e){if((t=er(t))instanceof ii)return t._internalPath;if(typeof t=="string")return Xu(n,t);throw mr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Pm=new RegExp("[~\\*/\\[\\]]");function Xu(n,t,e){if(t.search(Pm)>=0)throw mr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ii(...t.split("."))._internalPath}catch{throw mr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function mr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new N(C.INVALID_ARGUMENT,l+n+h)}function Vm(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class Yu{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ju("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class bm extends Yu{data(){return super.data()}}function Ju(n,t){return typeof t=="string"?Xu(n,t):t instanceof ii?t._internalPath:t._delegate._internalPath}class Dm{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return me(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[or].arrayValue?.values?.map((r=>tt(r.doubleValue)));return new kt(e)}convertGeoPoint(t){return new Nt(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=_r(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(pn(t));default:return null}}convertTimestamp(t){const e=Jt(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);K(Tu(r),9688,{name:t});const i=new gn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Nm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class rn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class he extends Yu{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ju("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=he._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}he._jsonSchemaVersion="firestore/documentSnapshot/1.0",he._jsonSchema={type:nt("string",he._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class Jn extends he{data(t={}){return super.data(t)}}class ln{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new rn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Jn(this._firestore,this._userDataWriter,r.key,r,new rn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const h=new Jn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new rn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new Jn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new rn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),_=a.indexOf(l.doc.key)),{type:km(l.type),doc:h,oldIndex:d,newIndex:_}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ln._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ds.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function km(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
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
 */function jm(n){n=dn(n,ct);const t=dn(n.firestore,si);return ym(zu(t),n._key).then((e=>xm(t,n,e)))}ln._jsonSchemaVersion="firestore/querySnapshot/1.0",ln._jsonSchema={type:nt("string",ln._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class Om extends Dm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ct(this.firestore,null,e)}}function qm(n,t,e){n=dn(n,ct);const r=dn(n.firestore,si),i=Nm(n.converter,t);return Mm(r,[Sm(Rm(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,xt.none())])}function Mm(n,t){return(function(r,i){const o=new Xt;return r.asyncQueue.enqueueAndForget((async()=>sm(await gm(r),i,o))),o.promise})(zu(n),t)}function xm(n,t,e){const r=e.docs.get(t._key),i=new Om(n);return new he(n,i,t._key,r,new rn(e.hasPendingWrites,e.fromCache),t.converter)}function $m(){return new ui("serverTimestamp")}(function(t,e=!0){(function(i){Oe=i})(nh),rr(new hn("firestore",((r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new si(new yh(r.getProvider("auth-internal")),new Ih(a,r.getProvider("app-check-internal")),(function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(d.options.projectId,_)})(a,i),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Re(Ao,wo,t),Re(Ao,wo,"esm2020")})();const Lm={apiKey:"AIzaSyDupsyo_vkOQ3A-Jm5mbmGnzf8fsGwEBG0",authDomain:"club-msd.firebaseapp.com",projectId:"club-msd",storageBucket:"club-msd.firebasestorage.app",messagingSenderId:"1017786712432",appId:"1:1017786712432:web:de797dc1006cc58c97cfb5",measurementId:"G-FWF2CJDVGZ"},Fm=wa(Lm),zm=Tm(Fm);export{zm as a,$m as b,Bm as d,jm as g,qm as s};
