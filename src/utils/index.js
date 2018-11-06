/* tslint:disable no-bitwise */

// copy from mobx-todomvc
export function	uuid() {
	let uuid = '';

	for (let i = 0; i < 32; i++) {
		const random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		// eslint-disable-next-line
		uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
			.toString(16);
	}

	return uuid;
}

export function shuffle(array) {
	let m = array.length;
	let t;
	let i;

	// While there remain elements to shuffle
	while (m) {
		// Pick a remaining element...
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}


export function delay(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	})
}