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

//Пример 3 Call-back функции

function server(){
    setTimeout(function(){
        console.log(1);
    },1000)
}

function foo(){
    console.log(2);
}

server();
foo();

function serverNew(host, callback){
    console.log(`Server ${host} is starting...`);
    callback();
}

// serverNew('MyServer', function(){
//      console.log('connect success!');
// })

function done(){
    console.log('connect success!');
}

serverNew('MyServer', done);

//Задание 3
function one(){
    console.log(1);
}

function two(){
    setTimeout(function(){
        console.log(2);
    },1000)
    
}

function three(){
    setTimeout(function(){
        console.log(3);
    },2000)
}

function four(){
    setTimeout(function(){
        console.log(4);
    },3000)
}

function five(){
    setTimeout(function(){
        console.log(5);
    },4000)
}

function six(){
    setTimeout(function(){
        console.log(6);
    },5000)
}

function seven(){
    setTimeout(function(){
        console.log(7);
    },6000)
}

function eight(){
    setTimeout(function(){
        console.log(8);
    },7000)
}

function nine(){
    setTimeout(function(){
        console.log(9);
    },8000)
}

function ten(){
    setTimeout(function(){
        console.log(10);
    },9000)
}

function win(){
    setTimeout(function(){
        console.log('You win a chicken');
    },10000)
}


one();
two();
three();
four();
five();
six();
seven();
eight();
nine();
ten();
win();