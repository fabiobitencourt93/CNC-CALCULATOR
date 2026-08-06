
const s=document.getElementById('material');
materials.forEach((m,i)=>{let o=document.createElement('option');o.value=i;o.textContent=`${m.n} (${m.vc} m/min)`;s.appendChild(o);});
calc.onclick=()=>{
const vc=materials[s.value].vc;
const d=parseFloat(document.getElementById('d').value);
const z=parseFloat(document.getElementById('z').value);
const fz=parseFloat(document.getElementById('fz').value);
const rpm=(vc*1000)/(Math.PI*d);
const feed=rpm*z*fz;
document.getElementById('rpm').textContent=rpm.toFixed(0);
document.getElementById('feed').textContent=feed.toFixed(0);
};