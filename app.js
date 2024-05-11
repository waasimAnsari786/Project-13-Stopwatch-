let mainDiv = document.querySelector(".stopwatch");
let getTimeSec = document.querySelector(".get-time-sec");
let miliSec = document.querySelector("#mili-sec");
let sec = document.querySelector("#sec");
let minutes = document.querySelector("#min");
let hour = document.querySelector("#hour");
let miliSecCount = 0;
let secCount = 1;
let minCount = 1;
let hourCount = 1;

let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");
let getTimeBtn = document.querySelector("#get-time");

let interValId;

let clearHistoryBtn = document.createElement("button");
clearHistoryBtn.innerText = `clear history`;
clearHistoryBtn.classList.add("stopwatch-btn");
clearHistoryBtn.setAttribute("id" , "clear-history-btn")
getTimeSec.prepend(clearHistoryBtn);

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

const getTimeBtnFunc = () => {
    getTimeSec.classList.remove("hide");
    getTimeSec.style.height = `20rem`;
    getTimeSec.style.overflow = `scroll`;
    let pera = document.createElement("p");
    pera.classList.add("get-time-text");
    pera.innerText = `Your time is ${hour.innerText} hours, ${minutes.innerText} minutes and ${sec.innerText} seconds`;
    getTimeSec.append(pera);
};

getTimeBtn.addEventListener("click", getTimeBtnFunc);

startBtn.addEventListener("click", () => {
    interValId = setInterval(startBtnFunc, 0);
});

const stopBtnFunc = () => {
    clearInterval(interValId);
};

stopBtn.addEventListener("click", stopBtnFunc);

const resetBtnFun = () => {
    stopBtnFunc();
    sec.innerText = `00`;
    minutes.innerText = `00`;
    hour.innerText = `00`;
    miliSec.innerText = `00`;
};

const clearHistoryBtnFunc = () => {
    let peras = document.querySelectorAll(".get-time-text");
    peras.forEach(element => {
        if (element.classList.contains("get-time-text")) {
            element.remove();
        }
    });

    setTimeout(() => {
        getTimeSec.style.display = `none`
    }, 500);
};

clearHistoryBtn.addEventListener("click" , clearHistoryBtnFunc);
resetBtn.addEventListener("click" , resetBtnFun);