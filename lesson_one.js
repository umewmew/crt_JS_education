//Создание замыканий
//1
function showName () {
    const name = 'Bobba';

    return function showConsoleName() {
        console.log(name);
    };
}
const bobbaName = showName();
bobbaName();
//2
const summCounter = (count) => {
    return function() {
        return count + 1;
    };
}
const counter = summCounter(1);
counter();
//3
function makeAdd(x) {
    return function(y) {
        return x + y;
    };
}
const add5 = makeAdd(5);
add5(5);





//методы массивов
//map
const numbersArray = [1, 2, 3, 5];
const newNumbersArray = numbersArray.map(num => num * 2);
//filter
const numArray = [2, 6, 10, 1];
const result = numArray.filter(num => num < 8);
//reduce
const arrayNumbers = [1, 6, 4, 7, 2];
const resultSum = arrayNumbers.reduce(((total, amount) => total + amount));

//вывод из объекта массив ключей
const workerObject = {
    name: 'Лиля',
    age: 22,
    experience: 5,
    post: 'Журналист'
};

const workerKeysArray = Object.keys(workerObject);

//функция с параметрами по умолчанию
const showMessage = (user = 'Друг,', msg = 'приветики-пистолетики!') => {
    console.log(user, msg);
};
showMessage();
showMessage('Руки вверх!', 'Пистолетиков нет!')

//создание class
class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    getInfoHuman() {
        console.log(`Меня зовут ${this.name}. Я ${this.gender}`)
    }
}

const femaleHuman = new Human('Анна', 'девушка');
const animalHuman = new Human('Рыжик', 'кот');

femaleHuman.getInfoHuman();
animalHuman.getInfoHuman();

class Profession extends Human {
    constructor(name, gender, profession, education) {
        super(name, gender);
        this.profession = profession;
        this.education = education;
    }
    getProfInfo(){
        console.log(`Меня зовут ${this.name}. Я ${this.gender}. По профессии ${this.profession}, у меня ${this.education}`);
    }
}

const professionAnimal = new Profession('Рыжик', 'кот', 'программист', 'нет образования, зато есть лапки');
const professionMale = new Profession('Даниил', 'мужской', 'хирург', 'высшее хирургическое')
JSON.stringify(professionAnimal.getProfInfo());
JSON.stringify(professionMale.getProfInfo());
