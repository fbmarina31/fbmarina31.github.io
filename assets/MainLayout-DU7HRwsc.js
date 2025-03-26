import{k as E,h as w,c,l as V,g as N,r as C,m as j,a as re,o as X,n as tt,p as nt,q as lt,t as $e,u as at,v as Ae,w as p,x as me,y as Me,z as Pe,A as ge,B as ot,C as rt,D as ye,E as ie,G as it,H as ne,b as ut,I as st,f as B,J as M,K as ct,L as le,M as ve,N as dt,O as ft}from"./index-C_yduCbt.js";import{Q as ze}from"./QTooltip-BSnj5YOE.js";import{Q as pe}from"./QBtn-Dp5MXj6j.js";import{h as ue,a as we,b as vt}from"./render-D1Tay6zW.js";import{R as ht,Q as oe,u as bt,a as gt}from"./use-router-link-BraTtNG_.js";import{u as mt,r as yt}from"./rtl-CF_aSVsN.js";import{u as he,s as wt,g as Tt,a as qt,b as xt,c as be}from"./position-engine-BgELupyf.js";import{u as Be}from"./use-timeout-Ci-cBdy1.js";import{_ as Ct}from"./_plugin-vue_export-helper-DlAUqK2U.js";const St=E({name:"QSpace",setup(){const e=w("div",{class:"q-space"});return()=>e}}),Qe=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:f}){const o=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:o.value,role:"toolbar"},ue(f.default))}});let Lt=0;const _t=["click","keydown"],Rt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Lt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function kt(e,f,o,l){const t=re(Ae,V);if(t===V)return console.error("QTab/QRouteTab component needs to be child of QTabs"),V;const{proxy:v}=N(),m=C(null),R=C(null),g=C(null),y=c(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),k=c(()=>t.currentModel.value===e.name),L=c(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(k.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),z=c(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),h=c(()=>e.disable===!0||t.hasFocus.value===!0||k.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function S(i,s){if(s!==!0&&i?.qAvoidFocus!==!0&&m.value?.focus(),e.disable===!0){l?.hasRouterLink.value===!0&&$e(i);return}if(l===void 0){t.updateModel({name:e.name}),o("click",i);return}if(l.hasRouterLink.value===!0){const a=(b={})=>{let x;const A=b.to===void 0||at(b.to,e.to)===!0?t.avoidRouteWatcher=mt():null;return l.navigateToRouterLink(i,{...b,returnRouterError:!0}).catch(F=>{x=F}).then(F=>{if(A===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,x===void 0&&(F===void 0||F.message?.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),b.returnRouterError===!0)return x!==void 0?Promise.reject(x):F})};o("click",i,a),i.defaultPrevented!==!0&&a();return}o("click",i)}function _(i){nt(i,[13,32])?S(i,!0):lt(i)!==!0&&i.keyCode>=35&&i.keyCode<=40&&i.altKey!==!0&&i.metaKey!==!0&&t.onKbdNavigate(i.keyCode,v.$el)===!0&&$e(i),o("keydown",i)}function Q(){const i=t.tabProps.value.narrowIndicator,s=[],a=w("div",{ref:g,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&s.push(w(oe,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&s.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&s.push(e.alertIcon!==void 0?w(oe,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),i===!0&&s.push(a);const b=[w("div",{class:"q-focus-helper",tabindex:-1,ref:m}),w("div",{class:z.value},we(f.default,s))];return i===!1&&b.push(a),b}const H={name:c(()=>e.name),rootRef:R,tabIndicatorRef:g,routeData:l};j(()=>{t.unregisterTab(H)}),X(()=>{t.registerTab(H)});function u(i,s){const a={ref:R,class:L.value,tabindex:h.value,role:"tab","aria-selected":k.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:_,...s};return tt(w(i,a,Q()),[[ht,y.value]])}return{renderTab:u,$tabs:t}}const ae=E({name:"QRouteTab",props:{...bt,...Rt},emits:_t,setup(e,{slots:f,emit:o}){const l=gt({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:v}=kt(e,f,o,{exact:c(()=>e.exact),...l});return p(()=>`${e.name} | ${e.exact} | ${(l.resolvedLink.value||{}).href}`,v.verifyRouteModel),()=>t(l.linkTag.value,l.linkAttrs.value)}});function $t(){const e=C(!me.value);return e.value===!1&&X(()=>{e.value=!0}),{isHydrated:e}}const Ve=typeof ResizeObserver<"u",Ie=Ve===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Y=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:f}){let o=null,l,t={width:-1,height:-1};function v(g){g===!0||e.debounce===0||e.debounce==="0"?m():o===null&&(o=setTimeout(m,e.debounce))}function m(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:g,offsetHeight:y}=l;(g!==t.width||y!==t.height)&&(t={width:g,height:y},f("resize",t))}}const{proxy:R}=N();if(R.trigger=v,Ve===!0){let g;const y=k=>{l=R.$el.parentNode,l?(g=new ResizeObserver(v),g.observe(l),m()):k!==!0&&Pe(()=>{y(!0)})};return X(()=>{y()}),j(()=>{o!==null&&clearTimeout(o),g!==void 0&&(g.disconnect!==void 0?g.disconnect():l&&g.unobserve(l))}),Me}else{let g=function(){o!==null&&(clearTimeout(o),o=null),L!==void 0&&(L.removeEventListener!==void 0&&L.removeEventListener("resize",v,ge.passive),L=void 0)},y=function(){g(),l?.contentDocument&&(L=l.contentDocument.defaultView,L.addEventListener("resize",v,ge.passive),m())};const{isHydrated:k}=$t();let L;return X(()=>{Pe(()=>{l=R.$el,l&&y()})}),j(g),()=>{if(k.value===!0)return w("object",{class:"q--avoid-card-border",style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:y})}}}});function Pt(e,f,o){const l=o===!0?["left","right"]:["top","bottom"];return`absolute-${f===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const zt=["left","center","right","justify"],pt=E({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>zt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:f,emit:o}){const{proxy:l}=N(),{$q:t}=l,{registerTick:v}=he(),{registerTick:m}=he(),{registerTick:R}=he(),{registerTimeout:g,removeTimeout:y}=Be(),{registerTimeout:k,removeTimeout:L}=Be(),z=C(null),h=C(null),S=C(e.modelValue),_=C(!1),Q=C(!0),H=C(!1),u=C(!1),i=[],s=C(0),a=C(!1);let b=null,x=null,A;const F=c(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Pt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ee=c(()=>{const n=s.value,r=S.value;for(let d=0;d<n;d++)if(i[d].name.value===r)return!0;return!1}),Fe=c(()=>`q-tabs__content--align-${_.value===!0?"left":u.value===!0?"justify":e.align}`),Oe=c(()=>`q-tabs row no-wrap items-center q-tabs--${_.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),De=c(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Fe.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),J=c(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Z=c(()=>e.vertical!==!0&&t.lang.rtl===!0),se=c(()=>yt===!1&&Z.value===!0);p(Z,U),p(()=>e.modelValue,n=>{ce({name:n,setCurrent:!0,skipEmit:!0})}),p(()=>e.outsideArrows,ee);function ce({name:n,setCurrent:r,skipEmit:d}){S.value!==n&&(d!==!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",n),(r===!0||e["onUpdate:modelValue"]===void 0)&&(We(S.value,n),S.value=n))}function ee(){v(()=>{z.value&&Te({width:z.value.offsetWidth,height:z.value.offsetHeight})})}function Te(n){if(J.value===void 0||h.value===null)return;const r=n[J.value.container],d=Math.min(h.value[J.value.scroll],Array.prototype.reduce.call(h.value.children,(P,q)=>P+(q[J.value.content]||0),0)),$=r>0&&d>r;_.value=$,$===!0&&m(U),u.value=r<parseInt(e.breakpoint,10)}function We(n,r){const d=n!=null&&n!==""?i.find(P=>P.name.value===n):null,$=r!=null&&r!==""?i.find(P=>P.name.value===r):null;if(te===!0)te=!1;else if(d&&$){const P=d.tabIndicatorRef.value,q=$.tabIndicatorRef.value;b!==null&&(clearTimeout(b),b=null),P.style.transition="none",P.style.transform="none",q.style.transition="none",q.style.transform="none";const T=P.getBoundingClientRect(),I=q.getBoundingClientRect();q.style.transform=e.vertical===!0?`translate3d(0,${T.top-I.top}px,0) scale3d(1,${I.height?T.height/I.height:1},1)`:`translate3d(${T.left-I.left}px,0,0) scale3d(${I.width?T.width/I.width:1},1,1)`,R(()=>{b=setTimeout(()=>{b=null,q.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",q.style.transform="none"},70)})}$&&_.value===!0&&K($.rootRef.value)}function K(n){const{left:r,width:d,top:$,height:P}=h.value.getBoundingClientRect(),q=n.getBoundingClientRect();let T=e.vertical===!0?q.top-$:q.left-r;if(T<0){h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(T),U();return}T+=e.vertical===!0?q.height-P:q.width-d,T>0&&(h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(T),U())}function U(){const n=h.value;if(n===null)return;const r=n.getBoundingClientRect(),d=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);Z.value===!0?(Q.value=Math.ceil(d+r.width)<n.scrollWidth-1,H.value=d>0):(Q.value=d>0,H.value=e.vertical===!0?Math.ceil(d+r.height)<n.scrollHeight:Math.ceil(d+r.width)<n.scrollWidth)}function qe(n){x!==null&&clearInterval(x),x=setInterval(()=>{Ke(n)===!0&&D()},5)}function xe(){qe(se.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ce(){qe(se.value===!0?0:Number.MAX_SAFE_INTEGER)}function D(){x!==null&&(clearInterval(x),x=null)}function Ne(n,r){const d=Array.prototype.filter.call(h.value.children,I=>I===r||I.matches&&I.matches(".q-tab.q-focusable")===!0),$=d.length;if($===0)return;if(n===36)return K(d[0]),d[0].focus(),!0;if(n===35)return K(d[$-1]),d[$-1].focus(),!0;const P=n===(e.vertical===!0?38:37),q=n===(e.vertical===!0?40:39),T=P===!0?-1:q===!0?1:void 0;if(T!==void 0){const I=Z.value===!0?-1:1,O=d.indexOf(r)+T*I;return O>=0&&O<$&&(K(d[O]),d[O].focus({preventScroll:!0})),!0}}const je=c(()=>se.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,r)=>{n.scrollLeft=-r}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,r)=>{n.scrollTop=r}}:{get:n=>n.scrollLeft,set:(n,r)=>{n.scrollLeft=r}});function Ke(n){const r=h.value,{get:d,set:$}=je.value;let P=!1,q=d(r);const T=n<q?-1:1;return q+=T*5,q<0?(P=!0,q=0):(T===-1&&q<=n||T===1&&q>=n)&&(P=!0,q=n),$(r,q),U(),P}function Se(n,r){for(const d in n)if(n[d]!==r[d])return!1;return!0}function Ue(){let n=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const d=i.filter(T=>T.routeData?.hasRouterLink.value===!0),{hash:$,query:P}=l.$route,q=Object.keys(P).length;for(const T of d){const I=T.routeData.exact.value===!0;if(T.routeData[I===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:O,query:de,matched:Ze,href:et}=T.routeData.resolvedLink.value,fe=Object.keys(de).length;if(I===!0){if(O!==$||fe!==q||Se(P,de)===!1)continue;n=T.name.value;break}if(O!==""&&O!==$||fe!==0&&Se(de,P)===!1)continue;const W={matchedLen:Ze.length,queryDiff:q-fe,hrefLen:et.length-O.length};if(W.matchedLen>r.matchedLen){n=T.name.value,r=W;continue}else if(W.matchedLen!==r.matchedLen)continue;if(W.queryDiff<r.queryDiff)n=T.name.value,r=W;else if(W.queryDiff!==r.queryDiff)continue;W.hrefLen>r.hrefLen&&(n=T.name.value,r=W)}if(n===null&&i.some(T=>T.routeData===void 0&&T.name.value===S.value)===!0){te=!1;return}ce({name:n,setCurrent:!0})}function Ge(n){if(y(),a.value!==!0&&z.value!==null&&n.target&&typeof n.target.closest=="function"){const r=n.target.closest(".q-tab");r&&z.value.contains(r)===!0&&(a.value=!0,_.value===!0&&K(r))}}function Xe(){g(()=>{a.value=!1},30)}function G(){_e.avoidRouteWatcher===!1?k(Ue):L()}function Le(){if(A===void 0){const n=p(()=>l.$route.fullPath,G);A=()=>{n(),A=void 0}}}function Ye(n){i.push(n),s.value++,ee(),n.routeData===void 0||l.$route===void 0?k(()=>{if(_.value===!0){const r=S.value,d=r!=null&&r!==""?i.find($=>$.name.value===r):null;d&&K(d.rootRef.value)}}):(Le(),n.routeData.hasRouterLink.value===!0&&G())}function Je(n){i.splice(i.indexOf(n),1),s.value--,ee(),A!==void 0&&n.routeData!==void 0&&(i.every(r=>r.routeData===void 0)===!0&&A(),G())}const _e={currentModel:S,tabProps:F,hasFocus:a,hasActiveTab:Ee,registerTab:Ye,unregisterTab:Je,verifyRouteModel:G,updateModel:ce,onKbdNavigate:Ne,avoidRouteWatcher:!1};ye(Ae,_e);function Re(){b!==null&&clearTimeout(b),D(),A?.()}let ke,te;return j(Re),ot(()=>{ke=A!==void 0,Re()}),rt(()=>{ke===!0&&(Le(),te=!0,G()),ee()}),()=>w("div",{ref:z,class:Oe.value,role:"tablist",onFocusin:Ge,onFocusout:Xe},[w(Y,{onResize:Te}),w("div",{ref:h,class:De.value,onScroll:U},ue(f.default)),w(oe,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:xe,onTouchstartPassive:xe,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D}),w(oe,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(H.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D})])}}),Bt=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:o}){const{proxy:{$q:l}}=N(),t=re(ie,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const v=C(parseInt(e.heightHint,10)),m=C(!0),R=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||l.platform.is.ios&&t.isContainer.value===!0),g=c(()=>{if(e.modelValue!==!0)return 0;if(R.value===!0)return m.value===!0?v.value:0;const u=v.value-t.scroll.value.position;return u>0?u:0}),y=c(()=>e.modelValue!==!0||R.value===!0&&m.value!==!0),k=c(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),L=c(()=>"q-header q-layout__section--marginal "+(R.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=c(()=>{const u=t.rows.value.top,i={};return u[0]==="l"&&t.left.space===!0&&(i[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(i[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),i});function h(u,i){t.update("header",u,i)}function S(u,i){u.value!==i&&(u.value=i)}function _({height:u}){S(v,u),h("size",u)}function Q(u){k.value===!0&&S(m,!0),o("focusin",u)}p(()=>e.modelValue,u=>{h("space",u),S(m,!0),t.animate()}),p(g,u=>{h("offset",u)}),p(()=>e.reveal,u=>{u===!1&&S(m,e.modelValue)}),p(m,u=>{t.animate(),o("reveal",u)}),p(t.scroll,u=>{e.reveal===!0&&S(m,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const H={};return t.instances.header=H,e.modelValue===!0&&h("size",v.value),h("space",e.modelValue),h("offset",g.value),j(()=>{t.instances.header===H&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const u=vt(f.default,[]);return e.elevated===!0&&u.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(w(Y,{debounce:0,onResize:_})),w("header",{class:L.value,style:z.value,onFocusin:Q},u)}}}),Qt=E({name:"QPageContainer",setup(e,{slots:f}){const{proxy:{$q:o}}=N(),l=re(ie,V);if(l===V)return console.error("QPageContainer needs to be child of QLayout"),V;ye(it,!0);const t=c(()=>{const v={};return l.header.space===!0&&(v.paddingTop=`${l.header.size}px`),l.right.space===!0&&(v[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(v.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(v[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),v});return()=>w("div",{class:"q-page-container",style:t.value},ue(f.default))}}),It=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:f}){const o=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:o.value},ue(f.default))}}),Ht=E({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:o}){const{proxy:{$q:l}}=N(),t=re(ie,V);if(t===V)return console.error("QFooter needs to be child of QLayout"),V;const v=C(parseInt(e.heightHint,10)),m=C(!0),R=C(me.value===!0||t.isContainer.value===!0?0:window.innerHeight),g=c(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||l.platform.is.ios&&t.isContainer.value===!0),y=c(()=>t.isContainer.value===!0?t.containerHeight.value:R.value),k=c(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return m.value===!0?v.value:0;const a=t.scroll.value.position+y.value+v.value-t.height.value;return a>0?a:0}),L=c(()=>e.modelValue!==!0||g.value===!0&&m.value!==!0),z=c(()=>e.modelValue===!0&&L.value===!0&&e.reveal===!0),h=c(()=>"q-footer q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(L.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(g.value!==!0?" hidden":""):"")),S=c(()=>{const a=t.rows.value.bottom,b={};return a[0]==="l"&&t.left.space===!0&&(b[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(b[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function _(a,b){t.update("footer",a,b)}function Q(a,b){a.value!==b&&(a.value=b)}function H({height:a}){Q(v,a),_("size",a)}function u(){if(e.reveal!==!0)return;const{direction:a,position:b,inflectionPoint:x}=t.scroll.value;Q(m,a==="up"||b-x<100||t.height.value-y.value-b-v.value<300)}function i(a){z.value===!0&&Q(m,!0),o("focusin",a)}p(()=>e.modelValue,a=>{_("space",a),Q(m,!0),t.animate()}),p(k,a=>{_("offset",a)}),p(()=>e.reveal,a=>{a===!1&&Q(m,e.modelValue)}),p(m,a=>{t.animate(),o("reveal",a)}),p([v,t.scroll,t.height],u),p(()=>l.screen.height,a=>{t.isContainer.value!==!0&&Q(R,a)});const s={};return t.instances.footer=s,e.modelValue===!0&&_("size",v.value),_("space",e.modelValue),_("offset",k.value),j(()=>{t.instances.footer===s&&(t.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const a=we(f.default,[w(Y,{debounce:0,onResize:H})]);return e.elevated===!0&&a.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:h.value,style:S.value,onFocusin:i},a)}}}),{passive:He}=ge,At=["both","horizontal","vertical"],Mt=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>At.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:wt},emits:["scroll"],setup(e,{emit:f}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,v;p(()=>e.scrollTarget,()=>{g(),R()});function m(){l?.();const L=Math.max(0,qt(t)),z=xt(t),h={top:L-o.position.top,left:z-o.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const S=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";o.position={top:L,left:z},o.directionChanged=o.direction!==S,o.delta=h,o.directionChanged===!0&&(o.direction=S,o.inflectionPoint=o.position),f("scroll",{...o})}function R(){t=Tt(v,e.scrollTarget),t.addEventListener("scroll",y,He),y(!0)}function g(){t!==void 0&&(t.removeEventListener("scroll",y,He),t=void 0)}function y(L){if(L===!0||e.debounce===0||e.debounce==="0")m();else if(l===null){const[z,h]=e.debounce?[setTimeout(m,e.debounce),clearTimeout]:[requestAnimationFrame(m),cancelAnimationFrame];l=()=>{h(z),l=null}}}const{proxy:k}=N();return p(()=>k.$q.lang.rtl,m),X(()=>{v=k.$el.parentNode,R()}),j(()=>{l?.(),g()}),Object.assign(k,{trigger:y,getPosition:()=>o}),Me}}),Vt=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:o}){const{proxy:{$q:l}}=N(),t=C(null),v=C(l.screen.height),m=C(e.container===!0?0:l.screen.width),R=C({position:0,direction:"down",inflectionPoint:0}),g=C(0),y=C(me.value===!0?0:be()),k=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),L=c(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),z=c(()=>y.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${y.value}px`}:null),h=c(()=>y.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${y.value}px`,width:`calc(100% + ${y.value}px)`}:null);function S(s){if(e.container===!0||document.qScrollPrevented!==!0){const a={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};R.value=a,e.onScroll!==void 0&&o("scroll",a)}}function _(s){const{height:a,width:b}=s;let x=!1;v.value!==a&&(x=!0,v.value=a,e.onScrollHeight!==void 0&&o("scrollHeight",a),H()),m.value!==b&&(x=!0,m.value=b),x===!0&&e.onResize!==void 0&&o("resize",s)}function Q({height:s}){g.value!==s&&(g.value=s,H())}function H(){if(e.container===!0){const s=v.value>g.value?be():0;y.value!==s&&(y.value=s)}}let u=null;const i={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:v,containerHeight:g,scrollbarWidth:y,totalWidth:c(()=>m.value+y.value),rows:c(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:R,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,a,b){i[s][a]=b}};if(ye(ie,i),be()>0){let s=function(){x=null,A.classList.remove("hide-scrollbar")},a=function(){if(x===null){if(A.scrollHeight>l.screen.height)return;A.classList.add("hide-scrollbar")}else clearTimeout(x);x=setTimeout(s,300)},b=function(F){x!==null&&F==="remove"&&(clearTimeout(x),s()),window[`${F}EventListener`]("resize",a)},x=null;const A=document.body;p(()=>e.container!==!0?"add":"remove",b),e.container!==!0&&b("add"),ut(()=>{b("remove")})}return()=>{const s=we(f.default,[w(Mt,{onScroll:S}),w(Y,{onResize:_})]),a=w("div",{class:k.value,style:L.value,ref:e.container===!0?void 0:t,tabindex:-1},s);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:t},[w(Y,{onResize:Q}),w("div",{class:"absolute-full",style:z.value},[w("div",{class:"scroll",style:h.value},[a])])]):a}}}),Et={};function Ft(e,f){const o=dt("router-view");return ft(),st("div",null,[B(Vt,{view:"hHh Lpr lff"},{default:M(()=>[B(Bt,{class:ct(e.$q.dark.isActive?"bg-secondary":"bg-white")},{default:M(()=>[B(Qe,{class:"q-pl-lg q-pb-sm"},{default:M(()=>[f[4]||(f[4]=le("a",{href:"/"},[le("img",{src:"\\logo\\logo_mit_Beschreibung.png",class:"q-mt-md q-pb-none",style:{width:"180px"}})],-1)),B(St),B(pe,{flat:"",dense:"",class:"q-mt-xl q-pl-md",clickable:"",type:"a",href:"mailto:lumiakreativ@gmail.com"},{default:M(()=>[f[1]||(f[1]=le("img",{src:"\\logo\\Mail.png",style:{width:"35px"}},null,-1)),B(ze,null,{default:M(()=>f[0]||(f[0]=[ve("lumiakreativ@gmail.com")])),_:1})]),_:1}),B(pe,{flat:"",dense:"",class:"q-mt-xl q-pl-md",clickable:"",type:"a",href:"https://www.instagram.com/lumia_kreativ/?igshid=YmMyMTA2M2Y%3D",target:"blank"},{default:M(()=>[f[3]||(f[3]=le("img",{src:"\\logo\\Instagram.png",style:{width:"28px"}},null,-1)),B(ze,null,{default:M(()=>f[2]||(f[2]=[ve("Instagram")])),_:1})]),_:1})]),_:1}),B(pt,{align:"left",class:"text-grey-9 bg-grey-3"},{default:M(()=>[B(ae,{to:"/home",label:"Home"}),B(ae,{to:"/products",name:"videos",label:"Produkte"}),B(ae,{to:"/about",name:"articles",label:" Über uns"}),B(ae,{to:"/contact",name:"contact",label:"Kontakt"})]),_:1})]),_:1},8,["class"]),B(Qt,null,{default:M(()=>[B(o)]),_:1}),B(Ht,{class:"bg-grey-3"},{default:M(()=>[B(Qe,null,{default:M(()=>[B(It,{class:"text-caption text-grey-8 text-right"},{default:M(()=>f[5]||(f[5]=[ve("Raaf und Hochstatter GbR I Pfarrgasse 6 I 73460 Hüttlingen")])),_:1})]),_:1})]),_:1})]),_:1})])}const Yt=Ct(Et,[["render",Ft]]);export{Yt as default};
