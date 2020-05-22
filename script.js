'use strict';

let money = prompt("Ваш бюджет на месяц");
let time = prompt("введите дату");
let firstQ = prompt("Введите обязательную статью расходов в этом месяце");
let secondQ = prompt("Во сколько обойдется?");
console.log(money);
console.log(time);
console.log(typeof(money));
console.log(typeof(time));

let appData = {
    timeData: time,
    savings: false,
    money,
    expenses: {},
    optionalExpenses: {
        firstQ,
        secondQ
    },
    income: [],
};

console.log(appData);
alert(money);