







document.getElementById('slider2').addEventListener('click', function() { 
    var contenido = document.querySelector('#contenido');
    var estilo = getComputedStyle(contenido);
    var left = parseInt(estilo.left) || 0;

    contenido.style.left = (left + 100) + 'vw';


    if (left <= 50) {
        contenido.style.left = (left = 0) + 'px';
    }

    if (left <= -1350) {
        contenido.style.left = (left + 1350 ) + 'px';
    }

   if (left === -2700)  {
    contenido.style.left = (left + 1350) + 'px';
   }

   
    

});



document.getElementById('slider3').addEventListener('click', function() { 
    var contenido = document.querySelector('#contenido');
    var estilo = getComputedStyle(contenido);
    var left = parseInt(estilo.left) || 0;

    contenido.style.left = (left - 100) + 'vw';

    if (left <= -2900) {
        contenido.style.left = (left - 0) + 'px';
    }

    

});




document.getElementById("cajas4").addEventListener("click", function() {
    window.location.href = "nosotros.html"; }) 

    document.getElementById("ingreso1").addEventListener("click", function() {
        var cuerpo = document.querySelector('#result');
        var contenido = document.querySelector('#contenido');
        var boton = document.querySelector(`#buttons1`)
        var body = document.querySelector(`body`)

     cuerpo.style.display = (`block`)

     if (display = `block`) {
        contenido.style.display = (`none`)
        boton.style.display = (`none`)
        body.style.backgroundColor = (`rgba(0, 0, 0, 0.5)`)
        
     }

    
    }) 
        
        document.getElementById("ingreso2").addEventListener("click", function() {
            var cuerpo = document.querySelector('#result');
            var contenido = document.querySelector('#contenido');
            var boton = document.querySelector(`#buttons1`)
    
    
         cuerpo.style.display = (`block`)
    
         if (display = `block`) {
            contenido.style.display = (`none`)
            boton.style.display = (`none`)
            
         } }) 

            document.getElementById("ingreso3").addEventListener("click", function() {
                var cuerpo = document.querySelector('#result');
                var contenido = document.querySelector('#contenido');
                var boton = document.querySelector(`#buttons1`)
        
        
             cuerpo.style.display = (`block`)
        
             if (display = `block`) {
                contenido.style.display = (`none`)
                boton.style.display = (`none`)
                
             } }) 
    



                document.getElementById(`btn`).addEventListener(`click`,function() {


                    var contenido = document.querySelector('#contenido')
                    var cuerpo = document.querySelector('#result');
                    var boton = document.querySelector(`#buttons1`)



                    contenido.style.display = (`flex`)   

                    if (contenido.style.display = (`flex`) ) {
                        cuerpo.style.display = (`none`)
                        boton.style.display = (`flex`)


                    }  




                })

 





