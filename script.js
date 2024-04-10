const draggableElements = document.querySelectorAll('p[draggable="true"]');
const dropElements = document.querySelectorAll(".drop-target");

var timer;
const timerEl = document.querySelector("#timer")
const pauseBtnEl = document.querySelector("#pause-btn")
const threeSecondBtnEl = document.querySelector("#thee-second-btn")
const currentDayEl = document.querySelector("#current-day")
const workoutContainerEl = document.querySelector("#workout-container")


var time = 60;
let paused = false;
let daysComplete = 0;

setInterval(updateCountdown, 1000);

function updateCountdown() {
    if(!paused){
        time--;
    }

    timerEl.innerHTML = time;

    if(time == 0){
        time = 60;
        newDay();
        console.log("Hooray!");
    }
}

function newDay() {
    daysComplete++;
    updateDay();
}

function updateDay() {
    currentDayEl.innerHTML = 1 + daysComplete
    if(daysComplete == 7){
        resetWorkoutWeek();
    }

    clearSessionBoxes();
}

function resetWorkoutWeek() {
    daysComplete = 0;
    updateDay();
    resetWorkouts();
}

pauseBtnEl.addEventListener('click', function() {
    paused = !paused;
    if(paused){
        pauseBtnEl.innerHTML = 'Play';
    } else {
        pauseBtnEl.innerHTML = 'Pause';
    }
    console.log(paused);
})

threeSecondBtnEl.addEventListener('click', function() {
    if(time > 4){
        time = 4;
    }
})

function clearSessionBoxes() {
    dropElements.forEach(dropElement => {
        dropElement.innerHTML = dropElement.getAttribute("default");
    });
}

function resetWorkouts() {
    workoutContainerEl.innerHTML = `
    <p id="core1" draggable="true">Core</p>
    <p id="core2" draggable="true">Core</p>
    <p id="balance1" draggable="true">Balence</p>
    <p id="balance2" draggable="true">Balence</p>
    <p id="endurance1" draggable="true">Endurance</p>
    <p id="endurance2" draggable="true">Endurance</p>
    <p id="arms1" draggable="true">Arms</p>
    <p id="arms2" draggable="true">Arms</p>
    <p id="walk1" draggable="true">Walk</p>
    <p id="walk2" draggable="true">Walk</p>
    <p id="rest1" draggable="true">Rest</p>
    <p id="rest2" draggable="true">Rest</p>
    <p id="rest3" draggable="true">Rest</p>
    <p id="rest4" draggable="true">Rest</p>
    `
}

draggableElements.forEach(draggableElement => {
    draggableElement.addEventListener("dragstart", (event) =>
        event.dataTransfer.setData("text", event.target.id),
    );

});

dropElements.forEach(dropElement => {
    dropElement.addEventListener("dragenter", (event) => {
        event.preventDefault();
    });

    dropElement.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    dropElement.addEventListener("ondragover", (event) => {
        event.preventDefault();
    });
});

function onDrop(event) {
    const data = event.dataTransfer.getData("text");
    event.target.innerHTML = ""
    event.target.appendChild(document.getElementById(data));
    event.preventDefault();
}