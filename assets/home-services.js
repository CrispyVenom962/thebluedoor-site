(()=>{
const strip=document.querySelector('.service-loop');if(!strip)return;
const items=[...strip.querySelectorAll('.service-loop-item')],button=strip.querySelector('.service-loop-toggle');
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
let active=0,timer,manual=false,hover=false,focus=false;
strip.classList.add('is-enhanced');button.hidden=false;
function show(){const page=Math.floor(active/4);items.forEach((item,i)=>{const visible=Math.floor(i/4)===page;item.classList.toggle('is-shown',visible);item.classList.toggle('is-active',i===active);item.classList.toggle('is-entering',visible);});}
function schedule(){clearTimeout(timer);const paused=manual||hover||focus||document.hidden;strip.classList.toggle('is-paused',paused);if(!paused)timer=setTimeout(()=>{active=(active+1)%items.length;show();schedule();},2800);}
button.addEventListener('click',()=>{manual=!manual;button.textContent=manual?'Resume rotation':'Pause rotation';schedule();});
strip.addEventListener('mouseenter',()=>{hover=true;schedule();});strip.addEventListener('mouseleave',()=>{hover=false;schedule();});
strip.addEventListener('focusin',()=>{focus=true;schedule();});strip.addEventListener('focusout',()=>{setTimeout(()=>{focus=strip.contains(document.activeElement);schedule();},0);});
document.addEventListener('visibilitychange',schedule);show();schedule();
})();
