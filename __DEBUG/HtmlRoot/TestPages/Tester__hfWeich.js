import { hfWeich } from "../js/hfWeich.min.js";
import { fn_print, btns } from "./SubCom.js";


const cc = document.getElementById('_cc');
const svgcont = document.getElementById('_svgcont');
let tx = ~~cc.getAttribute('cx');
let ty = ~~cc.getAttribute('cy');
// console.log(tx, ty);

const twx = new hfWeich(tx);
const twy = new hfWeich(ty);
const twcUpdate = (te) => {
    // console.log(te);
    tx = twx.Now;
    ty = twy.Now;
    fn_print(`UPDATE: (X=${ tx }, Y=${ ty });`);
    cc.setAttribute('cx', tx);
    cc.setAttribute('cy', ty);
};
const twcEnd = (te) => {
    // console.log(te);
    tx = twx.End;
    ty = twy.End;
    fn_print(`END: (X=${ tx }, Y=${ ty });`);
    cc.setAttribute('cx', tx);
    cc.setAttribute('cy', ty);
};
twx.addEventListener(hfWeich.ET_UPDATE, twcUpdate);
twy.addEventListener(hfWeich.ET_UPDATE, twcUpdate);
twx.addEventListener(hfWeich.ET_END, twcEnd);
twy.addEventListener(hfWeich.ET_END, twcEnd);

svgcont.addEventListener('click', (te) => {
    const mx = te.offsetX;
    const my = te.offsetY;
    fn_print(`BEGIN: (X=${ mx }, Y=${ my });`);
    twx.To(mx);
    twy.To(my);
});


btns[1].addEventListener('click', (te) => {
    twx.Stop();
    twy.Stop();
});