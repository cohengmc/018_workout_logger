const draggableElements = document.querySelectorAll('p[draggable="true"]');
const dropElements = document.querySelectorAll(".drop-target");

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
    event.target.appendChild(document.getElementById(data));
    event.preventDefault();
}