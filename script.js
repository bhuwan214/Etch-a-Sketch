const defaultSize =10;

const grid =document.querySelector('.grid')

var size= defaultSize

  grid.style.gridTemplateColumns= `repeat(${size},1fr)`;
  grid.style.gridTemplateRows=`repeat(${size},1fr)`;  



for(let i=0; i<size*size; i++){
    const gridItems = document.createElement('div')
    gridItems.classList.add('grid-items')

    gridItems.addEventListener('mouseover',function(){
        gridItems.style.backgroundColor='pink'
    })

    grid.appendChild(gridItems)

}
