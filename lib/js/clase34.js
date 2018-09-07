$.get('../assets/data/1.json').done((data) => {
    console.log(data.mensaje);
}).fail((err) => {
    console.log("El archivo no existe");
});