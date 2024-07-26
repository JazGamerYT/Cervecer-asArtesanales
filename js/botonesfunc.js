// Función para ocultar todas las secciones
function ocultarSecciones() {
    var secciones = document.querySelectorAll('.cervezas-container, .ubicaciones-container');
    secciones.forEach(function (seccion) {
        seccion.style.display = 'none';
    });
}

// Función para mostrar la sección de Nuestras Cervezas
function mostrarCervezas() {
    ocultarSecciones();
    var cervezas = document.getElementById('cervezas');
    cervezas.style.display = 'block';
}

// Función para mostrar la sección de Ubicaciones y Horarios
function mostrarUbicaciones() {
    ocultarSecciones();
    var ubicaciones = document.getElementById('ubicaciones');
    ubicaciones.style.display = 'block';
}
function mostrarInventario() {
    ocultarSecciones();
    var inventario = document.getElementById('inventario');
    inventario.style.display = 'block';
}
function mostrarContactos() {
    ocultarSecciones();
    var contactos = document.getElementById('contactos');
    contactos.style.display = 'block';
}
function mostrarFactura() {
    ocultarSecciones();
    var factura = document.getElementById('factura');
    factura.style.display = 'block';
}
// Define funciones similares para otras secciones si es necesario

// Función para mostrar la sección de Inicio al cargar la página
function mostrarInicio() {
    ocultarSecciones();
    var historia = document.getElementById('historia');
    historia.style.display = 'block';
}

// Llama a la función mostrarInicio al cargar la página
window.onload = mostrarInicio;
// Datos de muestra para las cervezas
const cervezasMuestra = [
    { id: 1, nombre: "Lager Pálida", tipo: "Lager", img: "./img/lager.cer.jpg" },
    { id: 2, nombre: "Lager Ámbar", tipo: "Lager", img: "./img/ambar.jpg" },
    { id: 3, nombre: "Ginger Blonde", tipo: "Rubia", img: "./img/ginger.cer.jpg" },
    { id: 4, nombre: "Ruby Cer", tipo: "Cobrizo", img: "./img/ruby.cer.png" }
];



// Llama a la función para generar las filas de la tabla al cargar la página
window.onload = generarFilasTabla;


