//Задание 200
//Сделайте функцию, выводящую в консоль ваше имя.
function my_name() {
	console.log('Daria');
}
my_name();

//Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.
let sum=0 ;
function sum100() {
  for (let n=0; n<=100; n++){
    sum += n;
  }
  console.log(sum);
	}
	
sum100()

//Задание 201
//Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
function cub(num) {
	console.log(Math.pow(num,3));
}
cub(2);

//Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
function znak(n) {
    n = n>=0 ? '+++' : '---';
    console.log(n);
  }
znak(2);

//Задание 202
//Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
function func(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}
func(2,6,7);

//Задание 203
//С помощью созданной вами функции выведите в консоль сумму значений эти переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
function func(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}
func(param1,param2,param3);

//Задание 205
//Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.
function func(num) {
    let res = Math.pow(num,3)
    return(res);
  }
  func(3);

//Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
function chet(n) {
    return Math.sqrt(n);
  }
  console.log(chet(3))
  console.log(chet(4))
  console.log(chet(3)+chet(4))

  //Задание 206
 /*Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.*/
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

let res = sqrt(2) ;
console.log(round(res));

//Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.
function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

let res1 = sum(sqrt(2), sqrt(3), sqrt(4)) ;
console.log(res1);

//Задание 209
//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
function kolvo(p){
  let n =0;
  while(p >=10){
    p/=2;
    n++;
  }
  return n;
}

console.log(kolvo(20));

//Задание 210
/*Дана следующая функция:
function func(num1, num2) {
	let res;
	
	if (num1 > 0 && num2 > 0) {
		res = num1 * num2;
	} else {
		res = num1 - num2;
	}
	
	return res;
}
console.log(func(3, 4));
Перепишите ее в сокращенной форме согласно изученной теории.*/
function func(num1, num2) {
	let res;
	
	if (num1 > 0 && num2 > 0) {
		return(num1 * num2);
	} else {
		return(num1 - num2);
	}
	
}
console.log(func(3, 4));

//Задание 211
//Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function chet(arr) {
	for (let elem of arr) {
		if (elem % 2==0) {
			return true;
		}
	}
	return false;
}

//Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
function nechet(number) {
  let digits = number.toString().split("");
  for (let i = 0; i < digits.length; i++) {
    if (parseInt(digits[i]) % 2 == 0) {
      return false;
    }
  }
  return true;
 }

 //Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
 function podrad(a) {
  for (let i=1; i < a.length; ++i) {
    if (a[i] === a[i-1]) {
      return true;
    }
  }
  return false;
}

//Задание 212
/*Дана следующая функция:
function func(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории.*/
function func(a, b) {
	return a == b;
}

/*Дана следующая функция:
function func(a, b) {
	if (a + b >= 10) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории.*/
function func(a, b) {
	return (a + b) >= 10;
}

