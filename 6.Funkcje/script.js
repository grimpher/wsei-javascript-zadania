// Zadanie 1
function showResult () {
    console.log('Udało się!');
};

// Zadanie 2
function showParameter (param) {
    console.log(param);
};

// Zadanie 3
function showArray (array) {
    
    array.forEach(el => {
        console.log(el);
    });

}

// Zadanie 4
function brokenRecord(string) {

    let count = 0;

    const logInterval = setInterval(() => {

        count++;
        console.log(string);

        if (count === 5) {
            console.log('Koniec');
            clearInterval(logInterval);
        }

    }, 3000)

}