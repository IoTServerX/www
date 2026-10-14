const grid=document.querySelector('#driver-grid'),search=document.querySelector('#driver-search');
let filter='All drivers';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderDrivers(){
  const query=search.value.trim().toLowerCase();
  const shown=DRIVERS.filter(d=>(filter==='All drivers'||d.category===filter)&&[d.name,d.protocol,d.category].join(' ').toLowerCase().includes(query));
  grid.innerHTML=shown.map(d=>'<div class="driver-card"><span>'+String(d.number).padStart(2,'0')+'</span><span><strong>'+esc(d.name)+'</strong><small>'+esc(d.protocol)+'</small></span></div>').join('');
  document.querySelector('#driver-count').textContent=shown.length===DRIVERS.length?'71 drivers':shown.length+' of 71 drivers';
  document.querySelector('#no-drivers').hidden=shown.length>0;
  grid.hidden=shown.length===0;
}
search.addEventListener('input',renderDrivers);
document.querySelector('#driver-filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(el=>{el.classList.toggle('active',el===b);el.setAttribute('aria-pressed',String(el===b));});renderDrivers();});
document.querySelector('#clear-search').addEventListener('click',()=>{search.value='';document.querySelector('[data-filter="All drivers"]').click();search.focus();});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA/.test(e.target.tagName)&&!document.querySelector('dialog[open]')){e.preventDefault();search.focus();}});
const dialog=document.querySelector('#detail-dialog');
function showDetail(category,title,copy,extra){document.querySelector('#detail-category').textContent=category;document.querySelector('#detail-title').textContent=title;document.querySelector('#detail-copy').textContent=copy;document.querySelector('#detail-extra').innerHTML=extra;dialog.showModal();}
const plugins={advanced_tags:['Advanced Tags','Create calculated values, combine source signals, and evaluate expressions on a schedule or trigger. Put meaningful process information alongside your raw device tags.'],aeserver:['Alarms & Events','Organize conditions into areas and sources. Monitor values, track state and quality, and surface meaningful operational events.'],datalogger:['DataLogger','Record values, quality, and timestamps in your database. Configure collection intervals and change conditions, then make the results available for reporting.'],iot_gateway:['IoT Gateway','Publish industrial tag data to connected MQTT applications. Choose delivery behavior, manage publication rules, and coordinate outgoing data.'],local_historian:['Local Historian','Collect process values over time. Set collection rates, retain samples, and inspect the history behind your equipment and operations.'],profile_library:['Profile Library','Organize reusable profiles and scripts with stable identities. Import, export, and manage connection behavior in a common library.'],connection_sharing:['Connection Sharing','Coordinate access to shared communication resources. Manage connections consistently as devices and applications share the same infrastructure.']};
const PLUGIN_SCOPES={"Alarms & Events": ["Organize areas, sources, and conditions that compare tags with constants or other tags. Track severity, quality, and state transitions in the local event log.", "Local conditions only. Acknowledgement and OPC UA alarm/event transport are pending."], "Profile Library": ["Store named scripts with stable identities. Load UTF-8 script text, edit profiles, and import or export their configuration as JSON.", "Configuration storage is implemented. Script execution and device bindings are pending."], "DataLogger": ["Write scalar values, quality, and timestamps to an existing table through a Windows ODBC DSN. Choose interval or change collection, source or collection timestamps, deadband, and persistent retries.", "Fixed table layout; queues hold up to 1,000 samples. Delivery may duplicate records. Custom column mapping and triggers are pending."], "IoT Gateway": ["Publish tag samples as JSON over MQTT 3.1.1 with QoS 0, 1, or 2. Control initial and quality-change publication; durable queues retain pending samples across restarts.", "Anonymous TCP; up to 1,000 queued samples. QoS 0 can lose messages and reconnect retries can duplicate delivery. TLS, authentication, REST, and custom payloads are pending."], "Local Historian": ["Record values, quality, and timestamps with per-item collection intervals, deadband, and retention. Inspect recent samples in the configuration UI or query a time range through the local API.", "Initial archive retains up to 1,000 samples per datastore. OPC UA HistoryRead and high-volume archives are pending."], "Advanced Tags": ["Build numeric Derived Tags with arithmetic, source tag values, and quality expressions. Publish calculated outputs through OPC UA.", "Fixed-rate or Good-quality rising-edge evaluation. Aggregate and string tag types are pending."]};
document.querySelectorAll('[data-plugin]').forEach(b=>b.addEventListener('click',()=>{const [title,copy]=plugins[b.dataset.plugin];const scope=PLUGIN_SCOPES[title];showDetail(scope?'IN 1.3.0 · DEFINED SCOPE':'PLANNED PLUGIN',title,scope?scope[0]:copy,scope?esc(scope[1]):'Connection Sharing is planned and is not included in the current release.');}));
document.querySelectorAll('[data-download]').forEach(b=>b.addEventListener('click',()=>showDetail('WINDOWS X64 · VERSION 1.3.0','Get IoT Server.','21 driver adapters and six plugin areas with documented scopes. Choose the installer or portable package.','<div class="download-links"><a class="small-cta" href="https://github.com/IoTServerX/releases/releases/download/v1.3.0/IoTServer-1.3.0-windows-x64-setup.exe">Download installer <span>↓</span></a><a class="small-cta" href="https://github.com/IoTServerX/releases/releases/download/v1.3.0/IoTServer-1.3.0-windows-x64-portable.zip">Download portable ZIP <span>↓</span></a><a href="https://github.com/IoTServerX/releases/releases/download/v1.3.0/IoTServer-1.3.0-third-party-notices.zip">Third-party notices and sources</a><a href="https://github.com/IoTServerX/releases/releases/download/v1.3.0/SHA256SUMS.txt">Verify SHA-256 checksums</a><a href="https://github.com/IoTServerX/releases/releases/tag/v1.3.0" target="_blank" rel="noreferrer">Release notes and supported scope ↗</a></div>')));
document.querySelector('#show-product').addEventListener('click',()=>document.querySelector('#product-dialog').showModal());
document.querySelectorAll('.dialog-close,.dialog-done').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}));
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
