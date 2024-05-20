// Función para calcular el total de la factura
function calcularTotalFactura(precio1, precio2, precio3, impuesto) {
    // Sumar los precios de los tres platos
    let subtotal = precio1 + precio2 + precio3;
    // Calcular el monto del impuesto
    let montoImpuesto = subtotal * (impuesto / 100);
    // Calcular el total de la factura
    let total = subtotal + montoImpuesto;
    return total;
}

// Solicitar al usuario que ingrese los precios de los tres platos
let precio1 = parseFloat(prompt("Ingrese el precio del primer plato:"));
let precio2 = parseFloat(prompt("Ingrese el precio del segundo plato:"));
let precio3 = parseFloat(prompt("Ingrese el precio del tercer plato:"));

// Solicitar al usuario que ingrese el porcentaje del impuesto
let impuesto = parseFloat(prompt("Ingrese el porcentaje del impuesto:"));

// Calcular el total de la factura utilizando la función
let totalFactura = calcularTotalFactura(precio1, precio2, precio3, impuesto);

// Desplegar el monto total de la factura
alert("El monto total de la factura es: $" + totalFactura.toFixed(2));
