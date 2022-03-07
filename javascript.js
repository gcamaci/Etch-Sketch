let color= document.getElementById('favcolor');
let colorChoice = color.value;
let random = " ";
let slider = document.getElementById('sliderAmount');
let canvas = document.querySelector('#main-container');
let eraser = document.querySelector('#eraser');
let reset = document.querySelector('#reset');
const rainbowcolors = document.querySelector('#rainbow');
rainbowcolors.addEventListener('click', () =>{
    if(random === 'random'){
        random = ' ';
    }else if(random===' '){
        random = 'random'
    }
    console.log(random);
});
eraser.addEventListener('click',erase);
reset.addEventListener('click', resetCanvas);

function makeCanvas(size){
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let gridSize = size * size;
    for(let i = 0; i < gridSize; i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixels')
        pixel.addEventListener('mouseover', mainPen);
        //pixel.addEventListener('mousedown', mainPen);
        canvas.insertAdjacentElement('beforeend', pixel);
    }
};
makeCanvas(50);

function mainPen(){
    this.style.background = colorChoice;
    
    if(random === 'random'){
        let color = randomColor();
        this.style.background = color;
    }else if(random === ' '){
        this.style.background = colorChoice;
    }
    
};
function erase (){
    colorChoice = "white";
    random = ' ';
};
// Slider input 
function gridInput(input){
    canvas.innerHTML = '';
    return makeCanvas(input)
};
function resetCanvas(){
    canvas.innerHTML = '';
    return makeCanvas(slider.value);
};
function penColor(){
    random = ' ';
    colorChoice = color.value;
    console.log(colorChoice);
};

function randomColor(){
    switch(Math.floor(Math.random() * 5)){
        case 0:
        colorChoice = "red";
        break;

        case 1:
        colorChoice = "yellow";
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



































