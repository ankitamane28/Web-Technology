let anotherid = Symbol("1234@");
console.log(anotherid)

let id = 123;
console.log(id==anotherid)
//array
const a = [1,2,3,4];

//object
const myobject={
    fname :"Ankita",
    age : 20,
    email : "@gmail.com"

};
console.log(myobject);


//function

let afunc = function()
{
    console.log("js")
}
console.log(afunc);

//memory there are two types of memory stack and  heap  
//   stack is used primitive datatypes  
//heap is non primitive

//stack
let myYoutubeName="ARM";
newYoutubechannel = myYoutubeName;
console.log(myYoutubeName);
console.log(newYoutubechannel);
let newYoutubechannel="20";//primitive datatype store in stack when we assign one variable to another so changing one dose not affect another variable

//heap
let myobj={
    fname :"Ankita",
    age:20,
    id:123


}
let myobj2 = myobj;
myobj2.id=25;
console.log(myobj.id);
console.log(myobj2.id)
//object are store in heap memory when we assign  one variable to another variable reference and copied not the value when we change 
//one object so both value chnage






