// api calling with async/await

const getDetails = async () => {
  let userId = document.getElementById("userid").value;
  let para = document.getElementById("simple");
  let res = document.getElementById("sample");

  res.innerHTML = "";
  if (userId == "") {
    alert("enter userid");
    return;
  }
  para.style.display = "block";

  try {
    const [userres, postres] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    ]);

    const userdata = await userres.json();
    const postdata = await postres.json();

    para.style.display = "none";
    console.log(postdata);
    res.innerHTML = `
      <h2>${userdata.name}</h2>
      <h2>Email: ${userdata.email}</h2>
      <h2>Total Posts: ${postdata.length}</h2>
      <p>${postdata.title}</p>
    `;
  } catch (err) {
    para.style.display = "none";
    res.innerHTML = `<h3>Something went Wrong ❌</h3>`;
  }
};
