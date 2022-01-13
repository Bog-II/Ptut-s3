import{j as S,L as g,r as l,u as C,l as R,Q as E,B as w,S as $,R as v,a as D,v as O,b as L}from"./vendor.fab34a1e.js";const T=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function d(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=d(o);fetch(o.href,s)}};T();var A="/assets/Logo.b6d625b5.png";const e=S.exports.jsx,i=S.exports.jsxs,x=()=>e(g,{to:"/",children:e("img",{alt:"logo",src:A,className:"logo"})});const I=()=>{const a=l.exports.useRef(null),t=l.exports.useRef(null),[d,n]=l.exports.useState("");return i("div",{className:"autentification",children:[e("header",{children:i("div",{className:"header",children:[e(x,{}),i("h3",{children:["Don't have an account ?",e(g,{to:"/Registration",children:"Registration"})]})]})}),e("h1",{children:"Authentification"}),i("div",{className:"form-authentification",children:[i("div",{className:"input-field",children:[e("label",{children:"Username ou Email:"}),e("input",{type:"text",ref:t,required:!0})]}),i("div",{className:"input-field",children:[e("label",{children:"Mot-de-passe:"}),e("input",{type:"password",ref:a,required:!0})]}),e("input",{type:"submit",onClick:async()=>{var f,p,m;console.log((f=a==null?void 0:a.current)==null?void 0:f.value);const s=(p=a==null?void 0:a.current)==null?void 0:p.value,r=(m=t==null?void 0:t.current)==null?void 0:m.value,c=(await(await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({emailOrUsername:r,password:s}),mode:"cors"})).json()).token;console.log(c),n(c),localStorage.setItem("jwt_token",c)}})]}),d]})};const P=2e3,M=()=>{const{id:a}=C(),[t,d]=l.exports.useState(),[n,o]=l.exports.useState();l.exports.useEffect(()=>(d(R("http://localhost:3001")),console.log(a),()=>{console.log(t),console.log(a),t&&t.disconnect()}),[]),l.exports.useEffect(()=>{t==null||n==null||(t.once("load-document",(r,u)=>{document.title=u,n.setContents(r),n.enable()}),t.emit("get-document",a,"userId"))},[t,n,a]),l.exports.useEffect(()=>{if(n==null||t==null)return;const r=u=>{console.log("delta : "+u),n.updateContents(u)};return t==null||t.on("receive-changes",r),()=>{t==null||t.off("receive-changes",r)}},[n,t]),l.exports.useEffect(()=>{if(n==null||t==null)return;const r=(u,h,c)=>{c==="user"&&(t==null||t.emit("send-changes",u))};return n==null||n.on("text-change",r),()=>{n==null||n.off("text-change",r)}},[n,t]),l.exports.useEffect(()=>{if(t==null||n==null)return;const r=setInterval(()=>{t.emit("save-document",n.getContents())},P);return()=>{clearInterval(r)}},[n,t]);const s=l.exports.useCallback(r=>{const u=[[{header:[1,2,3,4,5,6,!1]},{font:[1,2,3,4,5,6,7]},{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],[{color:[]},{background:[]},"image","link"],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["blockquote","code-block"],[{script:"sub"},{script:"super"}],[{direction:"rtl"}],["clean"]];if(r==null)return;r.innerHTML="";const h=document.createElement("div");r.append(h);const c=new E(h,{theme:"snow",modules:{toolbar:u}});c.disable(),c.setText("Loading ..."),o(c)},[]);return e("div",{children:e("div",{className:"container",ref:s})})};const H=()=>i("div",{className:"languages-container",children:[e("span",{className:"language-span",children:"FR"}),"|",e("span",{className:"language-span",children:"EN"})]}),k=()=>i("div",{className:"page-header",children:[i("div",{className:"left-header",children:[e(x,{}),e("h1",{className:"document-title",children:"OpenDocs"})]}),e("div",{className:"right-header",children:e(H,{})})]});const q=()=>i("div",{children:[e(k,{}),e(M,{})]});const J=({onClickExecute:a})=>{const t=l.exports.useRef(null),[d,n]=l.exports.useState("");return i("div",{className:"create-document-form",children:[e("input",{type:"text",ref:t,placeholder:"Document name"}),e("button",{onClick:async()=>{var c;const s=(c=t.current)==null?void 0:c.value,r=localStorage.getItem("jwt_token");if(s==""){n("No document name provided");return}if(r==null){n("No JWT token in storage");return}const h=await(await fetch("/api/documents/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",jwt_token:`${r}`},body:JSON.stringify({documentName:s}),mode:"cors"})).json();n(JSON.stringify(h)),a()},children:"Cr\xE9er document"}),d]})};const _=()=>{const[a,t]=l.exports.useState([]),d=localStorage.getItem("jwt_token"),n=async()=>{d!=null&&fetch("/api/users/documents",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",jwt_token:`${d}`},mode:"cors"}).then(o=>{o.json().then(s=>{t(s)})})};return l.exports.useEffect(()=>{n()},[]),d==null?i("div",{className:"home",children:[e("h1",{children:"Home Page"}),e(g,{to:"/registration",children:e("h2",{children:"Registration"})}),e(g,{to:"/authentification",children:e("h2",{children:"Log in"})})]}):i("div",{className:"home",children:[e(k,{}),e("h1",{children:"Home Page"}),e(J,{onClickExecute:n}),i("div",{className:"documents-section",children:[e("h2",{children:"Documents"}),e("ul",{className:"documents",children:a.map(({_id:o,documentName:s,creationDate:r,lastModificationDate:u})=>{const h=`/docs/${o}`,c=new Date(u),f=c.getDate(),p=c.getMonth()+1,m=c.getFullYear(),y=c.getHours(),N=c.getMinutes();return i("li",{className:"document",children:[e("span",{children:e(g,{to:h,target:"_blank",children:s})}),e("span",{children:`${o}`}),e("span",{children:`${y}h${N}  -  ${f}/${p}/${m}`})]},o)})})]})]})};const V=()=>{const a=l.exports.useRef(null),t=l.exports.useRef(null),d=l.exports.useRef(null),n=l.exports.useRef(null),[o,s]=l.exports.useState("");return i("div",{className:"registration",children:[e("header",{children:e("div",{className:"header",children:i("h3",{children:[e(x,{}),"Already have an account ?",e(g,{to:"/Authentification",children:"Authentification"})]})})}),i("div",{className:"registration-form",children:[e("h1",{children:"Registration"}),i("div",{className:"input-field",children:[e("label",{children:"Username :"}),e("input",{type:"text",ref:a,required:!0})]}),i("div",{className:"input-field",children:[e("label",{children:"Adresse mail :"}),e("input",{type:"email",ref:t,required:!0})]}),i("div",{className:"input-field",children:[e("label",{children:"Mot-de-passe :"}),e("input",{type:"password",ref:d,required:!0})]}),i("div",{className:"input-field",children:[e("label",{children:"Confirmation du mot-de-passe :"}),e("input",{type:"password",ref:n,required:!0})]}),e("input",{type:"submit",value:"Envoyer",onClick:async()=>{var y,N,b,j;const u=(y=d==null?void 0:d.current)==null?void 0:y.value,h=(N=n==null?void 0:n.current)==null?void 0:N.value;if(u!=h){s("Password and confirmed password do not match");return}s("");const c=(b=t==null?void 0:t.current)==null?void 0:b.value,f=(j=a==null?void 0:a.current)==null?void 0:j.value,p=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({userName:f,email:c,password:u}),mode:"cors"});console.log(p);const m=await p.json();s(JSON.stringify(m)),console.log(m)}}),o]})]})};function B(){return e(w,{children:e("div",{children:i($,{children:[e(v,{exact:!0,path:"/",children:e(_,{})}),e(v,{exact:!0,path:"/docs/",children:e(D,{to:`/docs/${O()}`})}),e(v,{path:"/docs/:id",children:e(q,{})}),e(v,{path:"/registration",children:e(V,{})}),e(v,{path:"/authentification",children:e(I,{})})]})})})}L.render(e(w,{children:e(B,{})}),document.getElementById("root"));