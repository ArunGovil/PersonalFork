import{f as x,i as B,j as $,k as i,o,e as a,l as y,m as k,c as g,w as u,p as C,q as D,s as w,g as _,F as A,r as G,a as m,b as v,t as f,v as N,u as P,_ as V,h,x as z}from"./app.b9f9d470.js";const E=["href"],L=x({props:{to:null},setup(r){const s=r,l=B(()=>typeof s.to=="string"&&s.to.startsWith("http"));return(n,c)=>{const t=$("router-link");return i(l)?(o(),a("a",k({key:0},n.$attrs,{href:r.to,target:"_blank"}),[y(n.$slots,"default")],16,E)):(o(),g(t,C(k({key:1},n.$props)),{default:u(()=>[y(n.$slots,"default")]),_:3},16))}}}),O={key:0,py2:"",op50:""},W={class:"no-underline"},F={class:"title text-lg"},R={key:0,class:"text-xs border border-current rounded px-1 pb-0.2"},S={class:"time opacity-50 text-sm -mt-1"},j={key:0,class:"opacity-50"},q=x({props:{type:null,posts:null},setup(r){const s=r,n=D().getRoutes().filter(t=>t.path.startsWith("/posts")&&t.meta.frontmatter.date).sort((t,p)=>+new Date(p.meta.frontmatter.date)-+new Date(t.meta.frontmatter.date)).filter(t=>!t.path.endsWith(".html")&&t.meta.frontmatter.type===s.type).map(t=>({path:t.path,title:t.meta.frontmatter.title,date:t.meta.frontmatter.date,lang:t.meta.frontmatter.lang,duration:t.meta.frontmatter.duration})),c=B(()=>(s.posts||n).filter(t=>!w.value||t.lang!=="zh"));return(t,p)=>{const d=L;return o(),a("ul",null,[i(c).length?_("",!0):(o(),a("div",O," { nothing here yet } ")),(o(!0),a(A,null,G(i(c),e=>(o(),g(d,{key:e.path,class:"item block font-normal mb-6 mt-2 no-underline",to:e.path},{default:u(()=>[m("li",W,[m("div",F,[v(f(e.title)+" ",1),e.lang==="zh"?(o(),a("sup",R,"\u4E2D\u6587")):_("",!0)]),m("div",S,[v(f(i(N)(e.date))+" ",1),e.duration?(o(),a("span",j,"\xB7 "+f(e.duration),1)):_("",!0)])])]),_:2},1032,["to"]))),128))])}}}),H={class:"prose m-auto"},I={setup(r,{expose:s}){const l={title:"Blog - Arun Govil",display:"Blog",meta:[{property:"og:title",content:"Blog - Arun Govil"}]};return s({frontmatter:l}),P({title:"Blog - Arun Govil",meta:[{property:"og:title",content:"Blog - Arun Govil"}]}),(c,t)=>{const p=z,d=$("ClientOnly"),e=q,b=V;return o(),g(b,{frontmatter:l},{default:u(()=>[m("div",H,[h(d,null,{default:u(()=>[h(p)]),_:1}),h(e)])]),_:1})}}};export{I as default};
