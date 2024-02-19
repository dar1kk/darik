// Задание 184
//1 Возведите 2 в 10 степень.
console.log(Math.pow(2, 10));

//2 Найдите квадратный корень из 245.
console.log(Math.sqrt(245));

//3 Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum =0;
for (let i = 0; i <= arr.length-1; i++){
    arr[i] = Math.pow(arr[i], 3);
    sum += arr[i];
}
console.log(Math.sqrt(sum))

// Задание 185
//1 Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let a2 = Math.sqrt(379);
console.log(Math.round(a2))
console.log(a2.toFixed(1))
console.log(a2.toFixed(2))

//2 Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
b = Math.sqrt(587);
console.log(Math.floor(b));
console.log(Math.ceil(b));

// Задание 186
//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));


// Задание 187
//1 Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

//2 С помощью цикла заполните массив 10-ю случайными целыми числами.
let arr2 = [];
while (arr2.length <=9){
    let num = getRandomInt(1, 10);
    arr2.push(num);
}
console.log(arr2);

// Задание 188
//Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
let a = 8;
let b = 9;
console.log(Math.abs(a-b));

// Задание 189
//1 Дана строка 'js'. Сделайте из нее строку 'JS'.
str = 'js';
console.log(str.toUpperCase());

//2 Дана строка 'JS'. Сделайте из нее строку 'js'.
let str = 'JS';
console.log(str.toLowerCase(str));

// Задание 190
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str2 = 'я учу javascript!';
let sub = str2.substr(2,14);
let sub2 = str2.substring(2,16);
let sub3 = str2.slice(2,16);
console.log(sub);
console.log(sub2);
console.log(sub3);

// Задание 191
//1 Дана строка. Проверьте, начинается ли эта строка на 'http://'.
let str = 'http://sfdgfhgjhklkj;';
let res = str.startsWith('http://');
console.log(res);

//2 Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
let res = str.endsWith('.html');
console.log(res);

// Задание 192
//Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
str = '1-2-3-4-5';
while (str.includes('-')) {
	str = str.replace('-', '.');
}
console.log(res);

// Задание 193
//1 Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
str = '1-2-3-4-5';
let arr = str.split('-');
console.log(arr);

//2 Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let arr = str.split('');
console.log(arr);

//3 С помощью метода join слейте его в строку '1-2-3-4-5'.
let arr = [1, 2, 3, 4, 5];
let str = arr.join('-');
console.log(str);

// Задание 194
//1 Выведите на экран первый элемент этого массива.
let arr = [1, 2, 3];
console.log(arr[0]);

//2 Выведите на экран последний элемент этого массива.
console.log(arr[-1]);

//3 Добавьте ему в конец элементы 4, 5, 6.
arr.push(4, 5, 6);
console.log(arr);

//4 Добавьте ему в начало элементы 4, 5, 6.
arr.unshift(4, 5, 6);
console.log(arr);

// Задание 195
//1 Сделайте из этого массива следующий: [1, 2, 3]
let arr =[1, 2, 3, 4, 5];
let sub = arr.slice(0, 3);
console.log(sub);

//2 Используя этот массив, запишите в новую переменную следующий массив:[4, 5]
let arr =[1, 2, 3, 4, 5];
let sub = arr.slice(3, 5);
console.log(sub);

// Задание 196
//1 С помощью метода splice преобразуйте массив в следующий:[1, 4, 5]
let arr =[1, 2, 3, 4, 5];
arr.splice(1,2)
console.log(arr);

//2 С помощью метода splice сделайте из него массив:[1, 2, 3, 'a', 'b', 'c', 4, 5]
let arr =[1, 2, 3, 4, 5];
arr.splice(1,2,'a', 'b', 'c')
console.log(arr);

//3 С помощью метода splice сделайте из него массив: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
let arr =[1, 2, 3, 4, 5];
arr.splice(1,0,'a', 'b')
arr.splice(6,0,'c')
arr.splice(8,0,'e')
console.log(arr);


// Задание 197
//Проверьте, есть ли в этом массиве число 3.
let arr =[1, 2, 3, 4, 5];
let res = arr.includes(3);
console.log(res);

// Задание 198
// Получите массив его ключей.
 let obj = {a: 1, b: 2, c: 3};
 console.log(Object.keys(obj));

 //Поиск ошибок в коде со стандартными методами JavaScript

/* 1 Код должен найти сумму цифр числа:
let num = 12345;
let arr = num.split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}
console.log(sum); */

let num = '12345';
let arr = num.split('');

let sum = 0;
for (let digit of arr) {
	sum = sum + Number(digit);
}
console.log(sum);

/* 2 Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += digit;
}
console.log(sum);*/

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum);

/* 3 let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum = Number(digit);
}
console.log(sum); */

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum);

/* 4 let num = 12345;
let arr = String(num).split('');

let sum = '';
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum);*/

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum);

/* 5let num = 12345;
let arr = String(num).split('');

let prod = 0;
for (let digit of arr) {
	prod *= digit;
}
console.log(prod); */
let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
	prod *= digit;
}
console.log(prod);

