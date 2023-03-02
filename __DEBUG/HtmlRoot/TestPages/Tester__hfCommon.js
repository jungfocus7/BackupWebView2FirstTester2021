import { hfnum, hfstr, hfarr } from "../js/hfCommon.min.js";
import { fn_print, btns } from "./SubCom.js";



//#region {{~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  hfnum
const fn_clh1 = (te) => {
    fn_print('{{----------  hfnum');

    const fn_IsNumber = (td) => {
        fn_print(`hfnum.IsNumber(${ td }): ${ hfnum.IsNumber(td) }`);
    };
    fn_IsNumber(3.7);
    fn_IsNumber(6.0);
    fn_IsNumber('94123');
    fn_IsNumber((Math.PI / 2) + '::');
    fn_print('\n');


    const fn_NotNumber = (td) => {
        fn_print(`hfnum.NotNumber(${ td }): ${ hfnum.NotNumber(td) }`);
    };
    fn_NotNumber(3.7);
    fn_NotNumber(6.0);
    fn_NotNumber('94123');
    fn_NotNumber((Math.PI / 2) + '::');
    fn_print('\n');


    const fn_IsFloat = (td) => {
        if (typeof td !== 'number') return;
        fn_print(`hfnum.IsFloat(${ td }): ${ hfnum.IsFloat(td) }`);
    };
    fn_IsFloat(3.7);
    fn_IsFloat(6.0);
    fn_IsFloat(909.3);
    fn_IsFloat(Math.PI);
    fn_print('\n');


    const fn_IsMinus = (td) => {
        if (typeof td !== 'number') return;
        fn_print(`hfnum.IsMinus(${ td }): ${ hfnum.IsMinus(td) }`);
    };
    fn_IsMinus(-3.45);
    fn_IsMinus(943);
    fn_IsMinus(-Math.PI);
    fn_IsMinus(400 - 329);
    fn_print('\n');


    const fn_Random = (td) => {
        if (typeof td !== 'number') return;
        fn_print(`hfnum.Random(${ td }): ${ hfnum.Random(td) }`);
    };
    fn_Random(13);
    fn_Random(234);
    fn_Random(27);
    fn_Random(95);
    fn_print('\n');


    const fn_RandRange = (min, max) => {
        if (typeof min !== 'number') return;
        if (typeof max !== 'number') return;
        fn_print(`hfnum.RandRange(${ min }, ${ max }): ${ hfnum.RandRange(min, max) }`);
    };
    fn_RandRange(1, 5);
    fn_RandRange(17, 35);
    fn_RandRange(92, 182);
    fn_RandRange(7, 13);
    fn_print('\n');


    const fn_IsOdd = (td) => {
        if (typeof td !== 'number') return;
        fn_print(`hfnum.IsOdd(${ td }): ${ hfnum.IsOdd(td) }`);
    };
    fn_IsOdd(1, 5);
    fn_IsOdd(17, 35);
    fn_IsOdd(92, 182);
    fn_IsOdd(7, 13);
    fn_print('\n');


    const fn_IsEven = (td) => {
        if (typeof td !== 'number') return;
        fn_print(`hfnum.IsEven(${ td }): ${ hfnum.IsEven(td) }`);
    };
    fn_IsEven(5);
    fn_IsEven(17);
    fn_IsEven(182);
    fn_IsEven(93);
    fn_print('}}');
    fn_print('\n');
    fn_print('\n');
};
btns[1].addEventListener('click', fn_clh1);
fn_clh1(null);
//#endregion }}


//#region {{~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  hfstr
const fn_clh2 = (te) => {
    fn_print('{{----------  hfstr');

    const fn_IsStr = (ts) => {
        fn_print(`hfstr.IsStr(${ ts }): ${ hfstr.IsStr(ts) }`);
    };
    fn_IsStr(true);
    fn_IsStr('6.0');
    fn_IsStr('jhb');
    fn_IsStr(Math.PI);
    fn_print('\n');


    const fn_GetLastNum = (ts) => {
        fn_print(`hfstr.GetLastNum(${ ts }): ${ hfstr.GetLastNum(ts) }`);
    };
    fn_GetLastNum('name_1');
    fn_GetLastNum('pook_061');
    fn_GetLastNum('inoff_792');
    fn_GetLastNum('name_9734');
    fn_print('\n');


    const fn_Str2Ab = (ts) => {
        fn_print(`hfstr.Str2Ab(${ ts }): ${ hfstr.Str2Ab(ts) }`);
    };
    fn_Str2Ab('정희범');
    fn_Str2Ab('박종명');
    fn_Str2Ab('임헌진');
    fn_Str2Ab('치치와몽이');
    fn_print('\n');


    const fn_Ab2Str = (ts) => {
        fn_print(`hfstr.Ab2Str(${ ts }): ${ hfstr.Ab2Str(ts) }`);
    };
    fn_Ab2Str(hfstr.Str2Ab('정희범'));
    fn_Ab2Str(hfstr.Str2Ab('박종명'));
    fn_Ab2Str(hfstr.Str2Ab('임헌진'));
    fn_Ab2Str(hfstr.Str2Ab('치치와몽이'));
    fn_print('}}');
    fn_print('\n');
    fn_print('\n');
};
btns[2].addEventListener('click', fn_clh2);
fn_clh2(null);
//#endregion }}


//#region {{~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  hfarr
const fn_clh3 = (te) => {
    fn_print('{{----------  hfarr');

    const fn_IsArr = (ta) => {
        fn_print(`hfarr.IsArr(${ ta }): ${ hfarr.IsArr(ta) }`);
    };
    fn_IsArr([0, 1, 2, 3]);
    fn_IsArr(Array.from('abcdefg'));
    fn_IsArr('jhb');
    fn_IsArr(337);
    fn_print('\n');


    const fn_IsContains = (ta, e) => {
        fn_print(`hfarr.IsContains(${ ta }, ${ e }): ${ hfarr.IsContains(ta, e) }`);
    };
    fn_IsContains([0, 1, 2, 3], 3);
    fn_IsContains(Array.from('abcdefg'), 'g');
    fn_IsContains([9, 8, 7], 2);
    fn_print('\n');


    const fn_Shuffle = (ta) => {
        const pv = `hfarr.Shuffle(${ ta })`;
        hfarr.Shuffle(ta);
        fn_print(`${ pv }: ${ ta }`);
    };
    fn_Shuffle([0, 1, 2, 3]);
    fn_Shuffle(Array.from('abcdefg'));
    fn_Shuffle(Array.from('pook61'));
    fn_print('\n');


    const fn_Copy = (ta) => {
        fn_print(`hfarr.Copy(${ ta }): ${ hfarr.Copy(ta) }`);
    };
    fn_Copy([0, 1, 2, 3]);
    fn_Copy(Array.from('abcdefg'));
    fn_Copy(Array.from('pook61'));
    fn_print('}}');
    fn_print('\n');
    fn_print('\n');
};
btns[3].addEventListener('click', fn_clh3);
fn_clh3(null);
//#endregion }}
