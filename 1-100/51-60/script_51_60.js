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

// 54 задача
let string = 'hello';
alert(string[str.length-1]);

alert(string[str.length-2]);

alert(string[str.length-3]);

// 55 задача
let str_55 = '12345';
alert(Number(str_55[0]) + Number(str_55[1]) + Number(str_55[2]) + Number(str_55[3]) + Number(str_55[4]));

// 56 задача
let num_56 = String(12345);
alert(Number(num_56[0]) + Number(num_56[1]) + Number(num_56[2]) + Number(num_56[3]) + Number(num_56[4]));

alert(Number(num_56[0]) * Number(num_56[1]) * Number(num_56[2]) * Number(num_56[3]) * Number(num_56[4]));

alert(num_56[4] + num_56[3] + num_56[2] + num_56[1] + num_56[0]);

// 57 задача
let num_57_1 = 1;
num_57_1 = num_57_1 + 1;
num_57_1 = num_57_1 + 1;
alert(num_57_1); // выведет 3

let num_57_2 = 1;
num_57_2 = num_57_2 + 2;
num_57_2 = num_57_2 + 3;
alert(num_57_2); // выведет 

// 58 задача
let num_58 = 47;
num_58 += 7;
num_58 -= 18;
num_58 *= 10;
num_58 /= 15;
alert(num_58);

// 59 задача
let num_59 = 10;
num_59++;
num_59++;
num_59--;
alert(num_59);

// 60 задача
let num_60_1 = 3;
alert(++num_60_1); // выведет 4

let num_60_2 = 3;
alert(num_60_2++); // выведет 3

let num_60_3 = 3;
alert(--num_60_3); // выведет 2

let num_60_4 = 3;
alert(num_60_4--); // выведет 3

let num_60_5_1 = 3;
let num_60_5_2 = ++num_60_5_1;
alert(num_60_5_1);
alert(num_60_5_2); // выведет 4

let num_60_6_1 = 3;
let num_60_6_2 = num_60_6_1++;
alert(num_60_6_1);
alert(num_60_6_2); // выведет 3

let num_60_7_1 = 3;
let num_60_7_2 = --num_60_7_1;
alert(num_60_7_1);
alert(num_60_7_2); // выведет 2

let num_60_8_1 = 3;
let num_60_8_2 = num_60_8_1--;
alert(num_60_8_1);
alert(num_60_8_2); // выведет 3

let num_60_9_1 = 3;
num_60_9_1++;
let num_60_9_2 = num_60_9_1--;
alert(num_60_9_1++);
alert(--num_60_9_2); // выведет 3