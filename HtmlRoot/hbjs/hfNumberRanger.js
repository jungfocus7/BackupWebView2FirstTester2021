const hfNumberRanger = Object.freeze(class {
    /**
     * Number를 min, max, len 기준점으로 안전하게 관리하면서 사용
     * @param {number} min
     * @param {number} len
     */
    constructor(min = 0, len = 10) {
        this.#min = min;
        this.#len = (len < 1) ? 1 : len;
        this.#max = (this.#min - 1) + this.#len;
        this.#now = this.#min;
        Object.seal(this);
    }

    #min = 0;
    get min() {
        return this.#min;
    }

    #len = 0;
    get len() {
        return this.#len;
    }

    #max = 0;
    get max() {
        return this.#max;
    }

    #now = 0;
    get now() {
        return this.#now;
    }

    add_now(an = 0) {
		let tv = this.#now + an;
		if (tv < this.#min) {
			this.#now = this.#min;
		} else if (tv > this.#max) {
			this.#now = this.#max;
		} else {
			this.#now = tv;
		}
    }

    toString() {
        return `
min: ${this.#min}, len: ${this.#len}, max: ${this.#max}, now: ${this.#now}
        `.trim();
    }

});

export {
    hfNumberRanger
};

