let allStudents=[
  {name: 'Валя', age: 11},
  {name: 'Таня',age: 24},
  {name: 'Рома',age: 21},
  {name: 'Надя', age: 34},
  {name: 'Антон', age: 7}
 ]

function createStudentsList(listArr) {

  let list = document.createElement('ul');
  document.body.append(list);
  for ( i = 0; i < listArr.length; i++) {
    let arrayIndex = listArr[i];
    let listItem = document.createElement('li');
    let title = document.createElement('h2');
    let text = document.createElement('span');
  title.textContent = `${arrayIndex.name}`
  text.textContent = `Возраст: ${arrayIndex.age} лет`

  // Стили
  listItem.style = "border: 10px solid #778899; padding: 10px 15px;"
  title.style = "display: flex; flex-direction: column; padding: 0;"

  // Создание
  list.append(listItem)
  listItem.append(title);
  listItem.append(text);
  }
  // Стили элементов, заданых вне цикла
  list.style = "display: flex; flex-direction: column; gap: 20px; list-style: none; color: #fff; text-align: center;";
  document.body.style = "background-color: #7B68EE";

}


createStudentsList(allStudents);
