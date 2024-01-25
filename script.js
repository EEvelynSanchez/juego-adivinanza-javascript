// el juego SELECCIONA UN NUMERO AL AZAR para que adivines. 
//floor: redondear hacia abajo.
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

// esta opcion se va a ejecutar cuando se toque el boton chequear. isNan no es un numero. || es un O. if condicion verdadera o falsa
function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){ //isNaN no es un numero
        mensaje.textContent = 'Por favor, introduce un numero valido entre 1 y 100' // text content es un atributo del parrafo
        mensaje.style.color = 'black'
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el numero!'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true // para que no se pueda cambiar el numero . desabilitado
    }else if (numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Más alto! el numero es mayor al que dijiste'
        mensaje.style.color = 'red'
    }else {
        mensaje.textContent = '¡Más bajo! el numero es menor al que dijiste'
        mensaje.style.color = 'red'
    }
}
