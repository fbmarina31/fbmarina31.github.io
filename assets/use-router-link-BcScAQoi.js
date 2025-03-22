import{c,k as D,g as K,h as f,a9 as V,aa as H,Z as U,Y,p as X,a6 as Z,a1 as G}from"./index-DkvR_QS0.js";import{h as J,a as E}from"./render-iCKS32mu.js";const P={xs:18,sm:24,md:32,lg:38,xl:46},W={size:String};function ee(e,t=P){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const j="0 0 24 24",C=e=>e,O=e=>`ionicons ${e}`,N={"mdi-":e=>`mdi ${e}`,"icon-":C,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":O,"ion-ios":O,"ion-logo":O,"iconfont ":C,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`,"i-":C},F={o_:"-outlined",r_:"-round",s_:"-sharp"},Q={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},te=new RegExp("^("+Object.keys(N).join("|")+")"),ne=new RegExp("^("+Object.keys(F).join("|")+")"),z=new RegExp("^("+Object.keys(Q).join("|")+")"),re=/^[Mm]\s?[-+]?\.?\d/,se=/^img:/,ie=/^svguse:/,ae=/^ion-/,oe=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,ke=D({name:"QIcon",props:{...W,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=K(),n=ee(e),i=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let a,s=e.name;if(s==="none"||!s)return{none:!0};if(r.iconMapFn!==null){const o=r.iconMapFn(s);if(o!==void 0)if(o.icon!==void 0){if(s=o.icon,s==="none"||!s)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(re.test(s)===!0){const[o,p=j]=s.split("|");return{svg:!0,viewBox:p,nodes:o.split("&&").map(y=>{const[m,k,h]=y.split("@@");return f("path",{style:k,d:m,transform:h})})}}if(se.test(s)===!0)return{img:!0,src:s.substring(4)};if(ie.test(s)===!0){const[o,p=j]=s.split("|");return{svguse:!0,src:o.substring(7),viewBox:p}}let g=" ";const d=s.match(te);if(d!==null)a=N[d[1]](s);else if(oe.test(s)===!0)a=s;else if(ae.test(s)===!0)a=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${s.substring(3)}`;else if(z.test(s)===!0){a="notranslate material-symbols";const o=s.match(z);o!==null&&(s=s.substring(6),a+=Q[o[1]]),g=s}else{a="notranslate material-icons";const o=s.match(ne);o!==null&&(s=s.substring(2),a+=F[o[1]]),g=s}return{cls:a,content:g}});return()=>{const a={class:i.value,style:n.value,"aria-hidden":"true"};return u.value.none===!0?f(e.tag,a,J(t.default)):u.value.img===!0?f(e.tag,a,E(t.default,[f("img",{src:u.value.src})])):u.value.svg===!0?f(e.tag,a,E(t.default,[f("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?f(e.tag,a,E(t.default,[f("svg",{viewBox:u.value.viewBox},[f("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(a.class+=" "+u.value.cls),f(e.tag,a,E(t.default,[u.value.content])))}}}),ue={size:{type:[String,Number],default:"1em"},color:String};function le(e){return{cSize:c(()=>e.size in P?`${P[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const xe=D({name:"QSpinner",props:{...ue,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=le(e);return()=>f("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[f("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ce(e,t){const r=e.style;for(const n in t)r[n]=t[n]}function $e(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=V(e);if(t)return t.$el||t}function be(e,t){if(e==null||e.contains(t)===!0)return!0;for(let r=e.nextElementSibling;r!==null;r=r.nextElementSibling)if(r.contains(t))return!0;return!1}function fe(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function L(e,t,r,n){r.modifiers.stop===!0&&Z(e);const i=r.modifiers.color;let u=r.modifiers.center;u=u===!0||n===!0;const a=document.createElement("span"),s=document.createElement("span"),g=G(e),{left:d,top:o,width:p,height:y}=t.getBoundingClientRect(),m=Math.sqrt(p*p+y*y),k=m/2,h=`${(p-m)/2}px`,_=u?h:`${g.left-d-k}px`,q=`${(y-m)/2}px`,w=u?q:`${g.top-o-k}px`;s.className="q-ripple__inner",ce(s,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${_},${w},0) scale3d(.2,.2,1)`,opacity:0}),a.className=`q-ripple${i?" text-"+i:""}`,a.setAttribute("dir","ltr"),a.appendChild(s),t.appendChild(a);const S=()=>{a.remove(),clearTimeout(R)};r.abort.push(S);let R=setTimeout(()=>{s.classList.add("q-ripple__inner--enter"),s.style.transform=`translate3d(${h},${q},0) scale3d(1,1,1)`,s.style.opacity=.2,R=setTimeout(()=>{s.classList.remove("q-ripple__inner--enter"),s.classList.add("q-ripple__inner--leave"),s.style.opacity=0,R=setTimeout(()=>{a.remove(),r.abort.splice(r.abort.indexOf(S),1)},275)},250)},50)}function B(e,{modifiers:t,value:r,arg:n}){const i=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}const Se=H({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&L(i,e,n,i.qKeyEvent===!0)},keystart:fe(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&X(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&L(i,e,n,!0)},300)};B(n,t),e.__qripple=n,Y(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&B(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),U(t,"main"),delete e._qripple)}});function Re(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function de(e){return e.appContext.config.globalProperties.$router!==void 0}function _e(e){return e.isUnmounted===!0||e.isDeactivated===!0}function M(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function I(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function pe(e,t){for(const r in t){const n=t[r],i=e[r];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((u,a)=>u!==i[a]))return!1}return!0}function T(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function ve(e,t){return Array.isArray(e)===!0?T(e,t):Array.isArray(t)===!0?T(t,e):e===t}function me(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(ve(e[r],t[r])===!1)return!1;return!0}const ge={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},qe={...ge,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function we({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=K(),{props:n,proxy:i,emit:u}=r,a=de(r),s=c(()=>n.disable!==!0&&n.href!==void 0),g=t===!0?c(()=>a===!0&&n.disable!==!0&&s.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>a===!0&&s.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),d=c(()=>g.value===!0?w(n.to):null),o=c(()=>d.value!==null),p=c(()=>s.value===!0||o.value===!0),y=c(()=>n.type==="a"||p.value===!0?"a":n.tag||e||"div"),m=c(()=>s.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:d.value.href,target:n.target}:{}),k=c(()=>{if(o.value===!1)return-1;const{matched:l}=d.value,{length:v}=l,x=l[v-1];if(x===void 0)return-1;const $=i.$route.matched;if($.length===0)return-1;const b=$.findIndex(I.bind(null,x));if(b!==-1)return b;const A=M(l[v-2]);return v>1&&M(x)===A&&$[$.length-1].path!==A?$.findIndex(I.bind(null,l[v-2])):b}),h=c(()=>o.value===!0&&k.value!==-1&&pe(i.$route.params,d.value.params)),_=c(()=>h.value===!0&&k.value===i.$route.matched.length-1&&me(i.$route.params,d.value.params)),q=c(()=>o.value===!0?_.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":h.value===!0?` ${n.activeClass}`:"":"");function w(l){try{return i.$router.resolve(l)}catch{}return null}function S(l,{returnRouterError:v,to:x=n.to,replace:$=n.replace}={}){if(n.disable===!0)return l.preventDefault(),Promise.resolve(!1);if(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.button!==void 0&&l.button!==0||n.target==="_blank")return Promise.resolve(!1);l.preventDefault();const b=i.$router[$===!0?"replace":"push"](x);return v===!0?b:b.then(()=>{}).catch(()=>{})}function R(l){if(o.value===!0){const v=x=>S(l,x);u("click",l,v),l.defaultPrevented!==!0&&v()}else u("click",l)}return{hasRouterLink:o,hasHrefLink:s,hasLink:p,linkTag:y,resolvedLink:d,linkIsActive:h,linkIsExactActive:_,linkClass:q,linkAttrs:m,getLink:w,navigateToRouterLink:S,navigateOnClick:R}}export{ke as Q,Se as R,we as a,xe as b,W as c,ee as d,be as e,_e as f,Re as g,ce as h,$e as i,ge as j,qe as u,de as v};
