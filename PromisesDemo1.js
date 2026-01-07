const bubbleGame = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10) + 1;

  if (num > 5) {
    resolve("High Score");
  } else {
    reject("Low score");
  }
});

bubbleGame
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log("Finally promise completed");
  });
