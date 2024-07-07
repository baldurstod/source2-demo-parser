export const SOURCE1_MAGIC = 'HL2DEMO\0';
export const SOURCE2_MAGIC = 'PBDEMS2\0';

export class Source2Demo {
	#magic;

	set magic(magic) {
		switch (magic) {
			case SOURCE1_MAGIC:
			case SOURCE2_MAGIC:
				this.#magic = magic;
				break;
			default:
				throw new Error(`Unknown file magic ${magic}`);
				break;
		}
	}

	get magic() {
		return this.#magic;
	}

	isSource1() {
		return this.#magic == SOURCE1_MAGIC;
	}

	isSource2() {
		return this.#magic == SOURCE2_MAGIC;
	}

}
