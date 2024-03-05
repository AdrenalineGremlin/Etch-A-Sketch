const container  = document.querySelector('.container')

//create 16 divs
for(let i = 0; i< 16; i++){
    let subDivs = document.createElement('div')
    container.appendChild(subDivs);
}