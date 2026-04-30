let myNumber = new Number("100")
console.log(myNumber);
console.log(myNumber.toString().length);
console.log(myNumber.toFixed(2));

//when we build ecommerce website and precisions value is so long we can use toFixed method

let h = 1000000
console.log(h.toLocaleString('en-IN')); //10,00,000 for india currency
//by default us standard is used

console.log(Math)
console.log(Math.abs(-4)) //absolute value : when we take -ve value then it gives output as +ve value
console.log(Math.round(4.6))
console.log(Math.ceil(4.6)); //choose top value
console.log(Math.floor(4.6)); //choose lower value
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(6,7,8,9,10));

//Home activity: Math.random related code 
// Math.random examples and helpers
// - Math.random() returns a float x where 0 <= x < 1
console.log('Math.random() ->', Math.random()); // e.g. 0.374...

// random float in range [min, max)
function randomFloat(min, max) {
	return Math.random() * (max - min) + min;
}
console.log('randomFloat(0,5) ->', randomFloat(0, 5));

// random integer in range [min, max] inclusive
function randomInt(min, max) {
	const a = Math.ceil(min);
	const b = Math.floor(max);
	return Math.floor(Math.random() * (b - a + 1)) + a;
}
console.log('randomInt(0,9) ->', randomInt(0, 9));
console.log('randomInt(1,6) (dice) ->', randomInt(1, 6));

// pick a random element from an array
function pickRandom(array) {
	if (!array || array.length === 0) return undefined;
	return array[randomInt(0, array.length - 1)];
}
const colors = ['red', 'green', 'blue', 'yellow'];
console.log('pickRandom(colors) ->', pickRandom(colors));

// Fisher–Yates shuffle (in-place)
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
console.log('shuffle([1,2,3,4,5]) ->', shuffle([1, 2, 3, 4, 5]));

// small demo: generate 10 random integers between 1 and 100
const samples = Array.from({ length: 10 }, () => randomInt(1, 100));
console.log('10 random ints 1-100 ->', samples);

