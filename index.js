import{S as m,a as l,i as c}from"./assets/vendor-B3Lscd_h.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f=new m(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function y(r){const o=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:d,downloads:p})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${s}" alt="${e}" />
          </a>
          <div class="info">
            <p>Likes: <span>${t}</span></p>
            <p>Views: <span>${a}</span></p>
            <p>Comments: <span>${d}</span></p>
            <p>Downloads: <span>${p}</span></p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",o),f.refresh()}function h(){u.innerHTML=""}function g(){const r=document.querySelector(".loader");r.classList.remove("hidden"),requestAnimationFrame(()=>{r.classList.add("show")})}function L(){const r=document.querySelector(".loader");r.classList.remove("show"),setTimeout(()=>{r.classList.add("hidden")},400)}l.defaults.baseURL="https://pixabay.com/api/";const b="50743656-f34c73b2fc7295c80e7e7c3d4";async function w(r){try{return(await l.get("",{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(o){throw c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o}}const i=document.querySelector(".form");i.addEventListener("submit",async r=>{r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(!o){c.error({title:"Warning",message:"Image not found",position:"topRight",backgroundColor:"orange"}),i.reset();return}h(),g();try{const s=await w(o);if(s.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.reset();return}y(s.hits),i.reset()}catch(s){console.error(s)}finally{L()}});
//# sourceMappingURL=index.js.map
