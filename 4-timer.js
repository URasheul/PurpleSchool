'use strict'

function newYearTimer() {
    const element = document.querySelector('.timer')    

    
    
    const timer = setInterval(()=>{

        const date = new Date();
        const newYearDate = new Date(date.getFullYear() + 1, 0, 1);       
      
        
        const timeTillNewYear = new Date(newYearDate - date - 3 * 60 * 60 * 1000);  
    
       
        
        let month = 'месяцев';
        let day = 'дней';
        let hour = 'часов';
        let minute = 'минут';
        let second = 'секунд';

        let dayValue = timeTillNewYear.getDate() - 1;

        if(timeTillNewYear.getMonth() === 1){
            month = 'месяц'
        }
        if(timeTillNewYear.getMonth() > 1 && timeTillNewYear.getMonth() < 5){
            month = 'месяца'
        }


        if(dayValue === 1 || dayValue === 21 || dayValue === 31){
            day = 'день'
        }
        if(dayValue > 1 && dayValue < 5 || dayValue > 21 && dayValue < 25){
            day = 'дня'
        }


        if(timeTillNewYear.getHours() === 1 || timeTillNewYear.getHours() === 21){
            hour = 'час'
        }
        if(timeTillNewYear.getHours() > 1 && timeTillNewYear.getHours() < 5 
        || timeTillNewYear.getHours() > 21 && timeTillNewYear.getHours() < 25){
            hour = 'часа'
        }


        if(timeTillNewYear.getMinutes() === 1 
        || timeTillNewYear.getMinutes() === 21 
        || timeTillNewYear.getMinutes() === 31 
        || timeTillNewYear.getMinutes() === 41 
        || timeTillNewYear.getMinutes() === 51){
            minute = 'минута'
        }
        if(timeTillNewYear.getMinutes() > 1 && timeTillNewYear.getMinutes() < 5 
        || timeTillNewYear.getMinutes() > 21 && timeTillNewYear.getMinutes() < 25
        || timeTillNewYear.getMinutes() > 31 && timeTillNewYear.getMinutes() < 35
        || timeTillNewYear.getMinutes() > 41 && timeTillNewYear.getMinutes() < 45
        || timeTillNewYear.getMinutes() > 51 && timeTillNewYear.getMinutes() < 55){
            minute = 'минуты'
        }

        if(timeTillNewYear.getSeconds() === 1 
        || timeTillNewYear.getSeconds() === 21 
        || timeTillNewYear.getSeconds() === 31 
        || timeTillNewYear.getSeconds() === 41 
        || timeTillNewYear.getSeconds() === 51){
            second = 'секунда'
        }
        if(timeTillNewYear.getSeconds() > 1 && timeTillNewYear.getSeconds() < 5 
        || timeTillNewYear.getSeconds() > 21 && timeTillNewYear.getSeconds() < 25
        || timeTillNewYear.getSeconds() > 31 && timeTillNewYear.getSeconds() < 35
        || timeTillNewYear.getSeconds() > 41 && timeTillNewYear.getSeconds() < 45
        || timeTillNewYear.getSeconds() > 51 && timeTillNewYear.getSeconds() < 55){
            second = 'секунды'
        }

        element.innerText = `До Нового ${newYearDate.getFullYear()} Года осталось: ${timeTillNewYear.getMonth()} ${month} ${dayValue} ${day} ${timeTillNewYear.getHours()} ${hour} ${timeTillNewYear.getMinutes()} ${minute} ${timeTillNewYear.getSeconds()} ${second}`        

        if(timeTillNewYear + 3 * 60 * 60 * 1000 < 0){
            element.innerText = `С Новым ${newYearDate.getFullYear()} Годом!`
            clearInterval(timer)
        }

    }, 1000)
    
}

newYearTimer();