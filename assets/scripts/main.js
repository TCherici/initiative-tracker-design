const image = document.getElementById("image");
const cropper = new Cropper(image, {
    dragMode: 'move',
    aspectRatio: 75/100,
    autoCropArea: 0.95,
    restore: false,
    guides: false,
    center: false,
    highlight: false,
    modal: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
});
