// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, 
// год, а также високосный год.
let date = +prompt("enter date in format 'dd.mm.yy'");

let days = date.slice(0, 2);

let months = date.slice(3, 5);

let years = date.slice(6);


if (days > 31) {
    mounths + 1;
}
if (months > 12) {
    years + 1;
}