// Zadanie 1
let pierwszaLiczba = 11;
let drugaLiczba = 52;
if (pierwszaLiczba > drugaLiczba) {
    console.log('Pierwsza liczba jest większa.');
} else if (drugaLiczba > pierwszaLiczba) {
    console.log('Druga liczba jest większa.');
} else {
    console.log('Obie liczby są sobie równe.');
}

// Zadanie 2
let zmienna1 = 87;
let zmienna2 = 19;
let zmienna3 = 21;
if (zmienna1 > zmienna2 && zmienna1 > zmienna3) {
    console.log('Pierwsza liczba jest największa');
} else  if (zmienna2 > zmienna1 && zmienna2 > zmienna3) {
    console.log('Druga liczba jest nawiększa');
} else if (zmienna3 > zmienna1 && zmienna3 > zmienna2) {
    console.log('Trzecia liczba jest największa');
}

// Zadanie 3
for (let i = 0; i < 10; i++) {

    console.log('Lubię JavaScript');

}

// Zadanie 4
let result = 0;
for (let i = 1; i <= 10; i++) {

    result+= i;

}
console.log(result);

// Zadanie 5
let n = 14;
for (let i = 0; i <= n; i++) {

    let czyParzysta = 'nieparzysta';
    if (i % 2 === 0) czyParzysta = 'parzysta';

    console.log(`${i} - ${czyParzysta}`);

}

// Zadanie 6
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(`i = ${i}, j = ${j}`);

    }

}

// Zadanie 7 
for (let i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }

}

// Zadanie 8
// a)
for (let rows = 1; rows <= 5; rows++) {
    
    let output = '';

    for (let columns = 1; columns <= rows; columns++ ) {
        output += '*';
    }

    console.log(output);

}

// b)
for (let rows = 1; rows <= 5; rows++) {
    
    let output = '';

    for (let spaces = 0; spaces <= 4 - rows; spaces++ ) {
        output += ' ';
    }

    for (let columns = 1; columns <= rows; columns++ ) {
        output += '*';
        if (columns !== rows) {
            output += ' ';
        }
    }

    console.log(output);

}

// c)
for (let rows = 1; rows <= 5; rows++) {
    
    let output = '';

    for (let spaces = 0; spaces <= 5 - rows; spaces++ ) {
        output += ' ';
    }

    for (let columns = 1; columns <= rows; columns++ ) {
        output += '*';
        if (columns !== rows) {
            output += '*';
        }
    }

    console.log(output);

}

// d)
for (let rows = 1; rows <= 5; rows++) {
    
    let output = '';

    for (let columns = 0; columns <= 4; columns++ ) {
        if (columns < rows) {
            output += '*';
        } else {
            output += columns;
        }
    }

    console.log(output);

}
console.log('-----');

for (let rows = 5; rows >= 1; rows--) {
    
    let output = '';

    for (let columns = 0; columns <= 4; columns++ ) {
        if (columns < rows) {
            output += '*';
        } else {
            output += columns;
        }
    }

    console.log(output);

}

// e)
for (let rows = 1; rows <= 8; rows++) {
    
    let output = '';

    if (rows > 5) {
        output = '    *';
        console.log(output);
        continue;
    }

    for (let spaces = 0; spaces <= 4 - rows; spaces++ ) {
        output += ' ';
    }

    for (let columns = 1; columns <= rows; columns++ ) {
        output += '*';
        if (columns !== rows) {
            output += ' ';
        }
    }

    console.log(output);

}
