//!!!!! Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться 
// в указанный квадрат.
let length = +prompt("enter length of circle");
let perimetr = +prompt("enter perimetr of square");
let a, r, diametr;

a = perimetr / 4;
r = length / (2 * Math.PI);
diametr = r * 2;

if (diametr <= a) {
    alert("this circle can be in square");
} else alert("can't");