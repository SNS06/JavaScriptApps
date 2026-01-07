// Promises Chaining
// const chain = new Promise((resolve) => {
//   resolve(10);
// });

// chain
//   .then((res) => {
//     throw new Error("something went Wrong");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// (or)
// chain
//   .then((res) => {
//     return res * 3;
//   })
//   .then((res) => {
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//   });

const bookTicket = () => {
  return new Promise((resolve, reject) => {
    resolve(" Ticket booked");
  });
};

const popCorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " By popcorn");
  });
};

const Coke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " By Coke");
  });
};

bookTicket()
  .then((res) => {
    return popCorn(res);
  })
  .then((res) => {
    return Coke(res);
  })
  .then((res) => {
    console.log("Wanna to go movie" + res);
  })
  .catch((err) => {
    console.log(err);
  });
