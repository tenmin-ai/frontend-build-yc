(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3175],{31814:function(e,t,r){Promise.resolve().then(r.bind(r,1130))},1130:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var i=r(57437),n=r(2265),a=r(18079),s=r(99376),l=r(61273),o=r(49677),c=r(56870);function d(){let e=(0,s.useSearchParams)(),t=(0,s.useRouter)(),r=(0,c.Y)(),[d,u]=(0,n.useState)([]),h=async()=>{u((await navigator.mediaDevices.enumerateDevices()).filter(e=>"audioinput"===e.kind));let e=d.find(e=>e.label.includes("AirPods"));e&&m(e.deviceId)};(0,n.useEffect)(()=>{if(void 0===navigator.mediaDevices){console.log("navigator.mediaDevices is undefined");return}h(),navigator.mediaDevices.ondevicechange=h},[]),(0,n.useEffect)(()=>{let e=setInterval(()=>{h()},1e3);return()=>clearInterval(e)},[]);let{selectedMic:f,acquireMic:m,isVoiceDetected:v}=(0,o.Z)({recordingChunkSize:100}),[p,g]=(0,n.useState)(!1),[b,y]=(0,n.useState)("Beginner"),[x,w]=(0,n.useState)(!1),j=(e,i,n)=>{w(!0),(0,a.oY)({path:{service:"ws"},query:{tutoring_id:e,lesson_id:i,mode:n}}).then(e=>{e.data&&(r.resume(),t.push("/call?session_id=".concat(e.data.session_id)))}).catch(e=>{console.error(e)})};return(0,i.jsxs)("main",{className:"h-screen-safe flex flex-col justify-between bg-[#FAFBFF] pt-5 tracking-[-0.02em]",children:[(0,i.jsx)("div",{className:"flex w-full flex-col items-center px-7 pb-6",children:(0,i.jsxs)("div",{className:"flex w-full items-center justify-between px-1",children:[(0,i.jsx)("button",{className:"flex h-12 items-center justify-center self-start rounded-full text-black",onClick:()=>{t.push("/")},children:(0,i.jsx)(l._0w,{className:"text-xl"})}),(0,i.jsx)("button",{className:"flex h-12 items-center justify-center self-start rounded-full text-black/30",onClick:()=>{},children:(0,i.jsx)(l.kvo,{className:"text-xl"})})]})}),(0,i.jsx)("div",{className:"overflow-y-auto",children:e.get("tutoring_id")&&e.get("lesson_id")?(0,i.jsxs)("div",{className:"flex flex-col gap-5 px-7",children:[(0,i.jsx)("div",{className:"flex h-full w-full flex-col items-center justify-center gap-4 pb-12",children:[{name:"Beginner",value:"Beginner",description:"We give you all the cheats!",emoji:"\uD83D\uDC66\uD83C\uDFFB",activated:!0},{name:"Intermediate",value:"Intermediate",description:"Can you deal without translations?",emoji:"\uD83C\uDFEB",activated:!0},{name:"Advanced",value:"Advanced",description:"No more training wheels!",emoji:"\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDF93",activated:!0},{name:"Native (Experimental)",value:"Realtime",description:"Real time conversation like a native!",emoji:"\uD83E\uDDD0",activated:!0}].map(e=>(0,i.jsxs)("button",{className:"flex w-full items-center gap-3 rounded-lg border-[1px] px-7 py-4 text-base ".concat(b===e.value?"border-[#0039FF] bg-[#0039FF]/5 text-[#0039FF]":"border-black/10 bg-white"," ").concat(!e.activated&&"opacity-50"),onClick:()=>{e.activated&&y(e.value)},children:[(0,i.jsx)("p",{className:"mr-3 text-2xl",children:e.emoji}),(0,i.jsxs)("div",{className:"text-left",children:[(0,i.jsx)("p",{className:"font-medium",children:e.name}),(0,i.jsx)("p",{className:"text-sm font-light text-black/50",children:e.description})]})]},e.value))}),(0,i.jsxs)("button",{className:"text-center font-light text-black/30 underline",onClick:()=>{g(!p)},children:[p?"Hide":"Show"," audio device options"]}),p&&(0,i.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,i.jsx)("div",{className:"flex flex-col gap-2",children:d.map(e=>(0,i.jsx)("button",{className:"flex w-full items-center justify-between rounded-lg border px-3 py-3 font-normal ".concat(f==e.deviceId?"border-[#0039FF] bg-[#0039FF]/5 text-[#0039FF]":"bg-white"),onClick:()=>{m(e.deviceId)},children:(0,i.jsx)("p",{className:"text-sm",children:e.label||"Unknown Microphone"})},e.deviceId))}),(0,i.jsxs)("div",{className:"mb-12 flex items-center gap-2 text-sm text-black/30",children:[(0,i.jsx)("p",{children:"Try speaking to test your microphone:"}),(0,i.jsx)("div",{className:"flex h-1 w-8 items-center justify-center rounded-full ".concat(v?"bg-green-500":"bg-black/10")})]})]})]}):(0,i.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold text-black",children:"No Lesson Found"}),(0,i.jsx)("p",{className:"text-gray-500",children:"No lesson found to start."})]})}),(0,i.jsx)("div",{className:"pointer-events-none w-full justify-end gap-5 tracking-[-0.02em]",children:(0,i.jsx)("div",{className:"pointer-events-auto flex w-full flex-col gap-4 border-t-2 border-black/10 bg-white pb-10 pt-6",children:(0,i.jsx)("button",{className:"mx-8 flex h-[3.6rem] flex-grow items-center justify-center rounded-full bg-[#0039FF] px-4 font-bold text-white",onClick:()=>{j(e.get("tutoring_id"),e.get("lesson_id"),b)},children:x?(0,i.jsx)(l.fCD,{className:"animate-spin"}):(0,i.jsx)("p",{className:"text-lg font-medium",children:"Start"})})})})]})}},56870:function(e,t,r){"use strict";r.d(t,{GlobalAudioContextProvider:function(){return s},Y:function(){return l}});var i=r(57437),n=r(2265);let a=(0,n.createContext)(null),s=e=>{let{children:t}=e,r=(0,n.useRef)(null);return r.current||(console.log("creating audio context"),r.current=new AudioContext,r.current.onstatechange=()=>{var e,t,i,n,a,s;if(console.log("onstagechange - AudioContext state changed: ",null===(e=r.current)||void 0===e?void 0:e.state),(null===(t=r.current)||void 0===t?void 0:t.state)==="suspended"&&(console.log("Attempting to resume AudioContext..."),null===(a=r.current)||void 0===a||a.resume().then(()=>{var e;console.log("AudioContext state: ",null===(e=r.current)||void 0===e?void 0:e.state)}).catch(e=>{console.error("Failed to resume AudioContext:",e)})),(null===(i=r.current)||void 0===i?void 0:i.state.toString())==="interrupted"&&console.log("Safari interrupted audiocontext, but won't resume for now..."),(null===(n=r.current)||void 0===n?void 0:n.state)==="running"){let e=null===(s=r.current)||void 0===s?void 0:s.currentTime;setTimeout(()=>{var t;(null===(t=r.current)||void 0===t?void 0:t.currentTime)===e&&console.warn("AudioContext currentTime is stuck, attempting to fix...")},100)}}),(0,i.jsx)(a.Provider,{value:r.current,children:t})},l=()=>{let e=(0,n.useContext)(a);if(!e)throw Error("useAudioContext must be used within a GlobalAudioContextProvider");return e}},49677:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var i=r(2265),n=r(9800);class a{init(){if(this.isInitialized){console.warn("MicManager: already initialized");return}if(this.initializing){console.warn("MicManager: already initializing");return}this.initializing=this._init()}async _init(){var e;for(let t of(console.log("MicManager init start...",this),this.mediaStream=await navigator.mediaDevices.getUserMedia({audio:{deviceId:null!==(e=this.selectedMicId)&&void 0!==e?e:void 0,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,sampleRate:16e3}}),this.mediaStream.getAudioTracks()))t.enabled=!this.isMuted;this.mediaRecorder=new MediaRecorder(this.mediaStream),await this.initVad(),this.isInitialized=!0,this.initializing=null,console.log("MicManager init complete.")}async initVad(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.mediaStream){console.warn("MicManager: no mediaStream to initVad");return}if(this.vad&&!e){console.warn("MicManager: vad already initialized");return}this.vad&&(console.warn("MicManager: vad already initialized, but forcing re-init"),this.destroyVad()),this.vad=await n.MicVAD.new({baseAssetPath:"/vad/",onnxWASMBasePath:"/vad/",stream:this.mediaStream,onSpeechStart:()=>{var e;this.isVoiceDetected=!0,null===(e=this.onSpeechStart)||void 0===e||e.call(this)},onVADMisfire:()=>{var e;this.isVoiceDetected=!1,null===(e=this.onSpeechEnd)||void 0===e||e.call(this,!0)},onSpeechEnd:()=>{var e;this.isVoiceDetected=!1,null===(e=this.onSpeechEnd)||void 0===e||e.call(this,!1)},onFrameProcessed:(e,t)=>{var r,i;this.lastPCMTimestamp=Date.now();let n=new ArrayBuffer(2*t.length),a=new DataView(n);for(let e=0;e<t.length;e++)a.setInt16(2*e,32767*t[e],!0);null===(r=this.onAlwaysPCMData)||void 0===r||r.call(this,n),this.capturingPCM&&(null===(i=this.onPCMData)||void 0===i||i.call(this,n))}}),this.vad.start()}destroyVad(){this.vad?(this.vad.destroy(),this.vad=null,this.lastPCMTimestamp=null):console.warn("MicManager: no vad to destroy")}async ensureVad(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.vad&&this.lastPCMTimestamp&&Date.now()-this.lastPCMTimestamp<e||(console.warn("MicManager: vad is broken, re-initializing..."),await this.initVad(!0))}startPCM(){this.capturingPCM=!0}stopPCM(){this.capturingPCM=!1}setMuted(){var e;let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];this.isMuted!==t&&(this.ensureVad(),this.isMuted=t,null===(e=this.mediaStream)||void 0===e||e.getAudioTracks().forEach(e=>{e.enabled=!t}))}startRecording(){if(this.mediaRecorder||console.warn("MicManager: no mediaRecorder to start"),this.isRecording){console.warn("MicManager: already recording");return}this.ensureVad(),this.isRecording=!0,this.wasCancelled=!1,this.startPCM(),this.mediaRecorder&&(this.mediaRecorder.ondataavailable=e=>{this.lastDataAvailablePromise=(async()=>{var t;let r=await e.data.arrayBuffer();null===(t=this.onAudioData)||void 0===t||t.call(this,r)})()},this.mediaRecorder.onstart=()=>{var e;null===(e=this.onRecordingStart)||void 0===e||e.call(this)},this.mediaRecorder.onstop=async()=>{var e;this.lastDataAvailablePromise&&await this.lastDataAvailablePromise,this.isRecording=!1,null===(e=this.onRecordingStop)||void 0===e||e.call(this,this.wasCancelled)},this.mediaRecorder.start(this.recordingChunkSize))}stopRecording(){var e;this.isRecording&&(this.ensureVad(),this.stopPCM(),null===(e=this.mediaRecorder)||void 0===e||e.stop())}cancelRecording(){this.isRecording&&(this.ensureVad(),this.wasCancelled=!0,this.stopRecording())}async destroy(){if(!this.isInitialized&&!this.initializing){console.warn("MicManager: not initialized nor initializing");return}if(this.initializing&&(console.info("MicManager: still initializing, waiting..."),await this.initializing),console.log("MicManager: destroying..."),this.destroyVad(),this.mediaRecorder&&(this.mediaRecorder.stop(),this.mediaRecorder.ondataavailable=null,this.mediaRecorder.onstop=null,this.mediaRecorder.onstart=null,this.mediaRecorder=null),this.mediaStream&&(this.mediaStream.getTracks().forEach(e=>e.stop()),this.mediaStream=null),this.isVoiceDetected){var e;this.isVoiceDetected=!1,null===(e=this.onSpeechEnd)||void 0===e||e.call(this,!1)}this.isRecording=!1,this.wasCancelled=!1,this.capturingPCM=!1,this.isInitialized=!1,console.log("MicManager: destroyed")}constructor({recordingChunkSize:e=100,selectedMicId:t=null,onSpeechStart:r,onSpeechEnd:i,onAlwaysPCMData:n,onPCMData:a,onAudioData:s,onRecordingStart:l,onRecordingStop:o}){this.mediaStream=null,this.mediaRecorder=null,this.vad=null,this.isMuted=!1,this.isRecording=!1,this.wasCancelled=!1,this.isVoiceDetected=!1,this.capturingPCM=!1,this.lastPCMTimestamp=null,this.lastDataAvailablePromise=null,this.isInitialized=!1,this.initializing=null,this.recordingChunkSize=e,this.selectedMicId=t,this.onSpeechStart=r,this.onSpeechEnd=i,this.onAlwaysPCMData=n,this.onPCMData=a,this.onAudioData=s,this.onRecordingStart=l,this.onRecordingStop=o}}function s(e){let{startMuted:t=!1,recordingChunkSize:r=100,onSpeechStart:n,onSpeechEnd:s,onAlwaysPCMData:l,onPCMData:o,onAudioData:c,onRecordingStart:d,onRecordingStop:u}=e,[h,f]=(0,i.useState)("AirPods"),[m,v]=(0,i.useState)(!1),[p,g]=(0,i.useState)(!1),[b,y]=(0,i.useState)(t),x=(0,i.useRef)(null),w=(0,i.useRef)(n),j=(0,i.useRef)(s),C=(0,i.useRef)(l),S=(0,i.useRef)(o),R=(0,i.useRef)(c),M=(0,i.useRef)(d),D=(0,i.useRef)(u);return(0,i.useEffect)(()=>{w.current=n},[n]),(0,i.useEffect)(()=>{j.current=s},[s]),(0,i.useEffect)(()=>{C.current=l},[l]),(0,i.useEffect)(()=>{S.current=o},[o]),(0,i.useEffect)(()=>{R.current=c},[c]),(0,i.useEffect)(()=>{M.current=d},[d]),(0,i.useEffect)(()=>{D.current=u},[u]),(0,i.useEffect)(()=>{let e=new a({selectedMicId:h,recordingChunkSize:r,onSpeechStart:()=>{var e;g(!0),null===(e=w.current)||void 0===e||e.call(w)},onSpeechEnd:e=>{var t;g(!1),null===(t=j.current)||void 0===t||t.call(j,e)},onAlwaysPCMData:e=>{var t;null===(t=C.current)||void 0===t||t.call(C,e)},onPCMData:e=>{var t;null===(t=S.current)||void 0===t||t.call(S,e)},onAudioData:e=>{var t;null===(t=R.current)||void 0===t||t.call(R,e)},onRecordingStart:()=>{var e;v(!0),null===(e=M.current)||void 0===e||e.call(M)},onRecordingStop:e=>{var t;v(!1),null===(t=D.current)||void 0===t||t.call(D,e)}});return x.current=e,e.init(),()=>{e.destroy(),x.current=null}},[h]),(0,i.useEffect)(()=>{var e;null===(e=x.current)||void 0===e||e.setMuted(b)},[b]),{isMuted:b,isRecording:m,isVoiceDetected:p,selectedMic:h,acquireMic:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;f(e)},setMuted:y,startRecording:()=>{var e;null===(e=x.current)||void 0===e||e.startRecording()},stopRecording:()=>{var e;return null===(e=x.current)||void 0===e?void 0:e.stopRecording()},cancelRecording:()=>{var e;return null===(e=x.current)||void 0===e?void 0:e.cancelRecording()}}}},75478:function(e,t,r){"use strict";r.d(t,{RL:function(){return m},_g:function(){return g},eI:function(){return b}});let i=/\{[^{}]+\}/g,n=({allowReserved:e,name:t,value:r})=>{if(null==r)return"";if("object"==typeof r)throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");return`${t}=${e?r:encodeURIComponent(r)}`},a=({allowReserved:e,explode:t,name:r,style:i,value:a})=>{if(!t){let t=(e?a:a.map(e=>encodeURIComponent(e))).join((e=>{switch(e){case"form":default:return",";case"pipeDelimited":return"|";case"spaceDelimited":return"%20"}})(i));switch(i){case"label":return`.${t}`;case"matrix":return`;${r}=${t}`;case"simple":return t;default:return`${r}=${t}`}}let s=(e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}})(i),l=a.map(t=>"label"===i||"simple"===i?e?t:encodeURIComponent(t):n({allowReserved:e,name:r,value:t})).join(s);return"label"===i||"matrix"===i?s+l:l},s=({allowReserved:e,explode:t,name:r,style:i,value:a})=>{if(a instanceof Date)return`${r}=${a.toISOString()}`;if("deepObject"!==i&&!t){let t=[];Object.entries(a).forEach(([r,i])=>{t=[...t,r,e?i:encodeURIComponent(i)]});let n=t.join(",");switch(i){case"form":return`${r}=${n}`;case"label":return`.${n}`;case"matrix":return`;${r}=${n}`;default:return n}}let s=(e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}})(i),l=Object.entries(a).map(([t,a])=>n({allowReserved:e,name:"deepObject"===i?`${r}[${t}]`:t,value:a})).join(s);return"label"===i||"matrix"===i?s+l:l},l=({allowReserved:e,array:t,object:r}={})=>i=>{let l=[];if(i&&"object"==typeof i)for(let o in i){let c=i[o];null!=c&&(l=Array.isArray(c)?[...l,a({allowReserved:e,explode:!0,name:o,style:"form",value:c,...t})]:"object"!=typeof c?[...l,n({allowReserved:e,name:o,value:c})]:[...l,s({allowReserved:e,explode:!0,name:o,style:"deepObject",value:c,...r})])}return l.join("&")},o=({baseUrl:e,path:t,query:r,querySerializer:l,url:o})=>{let c=e+(o.startsWith("/")?o:`/${o}`);t&&(c=(({path:e,url:t})=>{let r=t,l=t.match(i);if(l)for(let t of l){let i=!1,l=t.substring(1,t.length-1),o="simple";l.endsWith("*")&&(i=!0,l=l.substring(0,l.length-1)),l.startsWith(".")?(l=l.substring(1),o="label"):l.startsWith(";")&&(l=l.substring(1),o="matrix");let c=e[l];null!=c&&(r=Array.isArray(c)?r.replace(t,a({explode:i,name:l,style:o,value:c})):"object"!=typeof c?"matrix"!==o?r.replace(t,"label"===o?`.${c}`:c):r.replace(t,`;${n({name:l,value:c})}`):r.replace(t,s({explode:i,name:l,style:o,value:c})))}return r})({path:t,url:c}));let d=r?l(r):"";return d.startsWith("?")&&(d=d.substring(1)),d&&(c+=`?${d}`),c},c=(e,t)=>{let r={...e,...t};return r.baseUrl?.endsWith("/")&&(r.baseUrl=r.baseUrl.substring(0,r.baseUrl.length-1)),r.headers=d(e.headers,t.headers),r},d=(...e)=>{let t=new Headers;for(let r of e)if(r&&"object"==typeof r)for(let[e,i]of r instanceof Headers?r.entries():Object.entries(r))if(null===i)t.delete(e);else if(Array.isArray(i))for(let r of i)t.append(e,r);else void 0!==i&&t.set(e,"object"==typeof i?JSON.stringify(i):i);return t};class u{_fns;constructor(){this._fns=[]}eject(e){let t=this._fns.indexOf(e);-1!==t&&(this._fns=[...this._fns.slice(0,t),...this._fns.slice(t+1)])}use(e){this._fns=[...this._fns,e]}}let h={bodySerializer:e=>JSON.stringify(e)},f=(e,t,r)=>{"string"==typeof r?e.append(t,r):e.append(t,JSON.stringify(r))},m={bodySerializer:e=>{let t=new URLSearchParams;return Object.entries(e).forEach(([e,r])=>{null!=r&&(Array.isArray(r)?r.forEach(r=>f(t,e,r)):f(t,e,r))}),t}},v=l({allowReserved:!1,array:{explode:!0,style:"form"},object:{explode:!0,style:"deepObject"}}),p={"Content-Type":"application/json"},g=(e={})=>({...h,baseUrl:"",fetch:globalThis.fetch,headers:p,parseAs:"auto",querySerializer:v,...e}),b=(e={})=>{let t=c(g(),e),r=()=>({...t}),i={request:new u,response:new u},n=async e=>{let r={...t,...e,headers:d(t.headers,e.headers)};r.body&&r.bodySerializer&&(r.body=r.bodySerializer(r.body)),r.body||r.headers.delete("Content-Type");let n=new Request(o({baseUrl:r.baseUrl??"",path:r.path,query:r.query,querySerializer:"function"==typeof r.querySerializer?r.querySerializer:l(r.querySerializer),url:r.url}),{redirect:"follow",...r});for(let e of i.request._fns)n=await e(n,r);let a=r.fetch,s=await a(n);for(let e of i.response._fns)s=await e(s,n,r);let c={request:n,response:s};if(s.ok){if(204===s.status||"0"===s.headers.get("Content-Length"))return{data:{},...c};if("stream"===r.parseAs)return{data:s.body,...c};let e=("auto"===r.parseAs?(e=>{if(e)return e.startsWith("application/json")||e.endsWith("+json")?"json":"multipart/form-data"===e?"formData":["application/","audio/","image/","video/"].some(t=>e.startsWith(t))?"blob":e.startsWith("text/")?"text":void 0})(s.headers.get("Content-Type")):r.parseAs)??"json",t=await s[e]();return"json"===e&&r.responseTransformer&&(t=await r.responseTransformer(t)),{data:t,...c}}let u=await s.text();if(r.throwOnError)throw Error(u);try{u=JSON.parse(u)}catch{}return{error:u||{},...c}};return{connect:e=>n({...e,method:"CONNECT"}),delete:e=>n({...e,method:"DELETE"}),get:e=>n({...e,method:"GET"}),getConfig:r,head:e=>n({...e,method:"HEAD"}),interceptors:i,options:e=>n({...e,method:"OPTIONS"}),patch:e=>n({...e,method:"PATCH"}),post:e=>n({...e,method:"POST"}),put:e=>n({...e,method:"PUT"}),request:n,setConfig:e=>(t=c(t,e),r()),trace:e=>n({...e,method:"TRACE"})}}},46231:function(e,t,r){"use strict";r.d(t,{w_:function(){return d}});var i=r(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.createContext&&i.createContext(n),s=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var i,n;i=t,n=r[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>i.createElement(u,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>i.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:n,size:a,title:o}=e,d=function(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,s),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&i.createElement("title",null,o),e.children)};return void 0!==a?i.createElement(a.Consumer,null,e=>t(e)):t(n)}}},function(e){e.O(0,[7240,1015,2648,8079,2971,2117,1744],function(){return e(e.s=31814)}),_N_E=e.O()}]);