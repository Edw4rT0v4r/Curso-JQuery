$.when($.get('../assets/data/1.json'), $.get('../assets/data/2.json'))
    .then((r1, r2) => {
        r1 = r1[0];
        r2 = r2[0];
        var mensaje = r1.mensaje + " " + r2.nombre + " tienes " + r2.edad + " años";
        console.log(mensaje);
    }).catch((err) => {
        console.log('Error');
    });