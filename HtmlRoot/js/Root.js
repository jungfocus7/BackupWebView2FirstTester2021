'use strict';
import { hfEaseBounce, hfTween } from "../js/hfTween.min.js";



// const _dcont = document.getElementById('_dcontainer');
// _dcont.innerHTML = `
//     <iframe class="c_ifr" src="./TestPages/Tester__hfCommon.html"></iframe>
//     <iframe class="c_ifr" src="./TestPages/Tester__hfCountTask.html"></iframe>
//     <iframe class="c_ifr" src="./TestPages/Tester__hfTween.html"></iframe>
// `;

// const _droot = document.getElementById('_droot');
const _dcontainer = document.getElementById('_dcontainer');
const _dfooter = document.getElementById('_dfooter');
// const _ifa = document.querySelectorAll('iframe.c_ifr');
// console.log(_droot);
// console.log(_dcontainer);
// console.log(_dfooter);
// console.log(_ifa);

const tca = _dcontainer.children;
if ((tca !== null) && (tca.length > 0)) {
    let tes = '';
    for (const tc of tca) {
        let tnm = tc.getAttribute('src');
        const bi = 20;
        const ei = tnm.lastIndexOf('.html');
        tnm = tnm.substring(bi, ei);
//         const tag = `
// <div class="c_dd">
//     <div class="c_de">
//         <span class="c_sd">개발자 확인 사항</span>
//     </div>
// </div>`;
        //const tag = `<input class="c_bt" type="button" value="${ tnm }"></input>`;
        const tag = `<button class="c_bt"><span>${ tnm }</span></button>`;
        tes += tag;
    }
    _dfooter.innerHTML = tes;

    const btns = _dfooter.querySelectorAll('button.c_bt');
    const twr = new hfTween(0, 36, hfEaseBounce.easeOut);
    window.twr = twr;
    twr.addEventListener(hfTween.ET_UPDATE, (te) => {
        _dcontainer.scrollTo(twr.Current, 0);
    });
    const fn_clh = (te) => {
        const bt = te.currentTarget;
        const i = bt.$di;
        const tx = tca[i];

        const begin = _dcontainer.scrollLeft;
        let change = tx.offsetLeft;
        const max = _dcontainer.scrollWidth - _dcontainer.clientWidth;
        if (change > max) change = max;
        twr.FromTo(begin, change);
    };
    let i = 0;
    for (const bt of btns) {
        bt.$di = i;
        bt.addEventListener('click', fn_clh);
        ++i;
    }
}



