import{u as d}from"./3hzdiNVf.js";import{d as l,bs as f,H as v,q as p,U as m,ao as g,aG as h,bt as _,L as r}from"./SChKN3eq.js";import{_ as y}from"./Nxohrs7j.js";const q=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=f(i),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>_(n.value));return{navigation:o}},render(i){const t=h(),{navigation:n}=i,o=e=>r(y,{to:e._path},()=>e.title),a=(e,u)=>r("ul",u?{"data-level":u}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,u+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),L=q;export{L as default};
