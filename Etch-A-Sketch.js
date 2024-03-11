const container = document.querySelector('.container');

function createGrid(){
    for(let i = 0; i < 256; i++){
        const grid = document.createElement('div');
        grid.className = 'grid-layout';
        container.appendChild(grid)
        grid.addEventListener('mouseover', ()=>{
            grid.style.cssText = 'background-color: black;'
        })
    }
}
createGrid()
const button  = document.querySelector('.btn');

function askForGrid(grid){
    button.addEventListener('click', ()=>{
        const length = prompt("Enter a preffered  Length for grid: ");
        const width = prompt("Enter a preffered  Width for grid: ");
        grid.innerHTML = " ";
        for(let i = 0; i<length*width;i++) {
            const newGrid = document.createElement('div');
            newGrid.className = 'new-grid-layout'
            container.appendChild(newGrid);
            newGrid.addEventListener('mouseover', ()=>{
                newGrid.style.cssText = 'background-color: black;'
            })
        }
    })
   
}
askForGrid(container);