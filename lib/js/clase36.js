// Esta forma sirve si tienes habilitado el croos-origin domain
// $.get('https://jsonip.com/', (r) => {
//     console.log(r.ip);
// });

// Esta forma sirve para todo el mundo
$.getJSON('https://jsonip.com/?callback=?', (r) => {
    console.log(r.ip);
});