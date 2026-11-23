(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var SP=[['Cumin','#A9743A','Earthy, warm and slightly bitter.','Toast or temper whole; add ground early.','Beans, lentils, lamb, rice, yoghurt'],['Coriander','#C9A55C','Citrusy, floral and gentle.','Toast whole seeds, then grind fresh.','Chicken, carrots, curries, sausages'],['Turmeric','#E1A12C','Earthy, peppery, with a golden colour.','Bloom ground turmeric briefly in fat.','Rice, lentils, cauliflower, eggs'],['Chilli','#B2361F','Fruity heat, from mild to fierce.','Temper whole, or add flakes and powder to taste.','Almost everything savoury'],
 ['Cardamom','#6E7B3A','Floral, eucalyptus-like and sweet.','Crack pods; add whole to rice or grind for sweets.','Rice, coffee, milk puddings, buns'],['Cinnamon','#8A4B2A','Sweet, woody and warming.','Simmer whole bark; use ground in baking.','Stews, rice, fruit, baking'],['Black pepper','#3F3A33','Sharp, piney heat.','Grind fresh at the end of cooking.','Everything, from eggs to strawberries'],['Cloves','#5A3424','Intense, sweet and numbing.','Use sparingly; one or two whole cloves go far.','Ham, rice, mulled fruit, spice blends']];
var at=$('at-svg');if(at){var o='<g class="rot">',c=200;for(var i=0;i<8;i++){var a0=(i*45-112.5)*Math.PI/180,a1=(i*45-67.5)*Math.PI/180,r1=70,r2=190;function p(r,a){return (c+r*Math.cos(a)).toFixed(1)+' '+(c+r*Math.sin(a)).toFixed(1);}var am=(i*45-90)*Math.PI/180;
 o+='<g class="sg" data-i="'+i+'" tabindex="0" role="button" aria-label="'+SP[i][0]+'"><path d="M'+p(r1,a0)+' L'+p(r2,a0)+' A'+r2+' '+r2+' 0 0 1 '+p(r2,a1)+' L'+p(r1,a1)+' A'+r1+' '+r1+' 0 0 0 '+p(r1,a0)+'Z" fill="'+SP[i][1]+'"/><text x="'+(c+132*Math.cos(am)).toFixed(1)+'" y="'+(c+132*Math.sin(am)+4).toFixed(1)+'" text-anchor="middle" fill="'+(i===6||i===7?'#F5EBDD':'#1C1410')+'" style="fill:'+(i>=5?'#F5EBDD':'#1C1410')+'">'+SP[i][0]+'</text></g>';}
 o+='</g><circle cx="200" cy="200" r="62" class="hub"/><path d="M200 168l6 18 18-4-12 14 12 14-18-4-6 18-6-18-18 4 12-14-12-14 18 4z" fill="#E1A12C"/>';at.innerHTML=o;var gs=[].slice.call(at.querySelectorAll('.sg'));
 function sel(k){gs.forEach(function(g,j){g.classList.toggle('on',j===k);});var s=SP[k];$('at-o').innerHTML='<h3>'+s[0]+'</h3><p>'+s[2]+'</p><dl><dt>How to use</dt><dd>'+s[3]+'</dd><dt>Loves</dt><dd>'+s[4]+'</dd></dl>';}
 gs.forEach(function(g,k){g.addEventListener('click',function(){sel(k);});g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();sel(k);}});});sel(0);}
var go=$('tm-go');if(go){var li=[].slice.call(document.querySelectorAll('#tm-l li')),seeds=$('tm-seeds'),oil=$('tm-oil'),stm=$('tm-steam');
 function add(col,n,cls,sz){var s='';for(var i=0;i<n;i++){var x=70+Math.random()*200,y=160+Math.random()*16;s+='<circle class="sd '+cls+'" cx="'+x.toFixed(0)+'" cy="'+y.toFixed(0)+'" r="'+sz+'" fill="'+col+'" style="animation-delay:'+(Math.random()*.5).toFixed(2)+'s;transform-box:fill-box"/>';}seeds.insertAdjacentHTML('beforeend',s);}
 var M=['The oil is shimmering.','Mustard seeds are popping. Cover the pan for a moment.','Cumin is sizzling and turning a shade darker.','Curry leaves crackle. Pour it over the dish now.'];
 go.addEventListener('click',function(){go.disabled=true;seeds.innerHTML='';li.forEach(function(l){l.classList.remove('on');});oil.style.opacity=.25;stm.style.opacity=0;var st=0,d=rm?300:1700;
  function step(){li.forEach(function(l,j){l.classList.toggle('on',j===st);});$('tm-o').textContent=M[st];if(st===0){oil.style.opacity=.75;}if(st===1){add('#2A1A10',22,'pop',3);}if(st===2){add('#9C7A4A',18,'',3.5);[].forEach.call(seeds.querySelectorAll('.pop'),function(e){e.classList.remove('pop');});}if(st===3){stm.style.opacity=1;seeds.insertAdjacentHTML('beforeend','<path d="M120 164q20-20 40 0q-20 14-40 0z" fill="#3E6B2A"/><path d="M190 162q22-18 40 2q-22 12-40-2z" fill="#3E6B2A"/><path d="M150 170l40-6" stroke="#B2361F" stroke-width="6" stroke-linecap="round"/>');}
   st++;if(st<4)setTimeout(step,d);else setTimeout(function(){go.disabled=false;go.textContent='Temper again';},d);}step();});}
var bs=$('bl-s');if(bs){var B=[['Cumin','#A9743A',3,'earthy'],['Coriander','#C9A55C',3,'bright'],['Turmeric','#E1A12C',1,'earthy'],['Chilli','#B2361F',1,'hot'],['Cinnamon','#8A4B2A',1,'warm'],['Black pepper','#3F3A33',1,'hot'],['Cardamom','#6E7B3A',1,'warm']];
 bs.innerHTML=B.map(function(b,i){return '<label for="bl'+i+'"><i style="background:'+b[1]+'"></i>'+b[0]+'<input type="range" id="bl'+i+'" min="0" max="6" value="'+b[2]+'"><output id="blo'+i+'">'+b[2]+'</output></label>';}).join('');
 var ins=[].slice.call(bs.querySelectorAll('input'));function bl(){var v=ins.map(function(x){return +x.value;}),t=v.reduce(function(a,b){return a+b;},0)||1,y=264,o='',lean={};
  v.forEach(function(n,i){$('blo'+i).textContent=n;var h=n/t*190;if(h>0){y-=h;o+='<rect x="40" y="'+y.toFixed(1)+'" width="120" height="'+(h+.5).toFixed(1)+'" fill="'+B[i][1]+'"/>';}lean[B[i][3]]=(lean[B[i][3]]||0)+n;});$('bl-layers').innerHTML=o;
  var top=Object.keys(lean).sort(function(a,b){return lean[b]-lean[a];})[0],N={earthy:['Earthy and grounding','Lovely in lentils, beans and roasted roots.'],bright:['Bright and citrusy','Try it on chicken, fish and carrots.'],hot:['Fiery','Use a little at a time in stews and marinades.'],warm:['Sweetly warming','Wonderful in rice, braises and baking.']};
  $('bl-o').innerHTML=t<2?'<b>Add a few spices</b>Move the sliders to fill the jar.':'<b>'+N[top][0]+'</b>'+N[top][1]+' Toast whole spices before grinding for the best flavour.';}
 ins.forEach(function(x){x.addEventListener('input',bl);});bl();}
})();
