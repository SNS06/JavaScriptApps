const movieRating = new Promise((resolve, reject) => {
  let rating = 1.5;

  if (rating > 4) {
    resolve("Good movie");
  } else {
    reject("Bad movie");
  }
});

// Call Promises
movieRating
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
