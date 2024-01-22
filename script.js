
const grid =document.querySelector('.grid')

grid.addEventListener('mouseover',function(){
    grid.style.backgroundColor ="pink"
})

for(let i=0; i<16*16; i++){
    const gridItems = document.createElement('div')
    gridItems.classList.add('grid-items')

    gridItems.addEventListener('mouseover',function(){
        gridItems.style.backgroundColor='pink'
    })

    grid.appendChild(gridItems)

}