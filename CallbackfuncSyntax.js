// call back func as anonymous function

let prices = [20000, 30000, 40000, 50000];

// const newPrices = prices.map((val) => val - 5000);
// console.log(newPrices);

// Call back function with name
function sample() {
  console.log("hi");
}

function demo(callback) {
  return callback;
}

demo(sample());
