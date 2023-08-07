// Задание 1

let x1 = -8;
let y1 = -1;

let x2 = -5;
let y2 = -100;

console.log(Math.abs(x1 - x2) * Math.abs(y1 - y2));


// Задание 2


let a = 13.890123;
let b = 2.891564;
let n = 3;
// let firstNormalized = Math.floor((Math.abs(Math.floor(a) - a)) * Math.pow(10, n)); Вероятно, что возможно сделать так, но не уверен, что так правильно
// let secondNormalized = Math.floor((Math.abs(Math.floor(b) - b)) * Math.pow(10, n));
let firstNormalized = Math.floor(a % 1 * Math.pow(10, n));
let secondNormalized = Math.floor(b % 1 * Math.pow(10, n));

console.log('Исходные числа равны', a === b);
console.log(firstNormalized);
console.log(secondNormalized);
console.log('Дробные части равны', firstNormalized === secondNormalized);
console.log('Первое дробное число больше', firstNormalized > secondNormalized);
console.log('Первое дробное число меньше', firstNormalized < secondNormalized);
console.log('Первое дробное число больше или равно', firstNormalized >= secondNormalized)
console.log('Первое дробное число меньше или равно', firstNormalized <= secondNormalized)
console.log('Первое дробное число не равно второму', firstNormalized !== secondNormalized)


// Задание 3

let n = -3;
let m = -10;
let min = Math.min(n, m);
let range = Math.abs(n - m);
let numberInRange = Math.random() * range + min;
let numberInRange2 = Math.random() * range + min;
let x1 = numberInRange;
let x2 = numberInRange2;

console.log(x1);
console.log(x2);
console.log('Числа равны', x1 === x2);
console.log('Первое число больше', x1 > x2);
console.log('Первое число меньше', x1 < x2);
console.log('Первое число больше или равно', x1 >= x2)
console.log('Первое число меньше или равно', x1 <= x2)
console.log('Первое число не равно второму', x1 !== x2)

// Числа не округлял, т.к. в задании не было сказано, о сравнении целых случайных чисел :), если нужно будет сравнивать целые числа,то конструкция будет выглядеть вот так:
// let numberInRange = Math.round(Math.random() * range + min);
