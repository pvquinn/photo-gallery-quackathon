function addImage1() {
    localStorage.setItem('image1', 'big-duck.jpg');
}

function populate() {
    const image = localStorage.getItem('image1');
    document.getElementById("collectedImage1").src="image";
}

function remove(element) {
    localStorage.removeItem(element);
    element.parentElement.remove();
}

function addToStorage(element) {
    localStorage.setItem(element.id, "image");
}


