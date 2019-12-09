// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо 
// кратен 400, либо кратен 4 и при этом не кратен 100.
let year = +prompt("enter year");

if ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0) {
    alert("year visocosnoy");
}else alert("not visocosnoy");