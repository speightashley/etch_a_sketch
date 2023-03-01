const wrapper = document.getElementById("container");
const reset = document.getElementById("reset");
const invert = document.getElementById("invert");
wrapper.style.width = "50vw";
wrapper.style.height = "70vh";

function generateGrid(size, parent) {
  for (let index = 0; index < size * size; index++) {
    const div = document.createElement("div");
    div.id = `box${index}`;
    div.className = "box";
    div.style.height = `${50}`;
    div.style.width = `${111.2 / size}%`;
    parent.appendChild(div);
  }
}

generateGrid(50, wrapper);

const square = document.getElementsByClassName("box");

for (const x of square) {
  x.addEventListener("mouseover", (e) => {
    x.classList.toggle("black");
  });
}

reset.addEventListener("click", (e) => {
  for (const x of square) {
    x.classList.remove("black");
  }
});

invert.addEventListener("click", (e) => {
  for (const x of square) {
    x.classList.toggle("black");
  }
});
