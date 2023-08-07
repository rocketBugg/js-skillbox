function createStudentCard(name , age) {
  let div = document.createElement("div");
  let title = document.createElement("h2");
  title.textContent = `${name}`;
  let text = document.createElement("span");
  text.textContent = `Возраст: ${age} лет`;
  div.append(title);
  div.append(text);
  return div;
}

document.body.append(createStudentCard('Игорь', 17));


// let div = document.createElement("div");
// let name = document.createElement("h2");
// let age = document.createElement("span")

// name.textContent = 'name';
// age.textContent = 'Возраст: age';

//

