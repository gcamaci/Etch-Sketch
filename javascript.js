let click = false;
let colorChoice;
let mode = "normal";
const controller = document.getElementById('controls');
let color= document.getElementById('favcolor');
let slider = document.getElementById('sliderAmount');
let canvas = document.querySelector('#main-container');
let reset = document.querySelector('#reset');
let gridOutput = document.querySelector("#grid-output");
let header = document.querySelector('#head');
const colorPicker = document.querySelector('#color-picker');
const colorOne = document.querySelector('.color-one');
const colorTwo = document.querySelector('.color-two');
const colorThree = document.querySelector('.color-three');

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
    //color.style.background = color.value;
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let gridSize = size * size;
    for(let i = 0; i < gridSize; i++){
        let pixel = document.createElement('div');
        pixel.classList.add('fade');
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
    gridOutput.textContent = `${input} X ${input}`;
    return makeCanvas(input)
};
function resetCanvas(){
    canvas.innerHTML = '';
    mode = "normal";
    canvas.classList.add('shakeMe');
    return makeCanvas(slider.value);
};
function penColor(){
    mode = "normal";
    colorChoice = color.value;
    colorPicker.style.color = color.value;
    canvas.style.boxShadow = "10px 11px 12px" + color.value;
    gridOutput.style.color = color.value;
    header.style.color = color.value;
    colorPicker.textContent = color.value;
    slider.style.backgroundColor = color.value
    controller.style.boxShadow = '0 0 0 4px' + color.value;
    colorOne.style.border = "solid" + color.value;
    colorOne.style.color = color.value;
    colorTwo.style.border = "solid" + color.value;
    colorTwo.style.color = color.value;
    colorThree.style.border = "solid" + color.value;
    colorThree.style.color = color.value;


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

































