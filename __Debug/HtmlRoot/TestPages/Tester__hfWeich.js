import { hfWeich } from "../hbjs/hfWeich.js";


const tam = document.getElementById('_tam');
const fn_print = (msg) => {
    if (msg === null) {
        tam.textContent = '';
        return;
    }
    // console.log(_tam.textContent);
    // console.log(_tam.innerHTML);
    // console.log(_tam.value);
    let txv = tam.textContent + msg + '\n';
    tam.textContent = txv;
    tam.scrollTop = tam.scrollHeight;
};

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


const btns = document.querySelectorAll('button.c_bt');
btns[0].addEventListener('click', (te) => {
    fn_print(null);
});

btns[1].addEventListener('click', (te) => {
    twx.Stop();
    twy.Stop();
});