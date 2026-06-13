import{o as f}from"./CKEditorCustom.fe6c2ce0.js";import{w as m,i as c,gU as g}from"./entry.a7f8609d.js";var p="[object String]";function a(e){return typeof e=="string"||!m(e)&&c(e)&&g(e)==p}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function E(e,s,n={},r=[]){const i=n&&n.xmlns,o=i?e.createElementNS(i,s):e.createElement(s);for(const t in n)o.setAttribute(t,n[t]);(a(r)||!f(r))&&(r=[r]);for(let t of r)a(t)&&(t=e.createTextNode(t)),o.appendChild(t);return o}export{E as c};
