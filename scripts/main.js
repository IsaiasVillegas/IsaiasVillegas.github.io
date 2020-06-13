var miImage = document.querySelector('img');

miImage.onclick = function() {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'img/firefox-icon.png') {
        miImage.setAttribute('src', 'img/firefox2.png');
    } else {
        miImage.setAttribute('src', 'img/firefox-icon.png');
    }
}


var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');


function establecerNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    establecerNombreUsuario();
} else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    establecerNombreUsuario();
}