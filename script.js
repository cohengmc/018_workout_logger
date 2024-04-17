const draggableElements = document.querySelectorAll('[draggable="true"]');
const dropElements = document.querySelectorAll(".drop-target");

var timer;
const timerEl = document.querySelector("#timer");
const pauseBtnEl = document.querySelector("#pause-btn");
const threeSecondBtnEl = document.querySelector("#thee-second-btn");
const currentDayEl = document.querySelector("#current-day");
const workoutContainerEl = document.querySelector("#workout-container");

const dateEl = document.querySelector("#date");

const enduranceRedirectEl = document.querySelector("#endurance-redirect");


var currentDate = new Date().toDateString();
dateEl.innerHTML = currentDate;

function newDay() {
    daysComplete++;
    updateDay();
}

function updateDay() {
    currentDayEl.innerHTML = 1 + daysComplete
    if (daysComplete == 7) {
        resetWorkoutWeek();
    }

    clearSessionBoxes();
}

function resetWorkoutWeek() {
    daysComplete = 0;
    updateDay();
}

function clearSessionBoxes() {
    dropElements.forEach(dropElement => {
        dropElement.innerHTML = dropElement.getAttribute("default");
    });
}

enduranceRedirectEl.addEventListener('click', function () {
    window.location.href = "endurance.html";
})

draggableElements.forEach(draggableElement => {
    draggableElement.addEventListener("dragstart", (event) =>
        event.dataTransfer.setData("text", event.target.outerHTML),
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
    console.log(event.target.classList);
    if (event.target.parentElement.classList.contains("drop-target")) {
        let outter = event.target.parentElement;
        event.target.remove();
        const data = event.dataTransfer.getData("text");
        outter.innerHTML = data;
    } else if (event.target.parentElement.parentElement.classList.contains("drop-target")) {
        let outter = event.target.parentElement.parentElement;
        event.target.remove();
        const data = event.dataTransfer.getData("text");
        outter.innerHTML = data;
    } 
}