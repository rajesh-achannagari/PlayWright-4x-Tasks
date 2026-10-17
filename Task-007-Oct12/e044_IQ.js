let a = 10;
let b = a--;
console.log(b);
console.log(a);


let a1 = 100;
console.log(a1++ + ++a1 + a1++ + ++a1);
console.log(a1);

let a2 = 37;
console.log(--a2 + a2--);
console.log(a2);

let a3 = 5; 
let b3 = a3-- - --a3; 
console.log(b3, a3);

let i = 1; 
let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);