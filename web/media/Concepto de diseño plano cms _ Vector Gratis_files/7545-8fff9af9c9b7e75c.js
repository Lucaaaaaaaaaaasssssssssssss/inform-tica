!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ad8b1c9f-0f9e-49d7-98d5-cd5cfa252adc",e._sentryDebugIdIdentifier="sentry-dbid-ad8b1c9f-0f9e-49d7-98d5-cd5cfa252adc")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7545],{85550:function(e,n,t){t.d(n,{C:function(){return s}});var r=t(97458);t(2935),t(41866),t(21348);var a=(0,t(22319).c)({defaultClassName:"_yu8r58a",variantClassNames:{color:{gray:"_1286nb16w4 _1286nb17sv",green:"_yu8r581",violet:"_yu8r582",blue:"_1286nb16w4 _1286nb17jd"},size:{sm:"_1286nb12j0 _1286nb1290 _1286nb123i _1286nb12di _1286nb12p0",md:"_1286nb12j6 _1286nb1296 _1286nb123u _1286nb12du _1286nb12ou"},borderRadius:{full:"_1286nb14li _1286nb14mu _1286nb14o6 _1286nb14pi",sm:"_1286nb14ko _1286nb14m0 _1286nb14nc _1286nb14oo"},uppercase:{true:"_1286nb111",false:"_1286nb110"}},defaultVariants:{color:"gray",size:"sm",borderRadius:"full",uppercase:!1},compoundVariants:[]});let s=e=>{let{children:n,color:t,size:s,borderRadius:i,uppercase:u}=e;return(0,r.jsx)("div",{className:a({color:t,size:s,borderRadius:i,uppercase:u}),children:n})}},36823:function(e,n,t){t.d(n,{b:function(){return s}});var r=t(71409);let a=e=>{let n=/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:[^.]+\.)?([^:\/\n\?\=]+)/.exec(e),t=n&&n[1]&&n[1].indexOf(".")>-1?n[1]:e;return".".concat(t)},s=()=>{let{domain:e}=(0,r.Vx)();return a(e)}},96005:function(e,n,t){t.d(n,{J:function(){return s}});var r=t(71409),a=t(69195);let s=()=>{let e=(0,a.A)(),n=(0,r.aw)(),t=(0,r.ZK)();return{loginUrl:"".concat("es"===t?"https://www.freepik.es/log-in":"https://www.freepik.com/log-in","?").concat(n),setLoginCookies:e}}},69195:function(e,n,t){t.d(n,{A:function(){return _}});var r=t(72118),a=t(83648),s=t(52983),i=t(94918);let u=e=>{let n=e,t=e.indexOf("#");if(-1!==t){let r=e.substring(t+1),a=r.indexOf("."),s=r.indexOf("/");(-1!==a||-1!==s)&&(n=e.substring(0,t))}return n};var c=t(37538);let o=["/search","/videos","/icons","/templates"],d="uuid",l=(e,n)=>{let t=u(e);if(o.some(e=>n.startsWith(e))){let e=new URLSearchParams(t.split("#")[1]),n=c.K.get();if(n&&!e.get(d))return"".concat(t,"#").concat(d,"=").concat(n)}return t};var b=t(36823);let f=new Date(new Date().getTime()+31536e6),_=()=>{let{pathname:e}=(0,a.useRouter)(),n=(0,b.b)();return(0,s.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href;i.D.remove();let a=l(t,e);r.Z.set("GR_LGURI",a,{expires:f,path:"/",domain:n})},[n,e])}}}]);