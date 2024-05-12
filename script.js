//DOM manipulation 
 
const clrBtn = document.getElementById("clearBtn")
const colorBtn = document.getElementById("colorBtn")

const main = document.querySelector(".main-game")

// main.backgroundColor="rgb(" +random1 + "," + random2 + ", " + random3 + ")";



const defaultSize =10;

const grid =document.querySelector('.grid')

var size= defaultSize

  grid.style.gridTemplateColumns= `repeat(${size},1fr)`;
  grid.style.gridTemplateRows=`repeat(${size},1fr)`;  


 
  
 

for(let i=0; i<size*size; i++){
    const gridItems = document.createElement('div')
    gridItems.classList.add('grid-items')

    gridItems.addEventListener('mouseover',function(){
        gridItems.style.backgroundColor='#6b6b6b'
    })

    grid.appendChild(gridItems)

    clrBtn.addEventListener('click',()=>{
      gridItems.style.backgroundColor=''
    })

    //Random RBG value for random color creation
    let red= Math.floor((Math.random())*256)
    let green= Math.floor((Math.random())*256)
    let blue= Math.floor((Math.random())*256)

    //Color button action , which will provide randomness in etchy sektch palate
    colorBtn.addEventListener('click',()=>{
      gridItems.addEventListener('mouseover',()=>{
        gridItems.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
      })
    })

}




console.log(random2,random1,random3)