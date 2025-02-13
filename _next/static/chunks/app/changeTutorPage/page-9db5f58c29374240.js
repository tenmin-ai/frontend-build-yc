(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{30635:function(e,t,r){Promise.resolve().then(r.bind(r,90597))},90597:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(57437),s=r(61273),l=r(99376);function o(){let e=(0,l.useRouter)();return(0,n.jsx)("main",{className:"h-screen-safe bg-[#FAFBFF] pb-14 pt-14",children:(0,n.jsxs)("div",{className:"flex h-full flex-col items-center justify-between px-7 tracking-[-0.02em]",children:[(0,n.jsx)("div",{className:"flex w-full flex-col items-center",children:(0,n.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,n.jsx)("button",{className:"flex h-12 w-12 items-center justify-center self-start rounded-full bg-black bg-opacity-[10%] text-sm font-medium text-black/60",onClick:()=>{e.replace("/")},children:(0,n.jsx)(s.bUI,{})}),(0,n.jsx)("div",{className:"text-normal rounded-full border-2 border-[#63C7B2] bg-[#63C7B2]/20 px-4 py-1 font-semibold text-[#63C7B2]",children:(0,n.jsx)(s.Yv2,{})})]})}),(0,n.jsxs)("div",{className:"scrollbar-hide mt-8 flex-1 overflow-y-auto pb-20",children:[(0,n.jsxs)("div",{className:"text-normal mb-5 rounded-2xl border-[1px] border-[#0039FF]/15 bg-[#0039FF]/10 px-6 py-6 text-[#0039FF]",children:[(0,n.jsxs)("div",{className:"mb-1 flex items-center font-bold",children:[(0,n.jsx)("img",{className:"mr-3",src:"/tenmin_new_logo.svg",alt:"Tenmin Logo"}),"Choose your tutor"]}),(0,n.jsx)("div",{children:"Get started by calling your tutor to generate your lesson plan!"})]},"asdfasdf"),[].map((e,t)=>(0,n.jsxs)("div",{className:"mb-5 rounded-2xl border-[1px] border-black/10 bg-white px-6 py-6",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("img",{src:e.profile_picture_url,alt:e.name,className:"mr-7 h-20 w-20 rounded-full"}),(0,n.jsxs)("h3",{className:"flex flex-col items-start text-xl font-semibold text-black",children:[e.name,(0,n.jsxs)("div",{className:"mt-2 flex items-center gap-2 rounded-md bg-[#CCD7FF] px-3 py-1 text-center text-sm font-normal text-[#0039FF]",children:[(0,n.jsx)(s.gmG,{className:"text-xs"}),"Sample"]})]})]}),(0,n.jsx)("p",{className:"mt-4 text-base text-black",children:e.description})]},t))]})]})})}},99376:function(e,t,r){"use strict";var n=r(35475);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},46231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(s),o=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,s;n=t,s=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(m,a({attr:i({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,i({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:s,size:l,title:c}=e,u=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,o),m=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[7240,2971,2117,1744],function(){return e(e.s=30635)}),_N_E=e.O()}]);