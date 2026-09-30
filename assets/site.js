'use strict';
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#site-menu');
function closeMenu(){if(!toggle||!menu)return;menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';menu.classList.toggle('is-open',open);});menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});window.matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)closeMenu();});}
const form=document.querySelector('#enquiry-form');
if(form){const followup=form.elements.contact;const emailField=form.elements.email;function requireEmail(){emailField.required=followup.value.startsWith('Email');document.querySelector('label[for=email]').textContent=emailField.required?'Email *':'Email (optional)';}followup.addEventListener('change',requireEmail);requireEmail();const service=form.elements.service;const requested=new URLSearchParams(location.search).get('service');if([...service.options].some(o=>o.value===requested))service.value=requested;
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const lines=['Hello Blue Door, I would like to discuss:', 'Service: '+data.get('service'),'Name: '+String(data.get('name')).trim(),'Location: '+String(data.get('location')).trim(),'Property / situation: '+data.get('situation'),'Preferred contact: '+data.get('contact')];const email=String(data.get('email')).trim();if(email)lines.push('Email: '+email);const timing=String(data.get('timing')).trim();if(timing)lines.push('Timing: '+timing);const message=String(data.get('message')).trim();if(message)lines.push('Details: '+message);const summary=lines.join('\n');document.querySelector('#enquiry-summary').value=summary;document.querySelector('#send-whatsapp').href='https://wa.me/351910174828?text='+encodeURIComponent(summary);const result=document.querySelector('#enquiry-result');result.hidden=false;result.focus();});
form.addEventListener('input',()=>{document.querySelector('#enquiry-result').hidden=true;});
const copy=document.querySelector('#copy-enquiry');copy.addEventListener('click',async()=>{const text=document.querySelector('#enquiry-summary');try{await navigator.clipboard.writeText(text.value);document.querySelector('#copy-status').textContent='Enquiry copied.';}catch{ text.focus();text.select();document.querySelector('#copy-status').textContent='Select and copy the enquiry above.';}});
}

// Reveal content gently as it enters the viewport.
(()=>{
const targets=document.querySelectorAll('.section-head,.copy,.service-card,.step-item,.report,.section .lead,.cta .wrap');
if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:0.08});
targets.forEach(target=>{target.classList.add('reveal-target');observer.observe(target);});
document.documentElement.classList.add('has-motion');
})();
