var iteraciones = 1000;
var elem = $('#elem');
// forma lenta tratar de no hacer
console.time('enlazado dom');

for (var i = 0; i < iteraciones; i++) {
    elem.width(Math.round(Math.random() * 100));
    elem.height(Math.round(Math.random() * 100));
}

console.timeEnd('enlazado dom');

// Forma rapida

console.time('separado dom');

var parent = elem.parent();
elem.detach();

for (var i = 0; i < iteraciones; i++) {
    elem.width(Math.round(Math.random() * 100));
    elem.height(Math.round(Math.random() * 100));
}

elem.appendTo(parent);

console.timeEnd('separado dom');