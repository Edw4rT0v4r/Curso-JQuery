// Remplazo de varibales
var a = "buenos",
    b = "días";

console.log("hola, %s %s.", a, b);

// impresion de un objeto completo
console.dir(window);

// tipos de mensajes Información
console.info("Información");
console.warn("alerta");
console.error("opps, algo paso");

// Conteo
for (var i = 0; i < 10; i++) {
    console.count("Vamos por");
}

// Agrupar mensajes
console.group("funcion main");
console.info("En camino");
console.warn("Estamos llegando");
console.error("Chocamos...");
console.groupEnd();

// Medir tiempos
console.time("Medir ciclo");
var num = 0;
for (var i = 0; i < 100000; i++) {
    num += 10;
}
console.timeEnd("Medir ciclo");