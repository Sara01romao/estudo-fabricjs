
var canvas = new fabric.Canvas('c');
var imgElement = document.getElementById('my-img');
var imgInstance = new fabric.Image(imgElement, {
left: 100,
top: 100,
angle: 30,
opacity: 0
});
canvas.add(imgInstance);
