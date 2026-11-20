'use strict';
const PTL=document.documentElement.lang.startsWith('pt');const L=(en,pt)=>PTL?pt:en;
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#site-menu');
function closeMenu(){if(!toggle||!menu)return;menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent=L('Menu','Menu');}
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?L('Close','Fechar'):L('Menu','Menu');menu.classList.toggle('is-open',open);});menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});window.matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)closeMenu();});}
const form=document.querySelector('#enquiry-form');
if(form){
const btn=form.querySelector('#send-btn'),err=form.querySelector('#form-error'),fields=form.querySelector('#enquiry-fields'),thanks=form.querySelector('#form-thanks'),waErr=form.querySelector('#error-wa');
const val=n=>String(form.elements[n]?form.elements[n].value:'').trim();
function fallbackText(){return L('Hello The Blue Door, I\u2019d like to talk about managing my property.\nName: ','Olá The Blue Door, gostaria de falar sobre a gestão do meu imóvel.\nNome: ')+val('name')+L('\nPhone: ','\nTelefone: ')+val('phone')+L('\nLocation: ','\nLocalização: ')+val('location')+L('\nSituation: ','\nSituação: ')+val('situation');}
form.addEventListener('submit',async e=>{
e.preventDefault();err.hidden=true;
if(form.elements.botcheck&&form.elements.botcheck.checked)return;
if(!form.reportValidity())return;
btn.disabled=true;const label=btn.textContent;btn.textContent=L('Sending...','A enviar...');
const data={access_key:val('access_key'),subject:val('subject'),from_name:val('from_name'),name:val('name'),phone:val('phone'),location:val('location'),situation:val('situation'),message:val('message')||L('(no message)','(sem mensagem)')};
if(val('email'))data.email=val('email');
try{
const res=await fetch(form.action,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});
const out=await res.json();
if(res.ok&&out.success){fields.hidden=true;thanks.hidden=false;thanks.focus();form.scrollIntoView({behavior:'smooth',block:'start'});return;}
throw new Error('send failed');
}catch(x){waErr.href='https://wa.me/351910174828?text='+encodeURIComponent(fallbackText());err.hidden=false;btn.disabled=false;btn.textContent=label;}
});
}

// Reveal content gently as it enters the viewport.
(()=>{
const targets=document.querySelectorAll('.section-head,.copy,.service-card,.step-item,.report,.section .lead,.cta .wrap');
if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:0.08});
targets.forEach(target=>{target.classList.add('reveal-target');observer.observe(target);});
document.documentElement.classList.add('has-motion');
})();
