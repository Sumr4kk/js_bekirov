// 51 задача
let test_51_1 = Boolean(3);
alert(test_51_1); // выведет true

let test_51_2 = Boolean(0);
alert(test_51_2); // выведет false

let test_51_3 = Boolean(-1);
alert(test_51_3); // выведет true

let test_51_4 = Boolean(-0);
alert(test_51_4); // выведет false

let test_51_5 = Boolean(+0);
alert(test_51_5); // выведет false

let test_51_6 = Boolean('abc');
alert(test_51_6); // выведет true

let test_51_7 = Boolean('');
alert(test_51_7); // выведет false

let test_51_8 = Boolean('0');
alert(test_51_8); // выведет true

let test_51_9 = Boolean(true);
alert(test_51_9); // выведет true

let test_51_10 = Boolean(false);
alert(test_51_10); // выведет false

let test_51_11 = Boolean('true');
alert(test_51_11); // выведет true

let test_51_12 = Boolean('false');
alert(test_51_12); // выведет true

let test_51_13 = Boolean(null);
alert(test_51_13); // выведет false

let test_51_14 = Boolean('null');
alert(test_51_14); // выведет true

let test_51_15 = Boolean(undefined);
alert(test_51_15); // выведет false

let test_51_16 = Boolean('undefined');
alert(test_51_16); // выведет true

let test_51_17 = Boolean(NaN);
alert(test_51_17); // выведет false

let test_51_18 = Boolean('NaN');
alert(test_51_18); // выведет true

let test_51_19 = Boolean(3 * 'abc');
alert(test_51_19); // выведет false

let test_51_20 = Boolean(Infinity);
alert(test_51_20); // выведет true

let test_51_21 = Boolean(1 / 0);
alert(test_51_21); // выведет true

// 52 задание
let str = 'abcde';
alert(str[0] + ' ' + str[2] + ' ' + str[4]);

let str1 = str[4]+str[3]+str[2]+str[1]+str[0];
alert(str1);

let num = 2;
alert(str[num]);