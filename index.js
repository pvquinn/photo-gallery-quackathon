function addImage1() {
    localStorage.setItem('image1', 'big-duck.jpg');
}

function populate() {
    const image = localStorage.getItem('image1');
    document.getElementById("collectedImage1").src="image";
}

function remove() {
    localStorage.removeItem('image1');
    const element = document.getElementById("collectedImage1");
    element.remove();
}

function addToStorage(element) {
    localStorage.setItem(element.id, "image");
}


