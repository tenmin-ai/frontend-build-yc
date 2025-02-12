"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1859],{28529:function(e,t,i){i.d(t,{MI:function(){return h},nQ:function(){return u}});var n=i(57437),r=i(2265),a=i(61273),l=i(22744),s=i(80434),o=i(32859),c=i(84436);let u=e=>{let{profilePicture:t,message:i,translation:a,isPlaying:u=!1,onTap:d,onTTSPlay:h,onTTSStop:v,onTranslate:g,defaultShowTranslation:f=!0}=e,[m,p]=(0,r.useState)(f);return(0,n.jsxs)("div",{className:"mb-6 mr-6 pb-3 pt-4",onClick:d,children:["string"==typeof t?(0,n.jsx)("img",{src:t,className:"mb-2 h-6 w-6 rounded-full"}):t,(0,n.jsx)("div",{className:"prose text-[0.975rem] font-normal",children:void 0===i?(0,n.jsxs)("div",{className:"mb-4 flex flex-col gap-2",children:[(0,n.jsx)("div",{className:"h-2 w-full rounded-full bg-gray-200"}),(0,n.jsx)("div",{className:"h-2 w-2/3 rounded-full bg-gray-200"})]}):(0,n.jsx)(c.U,{children:(0,s.f)(i)})}),(0,n.jsx)("div",{className:"transition-max-height overflow-hidden text-sm text-black/30 duration-700 ease-in-out ".concat(m?"max-h-40 opacity-100":"max-h-0 opacity-0"),children:a}),(0,n.jsxs)("div",{className:"mt-2 flex gap-0",children:[h&&(0,n.jsx)("button",{className:"py-1 pr-1",onClick:e=>{e.stopPropagation(),u?null==v||v():h()},children:(0,n.jsx)(o.J,{icon:u?l.H6t:l.hwG,className:"text-xl text-black/30"})}),g&&(0,n.jsx)("button",{className:"p-1",onClick:e=>{e.stopPropagation(),g(!m),p(!m)},children:(0,n.jsx)(l.mp2,{className:"text-xl text-black/30"})})]})]})},d=["No Mistake","Punctuation","Spelling"],h=e=>{let t,i,l,{message:s,translation:o,correction:c,onTap:u,onTranslate:h,onRedo:v,defaultShowTranslation:g=!0}=e,[f,m]=(0,r.useState)(g),p="flex-initial bg-[#2552F4]/5 font-base ring-1 rounded-2xl py-4 px-4 ring-[#2552F4]/20 text-[#2552F4]";c?"Grammar"===c.mistake||"Phrasing"===c.mistake?(t=(0,n.jsx)("div",{className:"font-normal text-red-600 line-through",children:s}),i=(0,n.jsx)("div",{className:"text-green-600",children:c.correct_version})):d.includes(c.mistake)?(p="relative flex-initial bg-green-500/5 ring-1 rounded-lg pt-4 pb-3 px-4 ring-green-600/20",t=(0,n.jsx)("div",{className:"font-normal text-green-600",children:s}),l=(0,n.jsx)(a.ETl,{className:"absolute -bottom-2 -right-2 text-xl text-green-600"})):t=(0,n.jsx)("div",{className:"font-normal",children:s}):t="\uD83D\uDD0A"===s?(0,n.jsx)("img",{src:"soundwaves.svg",alt:"Soundwaves",className:"py-1 opacity-60"}):(0,n.jsx)("div",{className:"font-normal",children:s});let x=o&&f&&(0,n.jsx)("div",{className:"text-sm text-black/30",children:o});return(0,n.jsxs)("div",{className:"mb-6 ml-14 flex flex-wrap-reverse items-center justify-end gap-y-3",children:[c&&c.explanation&&!d.includes(c.mistake)&&(0,n.jsxs)("div",{className:"-ml-10 mr-3 grow basis-32 text-xs",children:[(0,n.jsxs)("p",{className:"font-bold",children:[c.mistake,(0,n.jsx)(a.EQK,{className:"mx-1 inline-block"})]}),(0,n.jsx)("p",{className:"italic",children:c.explanation})]}),v&&(0,n.jsx)("button",{className:"py-1 pr-5 text-black/30",onClick:e=>{e.stopPropagation(),v()},children:(0,n.jsx)(a.YRv,{className:"-rotate-45"})}),(0,n.jsxs)("div",{className:p,onClick:u,children:[t,i,x,(0,n.jsx)("div",{className:"-mb-2 mt-2 flex items-center gap-2 text-sm text-black/30"}),l]})]})};t.ZP=h},33344:function(e,t,i){i.d(t,{GI:function(){return o},PA:function(){return g},ax:function(){return c},bi:function(){return u},iy:function(){return l},rs:function(){return h}});var n=i(52274),r=i(19856);let a=(e,t,i)=>{var n;let a={_id:e,baseUrl:(null!==(n=null==t?void 0:t.client)&&void 0!==n?n:r.Lp).getConfig().baseUrl};return i&&(a._infinite=i),(null==t?void 0:t.body)&&(a.body=t.body),(null==t?void 0:t.headers)&&(a.headers=t.headers),(null==t?void 0:t.path)&&(a.path=t.path),(null==t?void 0:t.query)&&(a.query=t.query),a},l=()=>({mutationFn:async e=>{let{data:t}=await (0,r.H4)({...e,throwOnError:!0});return t}}),s=e=>[a("userMyData",e)],o=e=>(0,n.C)({queryFn:async t=>{let{queryKey:i}=t,{data:n}=await (0,r.It)({...e,...i[0],throwOnError:!0});return n},queryKey:s(e)}),c=()=>({mutationFn:async e=>{let{data:t}=await (0,r._5)({...e,throwOnError:!0});return t}}),u=()=>({mutationFn:async e=>{let{data:t}=await (0,r._G)({...e,throwOnError:!0});return t}}),d=e=>[a("tutoringGetAll",e)],h=e=>(0,n.C)({queryFn:async t=>{let{queryKey:i}=t,{data:n}=await (0,r.zW)({...e,...i[0],throwOnError:!0});return n},queryKey:d(e)}),v=e=>[a("tutoringGetLeaderboard",e)],g=e=>(0,n.C)({queryFn:async t=>{let{queryKey:i}=t,{data:n}=await (0,r.Vz)({...e,...i[0],throwOnError:!0});return n},queryKey:v(e)})},19856:function(e,t,i){i.d(t,{H4:function(){return l},Hy:function(){return u},I:function(){return p},It:function(){return d},Lp:function(){return r},Vz:function(){return f},_5:function(){return h},_G:function(){return v},c_:function(){return c},eU:function(){return a},kc:function(){return s},oY:function(){return m},pR:function(){return o},zW:function(){return g}});var n=i(75478);let r=(0,n.eI)((0,n._g)()),a=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,...n.RL,headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"/login"})},l=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).patch({...e,url:"/change_login"})},s=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/oauth/google/login"})},o=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/oauth/google/callback"})},c=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/user/create_account_and_profile"})},u=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/user/add_new_profile"})},d=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/user/my_data"})},h=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).patch({...e,url:"/user/change_profile"})},v=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/lesson/generate_user_roleplay"})},g=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/tutoring/all"})},f=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/tutoring/leaderboard"})},m=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/call/start/{service}"})},p=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/stats/premium"})}},68171:function(e,t,i){i.d(t,{y:function(){return o}});var n=i(57437),r=i(2265),a=e=>{let{onStartPress:t,onEndPress:i,onCancel:a,onTap:l,cancelButtonRef:s,children:o}=e,[c,u]=(0,r.useState)(!1),d=(0,r.useRef)({x:0,y:0}),h=(0,r.useRef)(0),[v,g]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(console.log("useEffect isActive",c),c)h.current=Date.now();else{let e=Date.now()-h.current;console.log("duration ",e),e<200&&l()}},[c]),(0,r.useEffect)(()=>{let e=e=>{" "!==e.key&&"Spacebar"!==e.key&&32!==e.keyCode||(e.preventDefault(),c||(u(!0),t()))},n=e=>{(" "===e.key||"Spacebar"===e.key||32===e.keyCode)&&(e.preventDefault(),c&&(u(!1),i()))};return window.addEventListener("keydown",e),window.addEventListener("keyup",n),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)}},[c,t,i,l]);let f=e=>{if(s.current){let t=s.current.getBoundingClientRect();return e.x>=t.left&&e.x<=t.right&&e.y>=t.top&&e.y<=t.bottom}return!1};return(0,r.useEffect)(()=>{let e=e=>{var t,i;if(!c)return;let n=e.touches[0];f({x:n.clientX,y:n.clientY})?null===(t=s.current)||void 0===t||t.classList.add("scale-110","bg-red-300"):null===(i=s.current)||void 0===i||i.classList.remove("scale-110","bg-red-300")};return window.addEventListener("touchmove",e,{passive:!1}),()=>{window.removeEventListener("touchmove",e)}},[c,s]),(0,n.jsx)("button",{onTouchStart:e=>{g(!0),e.stopPropagation(),e.preventDefault(),u(!0),t();let i=e.touches[0];d.current={x:i.clientX,y:i.clientY}},onTouchEnd:e=>{e.stopPropagation(),e.preventDefault(),u(!1);let t=e.changedTouches[0];f({x:t.clientX,y:t.clientY})?a():i()},onMouseDown:e=>{v||(e.preventDefault(),u(!0),t(),d.current={x:e.clientX,y:e.clientY})},onMouseUp:e=>{v||(e.preventDefault(),u(!1),f({x:e.clientX,y:e.clientY})?a():i())},onContextMenu:e=>e.preventDefault(),className:"microphoneButton touch-none",children:o?o(c):"Press and Hold"})},l=i(61273),s=i(32859);let o=e=>{let{onStartPress:t,onEndPress:i,onCancel:o,onTap:c,leftToggle:u,rightToggle:d}=e,[h,v]=(0,r.useState)(!1),g=(0,r.useRef)(null);return(0,n.jsxs)("div",{className:"flex w-full items-center justify-center gap-6",children:[!h&&u,h&&(0,n.jsx)("button",{ref:g,className:"flex h-14 w-14 items-center justify-center rounded-full bg-red-200 text-2xl text-red-600 ring-2 ring-red-600/50 transition-transform duration-200 ease-in-out hover:scale-110",children:(0,n.jsx)(l._0w,{})}),(0,n.jsx)(a,{onStartPress:()=>{v(!0),t()},onEndPress:()=>{v(!1),i()},onTap:c,onCancel:()=>{v(!1),o()},cancelButtonRef:g,children:e=>(0,n.jsx)("div",{className:"".concat(e?"bg-[#0039FF]/20 text-[#2552F4] ring-2 ring-[#2552F4]/40":"bg-[#2552F4] text-white"," rounded-full px-12 py-6 text-3xl"),children:(0,n.jsx)(s.J,{icon:e?l.ZTc:l.uYL})})}),!h&&d,h&&(0,n.jsx)("div",{className:"w-12"})]})}},49677:function(e,t,i){i.d(t,{Z:function(){return l}});var n=i(2265),r=i(9800);class a{init(){if(this.isInitialized){console.warn("MicManager: already initialized");return}if(this.initializing){console.warn("MicManager: already initializing");return}this.initializing=this._init()}async _init(){var e;for(let t of(console.log("MicManager init start...",this),this.mediaStream=await navigator.mediaDevices.getUserMedia({audio:{deviceId:null!==(e=this.selectedMicId)&&void 0!==e?e:void 0,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,sampleRate:16e3}}),this.mediaStream.getAudioTracks()))t.enabled=!this.isMuted;this.mediaRecorder=new MediaRecorder(this.mediaStream),await this.initVad(),this.isInitialized=!0,this.initializing=null,console.log("MicManager init complete.")}async initVad(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.mediaStream){console.warn("MicManager: no mediaStream to initVad");return}if(this.vad&&!e){console.warn("MicManager: vad already initialized");return}this.vad&&(console.warn("MicManager: vad already initialized, but forcing re-init"),this.destroyVad()),this.vad=await r.MicVAD.new({baseAssetPath:"/vad/",onnxWASMBasePath:"/vad/",stream:this.mediaStream,onSpeechStart:()=>{var e;this.isVoiceDetected=!0,null===(e=this.onSpeechStart)||void 0===e||e.call(this)},onVADMisfire:()=>{var e;this.isVoiceDetected=!1,null===(e=this.onSpeechEnd)||void 0===e||e.call(this,!0)},onSpeechEnd:()=>{var e;this.isVoiceDetected=!1,null===(e=this.onSpeechEnd)||void 0===e||e.call(this,!1)},onFrameProcessed:(e,t)=>{var i,n;this.lastPCMTimestamp=Date.now();let r=new ArrayBuffer(2*t.length),a=new DataView(r);for(let e=0;e<t.length;e++)a.setInt16(2*e,32767*t[e],!0);null===(i=this.onAlwaysPCMData)||void 0===i||i.call(this,r),this.capturingPCM&&(null===(n=this.onPCMData)||void 0===n||n.call(this,r))}}),this.vad.start()}destroyVad(){this.vad?(this.vad.destroy(),this.vad=null,this.lastPCMTimestamp=null):console.warn("MicManager: no vad to destroy")}async ensureVad(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.vad&&this.lastPCMTimestamp&&Date.now()-this.lastPCMTimestamp<e||(console.warn("MicManager: vad is broken, re-initializing..."),await this.initVad(!0))}startPCM(){this.capturingPCM=!0}stopPCM(){this.capturingPCM=!1}setMuted(){var e;let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];this.isMuted!==t&&(this.ensureVad(),this.isMuted=t,null===(e=this.mediaStream)||void 0===e||e.getAudioTracks().forEach(e=>{e.enabled=!t}))}startRecording(){if(this.mediaRecorder||console.warn("MicManager: no mediaRecorder to start"),this.isRecording){console.warn("MicManager: already recording");return}this.ensureVad(),this.isRecording=!0,this.wasCancelled=!1,this.startPCM(),this.mediaRecorder&&(this.mediaRecorder.ondataavailable=e=>{this.lastDataAvailablePromise=(async()=>{var t;let i=await e.data.arrayBuffer();null===(t=this.onAudioData)||void 0===t||t.call(this,i)})()},this.mediaRecorder.onstart=()=>{var e;null===(e=this.onRecordingStart)||void 0===e||e.call(this)},this.mediaRecorder.onstop=async()=>{var e;this.lastDataAvailablePromise&&await this.lastDataAvailablePromise,this.isRecording=!1,null===(e=this.onRecordingStop)||void 0===e||e.call(this,this.wasCancelled)},this.mediaRecorder.start(this.recordingChunkSize))}stopRecording(){var e;this.isRecording&&(this.ensureVad(),this.stopPCM(),null===(e=this.mediaRecorder)||void 0===e||e.stop())}cancelRecording(){this.isRecording&&(this.ensureVad(),this.wasCancelled=!0,this.stopRecording())}async destroy(){if(!this.isInitialized&&!this.initializing){console.warn("MicManager: not initialized nor initializing");return}if(this.initializing&&(console.info("MicManager: still initializing, waiting..."),await this.initializing),console.log("MicManager: destroying..."),this.destroyVad(),this.mediaRecorder&&(this.mediaRecorder.stop(),this.mediaRecorder.ondataavailable=null,this.mediaRecorder.onstop=null,this.mediaRecorder.onstart=null,this.mediaRecorder=null),this.mediaStream&&(this.mediaStream.getTracks().forEach(e=>e.stop()),this.mediaStream=null),this.isVoiceDetected){var e;this.isVoiceDetected=!1,null===(e=this.onSpeechEnd)||void 0===e||e.call(this,!1)}this.isRecording=!1,this.wasCancelled=!1,this.capturingPCM=!1,this.isInitialized=!1,console.log("MicManager: destroyed")}constructor({recordingChunkSize:e=100,selectedMicId:t=null,onSpeechStart:i,onSpeechEnd:n,onAlwaysPCMData:r,onPCMData:a,onAudioData:l,onRecordingStart:s,onRecordingStop:o}){this.mediaStream=null,this.mediaRecorder=null,this.vad=null,this.isMuted=!1,this.isRecording=!1,this.wasCancelled=!1,this.isVoiceDetected=!1,this.capturingPCM=!1,this.lastPCMTimestamp=null,this.lastDataAvailablePromise=null,this.isInitialized=!1,this.initializing=null,this.recordingChunkSize=e,this.selectedMicId=t,this.onSpeechStart=i,this.onSpeechEnd=n,this.onAlwaysPCMData=r,this.onPCMData=a,this.onAudioData=l,this.onRecordingStart=s,this.onRecordingStop=o}}function l(e){let{startMuted:t=!1,recordingChunkSize:i=100,onSpeechStart:r,onSpeechEnd:l,onAlwaysPCMData:s,onPCMData:o,onAudioData:c,onRecordingStart:u,onRecordingStop:d}=e,[h,v]=(0,n.useState)("AirPods"),[g,f]=(0,n.useState)(!1),[m,p]=(0,n.useState)(!1),[x,y]=(0,n.useState)(t),w=(0,n.useRef)(null),M=(0,n.useRef)(r),b=(0,n.useRef)(l),R=(0,n.useRef)(s),S=(0,n.useRef)(o),C=(0,n.useRef)(c),j=(0,n.useRef)(u),k=(0,n.useRef)(d);return(0,n.useEffect)(()=>{M.current=r},[r]),(0,n.useEffect)(()=>{b.current=l},[l]),(0,n.useEffect)(()=>{R.current=s},[s]),(0,n.useEffect)(()=>{S.current=o},[o]),(0,n.useEffect)(()=>{C.current=c},[c]),(0,n.useEffect)(()=>{j.current=u},[u]),(0,n.useEffect)(()=>{k.current=d},[d]),(0,n.useEffect)(()=>{let e=new a({selectedMicId:h,recordingChunkSize:i,onSpeechStart:()=>{var e;p(!0),null===(e=M.current)||void 0===e||e.call(M)},onSpeechEnd:e=>{var t;p(!1),null===(t=b.current)||void 0===t||t.call(b,e)},onAlwaysPCMData:e=>{var t;null===(t=R.current)||void 0===t||t.call(R,e)},onPCMData:e=>{var t;null===(t=S.current)||void 0===t||t.call(S,e)},onAudioData:e=>{var t;null===(t=C.current)||void 0===t||t.call(C,e)},onRecordingStart:()=>{var e;f(!0),null===(e=j.current)||void 0===e||e.call(j)},onRecordingStop:e=>{var t;f(!1),null===(t=k.current)||void 0===t||t.call(k,e)}});return w.current=e,e.init(),()=>{e.destroy(),w.current=null}},[h]),(0,n.useEffect)(()=>{var e;null===(e=w.current)||void 0===e||e.setMuted(x)},[x]),{isMuted:x,isRecording:g,isVoiceDetected:m,selectedMic:h,acquireMic:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;v(e)},setMuted:y,startRecording:()=>{var e;null===(e=w.current)||void 0===e||e.startRecording()},stopRecording:()=>{var e;return null===(e=w.current)||void 0===e?void 0:e.stopRecording()},cancelRecording:()=>{var e;return null===(e=w.current)||void 0===e?void 0:e.cancelRecording()}}}},89403:function(e,t,i){i.d(t,{f:function(){return r}});var n=i(53974);let r=()=>{let[e,t]=(0,n.useLocalStorage)("token");return{token:e,saveToken:t}}},32859:function(e,t,i){i.d(t,{J:function(){return r}});var n=i(57437);i(2265);let r=e=>{let{icon:t,className:i,...r}=e;return(0,n.jsx)(t,{className:i,...r})}},80434:function(e,t,i){i.d(t,{f:function(){return n}});let n=e=>e||"​"}}]);