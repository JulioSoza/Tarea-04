// Obtener el número ingresado por el usuario
const numero = parseInt(prompt("Ingrese un número: "));

// Verificar el número y mostrar el mensaje correspondiente
if (numero === 0) {
  alert("0");
} else if (numero > 0) {
  alert("1");
} else {
  alert("-1");
}