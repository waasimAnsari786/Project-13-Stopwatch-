// stopwatch's code start

// these are those variables which i used in creating stopwatch
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

// these 2 functions for adding and removing any class on any element
const addClassFunc = (element, myClassName) => {
    element.classList.add(myClassName);
};

const removeClassFunc = (element, myClassName) => {
    element.classList.remove(myClassName);
};

// this piece of code is for creating the history btn
let clearHistoryBtn = document.createElement("button");
clearHistoryBtn.innerText = `clear history`;
addClassFunc(clearHistoryBtn, "stopwatch-btn")
clearHistoryBtn.setAttribute("id", "clear-history-btn")
getTimeSec.prepend(clearHistoryBtn);

// this function is for start button of stopwatch
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

//  this is the add event listener of start button of stopwatch
startBtn.addEventListener("click", () => {
    interValId = setInterval(startBtnFunc, 0);
});

//  this button is for stopbtn of stopwatch
const stopBtnFunc = (IntervalId) => {
    clearInterval(IntervalId);
};

// and this is the add event listener of stop btn
stopBtn.addEventListener("click", () => {
    stopBtnFunc(interValId);
});

//  this button is for reset button of stopwatch
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

// this function is for printing the got time of stopwatch in the get time div. and this function will execute when someone will click on get time button
const printhDataInDiv = (text) => {
    getTimeSec.style.height = `20rem`;
    getTimeSec.style.overflow = `scroll`;
    pera = document.createElement("p");
    addClassFunc(pera, "get-time-text")
    pera.innerText = text;
    getTimeSec.append(pera);
    removeClassFunc(getTimeSec, "hide")
};

// this function is for get time button
const getTimeBtnFunc = () => {
    printhDataInDiv(`Your time is ${hour.innerText} hours, ${minutes.innerText} minutes and ${sec.innerText} seconds`);
};

getTimeBtn.addEventListener("click", getTimeBtnFunc);

// this function is for clear the history of stopwatch time and this function will execute when someone will click on clear history button
const clearHistoryBtnFunc = () => {
    let peras = document.querySelectorAll(".get-time-text");
    peras.forEach(element => {
        if (element.classList.contains("get-time-text")) {
            element.remove();
        }
    });

    // this piece of code is for hidding the div of stopwatch's timer's history
    setTimeout(() => {
        addClassFunc(getTimeSec, "hide");
    }, 500);
};

clearHistoryBtn.addEventListener("click", clearHistoryBtnFunc);

// this add event listener is for stopwatch button
stopwatchBtn.addEventListener("click", () => {
    removeClassFunc(timerSec, "hide");
    addClassFunc(timerSec2, "hide");
    addClassFunc(getTimeSec, "hide");
});

// stopwatch's code end



// timer's code start

// this add event listener is for timer button
timerBtn.addEventListener("click", () => {
    removeClassFunc(timerSec2, "hide");
    addClassFunc(timerSec, "hide");
    addClassFunc(getTimeSec, "hide");
});

// this piece of code is for crerating a div which contains 4 inputs and 2 buttons for setting the time of timer.
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

// htese are all variables of timer which used in creating it
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
let countForHistoryDiv = true;
let timerArrForStoreDataInLocalStorage = [];
let deleteBtnArr = [];

let timerHourCount;
let timerMinCount;
let timerSecCount;

// this function is for set the values of timer's hour , minutes and seconds. after setinng those values which we are getting from parameters i set it in timer's hour , minutes and second's inner text. then after asssiging those set values i returned an array of settled value so taht i can use those settled values at different stages of my code.
const settheInnerTextInTimer = (val1, val2, val3, val4) => {
    if (val1 === '') {
        val1 = 'Unnamed Timer';
    } else {
        val1 = val1;
    }

    if (val2 === '') {
        val2 = '00'
        timerHourCount = val2;
    } else if (val2 < 10) {
        timerHourCount = '0' + val2;
    } else {
        timerHourCount = val2;
    }

    if (val3 === '') {
        val3 = '00'
        timerMinCount = val3;
    } else if (val3 < 10) {
        timerMinCount = '0' + val3;
    } else {
        timerMinCount = val3;
    }

    if (val4 === '') {
        val4 = '00';
        timerSecCount = val4;
    } else if (val4 < 10) {
        timerSecCount = '0' + val4;
    } else {
        timerSecCount = val4;
    }

    return [val1, timerHourCount, timerMinCount, timerSecCount];
};

// this function is for getting the data from localstorage
const getDataFromLocalStorage = (keyName) => {
    return JSON.parse(localStorage.getItem(keyName));
};

// this function is for printing the history of timer in the timer history div. you can see it by click on history button
const printTimersInHistoryDiv2 = (text1, text2, text3, text4) => {
    let historyDivInner = document.createElement("div");
    historyDivInner.style.borderBottom = `.1rem solid white`;
    historyDivInner.innerHTML = `<div class="history-div-inner">
                                    <p class="get-time-text-2" id="timer-name-history">${text1}</p>
                                    <span class="get-time-text-2" id="timer-hour-history">${text2}</span>
                                    <span class="get-time-text-2">:</span>
                                    <span class="get-time-text-2" id="timer-min-history">${text3}</span>
                                    <span class="get-time-text-2">:</span>
                                    <span class="get-time-text-2" id="timer-sec-history">${text4}</span>
                                 </div>

                                 <div class="col-6 mx-auto text-center timer-history-delete-btn-div">
                                    <button class="stopwatch-btn my-3 timer-history-delete-btn">Delete</button>
                                 </div>`;
    timerHistoryDiv.append(historyDivInner);
};

//  this function is almost same as it's above function but tghere is a differnece bbetween these 2 functions. and that is, i used the "settheInnerTextInTimer()" function in this function and i used these 2 functions at different satges according to scenario of code.
const printTimersInHistoryDiv = (text1, text2, text3, text4) => {
    let returnedArray = settheInnerTextInTimer(text1, text2, text3, text4);

    let returnedVal = returnedArray[0];
    let returnedVal2 = returnedArray[1];
    let returnedVal3 = returnedArray[2];
    let returnedVal4 = returnedArray[3];

    let historyDivInner = document.createElement("div");
    historyDivInner.style.borderBottom = `.1rem solid white`;
    historyDivInner.innerHTML = `<div class="history-div-inner">
                                    <p class="get-time-text-2" id="timer-name-history">${returnedVal}</p>
                                    <span class="get-time-text-2" id="timer-hour-history">${returnedVal2}</span>
                                    <span class="get-time-text-2">:</span>
                                    <span class="get-time-text-2" id="timer-min-history">${returnedVal3}</span>
                                    <span class="get-time-text-2">:</span>
                                    <span class="get-time-text-2" id="timer-sec-history">${returnedVal4}</span>
                                 </div>

                                 <div class="col-6 mx-auto text-center timer-history-delete-btn-div">
                                    <button class="stopwatch-btn my-3 timer-history-delete-btn">Delete</button>
                                 </div>`;
    timerHistoryDiv.append(historyDivInner);
};

// this function is for timer's reset button
const timerResetBtnFunc = () => {
    timerStartBtn.disabled = false;
    stopBtnFunc(interValId2);
    addClassFunc(timerSec2inner, "hide");
    removeClassFunc(setTimerDiv, "hide");
};

// this function is for timer's start button
const timerStartBtnFunc = () => {
    timerSecCount < 10 ? timerSeconds.innerText = `0${--timerSecCount}` : timerSeconds.innerText = --timerSecCount;
    if (timerSecCount < 1) {
        timerSecCount = 59;
        timerSeconds.innerText = timerSecCount;
        timerMinCount < 10 ? timerMinutes.innerText = `0${--timerMinCount}` : timerMinutes.innerText = --timerMinCount;
    }
    
    if (timerMinCount < 1) {
        timerMinCount = 59;        
        timerMinutes.innerText = timerMinCount;
        timerHourCount < 10 ? timerHour.innerText = `0${--timerHourCount}` : timerHour.innerText = --timerHourCount;
    }

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
            clearInterval(interValId2);
        }, 3601000);
    }
};

//  this function is for timer's set button which will execute when someone will click on timer's set button
const timerSetBtnFunc = () => {
    let returnedArray = settheInnerTextInTimer(timerNameInput.value, timerHourInput.value, timerMinInput.value, timerSecInput.value);

    let returnedVal = returnedArray[0];
    let returnedVal2 = returnedArray[1];
    let returnedVal3 = returnedArray[2];
    let returnedVal4 = returnedArray[3];

    timerHour.innerText = returnedVal2;
    timerMinutes.innerText = returnedVal3;
    timerSeconds.innerText = returnedVal4;

    let existingTimerSet = new Set(getDataFromLocalStorage("timer") || []);

    let newTimerString = `${returnedVal}:${returnedVal2}:${returnedVal3}:${returnedVal4}`;

    if (!existingTimerSet.has(newTimerString)) {
        existingTimerSet.add(newTimerString);

        localStorage.setItem("timer", JSON.stringify([...existingTimerSet]));

        addClassFunc(setTimerDiv, "hide");
        removeClassFunc(timerSec2inner, "hide");
        printTimersInHistoryDiv(timerNameInput.value, timerHourInput.value, timerMinInput.value, timerSecInput.value);
    }
};

//  this function will execute when page will refresh and it's behavior is that it will get data from local storage then print got data in timer's history div
const showGotDataFromLocalStorage = () => {
    let dataOfLocalstrage = getDataFromLocalStorage("timer") || [];
    dataOfLocalstrage.forEach(element => {
        let splitedVal = element.toString().split(":");
        printTimersInHistoryDiv2(splitedVal[0], splitedVal[1], splitedVal[2], splitedVal[3]);
    });
};

showGotDataFromLocalStorage();

const setTheHistoryTimersAgainInTheTimr = (val1, val2, val3) => {
    addClassFunc(setTimerDiv, "hide");
    addClassFunc(timerSec, "hide");
    removeClassFunc(timerSec2, "hide");
    removeClassFunc(timerSec2inner, "hide");

    let arrVal = +val1;
    let arrVal2 = +val2;
    let arrVal3 = +val3;

    timerHourCount = arrVal < 10 ? arrVal =`0${arrVal}` : arrVal;
    timerMinCount = arrVal2 < 10 ? arrVal2 =`0${arrVal2}` : arrVal2;
    timerSecCount = arrVal3 < 10 ? arrVal3 =`0${arrVal3}` : arrVal3;

    timerHour.innerText = timerHourCount;
    timerMinutes.innerText = timerMinCount;
    timerSeconds.innerText = timerSecCount;
};

const setTheValueOfTimer2 = (element) => {
    if (isNaN(element.value)) {
        element.value = `59`;
        alert(`You are trying to write letters or special characters in the timer's hour , minute or second input. Correct your timer's hour , minute or second because it's not valid`);
        removeClassFunc(timerResetBtn , "hide");
    }
}

const setTheValueOfTimer = (element) => {
    if (element.value > 60) {
        element.value = `59`;
        alert(`Correct your timer's hour , minute or second because it's not valid`);
        removeClassFunc(timerResetBtn , "hide");
    }
};

timerSetBtn.addEventListener("click", timerSetBtnFunc);


// and then we have some add event listeners for various buttons 
timerStartBtn.addEventListener("click", () => {
    timerStartBtn.disabled = true;
    interValId2 = setInterval(() => {
        timerStartBtnFunc();
    }, 1000);
});

timerStopBtn.addEventListener("click", () => {
    timerStartBtn.disabled = false;
    stopBtnFunc(interValId2);
});

timerResetBtn.addEventListener("click", timerResetBtnFunc);

timerHistoryBtn.addEventListener("click", () => {

    if (countForHistoryDiv) {
        countForHistoryDiv = false;
        removeClassFunc(timerHistoryDiv, "hide");
    }

    else {
        addClassFunc(timerHistoryDiv, "hide");
        countForHistoryDiv = true;
    }
});

timerCancelBtn.addEventListener("click", () => {
    removeClassFunc(timerSec, "hide");
    addClassFunc(timerSec2, "hide");
    addClassFunc(getTimeSec, "hide");
});

timerHistoryDiv.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("history-div-inner")) {
        setTheHistoryTimersAgainInTheTimr(evt.target.children[1].innerText, evt.target.children[3].innerText, evt.target.children[5].innerText)
    }

    else if (evt.target.id === "timer-name-history") {
        setTheHistoryTimersAgainInTheTimr(evt.target.nextElementSibling.innerText, evt.target.nextElementSibling.nextElementSibling.nextElementSibling.innerText, evt.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText)
    }

    else if (evt.target.id === "timer-hour-history") {
        setTheHistoryTimersAgainInTheTimr(evt.target.innerText, evt.target.nextElementSibling.nextElementSibling.innerText, evt.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText)
    }

    else if (evt.target.id === "timer-min-history") {
        setTheHistoryTimersAgainInTheTimr(evt.target.previousElementSibling.previousElementSibling.innerText, evt.target.innerText, evt.target.nextElementSibling.nextElementSibling.innerText)
    }

    else if (evt.target.id === "timer-sec-history") {
        setTheHistoryTimersAgainInTheTimr(evt.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText, evt.target.previousElementSibling.previousElementSibling.innerText, evt.target.innerText)
    }

    else if (evt.target.classList.contains("timer-history-delete-btn")) {
        let innerTextOfPreviousSibling = evt.target.parentElement.previousElementSibling.innerText;
        let parts = innerTextOfPreviousSibling.split(/\s*:\s*/);
        let newText = parts.join(":");
        deleteBtnArr.shift();
        deleteBtnArr.push(newText);
        let modifyArray = deleteBtnArr.map((item) => {
            return item.replace(/\n\n/g, ":");
        });

        let dataOfLocalStorage = getDataFromLocalStorage("timer");
        let newData = dataOfLocalStorage.filter(currElem => {
            return currElem !== modifyArray[0];
        });

        localStorage.setItem("timer", JSON.stringify(newData));
        let elementForRemove = evt.target.parentElement.parentElement;
        elementForRemove.remove();
    }
});

timerMinInput.addEventListener("input" , () => {
    setTheValueOfTimer(timerMinInput);
    setTheValueOfTimer2(timerMinInput)
});

timerSecInput.addEventListener("input" , () => {
    setTheValueOfTimer(timerSecInput);
    setTheValueOfTimer2(timerSecInput)
});

timerHourInput.addEventListener("input" , () => {
    setTheValueOfTimer2(timerHourInput)
});
// timer's code end