document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada
        var fileInput = document.querySelector('#file-upload');
        if (fileInput.files.length > 0) {
            var audioFile = fileInput.files[0];
            // Aquí es donde normalmente enviarías el archivo de audio al servidor para su interpretación
            // Como esto es solo una simulación, simplemente mostraremos un mensaje
            alert('Archivo de audio ' + audioFile.name + ' recibido! Interpretación: El bebé está feliz!');
        } else {
            alert('Por favor, sube un archivo de audio.');
        }
    });
});
