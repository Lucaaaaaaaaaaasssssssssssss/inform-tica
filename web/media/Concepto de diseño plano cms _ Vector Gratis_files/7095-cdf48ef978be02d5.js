!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="90022ae0-4e86-4acf-985c-58d51a68e1e8",e._sentryDebugIdIdentifier="sentry-dbid-90022ae0-4e86-4acf-985c-58d51a68e1e8")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7095],{77110:function(e,t,r){r.d(t,{x:function(){return m},u:function(){return p}});var n=r(97458);r(2935),r(41866),r(91095);var a=r(7616),o=r(32748),c=r(83192),i=r(45498),s=r(23174);let h=e=>{let{nextSearch:t}=e;if(!t)return null;let{originalTermResults:r}=t;return r?(0,n.jsx)(d,{}):(0,n.jsx)(u,{})},u=()=>{let{t:e}=(0,o.$G)("regularSearch"),t=(0,s.Jn)("term");return(0,n.jsx)("span",{className:"_1286nb12oc _1286nb16iv",children:e("originalTermNotFound",{keyword:t})})},d=()=>{let e=(0,s.Jn)("term"),t=l(),r=(0,i.Y)("fromQuery",{withPush:!0});return(0,n.jsx)("a",{href:t,className:"_1286nb15s4 _1286nb12oc",onClick:t=>{t.preventDefault(),r(e||"")},children:(0,n.jsx)(o.cC,{i18nKey:"regularSearch:searchForOriginalInstead",values:{keyword:e},components:{1:(0,n.jsx)("strong",{})}})})},l=()=>{let e=(0,a.Dv)(s.lh),t=(0,s.Jn)("term"),r=[...e,[c.FILTERS_NAMES.fromQuery,t]],n=(0,c.E$)(r);return"/search?".concat(n)};var g=r(99753);let b=e=>{let{title:t}=e,{t:r}=(0,o.$G)(["common","regularSearch","iconsSearch","videosSearch"]),a=(0,g.W)(),c=(0,s.Jn)("sort");return(0,n.jsxs)("h1",{className:"_1iexq4j2 _1286nb161v _1286nb12ru _1286nb12qo _1286nb12qm",children:[t||r("common:".concat("recent"===c?"recent":"popular")),(0,n.jsx)(F,{page:a})]})},F=e=>{let{page:t}=e,{t:r}=(0,o.$G)("common");return 1===t?null:" - ".concat(r("common:pageNumber",{page:t}))},m=e=>{let{title:t,description:r,nextSearch:a}=e;return(0,n.jsxs)("div",{className:"_1286nb12yo _1286nb133o _1286nb19i _1286nb12w0 _1286nb12u0",children:[(0,n.jsx)(b,{title:t}),r&&(0,n.jsx)("div",{className:"_1iexq4j4 _1286nb16iv _1286nb12su",children:r}),a&&(0,n.jsx)(h,{nextSearch:a})]})};var C=r(42679),E="_1286nb12z0 _1286nb1340 _1286nb19i _1286nb12vo _1286nb12u6";let p=()=>(0,n.jsxs)("div",{className:E,children:[(0,n.jsx)(C.O.Rect,{height:"120",width:"150"}),(0,n.jsxs)("div",{className:"_1286nb12yu _1286nb133u _1286nb19i _1286nb12w0",children:[(0,n.jsx)(C.O.Rect,{height:"20",width:"200"}),(0,n.jsx)(C.O.Rect,{height:"20",width:"150"}),(0,n.jsxs)("div",{className:E,children:[(0,n.jsx)(C.O.Rect,{height:"30",width:"200"}),(0,n.jsx)(C.O.Rect,{height:"30",width:"100"})]})]})]})},50894:function(e,t,r){r.d(t,{e:function(){return h}});var n=r(96202),a=r(97458),o=r(76893),c=r(44050),i=r(18702),s=r(19216);let h={INSTAGRAM_POST:{titleKey:"artboardInstagramPost",backgroundColor:n.Qs[100],heightPercent:76,categoryId:1915,categoryName:"Instagram Posts",ratio:1,size:{name:"Instagram Post",width:1080,height:1080,unit:"px"},icon:{shape:c.Z,color:n.Qs[700]}},INSTAGRAM_STORIES:{titleKey:"artboardInstagramStories",backgroundColor:n.Qs[100],heightPercent:76,categoryId:1916,categoryName:"Instagram Stories",ratio:1400/1920,size:{name:"Instagram Stories",width:1080,height:1920,unit:"px"},icon:{shape:c.Z,color:n.Qs[700]}},FACEBOOK_POST:{titleKey:"artboardFacebookPost",backgroundColor:n.UH[100],heightPercent:76,categoryId:1796,categoryName:"Facebook Posts",ratio:1,size:{name:"Facebook Square Post",width:1200,height:1200,unit:"px"},icon:{shape:o.Z,color:n.UH[700]}},FACEBOOK_COVER:{titleKey:"artboardFacebookCover",backgroundColor:n.UH[100],heightPercent:52,categoryId:1911,categoryName:"Facebook Cover",ratio:851/315,size:{name:"Facebook Covers",width:851,height:315,unit:"px"},icon:{shape:o.Z,color:n.UH[700]}},X_HEADER:{titleKey:"artboardXHeader",backgroundColor:n.MQ[100],heightPercent:52,categoryId:1925,categoryName:"Twitter Headers",ratio:3,size:{name:"X Header",width:1500,height:500,unit:"px"},icon:{shape:i.Z,color:n.MQ[800]}},YOUTUBE_THUMBNAIL:{titleKey:"artboardYoutubeThumbnail",backgroundColor:n.EO[100],heightPercent:76,categoryId:1928,categoryName:"Youtube Thumbnail",ratio:2560/1440,size:{name:"Youtube thumbnail",width:1280,height:720,unit:"px"},icon:{shape:s.Z,color:n.EO[700]}},BUSINESS_CARD:{titleKey:"artboardBusinessCard",backgroundColor:n.MQ[50],heightPercent:58,categoryId:1844,categoryName:"Business Cards",ratio:85/55,size:{name:"Business Card",width:85,height:55,unit:"mm"},icon:{shape:e=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,a.jsx)("path",{d:"M376.9 190.9h-63.1c-13.8 0-25 11.2-25 25s11.2 25 25 25h63.1c13.8 0 25-11.2 25-25s-11.2-25-25-25M376.9 288.6h-63.1c-13.8 0-25 11.2-25 25s11.2 25 25 25h63.1c13.8 0 25-11.2 25-25s-11.2-25-25-25"}),(0,a.jsx)("path",{d:"M437 50H75c-35.8 0-65 29.2-65 65v282c0 35.8 29.2 65 65 65h362c35.8 0 65-29.2 65-65V115c0-35.8-29.2-65-65-65m15 347c0 8.3-6.7 15-15 15H75c-8.3 0-15-6.7-15-15V115c0-8.3 6.7-15 15-15h362c8.3 0 15 6.7 15 15z"}),(0,a.jsx)("path",{d:"M196.8 267.6c16.7-8.1 28.1-25.2 28.1-45 0-27.6-22.4-50-50-50s-50 22.4-50 50c0 19.8 11.5 36.9 28.1 45-23.2 7.1-41.6 25-49.3 47.9-3.9 11.7 4.7 23.8 17 23.8H229c12.3 0 21-12.1 17-23.8-7.6-22.9-26.1-40.8-49.2-47.9"})]}),color:n.MQ[800]}},DESKTOP_WALLPAPER:{titleKey:"artboardDesktopWallpaper",backgroundColor:n.Ho[100],heightPercent:76,categoryId:1899,categoryName:"Desktop Wallpaper",ratio:1920/1080,size:{name:"Desktop Wallpaper",width:1920,height:1080,unit:"px"},icon:{shape:e=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,a.jsx)("path",{d:"M437 0H75C39.2 0 10 29.2 10 65v262.2c.7 35.3 29.5 63.8 65 63.8h156v44.5h-69.9c-13.8 0-25 11.2-25 25s11.2 25 25 25h184.5c13.8 0 25-11.2 25-25s-11.2-25-25-25H281V391h156c35.8 0 65-29.2 65-65V65c0-35.8-29.2-65-65-65M75 50h362c8.3 0 15 6.7 15 15v261c0 2.2-.5 4.4-1.4 6.3l-75.9-75.9c-9.8-9.8-25.6-9.8-35.4 0L306 289.6 188.7 172.3c-9.8-9.8-25.6-9.8-35.4 0L60 265.6V65c0-8.3 6.7-15 15-15"}),(0,a.jsx)("circle",{cx:342,cy:139,r:50})]}),color:n.Ho[700]}}}},21351:function(e,t,r){r.d(t,{Ql:function(){return o},qq:function(){return i},KR:function(){return c}});var n=r(7616);let a=(0,r(24399).cn)(!1),o=()=>(0,n.Dv)(a),c=()=>(0,n.b9)(a),i=()=>(0,n.KO)(a)},96202:function(e,t,r){r.d(t,{EO:function(){return c},Ho:function(){return o},MQ:function(){return n},Qs:function(){return i},UH:function(){return a}});let n={1e3:"#000000",900:"#121212",800:"#424242",700:"#5B5B5B",600:"#777777",500:"#9C9C9C",400:"#B1B1B1",300:"#C8C8C8",200:"#D8D8D8",100:"#E5E5E5",75:"#F0F0F0",50:"#F7F7F7",25:"#FFFFFF",default:"#9C9C9C"},a={900:"#0A152F",800:"#142A5E",700:"#1F408C",600:"#2955BB",500:"#336AEA",400:"#648EEF",300:"#8FADF4",200:"#B8CBF8",100:"#E1E9FC",50:"#F0F4FD",default:"#336AEA"},o={900:"#0A5E59",800:"#0E7D77",700:"#119D94",600:"#15BCB2",500:"#17D1C6",400:"#4EDCD3",300:"#80E6E0",200:"#AEEFEB",100:"#DCF8F7",50:"#EDFBFB",default:"#17D1C6"},c={900:"#9A2B17",800:"#BC371C",700:"#D3482B",600:"#EB644C",500:"#FF7D6A",400:"#FF9E90",300:"#FFBEB4",200:"#FFD8D2",100:"#FFECE9",50:"#FFF5F4",default:"#FF7D6A"},i={900:"#2C1F32",800:"#503259",700:"#6A4A77",600:"#8D639E",500:"#B07CC6",400:"#C39BD3",300:"#D4B7E0",200:"#E4D1EB",100:"#F3ECF7",50:"#F9F5FB",default:"#503259"}}}]);