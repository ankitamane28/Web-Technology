let myArr = [0,1,2,3,4, 'ankita']
console.log(myArr);

const arr = new Array(0,1,2,3);
console.log(arr);

console.log(arr[1]);

//array methods
arr.push(4)
console.log(arr);

console.log(arr.pop()); //remove last element
console.log(arr);

arr.unshift(9)
console.log(arr); //it shift all element and add element at first position

arr.shift() //remove first element
console.log(arr);

console.log(arr.includes(9)); //check the element exist or not 

console.log(arr.indexOf(3))

console.log(typeof arr);

const newArr = arr.join() // join method will return string output
console.log(newArr);

console.log(typeof newArr); //string

