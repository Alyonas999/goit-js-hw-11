import{S as p,a as l,i as c}from"./assets/vendor-B3Lscd_h.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m=new p(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function y(o){const t=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:s,comments:d,downloads:f})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${a}" alt="${e}" />
          </a>
          <div class="info">
            <p>Likes: ${r}</p>
            <p>Views: ${s}</p>
            <p>Comments: ${d}</p>
            <p>Downloads: ${f}</p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",t),m.refresh()}function g(){u.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}l.defaults.baseURL="https://pixabay.com/api/";const b="50743656-f34c73b2fc7295c80e7e7c3d4";async function S(o){try{return(await l.get("",{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t}}const i=document.querySelector(".form");i.addEventListener("submit",async o=>{o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(!t){c.error({title:"Warning",message:"Image not found",position:"topRight",backgroundColor:"orange"}),i.reset();return}g(),h();try{const a=await S(t);if(a.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.reset();return}y(a.hits),i.reset()}catch(a){console.error(a)}finally{L()}});
//# sourceMappingURL=index.js.map
