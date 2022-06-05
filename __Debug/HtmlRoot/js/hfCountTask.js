//======================================================================
// # hfCountTask: 카운트 연산하기
//======================================================================
((global, name) => { 'use strict';
    if (typeof global[name] !== 'undefined') return;


    global[name] = class {
        #countStart = 0;
        #countEnd = 0;
        #count = 0;
        #plusValue = 0;

        constructor(countStart, countEnd, plusValue = 1) {
            this.#countStart = countStart;
            this.#countEnd = countEnd;
            this.#count = countStart;
            this.#plusValue = plusValue;
        }


        get countStart() {
            return this.#countStart;
        }

        get countEnd() {
            return this.#countEnd;
        }

        get count() {
            return this.#count;
        }

        get plusValue() {
            return this.#plusValue;
        }


        prev() {
            const tc = this.#count - this.#plusValue;
            if (tc < this.#countStart)
                return false;
            else {
                this.#count = tc;
                return true;
            }
        }

        next() {
            const tc = this.#count + this.#plusValue;
            if (tc > this.#countEnd)
                return false;
            else {
                this.#count = tc;
                return true;
            }
        }


        reset() {
            this.#count = this.#countStart;
        }


    };

})(window, 'hfCountTask');
//======================================================================





