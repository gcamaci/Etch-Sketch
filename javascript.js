let click = false;
let colorChoice;
let mode = "normal";
let color= document.getElementById('favcolor');
let slider = document.getElementById('sliderAmount');
let canvas = document.querySelector('#main-container');

let reset = document.querySelector('#reset');
reset.addEventListener('click', resetCanvas);
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(button.id === mode){
            mode = "normal";
        }
        else{
            mode = button.id;
        }
        console.log(mode);
        console.log(e);
        
    });
});
function makeCanvas(size){
   
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let gridSize = size * size;
    for(let i = 0; i < gridSize; i++){
        let pixel = document.createElement('div');
        pixel.classList.add('fade')
        pixel.addEventListener('mouseover', mainPen);
        canvas.insertAdjacentElement('beforeend', pixel);
    }
};
makeCanvas(50);

function mainPen(){
    canvas.classList.remove('shakeMe');
    if(click){
        this.style.background = colorChoice;
        if(mode === "rainbow"){
            this.style.background = randomColor();
        }else if(mode === "eraser"){
            this.style.background = "whitesmoke";
        }else{
            colorChoice = color.value;
        }
    }
};
// Slider input 
function gridInput(input){
    canvas.innerHTML = '';
    console.log(`${input} X ${input}`);
    return makeCanvas(input)
};
function resetCanvas(){
    canvas.innerHTML = '';
    canvas.classList.add('shakeMe');
    return makeCanvas(slider.value);
};
function penColor(){
    mode = "normal";
    colorChoice = color.value;
    console.log(mode);
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

canvas.addEventListener('click',() => {
    click =!click;
});


































