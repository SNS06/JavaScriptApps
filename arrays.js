// Arrays in JS - Ways to create an Array
// Literal Syntax
let pname = ["realme", "lg", "samsung", "vivo"];
// console.log(pname);

// // Object syntax
let prices = new Array(200, 300, 400, 500);
// console.log(prices);

// To get array values
// console.log(pname[2]);
// for (let names of pname) {
//   console.log(names);
// }

// Using for-each mtd
// let names = pname.forEach((i) => console.log(i));
// console.log(names);

// prices.forEach((elem) => console.log(elem));

// To add elements - push,unshift,splice
// pname.push("one plus");
pname.unshift("oppo");
// pname.splice(2, 0, "nokia", "moto");
// console.log(pname);

// remove elements - pop,shift,splice,delete operator
// pname.pop();
// pname.shift();
// console.log(pname);
// pname.splice(1, 3);
// console.log(pname);
// deletes the value not the memory
// delete pname[1];
// console.log(pname);

// retriving portion of arr
// let newArr = pname.slice(0, 3);
// console.log(newArr);
// console.log(pname);
// console.log(pname.slice(-4, -2));

// TO search - indexOf,lastindexOf,includes
// console.log(pname.includes("lg"));
// console.log(pname.indexOf("samsung"));
// console.log(pname.lastIndexOf("realme", 2));

// sort
// console.log(pname.sort());
// console.log(pname.reverse());

// Array advanced mtds(ES6+)
// Reduce = callback function
// let sum = prices.reduce((total, val) => total + val, 2);
// console.log(sum);

// Map - for better retrival of data
// let offerprice = prices.map((val) => {
//   return val - 100;
// });
// console.log(offerprice);

// To concat
let pname1 = ["poko", "one plus", "samsung"];
console.log(pname.concat(pname1));

// spread operator
let brands = [...pname, ...pname1];
console.log(brands);
