// event logic
function sample() {
  alert("Button was clicked");
}

let btn = document.getElementById("demo");
btn.addEventListener("click", sample);

let but = document.getElementById("info");
but.addEventListener("dblclick", () => alert("Double click"));
// but.addEventListener("touchstart", () => alert("touched"));

let header = document.getElementById("desc");
let mouseOver = () => {
  header.style.color = "blue";
};

let mouseOut = () => {
  header.style.color = "red";
};

header.addEventListener("mouseover", mouseOver);
header.addEventListener("mouseout", mouseOut);

let inputValue = document.getElementById("ide");
let paragraph = document.getElementById("para");

const iplogic = () => {
  let userValue = inputValue.value;
  paragraph.textContent = userValue;
  paragraph.style.color = "green";
};

inputValue.addEventListener("input", iplogic);
