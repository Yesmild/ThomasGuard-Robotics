document.getElementById("boton1").addEventListener("click", function() {
    var cuerpo = document.querySelector('#slide');
    var contenido = document.querySelector('#miembros');

 cuerpo.style.display = (`block`)

 if (display = `block`) {
    contenido.style.display = (`none`); 
    cuerpo.style.opacity = (1);

    
 } 


}) 


document.getElementById("cerrar").addEventListener("click", function() {
    var cuerpo = document.querySelector('#slide');
    var contenido = document.querySelector('#miembros');

 cuerpo.style.display = (`block`)

 if (contenido.style.display = (`block`)) {
    contenido.style.display = (`block`)
    cuerpo.style.display = (`none`) 
    
 }


}) 




document.getElementById("boton2").addEventListener("click", function() {
   var cuerpo = document.querySelector('#slider2');
   var contenido = document.querySelector('#miembros');

cuerpo.style.display = (`block`)

if (display = `block`) {
   contenido.style.display = (`none`); 
   cuerpo.style.opacity = (1);

   
} 


}) 


document.getElementById("cerrar1").addEventListener("click", function() {
   var cuerpo = document.querySelector('#slider2');
   var contenido = document.querySelector('#miembros');

cuerpo.style.display = (`block`)

if (contenido.style.display = (`block`)) {
   contenido.style.display = (`block`)
   cuerpo.style.display = (`none`) 
   
}


}) 



// Detectar el evento de desplazamiento
window.addEventListener('scroll', function() {
   // Obtener la posición de la parte superior de la ventana de visualización
   var scrollPosition = window.scrollY;
 
   // Obtener la posición del punto de cambio
   var puntoCambio = 1500; // Punto en el que deseas cambiar el fondo (ajusta según tus necesidades)
 
   // Verificar si el usuario ha desplazado la página hasta el punto de cambio
   if (scrollPosition >= puntoCambio) {
     // Cambiar el fondo de la página cuando se alcanza el punto de cambio
     document.getElementById('contenido').style.backgroundImage = 'none'; // Eliminar la imagen de fondo
     document.getElementById('contenido').style.backgroundColor = '#000';
     contenido.style.transition = 'background-color 0.5s ease';
     // Cambiar a color de fondo negro (ajusta según tus preferencias)
   } else {
     // Restablecer el fondo original si no se alcanza el punto de cambio
     document.getElementById('contenido').style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(imagenes/nosotros/nosotros-envdd.jpg)'; // Restaurar la imagen de fondo original
     document.getElementById('contenido').style.backgroundColor = '';
     contenido.style.transition = 'background-color 0.5s ease'; // Eliminar el color de fondo
   }
 });
 










 

 // Función para crear gotas de lluvia
function crearGotas() {
   // Seleccionar el contenedor de lluvia
   var contenedor = document.getElementById('lluvia');
 
   // Crear gotas de lluvia de forma aleatoria
   for (var i = 0; i < 50; i++) {
     var gota = document.createElement('div');
     gota.className = 'lluvia-gota';
     gota.style.left = Math.random() * 100 + '%'; /* Posición horizontal aleatoria */
     gota.style.animationDuration = (Math.random() * 2 + 1) + 's'; /* Duración de la animación aleatoria */
     contenedor.appendChild(gota); /* Agregar gota al contenedor */
   }
 }
 
 // Llamar a la función para crear las gotas de lluvia
 crearGotas();
 