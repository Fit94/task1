'use strict';

let money = prompt("Ваш бюджет на месяц"),
    time = prompt("введите дату");


let appData = {
    timeData: time,
    savings: false,
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
};

let firstQ = prompt("Введите обязательную статью расходов в этом месяце"),
    secondQ = prompt("Во сколько обойдется?");

appData.expenses.f1 = firstQ;
appData.expenses.f2 = secondQ;




alert(appData.budget / 30);