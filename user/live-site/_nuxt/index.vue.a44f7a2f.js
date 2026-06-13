import{_ as y}from"./client-only.0dd8160e.js";import{z as g,dN as C,N as F,H as o,X as b,K as z,O as p,aS as i,U as a,L as d,e_ as u,P as n,I as c}from"./entry.a7f8609d.js";import{_ as B}from"./icon-saved-blue.900acc1e.js";import{_ as O}from"./icon-save-white.9525c528.js";import{_ as T}from"./icon-save-gray.f097782f.js";const R=g({__name:"index",props:{favoriteType:{},isFavorite:{type:Boolean},isClass:{},size:{}},emits:["un-login","favorite","un-favorite"],setup(f,{emit:v}){const _=f,s=v,t=C("auth.session-token").value,r=()=>{s(t?"favorite":"un-login")},k=()=>{t?_.isFavorite?m():r():s("un-login")},m=()=>{s(t?"un-favorite":"un-login")};return(e,A)=>{const h=y,l=F("lazy-load");return o(),b(h,null,{default:z(()=>[p("div",{onClick:i(k,["stop"])},[p("section",{class:a(`flex
      justify-center
      items-center
      w-10
      h-10
      rounded-full
      border
      border-solid
      cursor-pointer
      ${e.isClass}
      ${e.favoriteType!==d(u).FAVORITE_BLOG?e.isFavorite?"border-secondary bg-secondary":"border-color-message bg-color-message":"bg-black/[.8]"}
      `)},[e.isFavorite?n((o(),c("img",{key:0,"data-src":B,class:a({"h-[15px]":e.size==="small"}),alt:"",onClick:i(m,["stop"])},null,2)),[[l]]):!e.isFavorite&&e.favoriteType===d(u).FAVORITE_BLOG?n((o(),c("img",{key:1,"data-src":O,class:a({"h-[15px]":e.size==="small"}),alt:"",onClick:i(r,["stop"])},null,2)),[[l]]):n((o(),c("img",{key:2,"data-src":T,class:a({"h-[15px]":e.size==="small"}),alt:"",onClick:i(r,["stop"])},null,2)),[[l]])],2)])]),_:1})}}});export{R as _};
