(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{58478:function(e){function t(e){return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=58478,e.exports=t},3958:function(e,t,n){Promise.resolve().then(n.bind(n,38590))},15276:function(e,t,n){"use strict";n.d(t,{BackendProvider:function(){return x},CSPostHogProvider:function(){return f},h:function(){return h}});var a=n(57437),s=n(2265),r=n(53974),l=n(19856),i=n(21623),o=n(29827),u=n(99376),c=n(46214),d=n(23664);l.Lp.setConfig({baseUrl:"https://backend-us-yc.tenmin.ai"}),l.Lp.interceptors.request.use((e,t)=>{var n;let a=JSON.parse(null!==(n=localStorage.getItem("token"))&&void 0!==n?n:"null");return a&&e.headers.set("Authorization","Bearer "+a),e});let g=new i.S,m=(0,s.createContext)(void 0),x=e=>{let{children:t}=e,n=(0,r.useIsClient)(),i=(0,u.useRouter)(),c=(0,u.usePathname)(),[d,x]=(0,s.useState)(null);return((0,s.useEffect)(()=>{if(n){let e=localStorage.getItem("token");x(e),console.log(c),e||"/login"===c||i.replace("/onboarding")}},[n,i]),n)?(0,a.jsx)(m.Provider,{value:{authedClient:l.Lp,isLoggedIn:!!localStorage.getItem("token"),saveToken:e=>{null===e?localStorage.removeItem("token"):localStorage.setItem("token",JSON.stringify(e)),x(e)}},children:(0,a.jsx)(o.aH,{client:g,children:t})}):(0,a.jsx)("main",{className:"h-screen-safe flex w-screen items-center justify-center bg-[#FAFBFF]",children:(0,a.jsx)("img",{src:"tenmin_two_bubbles.svg",alt:"",className:"w-10"})})},h=()=>{let e=(0,s.useContext)(m);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e};function f(e){let{children:t}=e;return(0,a.jsx)(d.zf,{client:c.ZP,children:t})}c.ZP.init("phc_3RgWCdQuPIThVhLMxGlimaJQHP7ILbqZnxeR8GRkin6",{api_host:"https://ph-proxy.tenmin.ai",person_profiles:"always"})},67140:function(e,t,n){"use strict";n.d(t,{Mj:function(){return i},mi:function(){return l}});var a=n(57437),s=n(2265),r=n(99376);let l=["en","en-GB","en-AU","de","ko","ja","fr","pt-PT"],i=[{name:"English (US)",flag:"\uD83C\uDDFA\uD83C\uDDF8",code:"en",path:"us United States of America usa.svg",uiflag_path:"us-United-States-of-America-3x2.svg",greeting:"Hello"},{name:"English (United Kingdom)",flag:"\uD83C\uDDEC\uD83C\uDDE7",code:"en-GB",path:"gb United Kingdom uk.svg",uiflag_path:"gb-United-Kingdom-3x2.svg",greeting:"Hello"},{name:"English (Australia)",flag:"\uD83C\uDDE6\uD83C\uDDFA",code:"en-AU",path:"au Australia.svg",uiflag_path:"au-Australia-3x2.svg",greeting:"G'day"},{name:"German (Germany)",flag:"\uD83C\uDDE9\uD83C\uDDEA",code:"de",path:"de Germany.svg",uiflag_path:"de-Germany-3x2.svg",greeting:"Hallo"},{name:"Spanish (Spain)",flag:"\uD83C\uDDEA\uD83C\uDDF8",code:"es",path:"es Spain.svg",uiflag_path:"es-Spain-3x2.svg",greeting:"Hola"},{name:"Korean",flag:"\uD83C\uDDF0\uD83C\uDDF7",code:"ko",path:"kr South Korea.svg",uiflag_path:"kr-South-Korea-3x2.svg",greeting:"안녕"},{name:"French (France)",flag:"\uD83C\uDDEB\uD83C\uDDF7",code:"fr",path:"fr France.svg",uiflag_path:"fr-France-3x2.svg",greeting:"Bonjour"},{name:"Japanese",flag:"\uD83C\uDDEF\uD83C\uDDF5",code:"ja",path:"jp Japan.svg",uiflag_path:"jp-Japan-3x2.svg",greeting:"こんにちは"},{name:"Chinese (China)",flag:"\uD83C\uDDE8\uD83C\uDDF3",code:"zh",path:"cn China.svg",uiflag_path:"cn-China-3x2.svg",greeting:"你好"},{name:"Chinese (Taiwan)",flag:"\uD83C\uDDF9\uD83C\uDDFC",code:"zh-TW",path:"tw Taiwan.svg",uiflag_path:"tw-Taiwan-3x2.svg",greeting:"你好"},{name:"Hindi",flag:"\uD83C\uDDEE\uD83C\uDDF3",code:"hi",path:"in India.svg",uiflag_path:"in-India-3x2.svg",greeting:"नमस्ते"},{name:"Portuguese (Brazil)",flag:"\uD83C\uDDE7\uD83C\uDDF7",code:"pt",path:"br Brazil.svg",uiflag_path:"br-Brazil-3x2.svg",greeting:"Ol\xe1"},{name:"Portuguese (Portugal)",flag:"\uD83C\uDDF5\uD83C\uDDF9",code:"pt-PT",path:"pt Portugal.svg",uiflag_path:"pt-Portugal-3x2.svg",greeting:"Ol\xe1"},{name:"Italian",flag:"\uD83C\uDDEE\uD83C\uDDF9",code:"it",path:"it Italy.svg",uiflag_path:"it-Italy-3x2.svg",greeting:"Ciao"},{name:"Indonesian",flag:"\uD83C\uDDEE\uD83C\uDDE9",code:"id",path:"id Indonesia.svg",uiflag_path:"id-Indonesia-3x2.svg",greeting:"Halo"},{name:"Dutch",flag:"\uD83C\uDDF3\uD83C\uDDF1",code:"nl",path:"nl Netherlands.svg",uiflag_path:"nl-Netherlands-3x2.svg",greeting:"Hallo"},{name:"Turkish",flag:"\uD83C\uDDF9\uD83C\uDDF7",code:"tr",path:"tr Turkey.svg",uiflag_path:"tr-Turkey-3x2.svg",greeting:"Merhaba"},{name:"Polish",flag:"\uD83C\uDDF5\uD83C\uDDF1",code:"pl",path:"pl Poland.svg",uiflag_path:"pl-Poland-3x2.svg",greeting:"Cześć"},{name:"Swedish",flag:"\uD83C\uDDF8\uD83C\uDDEA",code:"sv",path:"se Sweden.svg",uiflag_path:"se-Sweden-3x2.svg",greeting:"Hej"},{name:"Bulgarian",flag:"\uD83C\uDDE7\uD83C\uDDEC",code:"bg",path:"bg Bulgaria.svg",uiflag_path:"bg-Bulgaria-3x2.svg",greeting:"Здравейте"},{name:"Romanian",flag:"\uD83C\uDDF7\uD83C\uDDF4",code:"ro",path:"ro Romania.svg",uiflag_path:"ro-Romania-3x2.svg",greeting:"Bună"},{name:"Arabic (Saudi Arabia)",flag:"\uD83C\uDDF8\uD83C\uDDE6",code:"ar",path:"sa Saudi Arabia.svg",uiflag_path:"sa-Saudi-Arabia-3x2.svg",greeting:"مرحبا"},{name:"Czech",flag:"\uD83C\uDDE8\uD83C\uDDFF",code:"cs",path:"cz Czech Republic.svg",uiflag_path:"cz-Czech-Republic-3x2.svg",greeting:"Ahoj"},{name:"Greek",flag:"\uD83C\uDDEC\uD83C\uDDF7",code:"el",path:"gr Greece.svg",uiflag_path:"gr-Greece-3x2.svg",greeting:"Γειά σας"},{name:"Finnish",flag:"\uD83C\uDDEB\uD83C\uDDEE",code:"fi",path:"fi Finland.svg",uiflag_path:"fi-Finland-3x2.svg",greeting:"Hei"},{name:"Hungarian",flag:"\uD83C\uDDED\uD83C\uDDFA",code:"hu",path:"hu Hungary.svg",uiflag_path:"hu-Hungary-3x2.svg",greeting:"Hell\xf3"},{name:"Norwegian",flag:"\uD83C\uDDF3\uD83C\uDDF4",code:"no",path:"no Norway.svg",uiflag_path:"no-Norway-3x2.svg",greeting:"Hei"},{name:"Vietnamese",flag:"\uD83C\uDDFB\uD83C\uDDF3",code:"vi",path:"vn Vietnam.svg",uiflag_path:"vn-Vietnam-3x2.svg",greeting:"Xin ch\xe0o"},{name:"Slovak",flag:"\uD83C\uDDF8\uD83C\uDDF0",code:"sk",path:"sk Slovakia.svg",uiflag_path:"sk-Slovakia-3x2.svg",greeting:"Ahoj"},{name:"Russian",flag:"\uD83C\uDDF7\uD83C\uDDFA",code:"ru",path:"ru Russia.svg",uiflag_path:"ru-Russia-3x2.svg",greeting:"Здравствуйте"},{name:"Ukrainian",flag:"\uD83C\uDDFA\uD83C\uDDE6",code:"uk",path:"ua Ukraine.svg",uiflag_path:"ua-Ukraine-3x2.svg",greeting:"Привіт"},{name:"Malay",flag:"\uD83C\uDDF2\uD83C\uDDFE",code:"ms",path:"my Malaysia.svg",uiflag_path:"my-Malaysia-3x2.svg",greeting:"Halo"},{name:"Danish",flag:"\uD83C\uDDE9\uD83C\uDDF0",code:"da",path:"dk Denmark.svg",uiflag_path:"dk-Denmark-3x2.svg",greeting:"Hej"}];t.ZP=e=>{let{nextStep:t,previousStep:n,userData:o,setUserData:u}=e,c=(0,r.useSearchParams)().get("learn"),[d,g]=(0,s.useState)(c),m=e=>{g(e),u({...o,language:e})},x=(0,s.useRef)(null),[h,f]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=x.current;if(!e)return;let t=()=>f(e.scrollTop>0);return e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)},[]),(0,a.jsx)("main",{className:"flex min-h-0 grow flex-col items-center bg-[#FAFBFF] pb-10 pt-2",children:(0,a.jsxs)("div",{className:"flex min-h-0 w-full flex-grow flex-col items-start justify-start",children:[(0,a.jsx)("p",{className:"w-full px-7 pb-3 text-left text-xl font-semibold text-black ".concat(h?"border-b-[1px] border-black/10":""),children:"Which language do you want to learn?"}),(0,a.jsxs)("div",{className:"flex min-h-0 w-full flex-grow flex-col gap-3 overflow-y-auto px-7",ref:x,children:[i.map(e=>(0,a.jsxs)("button",{className:"flex w-full items-center gap-3 rounded-xl border-[1px] px-7 py-4 text-base ".concat(d===e.code?"border-[#2552F4] bg-[#2552F4]/5 text-[#2552F4]":"border-black/10 bg-white"," ").concat(!l.includes(e.code)&&"cursor-not-allowed opacity-50"),disabled:!l.includes(e.code),onClick:()=>m(e.code),children:[(0,a.jsx)("img",{src:"uiflags/".concat(e.uiflag_path),alt:"",className:"mr-3 h-5 rounded-md border-none border-[#DADADA] ".concat(l.includes(e.code)?"":"grayscale")}),e.name]},e.name)),(0,a.jsx)("p",{className:"text-black/30",children:"We are actively working on adding more languages. Stay tuned!"})]}),(0,a.jsx)("div",{className:"flex w-full flex-col items-center gap-3 border-t-[1px] border-black/10 px-7 pt-4",children:(0,a.jsx)("button",{className:"w-full rounded-full bg-[#2552F4] py-4 font-semibold text-white ".concat(d?"":"cursor-not-allowed opacity-50"),onClick:()=>{d&&t()},disabled:!d,children:"Next question"})})]})})}},38590:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var a=n(57437),s=n(2265),r=n(61273),l=n(37780),i=n(99376),o=n(15276),u=n(3069),c=n(18079),d=n(29827),g=n(16593),m=n(21770),x=n(33344),h=n(53974),f=n(67140),p=n(70836),v=e=>{let{isOpen:t,onClose:n,tutoringQueryKey:l,handleStartLesson:i}=e,[o,c]=(0,s.useState)(""),[g,h]=(0,s.useState)(null),f=(0,s.useRef)(null),p=(0,d.NL)(),v=(0,m.D)({...(0,x.bi)(),onSuccess(e){h(e),p.invalidateQueries({queryKey:l})}});return(0,a.jsxs)(u.y,{isOpen:t,onClose:()=>{n(),h(null)},detent:"full-height",tweenConfig:{ease:"easeInOut",duration:.3},disableScrollLocking:!0,children:[(0,a.jsxs)(u.y.Container,{style:{background:"#FAFBFF"},children:[(0,a.jsx)(u.y.Header,{}),(0,a.jsx)("p",{className:"px-8 py-5 text-lg font-semibold",children:g?"Your lesson is ready!":"Create your own scenario!"}),(0,a.jsx)(u.y.Content,{style:{backgroundColor:"#FAFBFF",paddingBottom:"25px"},children:g?(0,a.jsxs)("div",{className:"px-6 pb-10",children:[(0,a.jsxs)("div",{className:"flex min-w-32 flex-col items-end justify-between gap-1 rounded-xl border-[1px] border-[#DADADA] bg-white p-4",children:[(0,a.jsx)("div",{className:"w-full text-sm leading-snug",children:g.info.title}),(0,a.jsx)("div",{className:"text-3xl",children:g.info.emoji})]}),(0,a.jsx)("button",{className:"mt-4 flex w-full items-center justify-center rounded-full bg-[#0039FF] py-4 text-white",onClick:()=>{i(g.id)},children:(0,a.jsx)("p",{className:"text-base font-bold",children:"Try it out!"})})]}):(0,a.jsxs)("div",{className:"px-6 pb-10",children:[(0,a.jsx)("textarea",{ref:f,placeholder:"I am at a local bar ordering drinks, and the bartender looks cute...",className:"w-full rounded-lg border-[1px] border-[#DADADA] p-3 text-black",value:o,onChange:e=>c(e.target.value),rows:6}),(0,a.jsx)("button",{className:"".concat(v.isPending&&"bg-opacity-30"," mt-4 flex w-full items-center justify-center rounded-full bg-[#0039FF] py-4 text-white"),onClick:()=>{v.mutate({query:{user_description:o}})},disabled:v.isPending||0===o.length,children:v.isPending?(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)(r.fCD,{className:"mr-1.5 animate-spin"}),(0,a.jsx)("p",{className:"text-base font-bold",children:"Generating Lesson ..."})]}):(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)(r.vuX,{className:"mr-1.5 text-sm"}),(0,a.jsx)("p",{className:"text-base font-bold",children:"Generate"})]})})]})})]}),(0,a.jsx)(u.y.Backdrop,{onTap:()=>{h(null),n()}})]})},b=n(56870),D=n(32859),y=e=>(0,a.jsxs)("svg",{width:"18",height:"10",viewBox:"0 0 18 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,a.jsx)("rect",{width:"18",height:"2",rx:"1",fill:"black"}),(0,a.jsx)("rect",{y:"8",width:"12",height:"2",rx:"1",fill:"black"})]}),j=n(9601),w=n.n(j),C=n(89403);(0,p.bg)({});let N={en:["English (US)","us United States of America usa.svg"],"en-GB":["English (UK)","gb United Kingdom uk.svg"],"en-AU":["English (Australia)","au Australia.svg"],de:["German","de Germany.svg"],es:["Spanish (Spain)","es Spain.svg"],ko:["Korean","kr South Korea.svg"],fr:["French (France)","fr France.svg"],ja:["Japanese","jp Japan.svg"],zh:["Chinese (China)","cn China.svg"],"zh-TW":["Chinese (Taiwan)","tw Taiwan.svg"],hi:["Hindi","in India.svg"],pt:["Portuguese (Brazil)","br Brazil.svg"],"pt-PT":["Portuguese (Portugal)","pt Portugal.svg"],it:["Italian","it Italy.svg"],id:["Indonesian","id Indonesia.svg"],nl:["Dutch","nl Netherlands.svg"],tr:["Turkish","tr Turkey.svg"],pl:["Polish","pl Poland.svg"],sv:["Swedish","se Sweden.svg"],bg:["Bulgarian","bg Bulgaria.svg"],ro:["Romanian","ro Romania.svg"],ar:["Arabic (Saudi Arabia)","sa Saudi Arabia.svg"],cs:["Czech","cz Czech Republic.svg"],el:["Greek","gr Greece.svg"],fi:["Finnish","fi Finland.svg"],hu:["Hungarian","hu Hungary.svg"],no:["Norwegian","no Norway.svg"],vi:["Vietnamese","vn Vietnam.svg"],sk:["Slovak","sk Slovakia.svg"],ru:["Russian","ru Russia.svg"],uk:["Ukrainian","ua Ukraine.svg"],ms:["Malay","my Malaysia.svg"],da:["Danish","dk Denmark.svg"]};function F(e){var t,n;let{isOpen:l,onClose:o}=e,v=(0,i.useRouter)(),{saveToken:b}=(0,C.f)(),[D,y]=(0,p.j8)(),j=(0,d.NL)(),F=(0,m.D)({...(0,x.ax)(),onMutate:async()=>{await D({message:"Updating your profile..."})},onError:async e=>{console.log(e),await y(),await D({message:"Failed to update profile",icon:"close",duration:1e3})},onSuccess:async e=>{j.setQueryData(A.queryKey,e),await y(),await D({message:"Profile updated!",icon:"checkmark",duration:1e3})}}),[k]=(0,h.useLocalStorage)("language"),A=(0,x.GI)(),{data:S}=(0,g.a)({...A}),_=null==S?void 0:S.profiles[k],{data:E}=(0,g.a)({...(0,x.rs)({query:{language:k}})}),T=Object.entries(E||{}),L=Math.min((T.length>0&&(null===(t=T[0][1])||void 0===t?void 0:t.streak)?null===(n=T[0][1])||void 0===n?void 0:n.streak:0)||0,7),P=["Su","Mo","Tu","We","Th","Fr","Sa"],B=new Date().getDay(),R=Array.from({length:L},(e,t)=>(B-L+t+1+7)%7);[...R.map(e=>P[e]),...P.filter((e,t)=>!R.includes(t))];let{data:I}=(0,g.a)({...(0,x.PA)({query:{tutoring_id:0===T.length?"":T[0][0]}})}),O=e=>f.Mj.find(t=>t.code===e);return(0,a.jsxs)(u.y,{isOpen:l,onClose:o,detent:"content-height",tweenConfig:{ease:"easeInOut",duration:.3},children:[(0,a.jsxs)(u.y.Container,{style:{backgroundColor:"#FAFBFF",borderTopLeftRadius:"16px",borderTopRightRadius:"16px"},children:[(0,a.jsx)(u.y.Header,{}),(0,a.jsx)(u.y.Content,{children:(0,a.jsxs)("div",{className:"px-7 pb-8 pt-4",children:[(0,a.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,a.jsx)("button",{className:"flex h-12 items-center justify-center rounded-full text-black",onClick:o,children:(0,a.jsx)(r._0w,{className:"text-xl"})}),(0,a.jsxs)("button",{onClick:()=>window.open("https://discord.gg/B9Syxz3mVA","_blank"),className:"flex items-center rounded-lg border border-[#0039FF]/20 bg-[#0039FF]/5 px-2 py-1 text-sm text-[#0039FF]",children:[(0,a.jsx)(r.j2d,{className:"mr-2"}),"Join our discord"]})]}),(0,a.jsx)("div",{className:"mt-6 text-lg font-medium leading-tight",children:"Save your progress by signing in!"}),S&&S.email.endsWith("@random.com")?(0,a.jsx)("div",{className:"mt-4 flex",children:(0,a.jsxs)("button",{className:"flex w-full items-center justify-center gap-3 rounded-lg border border-black/15 bg-white py-4 text-base font-medium text-black",onClick:()=>{(0,c.kc)({query:{client_callback:"".concat(location.protocol,"//").concat(location.host,"/oauth/google")}}).then(e=>{var t;let n=null===(t=e.data)||void 0===t?void 0:t.redirect_uri;n&&(window.location.href=n)})},children:[(0,a.jsx)("img",{src:"/google_logo.svg",alt:"",className:"h-5"}),"Sign in with Google"]})}):(0,a.jsx)("div",{className:"mt-4 flex",children:(0,a.jsxs)("button",{className:"flex w-full items-center justify-center gap-3 rounded-lg border border-black/15 bg-white py-4 text-base text-black/50",children:[(0,a.jsx)("img",{src:"/google_logo.svg",alt:"",className:"h-5"}),(0,a.jsx)("div",{className:"text-sm",children:(null==S?void 0:S.email)||"email not found"})]})}),(0,a.jsx)("div",{className:"mt-10 text-lg font-medium",children:"Leaderboard"}),(0,a.jsx)("div",{className:"mt-6 flex w-full flex-col items-center rounded-md border border-[#DADADA] bg-white text-base",children:(0,a.jsxs)("div",{className:"mt-1 grid w-full grid-cols-5 text-center text-black/30",children:[(0,a.jsx)("div",{className:"py-2",children:"Rank"}),(0,a.jsx)("div",{className:"py-2",children:"Lang"}),(0,a.jsx)("div",{className:"py-2",children:"Name"}),(0,a.jsx)("div",{className:"py-2",children:"Streak"}),(0,a.jsx)("div",{className:"py-2",children:"XP"}),(0,a.jsx)("div",{className:"col-span-5 w-full px-0",children:(0,a.jsx)("div",{className:"border-t border-[#DADADA]"})}),Array.isArray(I)&&I.map((e,t)=>{var n;return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)("div",{className:"flex items-center justify-center py-3 ".concat(e.own?"bg-[#0039FF]/5":""),children:(0,a.jsx)("div",{className:"".concat(w().className," font-bold ").concat(e.rank<=3&&"flex h-6 w-6 items-center justify-center rounded-full border-2 "+(1===e.rank?"border-[#FF9600] bg-gradient-to-tr from-[#FEEA66] to-[#FFD900] text-[#FF9600]":2===e.rank?"border-[#849FB5] bg-gradient-to-tr from-[#D6E4EF] to-[#C2D1DD] text-[#849FB5]":3===e.rank?"border-[#CD7900] bg-gradient-to-tr from-[#F7BE8B] to-[#E5AE7C] text-[#CD7900]":"")),children:e.rank})}),(0,a.jsx)("div",{className:"flex items-center justify-center ".concat(e.own?"bg-[#0039FF]/5":""),children:(0,a.jsx)("img",{src:"flags/".concat(null===(n=O(e.language))||void 0===n?void 0:n.path),alt:"flag",className:"h-5 rounded-md border border-[#DADADA]"})}),(0,a.jsx)("div",{className:"flex items-center justify-center truncate ".concat(e.own?"bg-[#0039FF]/5":""),children:e.name}),(0,a.jsx)("div",{className:"flex items-center justify-center truncate ".concat(e.own?"bg-[#0039FF]/5":""),children:e.streak}),(0,a.jsx)("div",{className:"flex items-center justify-center truncate ".concat(e.own?"bg-[#0039FF]/5":""),children:e.xp})]},t)})]})}),(0,a.jsx)("div",{className:"mt-10 text-lg font-medium",children:"Set native language"}),(0,a.jsxs)("div",{className:"text-md mt-2 flex flex-wrap items-center text-black",children:["Learning ",N[k][0]," via\xa0",(0,a.jsx)(p.q_,{children:(0,a.jsx)(p.t9,{"aria-label":"Native Languages",interface:"popover",placeholder:"your native language",className:"rounded-lg border border-[#DADADA] px-2",value:F.isPending?F.variables.body.fallback_language:null==_?void 0:_.fallback_language,onIonChange:e=>{let t=e.detail.value;F.mutate({query:{language:k},body:{fallback_language:t}})},children:Object.entries(N).map(e=>{let[t,n]=e;return t!==k&&(0,a.jsx)(p.n0,{value:t,children:n[0]},t)})})})]}),(0,a.jsx)("div",{className:"mt-10 flex",children:(0,a.jsx)("button",{className:"flex w-full items-center justify-center gap-3 rounded-lg border border-black/15 bg-white py-4 text-base font-medium text-black",onClick:()=>{b(null),v.replace("/onboarding")},children:"Logout"})})]})})]}),(0,a.jsx)(u.y.Backdrop,{onTap:o})]})}function k(e){let{isOpen:t,onClose:n,handleStartLesson:r,tutoringQueryKey:l,tutoringList:i}=e,[o,c]=(0,s.useState)(""),[g,h]=(0,s.useState)(null);(0,s.useRef)(null);let f=(0,d.NL)();return(0,m.D)({...(0,x.bi)(),onSuccess(e){h(e),f.invalidateQueries({queryKey:l})}}),(0,a.jsxs)(u.y,{isOpen:t,onClose:n,detent:"content-height",tweenConfig:{ease:"easeInOut",duration:.3},children:[(0,a.jsxs)(u.y.Container,{style:{backgroundColor:"#FAFBFF",borderTopLeftRadius:"16px",borderTopRightRadius:"16px"},children:[(0,a.jsx)(u.y.Header,{}),(0,a.jsx)(u.y.Content,{children:(0,a.jsx)("div",{className:"pb-10",children:i.length>0&&i.map(e=>{let[t,n]=e;return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"mb-1 px-5 text-lg font-medium",children:"Roleplay scenarios (legacy)"}),(0,a.jsx)("div",{className:"mb-5 px-5 text-sm leading-relaxed text-black/50",children:"These scenarios are still using our legacy models and are less powerful. Please use the blue button on the homepage for the best tutoring experience."}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 px-5",children:n.available_lessons.sort(()=>Math.random()-.5).filter(e=>"ONBOARDING"!==e.type).map((e,n)=>(0,a.jsxs)("div",{className:"flex flex-col items-end justify-between gap-1 rounded-xl border-[1px] ".concat(e.uses_memory?"border-[#2552F4]":"border-[#DADADA]"," bg-white p-4"),onClick:()=>r(t,e.id),children:[(0,a.jsx)("div",{className:"w-full text-sm leading-snug",children:e.info.title}),(0,a.jsx)("div",{className:"text-3xl",children:e.info.emoji})]},n))})]},t)})})})]}),(0,a.jsx)(u.y.Backdrop,{onTap:n})]})}var A=n(40257);function S(){var e,t,n;let[j,w]=(0,s.useState)("Home"),[C,N]=(0,s.useState)(!1),[S,_]=(0,s.useState)(!1),[E,T]=(0,h.useLocalStorage)("language","en"),[L,P]=(0,s.useState)(!1),[B,R]=(0,s.useState)(!1),[I,O]=(0,s.useState)(!1),[G,z]=(0,s.useState)(!1),[H,U]=(0,s.useState)(0),[q,M]=(0,s.useState)(!1),[K,W]=(0,s.useState)(0),J=K/2,X=(0,s.useRef)(null),Q=(0,s.useRef)(0),V=q?Math.min(H/K*.1,.1):G?.1:0;(0,s.useEffect)(()=>{let e=()=>{W(.84*window.innerWidth)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.useEffect)(()=>{let e=e=>{console.log("handleGlobalClick called"),!q&&H>0&&e.clientX>K&&(z(!1),U(0))};return window.addEventListener("click",e),()=>window.removeEventListener("click",e)},[H,q,K]);let Y=(0,s.useRef)(),Z=(0,i.useRouter)(),$="undefined"!=typeof navigator&&/android/i.test(navigator.userAgent),[ee,et]=(0,p.j8)(),[en]=(0,p.od)(),{saveToken:ea}=(0,o.h)(),es=(0,d.NL)(),er=(0,b.Y)(),el=(0,x.rs)({query:{language:E}}),{data:ei,isPending:eo,isError:eu}=(0,g.a)({...el}),ec=Object.entries(ei||{}),ed=(0,x.GI)(),{data:eg}=(0,g.a)({...ed}),em=null==eg?void 0:eg.profiles[E];(0,m.D)({...(0,x.ax)(),onMutate:async()=>{await ee({message:"Updating your profile..."})},onError:async e=>{console.log(e),await et(),await ee({message:"Failed to update profile",icon:"close",duration:1e3})},onSuccess:async e=>{es.setQueryData(ed.queryKey,e),await et(),await ee({message:"Profile updated!",icon:"checkmark",duration:1e3})}}),ec.length>0&&(null===(e=ec[0][1])||void 0===e?void 0:e.streak)&&(null===(t=ec[0][1])||void 0===t||t.streak);let ex=ec.length>0&&(null===(n=ec[0][1])||void 0===n?void 0:n.last_lesson_date)?new Date(ec[0][1].last_lesson_date):null;ex&&(ex.getTime(),new Date().setHours(0,0,0,0));let eh=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Beginner";console.log("handleStartLesson called"),L||(P(!0),(0,c.oY)({path:{service:"ws"},query:{tutoring_id:e,lesson_id:t,mode:n},throwOnError:!0}).then(e=>{console.log("callStartLesson response",e),e.data?(er.resume(),Z.replace("/call?session_id=".concat(e.data.session_id))):console.error("No data in response")}).catch(e=>{console.error(e)}))},[ef,ep]=(0,s.useState)({"The Essentials":!0});(0,s.useEffect)(()=>{});let ev=f.Mj.find(e=>e.code===E);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"fixed inset-0 z-40",onTouchStart:e=>{let t=e.touches[0].clientX;(G||!(t>30))&&(M(!0),X.current=t,Q.current=H)},onTouchMove:e=>{if(null===X.current)return;let t=e.touches[0].clientX-X.current;U(Math.max(0,Math.min(Q.current+t,K)))},onTouchEnd:()=>{M(!1),null!==X.current&&(G?H<J?(z(!1),U(0)):U(K):H>J?(z(!0),U(K)):U(0),X.current=null)},children:[(0,a.jsx)("div",{style:{transform:"translateX(".concat(H-K,"px)"),width:K},className:"safe-top absolute left-0 top-0 h-full bg-white ".concat(q?"":"transition-transform duration-300"),children:(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold",children:"Lesson Summaries"}),(0,a.jsx)("p",{className:"mt-4 font-medium text-[#2552F4]/50",children:"Coming soon!"})]})}),(0,a.jsxs)("div",{style:{transform:"translateX(".concat(H,"px)")},className:"absolute inset-0 ".concat(q?"":"transition-transform duration-300"),children:[H>0&&(0,a.jsx)("div",{className:"absolute inset-0 z-40 bg-black transition-opacity duration-300",style:{opacity:V}}),(0,a.jsx)("div",{className:"safe-top",children:(0,a.jsxs)("main",{className:"h-screen-safe flex flex-col justify-between bg-white pt-2 tracking-[-0.02em]",children:[(0,a.jsx)(F,{isOpen:B,onClose:()=>R(!1)}),(0,a.jsx)(k,{isOpen:I,onClose:()=>O(!1),handleStartLesson:eh,tutoringList:ec,tutoringQueryKey:el.queryKey}),(0,a.jsxs)(u.y,{rootId:"root",ref:Y,isOpen:C,onClose:()=>N(!1),detent:"content-height",tweenConfig:{ease:"easeInOut",duration:.3},children:[(0,a.jsxs)(u.y.Container,{style:{background:"#FAFBFF",boxShadow:"none"},children:[(0,a.jsx)(u.y.Header,{}),(0,a.jsxs)(u.y.Content,{style:{backgroundColor:"#FAFBFF",paddingBottom:"25px"},children:[(0,a.jsx)("p",{className:"px-8 py-5 text-xl font-semibold",children:"What would you like to learn?"}),(0,a.jsx)("div",{className:"px-8 pb-16 text-black",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[f.Mj.filter(e=>f.mi.includes(e.code)).map(e=>(0,a.jsxs)("button",{className:"mb-3 flex items-center rounded-lg border-[1px] border-black/10 bg-white p-4 text-base",onClick:()=>{T(e.code),N(!1)},children:[(0,a.jsx)("img",{src:"uiflags/".concat(e.uiflag_path),alt:e.name,className:"mr-3 h-4 rounded-md border-none border-[#DADADA]"}),e.name]},e.code)),(0,a.jsx)("p",{className:"text-sm text-black/30",children:"We are actively working on adding more languages. Stay tuned!"})]})})]})]}),(0,a.jsx)(u.y.Backdrop,{onTap:()=>{N(!1)}})]}),(0,a.jsx)(v,{isOpen:S,onClose:()=>_(!1),tutoringQueryKey:el.queryKey,handleStartLesson:e=>eh(ec[0][0],e)}),(0,a.jsxs)("div",{className:"mx-1 flex items-center justify-between px-5",children:[(0,a.jsx)("button",{className:"flex size-8 items-center justify-start pb-1",onClick:()=>{z(!0),U(K),console.log("sidebar open")},children:(0,a.jsx)(y,{className:""})}),(0,a.jsx)("button",{className:"flex items-center",onClick:()=>{N(!0)},children:(0,a.jsxs)("div",{className:"flex items-center gap-1 pl-2 text-base font-medium",children:[(0,a.jsx)("p",{children:null==ev?void 0:ev.name.split(" (")[0]}),(0,a.jsx)("img",{src:"uiflags/".concat(null==ev?void 0:ev.uiflag_path),alt:null==ev?void 0:ev.name,className:"h-4 rounded-md border-none border-[#DADADA]"}),(0,a.jsx)(r.Dli,{className:"text-[0.6rem] text-black/50"})]})}),(0,a.jsx)("div",{className:"flex size-8 items-center justify-center rounded-full border border-[#DADADA] text-black/80",onClick:()=>{R(!0)},children:(null==em?void 0:em.nickname)?em.nickname.charAt(0):"?"})]}),(0,a.jsx)(a.Fragment,{children:ec.length>0?ec.map(e=>{let[t,n]=e;return(0,a.jsx)("div",{className:"flex h-full flex-col items-center",children:(0,a.jsxs)("div",{className:"flex h-full flex-col items-center justify-center gap-3 px-7",children:[(0,a.jsxs)("div",{className:"mt-6 text-center text-2xl font-medium",onClick:()=>{A.env.NEXT_PUBLIC_DEBUG&&Z.replace("/test")},children:[null==ev?void 0:ev.greeting,", ",null==em?void 0:em.nickname,"!"," ",(0,a.jsx)("br",{}),"Let’s learn ",null==ev?void 0:ev.name.split(" (")[0],"."]}),(0,a.jsxs)("button",{className:"flex items-center text-sm font-normal text-[#2552F4]",onClick:()=>O(!0),children:["Explore scenarios",(0,a.jsx)(r.Dli,{className:"text-[0.6rem]"})]})]})},t)}):eo?(0,a.jsx)("div",{className:"w-full text-center"}):eu?(0,a.jsx)("div",{className:"w-full text-center",children:"Error loading your lessons, please try again later."}):(0,a.jsx)("div",{className:"scrollbar-hide mt-8 flex flex-1 flex-col justify-center overflow-y-auto px-7 pb-20",children:(0,a.jsxs)("div",{className:"pointer-events-auto flex w-full flex-col items-center justify-center rounded-xl border-[1px] border-black/10 bg-white px-8 py-10 transition-all duration-500",children:[(0,a.jsx)(r.EQK,{className:"text-4xl text-[#0039FF]/30"}),(0,a.jsxs)("p",{className:"mt-7 text-center text-base font-light text-black",children:["You have not started learning"," ",null==ev?void 0:ev.name.split(" (")[0]," yet."]}),(0,a.jsx)("button",{className:"mt-4 w-full rounded-full bg-[#2552F4] py-3 font-semibold text-white",onClick:()=>Z.replace("/onboarding?learn=".concat(E)),children:(0,a.jsxs)("div",{className:"font-medium",children:["Start learning ",null==ev?void 0:ev.name.split(" (")[0]]})})]})})}),ec.length>0&&ec.map(e=>{let[t,n]=e;return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"scrollbar-hide mb-4 overflow-x-auto",children:(0,a.jsxs)("div",{className:"flex",style:{minWidth:$?"100%":"calc(100% + 1px)"},children:[(0,a.jsx)("div",{className:"w-[5%]"}),(0,a.jsxs)("div",{className:"flex w-[43.5%] flex-col items-end justify-between gap-1 rounded-xl border border-black/10 bg-[#FAFAFA] p-4",children:[(0,a.jsxs)("p",{className:"w-full text-sm font-medium leading-snug",children:["Flashcard review",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-xs text-[#2552F4]/50",children:"(coming soon)"})]}),(0,a.jsx)("div",{className:"text-3xl",children:"\uD83C\uDCCF"})]}),(0,a.jsx)("div",{className:"w-[3%]"}),(0,a.jsxs)("div",{className:"flex w-[43.5%] flex-col items-end justify-between gap-1 rounded-xl border border-black/10 bg-[#FAFAFA] p-4",children:[(0,a.jsxs)("p",{className:"w-full text-sm font-medium leading-snug",children:["Roadmap ",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-xs text-[#2552F4]/50",children:"(coming soon)"})]}),(0,a.jsx)("div",{className:"text-3xl",children:"\uD83D\uDCDA"})]}),(0,a.jsx)("div",{className:"w-[5%]"})]})}),(0,a.jsx)("div",{className:"mt-1 flex h-36 w-full flex-col items-center justify-center rounded-t-[2rem] border-[1px] border-black/10 bg-white px-7 pb-10",children:(0,a.jsx)("button",{className:"mt-4 flex w-full items-center justify-center rounded-full bg-[#2552F4] py-[1.2rem] text-white",disabled:L,onClick:()=>{console.log("called handleStartLesson"),eh(t,"673289b281b336ee5f36d93c","Smart")},children:L?(0,a.jsx)(D.J,{className:"animate-spin",icon:r.fCD}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.dvR,{className:"mr-1.5",style:{transform:"scaleX(-1)"}}),(0,a.jsx)("p",{className:"text-base font-bold",children:"Start Lesson"})]})})})]},t)})]})})]})]})})}(0,p.bg)({})},33344:function(e,t,n){"use strict";n.d(t,{GI:function(){return o},PA:function(){return x},ax:function(){return u},bi:function(){return c},iy:function(){return l},rs:function(){return g}});var a=n(52274),s=n(19856);let r=(e,t,n)=>{var a;let r={_id:e,baseUrl:(null!==(a=null==t?void 0:t.client)&&void 0!==a?a:s.Lp).getConfig().baseUrl};return n&&(r._infinite=n),(null==t?void 0:t.body)&&(r.body=t.body),(null==t?void 0:t.headers)&&(r.headers=t.headers),(null==t?void 0:t.path)&&(r.path=t.path),(null==t?void 0:t.query)&&(r.query=t.query),r},l=()=>({mutationFn:async e=>{let{data:t}=await (0,s.H4)({...e,throwOnError:!0});return t}}),i=e=>[r("userMyData",e)],o=e=>(0,a.C)({queryFn:async t=>{let{queryKey:n}=t,{data:a}=await (0,s.It)({...e,...n[0],throwOnError:!0});return a},queryKey:i(e)}),u=()=>({mutationFn:async e=>{let{data:t}=await (0,s._5)({...e,throwOnError:!0});return t}}),c=()=>({mutationFn:async e=>{let{data:t}=await (0,s._G)({...e,throwOnError:!0});return t}}),d=e=>[r("tutoringGetAll",e)],g=e=>(0,a.C)({queryFn:async t=>{let{queryKey:n}=t,{data:a}=await (0,s.zW)({...e,...n[0],throwOnError:!0});return a},queryKey:d(e)}),m=e=>[r("tutoringGetLeaderboard",e)],x=e=>(0,a.C)({queryFn:async t=>{let{queryKey:n}=t,{data:a}=await (0,s.Vz)({...e,...n[0],throwOnError:!0});return a},queryKey:m(e)})},56870:function(e,t,n){"use strict";n.d(t,{GlobalAudioContextProvider:function(){return l},Y:function(){return i}});var a=n(57437),s=n(2265);let r=(0,s.createContext)(null),l=e=>{let{children:t}=e,n=(0,s.useRef)(null);return n.current||(console.log("creating audio context"),n.current=new AudioContext,n.current.onstatechange=()=>{var e,t,a,s,r,l;if(console.log("onstagechange - AudioContext state changed: ",null===(e=n.current)||void 0===e?void 0:e.state),(null===(t=n.current)||void 0===t?void 0:t.state)==="suspended"&&(console.log("Attempting to resume AudioContext..."),null===(r=n.current)||void 0===r||r.resume().then(()=>{var e;console.log("AudioContext state: ",null===(e=n.current)||void 0===e?void 0:e.state)}).catch(e=>{console.error("Failed to resume AudioContext:",e)})),(null===(a=n.current)||void 0===a?void 0:a.state.toString())==="interrupted"&&console.log("Safari interrupted audiocontext, but won't resume for now..."),(null===(s=n.current)||void 0===s?void 0:s.state)==="running"){let e=null===(l=n.current)||void 0===l?void 0:l.currentTime;setTimeout(()=>{var t;(null===(t=n.current)||void 0===t?void 0:t.currentTime)===e&&console.warn("AudioContext currentTime is stuck, attempting to fix...")},100)}}),(0,a.jsx)(r.Provider,{value:n.current,children:t})},i=()=>{let e=(0,s.useContext)(r);if(!e)throw Error("useAudioContext must be used within a GlobalAudioContextProvider");return e}},89403:function(e,t,n){"use strict";n.d(t,{f:function(){return s}});var a=n(53974);let s=()=>{let[e,t]=(0,a.useLocalStorage)("token");return{token:e,saveToken:t}}},40257:function(e,t,n){"use strict";var a,s;e.exports=(null==(a=n.g.process)?void 0:a.env)&&"object"==typeof(null==(s=n.g.process)?void 0:s.env)?n.g.process:n(44227)},44227:function(e){!function(){var t={229:function(e){var t,n,a,s=e.exports={};function r(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var o=[],u=!1,c=-1;function d(){u&&a&&(u=!1,a.length?o=a.concat(o):c=-1,o.length&&g())}function g(){if(!u){var e=i(d);u=!0;for(var t=o.length;t;){for(a=o,o=[];++c<t;)a&&a[c].run();c=-1,t=o.length}a=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function x(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new m(e,t)),1!==o.length||u||i(g)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=x,s.addListener=x,s.once=x,s.off=x,s.removeListener=x,s.removeAllListeners=x,s.emit=x,s.prependListener=x,s.prependOnceListener=x,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},n={};function a(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={exports:{}},l=!0;try{t[e](r,r.exports,a),l=!1}finally{l&&delete n[e]}return r.exports}a.ab="//";var s=a(229);e.exports=s}()},32859:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var a=n(57437);n(2265);let s=e=>{let{icon:t,className:n,...s}=e;return(0,a.jsx)(t,{className:n,...s})}},9601:function(e){e.exports={style:{fontFamily:"'__M_PLUS_Rounded_1c_1ebfbf'",fontStyle:"normal"},className:"__className_1ebfbf"}}},function(e){e.O(0,[9071,7240,5878,2516,4060,9763,8802,1169,1811,2017,3069,8079,2971,2117,1744],function(){return e(e.s=3958)}),_N_E=e.O()}]);