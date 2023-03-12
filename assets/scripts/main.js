
window.addEventListener('DOMContentLoaded', function () {

    var croppable = false;
    const image = document.getElementById("image");
    const cropper = new Cropper(image, {
        dragMode: 'move',
        aspectRatio: 33/43,
        autoCropArea: 0.95,
        restore: false,
        guides: false,
        center: false,
        highlight: false,
        modal: false,
        cropBoxMovable: false,
        cropBoxResizable: false,
        toggleDragModeOnDblclick: false,
        ready: function () {
            croppable = true;
          },
    },
);
    const create_character_button = document.getElementById("create-charachter-button");
    create_character_button.onclick = function () {
        // Crop
        var croppedCanvas;
        if (!croppable) {
            return;
        }
        croppedCanvas = cropper.getCroppedCanvas();

        // Create PDF
        const doc = new jsPDF({
            format: 'a4',
            unit: 'mm',
        });
        doc.addImage(croppedCanvas, x=10, y=10, w=33, h=43)
        doc.save('test.pdf')
    };
});
