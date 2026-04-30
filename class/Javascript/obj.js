myObj.email = "ankitamane@gmail.com";
console.log(myObj.email);

// Object.freeze(myObj); // prevents further changes 

// Adding method
myObj.greeting = function () {
    return "Hello JS user";
};

// Calling method
console.log(myObj.greeting());

// -------------------------------
// Symbol example

const myObj2 = {
    [mySymbol]: "Ankita"
};

console.log(myObj2);
console.log(typeof myObj2); // object

// Correct way to access symbol value
console.log(myObj2[mySymbol]);
console.log(typeof myObj2[mySymbol]);
