import { hfCountTask } from "../js/hfCountTask.min.js";
import { fn_print, btns } from "./SubCom.js";



const ct = new hfCountTask(35, 55, 3);
fn_print(`ct.CountStart: ${ ct.CountStart };`);
fn_print(`ct.CountEnd: ${ ct.CountEnd };`);
fn_print(`ct.PlusValue: ${ ct.PlusValue };`);
fn_print(`ct.Count: ${ ct.Count };`);
fn_print('\n');


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


