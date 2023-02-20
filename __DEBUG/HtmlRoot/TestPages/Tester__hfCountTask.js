import { hfCountTask } from "../hbjs/hfCountTask.js";


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


const ct = new hfCountTask(35, 55, 3);
fn_print(`ct.CountStart: ${ ct.CountStart };`);
fn_print(`ct.CountEnd: ${ ct.CountEnd };`);
fn_print(`ct.PlusValue: ${ ct.PlusValue };`);
fn_print(`ct.Count: ${ ct.Count };`);
fn_print('\n');


const btns = document.querySelectorAll('button.c_bt');
btns[0].addEventListener('click', (te) => {
    fn_print(null);
});

btns[1].addEventListener('click', (te) => {
    ct.Prev();
    fn_print(`ct.CountStart: ${ ct.CountStart };`);
    fn_print(`ct.CountEnd: ${ ct.CountEnd };`);
    fn_print(`ct.PlusValue: ${ ct.PlusValue };`);
    fn_print(`ct.Count: ${ ct.Count };`);
    fn_print('\n');
});

btns[2].addEventListener('click', (te) => {
    ct.Next();
    fn_print(`ct.CountStart: ${ ct.CountStart };`);
    fn_print(`ct.CountEnd: ${ ct.CountEnd };`);
    fn_print(`ct.PlusValue: ${ ct.PlusValue };`);
    fn_print(`ct.Count: ${ ct.Count };`);
    fn_print('\n');
});

btns[3].addEventListener('click', (te) => {
    ct.Reset();
    fn_print(`ct.CountStart: ${ ct.CountStart };`);
    fn_print(`ct.CountEnd: ${ ct.CountEnd };`);
    fn_print(`ct.PlusValue: ${ ct.PlusValue };`);
    fn_print(`ct.Count: ${ ct.Count };`);
    fn_print('\n');
});


