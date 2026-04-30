let myDate = new Date()
console.log(myDate); //2026-01-23T05:14:25.686Z
console.log(myDate.toString()); //
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof myDate);

console.log(myDate.getDate()); //23
console.log(myDate.getMonth()); //0 =>jan
console.log(myDate.getFullYear());//2026
console.log(myDate.getUTCDate()); //23
console.log(myDate.getDay()); //5 => friday
console.log(myDate.getUTCDay()); //5
let timeStamp = Date.now()
console.log(timeStamp);
console.log(Date.now()); //milliseconds
console.log(Date.now()/1000); //seconds

console.log(myCreatedNewDate.getTime());
console.log();

console.log(Math.floor(Date.now()/1000));

console.log();

let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getUTCDate());
console.log();

console.log(newDate.toLocaleString('default',{weekday : "long"}));