import{P as le,Q as R,R as V,S as U,y as ue,U as Q,t as W,V as J,W as se,g as Y,r as H,c as m,w as I,h as p,X as ce,Y as de,k as ie,Z as ve,o as ae,m as re,_ as G,$ as fe,d as me,a0 as pe,J as ee,O as ge,L as C,N as D,f as $}from"./index-C-Zuq8KO.js";import{c as he,u as ye,a as _e}from"./use-dark-DTXoO30j.js";import{u as be}from"./use-timeout-JWj__CLU.js";import{h as K,c as xe,a as Ce}from"./render-B7iTVd2s.js";import{g as Pe,v as qe}from"./use-router-link-yTrL94yl.js";import{Q as X}from"./QBtn-Bn87G910.js";import{Q as Se}from"./QPage-CSx9weIk.js";const Z={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},we=Object.keys(Z);Z.all=!0;function te(e){const n={};for(const i of we)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?Z:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const ke=["INPUT","TEXTAREA"];function ne(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&ke.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Te(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,r)=>{const u=parseFloat(i);u&&(n[r]=u)}),n}const $e=le({name:"touch-swipe",beforeMount(e,{value:n,arg:i,modifiers:r}){if(r.mouse!==!0&&V.has.touch!==!0)return;const u=r.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Te(i),direction:te(r),noop:ue,mouseStart(a){ne(a,t)&&se(a)&&(Q(t,"temp",[[document,"mousemove","move",`notPassive${u}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(ne(a,t)){const l=a.target;Q(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,l){V.is.firefox===!0&&U(e,!0);const d=J(a);t.event={x:d.left,y:d.top,time:Date.now(),mouse:l===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){W(a);return}const l=Date.now()-t.event.time;if(l===0)return;const d=J(a),y=d.left-t.event.x,s=Math.abs(y),g=d.top-t.event.y,f=Math.abs(g);if(t.event.mouse!==!0){if(s<t.sensitivity[1]&&f<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(s<t.sensitivity[2]&&f<t.sensitivity[2])return;const b=s/l,x=f/l;t.direction.vertical===!0&&s<f&&s<100&&x>t.sensitivity[0]&&(t.event.dir=g<0?"up":"down"),t.direction.horizontal===!0&&s>f&&f<100&&b>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&s<f&&g<0&&s<100&&x>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&s<f&&g>0&&s<100&&x>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&s>f&&y<0&&f<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&s>f&&y>0&&f<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(W(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),he(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(P,50):P()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:s,y:f}})):t.end(a)},end(a){t.event!==void 0&&(R(t,"temp"),V.is.firefox===!0&&U(e,!1),t.styleCleanup?.(!0),a!==void 0&&t.event.dir!==!1&&W(a),t.event=void 0)}};if(e.__qtouchswipe=t,r.mouse===!0){const a=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";Q(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}V.has.touch===!0&&Q(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchswipe;i!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&i.end(),i.handler=n.value),i.direction=te(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(R(n,"main"),R(n,"temp"),V.is.firefox===!0&&U(e,!1),n.styleCleanup?.(),delete e.__qtouchswipe)}});function Ie(){let e=Object.create(null);return{getCache:(n,i)=>e[n]===void 0?e[n]=typeof i=="function"?i():i:e[n],setCache(n,i){e[n]=i},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Ae={name:{required:!0},disable:Boolean},oe={setup(e,{slots:n}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},K(n.default))}},Be={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ne=["update:modelValue","beforeTransition","transition"];function Ee(){const{props:e,emit:n,proxy:i}=Y(),{getCache:r}=Ie(),{registerTimeout:u}=be();let t,a;const l=H(null),d={value:null};function y(o){const c=e.vertical===!0?"up":"left";q((i.$q.lang.rtl===!0?-1:1)*(o.direction===c?1:-1))}const s=m(()=>[[$e,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),g=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),f=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),b=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),x=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),k=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),P=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);I(()=>e.modelValue,(o,c)=>{const _=S(o)===!0?N(o):-1;a!==!0&&T(_===-1?0:_<N(c)?-1:1),d.value!==_&&(d.value=_,n("beforeTransition",o,c),u(()=>{n("transition",o,c)},e.transitionDuration))});function A(){q(1)}function F(){q(-1)}function B(o){n("update:modelValue",o)}function S(o){return o!=null&&o!==""}function N(o){return t.findIndex(c=>c.props.name===o&&c.props.disable!==""&&c.props.disable!==!0)}function E(){return t.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function T(o){const c=o!==0&&e.animated===!0&&d.value!==-1?"q-transition--"+(o===-1?g.value:f.value):null;l.value!==c&&(l.value=c)}function q(o,c=d.value){let _=c+o;for(;_!==-1&&_<t.length;){const z=t[_];if(z!==void 0&&z.props.disable!==""&&z.props.disable!==!0){T(o),a=!0,n("update:modelValue",z.props.name),setTimeout(()=>{a=!1});return}_+=o}e.infinite===!0&&t.length!==0&&c!==-1&&c!==t.length&&q(o,o===-1?t.length:-1)}function M(){const o=N(e.modelValue);return d.value!==o&&(d.value=o),!0}function v(){const o=S(e.modelValue)===!0&&M()&&t[d.value];return e.keepAlive===!0?[p(de,k.value,[p(P.value===!0?r(x.value,()=>({...oe,name:x.value})):oe,{key:x.value,style:b.value},()=>o)])]:[p("div",{class:"q-panel scroll",style:b.value,key:x.value,role:"tabpanel"},[o])]}function w(){if(t.length!==0)return e.animated===!0?[p(ce,{name:l.value},v)]:v()}function O(o){return t=Pe(K(o.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&S(c.props.name)===!0),t.length}function h(){return t}return Object.assign(i,{next:A,previous:F,goTo:B}),{panelIndex:d,panelDirectives:s,updatePanelsList:O,updatePanelIndex:M,getPanelContent:w,getEnabledPanels:E,getPanels:h,isValidPanelName:S,keepAliveProps:k,needsUniqueKeepAliveWrapper:P,goToPanelByOffset:q,goToPanel:B,nextPanel:A,previousPanel:F}}const L=ie({name:"QCarouselSlide",props:{...Ae,imgSrc:String},setup(e,{slots:n}){const i=m(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:i.value},K(n.default))}});let j=0;const Oe={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ve=["update:fullscreen","fullscreen"];function De(){const e=Y(),{props:n,emit:i,proxy:r}=e;let u,t,a;const l=H(!1);qe(e)===!0&&I(()=>r.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&s()}),I(()=>n.fullscreen,g=>{l.value!==g&&d()}),I(l,g=>{i("update:fullscreen",g),i("fullscreen",g)});function d(){l.value===!0?s():y()}function y(){l.value!==!0&&(l.value=!0,a=r.$el.parentNode,a.replaceChild(t,r.$el),document.body.appendChild(r.$el),j++,j===1&&document.body.classList.add("q-body--fullscreen-mixin"),u={handler:s},G.add(u))}function s(){l.value===!0&&(u!==void 0&&(G.remove(u),u=void 0),a.replaceChild(r.$el,t),l.value=!1,j=Math.max(0,j-1),j===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),r.$el.scrollIntoView!==void 0&&setTimeout(()=>{r.$el.scrollIntoView()})))}return ve(()=>{t=document.createElement("span")}),ae(()=>{n.fullscreen===!0&&y()}),re(s),Object.assign(r,{toggleFullscreen:d,setFullscreen:y,exitFullscreen:s}),{inFullscreen:l,toggleFullscreen:d}}const Le=["top","right","bottom","left"],je=["regular","flat","outline","push","unelevated"],Fe=ie({name:"QCarousel",props:{...ye,...Be,...Oe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>je.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Le.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ve,...Ne],setup(e,{slots:n}){const{proxy:{$q:i}}=Y(),r=_e(e,i);let u=null,t;const{updatePanelsList:a,getPanelContent:l,panelDirectives:d,goToPanel:y,previousPanel:s,nextPanel:g,getEnabledPanels:f,panelIndex:b}=Ee(),{inFullscreen:x}=De(),k=m(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=m(()=>e.vertical===!0?"vertical":"horizontal"),A=m(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),F=m(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+(r.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${A.value}`:"")),B=m(()=>{const v=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?v.reverse():v}),S=m(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),N=m(()=>e.navigationActiveIcon||S.value),E=m(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));I(()=>e.modelValue,()=>{e.autoplay&&T()}),I(()=>e.autoplay,v=>{v?T():u!==null&&(clearTimeout(u),u=null)});function T(){const v=fe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,v>=0?g():s()},v)}ae(()=>{e.autoplay&&T()}),re(()=>{u!==null&&clearTimeout(u)});function q(v,w){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${A.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},f().map(w))])}function M(){const v=[];if(e.navigation===!0){const w=n["navigation-icon"]!==void 0?n["navigation-icon"]:h=>p(X,{key:"nav"+h.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${h.active===!0?"":"in"}active`,...h.btnProps,onClick:h.onClick}),O=t-1;v.push(q("buttons",(h,o)=>{const c=h.props.name,_=b.value===o;return w({index:o,maxIndex:O,name:c,active:_,btnProps:{icon:_===!0?N.value:S.value,size:"sm",...E.value},onClick:()=>{y(c)}})}))}else if(e.thumbnails===!0){const w=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(q("thumbnails",O=>{const h=O.props;return p("img",{key:"tmb#"+h.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${h.name===e.modelValue?"":"in"}active`+w,src:h.imgSrc||h["img-src"],onClick:()=>{y(h.name)}})}))}return e.arrows===!0&&b.value>=0&&((e.infinite===!0||b.value>0)&&v.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[p(X,{icon:B.value[0],...E.value,onClick:s})])),(e.infinite===!0||b.value<t-1)&&v.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[p(X,{icon:B.value[1],...E.value,onClick:g})]))),Ce(n.control,v)}return()=>(t=a(n),p("div",{class:F.value,style:k.value},[xe("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>d.value)].concat(M())))}}),Me={class:"q-pa-md q-ma-sm"},He=me({__name:"IndexPage",setup(e){const n=H(1);return(i,r)=>(ge(),pe(Se,null,{default:ee(()=>[r[1]||(r[1]=C("div",{class:"row justify-center"},[C("div",{class:"q-pa-md"},[C("div",{class:"text-h2 q-pa-xs text-grey-9 text-center"},[D("Herzlich"),C("br"),D("Willkommen"),C("br"),D(" bei LuMia kreativ ")]),C("div",{class:"text-subtitle1 q-pa-xs text-grey-9 text-center"},[D("Wir erstellen mit 🤍 handgemachtes"),C("br"),D(" für dein Zuhause, dein Event oder deine Liebsten.")])]),C("div",null,[C("img",{src:"public/logo/logo_mit_Beschreibung.png",class:"q-mt-md q-pb-none",style:{height:"250px"}})])],-1)),C("div",Me,[$(Fe,{animated:"",modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=u=>n.value=u),arrows:"",navigation:"",infinite:"",style:{height:"300px",width:"100%"}},{default:ee(()=>[$(L,{name:1,"img-src":"public/images_carousel-slide/20250219_200855332_iOS.jpg",fit:"cointain"}),$(L,{name:2,"img-src":"public/images_carousel-slide/20250219_201012875_iOS.jpg"}),$(L,{name:3,"img-src":"public/images_carousel-slide/20250219_201151406_iOS.jpg"}),$(L,{name:4,"img-src":"public/images_carousel-slide/20250309_112236759_iOS.jpg"}),$(L,{name:5,"img-src":"public/images_carousel-slide/20250309_112304614_iOS.jpg"})]),_:1},8,["modelValue"])])]),_:1}))}});export{He as default};
