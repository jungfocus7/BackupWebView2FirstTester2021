'use strict';
const fs = require('node:fs');
const path = require('node:path');
const terser = require("terser");


const fn_jswork = async (fp) => {
    if ((fp === null) || (fp === undefined) || (fp === '')) return;
    if (fp.endsWith('.js') === false) return;

    const ifp = fp;
    const fnm = path.basename(ifp);
    const di = fnm.lastIndexOf('.js');
    const ofp = `./js/${fnm.substring(0, di)}.min.js`;
    const code = fs.readFileSync(ifp, {encoding: 'utf8', flag: 'r'});
    const res = await terser.minify(code, {format: {quote_style: 1, comments: false}});
    fs.writeFileSync(ofp, res.code, {encoding: 'utf8'});

    console.log(`# ${ifp} minified.`);
};


(async () => {
    await fn_jswork('./hbjs/hfCommon.js');
    await fn_jswork('./hbjs/hfCountTask.js');
    await fn_jswork('./hbjs/hfTween.js');
    await fn_jswork('./hbjs/hfWeich.js');
    await fn_jswork('./js/Root.js');

    console.log('# end all.');
})();


