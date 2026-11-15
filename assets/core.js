/* DemoKit - local browser-only utilities. No remote requests, credentials, or external dependencies. */
window.DemoKit = (() => {
 const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const iconPaths={
  home:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  chart:'<path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
  chevron:'<path d="m9 18 6-6-6-6"/>',
  filter:'<path d="M4 7h16M7 12h10M10 17h4"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  moon:'<path d="M20.9 13a9 9 0 0 1-9.9-9.9 9 9 0 1 0 9.9 9.9Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
  reset:'<path d="M3 11a9 9 0 1 1 2.6 6.4"/><path d="M3 4v7h7"/>',
  spark:'<path d="m12 3 1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9L12 3Z"/><path d="m20 19 .5 1.5L22 21l-1.5.5L20 23l-.5-1.5L18 21l1.5-.5L20 19Z"/>',
  bolt:'<path d="m13 2-9 12h7l-1 8 10-12h-7l0-8Z"/>',
  ticket:'<path d="M2 10V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"/><path d="M13 5v2m0 4v2m0 4v2"/>',
  briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  layers:'<path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5"/>',
  star:'<path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.5l-5.7 3 1.1-6.3-4.6-4.5 6.4-.9L12 3Z"/>',
  phone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  brain:'<path d="M12 18V5a3 3 0 0 0-5.7-1.3A4 4 0 0 0 4 10a4 4 0 0 0 .3 7.8A3 3 0 0 0 10 20M12 18V5a3 3 0 0 1 5.7-1.3A4 4 0 0 1 20 10a4 4 0 0 1-.3 7.8A3 3 0 0 1 14 20"/>',
  bookmark:'<path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4V4Z"/>',
  cards:'<rect x="3" y="3" width="15" height="17" rx="2"/><path d="M8 20v2h12a2 2 0 0 0 2-2V7h-4"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  trophy:'<path d="M8 21h8m-4-4v4M7 3h10v7a5 5 0 0 1-10 0V3ZM7 5H4v3a4 4 0 0 0 4 4m9-7h3v3a4 4 0 0 1-4 4"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  close:'<path d="M5 5 19 19M19 5 5 19"/>',
  info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>',
  download:'<path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4"/>',
  drag:'<circle cx="9" cy="5" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="19" r="1"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  send:'<path d="m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2"/>',
  play:'<path d="m8 5 12 7-12 7V5Z"/>',
  graduation:'<path d="m2 10 10-6 10 6-10 6-10-6ZM6 12v5c4 3 8 3 12 0v-5M22 10v7"/>',
  code:'<path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-12-4 16"/>',
  activity:'<path d="M2 12h4l3-9 6 18 3-9h4"/>'
 };
 const icon=(n,cls='')=>`<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[n]||iconPaths.spark}</svg>`;
 const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(_){}};
 const load=(k,fallback)=>{try{const v=localStorage.getItem(k);return v===null?fallback:JSON.parse(v);}catch(_){return fallback;}};
 const pct=(n,d)=>d?Math.round(n/d*100):0;
 const number=(n,lang)=>new Intl.NumberFormat(lang==='vi'?'vi-VN':'en-US').format(n);
 const money=(n,lang)=>new Intl.NumberFormat(lang==='vi'?'vi-VN':'en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
 const points=(values,w=500,h=156,p=10)=>{const hi=Math.max(...values,1)*1.14,lo=0;return values.map((v,i)=>`${p+(w-2*p)*i/Math.max(1,values.length-1)},${h-p-(v-lo)/(hi-lo)*(h-2*p)}`).join(' ')};
 const line=(values,{w=500,h=156,color='currentColor',fill=true}={})=>{const p=points(values,w,h,10), id='g'+values.join('_').replace(/\W/g,'');return `<svg class="chart-line" viewBox="0 0 ${w} ${h}" role="img" aria-label="Trend chart"><defs><linearGradient id="${id}" x1="0" x2="0" y1="0" y2="1"><stop stop-color="${color}" stop-opacity=".28"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>${[.25,.5,.75,1].map(t=>`<line x1="10" y1="${t*h-10}" x2="${w-10}" y2="${t*h-10}" stroke="currentColor" opacity=".08"/>`).join('')}${fill?`<polygon points="10,${h} ${p} ${w-10},${h}" fill="url(#${id})"/>`:''}<polyline points="${p}" stroke="${color}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>${p.split(' ').filter((_,i)=>i===values.length-1).map(a=>`<circle cx="${a.split(',')[0]}" cy="${a.split(',')[1]}" r="5" fill="${color}" stroke="var(--surface)" stroke-width="3"/>`).join('')}</svg>`};
 const bars=(values,labels,colors)=>`<div class="bars">${values.map((v,i)=>`<div class="bar-item" title="${e(labels[i])}: ${v}"><span class="bar-track"><span style="height:${Math.max(5,Math.round(v/Math.max(...values,1)*100))}%;background:${colors?.[i%colors.length]||'var(--primary)'}"></span></span><small>${e(labels[i])}</small></div>`).join('')}</div>`;
 const donut=(segments,{size=152,label='',value=''}={})=>{let pos=0;const stops=segments.map(s=>{const start=pos;pos+=s.value;return `${s.color} ${start}% ${pos}%`}).join(',');return `<div class="donut" style="--donut:${stops};--donut-size:${size}px"><div class="donut-inner"><b>${e(value)}</b><small>${e(label)}</small></div></div>`};
 const badge=(txt,tone='muted')=>`<span class="badge ${tone}">${e(txt)}</span>`;
 const toast=(msg)=>{let d=document.querySelector('.toast-wrap');if(!d){d=document.createElement('div');d.className='toast-wrap';d.setAttribute('aria-live','polite');document.body.appendChild(d);}const n=document.createElement('div');n.className='toast';n.innerHTML=icon('check')+`<span>${e(msg)}</span>`;d.append(n);setTimeout(()=>n.remove(),3200)};
 const modal=(html)=>{const root=document.createElement('div');root.className='modal-layer';root.innerHTML=`<div class="modal-scrim" data-modal-close="1"></div><section class="modal-card" role="dialog" aria-modal="true">${html}</section>`;document.body.append(root);root.querySelectorAll('[data-modal-close]').forEach(b=>b.addEventListener('click',()=>root.remove()));const esc=(evt)=>{if(evt.key==='Escape'){root.remove();document.removeEventListener('keydown',esc)}};document.addEventListener('keydown',esc);return root};
 const safeN=(v,max=1e6)=>{const n=Number(v);return Number.isFinite(n)?Math.max(0,Math.min(max,n)):0};
 return {e,icon,save,load,pct,number,money,line,bars,donut,badge,toast,modal,safeN};
})();
