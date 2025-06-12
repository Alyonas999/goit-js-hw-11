import{S as f,a as i,i as p}from"./assets/vendor-B3Lscd_h.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m=new f(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery");function y(o){const t=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:s,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${a}" alt="${e}" />
          </a>
          <div class="info">
            <p>Likes: ${r}</p>
            <p>Views: ${s}</p>
            <p>Comments: ${u}</p>
            <p>Downloads: ${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",t),m.refresh()}function h(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}i.defaults.baseURL="https://pixabay.com/api/";const b="50743656-f34c73b2fc7295c80e7e7c3d4";async function w(o){try{return(await i.get("",{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t}}const l=document.querySelector(".form");l.addEventListener("submit",async o=>{o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(t){h(),g();try{const a=await w(t);if(a.hits.length===0)throw new Error("No images found");y(a.hits)}catch(a){console.error(a)}finally{L()}}});l.reset();
//# sourceMappingURL=index.js.map
