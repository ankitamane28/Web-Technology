//write code for arrow functions with 2 examples 
//write code for switch case in JS
//How to use truthy and falsy value in JS with examples 
//how to use ternary operator in JS
//write a code for howto use loops in array => while, do while, for, forEach, forIn, forOf
//diff between for in and for of loop
//how to use map and filter function in JS

console.log("Activity 1");

const addTwoNumbers = (n1, n2) => {
    return n1 + n2;
}
console.log(`addition of two numbers (7,2):  `+addTwoNumbers(7,2));

const divideTwoNumber = (n1, n2) => {
    return n1 / n2;
}
console.log(`divided of two numbers (4,2): `+divideTwoNumber(4,2));


console.log("Activity 2");

let grade = 'B';

switch(grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Poor");
        break;
    default:
        console.log("Fail");
}

console.log("Activity 3");

// Common falsy values: false, 0, '', null, undefined, NaN
 let name = "Ankita";
    let Age = 0;

    if (name) console.log("Name is present");   // string → truthy
    if (!Age) console.log("Age is zero");       // 0 → falsy

    let finalName = name || "Guest";
    console.log(finalName);


console.log("Activity 4");
let marks = 40;

console.log(marks >= 35 ? "Pass" : "Fail");

console.log("Activity 5");
let arr2 = [10, 20, 30];

        // 1. for loop
        // Used when index control is needed
        for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i]); // value using index
        }

        // 2. while loop
        // Runs while condition is true
        let i = 0;
        while (i < arr2.length) {
        console.log(arr2[i]);
        i++;
        }

        // 3. do-while loop
        // Runs at least once, then checks condition
        let j = 0;
        do {
        console.log(arr2[j]);
        j++;
        } while (j < arr2.length);

        // 4. for-of loop
        // Best for arrays → gives DIRECT VALUES
        for (let value of arr2) {
        console.log(value);
        }

        // 5. for-in loop
        // Gives INDEX (keys), mainly used for objects
        for (let index in arr2) {
        console.log(index, arr2[index]);
        }


console.log('Activity 6');
console.log('for-in returns indexes (or keys). for-of returns values (iterables).');


console.log('Activity 7');
 let nums = [1, 2, 3, 4, 5];

    // map()
    // Used to TRANSFORM each element
    // Returns a NEW array (does not change original)
    let squares = nums.map(n => n * n);
    console.log(squares); // [1, 4, 9, 16, 25]

    // filter()
    // Used to SELECT elements based on condition
    // Returns a NEW array with matching values
    let evenNums = nums.filter(n => n % 2 === 0);
    console.log(evenNums); // [2, 4]