const timerEl = document.getElementById('timer');
const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');


let startTime = 0;
let elapsedTime = 0;
let timeInterval;

startEl.addEventListener('click', startTimer);
stopEl.addEventListener('click', stopTimer);
resetEl.addEventListener('click', resetTimer);

function startTimer(){
    console.log('start');
};

function stopTimer(){
    console.log('stop');
};

function resetTimer(){
    console.log('reset');
};