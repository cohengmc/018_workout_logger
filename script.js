const draggableElement = document.querySelector('p[draggable="true"]');
const dropElement = document.getElementById("drop-target");


draggableElement.addEventListener("dragstart", (event) =>
event.dataTransfer.setData("text", event.target.id),
);

dropElement.addEventListener("dragenter", (event) => {
  event.preventDefault();
});

dropElement.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropElement.addEventListener("ondragover", (event) => {
    event.preventDefault();
  });

function onDrop(event) {
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    event.preventDefault();
  }