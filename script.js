//DOM manipulation

const clrBtn = document.getElementById("clearBtn");
const colorBtn = document.getElementById("colorBtn");
const color = document.querySelector('input[type="color"]');
const rangeInput = document.querySelector('input[type="range"]');
const rangeValue = document.querySelector("#value");
const Eraser = document.querySelector("img");

rangeValue.textContent = rangeInput.value;

rangeInput.addEventListener("input", (event) => {
  rangeValue.textContent = event.target.value;

  refreshPage();
});

var size = rangeValue.textContent;

// size=prompt("Enter a number")

const grid = document.querySelector(".grid");

grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
grid.style.gridTemplateRows = `repeat(${size},1fr)`;

for (let i = 0; i < size * size; i++) {
  //creating the grid-item and  making them child of grid
  const gridItems = document.createElement("div");
  gridItems.classList.add("grid-items");

  //coloring the grid items
  gridItems.addEventListener("mouseover", function () {
    gridItems.style.backgroundColor = `${color.value}`;
  });

  grid.appendChild(gridItems);

  clrBtn.addEventListener("click", () => {
    gridItems.style.backgroundColor = "";
  });

  //Random RBG value for random color creation
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  //Color button action , which will provide randomness in etchy sektch palate
  colorBtn.addEventListener("click", () => {
    gridItems.addEventListener("mouseover", () => {
      gridItems.style.backgroundColor =
        "rgb(" + red + ", " + green + ", " + blue + ")";
    });
  });

  //Coloring the component (fix for random click not working default coloring function )
  color.addEventListener("click", () => {
    gridItems.addEventListener("mouseover", () => {
      gridItems.style.backgroundColor = `${color.value}`;
    });
  });

  //Erasing the colored components
  Eraser.addEventListener("click", () => {
    gridItems.addEventListener("mouseover", () => {
      gridItems.style.backgroundColor = "white";
    });
  });
}

function refreshPage() {
  window.location.reload();
}
