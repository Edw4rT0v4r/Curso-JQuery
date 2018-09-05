iniciar_selector("#pan div:first")
iniciar_selector("#pan div")
iniciar_selector("#pan .jalea")
iniciar_selector(".jalea")
iniciar_selector("#jalea")

function iniciar_selector(selector) {
    console.log(selector)
    var inicio = new Date().getTime()

    for (var i = 0; i < 10000; i++) {
        $(selector)
    }

    fin_timer(inicio)
}

function fin_timer(inicio) {
    var fin = new Date().getTime()

    console.log('time: ', fin - inicio);
}