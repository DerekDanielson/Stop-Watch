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
    startTime = Date.now() - elapsedTime;

    timeInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);
};

function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        return milliseconds > 9 ? milliseconds : '0' + milliseconds;
};

function stopTimer(){
    console.log('stop');
};

function resetTimer(){
    console.log('reset');
};