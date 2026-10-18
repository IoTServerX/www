const grid=document.querySelector('#driver-grid'),search=document.querySelector('#driver-search');
let filter='All drivers';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderDrivers(){
  const query=search.value.trim().toLowerCase();
  const shown=DRIVERS.filter(d=>(filter==='All drivers'||d.category===filter)&&[d.name,d.protocol,d.category].join(' ').toLowerCase().includes(query));
  grid.innerHTML=shown.map(d=>'<div class="driver-card'+(d.status==='implemented'?'':' is-unavailable')+'" data-status="'+esc(d.status)+'"><span>'+String(d.number).padStart(2,'0')+'</span><span><strong>'+esc(d.name)+'</strong><small>'+esc(d.protocol)+'</small><span class="visually-hidden">'+(d.status==='skeleton'?'Not yet implemented.':d.status==='planned'?'Planned driver.':'Implementation available.')+'</span></span></div>').join('');
  document.querySelector('#driver-count').textContent=shown.length===DRIVERS.length?DRIVERS.length+' drivers':shown.length+' of '+DRIVERS.length+' drivers';
  document.querySelector('#no-drivers').hidden=shown.length>0;
  grid.hidden=shown.length===0;
}
search.addEventListener('input',renderDrivers);
document.querySelector('#driver-filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(el=>{el.classList.toggle('active',el===b);el.setAttribute('aria-pressed',String(el===b));});renderDrivers();});
document.querySelector('#clear-search').addEventListener('click',()=>{search.value='';document.querySelector('[data-filter="All drivers"]').click();search.focus();});
document.addEventListener('keydown',e=>{if(!document.querySelector('#screenshot-lightbox').open&&e.key==='/'&&!/INPUT|TEXTAREA/.test(e.target.tagName)){e.preventDefault();search.focus();}});
document.querySelectorAll('[data-driver-total]').forEach(el=>{el.textContent=DRIVERS.length;});

// Versioned asset names come from the release, never from a version in this site.
// If discovery is unavailable, ordinary anchors still open GitHub's latest release.
function releaseAssetUrl(asset){
  try{
    const url=new URL(asset.browser_download_url);
    return url.protocol==='https:'&&url.hostname==='github.com'&&!url.username&&!url.password&&url.pathname.startsWith('/IoTServerX/releases/releases/download/')&&decodeURIComponent(url.pathname.split('/').pop())===asset.name?url.href:null;
  }catch{return null;}
}
async function resolveLatestDownloads(){
  const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),7000);
  try{
    const response=await fetch('https://api.github.com/repos/IoTServerX/releases/releases/latest',{headers:{Accept:'application/vnd.github+json'},cache:'no-store',signal:controller.signal});
    if(!response.ok)return;
    const release=await response.json();
    if(release.draft||release.prerelease||!Array.isArray(release.assets))return;
    const installer=release.assets.find(a=>typeof a?.name==='string'&&/^IoTServer(?:-[\w.+-]+)?-windows-x64-setup\.exe$/i.test(a.name));
    const portable=release.assets.find(a=>typeof a?.name==='string'&&/^IoTServer(?:-[\w.+-]+)?-windows-x64-portable\.zip$/i.test(a.name));
    if(!installer||!portable)return;
    const installerUrl=releaseAssetUrl(installer),portableUrl=releaseAssetUrl(portable);
    if(!installerUrl||!portableUrl)return;
    document.querySelector('#download-installer').href=installerUrl;
    document.querySelector('#download-portable').href=portableUrl;
  }catch{
    // No stale pinned package or popup: both links keep their latest-release fallback.
  }finally{clearTimeout(timeout);}
}
void resolveLatestDownloads();
const sections=[...document.querySelectorAll('main>section[id]')],navLinks=[...document.querySelectorAll('.section-nav a')];
function updateNav(){let id='platform';for(const s of sections)if(s.getBoundingClientRect().top<150)id=s.id;navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));}
document.addEventListener('scroll',updateNav,{passive:true});renderDrivers();

// Loop muted. Native controls let visitors pause or restart playback.
// With reduced motion or data saving, leave the poster until the visitor plays.
const heroVideo=document.querySelector('#hero-video');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!reducedMotion.matches&&!navigator.connection?.saveData){
  heroVideo.muted=true;
  void heroVideo.play().catch(()=>{}); // Autoplay policies may require manual play.
}
reducedMotion.addEventListener('change',event=>{if(event.matches)heroVideo.pause();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)heroVideo.pause();});

// Native modal dialog keeps focus inside the lightbox and restores it on close.
const lightbox=document.querySelector('#screenshot-lightbox');
const lightboxImage=lightbox.querySelector('img');
document.querySelectorAll('.product-shot a').forEach(link=>{
  link.addEventListener('click',event=>{
    if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    event.preventDefault();
    const figure=link.closest('.product-shot');
    lightboxImage.src=link.href;
    lightboxImage.alt=figure.querySelector('img').alt;
    document.querySelector('#lightbox-title').textContent=figure.querySelector('figcaption span').textContent;
    lightbox.showModal();
    document.documentElement.classList.add('lightbox-open');
  });
});
lightbox.querySelector('button').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',event=>{
  const rect=lightbox.getBoundingClientRect();
  if(event.target===lightbox&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))lightbox.close();
});
lightbox.addEventListener('close',()=>{
  document.documentElement.classList.remove('lightbox-open');
  lightboxImage.removeAttribute('src');
});
