//1.conversion operator
//1.string to Number
let n = "10";
let s = Number(n);
console.log(typeof(n));
console.log(typeof(s));


//2.Number to String
let n1 = 200;
let s1 = String(n1);
console.log(typeof(n1));
console.log(typeof(s1));

//3.boolean
let n2 = 0;
let b1 = Boolean(n2);
console.log(b1);
console.log(typeof(b1));

//4.boolean to number
let bool = true;
let numb = Number(bool);
console.log(numb);
console.log(typeof(bool));

//5.string to boolean
let st = "Ankita";
let bo = Boolean(st);
console.log(bo);
console.log(typeof(bo));

//6.boolean to string
let boole = false;
let stri = String(boole);
console.log(stri);
console.log(typeof(stri));

//2. Aritmetic operators
console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(2%2);

//3.String addition
let str1 = "Hello";
let name = " Ankita";
console.log(str1 + name);

// IMP note: JavaScript automatically converts string to number in arithmetic operations (type coercion)

let num = "10";
console.log(num + 5);   // string concatenation
console.log(Number(num) + 5); // proper conversion

//5. Increment operator
let x = 5;
console.log(++x); 
console.log(x++); 
console.log(x);   

//6. Comparison Operators
console.log(5 == "5");  
console.log(5 === "5");
console.log(5 > 3);

//7. null vs undefined
let a ;
console.log(a);
console.log(typeof(a));
// undefined = Here variable a is created but no value is assigned, so it becomes undefined.
let b = null;
console.log(b)
console.log(typeof(b));
// null = we manually set empty value

//8. Math.random()
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
//Math.floor(Math.random() * (max - min + 1)) + min


//FUNCTION ACTIVITY
//1. Function Deep Study
// 1) Function Declaration (Creating Function Name)

// Meaning:
// When we write function keyword with function name → it is called function declaration.
function greet() {
}
// 2) Function Definition (Writing Code inside function)
// Meaning:
// The code written inside { } is the function definition (logic/work of function).
function greet() {
  console.log("Hello Ankita");
}
// 3) Function Calling (Using the function)

// Meaning:
// To run the function code, we call it using ().
greet();

//2. String Methods
//check all methods/function
//1.toUpperCase()
let fname = "ankita";
console.log(fname.toUpperCase());

//2.slice()
let str = "JavaScript";
console.log(str.slice(0, 4));

//3.repeat()
let word = "Hi ";
console.log(word.repeat(3));

//4.include()
let msg = "I love JavaScript";
console.log(msg.includes("love"));

//5.trim()
let text = "   Hello World   ";
console.log(text.trim());

//6.substring()
let lang = "Programming";
console.log(lang.substring(0, 7));

//7.stratswith() and ensdswith()
let file = "photo.jpg";
console.log(file.startsWith("photo"));

console.log(file.endsWith(".jpg"));

//8.replace
let sentence = "I like tea";
console.log(sentence.replace("tea", "coffee"));

let myArr = [10, 20, 30, 40, 50, 60];

console.log(myArr.slice(2, 4));

let s_text = "Hello World";
console.log(s_text.split());

//live time

function showTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
}

setInterval(showTime, 1000);

//DOM

document.getElementById("images").addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentNode.remove();
    }
});

//Async Await 
//1. Guess Number Game
let no = Math.floor(Math.random()*10);

let guess = prompt("Guess number (0-9)");

if(guess == num) console.log("Correct!");
else console.log("Wrong, number was " + num);

//2. Blocking vs Non-blocking
//Blocking
for(let i=0;i<5;i++){
    console.log(i);
}
//unblocking
setTimeout(()=>console.log("Async"),2000);
console.log("Sync");

// 3. Real-life Examples
// Sync - Standing in queue
// Async -Food delivery orde

//4.. Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data));

//PROMISES
//1.	Why promises are better than callback
// Avoid callback hell
// Better readability
// Error handling with .catch()
//2.	Promise 4 examples
//1.
let promise1 = new Promise((resolve, reject) => {
    resolve("Success!");
});

promise1.then(result => console.log(result));

//2.
let promise2 = new Promise((resolve, reject) => {
    reject("Error occurred!");
});

promise2
  .then(res => console.log(res))
  .catch(err => console.log(err));

//3.
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded after 2 sec");
    }, 2000);
});

promise3.then(res => console.log(res));

//4.
let promise4 = new Promise((resolve, reject) => {
    resolve(10);
});

promise4
  .then(num => num * 2)
  .then(num => num + 5)
  .then(result => console.log(result)); // 25