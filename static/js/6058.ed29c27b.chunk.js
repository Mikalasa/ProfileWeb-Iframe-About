"use strict";(self.webpackChunkprofile_web_iframe_about=self.webpackChunkprofile_web_iframe_about||[]).push([[6058],{6058:(e,i,t)=>{t.d(i,{updateLife:()=>l});var n=t(4409);const a=0,u=-1,o=0,r=0;function l(e,i,t){if(!e.life)return;const l=e.life;let f=!1;if(e.spawning){if(l.delayTime+=i.value,!(l.delayTime>=e.life.delay))return;f=!0,e.spawning=!1,l.delayTime=a,l.time=a}if(l.duration===u)return;if(e.spawning)return;if(f?l.time=a:l.time+=i.value,l.time<l.duration)return;if(l.time=a,e.life.count>o&&e.life.count--,e.life.count===o)return void e.destroy();const s=(0,n.DT)(r,t.width),d=(0,n.DT)(r,t.width);e.position.x=(0,n.BH)(s),e.position.y=(0,n.BH)(d),e.spawning=!0,l.delayTime=a,l.time=a,e.reset();const p=e.options.life;p&&(l.delay=(0,n.VG)(p.delay.value)*n.Xu,l.duration=(0,n.VG)(p.duration.value)*n.Xu)}}}]);
//# sourceMappingURL=6058.ed29c27b.chunk.js.map