let my_name = "Saint Tarila-Brisbe" ;
const courses = [];
let course1 = "HTML";
let course2 = "CSS" ;
let course3 = "JavaScript" ;
let course4 = "Go" ;
courses.push (course1, course2, course3, course4);
console.log ("My name is " + my_name);
console.log (" My courses are " + course1 + " , " + course2 + " , " + course3 + " and " + course4);
console.log (" I'm offering four (4) courses so I'll display all even numbers from 1 to 200. Here they are : ");
const numbers = [];
for (let num = 1; num <= 200; num++){
  if (num % 2 === 0){
    numbers.push (num)
    }
  }
console.log (numbers + ", ");