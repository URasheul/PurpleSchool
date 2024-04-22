'use strict'

const counter = document.querySelector('.counter');
const mainContent = document.querySelector('.wrapper');


function pushButton(event){

    if(event.target.classList.contains('button_pressed')) return

    if(event.target !== event.currentTarget){        
        [...event.currentTarget.children].forEach(element => {
            element.innerText = 'Нажми меня';
            element.classList.remove('button_pressed')
        });        
        event.target.innerText = 'Нажата';  
        event.target.classList.add('button_pressed')      
        counter.innerText = Number(counter.innerText) + 1;        
    }
}

mainContent.addEventListener('click', pushButton)
