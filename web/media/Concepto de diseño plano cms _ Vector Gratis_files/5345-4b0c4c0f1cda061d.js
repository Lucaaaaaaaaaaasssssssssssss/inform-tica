!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="05ca9ff6-be92-4604-9ac8-e567ba6e3381",e._sentryDebugIdIdentifier="sentry-dbid-05ca9ff6-be92-4604-9ac8-e567ba6e3381")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5345],{57164:function(e,t,n){n.d(t,{gm:function(){return i}});var r=n(52983);let o=(0,r.createContext)(void 0);function i(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},19974:function(e,t,n){n.d(t,{Eh:function(){return X},VY:function(){return $},ee:function(){return V},fC:function(){return Z},h_:function(){return B},x8:function(){return Y},xz:function(){return z}});var r=n(24552),o=n(52983),i=n(12527),l=n(81213),a=n(62331),u=n(56368),c=n(29520),s=n(3636),f=n(74009),d=n(98290),p=n(74077),h=n(88702),g=n(37956),m=n(96782),v=n(23196),y=n(50726),w=n(60382);let x="Popover",[b,E]=(0,a.b)(x,[d.D7]),C=(0,d.D7)(),[R,P]=b(x),T=(0,o.forwardRef)((e,t)=>{let{__scopePopover:n,...i}=e,l=P("PopoverAnchor",n),a=C(n),{onCustomAnchorAdd:u,onCustomAnchorRemove:c}=l;return(0,o.useEffect)(()=>(u(),()=>c()),[u,c]),(0,o.createElement)(d.ee,(0,r.Z)({},a,i,{ref:t}))}),A=(0,o.forwardRef)((e,t)=>{let{__scopePopover:n,...a}=e,u=P("PopoverTrigger",n),c=C(n),s=(0,l.e)(t,u.triggerRef),f=(0,o.createElement)(g.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":u.open,"aria-controls":u.contentId,"data-state":W(u.open)},a,{ref:s,onClick:(0,i.M)(e.onClick,u.onOpenToggle)}));return u.hasCustomAnchor?f:(0,o.createElement)(d.ee,(0,r.Z)({asChild:!0},c),f)}),O="PopoverPortal",[_,D]=b(O,{forceMount:void 0}),k="PopoverContent",L=(0,o.forwardRef)((e,t)=>{let n=D(k,e.__scopePopover),{forceMount:i=n.forceMount,...l}=e,a=P(k,e.__scopePopover);return(0,o.createElement)(h.z,{present:i||a.open},a.modal?(0,o.createElement)(M,(0,r.Z)({},l,{ref:t})):(0,o.createElement)(S,(0,r.Z)({},l,{ref:t})))}),M=(0,o.forwardRef)((e,t)=>{let n=P(k,e.__scopePopover),a=(0,o.useRef)(null),u=(0,l.e)(t,a),c=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=a.current;if(e)return(0,y.Ry)(e)},[]),(0,o.createElement)(w.Z,{as:m.g7,allowPinchZoom:!0},(0,o.createElement)(F,(0,r.Z)({},e,{ref:u,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),c.current||null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;c.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:(0,i.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})))}),S=(0,o.forwardRef)((e,t)=>{let n=P(k,e.__scopePopover),i=(0,o.useRef)(!1),l=(0,o.useRef)(!1);return(0,o.createElement)(F,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(i.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),i.current=!1,l.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(i.current=!0,"pointerdown"!==t.detail.originalEvent.type||(l.current=!0));let a=t.target;(null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&l.current&&t.preventDefault()}}))}),F=(0,o.forwardRef)((e,t)=>{let{__scopePopover:n,trapFocus:i,onOpenAutoFocus:l,onCloseAutoFocus:a,disableOutsidePointerEvents:f,onEscapeKeyDown:p,onPointerDownOutside:h,onFocusOutside:g,onInteractOutside:m,...v}=e,y=P(k,n),w=C(n);return(0,c.EW)(),(0,o.createElement)(s.M,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:l,onUnmountAutoFocus:a},(0,o.createElement)(u.XB,{asChild:!0,disableOutsidePointerEvents:f,onInteractOutside:m,onEscapeKeyDown:p,onPointerDownOutside:h,onFocusOutside:g,onDismiss:()=>y.onOpenChange(!1)},(0,o.createElement)(d.VY,(0,r.Z)({"data-state":W(y.open),role:"dialog",id:y.contentId},w,v,{ref:t,style:{...v.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))}),H=(0,o.forwardRef)((e,t)=>{let{__scopePopover:n,...l}=e,a=P("PopoverClose",n);return(0,o.createElement)(g.WV.button,(0,r.Z)({type:"button"},l,{ref:t,onClick:(0,i.M)(e.onClick,()=>a.onOpenChange(!1))}))}),I=(0,o.forwardRef)((e,t)=>{let{__scopePopover:n,...i}=e,l=C(n);return(0,o.createElement)(d.Eh,(0,r.Z)({},l,i,{ref:t}))});function W(e){return e?"open":"closed"}let Z=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:l,modal:a=!1}=e,u=C(t),c=(0,o.useRef)(null),[s,p]=(0,o.useState)(!1),[h=!1,g]=(0,v.T)({prop:r,defaultProp:i,onChange:l});return(0,o.createElement)(d.fC,u,(0,o.createElement)(R,{scope:t,contentId:(0,f.M)(),triggerRef:c,open:h,onOpenChange:g,onOpenToggle:(0,o.useCallback)(()=>g(e=>!e),[g]),hasCustomAnchor:s,onCustomAnchorAdd:(0,o.useCallback)(()=>p(!0),[]),onCustomAnchorRemove:(0,o.useCallback)(()=>p(!1),[]),modal:a},n))},V=T,z=A,B=e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,l=P(O,t);return(0,o.createElement)(_,{scope:t,forceMount:n},(0,o.createElement)(h.z,{present:n||l.open},(0,o.createElement)(p.h,{asChild:!0,container:i},r)))},$=L,Y=H,X=I},98290:function(e,t,n){n.d(t,{ee:function(){return e$},Eh:function(){return eX},VY:function(){return eY},fC:function(){return eB},D7:function(){return e_}});var r=n(24552),o=n(52983);let i=["top","right","bottom","left"],l=Math.min,a=Math.max,u=Math.round,c=Math.floor,s=e=>({x:e,y:e}),f={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function p(e,t){return"function"==typeof e?e(t):e}function h(e){return e.split("-")[0]}function g(e){return e.split("-")[1]}function m(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function y(e){return["top","bottom"].includes(h(e))?"y":"x"}function w(e){return e.replace(/start|end/g,e=>d[e])}function x(e){return e.replace(/left|right|bottom|top/g,e=>f[e])}function b(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function E(e){let{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function C(e,t,n){let r,{reference:o,floating:i}=e,l=y(t),a=m(y(t)),u=v(a),c=h(t),s="y"===l,f=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,p=o[u]/2-i[u]/2;switch(c){case"top":r={x:f,y:o.y-i.height};break;case"bottom":r={x:f,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:d};break;case"left":r={x:o.x-i.width,y:d};break;default:r={x:o.x,y:o.y}}switch(g(t)){case"start":r[a]-=p*(n&&s?-1:1);break;case"end":r[a]+=p*(n&&s?-1:1)}return r}let R=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),u=await (null==l.isRTL?void 0:l.isRTL(t)),c=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:s,y:f}=C(c,r,u),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:i,fn:g}=a[n],{x:m,y:v,data:y,reset:w}=await g({x:s,y:f,initialPlacement:r,placement:d,strategy:o,middlewareData:p,rects:c,platform:l,elements:{reference:e,floating:t}});s=null!=m?m:s,f=null!=v?v:f,p={...p,[i]:{...p[i],...y}},w&&h<=50&&(h++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(c=!0===w.rects?await l.getElementRects({reference:e,floating:t,strategy:o}):w.rects),{x:s,y:f}=C(c,d,u)),n=-1)}return{x:s,y:f,placement:d,strategy:o,middlewareData:p}};async function P(e,t){var n;void 0===t&&(t={});let{x:r,y:o,platform:i,rects:l,elements:a,strategy:u}=e,{boundary:c="clippingAncestors",rootBoundary:s="viewport",elementContext:f="floating",altBoundary:d=!1,padding:h=0}=p(t,e),g=b(h),m=a[d?"floating"===f?"reference":"floating":f],v=E(await i.getClippingRect({element:null==(n=await (null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:s,strategy:u})),y="floating"===f?{x:r,y:o,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),x=await (null==i.isElement?void 0:i.isElement(w))&&await (null==i.getScale?void 0:i.getScale(w))||{x:1,y:1},C=E(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:w,strategy:u}):y);return{top:(v.top-C.top+g.top)/x.y,bottom:(C.bottom-v.bottom+g.bottom)/x.y,left:(v.left-C.left+g.left)/x.x,right:(C.right-v.right+g.right)/x.x}}function T(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function A(e){return i.some(t=>e[t]>=0)}async function O(e,t){let{placement:n,platform:r,elements:o}=e,i=await (null==r.isRTL?void 0:r.isRTL(o.floating)),l=h(n),a=g(n),u="y"===y(n),c=["left","top"].includes(l)?-1:1,s=i&&u?-1:1,f=p(t,e),{mainAxis:d,crossAxis:m,alignmentAxis:v}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&"number"==typeof v&&(m="end"===a?-1*v:v),u?{x:m*s,y:d*c}:{x:d*c,y:m*s}}function _(e){return L(e)?(e.nodeName||"").toLowerCase():"#document"}function D(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function k(e){var t;return null==(t=(L(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function L(e){return e instanceof Node||e instanceof D(e).Node}function M(e){return e instanceof Element||e instanceof D(e).Element}function S(e){return e instanceof HTMLElement||e instanceof D(e).HTMLElement}function F(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof D(e).ShadowRoot)}function H(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=z(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function I(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function W(e){let t=Z(),n=z(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function Z(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function V(e){return["html","body","#document"].includes(_(e))}function z(e){return D(e).getComputedStyle(e)}function B(e){return M(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $(e){if("html"===_(e))return e;let t=e.assignedSlot||e.parentNode||F(e)&&e.host||k(e);return F(t)?t.host:t}function Y(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=function e(t){let n=$(t);return V(n)?t.ownerDocument?t.ownerDocument.body:t.body:S(n)&&H(n)?n:e(n)}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),l=D(o);return i?t.concat(l,l.visualViewport||[],H(o)?o:[],l.frameElement&&n?Y(l.frameElement):[]):t.concat(o,Y(o,[],n))}function X(e){let t=z(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=S(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=u(n)!==i||u(r)!==l;return a&&(n=i,r=l),{width:n,height:r,$:a}}function N(e){return M(e)?e:e.contextElement}function j(e){let t=N(e);if(!S(t))return s(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=X(t),l=(i?u(n.width):n.width)/r,a=(i?u(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let K=s(0);function q(e){let t=D(e);return Z()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:K}function U(e,t,n,r){var o;void 0===t&&(t=!1),void 0===n&&(n=!1);let i=e.getBoundingClientRect(),l=N(e),a=s(1);t&&(r?M(r)&&(a=j(r)):a=j(e));let u=(void 0===(o=n)&&(o=!1),r&&(!o||r===D(l))&&o)?q(l):s(0),c=(i.left+u.x)/a.x,f=(i.top+u.y)/a.y,d=i.width/a.x,p=i.height/a.y;if(l){let e=D(l),t=r&&M(r)?D(r):r,n=e,o=n.frameElement;for(;o&&r&&t!==n;){let e=j(o),t=o.getBoundingClientRect(),r=z(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,f*=e.y,d*=e.x,p*=e.y,c+=i,f+=l,o=(n=D(o)).frameElement}}return E({width:d,height:p,x:c,y:f})}function G(e){return U(k(e)).left+B(e).scrollLeft}function J(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=D(e),r=k(e),o=n.visualViewport,i=r.clientWidth,l=r.clientHeight,a=0,u=0;if(o){i=o.width,l=o.height;let e=Z();(!e||e&&"fixed"===t)&&(a=o.offsetLeft,u=o.offsetTop)}return{width:i,height:l,x:a,y:u}}(e,n);else if("document"===t)r=function(e){let t=k(e),n=B(e),r=e.ownerDocument.body,o=a(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=a(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+G(e),u=-n.scrollTop;return"rtl"===z(r).direction&&(l+=a(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:u}}(k(e));else if(M(t))r=function(e,t){let n=U(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=S(e)?j(e):s(1),l=e.clientWidth*i.x;return{width:l,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{let n=q(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return E(r)}function Q(e){return"static"===z(e).position}function ee(e,t){return S(e)&&"fixed"!==z(e).position?t?t(e):e.offsetParent:null}function et(e,t){let n=D(e);if(I(e))return n;if(!S(e)){let t=$(e);for(;t&&!V(t);){if(M(t)&&!Q(t))return t;t=$(t)}return n}let r=ee(e,t);for(;r&&["table","td","th"].includes(_(r))&&Q(r);)r=ee(r,t);return r&&V(r)&&Q(r)&&!W(r)?n:r||function(e){let t=$(e);for(;S(t)&&!V(t)&&!I(t);){if(W(t))return t;t=$(t)}return null}(e)||n}let en=async function(e){let t=this.getOffsetParent||et,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=S(t),o=k(t),i="fixed"===n,l=U(e,!0,i,t),a={scrollLeft:0,scrollTop:0},u=s(0);if(r||!r&&!i){if(("body"!==_(t)||H(o))&&(a=B(t)),r){let e=U(t,!0,i,t);u.x=e.x+t.clientLeft,u.y=e.y+t.clientTop}else o&&(u.x=G(o))}return{x:l.left+a.scrollLeft-u.x,y:l.top+a.scrollTop-u.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},er={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e,i="fixed"===o,l=k(r),a=!!t&&I(t.floating);if(r===l||a&&i)return n;let u={scrollLeft:0,scrollTop:0},c=s(1),f=s(0),d=S(r);if((d||!d&&!i)&&(("body"!==_(r)||H(l))&&(u=B(r)),S(r))){let e=U(r);c=j(r),f.x=e.x+r.clientLeft,f.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-u.scrollLeft*c.x+f.x,y:n.y*c.y-u.scrollTop*c.y+f.y}},getDocumentElement:k,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,i=[..."clippingAncestors"===n?I(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=Y(e,[],!1).filter(e=>M(e)&&"body"!==_(e)),o=null,i="fixed"===z(e).position,l=i?$(e):e;for(;M(l)&&!V(l);){let t=z(l),n=W(l);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||H(l)&&!n&&function e(t,n){let r=$(t);return!(r===n||!M(r)||V(r))&&("fixed"===z(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):o=t,l=$(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],u=i[0],c=i.reduce((e,n)=>{let r=J(t,n,o);return e.top=a(r.top,e.top),e.right=l(r.right,e.right),e.bottom=l(r.bottom,e.bottom),e.left=a(r.left,e.left),e},J(t,u,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:et,getElementRects:en,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=X(e);return{width:t,height:n}},getScale:j,isElement:M,isRTL:function(e){return"rtl"===z(e).direction}},eo=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:u,elements:c,middlewareData:s}=t,{element:f,padding:d=0}=p(e,t)||{};if(null==f)return{};let h=b(d),w={x:n,y:r},x=m(y(o)),E=v(x),C=await u.getDimensions(f),R="y"===x,P=R?"clientHeight":"clientWidth",T=i.reference[E]+i.reference[x]-w[x]-i.floating[E],A=w[x]-i.reference[x],O=await (null==u.getOffsetParent?void 0:u.getOffsetParent(f)),_=O?O[P]:0;_&&await (null==u.isElement?void 0:u.isElement(O))||(_=c.floating[P]||i.floating[E]);let D=_/2-C[E]/2-1,k=l(h[R?"top":"left"],D),L=l(h[R?"bottom":"right"],D),M=_-C[E]-L,S=_/2-C[E]/2+(T/2-A/2),F=a(k,l(S,M)),H=!s.arrow&&null!=g(o)&&S!==F&&i.reference[E]/2-(S<k?k:L)-C[E]/2<0,I=H?S<k?S-k:S-M:0;return{[x]:w[x]+I,data:{[x]:F,centerOffset:S-F-I,...H&&{alignmentOffset:I}},reset:H}}}),ei=(e,t,n)=>{let r=new Map,o={platform:er,...n},i={...o.platform,_c:r};return R(e,t,{...o,platform:i})};var el=n(63730),ea="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function eu(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!eu(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!eu(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ec(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function es(e,t){let n=ec(e);return Math.round(t*n)/n}function ef(e){let t=o.useRef(e);return ea(()=>{t.current=e}),t}let ed=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?eo({element:n.current,padding:r}).fn(t):{}:n?eo({element:n,padding:r}).fn(t):{}}}),ep=(e,t)=>{var n;return{...(void 0===(n=e)&&(n=0),{name:"offset",options:n,async fn(e){var t,r;let{x:o,y:i,placement:l,middlewareData:a}=e,u=await O(e,n);return l===(null==(t=a.offset)?void 0:t.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:o+u.x,y:i+u.y,data:{...u,placement:l}}}}),options:[e,t]}},eh=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"shift",options:n,async fn(e){let{x:t,y:r,placement:o}=e,{mainAxis:i=!0,crossAxis:u=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=p(n,e),f={x:t,y:r},d=await P(e,s),g=y(h(o)),v=m(g),w=f[v],x=f[g];if(i){let e="y"===v?"top":"left",t="y"===v?"bottom":"right",n=w+d[e],r=w-d[t];w=a(n,l(w,r))}if(u){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",n=x+d[e],r=x-d[t];x=a(n,l(x,r))}let b=c.fn({...e,[v]:w,[g]:x});return{...b,data:{x:b.x-t,y:b.y-r}}}}),options:[e,t]}},eg=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{options:n,fn(e){let{x:t,y:r,placement:o,rects:i,middlewareData:l}=e,{offset:a=0,mainAxis:u=!0,crossAxis:c=!0}=p(n,e),s={x:t,y:r},f=y(o),d=m(f),g=s[d],v=s[f],w=p(a,e),x="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(u){let e="y"===d?"height":"width",t=i.reference[d]-i.floating[e]+x.mainAxis,n=i.reference[d]+i.reference[e]-x.mainAxis;g<t?g=t:g>n&&(g=n)}if(c){var b,E;let e="y"===d?"width":"height",t=["top","left"].includes(h(o)),n=i.reference[f]-i.floating[e]+(t&&(null==(b=l.offset)?void 0:b[f])||0)+(t?0:x.crossAxis),r=i.reference[f]+i.reference[e]+(t?0:(null==(E=l.offset)?void 0:E[f])||0)-(t?x.crossAxis:0);v<n?v=n:v>r&&(v=r)}return{[d]:g,[f]:v}}}),options:[e,t]}},em=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"flip",options:n,async fn(e){var t,r,o,i,l;let{placement:a,middlewareData:u,rects:c,initialPlacement:s,platform:f,elements:d}=e,{mainAxis:b=!0,crossAxis:E=!0,fallbackPlacements:C,fallbackStrategy:R="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:A=!0,...O}=p(n,e);if(null!=(t=u.arrow)&&t.alignmentOffset)return{};let _=h(a),D=y(s),k=h(s)===s,L=await (null==f.isRTL?void 0:f.isRTL(d.floating)),M=C||(k||!A?[x(s)]:function(e){let t=x(e);return[w(e),t,w(t)]}(s)),S="none"!==T;!C&&S&&M.push(...function(e,t,n,r){let o=g(e),i=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(h(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(w)))),i}(s,A,T,L));let F=[s,...M],H=await P(e,O),I=[],W=(null==(r=u.flip)?void 0:r.overflows)||[];if(b&&I.push(H[_]),E){let e=function(e,t,n){void 0===n&&(n=!1);let r=g(e),o=m(y(e)),i=v(o),l="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=x(l)),[l,x(l)]}(a,c,L);I.push(H[e[0]],H[e[1]])}if(W=[...W,{placement:a,overflows:I}],!I.every(e=>e<=0)){let e=((null==(o=u.flip)?void 0:o.index)||0)+1,t=F[e];if(t)return{data:{index:e,overflows:W},reset:{placement:t}};let n=null==(i=W.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!n)switch(R){case"bestFit":{let e=null==(l=W.filter(e=>{if(S){let t=y(e.placement);return t===D||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=s}if(a!==n)return{reset:{placement:n}}}return{}}}),options:[e,t]}},ev=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"size",options:n,async fn(e){let t,r;let{placement:o,rects:i,platform:u,elements:c}=e,{apply:s=()=>{},...f}=p(n,e),d=await P(e,f),m=h(o),v=g(o),w="y"===y(o),{width:x,height:b}=i.floating;"top"===m||"bottom"===m?(t=m,r=v===(await (null==u.isRTL?void 0:u.isRTL(c.floating))?"start":"end")?"left":"right"):(r=m,t="end"===v?"top":"bottom");let E=b-d.top-d.bottom,C=x-d.left-d.right,R=l(b-d[t],E),T=l(x-d[r],C),A=!e.middlewareData.shift,O=R,_=T;if(w?_=v||A?l(T,C):C:O=v||A?l(R,E):E,A&&!v){let e=a(d.left,0),t=a(d.right,0),n=a(d.top,0),r=a(d.bottom,0);w?_=x-2*(0!==e||0!==t?e+t:a(d.left,d.right)):O=b-2*(0!==n||0!==r?n+r:a(d.top,d.bottom))}await s({...e,availableWidth:_,availableHeight:O});let D=await u.getDimensions(c.floating);return x!==D.width||b!==D.height?{reset:{rects:!0}}:{}}}),options:[e,t]}},ey=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"hide",options:n,async fn(e){let{rects:t}=e,{strategy:r="referenceHidden",...o}=p(n,e);switch(r){case"referenceHidden":{let n=T(await P(e,{...o,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:A(n)}}}case"escaped":{let n=T(await P(e,{...o,altBoundary:!0}),t.floating);return{data:{escapedOffsets:n,escaped:A(n)}}}default:return{}}}}),options:[e,t]}},ew=(e,t)=>({...ed(e),options:[e,t]});var ex=n(37956);let eb=(0,o.forwardRef)((e,t)=>{let{children:n,width:i=10,height:l=5,...a}=e;return(0,o.createElement)(ex.WV.svg,(0,r.Z)({},a,{ref:t,width:i,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:(0,o.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var eE=n(81213),eC=n(62331),eR=n(91109),eP=n(24577),eT=n(10988);let eA="Popper",[eO,e_]=(0,eC.b)(eA),[eD,ek]=eO(eA),eL=(0,o.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:i,...l}=e,a=ek("PopperAnchor",n),u=(0,o.useRef)(null),c=(0,eE.e)(t,u);return(0,o.useEffect)(()=>{a.onAnchorChange((null==i?void 0:i.current)||u.current)}),i?null:(0,o.createElement)(ex.WV.div,(0,r.Z)({},l,{ref:c}))}),eM="PopperContent",[eS,eF]=eO(eM),eH=(0,o.forwardRef)((e,t)=>{var n,i,u,s,f,d,p,h;let{__scopePopper:g,side:m="bottom",sideOffset:v=0,align:y="center",alignOffset:w=0,arrowPadding:x=0,avoidCollisions:b=!0,collisionBoundary:E=[],collisionPadding:C=0,sticky:R="partial",hideWhenDetached:P=!1,updatePositionStrategy:T="optimized",onPlaced:A,...O}=e,_=ek(eM,g),[D,L]=(0,o.useState)(null),M=(0,eE.e)(t,e=>L(e)),[S,F]=(0,o.useState)(null),H=(0,eT.t)(S),I=null!==(n=null==H?void 0:H.width)&&void 0!==n?n:0,W=null!==(i=null==H?void 0:H.height)&&void 0!==i?i:0,Z="number"==typeof C?C:{top:0,right:0,bottom:0,left:0,...C},V=Array.isArray(E)?E:[E],z=V.length>0,B={padding:Z,boundary:V.filter(eZ),altBoundary:z},{refs:$,floatingStyles:X,placement:j,isPositioned:K,middlewareData:q}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:l,floating:a}={},transform:u=!0,whileElementsMounted:c,open:s}=e,[f,d]=o.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=o.useState(r);eu(p,r)||h(r);let[g,m]=o.useState(null),[v,y]=o.useState(null),w=o.useCallback(e=>{e!==C.current&&(C.current=e,m(e))},[]),x=o.useCallback(e=>{e!==R.current&&(R.current=e,y(e))},[]),b=l||g,E=a||v,C=o.useRef(null),R=o.useRef(null),P=o.useRef(f),T=null!=c,A=ef(c),O=ef(i),_=o.useCallback(()=>{if(!C.current||!R.current)return;let e={placement:t,strategy:n,middleware:p};O.current&&(e.platform=O.current),ei(C.current,R.current,e).then(e=>{let t={...e,isPositioned:!0};D.current&&!eu(P.current,t)&&(P.current=t,el.flushSync(()=>{d(t)}))})},[p,t,n,O]);ea(()=>{!1===s&&P.current.isPositioned&&(P.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[s]);let D=o.useRef(!1);ea(()=>(D.current=!0,()=>{D.current=!1}),[]),ea(()=>{if(b&&(C.current=b),E&&(R.current=E),b&&E){if(A.current)return A.current(b,E,_);_()}},[b,E,_,A,T]);let k=o.useMemo(()=>({reference:C,floating:R,setReference:w,setFloating:x}),[w,x]),L=o.useMemo(()=>({reference:b,floating:E}),[b,E]),M=o.useMemo(()=>{let e={position:n,left:0,top:0};if(!L.floating)return e;let t=es(L.floating,f.x),r=es(L.floating,f.y);return u?{...e,transform:"translate("+t+"px, "+r+"px)",...ec(L.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,u,L.floating,f.x,f.y]);return o.useMemo(()=>({...f,update:_,refs:k,elements:L,floatingStyles:M}),[f,_,k,L,M])}({strategy:"fixed",placement:m+("center"!==y?"-"+y:""),whileElementsMounted:(...e)=>(function(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:i=!0,ancestorResize:u=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=N(e),h=i||u?[...p?Y(p):[],...Y(t)]:[];h.forEach(e=>{i&&e.addEventListener("scroll",n,{passive:!0}),u&&e.addEventListener("resize",n)});let g=p&&f?function(e,t){let n,r=null,o=k(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function u(s,f){void 0===s&&(s=!1),void 0===f&&(f=1),i();let{left:d,top:p,width:h,height:g}=e.getBoundingClientRect();if(s||t(),!h||!g)return;let m=c(p),v=c(o.clientWidth-(d+h)),y={rootMargin:-m+"px "+-v+"px "+-c(o.clientHeight-(p+g))+"px "+-c(d)+"px",threshold:a(0,l(1,f))||1},w=!0;function x(e){let t=e[0].intersectionRatio;if(t!==f){if(!w)return u();t?u(!1,t):n=setTimeout(()=>{u(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...y,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(x,y)}r.observe(e)}(!0),i}(p,n):null,m=-1,v=null;s&&(v=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&v&&(v.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var e;null==(e=v)||e.observe(t)})),n()}),p&&!d&&v.observe(p),v.observe(t));let y=d?U(e):null;return d&&function t(){let r=U(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,o=requestAnimationFrame(t)}(),n(),()=>{var e;h.forEach(e=>{i&&e.removeEventListener("scroll",n),u&&e.removeEventListener("resize",n)}),null==g||g(),null==(e=v)||e.disconnect(),v=null,d&&cancelAnimationFrame(o)}})(...e,{animationFrame:"always"===T}),elements:{reference:_.anchor},middleware:[ep({mainAxis:v+W,alignmentAxis:w}),b&&eh({mainAxis:!0,crossAxis:!1,limiter:"partial"===R?eg():void 0,...B}),b&&em({...B}),ev({...B,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${o}px`),l.setProperty("--radix-popper-anchor-height",`${i}px`)}}),S&&ew({element:S,padding:x}),eV({arrowWidth:I,arrowHeight:W}),P&&ey({strategy:"referenceHidden",...B})]}),[G,J]=ez(j),Q=(0,eR.W)(A);(0,eP.b)(()=>{K&&(null==Q||Q())},[K,Q]);let ee=null===(u=q.arrow)||void 0===u?void 0:u.x,et=null===(s=q.arrow)||void 0===s?void 0:s.y,en=(null===(f=q.arrow)||void 0===f?void 0:f.centerOffset)!==0,[er,eo]=(0,o.useState)();return(0,eP.b)(()=>{D&&eo(window.getComputedStyle(D).zIndex)},[D]),(0,o.createElement)("div",{ref:$.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:K?X.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:er,"--radix-popper-transform-origin":[null===(d=q.transformOrigin)||void 0===d?void 0:d.x,null===(p=q.transformOrigin)||void 0===p?void 0:p.y].join(" ")},dir:e.dir},(0,o.createElement)(eS,{scope:g,placedSide:G,onArrowChange:F,arrowX:ee,arrowY:et,shouldHideArrow:en},(0,o.createElement)(ex.WV.div,(0,r.Z)({"data-side":G,"data-align":J},O,{ref:M,style:{...O.style,animation:K?void 0:"none",opacity:null!==(h=q.hide)&&void 0!==h&&h.referenceHidden?0:void 0}}))))}),eI={top:"bottom",right:"left",bottom:"top",left:"right"},eW=(0,o.forwardRef)(function(e,t){let{__scopePopper:n,...i}=e,l=eF("PopperArrow",n),a=eI[l.placedSide];return(0,o.createElement)("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0}},(0,o.createElement)(eb,(0,r.Z)({},i,{ref:t,style:{...i.style,display:"block"}})))});function eZ(e){return null!==e}let eV=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,l;let{placement:a,rects:u,middlewareData:c}=t,s=(null===(n=c.arrow)||void 0===n?void 0:n.centerOffset)!==0,f=s?0:e.arrowWidth,d=s?0:e.arrowHeight,[p,h]=ez(a),g={start:"0%",center:"50%",end:"100%"}[h],m=(null!==(r=null===(o=c.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+f/2,v=(null!==(i=null===(l=c.arrow)||void 0===l?void 0:l.y)&&void 0!==i?i:0)+d/2,y="",w="";return"bottom"===p?(y=s?g:`${m}px`,w=`${-d}px`):"top"===p?(y=s?g:`${m}px`,w=`${u.floating.height+d}px`):"right"===p?(y=`${-d}px`,w=s?g:`${v}px`):"left"===p&&(y=`${u.floating.width+d}px`,w=s?g:`${v}px`),{data:{x:y,y:w}}}});function ez(e){let[t,n="center"]=e.split("-");return[t,n]}let eB=e=>{let{__scopePopper:t,children:n}=e,[r,i]=(0,o.useState)(null);return(0,o.createElement)(eD,{scope:t,anchor:r,onAnchorChange:i},n)},e$=eL,eY=eH,eX=eW},65817:function(e,t,n){n.d(t,{Eh:function(){return $},VY:function(){return B},fC:function(){return Z},h_:function(){return z},xz:function(){return V},zt:function(){return W}});var r=n(24552),o=n(52983),i=n(12527),l=n(81213),a=n(62331),u=n(56368),c=n(74009),s=n(98290),f=n(74077),d=n(88702),p=n(37956),h=n(96782),g=n(23196),m=n(33838);let[v,y]=(0,a.b)("Tooltip",[s.D7]),w=(0,s.D7)(),x="tooltip.open",[b,E]=v("TooltipProvider"),C="Tooltip",[R,P]=v(C),T="TooltipTrigger",A=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,...a}=e,u=P(T,n),c=E(T,n),f=w(n),d=(0,o.useRef)(null),h=(0,l.e)(t,d,u.onTriggerChange),g=(0,o.useRef)(!1),m=(0,o.useRef)(!1),v=(0,o.useCallback)(()=>g.current=!1,[]);return(0,o.useEffect)(()=>()=>document.removeEventListener("pointerup",v),[v]),(0,o.createElement)(s.ee,(0,r.Z)({asChild:!0},f),(0,o.createElement)(p.WV.button,(0,r.Z)({"aria-describedby":u.open?u.contentId:void 0,"data-state":u.stateAttribute},a,{ref:h,onPointerMove:(0,i.M)(e.onPointerMove,e=>{"touch"===e.pointerType||m.current||c.isPointerInTransitRef.current||(u.onTriggerEnter(),m.current=!0)}),onPointerLeave:(0,i.M)(e.onPointerLeave,()=>{u.onTriggerLeave(),m.current=!1}),onPointerDown:(0,i.M)(e.onPointerDown,()=>{g.current=!0,document.addEventListener("pointerup",v,{once:!0})}),onFocus:(0,i.M)(e.onFocus,()=>{g.current||u.onOpen()}),onBlur:(0,i.M)(e.onBlur,u.onClose),onClick:(0,i.M)(e.onClick,u.onClose)})))}),O="TooltipPortal",[_,D]=v(O,{forceMount:void 0}),k="TooltipContent",L=(0,o.forwardRef)((e,t)=>{let n=D(k,e.__scopeTooltip),{forceMount:i=n.forceMount,side:l="top",...a}=e,u=P(k,e.__scopeTooltip);return(0,o.createElement)(d.z,{present:i||u.open},u.disableHoverableContent?(0,o.createElement)(H,(0,r.Z)({side:l},a,{ref:t})):(0,o.createElement)(M,(0,r.Z)({side:l},a,{ref:t})))}),M=(0,o.forwardRef)((e,t)=>{let n=P(k,e.__scopeTooltip),i=E(k,e.__scopeTooltip),a=(0,o.useRef)(null),u=(0,l.e)(t,a),[c,s]=(0,o.useState)(null),{trigger:f,onClose:d}=n,p=a.current,{onPointerInTransitChange:h}=i,g=(0,o.useCallback)(()=>{s(null),h(!1)},[h]),m=(0,o.useCallback)((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());s(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t,n=5){let r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),h(!0)},[h]);return(0,o.useEffect)(()=>()=>g(),[g]),(0,o.useEffect)(()=>{if(f&&p){let e=e=>m(e,p),t=e=>m(e,f);return f.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{f.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[f,p,m,g]),(0,o.useEffect)(()=>{if(c){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==f?void 0:f.contains(t))||(null==p?void 0:p.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,u=t[i].x,c=t[i].y;a>r!=c>r&&n<(u-l)*(r-a)/(c-a)+l&&(o=!o)}return o}(n,c);r?g():o&&(g(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[f,p,c,d,g]),(0,o.createElement)(H,(0,r.Z)({},e,{ref:u}))}),[S,F]=v(C,{isInside:!1}),H=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,children:i,"aria-label":l,onEscapeKeyDown:a,onPointerDownOutside:c,...f}=e,d=P(k,n),p=w(n),{onClose:g}=d;return(0,o.useEffect)(()=>(document.addEventListener(x,g),()=>document.removeEventListener(x,g)),[g]),(0,o.useEffect)(()=>{if(d.trigger){let e=e=>{let t=e.target;null!=t&&t.contains(d.trigger)&&g()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,g]),(0,o.createElement)(u.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:g},(0,o.createElement)(s.VY,(0,r.Z)({"data-state":d.stateAttribute},p,f,{ref:t,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,o.createElement)(h.A4,null,i),(0,o.createElement)(S,{scope:n,isInside:!0},(0,o.createElement)(m.f,{id:d.contentId,role:"tooltip"},l||i))))}),I=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,...i}=e,l=w(n);return F("TooltipArrow",n).isInside?null:(0,o.createElement)(s.Eh,(0,r.Z)({},l,i,{ref:t}))}),W=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:l}=e,[a,u]=(0,o.useState)(!0),c=(0,o.useRef)(!1),s=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let e=s.current;return()=>window.clearTimeout(e)},[]),(0,o.createElement)(b,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:(0,o.useCallback)(()=>{window.clearTimeout(s.current),u(!1)},[]),onClose:(0,o.useCallback)(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:(0,o.useCallback)(e=>{c.current=e},[]),disableHoverableContent:i},l)},Z=e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:u}=e,f=E(C,e.__scopeTooltip),d=w(t),[p,h]=(0,o.useState)(null),m=(0,c.M)(),v=(0,o.useRef)(0),y=null!=a?a:f.disableHoverableContent,b=null!=u?u:f.delayDuration,P=(0,o.useRef)(!1),[T=!1,A]=(0,g.T)({prop:r,defaultProp:i,onChange:e=>{e?(f.onOpen(),document.dispatchEvent(new CustomEvent(x))):f.onClose(),null==l||l(e)}}),O=(0,o.useMemo)(()=>T?P.current?"delayed-open":"instant-open":"closed",[T]),_=(0,o.useCallback)(()=>{window.clearTimeout(v.current),P.current=!1,A(!0)},[A]),D=(0,o.useCallback)(()=>{window.clearTimeout(v.current),A(!1)},[A]),k=(0,o.useCallback)(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(()=>{P.current=!0,A(!0)},b)},[b,A]);return(0,o.useEffect)(()=>()=>window.clearTimeout(v.current),[]),(0,o.createElement)(s.fC,d,(0,o.createElement)(R,{scope:t,contentId:m,open:T,stateAttribute:O,trigger:p,onTriggerChange:h,onTriggerEnter:(0,o.useCallback)(()=>{f.isOpenDelayed?k():_()},[f.isOpenDelayed,k,_]),onTriggerLeave:(0,o.useCallback)(()=>{y?D():window.clearTimeout(v.current)},[D,y]),onOpen:_,onClose:D,disableHoverableContent:y},n))},V=A,z=e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:i}=e,l=P(O,t);return(0,o.createElement)(_,{scope:t,forceMount:n},(0,o.createElement)(d.z,{present:n||l.open},(0,o.createElement)(f.h,{asChild:!0,container:i},r)))},B=L,$=I},10988:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(52983),o=n(24577);function i(e){let[t,n]=(0,r.useState)(void 0);return(0,o.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);