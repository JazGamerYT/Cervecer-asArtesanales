function calcularFactura() {
    // Obtener valores de los campos
    var precio = parseFloat(document.getElementById('precio').value) || 0;
    var cantidad = parseFloat(document.getElementById('cantidad').value) || 0;
    var descuentoPorcentaje = parseFloat(document.getElementById('descuento').value) || 0;

    // Calcular subtotal
    var subtotal = precio * cantidad;

    // Calcular descuento
    var descuento = (descuentoPorcentaje / 100) * subtotal;

    // Calcular total con descuento
    var totalDescuento = subtotal - descuento;

    // Calcular IVA (12% del subtotal, no del total con descuento)
    var iva = 0.12 * subtotal;

    // Calcular total
    var total = totalDescuento + iva;

    // Mostrar resultados en el HTML
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('iva').textContent = iva.toFixed(2);
    document.getElementById('totalDescuento').textContent = totalDescuento.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}
