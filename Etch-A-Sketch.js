const container = document.querySelector('.container');

function createGrid(){
    for(let i = 0; i < 256; i++){
        const grid = document.createElement('div');
        grid.className = 'grid-layout';
        container.appendChild(grid)
        grid.addEventListener('mouseover', ()=>{
            grid.style.backgroundColor = randomizedColor();
        })
    }
}
createGrid()
const button  = document.querySelector('.btn');

function randomizedColor(){
    let colors = ["red","green","blue","orange", "yellow","indigo","violet"];
    return colors[Math.floor(Math.random()*colors.length)];
}
function askForGrid(grid){
    button.addEventListener('click', ()=>{
        const length = prompt("Enter a preferred Height for grid: ");
        const width = prompt("Enter a preferred  Width for grid: ");
        grid.innerHTML = " ";
        const gridCellHeight = (600/length)-2;
        const gridCellWidth = (600/length)-2;
        const size = length*width;
        for(let i = 0; i<size;i++) {
            const newGrid = document.createElement('div');
            newGrid.className = 'new-grid-layout'
            container.appendChild(newGrid);
            newGrid.addEventListener('mouseover', ()=>{
                newGrid.style.backgroundColor = randomizedColor()
            })
            newGrid.style.height = gridCellHeight+"px";
            newGrid.style.width = gridCellWidth+"px";
        }
        if(size >= 10000){
             alert("Unable to create grid");
             grid.innerHTML = "";
             createGrid(); 
        }
    })
   
}
askForGrid(container);