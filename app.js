let mainDiv = document.querySelector(".stopwatch");
let miliSec = document.querySelector("#mili-sec");
let sec = document.querySelector("#sec");
let minutes = document.querySelector("#min");
let hour = document.querySelector("#hour");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");
let getTimeBtn = document.querySelector("#get-time");
let clearTimeBtn = document.querySelector("#clear-time");
let miliSecCount = 0;
let secCount = 1;
let minCount = 1;
let hourCount = 1;
let interValId;

const startBtnFunc = () => {
    miliSec.innerText = miliSecCount++;
    if (miliSecCount === 200) {
        miliSecCount = 0;
        secCount < 10 ? sec.innerText = `0${secCount++}` : sec.innerText = secCount++;

        if (secCount === 60) {
            secCount = 0;
            minCount < 10 ? minutes.innerText = `0${minCount++}` : minutes.innerText = minCount++;

            if (minCount === 60) {
                minCount = 0;
                hourCount < 10 ? hour.innerText = `0${hourCount++}` : hour.innerText = hourCount++;
            }
        }
    }
};

startBtn.addEventListener("click", () => {
    interValId = setInterval(startBtnFunc, 0);
});

const stopBtnFunc = () => {
    clearInterval(interValId);
};

stopBtn.addEventListener("click" , stopBtnFunc);