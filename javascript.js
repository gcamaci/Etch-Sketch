
const canvas = document.querySelector('#main-container');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        canvas.innerHTML = '';
        if(button.id === '16'){
            
            return createDivs(16);
        }else if(button.id === '32'){
            
            return createDivs(32);
        }else{
            
            return createDivs(64);
        }

    });

});



function createDivs(amount){
    divAmount = amount * amount;
    for(let i = 0; i < divAmount; i++){
        const div = document.createElement('div');
        //div.textContent = i;
        canvas.appendChild(div);
        if(divAmount === 256){
            div.classList.add('pixels');

        }else if(divAmount === 1024){
            div.classList.add('thirty-grid');

        }else{
            div.classList.add('sixty-grid');
        }
        
    }
};

function clear(){
    document.removeChild(document.canvas);
}
