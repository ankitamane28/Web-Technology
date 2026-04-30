let score = "22";  // string cannot convert into number
let score_bool = true;
let score_null = null;
let score_undefine = undefined;
console.log(typeof(score));
console.log(typeof(score_bool));
console.log(typeof(score_null));
console.log(typeof(score_undefine));


let a = "abc";
let a_convert = Number(a);
console.log(a);
console.log((a_convert));

let b = 30;
let b_convert =String(b);
console.log(b);
console.log(typeof(b_convert));

let abc = "a";
let convert =String(abc);
console.log(convert); 


console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)

let str = "Hello";
let str2 = "Ankita";
console.log(str+' '+str2);

//convrsion   js only automatically convert string to number in arithmatic operation
console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(1+3+"2");
console.log((3+4)*5%3);

//note = javaScript automatically converts string to number in arithematical operations


//Conversions for common datatypes 
// String
console.log("String conversions");
console.log("Number('123')", Number('123'));
console.log("Number('') ", Number('')); // 0
console.log("Boolean('')", Boolean(''));
console.log("String(123)", String(123));

// Number
console.log("Number conversions");
console.log("String(0)", String(0));
console.log("Boolean(0)", Boolean(0));
console.log("Boolean(NaN)", Boolean(NaN));

// Boolean
console.log("Boolean conversions");
console.log("Number(true)", Number(true)); // 1
console.log("Number(false)", Number(false)); // 0
console.log("String(false)", String(false));

// null / undefined
console.log("null / undefined");
console.log("Number(null) ", Number(null)); // 0
console.log("String(null) ", String(null)); // 'null'
console.log("Boolean(null) ", Boolean(null)); // false
console.log("Number(undefined) ", Number(undefined)); // NaN
console.log("String(undefined)", String(undefined)); // 'undefined'
console.log("Boolean(undefined)", Boolean(undefined)); // false

// Array
console.log("Array conversions ");
console.log("String([1,2,3]) ", String([1,2,3])); // '1,2,3'
console.log("Number([42]) ", Number([42])); // 42 (single numeric element)
console.log("Number([1,2]) ", Number([1,2])); // NaN
console.log("Boolean([]) ", Boolean([])); // true (empty array is truthy)

// Object
console.log("Object conversions");
console.log("String({a:1}) ", String({a:1})); // '[object Object]'
console.log("Number({}) ", Number({})); // NaN
console.log("Boolean({})", Boolean({})); // true

// BigInt
console.log("BigInt conversions");
console.log("String(10n)", String(10n)); // '10'
console.log("Number(10n)", Number(10n)); // 10 (may lose precision)
console.log("BigInt('123')", BigInt('123'));

// Symbol
console.log("Symbol conversions");
console.log("String(Symbol('s'))", String(Symbol('s'))); // 'Symbol(s)'
try { console.log('Number(Symbol())', Number(Symbol())); } catch (e) { console.log('Number(Symbol()) ->', e.message); }
console.log("Boolean(Symbol())", Boolean(Symbol())); // true

// Function
console.log("Function conversions");
console.log("String(function f(){}) ", String(function f(){}));
console.log("Number(function(){}) ", Number(function(){})); // NaN
console.log("Boolean(function(){}) ", Boolean(function(){})); // true

// Date
console.log("Date conversions");
const d = new Date('1970-01-01T00:00:00Z');
console.log("Number(d) ", Number(d)); // 0 (timestamp)
console.log("String(d)", String(d));
console.log("Boolean(d)", Boolean(d)); // true

// RegExp
console.log("RegExp conversions");
console.log("String(/a/) ", String(/a/));
console.log("Number(/a/) ", Number(/a/)); // NaN
console.log("Boolean(/a/) ", Boolean(/a/)); // true

// Notes:
// - Arrays/objects use their `toString` / `valueOf` when coerced to primitives.
// - Symbols cannot be converted to Number or implicitly to String (will throw),
//   but `String(symbol)` is allowed.
// - Use explicit conversions (`Number()`, `String()`, `Boolean()`) for clarity.


let num = 10
let num_to_str = String(num)
console.log(typeof(num))
console.log(num_to_str)
console.log(typeof(num_to_str))

// do this for all datatypes