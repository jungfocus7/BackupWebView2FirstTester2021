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
