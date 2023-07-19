// Get references to the HTML elements
const canvas = document.getElementById("canvas");
const resizeButton = document.getElementById("resizeButton");
const resetButton = document.getElementById("resetButton");

// Function to create the grid
function createGrid(size) {
  
  canvas.innerHTML = "";

  // Setting the CSS grids 
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create the individual grid cells
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }
}

// Function to deal with resizing the canvas
function resizeCanvas() {
  const newSize = prompt("Enter the new size (e.g., 16 for a 16x16 grid):");
  if (newSize) {
    createGrid(parseInt(newSize));
    addCellListeners();
    if  (newSize > 100 || newSize < 1){
        prompt("Limit is 100 squares and Minimum is 1");

    }
  }
}

function resetCanvas() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
    
  });
}

// Function to handle drawing on the canvas
function drawOnCanvas(event) {
  const cell = event.target;
  cell.style.backgroundColor = "black";
}

// event listeners
function addCellListeners() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", drawOnCanvas);
  });
}

createGrid(16);
addCellListeners();

// Adding event listeners to the buttons
resizeButton.addEventListener("click", resizeCanvas);
resetButton.addEventListener("click", resetCanvas);
