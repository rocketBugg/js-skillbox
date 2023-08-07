let allStudents = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 }
]

function createStudentsList() {
  let list = document.createElement('ul');
  createList(allStudents, list);
  // Задаю класс
  list.classList.add('list');
  return list;
}

function createList(arr, list) {
  for (let arrayIndex of arr) {
    let listItem = document.createElement('li');
    let title = document.createElement('h2');
    let text = document.createElement('span');
    title.textContent = `${arrayIndex.name}`
    text.textContent = `Возраст: ${arrayIndex.age} лет`
    // Задаю классы
    listItem.classList.add('list-item');
    title.classList.add('title');
    // Создание
    listItem.append(title);
    listItem.append(text);
    list.append(listItem);
  }
}

let button = document.createElement('button');
button.textContent = 'Показать список';
document.body.append(button);

let buttonBack = document.createElement('button');
buttonBack.textContent = 'Скрыть список';
document.body.append(buttonBack);

let list = null;
button.onclick = function showList() {
  if (list === null) {
    list = createStudentsList(allStudents);
    document.body.append(list);
  }
}

buttonBack.onclick = function () {
  if (list !== null) {
    list.remove();
    list = null;
  }
}
