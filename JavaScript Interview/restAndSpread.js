// ES6
// Rest and Spread
// Rest Operator(...): Rest operator is used to collect(combine) multiple element into an array.

// Example 1
// const [first, second, ...rest] = [10, 20, 30, 40, 50];

// console.log(first); // 10
// console.log(second); // 20
// console.log(rest); // [30, 40, 50]

// function addNumber(a,b,c,...other){
//     console.log(other);  // return an array
//     return a+b+c;
// }

// const res = addNumber(1,2,3,4,5,6);
// console.log(res);

// -------------------Spread Operator(...)---------------------------

// Spread Operator(...): The spread operator is used to expand elements from an array or object into individual elements.

// Example 1: Expanding an array
const numbers = [1,2,3,4];
const newNumbers = [...numbers, 5,6,7,8];

console.log(newNumbers);


// Example 2: Merging object
const obj1 = {name: "Sahul", age:22};
const obj2 = {...obj1, city: "Mumbai"};

console.log(obj2);


// Example 3: Quick Copy

const arr = [1,2,3,4,5,6];
console.log(...arr);


const obj = {name: "Misty", age: 2.5, city: "Thane"}
const birth = {...obj, DOB: "25 April 2022"}
function showData(obj){
    console.log(obj); 
}

showData(birth);


const friends = ["Sahul", "Rahul", "Vikash", "Satish"];

function showFamily(...brothers){
    console.log(brothers);
}
showFamily(...friends);