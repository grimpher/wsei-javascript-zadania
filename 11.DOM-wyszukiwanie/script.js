// Zadanie 1
const allLists = document.querySelectorAll('.list');


// Zadanie 2
function getElements (query) {
    return document.querySelectorAll(query);
}
const allInputs = getElements('input');
console.log(allInputs);

// Zadanie 3
const listIdElement = document.getElementById('list');

// Zadanie 4
function logElements (query) {
    console.log(document.querySelectorAll(query));
}

logElements('li');
logElements('ul');
logElements('span');
logElements('div.list span');
logElements('div#spans span');