const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondsHand = document.querySelector('.second');

let secondsStopwatch = 0;
let minutesStopwatch = 0;
let hoursStopwatch = 0;
let isPaused = false;

let interval;

window.addEventListener('load', function () {
    const watchButton = document.getElementById('watch-button');
    const startStopwatchButton = document.getElementById('start-stopwatch-button');
    const stopStopwatchButton = document.getElementById('stop-stopwatch-button');
    const resetStopwatchButton = document.getElementById('reset-stopwatch-button');
    const pauseStopwatchButton = document.getElementById('pause-stopwatch-button');

    const body = document.querySelector('body');

    body.addEventListener('click', event => {
        switch (event.target) {
            case watchButton:
                activateSimpleWatch();
                break;
            case startStopwatchButton:
                startStopwatch();
                break;
            case stopStopwatchButton:
                stopStopwatch();
                break;
            case resetStopwatchButton:
                resetStopwatch();
                break;
            case pauseStopwatchButton:
                pauseStopwatch();
                break;
        }
    });
});

function activateSimpleWatch() {
    clearInterval(interval);
    interval = setInterval(() => {
        let day = new Date();

        // 360/12 = 30deg
        // 12 is at 0deg, 1 at 30deg, each hour has a distance of 30deg between each other
        let hour = day.getHours() * 30;
        // 360/60 = 6deg
        let minutes = day.getMinutes() * 6;
        let seconds = day.getSeconds() * 6;

        rotateWatchHands((hour) + (minutes / 12), minutes, seconds);
        watchPlaceholder(day.getHours(), day.getMinutes(), day.getSeconds());
    });
}

function startStopwatch() {
    resetStopwatch();
    countingForStopwatch();
}

function watchPlaceholder(digitalHour, digitalMinute, digitalSecond) {
    let hour = digitalHour >= 10 ? digitalHour : `0${digitalHour}`;
    let minutes = digitalMinute >= 10 ? digitalMinute : `0${digitalMinute}`;
    let seconds = digitalSecond >= 10 ? digitalSecond : `0${digitalSecond}`;
    document.getElementById('stopwatch-placeholder').innerText = `${hour}:${minutes}:${seconds}`;
}

function rotateWatchHands(handHour, handMinutes, handSeconds) {
    hourHand.style.transform = `rotateZ(${handHour}deg)`;
    minuteHand.style.transform = `rotateZ(${handMinutes}deg)`;
    secondsHand.style.transform = `rotateZ(${handSeconds}deg)`;
}

function countingForStopwatch() {
    interval = setInterval( () => {
        secondsStopwatch++;

        if(secondsStopwatch === 60) {
            secondsStopwatch = 0;
            minutesStopwatch++;

            if (minutesStopwatch === 60) {
                minutesStopwatch = 0;
                hoursStopwatch++;
            }
        }

        const secondsDegree = secondsStopwatch * 6;
        const minutesDegree = minutesStopwatch * 6;
        const hoursDegree = hoursStopwatch * 30;

        rotateWatchHands((hoursDegree) + (minutesDegree / 12), minutesDegree, secondsDegree);
        watchPlaceholder(hoursStopwatch, minutesStopwatch, secondsStopwatch);
    }, 1000);

}

function stopStopwatch() {
    clearInterval(interval);
    watchPlaceholder(hoursStopwatch, minutesStopwatch, secondsStopwatch);
}

function resetStopwatch() {
    isPaused = false;
    clearInterval(interval);
    secondsStopwatch = 0;
    minutesStopwatch = 0;
    hoursStopwatch = 0;

    rotateWatchHands(0, 0, 0);
    watchPlaceholder(hoursStopwatch, minutesStopwatch, secondsStopwatch);
}

function pauseStopwatch() {
    isPaused = !isPaused;
    if (isPaused) {
        stopStopwatch();
    } else {
        countingForStopwatch();
    }
    watchPlaceholder(hoursStopwatch, minutesStopwatch, secondsStopwatch);
}
