function greeting() {
    let userName = 'Ana'; // la variable tiene alcance solo dentro de la funcion
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);