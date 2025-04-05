const container = document.querySelector(".container");
const btn = document.querySelector(".numberOfSquares");
let rowsAndCols;
btn.addEventListener("click", () => {
  rowsAndCols = Number(prompt("Enter number for your grid"));
  console.log(rowsAndCols);
  changeGridBoardSize(rowsAndCols);
});
// let col = 16;
// let row = 16;
// console.log(typeof rowsAndCols);

function gridBoard(size) {
  let cells = container.querySelectorAll("div");
  cells.forEach((div) => div.remove());
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-squares";
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
}
gridBoard(16);

function changeGridBoardSize(promptInput) {
  if (promptInput >= 2 && promptInput <= 100) {
    gridBoard(promptInput);
    const div = document.querySelector(".grid-squares");
    // const pos = div.getBoundingClientRect();
    // let newWidth = (16 / promptInput) * pos.width;
    // console.log(`${newWidth}px`);
    // console.log(newWidth);
    const divList = document.querySelectorAll(".grid-squares");
    divList.forEach((div) => {
      div.getBoundingClientRect();
      const pos = div.getBoundingClientRect();
      let newWidth = (16 / promptInput) * pos.width;
      let newHeight = (16 / promptInput) * pos.height;
      div.style.width = `${newWidth}px`;
      div.style.height = `${newWidth}px`;
    });

    // div.style.width = `${newWidth}px`;
  } else {
    console.log("checking");
  }
}

// const gridList = document.querySelectorAll(".grid-squares");
// gridList.forEach((grid) => {
//   grid.addEventListener("mouseover", () => {
//     grid.style.backgroundColor = "red";
//   });
// });
// gridList.forEach((grid) => {
//   grid.addEventListener("mouseout", () => {
//     grid.style.backgroundColor = "white";
//   });
// });
// console.log(gridList.length);
