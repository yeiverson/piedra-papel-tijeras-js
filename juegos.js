// Variables para llevar el puntaje
let puntajeHumano = 0;
let puntajeComputadora = 0;

// Elementos del HTML para actualizar
const resultadoElemento = document.getElementById("resultadoTexto");
const puntajeElemento = document.getElementById("puntaje");

// Función que se llama cuando el usuario hace clic en un botón
function jugar(eleccionHumano) {
    // 1. La computadora elige un número al azar (1, 2 o 3)
    const eleccionComputadora = Math.floor(Math.random() * 3) + 1; 

    let resultado = "";

    // Mapeo de números a jugadas para que sea más fácil de leer
    // 1 = Piedra, 2 = Papel, 3 = Tijera
    
    // 2. Determinar el ganador
    if (eleccionHumano === eleccionComputadora) {
        resultado = "¡Es un Empate!";
    } else if (
        (eleccionHumano === 1 && eleccionComputadora === 3) || // Piedra gana a Tijera
        (eleccionHumano === 2 && eleccionComputadora === 1) || // Papel gana a Piedra
        (eleccionHumano === 3 && eleccionComputadora === 2)    // Tijera gana a Papel
    ) {
        resultado = "¡Ganaste!";
        puntajeHumano++; // Aumentar puntaje
    } else {
        resultado = "Perdiste. La Computadora gana.";
        puntajeComputadora++; // Aumentar puntaje
    }

    // 3. Mostrar el resultado y actualizar el puntaje
    resultadoElemento.textContent = resultado;
    puntajeElemento.textContent = `Puntuación: Humano ${puntajeHumano} - Computadora ${puntajeComputadora}`;
}