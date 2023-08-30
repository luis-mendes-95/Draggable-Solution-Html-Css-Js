const draggables = document.querySelectorAll(".draggable");

draggables.forEach((draggable) => {
	draggable.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", draggable.id);
});
})

const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
    
    container.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    container.addEventListener("drop", (event) => {
        event.preventDefault();
        const draggableId = event.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(draggableId);
        container.appendChild(draggedElement);
    });
});
