// Zadanie 1
let licznik = 0;
const odliczanie = setInterval(() => {

    console.log('Cześć po raz ' + ++licznik);
    if (licznik === 15) {
        clearInterval(odliczanie);
    }

}, 3000)

// Zadanie 2
setTimeout(() => {

    const tablica = ['witaj', 'świecie', 'piękny', 'kwiecie.'];
    console.log(tablica);

    for (let i = 0; i < tablica.length; i++) {

        setTimeout(() => {
            console.log(tablica[i]);
        }, 3000 * i + 3000);
    }
    
}, 2000)