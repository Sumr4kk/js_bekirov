// 41 задача
 // alert(eee); ошибка во 2 строке кода, переменная не найдена

// 42 задача
const PI = 3.14;
const radius = 5;
const circumference = 2 * PI * radius;
//console.log("Длина окружности с радиусом", radius, "равна", circumference);

// 43 задача
let a_43_1 = '5' + '2';
alert(a_43_1); // выведет 52

let a_43_2 = '5' + 2;
alert(a_43_2); // выведет 52

let a_43_3 = 5 + '2';
alert(a_43_3); // выведет 52

let a_43_4 = 5 + 2;
alert(a_43_4); // выведет 7

let a_43_5 = '5' * '2';
alert(a_43_5); // выведет 10

let a_43_6 = '5' - '2';
alert(a_43_6); // выведет 3

let a_43_7 = '5' / '2';
alert(a_43_7); // выведет 2.5

let a_43_8 = '5' % '2';
alert(a_43_8); // выведет 1

let a_43_9 = '5s' * '2';
alert(a_43_9); // выведет NaN

let a_43_10 = '5s' + '2';
alert(a_43_10); // выведет 5s2

let a_43_11 = (-'5') + (-'2');
alert(a_43_11); // выведет -7

let a_43_12 = '5' * 1 + '2' * 1;
alert(a_43_12); // выведет 7

let a_43_13 = '5' * '1' + '2' * '1';
alert(a_43_13); // выведет 7

let a_43_14 = '' + 3 + 1;
alert(a_43_14); // выведет 31

// 44 задача
let a_44_1 = '10', b_44_1 = '20';
alert(Number(a_44_1) + Number(b_44_1));

alert(Number('2') + Number('3')); // выведет 5

alert(2 + Number('3')); // веведет 5

alert('2' + Number('3')); // выведет 23

// 45 задача
let a_45 = +'2';
let b_45 = +'3';
alert(a_45 + b_45);

// 46 задача
let px1 = '5px', px2 = '6px';
let result1 = parseInt(px1) + parseInt(px2);
alert(result1);

let px3 = '5.5px', px4 = '6.25px';
let result2 = parseFloat(px3) + parseFloat(px4);
alert(result2 + 'px');