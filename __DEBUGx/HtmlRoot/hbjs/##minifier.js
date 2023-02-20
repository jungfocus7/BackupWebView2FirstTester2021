const fs = require('fs');
const terser = require("terser");



const fn_jswork = async (fp) => {
    if ((fp === null) || (fp === undefined) || (fp === '')) return;
    if (fp.endsWith('.js') === false) return;
    const jsfp = fp;
    const di = jsfp.lastIndexOf('.js');
    const ofp = jsfp.substring(0, di) + '.min.js';
    const code = fs.readFileSync(jsfp, {encoding: 'utf8', flag: 'r'});
    const res = await terser.minify(code, {format: {quote_style: 1}});
    fs.writeFileSync(ofp, res.code, {encoding: 'utf8'});
    console.log(`# ${jsfp} minified.`);
};

// const fn_htmlwork = async (fp) => {
//     // html minify 는 나중에 하자.
// };


fn_jswork('./hbjs/hfCommon.js');
fn_jswork('./hbjs/hfCountTask.js');
fn_jswork('./hbjs/hfTween.js');
fn_jswork('./hbjs/hfWeich.js');
fn_jswork('./TestPages/SubCom.js');
fn_jswork('./TestPages/Tester__hfCommon.js');
fn_jswork('./TestPages/Tester__hfCountTask.js');
fn_jswork('./TestPages/Tester__hfTween.js');
fn_jswork('./TestPages/Tester__hfWeich.js');
fn_jswork('./Root.js');

console.log('# end all.');

