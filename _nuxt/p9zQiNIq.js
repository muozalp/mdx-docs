import"./bSoczKoQ.js";import{d as s,c as i,e as c,Y as g,n as d,M as n,a4 as f,a7 as p,V as v,w as o,h as b}from"./SChKN3eq.js";import{_ as m}from"./Nxohrs7j.js";import{r as _}from"./DPQ6eSsm.js";const y=s({__name:"Badge",props:{variant:{},class:{}},setup(a){const e=a;return(t,r)=>(i(),c("div",{class:d(n(f)(n(x)({variant:t.variant}),e.class))},[g(t.$slots,"default")],2))}}),x=p("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}}),C=s({__name:"Badge",props:{type:{default:"default"},to:{},target:{},variant:{default:"default"}},setup(a){const e=a,t={default:"",info:`${e.variant!=="outline"&&"bg-sky-500 hover:bg-sky-400"} ${e.variant==="outline"&&"border-sky-500 text-sky-500"}`,warning:`${e.variant!=="outline"&&"bg-amber-500 hover:bg-amber-400"} ${e.variant==="outline"&&"border-amber-500 text-amber-500"}`,success:`${e.variant!=="outline"&&"bg-green-500 hover:bg-green-400"} ${e.variant==="outline"&&"border-green-500 text-green-500"}`,danger:`${e.variant!=="outline"&&"bg-red-500 hover:bg-red-400"} ${e.variant==="outline"&&"border-red-500 text-red-500"}`};return(r,$)=>{const u=y,l=m;return i(),v(l,{to:r.to,target:r.target,class:"mx-0.5"},{default:o(()=>[b(u,{variant:r.variant,class:d(t[r.type])},{default:o(()=>[_(r.$slots,"default",{unwrap:"p"})]),_:3},8,["variant","class"])]),_:3},8,["to","target"])}}});export{C as default};
