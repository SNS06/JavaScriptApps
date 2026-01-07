// API calling with async/await

const postsInfo = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
    //   fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((res) => res.json())
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

postsInfo();
