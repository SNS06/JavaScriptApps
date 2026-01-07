// Objects in js

const movieInfo = {
  movieTitle: "Akhanda",
  Hero: "Balayya",
  Director: "Boyapati",
};

// getting the one value
// console.log(movieInfo.Director);
// console.log(movieInfo["Director"]);

// changing the value
// movieInfo.Hero = "Mahesh Babu";
// console.log(movieInfo);

// retriving values by using for-in loop
// for (const keys in movieInfo) {
//   console.log(movieInfo[keys]);
// }

// Advanced Methods
// console.log(Object.keys(movieInfo));
// Object.keys(movieInfo).forEach((key) => {
//   console.log(key);
// });

// console.log(Object.values(movieInfo));
// Object.values(movieInfo).forEach((value) => console.log(value));

// for entries
// Object.entries(movieInfo).forEach((entry) =>
//   console.log(entry[0] + "  " + entry[1])
// );

// for (let keys in movieInfo) {
//   console.log(keys + " " + movieInfo[keys]);
// }

// for (let [k, v] of Object.entries(movieInfo)) {
//   console.log(k + " " + v);
// }

// Nested Object
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// console.log(myObj.cars[0].models);

// Card objects
const cardItems = {
  products: [
    { pid: "101", pname: "Drone", price: "12000" },
    { pidx: "102", pname: "AC", price: "30000" },
  ],
  shippingAddress: [
    { area: "adeiah", pin: 52002, street: "3rd" },
    { area: "valuri", pin: 53004, street: "4th" },
  ],
  userInfo: { userId: 1, userName: "rahul" },
};

console.log(cardItems.userInfo.userName);
