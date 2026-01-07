// varibles in js
// ES6 keywords

var pname = "realme";
let pdesc = "awesome product";
const price = 100;

// Drawbacks of var :->
var pname = "samsung";
// console.log(pname); - prints as new value samsung instead of throwing the error

for (var i = 1; i <= 10; i++) console.log("inner i:" + i);
console.log("outer i:" + i);

// for (const i = 1; i <= 10; i++) console.log("inner i:" + i); - not applicable as we dont change const

const pancard = "t3299ee949";
console.log(pancard);
