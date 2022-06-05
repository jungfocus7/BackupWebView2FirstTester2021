//======================================================================
// # hfnum: 넘버 관련 모듈
//======================================================================
((global, name) => { 'use strict';
    if (typeof global[name] !== 'undefined') return;


    /**
     *
     * @param {*} tv
     * @returns
     */
    const is_float = (tv) => {
        return (tv % 1) !== 0;

    };



    /**
     *
     * @param {*} tv
     * @returns
     */
    const is_minus = (tv) => {
        return tv < 0;

    };



    /**
     *
     * @param {*} tv
     * @returns
     */
    const random = (tv) => {
        return Math.round(Math.random() * (tv - 1));

    };



    /**
     *
     * @param {*} min
     * @param {*} max
     * @returns
     */
    const randRange = (min, max) => {
        return min + Math.round(Math.random() * (max - min));

    };



    /**
     *
     * @param {*} tv
     * @returns
     */
    const is_odd = (tv) => {
        return (tv % 2) > 0;

    };



    /**
     *
     * @param {*} tv
     * @returns
     */
    const is_even = (tv) => {
        return (tv % 2) === 0;

    };


    const tcro = Object.seal({
        is_float,
        is_minus,
        random,
        randRange,
        is_odd,
        is_even
    });
    global[name] = tcro;

})(window, 'hfnum');
//======================================================================




//======================================================================
// # hfstr: 문자열 관련 모듈
//======================================================================
((global, name) => { 'use strict';
    if (typeof global[name] !== 'undefined') return;


    /**
     * 문자열 유효성 확인
     * @param {*} tstr
     * @returns
     */
    const is_str = (tstr) => {
        if (typeof tstr === 'string')
            return tstr.trim() !== '';
        else
            return false;

    };



    /**
     * 이름에서 마지막 번호 확인
     * @param {*} tstr
     * @param {*} token
     * @returns
     */
    const get_lastNum = (tstr, token = '_') => {
        const ti = tstr.lastIndexOf(token) + 1;
        return +tstr.substr(ti);

    };



    /**
     * 문자열 >> ArrayBuffer 변환
     * @param {*} tstr
     * @returns
     */
    const str2ab = (tstr) => {
        const tl = tstr.length;

        let tab = new Uint16Array(new ArrayBuffer(tl * 2));
        for (let i = 0; i < tl; i++) {
            tab[i] = tstr.charCodeAt(i);
        }

        return tab;

    };



    /**
     * ArrayBuffer >> 문자열 변환
     * @param {*} tab
     * @returns
     */
    const ab2str = (tab) => {
        return String.fromCharCode.apply(null, tab);

    };


    const tcro = Object.seal({
        is_str,
        get_lastNum,
        str2ab,
        ab2str
    });
    global[name] = tcro;

})(window, 'hfnum');
//======================================================================




//======================================================================
// # hfarr: 배열 관련 모듈
//======================================================================
((global, name) => { 'use strict';
    if (typeof global[name] !== 'undefined') return;


    /**
     * 배열객체 유효성 확인
     * @param {*} tarr
     * @returns
     */
    const is_arr = (tarr) => {
        return Array.isArray(tarr) && (tarr.length > 0);
        // if (!Array.isArray(tarr)) return false;
        // return (tarr !== null) && (tarr.length > 0);

    };


    /**
     * 배열에 요소 확인
     * @param {*} tarr
     * @param {*} te
     * @returns
     */
    const is_contains = (tarr, te) => {
        if (is_arr(tarr) === false) return false;


        let tb = false;

        const tl = tarr.length
        for (let i = 0; i < tl; i++) {
            if (tarr[i] === te) {
                tb = true;
                break;
            }
        }

        return tb;

    };



    /**
     * 배열 섞기
     * @param {*} tarr
     * @returns
     */
    const shuffle = (tarr) => {
        if (is_arr(tarr) === false) return;


        const tl = tarr.length;
        for (let i = 0; i < tl; i++) {
            let te = tarr[i];
            let ti = hfnum.randRange(0, tl - 1);
            tarr[i] = tarr[ti];
            tarr[ti] = te;
        }

    };


    /**
     * 배열 복사
     * @param {*} tarr
     * @returns
     */
    const copy = (tarr) => {
        if (is_arr(tarr) === false) return null;

        return tarr.slice();
    };


    const tcro = Object.seal({
        is_arr,
        is_contains,
        shuffle,
        copy
    });
    global[name] = tcro;

})(window, 'hfarr');
//======================================================================





