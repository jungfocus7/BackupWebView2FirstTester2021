'use strict';



//-
const _webview = chrome.webview;

//- 오른쪽 메뉴 컨테이너
const _rightMenu = document.querySelector('div.sccRightMenu');

//- 오른쪽 메뉴 아이템들
const _rms = document.querySelectorAll('div.sccRightMenu>span');

//- 가운데 컨텐츠 뷰
const _dcView = document.getElementById('dcView');


//- 아래 버튼 1
const _lfbt1 = document.getElementById('lfbt1');

//- 아래 버튼 2
const _lfbt2 = document.getElementById('lfbt2');

//-
const _dso = Object.seal({
    cnum: -1,


    // ~~~~
    counter: new hfCountTask(75, 125, 3)

});



/**
 * 컨텐트 로드하기
 * @param {*} tta
 */
const __fn_loadSub = (tta) => {
    // console.log(tta);
    _dcView.innerHTML = tta;

    const tzz = document.getElementById('ta1');
    tzz.textContent = _dso.counter.toString();

};




/**
 * 오른쪽 메뉴들 클릭 핸들러
 * @param {*} te
 */
const __fn_rm_cl = (te) => {
    const tct = te.currentTarget;
    const tnum = +tct.textContent.substr(0, 3);
    // console.log(tnum);
    // console.log(typeof tnum);

    if (tnum === _dso.cnum) {
        __fn_lfbt1_cl(null);
        return;
    }
    _dso.cnum = tnum;
    // console.log(_dso.cnum);

    let tfnm;
    if (tnum === 1) {
        tfnm = 'Sub01.html';
        _webview.postMessage(`LoadSubContent;${ tfnm }`);

    }

    __fn_lfbt1_cl(null);

    // _webview.postMessage(
    //     JSON.stringify({ message: 'LoadSubContent',
    //         file: tfp }));

};

for (const trm of _rms) {
    trm.addEventListener('click', __fn_rm_cl);
}






/**
 * 오른쪽 메뉴 보이고/감추기
 * @param {*} te
 */
const __fn_lfbt1_cl = (te) => {
    if (_lfbt1.textContent === 'Menu Open') {
        _rightMenu.style.visibility = 'visible';
        _lfbt1.textContent = 'Menu Close';
    }
    else if (_lfbt1.textContent === 'Menu Close') {
        _rightMenu.style.visibility = 'hidden';
        _lfbt1.textContent = 'Menu Open';
    }

};
_lfbt1.addEventListener('click', __fn_lfbt1_cl);






/**
 *
 * @param {*} te
 */
const __fn_lfbt2_cl = (te) => {
    _dcView.innerHTML = '';
    _dso.cnum = -1;

};
_lfbt2.addEventListener('click', __fn_lfbt2_cl);

















// const _xx = fetch('Sub01.html');

// _dcView.innerHTML = ``;




/*
const _ta1 = document.getElementById('ta1');

let tcp = 0;
const __fn_loop = () => {
    if ((tcp % 13) === 0) {
        _ta1.value = _ta1.value + 'xx';
    }
    tcp++;
    requestAnimationFrame(__fn_loop);
};
// __fn_loop();
*/


