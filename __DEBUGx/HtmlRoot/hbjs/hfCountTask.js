//======================================================================
// # hfCountTask: 카운트 연산하기
//======================================================================
class hfCountTask {
    constructor(countStart = 1, countEnd = 10, plusValue = 1) {
        this.#countStart = countStart;
        this.#countEnd = countEnd;
        this.#plusValue = plusValue;
        this.#count = countStart;
    }

    #countStart = 0;
    get CountStart() {
        return this.#countStart;
    }

    #countEnd = 0;
    get CountEnd() {
        return this.#countEnd;
    }

    #plusValue = 0;
    get PlusValue() {
        return this.#plusValue;
    }

    #count = 0;
    get Count() {
        return this.#count;
    }


    Prev() {
        const tc = this.#count - this.#plusValue;
        if (tc < this.#countStart)
            return false;
        else {
            this.#count = tc;
            return true;
        }
    }

    Next() {
        const tc = this.#count + this.#plusValue;
        if (tc > this.#countEnd)
            return false;
        else {
            this.#count = tc;
            return true;
        }
    }


    Reset() {
        this.#count = this.#countStart;
    }

    ResetEnd() {
        this.#count = this.#countEnd;
    }
}

export { hfCountTask };
//======================================================================





