function One() {
  Two();
  console.log("1");
}

function Two() {
  Three();
  console.log("2");
}

function Three() {
  console.log("3");
}
One();
