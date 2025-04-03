const container = document.querySelector(".container");
let col = 16;
let row = 16;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-squares";
  }
}
const gridList = document.querySelectorAll(".grid-squares");
gridList.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "red";
  });
});
gridList.forEach((grid) => {
  grid.addEventListener("mouseout", () => {
    grid.style.backgroundColor = "white";
  });
});
