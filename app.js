//jshint esversion:7
let divArray = [];
let defaultGridSize = 16;

let gridContainer = document.querySelector(".gridContainer");
let resetButton = document.querySelector("button");

generateGrid(defaultGridSize);
let cells = document.getElementsByClassName("cells");
let cellArray = Array.from(cells);

createTrails(cellArray);

resetButton.addEventListener("click", function() {
  cellArray.forEach(function(eachCell) {
    eachCell.style.backgroundColor = '';
  });
  generateNewGrid();
});

function generateGrid(gridSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (i=0; i<gridSize**2; i++) {
    divArray.push(document.createElement('div'));
    divArray[i].classList.add("cells");
    gridContainer.appendChild(divArray[i]);
  }
}
function generateRandomColor() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

function createTrails(cellArray) {
  cellArray.forEach(function(eachCell){
    eachCell.addEventListener("mouseenter", function() {
      let randomColor = generateRandomColor();
      this.style.backgroundColor = `#${randomColor}`;
    });
  });
}

function generateNewGrid () {
  //Clears Current Grid
  let firstCell = gridContainer.firstElementChild;
  while (firstCell) {
    firstCell.remove();
    firstCell = gridContainer.firstElementChild;
  }
  let gridSize = prompt('How many squares per side would you like in the new grid?');
  generateGrid(gridSize);
  createTrails(cellArray, generateRandomColor());
}
