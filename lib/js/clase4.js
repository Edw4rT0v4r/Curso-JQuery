var $elemt = $(".elemt")

$elemt.is('div') && console.log("Es un div")
$elemt.is('.elemt') && console.log("Tiene la clase elemt")
$elemt.is(':visible') && console.log("El elemento esta visible")
$elemt.is(':not(:visible)') && console.log("El elemento esta invisible")

$elemt.animate({
    'width': 200
}, 1000)

$elemt.is(':animated') && console.log("Es animado")