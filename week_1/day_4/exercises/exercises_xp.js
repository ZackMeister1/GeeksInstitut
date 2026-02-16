// ===== Exercise 1
const colorsDiv = document.getElementById("colors");
const board = document.getElementById("board");
const clearBtn = document.getElementById("clear");

const colors = ["red", "blue", "green", "yellow", "black", "purple"];

let selectedColor = "black";
let isMouseDown = false;



/* Create color palette */
colors.forEach(color => {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color");
  colorBox.style.backgroundColor = color;

  colorBox.addEventListener("click", function() {
    selectedColor = color;
  });

  colorsDiv.appendChild(colorBox);
});



/* Create grid */
for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  board.appendChild(square);
}


/* Drawing logic */
board.addEventListener("mousedown", function(e) {   

  if (e.target.classList.contains("square")) {
    isMouseDown = true;
    e.target.style.backgroundColor = selectedColor;
  }
});

board.addEventListener("mouseover", function(e) {
  if (isMouseDown && e.target.classList.contains("square")) {
    e.target.style.backgroundColor = selectedColor;
  }
});

document.addEventListener("mouseup", function() {
  isMouseDown = false;
});


/* Clear button */
clearBtn.addEventListener("click", function() {   
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.style.backgroundColor = "white";
  });
});






