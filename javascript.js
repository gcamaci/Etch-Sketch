let amount = 32;
const canvas = document.querySelector('#main-container');

function createDivs(divAmount){
    divAmount = amount * amount;
    for(let i = 0; i < divAmount;i++){
        let div = document.createElement('div');
        if(amount === 32){
            div.classList.add('thirty-grid');
        }else if(amount ===64){
            div.classList.add('forty-grid');
        }else{
            div.classList.add('pixels');
        }
        canvas.appendChild(div);
    }
};

window.onload = function(){
    createDivs(amount);
};
