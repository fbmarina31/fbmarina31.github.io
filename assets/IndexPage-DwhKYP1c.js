import{S as le,m as R,U as V,V as U,B as ue,n as Q,q as K,W as Z,X as se,g as X,r as Y,c as m,w as I,h as p,p as ce,Y as de,k as ie,Z as ve,o as re,l as ae,_ as J,$ as fe,d as me,a0 as pe,M as ee,R as ge,O as C,P as D,f as $}from"./index-D5dVDqSG.js";import{c as he,u as ye}from"./use-timeout-BdwbRUfF.js";import{h as H,c as _e,a as xe}from"./render-Dw_vwqGv.js";import{g as be,v as Ce}from"./use-router-link-CagbyCUN.js";import{Q as W}from"./QBtn-C-ruggzQ.js";import{u as Pe,a as qe}from"./use-dark-CEfQG_xe.js";import{Q as we}from"./QPage-Dldghwka.js";const G={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Se=Object.keys(G);G.all=!0;function te(e){const n={};for(const i of Se)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?G:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const ke=["INPUT","TEXTAREA"];function ne(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&ke.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Te(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,a)=>{const u=parseFloat(i);u&&(n[a]=u)}),n}const $e=le({name:"touch-swipe",beforeMount(e,{value:n,arg:i,modifiers:a}){if(a.mouse!==!0&&V.has.touch!==!0)return;const u=a.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Te(i),direction:te(a),noop:ue,mouseStart(r){ne(r,t)&&se(r)&&(Q(t,"temp",[[document,"mousemove","move",`notPassive${u}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(r,!0))},touchStart(r){if(ne(r,t)){const l=r.target;Q(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(r)}},start(r,l){V.is.firefox===!0&&U(e,!0);const d=Z(r);t.event={x:d.left,y:d.top,time:Date.now(),mouse:l===!0,dir:!1}},move(r){if(t.event===void 0)return;if(t.event.dir!==!1){K(r);return}const l=Date.now()-t.event.time;if(l===0)return;const d=Z(r),y=d.left-t.event.x,s=Math.abs(y),g=d.top-t.event.y,f=Math.abs(g);if(t.event.mouse!==!0){if(s<t.sensitivity[1]&&f<t.sensitivity[1]){t.end(r);return}}else if(window.getSelection().toString()!==""){t.end(r);return}else if(s<t.sensitivity[2]&&f<t.sensitivity[2])return;const x=s/l,b=f/l;t.direction.vertical===!0&&s<f&&s<100&&b>t.sensitivity[0]&&(t.event.dir=g<0?"up":"down"),t.direction.horizontal===!0&&s>f&&f<100&&x>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&s<f&&g<0&&s<100&&b>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&s<f&&g>0&&s<100&&b>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&s>f&&y<0&&f<100&&x>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&s>f&&y>0&&f<100&&x>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(K(r),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),he(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(P,50):P()}),t.handler({evt:r,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:s,y:f}})):t.end(r)},end(r){t.event!==void 0&&(R(t,"temp"),V.is.firefox===!0&&U(e,!1),t.styleCleanup?.(!0),r!==void 0&&t.event.dir!==!1&&K(r),t.event=void 0)}};if(e.__qtouchswipe=t,a.mouse===!0){const r=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";Q(t,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}V.has.touch===!0&&Q(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchswipe;i!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&i.end(),i.handler=n.value),i.direction=te(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(R(n,"main"),R(n,"temp"),V.is.firefox===!0&&U(e,!1),n.styleCleanup?.(),delete e.__qtouchswipe)}});function Ie(){let e=Object.create(null);return{getCache:(n,i)=>e[n]===void 0?e[n]=typeof i=="function"?i():i:e[n],setCache(n,i){e[n]=i},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Ae={name:{required:!0},disable:Boolean},oe={setup(e,{slots:n}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},H(n.default))}},Be={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ne=["update:modelValue","beforeTransition","transition"];function Ee(){const{props:e,emit:n,proxy:i}=X(),{getCache:a}=Ie(),{registerTimeout:u}=ye();let t,r;const l=Y(null),d={value:null};function y(o){const c=e.vertical===!0?"up":"left";q((i.$q.lang.rtl===!0?-1:1)*(o.direction===c?1:-1))}const s=m(()=>[[$e,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),g=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),f=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),x=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),k=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),P=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);I(()=>e.modelValue,(o,c)=>{const _=w(o)===!0?N(o):-1;r!==!0&&T(_===-1?0:_<N(c)?-1:1),d.value!==_&&(d.value=_,n("beforeTransition",o,c),u(()=>{n("transition",o,c)},e.transitionDuration))});function A(){q(1)}function F(){q(-1)}function B(o){n("update:modelValue",o)}function w(o){return o!=null&&o!==""}function N(o){return t.findIndex(c=>c.props.name===o&&c.props.disable!==""&&c.props.disable!==!0)}function E(){return t.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function T(o){const c=o!==0&&e.animated===!0&&d.value!==-1?"q-transition--"+(o===-1?g.value:f.value):null;l.value!==c&&(l.value=c)}function q(o,c=d.value){let _=c+o;for(;_!==-1&&_<t.length;){const z=t[_];if(z!==void 0&&z.props.disable!==""&&z.props.disable!==!0){T(o),r=!0,n("update:modelValue",z.props.name),setTimeout(()=>{r=!1});return}_+=o}e.infinite===!0&&t.length!==0&&c!==-1&&c!==t.length&&q(o,o===-1?t.length:-1)}function L(){const o=N(e.modelValue);return d.value!==o&&(d.value=o),!0}function v(){const o=w(e.modelValue)===!0&&L()&&t[d.value];return e.keepAlive===!0?[p(de,k.value,[p(P.value===!0?a(b.value,()=>({...oe,name:b.value})):oe,{key:b.value,style:x.value},()=>o)])]:[p("div",{class:"q-panel scroll",style:x.value,key:b.value,role:"tabpanel"},[o])]}function S(){if(t.length!==0)return e.animated===!0?[p(ce,{name:l.value},v)]:v()}function O(o){return t=be(H(o.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&w(c.props.name)===!0),t.length}function h(){return t}return Object.assign(i,{next:A,previous:F,goTo:B}),{panelIndex:d,panelDirectives:s,updatePanelsList:O,updatePanelIndex:L,getPanelContent:S,getEnabledPanels:E,getPanels:h,isValidPanelName:w,keepAliveProps:k,needsUniqueKeepAliveWrapper:P,goToPanelByOffset:q,goToPanel:B,nextPanel:A,previousPanel:F}}const j=ie({name:"QCarouselSlide",props:{...Ae,imgSrc:String},setup(e,{slots:n}){const i=m(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:i.value},H(n.default))}});let M=0;const Oe={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ve=["update:fullscreen","fullscreen"];function De(){const e=X(),{props:n,emit:i,proxy:a}=e;let u,t,r;const l=Y(!1);Ce(e)===!0&&I(()=>a.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&s()}),I(()=>n.fullscreen,g=>{l.value!==g&&d()}),I(l,g=>{i("update:fullscreen",g),i("fullscreen",g)});function d(){l.value===!0?s():y()}function y(){l.value!==!0&&(l.value=!0,r=a.$el.parentNode,r.replaceChild(t,a.$el),document.body.appendChild(a.$el),M++,M===1&&document.body.classList.add("q-body--fullscreen-mixin"),u={handler:s},J.add(u))}function s(){l.value===!0&&(u!==void 0&&(J.remove(u),u=void 0),r.replaceChild(a.$el,t),l.value=!1,M=Math.max(0,M-1),M===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),a.$el.scrollIntoView!==void 0&&setTimeout(()=>{a.$el.scrollIntoView()})))}return ve(()=>{t=document.createElement("span")}),re(()=>{n.fullscreen===!0&&y()}),ae(s),Object.assign(a,{toggleFullscreen:d,setFullscreen:y,exitFullscreen:s}),{inFullscreen:l,toggleFullscreen:d}}const je=["top","right","bottom","left"],Me=["regular","flat","outline","push","unelevated"],Fe=ie({name:"QCarousel",props:{...Pe,...Be,...Oe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Me.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>je.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ve,...Ne],setup(e,{slots:n}){const{proxy:{$q:i}}=X(),a=qe(e,i);let u=null,t;const{updatePanelsList:r,getPanelContent:l,panelDirectives:d,goToPanel:y,previousPanel:s,nextPanel:g,getEnabledPanels:f,panelIndex:x}=Ee(),{inFullscreen:b}=De(),k=m(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=m(()=>e.vertical===!0?"vertical":"horizontal"),A=m(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),F=m(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(a.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${A.value}`:"")),B=m(()=>{const v=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?v.reverse():v}),w=m(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),N=m(()=>e.navigationActiveIcon||w.value),E=m(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));I(()=>e.modelValue,()=>{e.autoplay&&T()}),I(()=>e.autoplay,v=>{v?T():u!==null&&(clearTimeout(u),u=null)});function T(){const v=fe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,v>=0?g():s()},v)}re(()=>{e.autoplay&&T()}),ae(()=>{u!==null&&clearTimeout(u)});function q(v,S){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${A.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},f().map(S))])}function L(){const v=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:h=>p(W,{key:"nav"+h.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${h.active===!0?"":"in"}active`,...h.btnProps,onClick:h.onClick}),O=t-1;v.push(q("buttons",(h,o)=>{const c=h.props.name,_=x.value===o;return S({index:o,maxIndex:O,name:c,active:_,btnProps:{icon:_===!0?N.value:w.value,size:"sm",...E.value},onClick:()=>{y(c)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(q("thumbnails",O=>{const h=O.props;return p("img",{key:"tmb#"+h.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${h.name===e.modelValue?"":"in"}active`+S,src:h.imgSrc||h["img-src"],onClick:()=>{y(h.name)}})}))}return e.arrows===!0&&x.value>=0&&((e.infinite===!0||x.value>0)&&v.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[p(W,{icon:B.value[0],...E.value,onClick:s})])),(e.infinite===!0||x.value<t-1)&&v.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[p(W,{icon:B.value[1],...E.value,onClick:g})]))),xe(n.control,v)}return()=>(t=r(n),p("div",{class:F.value,style:k.value},[_e("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>d.value)].concat(L())))}}),Le={class:"row justify-center"},ze={class:"q-pa-md"},Qe={class:"q-pa-md q-ma-sm row justify-center"},Ge=me({__name:"IndexPage",setup(e){const n=Y(1);return(i,a)=>(ge(),pe(we,null,{default:ee(()=>[C("div",Le,[C("div",ze,[a[1]||(a[1]=C("div",{class:"text-h2 q-pa-xs text-grey-9 text-center"},[D("Herzlich Willkommen"),C("br"),D(" bei LuMia kreativ ")],-1)),C("div",null,[C("div",Qe,[$(Fe,{animated:"",swipeable:"",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u),arrows:"",navigation:"","control-color":"grey-9",infinite:"",style:{height:"340px",width:"340px"}},{default:ee(()=>[$(j,{name:1,"img-src":"/images_carousel-slide/20250219_200855332_iOS.jpg",fit:"cover"}),$(j,{name:2,"img-src":"/images_carousel-slide/20250219_201012875_iOS.jpg",fit:"cover"}),$(j,{name:3,"img-src":"/images_carousel-slide/20250219_201151406_iOS.jpg",fit:"cover"}),$(j,{name:4,"img-src":"/images_carousel-slide/20250309_112236759_iOS.jpg",fit:"cover"}),$(j,{name:5,"img-src":"/images_carousel-slide/20250309_112304614_iOS.jpg",fit:"cover"})]),_:1},8,["modelValue"])])]),a[2]||(a[2]=C("div",{class:"text-subtitle1 q-pa-xs text-grey-9 text-center"},[D(" Du bist auf der Suche nach einer Kleinigkeit für dich oder zum verschenken? Dann wirst du hoffentlich bei uns fündig."),C("br"),D(" Gerne erstellen und personalisieren wir auch etwas nach deinen Wünschen. "),C("br"),C("br"),D(" Melde Dich gerne bei uns über die oben rechts aufgeführten Kontaktmöglichkeiten.")],-1))])])]),_:1}))}});export{Ge as default};
