import{r as O,c as l,a as S,o as h,b as k,d as M,e as w,f,n as d,g as _,t as v,h as C,i as P,j as A}from"./vendor.01b7c8cd.js";const D=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};D();const t=O({minutes:0,seconds:0,white:{time:0,moves:0},black:{time:0,moves:0},whitesTurn:!0});var p=(c,i)=>{for(const[r,e]of i)c[r]=e;return c};const E={name:"App",setup(){return{appState:l(()=>t)}}};function I(c,i,r,e,o,s){const n=S("router-view");return h(),k("main",null,[M(n)])}var j=p(E,[["render",I]]);const H={setup(){const c=l(()=>Math.floor(t.white.time/6e4)),i=l(()=>Math.floor(t.white.time%6e4/1e3)),r=l(()=>Math.floor(t.black.time/6e4)),e=l(()=>Math.floor(t.black.time%6e4/1e3)),o=l(()=>(t.white.time%1e3/1e3).toFixed(1).toString().substring(1)),s=l(()=>(t.black.time%1e3/1e3).toFixed(1).toString().substring(1)),n=w(!1),u=w(!1);let m=null,a=new Date;function x(){if(t.black.moves++,t.whitesTurn=!0,clearInterval(m),t.black.moves>1){if(t.black.time+=a.valueOf(),a=new Date,t.black.time-=a.valueOf(),t.black.time<=0){t.black.time=0,u.value=!0;return}t.black.time+=t.seconds*1e3}a=new Date,m=setInterval(y,50)}function y(){t.white.moves>0&&!n.value&&!u.value&&(t.white.time+=a.valueOf(),a=new Date,t.white.time-=a.valueOf(),t.white.time<=0&&(t.white.time=0,n.value=!0))}function T(){if(t.white.moves++,t.whitesTurn=!1,clearInterval(m),t.white.moves>1){if(t.white.time+=a.valueOf(),a=new Date,t.white.time-=a.valueOf(),t.white.time<=0){t.white.time=0,n.value=!0;return}t.white.time+=t.seconds*1e3}a=new Date,m=setInterval(L,50)}function L(){t.black.moves>0&&!n.value&&!u.value&&(t.black.time+=a.valueOf(),a=new Date,t.black.time-=a.valueOf(),t.black.time<=0&&(t.black.time=0,u.value=!0))}return{whiteMinutes:c,whiteSeconds:i,blackMinutes:r,blackSeconds:e,whiteMilliseconds:o,blackMilliseconds:s,whiteTime:l(()=>c.value.toString()+":"+(i.value<10?"0":"")+i.value.toString()),blackTime:l(()=>r.value.toString()+":"+(e.value<10?"0":"")+e.value.toString()),whiteLoss:n,blackLoss:u,whiteTurn:l(()=>t.whitesTurn),switchTurns(){u.value||n.value||(t.whitesTurn?T():x())}}}},N={class:"d-flex flex-column flex-grow-1"};function B(c,i,r,e,o,s){return h(),k("div",N,[f("div",{class:d(["d-flex flex-grow-1 jcc aic clock black-clock",{turn:!e.whiteTurn}]),onClick:i[0]||(i[0]=(...n)=>e.switchTurns&&e.switchTurns(...n))},[f("span",{class:d(["no-select black-time main-clock position-relative",{"black-clock-text":!e.blackLoss,"text-danger":e.blackLoss}])},[_(v(e.blackTime)+" ",1),f("span",{class:d(["no-select mini-clock",{"black-clock-text":!e.blackLoss,"text-danger":e.blackLoss}])},v(e.blackMilliseconds),3)],2)],2),f("div",{class:d(["d-flex flex-grow-1 jcc aic clock white-clock",{turn:e.whiteTurn}]),onClick:i[1]||(i[1]=(...n)=>e.switchTurns&&e.switchTurns(...n))},[f("span",{class:d(["no-select main-clock position-relative",{"white-clock-text":!e.whiteLoss,"text-danger":e.whiteLoss}])},[_(v(e.whiteTime)+" ",1),f("span",{class:d(["no-select mini-clock",{"white-clock-text":!e.whiteLoss,"text-danger":e.whiteLoss}])},v(e.whiteMilliseconds),3)],2)],2)])}var q=p(H,[["render",B],["__scopeId","data-v-629042fd"]]),R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});function V(c){Object.entries({"./components/Clock.vue":R}).forEach(([r,e])=>{const o=e.name||r.substr(r.lastIndexOf("/")+1).replace(/\.\w+$/,"");c.component(o,e.default)})}const W="modulepreload",b={},F="/",z=function(i,r){return!r||r.length===0?i():Promise.all(r.map(e=>{if(e=`${F}${e}`,e in b)return;b[e]=!0;const o=e.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":W,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((u,m)=>{n.addEventListener("load",u),n.addEventListener("error",m)})})).then(()=>i())};function G(c){switch(c){case"./pages/HomePage.vue":return z(()=>import("./HomePage.000c7106.js"),["assets/HomePage.000c7106.js","assets/vendor.01b7c8cd.js"]);default:return new Promise(function(i,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+c)))})}}function K(c){return()=>G(`./pages/${c}.vue`)}const U=[{path:"/",name:"Home",component:K("HomePage")}],J=C({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:P(),routes:U}),g=A(j);V(g);g.use(J).mount("#app");export{t as A,p as _};