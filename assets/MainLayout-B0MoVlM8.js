import{k as V,h as y,g as U,r as P,c,w as z,l as K,m as Qe,n as Ee,p as ut,q as Pe,t as I,a as me,o as ae,u as ct,v as dt,x as ft,y as vt,z as Ue,A as ke,B as Ge,C as Me,D as _e,E as ht,G as gt,H as Re,I as be,J as mt,K as fe,b as bt,L as yt,f as H,M as W,N as wt,O as Oe,P as Ie,Q as Tt,R as qt}from"./index-bmLBIpiz.js";import{Q as Se}from"./QBtn-BoHVGwlD.js";import{u as St,s as Xe,v as Ct,a as Ve,b as Ce,c as xt,d as Pt,e as he,f as _t,g as Lt,h as kt,i as Rt,j as pt,r as De,k as $t,l as Ye,p as Fe,m as zt,n as Bt,o as Ht,q as At,t as Qt,w as xe}from"./rtl-R1c5zoRX.js";import{u as Le,c as We}from"./use-timeout-xWfUQMgv.js";import{h as ie,a as pe,b as Et}from"./render-CeALNcgk.js";import{R as Mt,Q as ge,u as Ot,a as It}from"./use-router-link-Dd-lNmBW.js";import{_ as Vt}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Dt=V({name:"QSpace",setup(){const e=y("div",{class:"q-space"});return()=>e}}),Ft=V({name:"QTooltip",inheritAttrs:!1,props:{...Pt,...xt,...Ce,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...Ce.transitionShow,default:"jump-down"},transitionHide:{...Ce.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ve},self:{type:String,default:"top middle",validator:Ve},offset:{type:Array,default:()=>[14,14],validator:Ct},scrollTarget:Xe,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...St],setup(e,{slots:w,emit:l,attrs:o}){let t,d;const v=U(),{proxy:{$q:T}}=v,f=P(null),h=P(!1),k=c(()=>Fe(e.anchor,T.lang.rtl)),L=c(()=>Fe(e.self,T.lang.rtl)),R=c(()=>e.persistent!==!0),{registerTick:g,removeTick:_}=he(),{registerTimeout:C}=Le(),{transitionProps:B,transitionStyle:Q}=_t(e),{localScrollTarget:s,changeScrollEvent:r,unconfigureScrollTarget:u}=Lt(e,ce),{anchorEl:a,canShow:m,anchorEvents:q}=kt({showing:h,configureAnchorEl:ue}),{show:E,hide:O}=Rt({showing:h,canShow:m,handleShow:we,handleHide:Z,hideOnRouteChange:R,processOnMount:!0});Object.assign(q,{delayShow:ne,delayHide:ee});const{showPortal:re,hidePortal:se,renderPortal:ye}=pt(v,f,X,"tooltip");if(T.platform.is.mobile===!0){const A={anchorEl:a,innerRef:f,onClickOutside(F){return O(F),F.target.classList.contains("q-dialog__backdrop")&&Pe(F),!0}},te=c(()=>e.modelValue===null&&e.persistent!==!0&&h.value===!0);z(te,F=>{(F===!0?zt:De)(A)}),K(()=>{De(A)})}function we(A){re(),g(()=>{d=new MutationObserver(()=>N()),d.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),N(),ce()}),t===void 0&&(t=z(()=>T.screen.width+"|"+T.screen.height+"|"+e.self+"|"+e.anchor+"|"+T.lang.rtl,N)),C(()=>{re(!0),l("show",A)},e.transitionDuration)}function Z(A){_(),se(),J(),C(()=>{se(!0),l("hide",A)},e.transitionDuration)}function J(){d!==void 0&&(d.disconnect(),d=void 0),t!==void 0&&(t(),t=void 0),u(),Qe(q,"tooltipTemp")}function N(){$t({targetEl:f.value,offset:e.offset,anchorEl:a.value,anchorOrigin:k.value,selfOrigin:L.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ne(A){if(T.platform.is.mobile===!0){We(),document.body.classList.add("non-selectable");const te=a.value,F=["touchmove","touchcancel","touchend","click"].map(D=>[te,D,"delayHide","passiveCapture"]);Ee(q,"tooltipTemp",F)}C(()=>{E(A)},e.delay)}function ee(A){T.platform.is.mobile===!0&&(Qe(q,"tooltipTemp"),We(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),C(()=>{O(A)},e.hideDelay)}function ue(){if(e.noParentEvent===!0||a.value===null)return;const A=T.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];Ee(q,"anchor",A)}function ce(){if(a.value!==null||e.scrollTarget!==void 0){s.value=Ye(a.value,e.scrollTarget);const A=e.noParentEvent===!0?N:O;r(s.value,A)}}function G(){return h.value===!0?y("div",{...o,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",o.class],style:[o.style,Q.value],role:"tooltip"},ie(w.default)):null}function X(){return y(ut,B.value,G)}return K(J),Object.assign(v.proxy,{updatePosition:N}),ye}}),Ne=V({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:w}){const l=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:l.value,role:"toolbar"},ie(w.default))}});let Wt=0;const Nt=["click","keydown"],jt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Wt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Kt(e,w,l,o){const t=me(Ue,I);if(t===I)return console.error("QTab/QRouteTab component needs to be child of QTabs"),I;const{proxy:d}=U(),v=P(null),T=P(null),f=P(null),h=c(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),k=c(()=>t.currentModel.value===e.name),L=c(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(k.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),R=c(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=c(()=>e.disable===!0||t.hasFocus.value===!0||k.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function _(r,u){if(u!==!0&&r?.qAvoidFocus!==!0&&v.value?.focus(),e.disable===!0){o?.hasRouterLink.value===!0&&Pe(r);return}if(o===void 0){t.updateModel({name:e.name}),l("click",r);return}if(o.hasRouterLink.value===!0){const a=(m={})=>{let q;const E=m.to===void 0||vt(m.to,e.to)===!0?t.avoidRouteWatcher=Bt():null;return o.navigateToRouterLink(r,{...m,returnRouterError:!0}).catch(O=>{q=O}).then(O=>{if(E===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,q===void 0&&(O===void 0||O.message?.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),m.returnRouterError===!0)return q!==void 0?Promise.reject(q):O})};l("click",r,a),r.defaultPrevented!==!0&&a();return}l("click",r)}function C(r){dt(r,[13,32])?_(r,!0):ft(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&t.onKbdNavigate(r.keyCode,d.$el)===!0&&Pe(r),l("keydown",r)}function B(){const r=t.tabProps.value.narrowIndicator,u=[],a=y("div",{ref:f,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&u.push(y(ge,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&u.push(y("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&u.push(e.alertIcon!==void 0?y(ge,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):y("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&u.push(a);const m=[y("div",{class:"q-focus-helper",tabindex:-1,ref:v}),y("div",{class:R.value},pe(w.default,u))];return r===!1&&m.push(a),m}const Q={name:c(()=>e.name),rootRef:T,tabIndicatorRef:f,routeData:o};K(()=>{t.unregisterTab(Q)}),ae(()=>{t.registerTab(Q)});function s(r,u){const a={ref:T,class:L.value,tabindex:g.value,role:"tab","aria-selected":k.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:_,onKeydown:C,...u};return ct(y(r,a,B()),[[Mt,h.value]])}return{renderTab:s,$tabs:t}}const ve=V({name:"QRouteTab",props:{...Ot,...jt},emits:Nt,setup(e,{slots:w,emit:l}){const o=It({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:d}=Kt(e,w,l,{exact:c(()=>e.exact),...o});return z(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,d.verifyRouteModel),()=>t(o.linkTag.value,o.linkAttrs.value)}});function Ut(){const e=P(!ke.value);return e.value===!1&&ae(()=>{e.value=!0}),{isHydrated:e}}const Je=typeof ResizeObserver<"u",je=Je===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},le=V({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:w}){let l=null,o,t={width:-1,height:-1};function d(f){f===!0||e.debounce===0||e.debounce==="0"?v():l===null&&(l=setTimeout(v,e.debounce))}function v(){if(l!==null&&(clearTimeout(l),l=null),o){const{offsetWidth:f,offsetHeight:h}=o;(f!==t.width||h!==t.height)&&(t={width:f,height:h},w("resize",t))}}const{proxy:T}=U();if(T.trigger=d,Je===!0){let f;const h=k=>{o=T.$el.parentNode,o?(f=new ResizeObserver(d),f.observe(o),v()):k!==!0&&Me(()=>{h(!0)})};return ae(()=>{h()}),K(()=>{l!==null&&clearTimeout(l),f!==void 0&&(f.disconnect!==void 0?f.disconnect():o&&f.unobserve(o))}),Ge}else{let f=function(){l!==null&&(clearTimeout(l),l=null),L!==void 0&&(L.removeEventListener!==void 0&&L.removeEventListener("resize",d,_e.passive),L=void 0)},h=function(){f(),o?.contentDocument&&(L=o.contentDocument.defaultView,L.addEventListener("resize",d,_e.passive),v())};const{isHydrated:k}=Ut();let L;return ae(()=>{Me(()=>{o=T.$el,o&&h()})}),K(f),()=>{if(k.value===!0)return y("object",{class:"q--avoid-card-border",style:je.style,tabindex:-1,type:"text/html",data:je.url,"aria-hidden":"true",onLoad:h})}}}});function Gt(e,w,l){const o=l===!0?["left","right"]:["top","bottom"];return`absolute-${w===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const Xt=["left","center","right","justify"],Yt=V({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Xt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:w,emit:l}){const{proxy:o}=U(),{$q:t}=o,{registerTick:d}=he(),{registerTick:v}=he(),{registerTick:T}=he(),{registerTimeout:f,removeTimeout:h}=Le(),{registerTimeout:k,removeTimeout:L}=Le(),R=P(null),g=P(null),_=P(e.modelValue),C=P(!1),B=P(!0),Q=P(!1),s=P(!1),r=[],u=P(0),a=P(!1);let m=null,q=null,E;const O=c(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Gt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),re=c(()=>{const n=u.value,i=_.value;for(let b=0;b<n;b++)if(r[b].name.value===i)return!0;return!1}),se=c(()=>`q-tabs__content--align-${C.value===!0?"left":s.value===!0?"justify":e.align}`),ye=c(()=>`q-tabs row no-wrap items-center q-tabs--${C.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),we=c(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+se.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),Z=c(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),J=c(()=>e.vertical!==!0&&t.lang.rtl===!0),N=c(()=>Ht===!1&&J.value===!0);z(J,X),z(()=>e.modelValue,n=>{ne({name:n,setCurrent:!0,skipEmit:!0})}),z(()=>e.outsideArrows,ee);function ne({name:n,setCurrent:i,skipEmit:b}){_.value!==n&&(b!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",n),(i===!0||e["onUpdate:modelValue"]===void 0)&&(ce(_.value,n),_.value=n))}function ee(){d(()=>{R.value&&ue({width:R.value.offsetWidth,height:R.value.offsetHeight})})}function ue(n){if(Z.value===void 0||g.value===null)return;const i=n[Z.value.container],b=Math.min(g.value[Z.value.scroll],Array.prototype.reduce.call(g.value.children,($,x)=>$+(x[Z.value.content]||0),0)),p=i>0&&b>i;C.value=p,p===!0&&v(X),s.value=i<parseInt(e.breakpoint,10)}function ce(n,i){const b=n!=null&&n!==""?r.find($=>$.name.value===n):null,p=i!=null&&i!==""?r.find($=>$.name.value===i):null;if(de===!0)de=!1;else if(b&&p){const $=b.tabIndicatorRef.value,x=p.tabIndicatorRef.value;m!==null&&(clearTimeout(m),m=null),$.style.transition="none",$.style.transform="none",x.style.transition="none",x.style.transform="none";const S=$.getBoundingClientRect(),M=x.getBoundingClientRect();x.style.transform=e.vertical===!0?`translate3d(0,${S.top-M.top}px,0) scale3d(1,${M.height?S.height/M.height:1},1)`:`translate3d(${S.left-M.left}px,0,0) scale3d(${M.width?S.width/M.width:1},1,1)`,T(()=>{m=setTimeout(()=>{m=null,x.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",x.style.transform="none"},70)})}p&&C.value===!0&&G(p.rootRef.value)}function G(n){const{left:i,width:b,top:p,height:$}=g.value.getBoundingClientRect(),x=n.getBoundingClientRect();let S=e.vertical===!0?x.top-p:x.left-i;if(S<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(S),X();return}S+=e.vertical===!0?x.height-$:x.width-b,S>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(S),X())}function X(){const n=g.value;if(n===null)return;const i=n.getBoundingClientRect(),b=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);J.value===!0?(B.value=Math.ceil(b+i.width)<n.scrollWidth-1,Q.value=b>0):(B.value=b>0,Q.value=e.vertical===!0?Math.ceil(b+i.height)<n.scrollHeight:Math.ceil(b+i.width)<n.scrollWidth)}function A(n){q!==null&&clearInterval(q),q=setInterval(()=>{tt(n)===!0&&D()},5)}function te(){A(N.value===!0?Number.MAX_SAFE_INTEGER:0)}function F(){A(N.value===!0?0:Number.MAX_SAFE_INTEGER)}function D(){q!==null&&(clearInterval(q),q=null)}function Ze(n,i){const b=Array.prototype.filter.call(g.value.children,M=>M===i||M.matches&&M.matches(".q-tab.q-focusable")===!0),p=b.length;if(p===0)return;if(n===36)return G(b[0]),b[0].focus(),!0;if(n===35)return G(b[p-1]),b[p-1].focus(),!0;const $=n===(e.vertical===!0?38:37),x=n===(e.vertical===!0?40:39),S=$===!0?-1:x===!0?1:void 0;if(S!==void 0){const M=J.value===!0?-1:1,j=b.indexOf(i)+S*M;return j>=0&&j<p&&(G(b[j]),b[j].focus({preventScroll:!0})),!0}}const et=c(()=>N.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,i)=>{n.scrollLeft=-i}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,i)=>{n.scrollTop=i}}:{get:n=>n.scrollLeft,set:(n,i)=>{n.scrollLeft=i}});function tt(n){const i=g.value,{get:b,set:p}=et.value;let $=!1,x=b(i);const S=n<x?-1:1;return x+=S*5,x<0?($=!0,x=0):(S===-1&&x<=n||S===1&&x>=n)&&($=!0,x=n),p(i,x),X(),$}function $e(n,i){for(const b in n)if(n[b]!==i[b])return!1;return!0}function nt(){let n=null,i={matchedLen:0,queryDiff:9999,hrefLen:0};const b=r.filter(S=>S.routeData?.hasRouterLink.value===!0),{hash:p,query:$}=o.$route,x=Object.keys($).length;for(const S of b){const M=S.routeData.exact.value===!0;if(S.routeData[M===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:j,query:Te,matched:rt,href:st}=S.routeData.resolvedLink.value,qe=Object.keys(Te).length;if(M===!0){if(j!==p||qe!==x||$e($,Te)===!1)continue;n=S.name.value;break}if(j!==""&&j!==p||qe!==0&&$e(Te,$)===!1)continue;const Y={matchedLen:rt.length,queryDiff:x-qe,hrefLen:st.length-j.length};if(Y.matchedLen>i.matchedLen){n=S.name.value,i=Y;continue}else if(Y.matchedLen!==i.matchedLen)continue;if(Y.queryDiff<i.queryDiff)n=S.name.value,i=Y;else if(Y.queryDiff!==i.queryDiff)continue;Y.hrefLen>i.hrefLen&&(n=S.name.value,i=Y)}if(n===null&&r.some(S=>S.routeData===void 0&&S.name.value===_.value)===!0){de=!1;return}ne({name:n,setCurrent:!0})}function ot(n){if(h(),a.value!==!0&&R.value!==null&&n.target&&typeof n.target.closest=="function"){const i=n.target.closest(".q-tab");i&&R.value.contains(i)===!0&&(a.value=!0,C.value===!0&&G(i))}}function at(){f(()=>{a.value=!1},30)}function oe(){Be.avoidRouteWatcher===!1?k(nt):L()}function ze(){if(E===void 0){const n=z(()=>o.$route.fullPath,oe);E=()=>{n(),E=void 0}}}function lt(n){r.push(n),u.value++,ee(),n.routeData===void 0||o.$route===void 0?k(()=>{if(C.value===!0){const i=_.value,b=i!=null&&i!==""?r.find(p=>p.name.value===i):null;b&&G(b.rootRef.value)}}):(ze(),n.routeData.hasRouterLink.value===!0&&oe())}function it(n){r.splice(r.indexOf(n),1),u.value--,ee(),E!==void 0&&n.routeData!==void 0&&(r.every(i=>i.routeData===void 0)===!0&&E(),oe())}const Be={currentModel:_,tabProps:O,hasFocus:a,hasActiveTab:re,registerTab:lt,unregisterTab:it,verifyRouteModel:oe,updateModel:ne,onKbdNavigate:Ze,avoidRouteWatcher:!1};Re(Ue,Be);function He(){m!==null&&clearTimeout(m),D(),E?.()}let Ae,de;return K(He),ht(()=>{Ae=E!==void 0,He()}),gt(()=>{Ae===!0&&(ze(),de=!0,oe()),ee()}),()=>y("div",{ref:R,class:ye.value,role:"tablist",onFocusin:ot,onFocusout:at},[y(le,{onResize:ue}),y("div",{ref:g,class:we.value,onScroll:X},ie(w.default)),y(ge,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(B.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:te,onTouchstartPassive:te,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D}),y(ge,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:F,onTouchstartPassive:F,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D})])}}),Jt=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:w,emit:l}){const{proxy:{$q:o}}=U(),t=me(be,I);if(t===I)return console.error("QHeader needs to be child of QLayout"),I;const d=P(parseInt(e.heightHint,10)),v=P(!0),T=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||o.platform.is.ios&&t.isContainer.value===!0),f=c(()=>{if(e.modelValue!==!0)return 0;if(T.value===!0)return v.value===!0?d.value:0;const s=d.value-t.scroll.value.position;return s>0?s:0}),h=c(()=>e.modelValue!==!0||T.value===!0&&v.value!==!0),k=c(()=>e.modelValue===!0&&h.value===!0&&e.reveal===!0),L=c(()=>"q-header q-layout__section--marginal "+(T.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(h.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),R=c(()=>{const s=t.rows.value.top,r={};return s[0]==="l"&&t.left.space===!0&&(r[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(r[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),r});function g(s,r){t.update("header",s,r)}function _(s,r){s.value!==r&&(s.value=r)}function C({height:s}){_(d,s),g("size",s)}function B(s){k.value===!0&&_(v,!0),l("focusin",s)}z(()=>e.modelValue,s=>{g("space",s),_(v,!0),t.animate()}),z(f,s=>{g("offset",s)}),z(()=>e.reveal,s=>{s===!1&&_(v,e.modelValue)}),z(v,s=>{t.animate(),l("reveal",s)}),z(t.scroll,s=>{e.reveal===!0&&_(v,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const Q={};return t.instances.header=Q,e.modelValue===!0&&g("size",d.value),g("space",e.modelValue),g("offset",f.value),K(()=>{t.instances.header===Q&&(t.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const s=Et(w.default,[]);return e.elevated===!0&&s.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(y(le,{debounce:0,onResize:C})),y("header",{class:L.value,style:R.value,onFocusin:B},s)}}}),Zt=V({name:"QPageContainer",setup(e,{slots:w}){const{proxy:{$q:l}}=U(),o=me(be,I);if(o===I)return console.error("QPageContainer needs to be child of QLayout"),I;Re(mt,!0);const t=c(()=>{const d={};return o.header.space===!0&&(d.paddingTop=`${o.header.size}px`),o.right.space===!0&&(d[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(d.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(d[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),d});return()=>y("div",{class:"q-page-container",style:t.value},ie(w.default))}}),en=V({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:w}){const l=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:l.value},ie(w.default))}}),tn=V({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:w,emit:l}){const{proxy:{$q:o}}=U(),t=me(be,I);if(t===I)return console.error("QFooter needs to be child of QLayout"),I;const d=P(parseInt(e.heightHint,10)),v=P(!0),T=P(ke.value===!0||t.isContainer.value===!0?0:window.innerHeight),f=c(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||o.platform.is.ios&&t.isContainer.value===!0),h=c(()=>t.isContainer.value===!0?t.containerHeight.value:T.value),k=c(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return v.value===!0?d.value:0;const a=t.scroll.value.position+h.value+d.value-t.height.value;return a>0?a:0}),L=c(()=>e.modelValue!==!0||f.value===!0&&v.value!==!0),R=c(()=>e.modelValue===!0&&L.value===!0&&e.reveal===!0),g=c(()=>"q-footer q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(L.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(f.value!==!0?" hidden":""):"")),_=c(()=>{const a=t.rows.value.bottom,m={};return a[0]==="l"&&t.left.space===!0&&(m[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(m[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),m});function C(a,m){t.update("footer",a,m)}function B(a,m){a.value!==m&&(a.value=m)}function Q({height:a}){B(d,a),C("size",a)}function s(){if(e.reveal!==!0)return;const{direction:a,position:m,inflectionPoint:q}=t.scroll.value;B(v,a==="up"||m-q<100||t.height.value-h.value-m-d.value<300)}function r(a){R.value===!0&&B(v,!0),l("focusin",a)}z(()=>e.modelValue,a=>{C("space",a),B(v,!0),t.animate()}),z(k,a=>{C("offset",a)}),z(()=>e.reveal,a=>{a===!1&&B(v,e.modelValue)}),z(v,a=>{t.animate(),l("reveal",a)}),z([d,t.scroll,t.height],s),z(()=>o.screen.height,a=>{t.isContainer.value!==!0&&B(T,a)});const u={};return t.instances.footer=u,e.modelValue===!0&&C("size",d.value),C("space",e.modelValue),C("offset",k.value),K(()=>{t.instances.footer===u&&(t.instances.footer=void 0,C("size",0),C("offset",0),C("space",!1))}),()=>{const a=pe(w.default,[y(le,{debounce:0,onResize:Q})]);return e.elevated===!0&&a.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),y("footer",{class:g.value,style:_.value,onFocusin:r},a)}}}),{passive:Ke}=_e,nn=["both","horizontal","vertical"],on=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>nn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Xe},emits:["scroll"],setup(e,{emit:w}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,d;z(()=>e.scrollTarget,()=>{f(),T()});function v(){o?.();const L=Math.max(0,At(t)),R=Qt(t),g={top:L-l.position.top,left:R-l.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const _=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";l.position={top:L,left:R},l.directionChanged=l.direction!==_,l.delta=g,l.directionChanged===!0&&(l.direction=_,l.inflectionPoint=l.position),w("scroll",{...l})}function T(){t=Ye(d,e.scrollTarget),t.addEventListener("scroll",h,Ke),h(!0)}function f(){t!==void 0&&(t.removeEventListener("scroll",h,Ke),t=void 0)}function h(L){if(L===!0||e.debounce===0||e.debounce==="0")v();else if(o===null){const[R,g]=e.debounce?[setTimeout(v,e.debounce),clearTimeout]:[requestAnimationFrame(v),cancelAnimationFrame];o=()=>{g(R),o=null}}}const{proxy:k}=U();return z(()=>k.$q.lang.rtl,v),ae(()=>{d=k.$el.parentNode,T()}),K(()=>{o?.(),f()}),Object.assign(k,{trigger:h,getPosition:()=>l}),Ge}}),an=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:w,emit:l}){const{proxy:{$q:o}}=U(),t=P(null),d=P(o.screen.height),v=P(e.container===!0?0:o.screen.width),T=P({position:0,direction:"down",inflectionPoint:0}),f=P(0),h=P(ke.value===!0?0:xe()),k=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),L=c(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),R=c(()=>h.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${h.value}px`}:null),g=c(()=>h.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${h.value}px`,width:`calc(100% + ${h.value}px)`}:null);function _(u){if(e.container===!0||document.qScrollPrevented!==!0){const a={position:u.position.top,direction:u.direction,directionChanged:u.directionChanged,inflectionPoint:u.inflectionPoint.top,delta:u.delta.top};T.value=a,e.onScroll!==void 0&&l("scroll",a)}}function C(u){const{height:a,width:m}=u;let q=!1;d.value!==a&&(q=!0,d.value=a,e.onScrollHeight!==void 0&&l("scrollHeight",a),Q()),v.value!==m&&(q=!0,v.value=m),q===!0&&e.onResize!==void 0&&l("resize",u)}function B({height:u}){f.value!==u&&(f.value=u,Q())}function Q(){if(e.container===!0){const u=d.value>f.value?xe():0;h.value!==u&&(h.value=u)}}let s=null;const r={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:d,containerHeight:f,scrollbarWidth:h,totalWidth:c(()=>v.value+h.value),rows:c(()=>{const u=e.view.toLowerCase().split(" ");return{top:u[0].split(""),middle:u[1].split(""),bottom:u[2].split("")}}),header:fe({size:0,offset:0,space:!1}),right:fe({size:300,offset:0,space:!1}),footer:fe({size:0,offset:0,space:!1}),left:fe({size:300,offset:0,space:!1}),scroll:T,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(u,a,m){r[u][a]=m}};if(Re(be,r),xe()>0){let u=function(){q=null,E.classList.remove("hide-scrollbar")},a=function(){if(q===null){if(E.scrollHeight>o.screen.height)return;E.classList.add("hide-scrollbar")}else clearTimeout(q);q=setTimeout(u,300)},m=function(O){q!==null&&O==="remove"&&(clearTimeout(q),u()),window[`${O}EventListener`]("resize",a)},q=null;const E=document.body;z(()=>e.container!==!0?"add":"remove",m),e.container!==!0&&m("add"),bt(()=>{m("remove")})}return()=>{const u=pe(w.default,[y(on,{onScroll:_}),y(le,{onResize:C})]),a=y("div",{class:k.value,style:L.value,ref:e.container===!0?void 0:t,tabindex:-1},u);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:t},[y(le,{onResize:B}),y("div",{class:"absolute-full",style:R.value},[y("div",{class:"scroll",style:g.value},[a])])]):a}}}),ln={},rn={class:"q-pa-sm"};function sn(e,w){const l=Tt("router-view");return qt(),yt("div",rn,[H(an,{view:"hHh Lpr lff"},{default:W(()=>[H(Jt,{class:wt(e.$q.dark.isActive?"bg-secondary":"bg-white")},{default:W(()=>[H(Ne,{class:"q-pl-lg q-pb-sm"},{default:W(()=>[w[1]||(w[1]=Oe("a",{href:"/"},[Oe("img",{src:"\\logo\\logo_mit_Beschreibung.png",class:"q-mt-md q-pb-none",style:{width:"190px"}})],-1)),H(Dt),H(Se,{flat:"",round:"",dense:"",icon:"language",color:"grey-8",class:"q-mt-xl q-pl-md",clickable:"",type:"a",href:"https://www.instagram.com/lumia_kreativ/?igshid=YmMyMTA2M2Y%3D"}),H(Se,{flat:"",round:"",dense:"",icon:"phone",color:"grey-8",class:"q-mt-xl q-pl-md",clickable:"",type:"a",href:"+491604715319"},{default:W(()=>[H(Ft,null,{default:W(()=>w[0]||(w[0]=[Ie("+49 160 4715319")])),_:1})]),_:1}),H(Se,{flat:"",round:"",dense:"",icon:"mail",color:"grey-8",class:"q-mt-xl q-pl-md",clickable:"",type:"a",href:"mailto:info@example.com"})]),_:1}),H(Yt,{align:"left",class:"text-grey-9 bg-grey-3"},{default:W(()=>[H(ve,{to:"/home",label:"Home"}),H(ve,{to:"/products",name:"videos",label:"Produkte"}),H(ve,{to:"/about",name:"articles",label:" Über uns"}),H(ve,{to:"/contact",name:"contact",label:"Kontakt"})]),_:1})]),_:1},8,["class"]),H(Zt,null,{default:W(()=>[H(l)]),_:1}),H(tn,{class:"bg-grey-3"},{default:W(()=>[H(Ne,null,{default:W(()=>[H(en,{class:"text-caption text-grey-8 text-right"},{default:W(()=>w[2]||(w[2]=[Ie("Raaf und Hochstatter GbR I Pfarrgasse 6 I 73460 Hüttlingen")])),_:1})]),_:1})]),_:1})]),_:1})])}const mn=Vt(ln,[["render",sn]]);export{mn as default};
