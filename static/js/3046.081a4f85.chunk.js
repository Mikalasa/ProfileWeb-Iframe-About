"use strict";(self.webpackChunkprofile_web_iframe_about=self.webpackChunkprofile_web_iframe_about||[]).push([[3046],{3046:(e,i,t)=>{t.d(i,{BaseMover:()=>n});var a=t(4409);class n{async init(e){const i=e.options.move.gravity;e.gravity={enable:i.enable,acceleration:(0,a.VG)(i.acceleration),inverse:i.inverse};const{initSpin:n}=await t.e(5337).then(t.bind(t,5337));n(e),await Promise.resolve()}isEnabled(e){return!e.destroyed&&e.options.move.enable}async move(e,i){var n,o,r,s,c;const l=e.options,v=l.move;if(!v.enable)return;const d=e.container,p=d.retina.pixelRatio;null!==(o=(n=e.retina).moveSpeed)&&void 0!==o||(n.moveSpeed=(0,a.VG)(v.speed)*p),null!==(s=(r=e.retina).moveDrift)&&void 0!==s||(r.moveDrift=(0,a.VG)(e.options.move.drift)*p);const{getProximitySpeedFactor:m}=await t.e(5337).then(t.bind(t,5337)),b=m(e),u=e.retina.moveSpeed*d.retina.reduceFactor,f=e.retina.moveDrift,w=(0,a.W9)(l.size.value)*p,h=u*(v.size?e.getRadius()/w:1)*b*(i.factor||1)/2,y=null!==(c=e.retina.maxSpeed)&&void 0!==c?c:d.retina.maxSpeed;if(v.spin.enable){const{spin:i}=await t.e(5337).then(t.bind(t,5337));i(e,h)}else{const{move:a}=await t.e(5337).then(t.bind(t,5337));await a(e,v,h,y,f,i)}const{applyDistance:S}=await t.e(5337).then(t.bind(t,5337));S(e)}}}}]);
//# sourceMappingURL=3046.081a4f85.chunk.js.map