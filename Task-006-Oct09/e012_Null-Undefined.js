// ============================================================
// Topic: null vs undefined in JavaScript
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/

// var x;
// console.log(x);

// var audi = null;
// console.log(audi);

// --------------------------------------------------------
// 1. undefined
// --------------------------------------------------------

let userName; // declared but not assigned
console.log(userName);
console.log(typeof userName);

let age;
console.log(age);
console.log(typeof age);

let x1=5;
console.log(x1);
console.log(typeof x1);

let y1 = null;
console.log(y1);
console.log(typeof y1);

// function greet() {
//     // no return statement
// }
// console.log(greet()); 

let x;
x = 10;
console.log(x);

// --------------------------------------------------------
// 2. null
// --------------------------------------------------------
let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture); // "object"   <-- known JS quirk!

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/
