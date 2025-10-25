import { hfNumberRanger } from "../hbjs/hfNumberRanger.js";
import { tam, fn_print, btns } from "./SubCom.js";


const _nbrg = new hfNumberRanger(31, 985);
fn_print(`${_nbrg.toString()}\n`);

tam.addEventListener('keydown', (te) => {
    const key = te.key;

    let br = false;
    if (key === 'ArrowUp') {
        _nbrg.add_now(-32/9.2);
        br = true;
    } else if (key === 'ArrowDown') {
        _nbrg.add_now(32/9.2);
        br = true;
    }

    if (br) {
        fn_print(`${_nbrg.toString()}\n`);
    }
});


btns[1].addEventListener('click', (te) => {
});

btns[2].addEventListener('click', (te) => {
});

btns[3].addEventListener('click', (te) => {
});
