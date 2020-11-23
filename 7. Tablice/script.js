// Zadanie 1
const tablica = [5, NaN, false, true, null, 'test'];

for (let i = 0; i < tablica.length; i++) {
    console.log(tablica[i]);
}

// Zadanie 2
const liczbyPierwsze = [2, 3, 5, 7, '11', 13, '17', 19, '23'];

// 1
console.log(liczbyPierwsze[0], liczbyPierwsze[1]);
// 2
console.log(liczbyPierwsze[liczbyPierwsze.length - 1]);
// 3
for (let i = 0; i < liczbyPierwsze.length; i++) {
    console.log(liczbyPierwsze[i]);
}
// 4
for (let i = 0; i < liczbyPierwsze.length; i += 2) {
    console.log(liczbyPierwsze[i]);
}
// 5
for (let i = 0; i < liczbyPierwsze.length; i++) {
    if (typeof liczbyPierwsze[i] === 'string') {
        console.log(liczbyPierwsze[i]);
    }
}
// 6
for (let i = 0; i < liczbyPierwsze.length; i++) {
    if (typeof liczbyPierwsze[i] === 'number') {
        console.log(liczbyPierwsze[i]);
    }
}

// Zadanie 3
const tylkoLiczby = [52, 16, 45, 37, 345, 234, 76, 125, 228];

// 1
const suma = tylkoLiczby.reduce((a, b) => (a + b), 0);
console.log(suma);
// 2
const roznica = tylkoLiczby.reduce((a, b) => (a - b), 0);
console.log(roznica);
// 3
const srednia = suma / tylkoLiczby.length;
console.log(srednia);
// 4
for (let i = 0; i < tablica.length; i++) {
    if (tylkoLiczby[i] % 2 === 0) {
        console.log(tylkoLiczby[i]);
    }
}
// 5
for (let i = 0; i < tablica.length; i++) {
    if (tylkoLiczby[i] % 2 === 1) {
        console.log(tylkoLiczby[i]);
    }
}
// 6
let najwiekszaLiczba = tylkoLiczby[0];
for (let i = 0; i < tablica.length; i++) {
    if (tylkoLiczby[i] > najwiekszaLiczba) {
        najwiekszaLiczba = tylkoLiczby[i];
    }
}
console.log(najwiekszaLiczba);
// 7
let najmniejszaLiczba = tylkoLiczby[0];
for (let i = 0; i < tablica.length; i++) {
    if (tylkoLiczby[i] < najmniejszaLiczba) {
        najmniejszaLiczba = tylkoLiczby[i];
    }
}
console.log(najmniejszaLiczba);
// 8
for (let i = tylkoLiczby.length - 1; i >= 0; i--) {
    console.log(tylkoLiczby[i]);
}

// Zadanie 4
function sumujTablice (tablica) {
    console.log(tablica.reduce((a, b) => (a + b), 0));
}

// Zadanie 5
function pomnozElementyTablicyPrzezIchSrednia (tablica) {
    const suma = tablica.reduce((a, b) => (a + b), 0);
    const srednia = suma / tablica.length;
    
    tablica.forEach(el => {
        console.log(el * srednia);
    })
}

// Zadanie 6
function zwrocSredniaLiczbZTablicy (tablica) {
    const liczbyParzyste = tablica.filter(el => el % 2 === 0);
    const suma = liczbyParzyste.reduce((a, b) => (a + b), 0);

    return suma / liczbyParzyste.length;
}

// Zadanie 7
function posortujTablice (tablica) {
    const posortowanaTablica = tablica.sort((a,b) => a - b);

    console.log(posortowanaTablica);
}

// Zadanie 8
function zwrocSumeIndeksowTablic (tablica1, tablica2) {
    let sumaElementow = [];

    const dluzszaTablica = tablica1.length >= tablica2 ? tablica1 : tablica2; 

    dluzszaTablica.forEach((el, index) => {

        if (typeof tablica1[index] === 'undefined') {
            sumaElementow.push(tablica2[index]);
        } else if (typeof tablica2[index] === 'undefined') {
            sumaElementow.push(tablica1[index]);
        } else {
            sumaElementow.push(tablica1[index] + tablica2[index]);
        }

    })

    return sumaElementow;
}

// Zadanie 9
function odwrocZnakiTablicy (tablica) {
    return tablica.map(el => -el);
}