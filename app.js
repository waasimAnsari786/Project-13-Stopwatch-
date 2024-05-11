// stopwatch's code start
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
let timerSec = document.querySelector(".timer-sec");
let timerSec2 = document.querySelector(".timer-sec-2");

let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");
let getTimeBtn = document.querySelector("#get-time");
let stopwatchBtn = document.querySelector("#stopwatch-btn");
let timerBtn = document.querySelector("#timer-btn");

let interValId;

const addClassFunc = (element , myClassName) => {
    element.classList.add(myClassName);
};

const removeClassFunc = (element , myClassName) => {
    element.classList.remove(myClassName);
};

let clearHistoryBtn = document.createElement("button");
clearHistoryBtn.innerText = `clear history`;
addClassFunc(clearHistoryBtn , "stopwatch-btn")
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
    removeClassFunc(getTimeSec , "hide")
    getTimeSec.style.height = `20rem`;
    getTimeSec.style.overflow = `scroll`;
    let pera = document.createElement("p");
    addClassFunc(pera , "get-time-text")
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

stopwatchBtn.addEventListener("click" , () => {
    removeClassFunc(timerSec , "hide")
    addClassFunc(timerSec2 , "hide")
});

// stopwatch's code end



// timer's code start
timerBtn.addEventListener("click" , () => {
    removeClassFunc(timerSec2 , "hide");
    addClassFunc(timerSec , "hide");
});

let setTimerDiv = document.createElement("div");
setTimerDiv.innerHTML = `<input type="text" class="timer-input mt-5" timer-name-input placeholder="Timer Name">
                         <input type="text" class="timer-input" timer-hour-input placeholder="Timer Hour">
                         <input type="text" class="timer-input" timer-min-input placeholder="Timer Minutes">
                         <input type="text" class="timer-input mb-5" timer-sec-input placeholder="Timer Seconds">
                         <div class="col-12 d-flex justify-content-between align-items-center">
                         <button class="stopwatch-btn" id="set-timer-btn">set</button>
                         <button class="stopwatch-btn" id="cancel-timer-btn">cancel</button>
                         </div>`;

timerSec2.prepend(setTimerDiv);

let timerHour = document.querySelector("#timer-hour");
let timerMinutes = document.querySelector("#timer-min");
let timerSeconds = document.querySelector("#timer-sec");
let timerSec2inner = document.querySelector(".timer-sec-2-inner");

let timerSetBtn = timerSec2.firstElementChild.children[4].children[0];
let timerCancelBtn = timerSec2.firstElementChild.children[4].children[1];
let timerNameInput = timerSec2.firstElementChild.children[0];
let timerHourInput = timerSec2.firstElementChild.children[1];
let timerMinInput = timerSec2.firstElementChild.children[2];
let timerSecInput = timerSec2.firstElementChild.children[3];

let timerHourCount;
let timerMinCount;
let timerSecCount;

const timerSetBtnFunc = () => {
    timerHourCount = timerHourInput.value;
    timerMinCount = timerMinInput.value;
    timerSecCount = timerSecInput.value;

    // if (timerHourCount < 10) {
        
    // }

    addClassFunc(setTimerDiv , "hide");
    removeClassFunc(timerSec2inner , "hide");
};

timerSetBtn.addEventListener("click" , timerSetBtnFunc);


// timer's code end