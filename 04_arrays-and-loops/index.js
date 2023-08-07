// Задание 1

let n = -3;
let m = -10;
let range = Math.abs(n - m);
let randomMassive = [];
let count = 42;

let min = Math.min(n, m);
let max = Math.max(n, m);

for (let i = min; i < count; ++i) {
  randomMassive.push(Math.round(Math.random() * range + min));
}

console.log(randomMassive);

// Задание 2

let arr = [];
let count1 = 7;
let = [];

for (let i = 1; i <= count1; ++i) {
  arr.push(i);
}

console.log(arr)

for (let i = arr.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = arr[i];
  arr [i] = arr [j] ;
  arr [j] = temp;
  console.log(arr);
}

// Задание 3

let n1 = 100;
let index = -1;


if (arr.indexOf(n1) === index) {
  console.log('Элемент не найден :(');
}
else {
  console.log('Индекс элемента : ' + arr.indexOf(n1));
}

// Задание 4

let arr1 = [2, 2, 17, 21,45, 12, 54, 31, 53];

let arr2 = [12, 44, 23, 5];

let arr3 = arr1.concat(arr2);
console.log(arr3);

// Можно выполнить через array.push (но по заданию нельзя было переприсваивать массивы целиком друг в друга) || spread (зададим новый массив let arr3 = [...arr1, ...ar2] и тд, здесь будет важен порядок добавления массивов )

