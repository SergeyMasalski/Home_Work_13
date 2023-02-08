// Задание №1
console.log('Задание №1');

let userNumber = +prompt('Задание №1\nВведите число, возводимое в степень');
let degreeOfNumber = +prompt('Задание №1\nВведите степень');

let counter1 = 0;
let resultDegree = 1;
function degreesNumber(num, deg) {
    if(deg >=0) {
        if (deg == 0) return resultDegree;
        counter1++;
        resultDegree *= num;
        if(counter1 == deg) return resultDegree;
        return degreesNumber(num, deg)
    } else {
        if (deg == 0) return resultDegree;
        counter1--;
        resultDegree /= num;
        if(counter1 == deg) return resultDegree;
        return degreesNumber(num, deg)
    }
}

console.log(`Число ${userNumber} в степени (${degreeOfNumber}) = ${degreesNumber(userNumber, degreeOfNumber)}`);

// Задание №2

console.log('\nЗадание №2');

let sharingNumber = +prompt('Задание №2\nНахождение наибольшего общего делителя\nВведите число');

let counter2 = 1;
let maxSharing = 1;
function maxSharingNumber(num) {
    if (num == 2) return 2;
    if(num % counter2 == 0) maxSharing = counter2;
    counter2++;
    if(num == (counter2 + 1)) return maxSharing;

    return maxSharingNumber(num);
}

console.log(`Максимальный множитель числа ${sharingNumber} (за исключением самого числа ${sharingNumber}) - ${maxSharingNumber(sharingNumber)}`);


// Задание №3

console.log('\nЗадание №3');

let usernumber3 = +prompt('Задание №3\nНахождение максимальной цифры числа\nВведите число');

let maxFigure = 0;
function maxFigureNumber (num) {
    if (Math.floor(num * 10) == 0) return maxFigure;
    if (num % 10 > maxFigure) maxFigure = num % 10;
    return maxFigureNumber(Math.floor(num/10));
}

console.log(`Максимальная цифра в числе ${usernumber3} - ${maxFigureNumber(usernumber3)}`);

// Задание №4

console.log('\nЗадание №4');

const userNumber4 = +prompt('Задание №4\nОпределение простое число или нет\nВведите число');



function simpleNumber(a) {
    let counter4 = 2;
    let userBoolean = false;
    simple(a)
    function simple(num) {
        if(num == 1) return true;
        if(num == (counter4 + 1)) return userBoolean = true;
        if(num % counter4 == 0) return userBoolean = false;
        counter4++;
        return simple(num);
    }

    return userBoolean
}


if (simpleNumber(userNumber4)) console.log(`Число ${userNumber4} - простое`);
else console.log(`Число ${userNumber4} - непростое`);

// Задание №5

console.log('\nЗадание №5');


const usernumber5 = +prompt('Задание №5\nОпределение делителей по возрастанию\nВведите число');
let resultDivider = '';

function resultSimpleNumber(a) {
    let counter4 = 2;
    let userBoolean = false;
    simple(a)
    function simple(num) {
        if(num == 1) return true;
        if(num == (counter4 + 1)) return userBoolean = true;
        if(num % counter4 == 0) return userBoolean = false;
        counter4++;
        return simple(num);
    }

    if(userBoolean) counter4 += 1;
    return counter4
}
// console.log(resultSimpleNumber(usernumber5));

function allDivider(num) {
    if(num == 1) return resultDivider.slice(0, -1);
    if(simpleNumber(num)) return (resultDivider += num);
    else {
        resultDivider += `${resultSimpleNumber(num)}*`
        return allDivider(num/resultSimpleNumber(num))
    }
}

if (usernumber5 == 1) console.log('1');
else console.log(allDivider(usernumber5));


// Задание №6
console.log('\nЗадание №6');
const userNumber6 = +prompt('Задание №6\nОпределение значения числа из ряда Фибоначчи\nВведите порядковый номер ряда');

function fibonacciSeries (num) {
    if (num < 3) return 1;
    return fibonacciSeries(num - 1) + fibonacciSeries(num - 2);
}

console.log(`С порядковым номером ${userNumber6} в ряду Фибоначчи находится число ${fibonacciSeries(userNumber6)}`); 
