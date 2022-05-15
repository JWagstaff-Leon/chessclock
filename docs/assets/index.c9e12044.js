import{r as O,c as a,a as S,o as h,b as w,d as M,e as k,f,n as d,g as _,t as v,h as C,i as P,j as A}from"./vendor.01b7c8cd.js";const D=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};D();const t=O({minutes:0,seconds:0,white:{time:0,moves:0},black:{time:0,moves:0},whitesTurn:!0});var p=(c,n)=>{for(const[s,e]of n)c[s]=e;return c};const E={name:"App",setup(){return{appState:a(()=>t)}}};function I(c,n,s,e,o,r){const i=S("router-view");return h(),w("main",null,[M(i)])}var j=p(E,[["render",I]]);const H={setup(){const c=a(()=>Math.floor(t.white.time/6e4)),n=a(()=>Math.floor(t.white.time%6e4/1e3)),s=a(()=>Math.floor(t.black.time/6e4)),e=a(()=>Math.floor(t.black.time%6e4/1e3)),o=a(()=>(t.white.time%1e3/1e3).toFixed(3).toString().substring(1)),r=a(()=>(t.black.time%1e3/1e3).toFixed(3).toString().substring(1)),i=k(!1),u=k(!1);let m=null,l=new Date;function x(){if(console.log("switching to white"),t.black.moves++,t.whitesTurn=!0,clearInterval(m),t.black.moves>1){if(console.log("black is past their first move"),t.black.time+=l.valueOf(),l=new Date,t.black.time-=l.valueOf(),t.black.time<=0){t.black.time=0,u.value=!0;return}t.black.time+=t.seconds*1e3}l=new Date,m=setInterval(y,50)}function y(){t.white.moves>0&&!i.value&&!u.value&&(t.white.time+=l.valueOf(),l=new Date,t.white.time-=l.valueOf(),t.white.time<=0&&(t.white.time=0,i.value=!0))}function T(){if(console.log("switching to black"),t.white.moves++,t.whitesTurn=!1,clearInterval(m),t.white.moves>1){if(console.log("white is past their first move"),t.white.time+=l.valueOf(),l=new Date,t.white.time-=l.valueOf(),t.white.time<=0){t.white.time=0,i.value=!0;return}t.white.time+=t.seconds*1e3}l=new Date,m=setInterval(L,50)}function L(){t.black.moves>0&&!i.value&&!u.value&&(t.black.time+=l.valueOf(),l=new Date,t.black.time-=l.valueOf(),t.black.time<=0&&(t.black.time=0,u.value=!0))}return{whiteMinutes:c,whiteSeconds:n,blackMinutes:s,blackSeconds:e,whiteMilliseconds:o,blackMilliseconds:r,whiteTime:a(()=>c.value.toString()+":"+(n.value<10?"0":"")+n.value.toString()),blackTime:a(()=>s.value.toString()+":"+(e.value<10?"0":"")+e.value.toString()),whiteLoss:i,blackLoss:u,whiteTurn:a(()=>t.whitesTurn),switchTurns(){u.value||i.value||(t.whitesTurn?T():x())}}}},N={class:"d-flex flex-column flex-grow-1"};function B(c,n,s,e,o,r){return h(),w("div",N,[f("div",{class:d(["d-flex flex-grow-1 jcc aic clock black-clock",{turn:!e.whiteTurn}]),onClick:n[0]||(n[0]=(...i)=>e.switchTurns&&e.switchTurns(...i))},[f("span",{class:d(["no-select black-time main-clock position-relative",{"black-clock-text":!e.blackLoss,"text-danger":e.blackLoss}])},[_(v(e.blackTime)+" ",1),f("span",{class:d(["no-select mini-clock",{"black-clock-text":!e.blackLoss,"text-danger":e.blackLoss}])},v(e.blackMilliseconds),3)],2)],2),f("div",{class:d(["d-flex flex-grow-1 jcc aic clock white-clock",{turn:e.whiteTurn}]),onClick:n[1]||(n[1]=(...i)=>e.switchTurns&&e.switchTurns(...i))},[f("span",{class:d(["no-select main-clock position-relative",{"white-clock-text":!e.whiteLoss,"text-danger":e.whiteLoss}])},[_(v(e.whiteTime)+" ",1),f("span",{class:d(["no-select mini-clock",{"white-clock-text":!e.whiteLoss,"text-danger":e.whiteLoss}])},v(e.whiteMilliseconds),3)],2)],2)])}var q=p(H,[["render",B],["__scopeId","data-v-6940c38e"]]),R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});function V(c){Object.entries({"./components/Clock.vue":R}).forEach(([s,e])=>{const o=e.name||s.substr(s.lastIndexOf("/")+1).replace(/\.\w+$/,"");c.component(o,e.default)})}const W="modulepreload",b={},F="/",z=function(n,s){return!s||s.length===0?n():Promise.all(s.map(e=>{if(e=`${F}${e}`,e in b)return;b[e]=!0;const o=e.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":W,o||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),o)return new Promise((u,m)=>{i.addEventListener("load",u),i.addEventListener("error",m)})})).then(()=>n())};function G(c){switch(c){case"./pages/HomePage.vue":return z(()=>import("./HomePage.1987619c.js"),["assets/HomePage.1987619c.js","assets/vendor.01b7c8cd.js"]);default:return new Promise(function(n,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+c)))})}}function K(c){return()=>G(`./pages/${c}.vue`)}const U=[{path:"/",name:"Home",component:K("HomePage")}],J=C({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:P(),routes:U}),g=A(j);V(g);g.use(J).mount("#app");export{t as A,p as _};
