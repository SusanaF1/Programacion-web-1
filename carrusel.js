function moverCarrusel(event, boton, direccion) {
    event.preventDefault(); // Evita que al hacer clic en las flechas se abra el enlace de la tarjeta
    
    const contenedor = boton.closest('.carrusel-contenedor');
    const pantalla = contenedor.querySelector('.carrusel-pantalla');
    const imagenes = pantalla.querySelectorAll('img');
    
    // Obtener el índice actual guardado en el elemento (o usar 0 por defecto)
    let indiceActual = parseInt(contenedor.dataset.indice || "0");
    
    // Calcular el siguiente índice
    indiceActual += direccion;
    
    // Crear bucle infinito
    if (indiceActual >= imagenes.length) indiceActual = 0;
    if (indiceActual < 0) indiceActual = imagenes.length - 1;
    
    // Guardar el nuevo índice
    contenedor.dataset.indice = indiceActual;
    
    // Desplazar las imágenes horizontalmente
    pantalla.style.transform = `translateX(-${indiceActual * 100}%)`;
}