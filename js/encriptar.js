function encriptar() {
    var palabra = document.getElementById("palabra").value;
  
    // Encriptar la palabra
    var palabra_encriptada = palabra.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode(c.charCodeAt(0) + 13);
    });
  
    // Mostrar la palabra encriptada
    document.getElementById("encriptado").innerHTML = palabra_encriptada;
  }
  