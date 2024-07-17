
// Using a for loop
let numbers = [1, 2, 3, 4, 5];
let results = [];
for (let num of numbers) {
  results.push(num * 2);
}
console.log("Normal for loop: ", results);
//-----------------------------------------

// Using map()
const multiply = function (num) {
  return num * 2;
} 
const mapMethod = numbers.map(multiply);
console.log("Using map method with function: ", mapMethod);
//-----------------------------------------

// Simplified w/ map()
const mapMethodWithFunction = numbers.map(function multiply(num) {
  return num * 2;
});
console.log("Using map method, Function directly passed as argument of map method: ", mapMethodWithFunction);
//-----------------------------------------

// Simplfied w/ map() + arrow function
const mapMethodArrowFunction = numbers.map(num => num * 2);
console.log("Using map method and arrow function: ", mapMethodArrowFunction)
//-----------------------------------------

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


console.log(students)
const studentArray = students.map(student => [student.name, student.id]);
console.log("Map method with objects, return an array of array: ", studentArray)

const studentObject = students.map(student => ({id:student.id, name:student.name}));
console.log("Map method with objects, return an array of object: ", studentObject)