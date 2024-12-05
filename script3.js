const imagenes = document.querySelectorAll('.imagen-collage');
let indice = 0;

setInterval(() => {
  imagenes[indice].style.opacity = 0;
  indice = (indice + 1) % imagenes.length;
  imagenes[indice].style.opacity = 1;
}, 3000); // Cambia la imagen cada 3 segundos