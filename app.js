// localStorage.removeItem("timer")
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
let interValId2;
let pera;

const addClassFunc = (element, myClassName) => {
    element.classList.add(myClassName);
};

const removeClassFunc = (element, myClassName) => {
    element.classList.remove(myClassName);
};

let clearHistoryBtn = document.createElement("button");
clearHistoryBtn.innerText = `clear history`;
addClassFunc(clearHistoryBtn, "stopwatch-btn")
clearHistoryBtn.setAttribute("id", "clear-history-btn")
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

startBtn.addEventListener("click", () => {
    interValId = setInterval(startBtnFunc, 0);
});

const stopBtnFunc = (IntervalId) => {
    clearInterval(IntervalId);
};

stopBtn.addEventListener("click", () => {
    stopBtnFunc(interValId);
});

const resetBtnFun = () => {
    stopBtnFunc(interValId);
    sec.innerText = `00`;
    minutes.innerText = `00`;
    hour.innerText = `00`;
    miliSec.innerText = `00`;
    miliSecCount = 0;
    secCount = 1;
    minCount = 1;
    hourCount = 1;
};

resetBtn.addEventListener("click", resetBtnFun);

const printhDataInDiv = (text) => {
    removeClassFunc(getTimeSec, "hide")
    getTimeSec.style.height = `20rem`;
    getTimeSec.style.overflow = `scroll`;
    pera = document.createElement("p");
    addClassFunc(pera, "get-time-text")
    pera.innerText = text;
    getTimeSec.append(pera);
};

const getTimeBtnFunc = () => {
    printhDataInDiv(`Your time is ${hour.innerText} hours, ${minutes.innerText} minutes and ${sec.innerText} seconds`);
};

getTimeBtn.addEventListener("click", getTimeBtnFunc);

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

clearHistoryBtn.addEventListener("click", clearHistoryBtnFunc);

stopwatchBtn.addEventListener("click", () => {
    removeClassFunc(timerSec, "hide");
    addClassFunc(timerSec2, "hide");
    addClassFunc(getTimeSec, "hide");
});

// stopwatch's code end



// timer's code start
timerBtn.addEventListener("click", () => {
    removeClassFunc(timerSec2, "hide");
    addClassFunc(timerSec, "hide");
    addClassFunc(getTimeSec, "hide");
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

let timerStartBtn = document.querySelector("#timer-start");
let timerStopBtn = document.querySelector("#timer-stop");
let timerResetBtn = document.querySelector("#timer-reset");

let timerHistoryBtn = document.querySelector("#history-btn");
let timerHistoryDiv = document.querySelector(".history-div");

let newTimerArr;
let timerArrForStoreDataInLocalStorage = [];

let timerHourCount;
let timerMinCount;
let timerSecCount;

const getDataFromLocalStorage = (keyName) => {
    return JSON.parse(localStorage.getItem(keyName));
};

const printTimersInHistoryDiv = () => {
    let historyDivInner = document.createElement("div");
    historyDivInner.style.borderBottom = `.1rem solid white`;
    historyDivInner.innerHTML = `<p class="get-time-text" id="timer-name-history">${timerNameInput.value}</p>
                                 <span class="get-time-text" id="timer-hour-history">${timerHourInput.value}</span>
                                 <span class="get-time-text">:</span>
                                 <span class="get-time-text" id="timer-min-history">${timerMinInput.value}</span>
                                 <span class="get-time-text">:</span>
                                 <span class="get-time-text" id="timer-sec-history">${timerSecInput.value}</span>
                                 <div class="col-12 text-center">
                                 <button class="stopwatch-btn my-3 timer-history-delete-btn">Delete</button>
                                 </div>`;

    timerHistoryDiv.append(historyDivInner);

    let returnArr = [];

    for (let index = 0; index < historyDivInner.children.length; index++) {
        if (historyDivInner.children[index].classList.contains("get-time-text")) {
            returnArr.push(historyDivInner.children[index].innerText)
        }
    }

    return returnArr;
};

const timerResetBtnFunc = () => {
    stopBtnFunc(interValId2);
    addClassFunc(timerSec2inner, "hide");
    removeClassFunc(setTimerDiv, "hide");
};

const timerStartBtnFunc = () => {
    timerSecCount < 10 ? timerSeconds.innerText = `0${timerSecCount--}` : timerSeconds.innerText = timerSecCount--;
    if (timerSecCount < 1) {
        timerSecCount = 59;
        timerMinCount--;

        timerMinCount < 10 ? timerMinutes.innerText = `0${timerMinCount}` : timerMinutes.innerText = timerMinCount;
        if (timerMinCount < 1) {
            timerMinCount = 59;
            timerHourCount--;

            timerHourCount < 10 ? timerHour.innerText = `0${timerHourCount}` : timerHour.innerText = timerHourCount;

            if (timerHourCount < 1) {
                timerHourCount = `00`;
                timerHour.innerText = timerHourCount;

                setTimeout(() => {
                    timerMinCount = `00`;
                    timerMinutes.innerText = timerMinCount;
                }, 3600000);

                setTimeout(() => {
                    timerSecCount = `00`;
                    timerSeconds.innerText = timerSecCount;
                    clearInterval(interValId2)
                }, 60000);
            }
        }
    }
};

const timerSetBtnFunc = () => {
    timerHourCount = timerHourInput.value;
    timerMinCount = timerMinInput.value;
    timerSecCount = timerSecInput.value;

    timerHour.innerText = timerHourCount;
    timerMinutes.innerHTML = timerMinCount;
    timerSeconds.innerText = timerSecCount;

    timerHourCount < 10 ? timerHour.innerText = `0${timerHourCount}` : timerHour.innerText = timerHourCount;
    timerMinCount < 10 ? timerMinutes.innerText = `0${timerMinCount}` : timerMinutes.innerText = timerMinCount;
    timerSecCount < 10 ? timerSeconds.innerText = `0${timerSecCount}` : timerSeconds.innerText = timerSecCount;

    // Retrieve existing timer data from local storage
    let existingTimerSet = new Set(getDataFromLocalStorage("timer") || []);

    // Create a unique timer string
    let newTimerString = `${timerNameInput.value}_${timerHourInput.value}_${timerMinInput.value}_${timerSecInput.value}`;

    // Check if the new timer string already exists
    if (!existingTimerSet.has(newTimerString)) {
        // Add the new timer string to the set
        existingTimerSet.add(newTimerString);

        // Save the updated timer set back to local storage
        localStorage.setItem("timer", JSON.stringify([...existingTimerSet]));

        // Update UI or perform any other necessary actions
        addClassFunc(setTimerDiv, "hide");
        removeClassFunc(timerSec2inner, "hide");
        removeClassFunc(timerHistoryBtn, "hide");
        printTimersInHistoryDiv();
    }


    addClassFunc(setTimerDiv, "hide");
    removeClassFunc(timerSec2inner, "hide");
    removeClassFunc(timerHistoryBtn, "hide");
};

timerSetBtn.addEventListener("click", timerSetBtnFunc);

timerStartBtn.addEventListener("click", () => {
    interValId2 = setInterval(() => {
        timerStartBtnFunc();
    }, 1000);
});

timerStopBtn.addEventListener("click", () => {
    stopBtnFunc(interValId2);
});

timerResetBtn.addEventListener("click", timerResetBtnFunc);

timerHistoryBtn.addEventListener("click", () => {
    removeClassFunc(timerHistoryDiv, "hide");
});

// timer's code end