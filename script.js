var grid= document.querySelector(".grid")

for ( let i=0; i<16 * 16; i++){
    var gridItem =document.createElement('div')

    gridItem.className ='grid-item'

    grid.appendChild(gridItem)
}

grid.style.backgroundColor =''