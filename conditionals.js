// const mul = (a, b) => {
//   return a * b;
// };

// console.log(mul(20, 10));

// const print = (a, b) => {
//   console.log(`${a} and ${b}`);
// };

// const printvalues = (a, b) => console.log(a, b);
// console.log(print(40, 50));
// console.log(printvalues(50, 50));

// // rest parameter - multivalues can be passed
// const multi = (a, b, ...c) => {
//   console.log(a);
//   console.log(b);
//   console.log(...c);
// };

// console.log(multi(10, 20, 30, 40));

// Default paramter
const sum = (a, b = 10) => {
  console.log(a + b);
};

console.log(sum(100));
console.log(sum(100, 40));
