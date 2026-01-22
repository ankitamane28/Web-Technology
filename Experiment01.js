document.writeln("Activity 1")

//display student details
let student_id = 74;
let student_name = "Ankita Mane";
let student_age = 20;
let branch = "CSE-AIML";
let email = "abc.com";

document.writeln("<br>PRN="+student_id,"<br>Name="+student_name,"<br>Age="+student_age,"<br>Branch="+branch,"<br>Email="+email);

document.writeln("<br>Activity 2")
//check even odd
let n=4
if(n%2==0)
   {  
      document.writeln("<br>"+n+"is even")
      console.log("<br>"+n+" is even ")
  }
else
   { 
      document.writeln("<br>"+n+"is odd ")
      console.log("<br>"+n+" is odd");
   }
 
document.writeln("<br>Activity 3")
// check pass or fail
let mark=50
let Grade
if(mark>=90)
   Grade="A+"
else if(mark>=80 && mark<90)
   Grade="A"
else if(mark>=70 && mark<80)
   Grade="B+"
else if(mark>=60 && mark<70)
   Grade="B"
else if(mark>=50 && mark<60)
   Grade="C"
else if(mark>=35 && mark<50)
   Grade="D"
else if(mark<=35)
   Grade="Fail"
document.writeln("<br>Grade for "+mark +":"+Grade);
console.log("Grade for "+mark +":"+Grade)
   

document.writeln("<br>Activity 4")
// display number
document.writeln("<br>1 to 10<br>")
console.log("1 to 10")
for(let i=0;i<10;i++)
   {
      document.writeln(+(i+1));
      console.log(i+1);
   }
   