// Solicitar al usuario cuántos números quiere ingresar al array
let cantidadNumeros = parseInt(prompt("¿Cuántos números desea ingresar al array?"));

// Inicializar el array
let numeros = [];

// Variables para almacenar el número más pequeño y el más grande
let numeroMasPequeno = Infinity;
let numeroMasGrande = -Infinity;

// Solicitar al usuario que ingrese los números y encontrar el más pequeño y el más grande
for (let i = 0; i < cantidadNumeros; i++) {
    let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(numero);

    // Comparar para encontrar el número más pequeño
    if (numero < numeroMasPequeno) {
        numeroMasPequeno = numero;
    }

    // Comparar para encontrar el número más grande
    if (numero > numeroMasGrande) {
        numeroMasGrande = numero;
    }
}

// Mostrar el número más pequeño y el más grande
alert("El número más pequeño es: " + numeroMasPequeno);
alert("El número más grande es: " + numeroMasGrande);

