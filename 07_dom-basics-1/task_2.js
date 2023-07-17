let studentObj={
  name: 'Игорь',
  age: 17
 };


 function createStudentCard(obj) {
  let div = document.createElement("div");
  let title = document.createElement("h2");
  title.textContent = `${obj.name}`;
  let text = document.createElement("span");
  text.textContent = `Возраст: ${obj.age} лет`;

  div.append(title);
  div.append(text);
  return div;
}

document.body.append(createStudentCard(studentObj));


