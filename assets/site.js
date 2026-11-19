'use strict';
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#site-menu');
function closeMenu(){if(!toggle||!menu)return;menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';menu.classList.toggle('is-open',open);});menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});window.matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)closeMenu();});}
const form=document.querySelector('#enquiry-form');
if(form){
const val=n=>String(form.elements[n]?form.elements[n].value:'').trim();
function summary(){const l=['Hello The Blue Door, I\u2019d like to talk about managing my property.','Name: '+val('name'),'Phone / WhatsApp: '+val('phone'),'Property location: '+val('location'),'Situation: '+val('situation')];if(val('email'))l.push('Email: '+val('email'));if(val('message'))l.push('Details: '+val('message'));return l.join('\n');}
const wa=form.querySelector('#send-whatsapp'),mail=form.querySelector('#send-email'),cal=form.querySelector('#book-call');
function update(){const t=summary();wa.href='https://wa.me/351910174828?text='+encodeURIComponent(t);mail.href='mailto:hello@thebluedoor.pt?subject='+encodeURIComponent('Property management enquiry')+'&body='+encodeURIComponent(t);const q=new URLSearchParams();if(val('name'))q.set('name',val('name'));if(val('email'))q.set('email',val('email'));q.set('notes',t);cal.href='https://cal.com/thebluedoor/property-management-consultation?'+q.toString();}
form.addEventListener('input',update);update();
[wa,mail,cal].forEach(a=>a.addEventListener('click',e=>{if(!form.reportValidity()){e.preventDefault();return;}update();}));
form.addEventListener('submit',e=>e.preventDefault());
}

// Reveal content gently as it enters the viewport.
(()=>{
const targets=document.querySelectorAll('.section-head,.copy,.service-card,.step-item,.report,.section .lead,.cta .wrap');
if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:0.08});
targets.forEach(target=>{target.classList.add('reveal-target');observer.observe(target);});
document.documentElement.classList.add('has-motion');
})();
