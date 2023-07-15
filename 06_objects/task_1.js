// Обязательная часть задания
let user1={
  name: 'Игорь',
  age: 99
}

let user2={
  name: 'Оля',
  age: 1
}

function getOlderUser(userOne, userTwo){
  if (user1.age > user2.age){
    return user1.name
  }
  else
    return user2.name;
}

let result = getOlderUser(user1, user2)
console.log('Старший пользователь:',result);


// // Не обязательная часть задания
let allUsers=[
  {
    name: 'Валя',
    age: 11
  },
  {
    name: 'Таня',
    age: 24
  },
  {
    name: 'Рома',
    age: 21
  },
  {
    name: 'Надя',
    age: 34
  },
  {
    name: 'Антон',
    age: 7
  }
]

function getOlderUserArray(usersArray){
let maxId = 0;
let max = usersArray[0].age;
for (i = 1; i < usersArray.length; i++) {
  if (usersArray[i].age > max) {
    max = usersArray[i].age;
    maxId = i;
  }
}
return usersArray[maxId].name;
}

let result2 = getOlderUserArray(allUsers)
console.log('Старший пользователь:',result2);
