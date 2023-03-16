// Bienvenida
alert('¡Bienvenido!')

// Peso del deportista
const pesoDeportista = parseInt(prompt('¿Cuál es tu peso en kg?'))

// Validar que el peso ingresado es un número válido
while (isNaN(pesoDeportista) || pesoDeportista <= 0) {
alert('Debe ingresar un peso válido!')
pesoDeportista = parseInt(prompt('¿Cuál es tu peso en kg?'))
}

// Cual es la elocidad del viento?
const velocidadViento = parseInt(prompt('¿Cuántos nudos de viento hay?'))

// Validar que la velocidad ingresada es un número válido
while (isNaN(velocidadViento) || velocidadViento <= 0) {
alert('Debe ingresar una velocidad de viento válida.')
velocidadViento = parseInt(prompt('¿Cuántos nudos de viento hay?'))
}

// Función para calcular el tamaño del kite según el peso y la velocidad del viento
const calcularTamañoKite = (peso, velocidad) => {
let tamaño = ''

if (peso <= 50) {
if (velocidad <= 10) {
tamaño = '9m'
} else if (velocidad <= 15) {
tamaño = '7m'
} else {
tamaño = '5m'
}
} else if (peso <= 70) {
if (velocidad <= 10) {
tamaño = '11m'
} else if (velocidad <= 15) {
tamaño = '9m'
} else {
tamaño = '7m'
}
} else {
if (velocidad <= 10) {
tamaño = '13m'
} else if (velocidad <= 15) {
tamaño = '11m'
} else {
tamaño = '9m'
}
}

return tamaño
}

// Calcular el tamaño del kite
const tamañoKite = calcularTamañoKite(pesoDeportista, velocidadViento)

// Mostrar el resultado
alert(`El tamaño de kite recomendado para tu peso (${pesoDeportista}kg) y la velocidad de viento (${velocidadViento} nudos) es: ${tamañoKite}`);
