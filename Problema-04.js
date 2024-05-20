// Solicitar al usuario que ingrese su nombre de usuario
let usuario = prompt("Por favor, ingresa tu nombre de usuario:");

// Verificar el nombre de usuario ingresado
if (usuario === "Admin") {
    // Solicitar la contraseña si el usuario es "Admin"
    let contraseña = prompt("Por favor, ingresa tu contraseña:");

    // Verificar la contraseña ingresada
    if (contraseña === "Jedi") {
        alert("¡Que la fuerza te acompañe!");
    } else if (contraseña === "" || contraseña === null) {
        alert("Cancelado");
    } else {
        alert("Contraseña incorrecta");
    }
} else if (usuario === "" || usuario === null) {
    alert("Cancelado");
} else {
    alert("No te conozco");
}
