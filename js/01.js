// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), 
// подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
let age = prompt("Enter your age");
if ((age >= 0) && (age < 12)) {
    alert(`chaild`);
} else if ((age >= 12) && (age < 18)) {
    alert(`teenager`);
} else if ((age >= 18) && (age < 60)) {
    alert(`adult`);
} else {
    alert(`retiree`);
}