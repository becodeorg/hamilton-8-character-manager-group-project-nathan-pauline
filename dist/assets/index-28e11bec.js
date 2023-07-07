(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function u(r,t){return fetch("https://character-database.becode.xyz/characters/"+r,t).then(o=>console.log(o))}function p(){return fetch("https://character-database.becode.xyz/characters").then(r=>r.json())}p().then(r=>h(r));function h(r){for(let t of r){let o=document.createElement("a");o.className="card",o.href="../pages/character.html?id="+t.id;let c=new Image;c.src="data:image/png;base64,"+t.image,o.appendChild(c),c.style.borderRadius="5px",c.style.width="100%";let e=document.createElement("p");e.innerText=t.name,e.className="nameBlock",document.getElementById("characterList").append(o);let l=document.createElement("p");l.innerText=t.shortDescription,l.className="shortDescriptionBloc";let s=document.createElement("a");s.className="fa-regular fa-pen-to-square",s.style.color="#bdd283",s.href="../pages/modifyCharacter.html?id="+t.id,s.id="buttonModifying";let i=document.createElement("i");i.className="fa-regular fa-trash-can",i.style.color="#fdb068",i.addEventListener("click",()=>{y(t.id)}),o.append(e,l,s,i)}}async function y(r){let t=document.getElementsByClassName("card");for(let e of t)e.removeAttribute("href");await window.confirm("Are you sure you want to delete this kind person?")&&u(r,{method:"DELETE"}).then(e=>console.log(e)).then(()=>window.location.replace("../index.html")).catch(e=>{console.log(e)})}const a=document.querySelector(".cardPhp");a.addEventListener("mousemove",r=>{let t=a.clientWidth,o=a.clientHeight,c=a.getBoundingClientRect(),e=(r.clientX-c.width)/t,n=(r.clientY-c.height)/o,l=-(e-.5)*26,s=(n-.5)*26,i=40+20*e,m=40+20*n;document.documentElement.style.setProperty("--xPhp",100*e+"%"),document.documentElement.style.setProperty("--yPhp",100*n+"%"),document.documentElement.style.setProperty("--bgPhp-x",i+"%"),document.documentElement.style.setProperty("--bgPhp-y",m+"%"),document.documentElement.style.setProperty("--rPhp-x",l+"deg"),document.documentElement.style.setProperty("--rPhp-y",s+"deg")});const d=document.querySelector(".cardShib");d.addEventListener("mousemove",r=>{let t=d.clientWidth,o=d.clientHeight,c=d.getBoundingClientRect(),e=(r.clientX-c.width)/t,n=(r.clientY-c.height)/o,l=-(e-.5)*26,s=(n-.5)*26,i=40+20*e,m=40+20*n;document.documentElement.style.setProperty("--xShib",100*e+"%"),document.documentElement.style.setProperty("--yShib",100*n+"%"),document.documentElement.style.setProperty("--bgShib-x",i+"%"),document.documentElement.style.setProperty("--bgShib-y",m+"%"),document.documentElement.style.setProperty("--rShib-x",l+"deg"),document.documentElement.style.setProperty("--rShib-y",s+"deg")});let f=document.getElementById("searchButton");f.addEventListener("click",()=>{let r=document.getElementById("simple-search");document.getElementById("characterList").innerHTML="",fetch("https://character-database.becode.xyz/characters?name="+r.value).then(t=>t.json()).then(t=>h(t)).catch(t=>{console.log(t)})});