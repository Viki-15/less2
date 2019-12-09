// Задать пользователю 3 вопроса. За каждый правильный 
// ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let first = +prompt("how much 2+2?");
let second = +prompt("how much 5+5?");
let third = +prompt("how much 9+3?");

let count = 0;
let buf = 0;
let balls = 0;

switch (first) {
    case 4:
        balls = count + 2;
        buf += balls;
        break;
}
switch (second) {
    case 10:
        balls = count + 2;
        buf += balls;
        break;
}
switch (third) {
    case 12:
        balls = count + 2;
        buf += balls;

        break;
}
alert(`your balls ${buf}`);