// Zadanie 1
const car = {
    make: 'Volkswagen',
    model: 'Passat',
    year: 2003
};

// Zadanie 2
car.changeMake = function (make) {
    this.make = make;
};

// Zadanie 3
const summingObject = {
    sum: 0,
    sumNumbers: function (numArray) {
        this.sum = numArray.reduce((a, b) => a + b);
        console.log(this.sum);
    }
};

// Zadanie 4
const car2 = {
    name: 'BMW',
    age: 12,
    country: 'Germany'
};

for (const [key, value] of Object.entries(car2)) {
    console.log(`${key}: ${value}`);
}

// Zadanie 5
car2.specification = {
    productionYear: 2008,
    horsepower: 313,
    transmission: 'automatic'
}

for (const [key, value] of Object.entries(car2.specification)) {
    console.log(`${key}: ${value}`);
}

// Zadanie 6
car2.mileage = 228000;
car2.sayHello = function () {
    console.log('Hello');
}