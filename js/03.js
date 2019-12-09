// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let number = +prompt("enter three-digit number");
let buf = " ";

let first, second, third;

third = number % 10;

second = (number % 100 - third) / 10;

first = (number - (number % 100 - third) - (number % 10)) / 100;

if (first == second) {
    alert("одинаковые цифры есть")
} else if (second == third) {
    alert("одинаковые цифры есть")
} else if (third == first) {
    alert("одинаковые цифры есть")
}

if ((first == second) || (second == third) || (third == first)) {
    alert("одинаковые цифры есть")
}