(function(){"use strict";self.onmessage=t=>{try{const n=_(t.data);self.postMessage(n)}catch(n){self.postMessage(n)}finally{self.close()}};function E(t){return t.map(([n,s,o])=>[n,s,parseFloat(o).toFixed(2)])}function _(t){const n=new Array;if(+t.filter(h=>+h[1]==0).length>32){const h=t.filter(f=>+f[1]!=0).map(f=>+f),u=m(1<<h.length-1),a=u.filter(f=>o[1<<f]<0);return u.filter(f=>o[1<<f]>0).forEach(f=>{let l=o[1<<f];a.forEach(i=>{!l||!o[1<<i]||(l+o[1<<i]>0?(n.push([t[h[f]][0],t[h[i]][0],String(-o[1<<i])]),l+=o[1<<i],o[1<<i]=0):(n.push([t[h[f]][0],t[h[i]][0],String(l)]),o[1<<i]+=l,l=0))})}),E(n)}const[s,o,c]=y(t),[r,p]=A(c),g=F(r),[,e]=v(s.length,g,o);return p.forEach(h=>{const[u,a]=m(h);o[1<<u]>0?n.push([t[s[u]][0],t[s[a]][0],String(o[1<<u])]):n.push([t[s[a]][0],t[s[u]][0],String(-o[1<<u])])}),e.forEach(h=>{const u=m(h),a=u.filter(f=>o[1<<f]<0);u.filter(f=>o[1<<f]>0).forEach(f=>{let l=o[1<<f];a.forEach(i=>{!l||!o[1<<i]||(l+o[1<<i]>0?(n.push([t[s[f]][0],t[s[i]][0],String(-o[1<<i])]),l+=o[1<<i],o[1<<i]=0):(n.push([t[s[f]][0],t[s[i]][0],String(l)]),o[1<<i]+=l,l=0))})})}),E(n)}function y(t){const n=[],s=[],o=[];return t.forEach((r,p)=>{+r[1]&&(n[2**s.length]=+r[1],s.push(p))}),[...Array(2**s.length).keys()].forEach((r,p)=>{r!=0&&(n[r]=isNaN(n[r])?0:n[r],s.forEach((g,e)=>{r!=2**e&&r&2**e&&(n[r]=+(n[r]+n[2**e]).toFixed(2))}),n[r]||o.push(p))}),[s,n,o]}function A(t){const n=[],s=[];return t.forEach(o=>{S(o)==2&&(n.some(c=>c&o)||(s.push(o),n.push(o)))}),[t.filter(o=>!n.some(c=>c&o)),s]}function F(t){return t.filter(n=>!t.some(s=>s!=n&&(s&n)==s))}function N(t,n){return n.filter(s=>(s&t)==s)}function m(t){const n=new Array;for(;t;){const s=31-Math.clz32(t);n.push(s),t&=~(1<<s)}return n}function v(t,n,s){const o=[...Array(2**t).keys()].sort((r,p)=>S(r)-S(p)),c=[];return o.forEach(r=>{if(r===0)c[r]=[[],0];else if(s[r]===0){const g=N(r,n).filter(e=>c[r&~e]).map(e=>[c[r&~e][0].concat(e),c[r&~e][1]+1]);if(g.length){const e=g.reduce((h,u)=>u[1]>h[1]?u:h);c[r]=e}}}),[c,c[c.length-1][0]]}function S(t){return t=t-(t>>1&1431655765),t=(t&858993459)+(t>>2&858993459),(t+(t>>4)&252645135)*16843009>>24}})();
//# sourceMappingURL=settlement.1e388715.js.map