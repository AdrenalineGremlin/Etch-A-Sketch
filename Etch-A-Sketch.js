const container  = document.querySelector('.container')
let subDivs;
//create 16 divs
for(let i = 1; i< 16; i++){
    subDivs = document.createElement('div')
    subDivs.className = 'squares';
    container.appendChild(subDivs);
}
// subDivs.className = 'sqaures';