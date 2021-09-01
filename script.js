"use strict";
//Пример 1 Интерполяция
const typeGoods = 'food';

//console.log('https://market.com/'+ typeGoods);

//console.log('https://market.com/'+ typeGoods + '/' + '10');

console.log(`https://market.com/${typeGoods}`);


//Задание 1
const typeGames = 'games';
const typeStrat = 'strategy';
const typeNumber = '10';

console.log (`https://market.com/${typeGames}` + `/` + `${typeStrat}` + `/` + `${typeNumber}`);

//-------------------------------------------------------------------------------------------
//Пример 2 Стрелочные функции (картинка с типами функций)
let number = 10;
//замыкания (сама функция, вместе с тем что ей доступно)
function showMessage(text) {
    console.log(text);
    let number = 20;
    console.log(number);
}

showMessage("Hello!!!")
console.log(number);

const server = function(){
    console.log('server start...');
};

server();

const calc = (x, y) => x+y
/*const calc = (x, y) => {
    return x+y
};

const calc = x => x+10;*/

console.log(calc(10,5));

//Задание 2
let number = Math.PI;

function showMessage(text) {
    console.log(text)
}

showMessage("Hello!!!")
console.log(number)