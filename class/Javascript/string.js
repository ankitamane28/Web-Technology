//string interpolution  
const str1="js";
console.log(str1);
console.log("hello"+str1)//this is old way
console.log(`hello my course name ${str1}`);//this is a good way string method properly use

const gamecount= new String("Javascript")//new is keyword create 

console.log(gamecount.length);//string length
console.log(gamecount[4]);//position
console.log(gamecount.toUpperCase());
console.log(gamecount.toLowerCase());
console.log(gamecount.charAt(3));
console.log(gamecount.indexOf("s"));

const fname = "  ankita  ";
console.log(fname);
console.log(fname.trim());
const str = "js"
console.log(str);

// string methods
console.log(str1.includes('a'));    //  true

console.log(str1.startsWith(' '));    //true

console.log(str1.endsWith(' '));    //true

console.log(str1.split('')); //[' ', 'a', 'n', 'k', 'i', 't', 'a', ' '] //split into array of characters

console.log(str1.replace('ankita','ARM')); //ankita = ARM

console.log(str1.slice(1,4));// substring = extracts the part of string from start index to end index-1

console.log(str1.substring(1,4)); //same as slice

console.log(str1.concat('mane')); // ankita mane

console.log(str1.repeat(3)); // ankita ankita ankita

console.log(str1.valueOf()); //returns the primitive value of the string object

console.log(str1.padStart(15,'*')); // ******* ankita

console.log(str1.padEnd(15,'*')); // ankita*******

console.log(str1.charCodeAt(2)); //unicode value of character at index 2 //97

console.log(String.fromCharCode(112,114,97,99,104,105)); //ankita //converts unicode values to characters

console.log(str1.localeCompare('ankita')); //0 => equal , -1 => str1 < ankita , 1 => str1 > ankita

console.log(str1.match('a')); // [ 'k', index: 3, input: ' ankita ', groups: undefined ]

console.log(str1.search('c')); //4 => index of first match

console.log(str1.lastIndexOf('a')); //5 => last occurrence of 'a'

console.log(str1.normalize()); // ankita  => returns the Unicode Normalization Form of a given string

console.log(str1.toString()); // ankita => returns string representation of object

console.log(str1.slice(-6,-3)); //ank => negative indices count from end of string

console.log(str1.substr(1,4)); //anki => extracts substring from start index with given length


