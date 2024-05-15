//DOM manipulation

const clrBtn = document.getElementById("clearBtn");
const RandomcolorBtn = document.getElementById("colorBtn");
const Color = document.querySelector('input[type="color"]');
const rangeInput = document.querySelector('input[type="range"]');
const Value = document.querySelector("#value");
const Eraser = document.querySelector("img");
const grid = document.querySelector(".grid");

//For adding manual delay to updation
const debounceDelay = 300;
let debounceTimer;

Value.textContent = rangeInput.value;

rangeInput.addEventListener("click", (event) => {
  Value.textContent = event.target.value;

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(updateGrid, debounceDelay);
});

let size = rangeInput.value;

function getSize() {
  return (size = rangeInput.value);
}

// Function to update grid size and regenerate grid items

function updateGrid() {
  size = rangeInput.value;

  grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
  grid.style.gridTemplateRows = `repeat(${size},1fr)`;
  grid.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    //creating the grid-item and  making them child of grid
    const gridItems = document.createElement("div");
    gridItems.classList.add("grid-items");
    grid.appendChild(gridItems);

    //coloring the grid items
    gridItems.addEventListener("mouseover", function () {
      gridItems.style.backgroundColor = `${Color.value}`;
    });

    //Reseting the color of grid-items to white
    clrBtn.addEventListener("click", () => {
      gridItems.style.backgroundColor = "";
      gridItems.addEventListener("mouseover", () => {
        gridItems.style.backgroundColor = `${Color.value}`;
      });
    });

    //Erasing the color items
    Eraser.addEventListener("click", () => {
      gridItems.addEventListener("mouseover", () => {
        gridItems.style.backgroundColor = "";
      });
    });

    //Random RBG value for random color creation

    //Color button action , which will provide randomness in etchy sektch palate
    RandomcolorBtn.addEventListener("click", () => {
      gridItems.addEventListener("mouseover", setRandomColor);
    });

    //Coloring the component (fix for random click not working default coloring function )
    Color.addEventListener("click", () => {
      let defaultColor = settingColor();
      gridItems.addEventListener("mouseover", () => {
        gridItems.style.backgroundColor = `${Color.value}`;
      });
    });
  }
}

updateGrid();

// okBtn.addEventListener('click', () => {
//   updateGrid();
// });

//Generattng random color
function RandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//Appling the random color to grid items
function setRandomColor() {
  const randomColor = RandomColor();
  this.style.backgroundColor = randomColor;
}

//getting color
function settingColor() {
  return `${Color.value}`;
}

const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;