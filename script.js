const wrapper = document.getElementById("container");

function generateGrid(size, parent) {
  for (let index = 0; index < size * size; index++) {
    const div = document.createElement("div");
    div.id = `box${index}`;
    div.className = "box";
    div.style.height = `${98 / size}vh`;
    div.style.width = `${98 / size}vw`;
    parent.appendChild(div);
  }
}

generateGrid(25, wrapper);

const square = document.getElementsByClassName("box");

for (const x of square) {
  x.addEventListener("mouseover", (e) => {
    x.classList.toggle("black");
  });
}
