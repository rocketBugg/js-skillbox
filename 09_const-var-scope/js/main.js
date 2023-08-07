// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
const count = 8;
let numArr = [];
function createNumbersArray(count) {
  for (let i = 1; i <= count / 2; i++) {
    numArr.push(i);
    numArr.push(i);
  }
  return numArr;
};
// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
// Этап 3. Используйте две созданные функции для создания массива c перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.
import Card from "./card.js";

let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('.enter-number');
let button = document.querySelector('.btn-play');

function newGame(container, count) {
  let cardsArray = [];
  let firstCard = null;
  let secondCard = null;
  let straightNumberArr = createNumbersArray(count);
  shuffle(straightNumberArr);
  for (const cardNumber of straightNumberArr) {
    cardsArray.push(new Card(container, cardNumber, flip))
  }

  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number != secondCard.number) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard == null) {
      firstCard = card;
    } else {
      if (secondCard == null) {
        secondCard = card;
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }
    if (document.querySelectorAll('.card.success').length === straightNumberArr.length) {
      const results = confirm('Ещё разок?')
      alert(results);
      if (results == true) {
        container.innerHTML = '',
          numArr = [],
          cardsArray = [],
          firstCard = null,
          secondCard = null;
        newGame(container, count);
      } else {
        container.innerHTML = '',
          numArr = [],
          cardsArray = [],
          firstCard = null,
          secondCard = null;
        wrapper.classList.remove('play')
      }
    }
  }
}

button.onclick = () => {
  let value = input.value;
  if (value % 2 == 0 && value <= 10 && value >= 2) {
    value = input.value
  } else {
    input.value = 4
    alert('Введите четное число от 2 до 10')
  }
  wrapper.classList.add("play")
  newGame(document.getElementById('game'), input.value)
}


