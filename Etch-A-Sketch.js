const container  = document.querySelector('.container');
const container2 = document.querySelector('.container2');
let subDivs;
let subDivs2;

//create 16 divs
for(let rows =1; rows<=16; rows++){
    subDivs = document.createElement('div');
    subDivs.className = 'rows';
    container.appendChild(subDivs);
}
for(let cols =1; cols<=16; cols++){
    subDivs2 = document.createElement('div');
    subDivs2.className = 'cols';
    container2.appendChild(subDivs2);

}



// subDivs.className = 'sqaures';
