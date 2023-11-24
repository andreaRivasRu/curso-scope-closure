// variables

var a; // declarando
var b = 'b'; // declarar y asignar
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; // global

function bestFuit() {
    console.log(fruit);
}

bestFuit();

// Crear una variable global por descuido, asignando sin declarar
function countries() {
    country = 'Argentina';
    console.log(country);
}

countries();
console.log(country);