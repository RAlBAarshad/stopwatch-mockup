let hours = 00;
let minutes = 00;
let seconds = 00;
let timer;
let isRunning = false;

function updateTime() {
    if (seconds === 59) {
        seconds = 0;
        if (minutes === 59) {
            minutes = 0;
            hours++;
        } else {
            minutes++;
        }
    } else {
        seconds++;
    }

    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
}

function start() {
    if (isRunning === false) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function stop() {
    clearInterval(timer)
    isRunning = false;
}

function reset() {
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;

}