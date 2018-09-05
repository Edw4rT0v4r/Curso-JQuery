var url = 'https://www.google.com.co/search?rlz=1C1CHBD_esCO751CO751&q=auteco&spell=1&sa=X&ved=0ahUKEwjI_7Cw4KLdAhWKuVMKHX5eARAQBQglKAA&biw=767&bih=740&dpr=1.25#comentarios';

var a = $('<a>', {
    href: url
})

console.log('Host name: ', a.prop('hostname'))
console.log('Path: ', a.prop('pathname'))
console.log('Query: ', a.prop('search'))
console.log('Protocolo: ', a.prop('protocol'))
console.log('Hash: ', a.prop('hash'))

console.log(a.prop('search').split('&'))