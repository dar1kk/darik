// Передача функций параметрами в JavaScript

//Задание 240
/*Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, 
вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.*/
test(
	function() {return 1;},
	function() {return 2;},
    function() {return 3;}
);
function test(func1, func2, func3) {
	console.log( func1() + func2()+func3() ); 
}

//Задание 241
/*Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.
 Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.*/
 function func1(){
    return 1;
 }
 function func2(){
    return 2;
 }
 function func3(){
    return 3;
 }

test(
	func1(),
	func2(),
    func3()
);

//Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
const func1 = function() { return 1; };
const func2 = function() { return 2; };
const func3 = function() { return 3; };
test(func1, func2, func3);

//Задание 242
/*Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа. Пусть функция test возвращает сумму результатов переданных функций:

function test(num, func1, func2) {
	return func1(num) + func2(num);
}
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль*/
let square = function(num) { return num * num; };
let cube = function(num) { return num * num * num; };

function test(num, func1, func2) {
  return func1(num) + func2(num);
}
const result = test(3, square, cube);
console.log(result); 

//Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.
//Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.
function test(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	return arr;
}

let result2 = test([9, 3, 2], function(num) {
	return Math.pow(num,3);
});
console.log(result2);

//Задание 245
/*Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. 
Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.*/
function square(num) {
    return num ** 2;
  }
  function cube(num) {
    return num ** 3;
  }
  function func(num1, num2) {
    return square(num1) + cube(num2);
  }
  const result3 = func(2, 3);
  console.log(result3); 
  
  //Задание 250
//Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.
function func1() {
    return function() {
      return 1;
    };
  }
  function func2() {
    return function() {
      return 2;
    };
  }
let result4 = func1()() + func2()();
 console.log(result4); 

   //Задание 251
 //Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
 function func() {
	return function() {
		return function() {
            return function(){
                return function(){
                  return '!';   
                }
            }
		};
	};
}

console.log( func()()()()() ); // выведет '!'
  
 //Задание 253
 //Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
 let result = each([1, 2, 3, 4, 5], function(num) {
	return num ** 2;
});
console.log(result);

//Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
