let superheros = ['thor', 'ironman', 'spiderman', 'batman']

let a = ['krish', 'shaktiman', 'cpAmerica']

//superheros.push(a)
//console.log(superheros);

console.log(superheros[3]);

console.log(superheros[2][2]); //spiderman => i

console.log(superheros.concat(a)); //add element in existing arr

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr = arr1.flat(Infinity) // all elements in the only one array
console.log(realArr);

const arr2 = arr1.flat(1) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ] 
console.log(arr2);

console.log(Array.isArray('ankita')); //false  
// used for datascripting (ask question to array)
console.log(Array.isArray([1,2])); //true

console.log(Array.from('ankita')); //[ 'a', 'n', 'k', 'i', 't', 'a' ]
//used convert to array

console.log(Array.from({name: 'ankita'})); //[]

let score = 100;
let score2 = 200;
let score3 = 300; 
console.log(Array.of(score,score2,score3)); //[ 100, 200, 300 ]

let ar = new Array(1,2,3,4,5)
console.log(ar)

//[[Prototype]] : Array(0)
// at : ƒ at()
// concat : ƒ concat()
// constructor : ƒ Array()
// copyWithin : ƒ copyWithin()
// entries : ƒ entries()
// every : ƒ every()
// fill : ƒ fill()
// filter : ƒ filter()
// find : ƒ find()
// findIndex : ƒ findIndex()
// findLast : ƒ findLast()
// findLastIndex : ƒ findLastIndex()
// flat : ƒ flat()
// flatMap : ƒ flatMap()
// forEach : ƒ forEach()
// includes : ƒ includes()
// indexOf : ƒ indexOf()
// join : ƒ join()
// keys : ƒ keys()
// lastIndexOf : ƒ lastIndexOf()
// length : 0
// map : ƒ map()
// pop : ƒ pop()
// push : ƒ push()
// reduce : ƒ reduce()
// reduceRight : ƒ reduceRight()
// reverse : ƒ reverse()
// shift : ƒ shift()
// slice : ƒ slice()
// some : ƒ some()
// sort : ƒ sort()
// splice : ƒ splice()
// toLocaleString : ƒ toLocaleString()
// toReversed : ƒ toReversed()
// toSorted : ƒ toSorted()
// toSpliced : ƒ toSpliced()
// toString : ƒ toString()
// unshift : ƒ unshift()
// values : ƒ values()
// with : ƒ with()
// Symbol(Symbol.iterator) : ƒ values()
// Symbol(Symbol.unscopables) : {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
// [[Prototype]] : Object

console.log("=== Array Methods Examples ===\n")

// 1. at() - Access element by index (including negative indices)
const nums = [10, 20, 30, 40, 50]
console.log("at(0):", nums.at(0)) // 10
console.log("at(-1):", nums.at(-1)) // 50 (last element)
console.log("at(-2):", nums.at(-2)) // 40

// 2. concat() - Combine arrays
const arr_concat = [1, 2].concat([3, 4], [5, 6])
console.log("concat:", arr_concat) // [1, 2, 3, 4, 5, 6]

// 3. copyWithin() - Copy part of array to another location
const arr_copy = [1, 2, 3, 4, 5]
arr_copy.copyWithin(0, 3, 5)
console.log("copyWithin:", arr_copy) // [4, 5, 3, 4, 5]

// 4. entries() - Get iterator of [index, element] pairs
const arr_entries = ['a', 'b', 'c']
for (const [index, value] of arr_entries.entries()) {
  console.log(`entries - ${index}:`, value)
}

// 5. every() - Check if all elements pass a test
const arr_every = [2, 4, 6, 8]
console.log("every(num > 0):", arr_every.every(num => num > 0)) // true

// 6. fill() - Fill array with a value
const arr_fill = [1, 2, 3, 4, 5]
arr_fill.fill(0, 2, 4)
console.log("fill:", arr_fill) // [1, 2, 0, 0, 5]

// 7. filter() - Create new array with elements that pass test
const arr_filter = [1, 2, 3, 4, 5]
const filtered = arr_filter.filter(num => num > 2)
console.log("filter(num > 2):", filtered) // [3, 4, 5]

// 8. find() - Return first element that passes test
const arr_find = [1, 2, 3, 4, 5]
const found = arr_find.find(num => num > 3)
console.log("find(num > 3):", found) // 4

// 9. findIndex() - Return index of first element that passes test
const arr_findIndex = [1, 2, 3, 4, 5]
const foundIndex = arr_findIndex.findIndex(num => num > 3)
console.log("findIndex(num > 3):", foundIndex) // 3

// 10. findLast() - Find last element that passes test
const arr_findLast = [1, 2, 3, 4, 5]
const foundLast = arr_findLast.findLast(num => num < 4)
console.log("findLast(num < 4):", foundLast) // 3

// 11. findLastIndex() - Find index of last element that passes test
const arr_findLastIndex = [1, 2, 3, 4, 5]
const foundLastIndex = arr_findLastIndex.findLastIndex(num => num < 4)
console.log("findLastIndex(num < 4):", foundLastIndex) // 2

// 12. flat() - Flatten nested array
const arr_flat = [1, [2, 3], [4, [5, 6]]]
console.log("flat(1):", arr_flat.flat(1)) // [1, 2, 3, 4, [5, 6]]
console.log("flat(2):", arr_flat.flat(2)) // [1, 2, 3, 4, 5, 6]

// 13. flatMap() - Map then flatten one level
const arr_flatMap = [1, 2, 3]
const result = arr_flatMap.flatMap(x => [x, x * 2])
console.log("flatMap:", result) // [1, 2, 2, 4, 3, 6]

// 14. forEach() - Execute function for each element
const arr_forEach = ['a', 'b', 'c']
arr_forEach.forEach((val, idx) => console.log(`forEach - ${idx}:`, val))

// 15. includes() - Check if array contains a value
const arr_includes = [1, 2, 3, 4, 5]
console.log("includes(3):", arr_includes.includes(3)) // true
console.log("includes(10):", arr_includes.includes(10)) // false

// 16. indexOf() - Find index of element
const arr_indexOf = [10, 20, 30, 20, 40]
console.log("indexOf(20):", arr_indexOf.indexOf(20)) // 1
console.log("indexOf(20, 2):", arr_indexOf.indexOf(20, 2)) // 3

// 17. join() - Join array elements into string
const arr_join = ['hello', 'world', 'javascript']
console.log("join('-'):", arr_join.join('-')) // "hello-world-javascript"

// 18. keys() - Get iterator of array indices
const arr_keys = ['x', 'y', 'z']
for (const key of arr_keys.keys()) {
  console.log("keys:", key)
}

// 19. lastIndexOf() - Find last index of element
const arr_lastIndexOf = [1, 2, 3, 2, 1]
console.log("lastIndexOf(2):", arr_lastIndexOf.lastIndexOf(2)) // 3

// 20. map() - Transform each element
const arr_map = [1, 2, 3, 4]
const mapped = arr_map.map(x => x * 2)
console.log("map(x * 2):", mapped) // [2, 4, 6, 8]

// 21. pop() - Remove and return last element
const arr_pop = [1, 2, 3]
const popped = arr_pop.pop()
console.log("pop:", popped, "remaining:", arr_pop) // 3, [1, 2]

// 22. push() - Add element to end
const arr_push = [1, 2]
arr_push.push(3, 4)
console.log("after push:", arr_push) // [1, 2, 3, 4]

// 23. reduce() - Reduce array to single value
const arr_reduce = [1, 2, 3, 4, 5]
const sum = arr_reduce.reduce((acc, val) => acc + val, 0)
console.log("reduce(sum):", sum) // 15

// 24. reduceRight() - Reduce from right to left
const arr_reduceRight = [1, 2, 3, 4]
const result_rr = arr_reduceRight.reduceRight((acc, val) => acc + val, 0)
console.log("reduceRight:", result_rr) // 10

// 25. reverse() - Reverse array in place
const arr_reverse = [1, 2, 3, 4]
arr_reverse.reverse()
console.log("reverse:", arr_reverse) // [4, 3, 2, 1]

// 26. shift() - Remove and return first element
const arr_shift = [1, 2, 3]
const shifted = arr_shift.shift()
console.log("shift:", shifted, "remaining:", arr_shift) // 1, [2, 3]

// 27. slice() - Extract portion of array
const arr_slice = [1, 2, 3, 4, 5]
const sliced = arr_slice.slice(1, 4)
console.log("slice(1, 4):", sliced) // [2, 3, 4]

// 28. some() - Check if any element passes test
const arr_some = [1, 2, 3, 4, 5]
console.log("some(x > 4):", arr_some.some(x => x > 4)) // true

// 29. sort() - Sort array
const arr_sort = [3, 1, 4, 1, 5, 9]
arr_sort.sort((a, b) => a - b)
console.log("sort:", arr_sort) // [1, 1, 3, 4, 5, 9]

// 30. splice() - Add/remove elements
const arr_splice = [1, 2, 3, 4, 5]
const removed = arr_splice.splice(2, 2, 'a', 'b')
console.log("removed:", removed, "remaining:", arr_splice) // [3, 4], [1, 2, 'a', 'b', 5]

// 31. toLocaleString() - Convert to locale string
const arr_toLocaleString = [1234.5, new Date('2026-01-29')]
console.log("toLocaleString:", arr_toLocaleString.toLocaleString())

// 32. toReversed() - Return reversed copy (doesn't modify)
const arr_toReversed = [1, 2, 3, 4]
const reversedCopy = arr_toReversed.toReversed()
console.log("toReversed:", reversedCopy, "original:", arr_toReversed) // [4,3,2,1], [1,2,3,4]

// 33. toSorted() - Return sorted copy (doesn't modify)
const arr_toSorted = [3, 1, 4, 1, 5]
const sortedCopy = arr_toSorted.toSorted((a, b) => a - b)
console.log("toSorted:", sortedCopy, "original:", arr_toSorted) // [1,1,3,4,5], [3,1,4,1,5]

// 34. toSpliced() - Return array with spliced changes (doesn't modify)
const arr_toSpliced = [1, 2, 3, 4, 5]
const splicedCopy = arr_toSpliced.toSpliced(1, 2, 'a', 'b')
console.log("toSpliced:", splicedCopy, "original:", arr_toSpliced) // [1,'a','b',4,5], [1,2,3,4,5]

// 35. toString() - Convert array to string
const arr_toString = [1, 2, 3, 'hello']
console.log("toString:", arr_toString.toString()) // "1,2,3,hello"

// 36. unshift() - Add element to beginning
const arr_unshift = [2, 3]
arr_unshift.unshift(0, 1)
console.log("after unshift:", arr_unshift) // [0, 1, 2, 3]

// 37. values() - Get iterator of array values
const arr_values = ['a', 'b', 'c']
for (const value of arr_values.values()) {
  console.log("values:", value)
}

// 38. with() - Return array with element at index changed
const arr_with = [1, 2, 3, 4, 5]
const withChanged = arr_with.with(2, 99)
console.log("with(2, 99):", withChanged, "original:", arr_with) // [1,2,99,4,5], [1,2,3,4,5]