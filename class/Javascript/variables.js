// difference between var, let and const in JavaScript

// In JavaScript, `var`, `let`, and `const` are all used to declare variables, but they have different characteristics and scopes.

// 1. `var`:
//    - Function-scoped: Variables declared with `var` are scoped to the function in which they are declared. If declared outside a function, they are globally scoped.
//    - Hoisting: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
//    - Can be re-declared and updated: You can declare the same variable multiple times using `var`, and you can also update its value.       
//     Example: 
//     var x = 10;
//     var x = 20; // re-declaration
//     x = 30; // update

// 2. `let`:
//    - Block-scoped: Variables declared with `let` are scoped to the block (enclosed by `{}`) in which they are declared.
//    - Hoisting: Variables declared with `let` are hoisted but not initialized. Accessing them before declaration results in a ReferenceError (temporal dead zone).
//    - Cannot be re-declared in the same scope: You cannot declare the same variable multiple times using `let`, but you can update its value.   
//     Example:
//     let y = 10;
//     // let y = 20; // Error: Identifier 'y' has already been declared
//     y = 30; // update

// 3. `const`:
//    - Block-scoped: Like `let`, variables declared with `const` are also block-scoped.
//    - Hoisting: Variables declared with `const` are hoisted but not initialized. Accessing them before declaration results in a ReferenceError (temporal dead zone).
//    - Cannot be re-declared or updated: You cannot declare the same variable multiple times using `const`, and you cannot update its value. However, if the variable is an object or array, you can modify its properties or elements.
//     Example:
//     const z = 10;
//     // const z = 20; // Error: Identifier 'z' has already been declared
//     // z = 30; // Error: Assignment to constant variable.
//     const arr = [1, 2, 3];
//     arr.push(4); // This is allowed

// In summary:
// - Use `var` for function-scoped variables (though it's generally recommended to avoid it in modern JavaScript).
// - Use `let` for block-scoped variables that may need to be updated.
// - Use `const` for block-scoped variables that should not be reassigned.

console.log("2>1  "+(2>1));
console.log("2>=1  "+(2>=1));
console.log("2<1  "+(2<1));
console.log("2<=1  "+(2<=1));
console.log("2==1  "+(2==1));
console.log("2!=1  "+(2!=1));
console.log("'2'>1  "+('2'>1));
console.log("'02'>1  "+('02'>1)); //not do this type of comparison
console.log("null>0  "+(null>0));
console.log("null==0  "+(null==0));
console.log("null>=0  "+(null>=0));
console.log("undefined==0  "+(undefined==0));
console.log("undefined>0  "+(undefined>0));
console.log("undefined<0  "+(undefined<0))
console.log("'2'===2  "+('2'===2)); //=== check values with datatypes

// types of data 
// Primitive Data Types:
// 1. Number: Represents both integer and floating-point numbers.
//    Example:
let num = 42;
let floatNum = 3.14;
// 2. String: Represents a sequence of characters enclosed in single or double quotes.
let str = "Hello, World!";
// 3. Boolean: Represents a logical entity that can have two values: true or false.
let isTrue = true;
let isFalse = false;    
// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let undef;
console.log(undef);
// 5. Null: Represents the intentional absence of any object value.
let emptyValue = null;
// 6. Symbol: Represents a unique and immutable primitive value, often used as object property keys.
let sym = Symbol('uniqueIdentifier');
// 7. BigInt: Represents integers with arbitrary precision, allowing for the representation of very large numbers.
let bigIntNum = BigInt(9007199254740991); 

// Non-Primitive Data Types:
// 1. Object: Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.
let obj = {
    name: "Alice",
    age: 30
};
// 2. Array: A special type of object used to store ordered collections of values.
let arr = [1, 2, 3, 4, 5];
// 3. Function: A block of reusable code that can be called with arguments to perform a specific task.
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Bob"));


// variables declaration
var a = 10; // function-scoped or globally-scoped
let b = 20; // block-scoped
const c = 30; // block-scoped and cannot be reassigned

// declare variables of different data types and check their types using typeof
let numberVar = 100;
let stringVar = "JavaScript";
let booleanVar = true;  
let undefinedVar;
let nullVar = null;
let symbolVar = Symbol('sym');
let bigIntVar = BigInt(12345678901234567890);
let objectVar = { key: "value" };
console.log(typeof numberVar); // "number"
console.log(typeof stringVar); // "string"
console.log(typeof booleanVar); // "boolean"
console.log(typeof undefinedVar); // "undefined"
console.log(typeof nullVar); // "object" (this is a known quirk in JavaScript)
console.log(typeof symbolVar); // "symbol"
console.log(typeof bigIntVar); // "bigint"
console.log(typeof objectVar); // "object"

// difference between null and undefined
// 1. Undefined:
//    - A variable is declared but not assigned a value.
//    - It indicates the absence of a value.    
let undefVar;
console.log(undefVar); // Output: undefined
console.log(typeof undefVar); // Output: "undefined"    
// 2. Null:
//    - It is an assignment value that represents no value or no object.
//    - It is explicitly set to indicate the absence of any object value.    
let nullVarExample = null;
console.log(nullVarExample); // Output: null
console.log(typeof nullVarExample); // Output: "object" (this is a known quirk in JavaScript)