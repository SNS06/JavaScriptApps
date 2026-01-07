// Data types
// string
// number
// boolean
// undefined
// object

var name = "najiya";
console.log(typeof name);

var empno = 1329393939;
console.log(typeof empno);

var empid = 101;
console.log(typeof empid);

var anynum = 39494.293;
console.log(typeof anynum);

var cemp = true;
console.log(typeof cemp);

var pf;
console.log(typeof pf);
console.log(pf);

let pt;
console.log(typeof pt);
console.log(pt);

// const p;
// console.log(typeof p);
// console.log(p);

var esi = null;
console.log(typeof esi);

var desg = ["dev", "hr", "manager"];
console.log(typeof desg);

var custInfo = {
  cid: 2001,
  cname: "najiya",
  caddress: "guntur",
};
console.log(typeof custInfo);

// Advanced DataTypess - ES6
var tcs = BigInt(39392939393849404040);
console.log(typeof tcs);

var pname = Symbol("samsung");
console.log(typeof pname);

var pname1 = Symbol("samsung");
console.log(typeof pname1);
console.log(pname == pname1);
console.log(pname === pname1);
