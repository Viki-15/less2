// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, 
// от 300 до 500 – 5%, от 500 и выше – 7%.
let sum = +prompt("enter sum");
let buf = "";
if ((sum >= 200) && (sum < 300)) {
    buf += ((sum * 3) / 100) + sum;
    alert(buf);
} else if ((sum >= 300) && (sum < 500)) {
    buf += ((sum * 5) / 100) + sum;
    alert(buf);
} else if (sum >= 500) {
    buf += ((sum * 7) / 100) + sum;
    alert(buf);
}