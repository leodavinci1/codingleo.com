(this["webpackJsonpcodingleo.com"]=this["webpackJsonpcodingleo.com"]||[]).push([[0],{137:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var o=n(46),c=n(0),r=n(31),s=n(64),a=n(25),i=n(20);var l=n(16),u=n(12),d=n(56),b=n(65),O=n(58),j=n.n(O),E=n(66);function*p(){yield Object(E.a)([])}var m=n(18);const{Types:x,Creators:h}=Object(m.createActions)({toggleLocale:[""]});const g={[x.TOGGLE_LOCALE]:function(e){return{...e,locale:"EN-US"===e.locale?"PT-BR":"EN-US"}}};var _=Object(m.createReducer)({locale:"EN-US"},g),f=n(42);var C=e=>Object(l.b)({locale:_,node:f.b,router:Object(a.b)(e)});const S=Object(u.a)();var T=n(19),v=n(43),w=n(45),y=n(60);const{Home:F}=Object(y.a)((()=>Promise.all([n.e(3),n.e(4)]).then(n.bind(null,175))));var D,N,L=[{path:"/",name:"Home",component:F}],z=n(32);const k=Object(T.b)(D||(D=Object(z.a)(["\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        -webkit-font-smoothing: antialiased;\n    }\n   \n    body {\n      background-color:  ",";\n      color: ",";\n    }\n"])),(e=>{let{theme:{colors:t}}=e;return t.background}),(e=>{let{theme:{colors:t}}=e;return t.textColor})),B=T.d.div(N||(N=Object(z.a)([""])));n(137);var R=n(6);const U=e=>{const{size:t}=Object(w.a)(),n={colors:{...v.a},size:t},{toasty:o}=e;return Object(R.jsxs)(T.a,{theme:n,children:[Object(R.jsx)(o,{}),Object(R.jsx)(k,{}),Object(R.jsx)(c.Suspense,{fallback:Object(R.jsx)("div",{}),children:Object(R.jsx)(B,{children:Object(R.jsxs)(r.d,{children:[L.map((t=>t.component?Object(R.jsx)(r.b,{path:t.path,exact:t.exact,name:t.name,render:()=>Object(R.jsx)(t.component,{...e})},t.name):null)),Object(R.jsx)(r.a,{from:"/",to:"/home"})]})})})]})};U.defaultProps={history:{push:()=>null}};var X=U;n(139);const A=function(e){const t=Object(b.a)();let n=null;n=window.__REDUX_DEVTOOLS_EXTENSION__?Object(l.c)(Object(l.a)(Object(d.a)(S),t),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():{}):Object(l.c)(Object(l.a)(Object(d.a)(S),t));const o=Object(l.d)(C(S),e||{},n);return o.subscribe(j()((()=>{}),1e3)),o.runSaga=t.run,o.runSaga(p),o}((()=>{try{const e=localStorage.getItem("_codingleo-session_");if(null===e)return;const t=JSON.parse(e),n=72e5;if(Date.now()-t.time>n)return;return t.value}catch(e){return}})());var I=()=>Object(R.jsx)(i.a,{store:A,children:Object(R.jsx)(a.a,{history:S,children:Object(R.jsx)(r.d,{children:Object(R.jsx)(r.b,{path:"/",component:e=>Object(R.jsx)(X,{toasty:()=>Object(R.jsx)(s.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),...e})})})})});const P=document.getElementById("app");Object(o.createRoot)(P).render(Object(R.jsx)(I,{}))},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(18);const{Types:c,Creators:r}=Object(o.createActions)({setLine:["data"],setCursorText:["data"],setCodeOpened:["data"]});const s={[c.SET_LINE]:function(e,t){let{data:n}=t;return{...e,line:n}},[c.SET_CURSOR_TEXT]:function(e,t){let{data:n}=t;return{...e,cursorText:n}},[c.SET_CODE_OPENED]:function(e,t){let{data:n}=t;return{...e,isVSCodeOpened:n}}};t.b=Object(o.createReducer)({line:null,cursorText:"",isVSCodeOpened:!1},s)},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={controls:{close:"#FF605C",minimize:"#FFBD44",expand:"#00CA4E"},text:{purple:"#C678DD",red:"#E06C75",green:"#98C379",yellow:"#E5C07B",blue:"#61afef"},background:"#1F2538",textColor:"#E4EAF1",terminal:{header:"rgba(240, 240, 240, 0.7)",body:"rgba(0, 0, 0, 0.7)",bodyColorText:"#FFFFFF",headerColorText:"#000000"},editor:{document:"#2A304B",body:"#232B40",lineBackground:"#313957",lineNumber:{active:"#DCE0F2",neutral:"#515B82"}}}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0);const c=()=>{const{innerWidth:e}=window;return e>=1200?{size:"lg"}:e>=992?{size:"md"}:e>=768?{size:"sm"}:{size:"xs"}};function r(){const[e,t]=Object(o.useState)(c());return Object(o.useEffect)((()=>{const e=()=>{t(c())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}}},[[140,1,2]]]);