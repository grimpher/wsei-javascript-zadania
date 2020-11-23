// Zadanie 1
const person1 = {
    name: 'Jarosław',
    surname: 'Kamiński',
    age: 70,
    country: 'Polska',
    city: 'Warszawa',
    getInfo: function () {
        console.log('Imię: ' + this.name);
        console.log('Nazwisko: ' + this.surname);
        console.log('Wiek: ' + this.age);
        console.log('Kraj: ' + this.country);
        console.log('Miasto: ' + this.city);
    },
    incrementAge: function () {
        this.age++;
    }
};

const person2 = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 22,
    country: 'Polska',
    city: 'Częstochowa',
    getInfo: function () {
        console.log('Imię: ' + this.name);
        console.log('Nazwisko: ' + this.surname);
        console.log('Wiek: ' + this.age);
        console.log('Kraj: ' + this.country);
        console.log('Miasto: ' + this.city);
    },
    incrementAge: function () {
        this.age++;
    }
}

person2.incrementAge();
person2.incrementAge();
person2.getInfo();

// Zadanie 2
person1.favoriteDishes = ['Pizza', 'Spaghetti Bolognese'];
person2.favoriteDishes = ['Ramen', 'Cacio e pepe'];

person1.getFavoriteDishes = function () {
    console.log(this.name + "'s favorite dishes:");
    this.favoriteDishes.forEach(dish => {
        console.log('🍳 ' + dish);
    })
}
person2.getFavoriteDishes = function () {
    console.log(this.name + "'s favorite dishes:");
    this.favoriteDishes.forEach(dish => {
        console.log('🍳 ' + dish);
    })
}

person1.addFavoriteDish = function (dishName) {
    this.favoriteDishes.push(dishName);
}
person2.addFavoriteDish = function (dishName) {
    this.favoriteDishes.push(dishName);
}

person1.addFavoriteDish('Souther Fried Chicken');
person1.addFavoriteDish('Boeuf bourguignon');

person2.addFavoriteDish('Barramundi');
person2.addFavoriteDish('Raclette');

person1.getFavoriteDishes();
person2.getFavoriteDishes();

// Zadanie 3
function Calculator () {
    this.a = 0;
    this.b = 0;

    this.setA = function (number) {
        this.a = number;
    }
    this.setB = function (number) {
        this.b = number;
    }

    // Operations:
    this.add = function () {

        return this.a + this.b;
        
    }

    this.subtract = function () {

        return this.a - this.b;

    }

    this.divide = function () {
        if (this.b === 0) {
            return console.error('Nie dziel c*****o przez zero!')
        }

        return this.a / this.b;

    }

    this.multiply = function () {

        return this.a * this.b;

    }
}

const calculator = new Calculator();
calculator.setA(20); calculator.setB(11);
console.log(calculator.add());

// Zadanie 4
function LadderSimulator (totalSteps) {
    this.currentStep = 0;
    this.totalSteps = totalSteps;

    this.oneStepUp = function () {
        if (this.currentStep === this.totalSteps) {
            console.log("You've already reached the top of the ladder!")
        } else {
            this.currentStep++;
            console.log("Current step: " + this.currentStep);
        }
    }
    this.oneStepDown = function () {
        if (this.currentStep === 0) {
            console.log("You're on the ground!");
        } else {
            this.currentStep--;
            console.log("Current step: " + this.currentStep);
        }
    }
    this.jumpDown = function () {
        if (this.currentStep >= 5) {
            console.log("You cannot jump of the ladder because it's too high!");
        } else {
            this.currentStep = 0;
            console.log("Current step: " + this.currentStep);
        }
    }
}

const ladder = new LadderSimulator(10);
ladder.oneStepUp();
ladder.oneStepUp();
ladder.oneStepUp();
ladder.oneStepUp();
ladder.oneStepUp();
ladder.oneStepUp();
ladder.jumpDown();
ladder.oneStepDown();
ladder.oneStepDown();
ladder.jumpDown();