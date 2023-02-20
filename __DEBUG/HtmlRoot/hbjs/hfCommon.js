//======================================================================
// # hfnum: 넘버 관련 모듈
//======================================================================
/**
 * 넘버가 맞는지 확인
 * @param {number} tv
 * @returns boolean
 */
const IsNumber = (tv) => {
    return typeof tv === 'number';
};


/**
 * 넘버가 아닌지 확인
 * @param {number} tv
 * @returns boolean
 */
const NotNumber = (tv) => {
    return typeof tv !== 'number';
};


/**
 * 넘버가 실수인지 확인
 * @param {number} tv
 * @returns boolean
 */
const IsFloat = (tv) => {
    return (tv % 1) !== 0;
};


/**
 * 넘버가 음수인지 확인
 * @param {number} tv
 * @returns boolean
 */
const IsMinus = (tv) => {
    return tv < 0;
};


/**
 * 난수 만들기 0~n
 * @param {number} tv
 * @returns number
 */
const Random = (tv) => {
    return Math.round(Math.random() * (tv - 1));
};


/**
 * 난수 만들기 min~max
 * @param {number} min
 * @param {number} max
 * @returns number
 */
const RandRange = (min, max) => {
    return min + Math.round(Math.random() * (max - min));
};


/**
 * 넘버가 홀수인지 확인
 * @param {number} tv
 * @returns boolean
 */
const IsOdd = (tv) => {
    return (tv % 2) > 0;
};


/**
 * 넘버가 짝수인지 확인
 * @param {number} tv
 * @returns boolean
 */
const IsEven = (tv) => {
    return (tv % 2) === 0;
};



export const hfnum = Object.seal({
    IsNumber,
    NotNumber,
    IsFloat,
    IsMinus,
    Random,
    RandRange,
    IsOdd,
    IsEven
});
//======================================================================




//======================================================================
// # hfstr: 문자열 관련 모듈
//======================================================================
/**
 * 문자열 유효성 확인
 * @param {string} str
 * @returns boolean
 */
const IsStr = (str) => {
    if (typeof str === 'string')
        return str.trim() !== '';
    else
        return false;
};


/**
 * 이름에서 마지막 번호 확인
 * @param {string} str
 * @param {string} token
 * @returns number
 */
const GetLastNum = (str, token = '_') => {
    const ti = str.lastIndexOf(token) + 1;
    return ~~str.substring(ti);
};


/**
 * 문자열 >> ArrayBuffer 변환
 * @param {string} str
 * @returns Uint16Array
 */
const Str2Ab = (str) => {
    const l = str.length;
    let tab = new Uint16Array(new ArrayBuffer(l * 2));
    for (let i = 0; i < l; i++) {
        tab[i] = str.charCodeAt(i);
    }
    return tab;
};


/**
 * ArrayBuffer >> 문자열 변환
 * @param {Uint16Array} ab
 * @returns string
 */
const Ab2Str = (ab) => {
    return String.fromCharCode.apply(null, ab);
};



export const hfstr = Object.seal({
    IsStr,
    GetLastNum,
    Str2Ab,
    Ab2Str
});
//======================================================================




//======================================================================
// # hfarr: 배열 관련 모듈
//======================================================================
/**
 * 배열객체 유효성 확인
 * @param {array} arr
 * @returns boolean
 */
const IsArr = (arr) => {
    return Array.isArray(arr) && (arr.length > 0);
    // if (!Array.isArray(tarr)) return false;
    // return (tarr !== null) && (tarr.length > 0);
};


/**
 * 배열에 요소 확인
 * @param {array} arr
 * @param {temp object} te
 * @returns boolean
 */
const IsContains = (arr, te) => {
    if (IsArr(arr) === false) return false;

    let tb = false;
    const l = arr.length
    for (let i = 0; i < l; i++) {
        if (arr[i] === te) {
            tb = true;
            break;
        }
    }
    return tb;
};


/**
 * 배열 섞기
 * @param {array} arr
 * @returns void
 */
const Shuffle = (arr) => {
    if (IsArr(arr) === false) return;

    const l = arr.length;
    for (let i = 0; i < l; i++) {
        let te = arr[i];
        let ti = hfnum.RandRange(0, l - 1);
        arr[i] = arr[ti];
        arr[ti] = te;
    }
};


/**
 * 배열 복사
 * @param {array} arr
 * @returns array
 */
const Copy = (arr) => {
    if (IsArr(arr) === false) return null;
    return arr.slice();
};



export const hfarr = Object.seal({
    IsArr,
    IsContains,
    Shuffle,
    Copy
});
//======================================================================


