const $=s=>document.querySelector(s);
$('#hb').onclick=()=>{const o=$('#hd').classList.toggle('open');$('#hb').setAttribute('aria-expanded',o)};
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>$('#hd').classList.remove('open'));
addEventListener('scroll',()=>$('#hd').classList.toggle('sc',scrollY>10),{passive:true});
$('#qf').onsubmit=e=>{e.preventDefault();let ok=true;
[['nm','Required'],['em','Enter a valid email'],['ph','Enter a 10-digit phone number']].forEach(([id])=>{const f=$('#'+id),m=f.parentElement.querySelector('.err'),v=f.value.trim();let t='';
if(!v)t='Required';else if(id==='em'&&!/^\S+@\S+\.\S+$/.test(v))t='Enter a valid email';else if(id==='ph'&&v.replace(/\D/g,'').length<10)t='Enter a 10-digit phone number';
m.textContent=t;f.setAttribute('aria-invalid',!!t);if(t)ok=false});
if(ok){$('#fields').hidden=true;$('#done').hidden=false}};
