// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту 
// хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let money = +prompt("how much do you need to convert in USD?");
let currency = prompt("enter currency");
const eur = 5;
const uan = 23;
const azn = 4;
let buf = " ";

if (currency == "eur") {
    buf += (money * eur).toFixed(2);
    alert(buf);
} else if (currency == "uan") {
    buf += (money * uan).toFixed(2);
    alert(buf);
} else if (currency == "azn") {
    buf += (money * azn).toFixed(2);
    alert(buf);
}