//365-1
let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');
console.log(value);

//365-2
let elem2 = document.querySelector('#elem2');
let clas = elem2.getAttribute('class');
console.log(clas);

//366-1
let elem3 = document.querySelector('#elem3');
elem3.setAttribute('value', 'TEXT');

//366-2
let elem4 = document.querySelector('#elem4');
elem4.setAttribute('class', 'valid');

//367
let elem5 = document.querySelector('#elem5');
elem5.removeAttribute('value');

//368
// let elem6 = document.querySelector('#elem6');
// elem6.haseAttribute('value');

//369
let elem7 = document.querySelector('#elem7');
console.log(elem7.dataset.num);

//369-1
   // Получаем элемент по его id
   let elem8 = document.querySelector('#elem8');
   // Добавляем обработчик события 'click' на элемент
   elem8.addEventListener('click', function() {
       // Получаем содержимое атрибута 'data-text' элемента
       let dataText = elem8.getAttribute('data-text');
       // Добавляем содержимое атрибута 'data-text' в конец текста элемента
       elem8.textContent += dataText;
   });

//369-2


 //369-3 Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.
    let b1 = document.querySelector('#b1');
    let kolvo = 0;
    b1.addEventListener('click', function(){
        kolvo +=1;
    });
    let result = document.querySelector('#result');
    let elem9 = document.querySelector('#elem9');
    result.addEventListener('click', function(){
        console.log(kolvo);
        elem9.textContent = kolvo;
    });
   

 

