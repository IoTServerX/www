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
document.addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA/.test(e.target.tagName)){e.preventDefault();search.focus();}});
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
    const version=typeof release.tag_name==='string'&&release.tag_name.length<100?release.tag_name+' · ':'';
    document.querySelector('#release-label').textContent='Latest release · '+version+'Windows x64';
  }catch{
    // No stale pinned package or popup: both links keep their latest-release fallback.
  }finally{clearTimeout(timeout);}
}
void resolveLatestDownloads();
const sections=[...document.querySelectorAll('main>section[id]')],navLinks=[...document.querySelectorAll('.section-nav a')];
function updateNav(){let id='platform';for(const s of sections)if(s.getBoundingClientRect().top<150)id=s.id;navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));}
document.addEventListener('scroll',updateNav,{passive:true});renderDrivers();

// Use viewport coordinates relative to the scene so connectors meet their cards
// even when labels wrap or the responsive layout changes. A user-space gradient
// also paints horizontal paths, whose object bounding boxes have zero height.
const scene=document.querySelector('.network-scene');
const wires=scene.querySelector('.wires');
function drawConnections(){
  const bounds=scene.getBoundingClientRect();
  const core=scene.querySelector('.server-core').getBoundingClientRect();
  wires.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
  const gradient=wires.querySelector('#wire');
  gradient.setAttribute('x1','0');
  gradient.setAttribute('x2',String(bounds.width));
  const centerY=core.top+core.height/2-bounds.top;
  const paths=[];
  for(const side of ['sources','destinations']){
    for(const card of scene.querySelectorAll(`.${side}>div`)){
      const rect=card.getBoundingClientRect();
      const left=side==='sources';
      const x1=(left?rect.right:core.right)-bounds.left;
      const y1=left?rect.top+rect.height/2-bounds.top:centerY;
      const x2=(left?core.left:rect.left)-bounds.left;
      const y2=left?centerY:rect.top+rect.height/2-bounds.top;
      const middle=(x1+x2)/2;
      paths.push(`<path data-side="${side}" d="M${x1} ${y1} C${middle} ${y1} ${middle} ${y2} ${x2} ${y2}"/>`);
    }
  }
  wires.querySelector('.wire-paths').innerHTML=paths.join('');
}
const connectionObserver=new ResizeObserver(drawConnections);
connectionObserver.observe(scene);
scene.querySelectorAll('.endpoints>div,.server-core').forEach(el=>connectionObserver.observe(el));
drawConnections();
