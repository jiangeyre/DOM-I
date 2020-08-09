let time = 0;

let counter;

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHunds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const startBtn = document.querySelector('.startBtn');
const resetBtn = document.querySelector('.resetBtn');
const digits = document.querySelector('.digits');

function displayTime() {
    time += 10;
    let timeArray = time.toString().split('');
    msTens.textContent = timeArray[timeArray.length-2];
    if(timeArray.length >= 3){
        msHunds.textContent = timeArray[timeArray.length-3];
    }
    if(timeArray.length >= 4){
        secondOnes.textContent = timeArray[timeArray.length-4];
    }
    if(timeArray.length >= 5){
        msTens.textContent = 0;
        msHunds.textContent = 0;
        secondOnes.textContent = 0;
        secondTens.textContent = 1;
        digits.style.color = 'red';
        clearInterval(counter);
    }

}   

startBtn.addEventListener("click",startTimer);
function startTimer(){
    counter = setInterval( displayTime ,10);
    startBtn.disabled = true;
}

resetBtn.addEventListener("click",resetTimer);
function resetTimer(){
    clearInterval(counter);
    time = 0;
    msTens.textContent = '-';
    msHunds.textContent = '-';
    secondOnes.textContent = '-';
    secondTens.textContent = '-';
    startBtn.disabled = false;
    digits.style.color = 'dodgerblue';
}