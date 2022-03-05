
const canvas = document.querySelector('#main-container');
let colorChoice = "black";
//const rainbow = document.querySelector('#rainbow');
//rainbow.addEventListener('click', () => {
    //console.log(randomColor());
//});


//grid choice button/ create canvas
const buttons = document.querySelectorAll('.btn');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        canvas.innerHTML = '';
        createCanvas(button.id);
    });

});


function createCanvas(gridSize){
    if(gridSize === '16'){
        createDivs(16);
    }else if(gridSize === '32'){
        createDivs(32);
    }else{
        createDivs(64);
    }
};
//function that takes amount creates div and adds style class
function createDivs(amount){
    divAmount = amount * amount;
    for(let i = 0; i < divAmount; i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            console.log(i);
            div.style.background = colorChoice;   
        });
        if(divAmount === 256){
            div.classList.add('pixels','grid-Div');
        }else if(divAmount === 1024){
            div.classList.add('thirty-grid','grid-Div');
        }else{
            div.classList.add('sixty-grid', 'grid-Div');
        }  
        canvas.appendChild(div) 
    }
};

function clear(){
    document.removeChild(document.canvas);
};



function randomColor(){
    switch(Math.floor(Math.random() * 5)){
        case 0:
        colorChoice = "red";
        break;

        case 1:
        colorChoice = "yello";
        break;

        case 2:
        colorChoice = "green";
        break;

        case 3:
        colorChoice = "blue";
        break;

        case 4:
        colorChoice = "violet";
        break;
    }
   
};