// Задание 1. Подсчёт карт VISA

const cardNumbers = [
    "46782346",
    "45781218",
    "79874568",
    "12157845",
    "36151845",
    "41250895",
    "41201961"
];

let visaCount = 0;

for (let i = 0; i < cardNumbers.length; i++) {
    const cardNumber = cardNumbers[i];

    if (cardNumber[0] === "4") {
        visaCount++;
    }
}

console.log("Карт VISA", visaCount, "из", cardNumbers.length);


// Задание 2. Статистика по ИНН

const innNumbers = [
    "01212201212345",
    "11212201212345",
    "21212201212345",
    "11212201212345",
    "11212201212345",
    "01212201212345",
    "21212201212345"
];

let companyCount = 0;
let womenCount = 0;
let menCount = 0;

for (let i = 0; i < innNumbers.length; i++) {
    const inn = innNumbers[i];
    const firstDigit = inn[0];

    if (firstDigit === "0") {
        companyCount++;
    } else if (firstDigit === "1") {
        womenCount++;
    } else if (firstDigit === "2") {
        menCount++;
    }
}

console.log("Компаний:", companyCount);
console.log("Женщин:", womenCount);
console.log("Мужчин:", menCount);


// Задание 3. Удаление нулей из массива

const numbers = [0, 3, 0, 12, 5, 0, 1];
const numbersWithoutZeros = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number !== 0) {
        numbersWithoutZeros.push(number);
    }
}

console.log("Массив без нулей:", numbersWithoutZeros);