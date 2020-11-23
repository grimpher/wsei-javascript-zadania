// Zadanie 1
function Person (params) {
    this.name = params.name;
    this.surname = params.surname;
    this.age = params.age;
    this.country = params.country;
    this.city = params.city;
    this.language = params.language;

    this.changeAge = function (newAge) {
        this.age = newAge;
    }
    this.changeCity = function (newCity) {
        this.city = newCity;
    }
}

const robert = new Person({
    name: 'Robert',
    surname: 'Kowalski',
    age: '21',
    country: 'Polska',
    city: 'Częstochowa',
    language: 'Polish'
});
const mariella = new Person({
    name: 'Mariella',
    surname: 'Nicholson',
    age: '25',
    country: 'USA',
    city: 'Gainesville',
    language: 'English'
});
const saturbi = new Person({
    name: 'Sutarbi',
    surname: 'Gairbekov',
    age: '70',
    country: 'Finland',
    city: 'Kuopio',
    language: 'English'
});
const esila = new Person({
    name: 'Esila',
    surname: 'Kadyrov',
    age: '24',
    country: 'Czech Republic',
    city: 'Hluboká nad Vltavou',
    language: 'Czech'
});
const dennis = new Person({
    name: 'Dennis',
    surname: 'Dresdner',
    age: '67',
    country: 'Germany',
    city: 'Bremen',
    language: 'German'
});

robert.changeAge(10);
console.log(robert.age);
dennis.changeCity('Monachium');
console.log(dennis.city);

// Zadanie 2
function Calculator () {
    this._memory = [];

    this.clearMemory = function () {
        this._memory = [];
    }
    this.getMemory = function (operactionsQuantity) {

        let memoryArray = this._memory;
        
        if (memoryArray.length <= operactionsQuantity) {
            return memoryArray;
        } else if (Number.isInteger(operactionsQuantity)) {
            return memoryArray.slice(-operactionsQuantity);
        } else {
            return memoryArray;
        }
        
    }

    // Operations:
    this.add = function (firstSubject, secondSubject) {

        const result = firstSubject + secondSubject;

        this._memory.push({
            operation: 'add',
            firstSubject,
            secondSubject,
            result
        })

        return result;
        
    }

    this.subtract = function (firstSubject, secondSubject) {

        const result = firstSubject - secondSubject;

        this._memory.push({
            operation: 'subtract',
            firstSubject,
            secondSubject,
            result
        })

        return result;

    }

    this.divide = function (firstSubject, secondSubject) {

        const result = firstSubject / secondSubject;

        this._memory.push({
            operation: 'divide',
            firstSubject,
            secondSubject,
            result
        })

        return result;

    }

    this.multiply = function (firstSubject, secondSubject) {

        const result = firstSubject * secondSubject;

        this._memory.push({
            operation: 'multiply',
            firstSubject,
            secondSubject,
            result
        })

        return result;

    }
}

const firstCalculator = new Calculator();
console.log(firstCalculator.add(2,10));
console.log(firstCalculator.multiply(125,77));
console.log(firstCalculator.add(125,77));
// get last one item from calculator memory
console.log(firstCalculator.getMemory(1));

const secondCalculator = new Calculator();
console.log(secondCalculator.add(2,10));
console.log(secondCalculator.divide(20,2));
console.log(secondCalculator.subtract(125,77));
// get two last items from calculator memory
console.log(secondCalculator.getMemory(2));

// Zadanie 3
function Game () {
    this.setRandomNumberInterval = function () {
        Game.prototype.numberChangeInterval = setInterval(() => {
            Game.prototype.randomNumber = Math.round(Math.random() * 10);
        }, 1000);
    }
    this.checkRandomNumber = function () {
        if (Game.prototype.randomNumber > 5) {
            clearInterval(Game.prototype.numberChangeInterval);
            console.log(`Gra kończy działanie. Przyłapano na wartości ${Game.prototype.randomNumber}`);
        };
    }
}
Game.prototype.randomNumber = 0;
Game.prototype.numberChangeInterval;

let game1 = new Game();
let game2 = new Game();

game1.setRandomNumberInterval();
setTimeout(() => {
    game2.checkRandomNumber();
}, 2532);