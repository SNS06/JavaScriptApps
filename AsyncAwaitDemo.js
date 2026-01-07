// Async Await Logic

let movieRating = () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;

    if (rating > 4) resolve("Good movie");
    else resolve("Bad movie");
  });
};

// How to call Promise with Async/Await
// const movieResult = async () => {
//   try {
//     const data = await movieRating();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

async function movieResult() {
  try {
    const data = await movieRating();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

movieResult();
