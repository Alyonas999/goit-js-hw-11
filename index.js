import{S as u,a as i,i as d}from"./assets/vendor-B3Lscd_h.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f=new u(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".gallery");function p(t){const o=t.map(({webformatURL:a,largeImageURL:s,tags:e,likes:r,views:n,comments:c,downloads:l})=>`
        <li class="gallery-item">
          <a href="${s}">
            <img src="${a}" alt="${e}" />
          </a>
          <div class="info">
            <p>Likes: ${r}</p>
            <p>Views: ${n}</p>
            <p>Comments: ${c}</p>
            <p>Downloads: ${l}</p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",o),f.refresh()}function y(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function g(){document.querySelector(".loader").classList.add("hidden")}i.defaults.baseURL="https://pixabay.com/api/";const L="50743656-f34c73b2fc7295c80e7e7c3d4";async function b(t){try{return(await i.get("",{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(o){throw d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o}}const w=document.querySelector(".form");w.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget.elements["search-text"].value.trim();if(o){y(),h();try{const a=await b(o);if(a.hits.length===0)throw new Error("No images found");p(a.hits)}catch(a){console.error(a)}finally{g()}}});
//# sourceMappingURL=index.js.map
