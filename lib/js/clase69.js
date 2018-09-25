var hoy = moment();

console.log(hoy);

console.log(hoy.format('HH:mm:ss'));

console.log(hoy.format('HH:mm:ss'));

var miCumple = moment([1997, 4, 1])
console.log('El mes es: ', miCumple.format('MMMM'));

var diaSemana = moment().day();

console.log('Dia de la semana: ', moment.weekdays(diaSemana));

var mes = moment().month();

console.log('Mes: ', moment.months(mes));

console.log('La hora en Londres es: ', moment.utc().format('HH:mm:ss'));
console.log('La hora en Japón es: ', moment.utc().add(9, 'hours').format('HH:mm:ss'));

console.log('El mundial de futbol fue:', moment('Junio 14, 2018', 'MMMM DDYYYY').fromNow());

console.log('Que fecha sera dentro de 7 días: ', moment().add(7, 'days').format('MMMM DD, YYYY'));

var desayuno = moment('8:00', 'HH:mm');
var almuerzo = moment('12:00', 'HH:mm');

console.log(moment.duration(almuerzo - desayuno).humanize() + ' de trabajo entre desayuno y almuerzo');